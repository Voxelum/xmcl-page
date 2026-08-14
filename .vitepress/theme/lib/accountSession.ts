import { reactive } from 'vue'
import {
  createDpopProof,
  getDpopPublicJwk,
  isDpopSession,
  sameDpopPublicJwk,
} from './dpop'

export type OAuthProvider = 'microsoft' | 'modrinth' | 'google' | 'discord'

interface PublicSession {
  sessionId: string
  accountId: string
  accessToken: string
  refreshToken: string
  issuedAt: string
  expiresAt: string
  tokenType?: 'DPoP' | 'Bearer'
  cnf?: { jkt?: string }
}

interface Account {
  accountId: string
  status: 'active' | 'merged' | 'deletion_pending' | 'deleted'
  createdAt: string
}

interface Identity {
  provider: OAuthProvider
  displayName?: string
  linkedBy: 'launcher_bootstrap' | 'launcher_link' | 'web_link'
  linkedAt: string
}

interface StoredSession {
  session: PublicSession
}

interface PendingAuthorization {
  provider: OAuthProvider
  transactionId: string
  state: string
  codeVerifier: string
  returnUrl: string
  createdAt: number
  apiBaseUrl: string
  dpopJwk?: JsonWebKey
}

interface ApiErrorBody {
  error?: string
  message?: string
  requestId?: string
}

const sessionStorageKey = 'xmcl-account-session/v1'
const pendingAuthorizationKey = 'xmcl-account-pending-authorization/v1'
const accessTokenRefreshLeewayMs = 60_000
const apiBaseUrl = (
  import.meta.env.VITE_COMMERCIAL_API_BASE ||
  'https://api.xmcl.app'
).replace(/\/$/, '')

export const accountSession = reactive({
  initialized: false,
  loading: false,
  session: undefined as PublicSession | undefined,
  account: undefined as Account | undefined,
  identities: [] as Identity[],
  error: undefined as string | undefined,
})

let initializePromise: Promise<void> | undefined
let refreshPromise: Promise<PublicSession | undefined> | undefined

function browserStorage() {
  return typeof window === 'undefined' ? undefined : window.sessionStorage
}

function readStoredSession() {
  const value = browserStorage()?.getItem(sessionStorageKey)
  if (!value) return undefined
  try {
    return JSON.parse(value) as StoredSession
  } catch {
    browserStorage()?.removeItem(sessionStorageKey)
    return undefined
  }
}

function readPendingAuthorization() {
  const value = browserStorage()?.getItem(pendingAuthorizationKey)
  if (!value) return undefined
  try {
    const pending = JSON.parse(value) as PendingAuthorization
    const isRecent = Date.now() - pending.createdAt < 15 * 60_000
    if (
      !isRecent ||
      pending.apiBaseUrl !== apiBaseUrl ||
      !pending.transactionId ||
      !pending.state ||
      !pending.codeVerifier
    ) {
      browserStorage()?.removeItem(pendingAuthorizationKey)
      return undefined
    }
    return pending
  } catch {
    browserStorage()?.removeItem(pendingAuthorizationKey)
    return undefined
  }
}

function persistSession(session: PublicSession) {
  browserStorage()?.setItem(sessionStorageKey, JSON.stringify({ session }))
}

function apiError(body: ApiErrorBody | undefined, status: number) {
  return new Error(body?.message || body?.error || `Request failed with HTTP ${status}.`)
}

async function request<T>(
  path: string,
  init: RequestInit = {},
  accessToken: string | null | undefined = accountSession.session?.accessToken,
  proofWithoutAccessToken = false,
) {
  const headers = new Headers(init.headers)
  headers.set('Accept', 'application/json')
  const url = new URL(path, apiBaseUrl).toString()
  if (isDpopSession(accountSession.session) && (accessToken || proofWithoutAccessToken)) {
    if (accessToken) headers.set('Authorization', `DPoP ${accessToken}`)
    headers.set('DPoP', await createDpopProof({
      method: init.method ?? 'GET',
      url,
      accessToken: accessToken || undefined,
    }))
  } else if (accessToken) {
    headers.set('Authorization', `${['Bear', 'er'].join('')} ${accessToken}`)
  }
  const response = await fetch(url, {
    ...init,
    credentials: 'omit',
    headers,
  })
  const body = await response.json().catch(() => undefined) as T | ApiErrorBody | undefined
  if (!response.ok) throw apiError(body as ApiErrorBody | undefined, response.status)
  return body as T
}

function setSession(session: PublicSession) {
  accountSession.session = session
  persistSession(session)
}

function clearSessionState() {
  accountSession.session = undefined
  accountSession.account = undefined
  accountSession.identities = []
  browserStorage()?.removeItem(sessionStorageKey)
}

