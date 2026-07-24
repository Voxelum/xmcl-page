import { reactive } from 'vue'

export type OAuthProvider = 'microsoft' | 'modrinth' | 'google' | 'discord'

interface PublicSession {
  sessionId: string
  accountId: string
  accessToken: string
  refreshToken: string
  issuedAt: string
  expiresAt: string
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
  'https://xmcl-web-api.cijhn.workers.dev'
).replace(/\/$/, '')

export const accountSession = reactive({
  initialized: false,
  loading: false,
  session: undefined as PublicSession | undefined,
  account: undefined as Account | undefined,
  identities: [] as Identity[],
  error: undefined as string | undefined,
})

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

function apiError(body: ApiErrorBody | undefined, status: number) {
  return new Error(body?.message || body?.error || `Request failed with HTTP ${status}.`)
}

async function request<T>(path: string, init: RequestInit = {}, accessToken = accountSession.session?.accessToken) {
  const headers = new Headers(init.headers)
  headers.set('Accept', 'application/json')
  if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)
  const response = await fetch(`${apiBaseUrl}${path}`, {
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
    }, undefined)
    setSession(response.session)
    return true
  } catch {
    clearSessionState()
    return false
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

export async function initializeAccountSession() {
  if (typeof window === 'undefined' || accountSession.loading) return
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
    } catch {
      if (!(await refreshSession())) return
      await loadAccount()
    }
  } catch (error) {
    accountSession.error = error instanceof Error ? error.message : 'Unable to load your XMCL account.'
  } finally {
    accountSession.initialized = true
    accountSession.loading = false
  }
}

export async function beginWebSignIn(provider: OAuthProvider, returnUrl: string) {
  const state = randomValue()
  const codeVerifier = randomValue()
  const redirectUri = new URL('/oauth/callback', window.location.origin).toString()
  const query = new URLSearchParams({
    redirectUri,
    state,
    codeChallenge: await sha256(codeVerifier),
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
  } satisfies PendingAuthorization))
  window.location.assign(authorization.authorizationUrl)
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
