export interface DpopSession {
  accessToken: string
  tokenType?: string
  cnf?: {
    jkt?: string
  }
}

export interface DpopKeyMaterial {
  privateKey: CryptoKey
  publicJwk: JsonWebKey
}

const databaseName = 'xmcl-dpop/v1'
const storeName = 'keys'
const keyId = 'account'

let keyMaterialPromise: Promise<DpopKeyMaterial> | undefined

function openDatabase() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(databaseName, 1)
    request.onupgradeneeded = () => {
      request.result.createObjectStore(storeName)
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error ?? new Error('Unable to open DPoP key storage.'))
  })
}

async function readKeyMaterial() {
  const database = await openDatabase()
  try {
    return await new Promise<DpopKeyMaterial | undefined>((resolve, reject) => {
      const request = database.transaction(storeName, 'readonly').objectStore(storeName).get(keyId)
      request.onsuccess = () => resolve(request.result as DpopKeyMaterial | undefined)
      request.onerror = () => reject(request.error ?? new Error('Unable to read the DPoP key.'))
    })
  } finally {
    database.close()
  }
}

async function writeKeyMaterial(material: DpopKeyMaterial) {
  const database = await openDatabase()
  try {
    await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(storeName, 'readwrite')
      transaction.objectStore(storeName).put(material, keyId)
      transaction.oncomplete = () => resolve()
      transaction.onerror = () => reject(transaction.error ?? new Error('Unable to store the DPoP key.'))
      transaction.onabort = () => reject(transaction.error ?? new Error('Unable to store the DPoP key.'))
    })
  } finally {
    database.close()
  }
}

async function createKeyMaterial(): Promise<DpopKeyMaterial> {
  if (typeof indexedDB === 'undefined' || !globalThis.crypto?.subtle) {
    throw new Error('This browser does not support DPoP key storage.')
  }
  let keyPair: CryptoKeyPair | undefined
  let privateJwk: JsonWebKey | undefined
  try {
    keyPair = await globalThis.crypto.subtle.generateKey(
      { name: 'ECDSA', namedCurve: 'P-256' },
      true,
      ['sign', 'verify'],
    ) as CryptoKeyPair
    const publicJwk = await globalThis.crypto.subtle.exportKey('jwk', keyPair.publicKey)
    privateJwk = await globalThis.crypto.subtle.exportKey('jwk', keyPair.privateKey)
    const privateKey = await globalThis.crypto.subtle.importKey(
      'jwk',
      privateJwk,
      { name: 'ECDSA', namedCurve: 'P-256' },
      false,
      ['sign'],
    )
    return { privateKey, publicJwk }
  } finally {
    privateJwk = undefined
    keyPair = undefined
  }
}

export function ensureDpopKeyMaterial() {
  if (!keyMaterialPromise) {
    keyMaterialPromise = readKeyMaterial().then(async (stored) => {
      if (stored?.privateKey && stored.publicJwk) return stored
      const created = await createKeyMaterial()
      await writeKeyMaterial(created)
      return created
    }).catch((error) => {
      keyMaterialPromise = undefined
      throw error
    })
  }
  return keyMaterialPromise
}

export async function getDpopPublicJwk() {
  return (await ensureDpopKeyMaterial()).publicJwk
}

export function sameDpopPublicJwk(left: JsonWebKey, right: JsonWebKey | undefined) {
  if (!right) return false
  return left.kty === right.kty
    && left.crv === right.crv
    && left.x === right.x
    && left.y === right.y
}

export function isDpopSession(session: DpopSession | undefined) {
  return Boolean(session?.accessToken && (session.tokenType === 'DPoP' || session.cnf?.jkt))
}

function base64Url(value: Uint8Array | string) {
  const bytes = typeof value === 'string' ? new TextEncoder().encode(value) : value
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '')
}

function randomUuid() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  const bytes = globalThis.crypto.getRandomValues(new Uint8Array(16))
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

export async function createDpopProof(options: {
  method: string
  url: string
  accessToken?: string
}) {
  const material = await ensureDpopKeyMaterial()
  const target = new URL(options.url)
  target.search = ''
  target.hash = ''
  const header = {
    typ: 'dpop+jwt',
    alg: 'ES256',
    jwk: material.publicJwk,
  }
  const payload: Record<string, string | number> = {
    jti: randomUuid(),
    htm: options.method.toUpperCase(),
    htu: target.toString(),
    iat: Math.floor(Date.now() / 1000),
  }
  if (options.accessToken) {
    const digest = await globalThis.crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(options.accessToken),
    )
    payload.ath = base64Url(new Uint8Array(digest))
  }
  const encodedHeader = base64Url(JSON.stringify(header))
  const encodedPayload = base64Url(JSON.stringify(payload))
  const signingInput = `${encodedHeader}.${encodedPayload}`
  const signature = await globalThis.crypto.subtle.sign(
    { name: 'ECDSA', hash: 'SHA-256' },
    material.privateKey,
    new TextEncoder().encode(signingInput),
  )
  return `${signingInput}.${base64Url(new Uint8Array(signature))}`
}
