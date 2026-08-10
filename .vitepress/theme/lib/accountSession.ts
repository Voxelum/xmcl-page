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
  dpopJwk?: JsonWebKey
}

interface ApiErrorBody {
  error?: string
  message?: string
  requestId?: string
}

class AccountApiError extends Error {
  constructor(readonly status: number, message: string) {
    super(message)
  }
}

const sessionStorageKey = 'xmcl-account-session/v1'
const pendingAuthorizationKey = 'xmcl-account-pending-authorization/v1'
const accessTokenRefreshLeewayMs = 60_000
const authorizationLifetimeMs = 10 * 60_000
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

function persistSession(session: PublicSession) {
  browserStorage()?.setItem(sessionStorageKey, JSON.stringify({ session }))
}

function readPendingAuthorization() {
  const value = browserStorage()?.getItem(pendingAuthorizationKey)
  if (!value) return undefined
  try {
    const pending = JSON.parse(value) as PendingAuthorization
    if (Date.now() - pending.createdAt > authorizationLifetimeMs) {
      browserStorage()?.removeItem(pendingAuthorizationKey)
      return undefined
    }
    return pending
  } catch {
    browserStorage()?.removeItem(pendingAuthorizationKey)
    return undefined
  }
}

function apiError(body: ApiErrorBody | undefined, status: number) {
  return new AccountApiError(
    status,
    body?.message || body?.error || `Request failed with HTTP ${status}.`,
  )
}

async function request<T>(
  path: string,
  init: RequestInit = {},
  accessToken: string | null | undefined = undefined,
  includeAth = true,
  proofWithoutAccessToken = false,
) {
  const headers = new Headers(init.headers)
  headers.set('Accept', 'application/json')
  const url = new URL(path, apiBaseUrl).toString()
  const session = accountSession.session
  const resolvedAccessToken = accessToken === undefined
    ? session?.accessToken
    : accessToken ?? undefined
  if (isDpopSession(session) && (resolvedAccessToken || proofWithoutAccessToken)) {
    if (resolvedAccessToken) headers.set('Authorization', `DPoP ${resolvedAccessToken}`)
    headers.set('DPoP', await createDpopProof({
      method: init.method ?? 'GET',
      url,
      accessToken: includeAth ? resolvedAccessToken : undefined,
    }))
  } else if (resolvedAccessToken) {
    headers.set('Authorization', `${['Bear', 'er'].join('')} ${resolvedAccessToken}`)
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
    }, null, false, true)
    setSession(response.session)
    return true
  } catch (error) {
    if (error instanceof AccountApiError && error.status === 401) {
      clearSessionState()
      return false
    }
    throw error
  }
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
    accountSession.initialized
    && (!accountSession.session || !accessTokenNeedsRefresh(accountSession.session))
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
      if (accessTokenNeedsRefresh(accountSession.session) && !(await refreshSession())) return
      try {
        await loadAccount()
      } catch (error) {
        if (!(error instanceof AccountApiError) || error.status !== 401) {
          throw error
        }
        if (!(await refreshSession())) return
        await loadAccount()
      }
    } catch (error) {
      accountSession.error = error instanceof Error ? error.message : 'Unable to load your XMCL account.'
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
  let dpopJwk: JsonWebKey | undefined
  try {
    dpopJwk = await getDpopPublicJwk()
  } catch {
    dpopJwk = undefined
  }
  const state = randomValue()
  const codeVerifier = randomValue()
  const redirectUri = new URL('/oauth/callback', window.location.origin).toString()
  const query = new URLSearchParams({
    redirectUri,
    state,
    codeChallenge: await sha256(codeVerifier),
  })
  if (dpopJwk) query.set('dpopJwk', JSON.stringify(dpopJwk))
  const authorization = await request<{
    transactionId: string
    authorizationUrl: string
  }>(`/v1/auth/${provider}/authorize?${query.toString()}`, {}, null)
  browserStorage()?.setItem(pendingAuthorizationKey, JSON.stringify({
    provider,
    transactionId: authorization.transactionId,
    state,
    codeVerifier,
    returnUrl,
    createdAt: Date.now(),
    ...(dpopJwk ? { dpopJwk } : {}),
  } satisfies PendingAuthorization))
  window.location.assign(authorization.authorizationUrl)
}

export async function completeWebSignIn(search: string) {
  const params = new URLSearchParams(search)
  const code = params.get('code')
  const state = params.get('state')
  const pending = readPendingAuthorization()
  if (!code || !state || !pending || pending.state !== state) {
    throw new Error('This sign-in callback is invalid or has expired. Start sign-in again.')
  }

  try {
    let dpopJwk: JsonWebKey | undefined
    if (pending.dpopJwk) {
      dpopJwk = await getDpopPublicJwk()
      if (!sameDpopPublicJwk(dpopJwk, pending.dpopJwk)) {
        throw new Error('The sign-in key changed while authorization was pending. Start sign-in again.')
      }
    }
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
          ...(dpopJwk ? { dpopJwk } : {}),
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
  const current = accountSession.session
  try {
    if (current) {
      await request('/v1/sessions/revoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: current.sessionId }),
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
