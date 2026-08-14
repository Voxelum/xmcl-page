import {
  createDpopProof,
  isDpopSession,
  type DpopSession,
} from '../dpop'

export type BillingUsageResource = 'server_time' | 'ai_request' | 'ai_tokens' | 'storage_retention'
export type BillingMeterUnit = 'second' | 'hour' | 'request' | 'token' | 'byte_second'

export interface Money {
  currency: string
  amountMinor: number
}

export interface BillingBalance {
  accountId: string
  available: Money
  reserved: Money
}

export interface CashRate {
  rateVersion: number
  resource: BillingUsageResource
  unit: BillingMeterUnit
  amountMinorPerUnit: number
  effectiveAt: string
  retiredAt?: string
}

export type WaffoOrderStatus =
  | 'approval_required'
  | 'pending'
  | 'completed'
  | 'cancelled'
  | 'refunded'
  | 'disputed'
  | 'failed'

export interface WaffoOrder {
  orderId: string
  status: WaffoOrderStatus
  cashAmount: Money
  approvalUrl?: string
  createdAt: string
  updatedAt: string
  providerReference?: string
}

export interface LedgerEntry {
  ledgerEntryId: string
  kind:
    | 'waffo_credit'
    | 'reservation'
    | 'reservation_release'
    | 'usage_charge'
    | 'shared_base_fee'
    | 'shared_runtime_fee'
    | 'plus_base_fee'
    | 'refund'
    | 'balance_adjust'
  amount: Money
  occurredAt: string
  referenceId: string
}

export interface UsageSettlement {
  settlementId: string
  usageEventId: string
  rateVersion: number
  charged: Money
  status: 'settled' | 'rejected' | 'pending'
  action: 'continue' | 'stop_required'
}

export interface BillingPage<T> {
  items: T[]
  nextCursor?: string
}

export interface CreateWaffoOrderInput {
  cashAmount: Money
  idempotencyKey?: string
}

export interface SharedHostingPlan {
  planId: 'shared-small' | 'shared-medium' | 'shared-large'
  displayName: string
  memoryMiB: number
  sharedCpu: number
  persistentStorageGiB: number
  monthlyBaseMinor: number
  hourlyRateVersion: number
  hourlyAmountMinor: number
  currency: string
}

export interface SharedHostingSubscription {
  subscriptionId: string
  planId: SharedHostingPlan['planId']
  regionId?: string
  status: 'active' | 'payment_due' | 'cancelled'
  currentPeriodStartedAt: string
  currentPeriodEndsAt: string
  createdAt: string
  updatedAt: string
  cancelAtPeriodEnd?: true
  plan: SharedHostingPlan
}

export interface SharedHostingRegion {
  regionId: string
  city: string
  country: string
  latencyTestUrl: string
}

export interface SharedHostingService {
  serviceId: string
  subscriptionId: string
  planId: SharedHostingPlan['planId']
  regionId?: string
  status: 'pending' | 'ready' | 'queued' | 'starting' | 'running' | 'stopping' | 'payment_due' | 'failed' | 'retained' | 'deleted'
  statusReason?: string
  metrics?: {
    cpuPercent: number
    memoryUsageMiB: number
    memoryLimitMiB: number
    observedAt: string
  }
  workspace: {
    revision: number
    sizeBytes: number
    syncedAt?: string
  }
  retentionStartedAt?: string
  retentionEndsAt?: string
  createdAt: string
  updatedAt: string
}

export interface XmclPlusOffer {
  offerId: 'xmcl-plus'
  displayName: string
  monthlyPriceMinor: number
  aiUnitsPerPeriod: number
  turnEgressBytesPerPeriod: number
  serverAiUnitsPerPeriod: number
  currency: string
  monthlyPrice: Money
}

export interface XmclPlusSubscription {
  subscriptionId: string
  accountId: string
  status: 'active' | 'payment_due' | 'cancelled'
  currentPeriodStartedAt: string
  currentPeriodEndsAt: string
  createdAt: string
  updatedAt: string
  cancelAtPeriodEnd?: true
}