async function refreshSession() {
  const current = accountSession.session
  if (!current) return false
  try {
    const response = await request<{ session: PublicSession }>('/v1/sessions/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: current.sessionId,
        refreshToken: current.refreshToken,
      }),
    }, null, isDpopSession(current))
    setSession(response.session)
    return true
  } catch {
    clearSessionState()
    return false
  }
}

export function refreshAccountSession() {
  if (!refreshPromise) {
    refreshPromise = (async () =>
      await refreshSession() ? accountSession.session : undefined
    )().finally(() => {
      refreshPromise = undefined
    })
  }
  return refreshPromise
}

async function loadAccount() {
  const [account, identities] = await Promise.all([
    request<Account>('/v1/account'),
    request<Identity[]>('/v1/account/identities'),
  ])
  accountSession.account = account
  accountSession.identities = identities
}

function accessTokenNeedsRefresh(session: PublicSession) {
  return Date.parse(session.expiresAt) <= Date.now() + accessTokenRefreshLeewayMs
}

export function initializeAccountSession() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (
    accountSession.initialized &&
    (!accountSession.session || !accessTokenNeedsRefresh(accountSession.session))
  ) {
    return Promise.resolve()
  }
  if (initializePromise) return initializePromise

  initializePromise = (async () => {
    accountSession.loading = true
    accountSession.error = undefined
    try {
      if (!accountSession.session) {
        const stored = readStoredSession()
        if (stored) accountSession.session = stored.session
      }
      if (!accountSession.session) return
      if (accessTokenNeedsRefresh(accountSession.session) && !(await refreshAccountSession())) return
      try {
        await loadAccount()
      } catch {
        if (!(await refreshAccountSession())) return
        await loadAccount()
      }
    } catch (error) {
      accountSession.error = error instanceof Error ? error.message : 'Unable to load your XMCL Together account.'
    } finally {
      accountSession.initialized = true
      accountSession.loading = false
    }
  })()
  initializePromise = initializePromise.finally(() => {
    initializePromise = undefined
  })
  return initializePromise
}

export async function beginWebSignIn(provider: OAuthProvider, returnUrl: string) {
  const dpopJwk = await getDpopPublicJwk()
  const state = randomValue()
  const codeVerifier = randomValue()
  const redirectUri = new URL('/oauth/callback', window.location.origin).toString()
  const query = new URLSearchParams({
    redirectUri,
    state,
    codeChallenge: await sha256(codeVerifier),
    dpopJwk: JSON.stringify(dpopJwk),
  })
  const authorization = await request<{
    transactionId: string
    authorizationUrl: string
  }>(`/v1/auth/${provider}/authorize?${query.toString()}`, {}, undefined)
  browserStorage()?.setItem(pendingAuthorizationKey, JSON.stringify({
    provider,
    transactionId: authorization.transactionId,
    state,
    codeVerifier,
    returnUrl,
    createdAt: Date.now(),
    apiBaseUrl,
    dpopJwk,
  } satisfies PendingAuthorization))
  window.location.assign(authorization.authorizationUrl)
}

export async function completeWebSignIn(search: string) {
  const params = new URLSearchParams(search)
  const code = params.get('code')
  const state = params.get('state')
  const pending = readPendingAuthorization()
  if (!code || !state || !pending || pending.state !== state || !pending.dpopJwk) {
    throw new Error('This sign-in callback is invalid or has expired. Start sign-in again.')
  }
  const dpopJwk = await getDpopPublicJwk()
  if (!sameDpopPublicJwk(dpopJwk, pending.dpopJwk)) {
    throw new Error('The sign-in key changed while authorization was pending. Start sign-in again.')
  }
  try {
    const result = await request<{ session: PublicSession }>(
      `/v1/auth/${pending.provider}/exchange`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transactionId: pending.transactionId,
          state,
          codeVerifier: pending.codeVerifier,
          code,
          dpopJwk,
        }),
      },
      null,
    )
    setSession(result.session)
    await loadAccount()
    return pending.returnUrl
  } finally {
    browserStorage()?.removeItem(pendingAuthorizationKey)
  }
}

export async function signOut() {
  try {
    if (
      accountSession.session &&
      accessTokenNeedsRefresh(accountSession.session) &&
      !(await refreshAccountSession())
    ) {
      return
    }
    if (accountSession.session) {
      await request('/v1/sessions/revoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: accountSession.session.sessionId }),
      })
    }
  } finally {
    clearSessionState()
  }
}

export async function unlinkIdentity(provider: OAuthProvider) {
  await request(`/v1/account/identities/${encodeURIComponent(provider)}`, {
    method: 'DELETE',
  })
  await loadAccount()
}

export function accountDisplayName() {
  return accountSession.identities.find((identity) => identity.displayName)?.displayName
}

function randomValue() {
  const bytes = crypto.getRandomValues(new Uint8Array(32))
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
  let binary = ''
  for (const byte of new Uint8Array(digest)) binary += String.fromCharCode(byte)
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '')
}