export interface XmclPlusAllowanceSource {
  source: 'plus' | 'shared_hosting'
  referenceId: string
  aiUnits: number
  turnEgressBytes: number
  periodStartedAt: string
  periodEndsAt: string
}

export interface XmclPlusAllowances {
  sources: XmclPlusAllowanceSource[]
  aiUnits: XmclPlusAllowance
  turnEgressBytes: XmclPlusAllowance
}

export interface XmclPlusAllowance {
  included: number
  consumed: number
  remaining: number
  meteringStatus: 'not_configured' | 'active'
}

export interface BillingApi {
  getBalance(): Promise<BillingBalance>
  getRates(): Promise<CashRate[]>
  listOrders(): Promise<BillingPage<WaffoOrder>>
  getOrder(orderId: string): Promise<WaffoOrder>
  listLedger(): Promise<BillingPage<LedgerEntry>>
  listUsage(): Promise<BillingPage<UsageSettlement>>
  createWaffoOrder(input: CreateWaffoOrderInput): Promise<WaffoOrder>
  getSharedHostingPlans(): Promise<SharedHostingPlan[]>
  getSharedHostingRegions(): Promise<SharedHostingRegion[]>
  listSharedHostingSubscriptions(): Promise<SharedHostingSubscription[]>
  createSharedHostingSubscription(planId: SharedHostingPlan['planId'], regionId: string): Promise<SharedHostingSubscription>
  cancelSharedHostingSubscription(subscriptionId: string): Promise<SharedHostingSubscription>
  listSharedHostingServices(): Promise<SharedHostingService[]>
  createSharedHostingService(subscriptionId: string): Promise<SharedHostingService>
  startSharedHostingService(serviceId: string): Promise<SharedHostingService>
  stopSharedHostingService(serviceId: string): Promise<SharedHostingService>
  getXmclPlusOffer(): Promise<XmclPlusOffer>
  getXmclPlusStatus(): Promise<XmclPlusSubscription | null>
  getXmclPlusAllowances(): Promise<XmclPlusAllowances>
  subscribeXmclPlus(): Promise<XmclPlusSubscription>
  cancelXmclPlus(): Promise<XmclPlusSubscription>
}

export class BillingApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: string,
    readonly requestId?: string,
  ) {
    super(message)
    this.name = 'BillingApiError'
  }
}

export interface BillingApiOptions {
  baseUrl: string
  sharedHostingServiceBaseUrl?: string
  getSessionBearer?: () => string | undefined | Promise<string | undefined>
  getSession?: () => DpopSession | undefined | Promise<DpopSession | undefined>
  refreshSession?: () => DpopSession | undefined | Promise<DpopSession | undefined>
  fetch?: typeof globalThis.fetch
  createRequestId?: () => string
  createIdempotencyKey?: () => string
  createDpopProof?: typeof createDpopProof
  retryAttempts?: number
}

/**
 * Browser-only Billing adapter. The public billing routes below are a page-local
 * proposal until a billing API contract is published; shared v1 does not define them.
 */
export class BillingApiClient implements BillingApi {
  private readonly fetchImplementation: typeof globalThis.fetch
  private readonly retryAttempts: number
  private readonly createRequestId: () => string
  private readonly createIdempotencyKey: () => string
  private readonly createProof: typeof createDpopProof

  constructor(private readonly options: BillingApiOptions) {
    this.fetchImplementation = options.fetch ?? globalThis.fetch.bind(globalThis)
    this.retryAttempts = options.retryAttempts ?? 1
    this.createRequestId = options.createRequestId ?? createBrowserId
    this.createIdempotencyKey = options.createIdempotencyKey ?? createBrowserId
    this.createProof = options.createDpopProof ?? createDpopProof
  }

  getBalance() {
    return this.read<BillingBalance>('/v1/billing/balance')
  }

  getRates() {
    return this.read<CashRate[]>('/v1/billing/rates')
  }

  listOrders() {
    return this.read<WaffoOrder[] | BillingPage<WaffoOrder>>('/v1/billing/orders')
      .then((result) => Array.isArray(result) ? { items: result } : result)
  }

  getOrder(orderId: string) {
    return this.read<WaffoOrder>(`/v1/billing/orders/${encodeURIComponent(orderId)}`)
  }

  listLedger() {
    return this.read<BillingPage<LedgerEntry>>('/v1/billing/ledger')
  }

  listUsage() {
    return this.read<BillingPage<UsageSettlement>>('/v1/billing/usage')
  }

  createWaffoOrder(input: CreateWaffoOrderInput) {
    assertMoney(input.cashAmount)
    if (input.cashAmount.amountMinor < 1) throw new Error('A Waffo top-up amount must be positive.')

    // This key represents the user intent, not an individual network attempt.
    const idempotencyKey = input.idempotencyKey ?? this.createIdempotencyKey()
    return this.request<WaffoOrder>('/v1/billing/waffo/orders', {
      method: 'POST',
      body: JSON.stringify({ amountMinor: input.cashAmount.amountMinor }),
      idempotencyKey,
    })
  }

  getSharedHostingPlans() {
    return this.read<SharedHostingPlan[]>('/v1/shared-hosting/plans')
  }

  getSharedHostingRegions() {
    return this.read<SharedHostingRegion[]>('/v1/shared-hosting/regions')
  }

  listSharedHostingSubscriptions() {
    return this.read<SharedHostingSubscription[]>('/v1/shared-hosting/subscriptions')
  }

  createSharedHostingSubscription(planId: SharedHostingPlan['planId'], regionId: string) {
    return this.request<SharedHostingSubscription>('/v1/shared-hosting/subscriptions', {
      method: 'POST',
      body: JSON.stringify({ planId, regionId }),
      idempotencyKey: this.createIdempotencyKey(),
    })
  }

  cancelSharedHostingSubscription(subscriptionId: string) {
    return this.request<SharedHostingSubscription>(
      `/v1/shared-hosting/subscriptions/${encodeURIComponent(subscriptionId)}/cancel`,
      {
        method: 'POST',
        idempotencyKey: this.createIdempotencyKey(),
      },
    )
  }

  listSharedHostingServices() {
    return this.read<SharedHostingService[]>(
      '/v1/shared-hosting/services',
      this.options.sharedHostingServiceBaseUrl,
    )
  }

  createSharedHostingService(subscriptionId: string) {
    return this.request<SharedHostingService>(
      '/v1/shared-hosting/services',
      {
        method: 'POST',
        body: JSON.stringify({ subscriptionId }),
        idempotencyKey: `subscription:${subscriptionId}`,
        baseUrl: this.options.sharedHostingServiceBaseUrl,
      },
    )
  }

  startSharedHostingService(serviceId: string) {
    return this.sharedHostingServiceOperation(serviceId, 'start')
  }

  stopSharedHostingService(serviceId: string) {
    return this.sharedHostingServiceOperation(serviceId, 'stop')
  }

  private sharedHostingServiceOperation(serviceId: string, operation: 'start' | 'stop') {
    return this.request<SharedHostingService>(
      `/v1/shared-hosting/services/${encodeURIComponent(serviceId)}/${operation}`,
      {
        method: 'POST',
        idempotencyKey: this.createIdempotencyKey(),
        baseUrl: this.options.sharedHostingServiceBaseUrl,
      },
    )
  }

  getXmclPlusOffer() {
    return this.read<XmclPlusOffer>('/v1/xmcl-plus/offer')
  }

  getXmclPlusStatus() {
    return this.read<XmclPlusSubscription | null>('/v1/xmcl-plus/status')
  }

  getXmclPlusAllowances() {
    return this.read<XmclPlusAllowances>('/v1/xmcl-plus/allowances')
  }

  subscribeXmclPlus() {
    return this.request<XmclPlusSubscription>('/v1/xmcl-plus/subscribe', {
      method: 'POST',
      idempotencyKey: this.createIdempotencyKey(),
    })
  }

  cancelXmclPlus() {
    return this.request<XmclPlusSubscription>('/v1/xmcl-plus/cancel', {
      method: 'POST',
      idempotencyKey: this.createIdempotencyKey(),
    })
  }

  private read<T>(path: string, baseUrl?: string) {
    return this.request<T>(path, { method: 'GET', baseUrl })
  }

  private async request<T>(path: string, init: { method: 'GET' | 'POST'; body?: string; idempotencyKey?: string; baseUrl?: string }): Promise<T> {
    const bearer = this.options.getSession
      ? undefined
      : await this.options.getSessionBearer?.()
    let session: DpopSession | undefined = this.options.getSession
      ? await this.options.getSession()
      : bearer
        ? { accessToken: bearer }
        : undefined
    if (!session?.accessToken) {
      throw new BillingApiError('Sign in to view billing information.', 401, 'authentication_required')
    }
    const targetUrl = resolveApiUrl(init.baseUrl ?? this.options.baseUrl, path)

    let lastError: BillingApiError | undefined
    let refreshedSession = false
    for (let attempt = 0; attempt <= this.retryAttempts; attempt += 1) {
      try {
        const headers: Record<string, string> = {
          Accept: 'application/json',
          'X-Request-Id': this.createRequestId(),
        }
        if (isDpopSession(session)) {
          headers.Authorization = `DPoP ${session.accessToken}`
          headers.DPoP = await this.createProof({
            method: init.method,
            url: targetUrl,
            accessToken: session.accessToken,
          })
        } else {
          headers.Authorization = `${['Bear', 'er'].join('')} ${session.accessToken}`
        }
        if (init.body) headers['Content-Type'] = 'application/json'
        if (init.idempotencyKey) headers['Idempotency-Key'] = init.idempotencyKey

        const response = await this.fetchImplementation(targetUrl, {
          method: init.method,
          headers,
          body: init.body,
        })
        if (response.ok) return await response.json() as T

        const error = await parseApiError(response)
        if (
          !refreshedSession &&
          this.options.refreshSession &&
          error.status === 401 &&
          (error.code === 'invalid_access_token' || error.code === 'access_token_expired')
        ) {
          refreshedSession = true
          const refreshed = await this.options.refreshSession()
          if (refreshed?.accessToken) {
            session = refreshed
            attempt -= 1
            continue
          }
        }
        lastError = error
        if (!isRetryable(response.status) || attempt === this.retryAttempts) throw error
      } catch (error) {
        if (error instanceof BillingApiError) {
          if (!isRetryable(error.status) || attempt === this.retryAttempts) throw error
          lastError = error
        } else if (attempt === this.retryAttempts) {
          throw new BillingApiError('The billing service could not be reached.', 0, 'network_error')
        }
      }
    }
    throw lastError ?? new BillingApiError('The billing service could not be reached.', 0, 'network_error')
  }
}

function resolveApiUrl(baseUrl: string, path: string) {
  return new URL(path.replace(/^\/+/, ''), `${baseUrl.replace(/\/+$/, '')}/`).toString()
}

export function formatIsoMoney(money: Money, locale = 'en-US') {
  assertMoney(money)
  const fractionDigits = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: money.currency,
  }).resolvedOptions().maximumFractionDigits ?? 2
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: money.currency,
  }).format(money.amountMinor / 10 ** fractionDigits)
}

function assertMoney(money: Money) {
  if (!/^[A-Z]{3}$/.test(money.currency) || !Number.isSafeInteger(money.amountMinor)) {
    throw new Error('Money must use an ISO 4217 currency and a safe integer amountMinor.')
  }
}

function createBrowserId() {
  return globalThis.crypto?.randomUUID?.() ?? `billing-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function isRetryable(status: number) {
  return status === 0 || status === 429 || status === 502 || status === 503 || status === 504
}

async function parseApiError(response: Response) {
  let payload: { error?: string; message?: string; requestId?: string } | undefined
  try {
    payload = await response.json() as typeof payload
  } catch {
    // A proxy can return a non-JSON failure body; retain a useful status error.
  }
  return new BillingApiError(
    payload?.message ?? `Billing request failed with HTTP ${response.status}.`,
    response.status,
    payload?.error,
    payload?.requestId,
  )
}
