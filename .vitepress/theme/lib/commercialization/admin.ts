export interface Money {
  currency: string
  amountMinor: number
}

export interface AdminBillingAccount {
  accountId: string
  balance: {
    accountId: string
    available: Money
    reserved: Money
  }
  paidCashMinor: number
  refundedCashMinor: number
  latestPaymentAt?: string
}

export interface AdminBillingOrder {
  orderId: string
  accountId: string
  provider: 'waffo' | 'paypal'
  providerOrderId?: string
  status: 'pending' | 'completed' | 'failed'
  cashAmount: Money
  providerPaidTotalMinor?: number
  refundedCashMinor: number
  createdAt: string
  updatedAt: string
}

export interface AdminLedgerEntry {
  ledgerEntryId: string
  accountId: string
  kind: string
  amount: Money
  occurredAt: string
  referenceId: string
}

export interface AdminSubscription {
  subscriptionId: string
  accountId: string
  status: string
  currentPeriodStartedAt: string
  currentPeriodEndsAt: string
  planId?: string
  cancelAtPeriodEnd?: true
}

export interface AdminAllowance {
  accountId: string
  aiUnits: {
    included: number
    consumed: number
    remaining: number
    meteringStatus: 'not_configured' | 'active'
  }
  turnEgressBytes: {
    included: number
    consumed: number
    remaining: number
    meteringStatus: 'not_configured' | 'active'
  }
}

export interface AdminBillingOverview {
  generatedAt: string
  accounts: AdminBillingAccount[]
  orders: AdminBillingOrder[]
  ledger: AdminLedgerEntry[]
  plusSubscriptions: AdminSubscription[]
  sharedHostingSubscriptions: AdminSubscription[]
  allowances: AdminAllowance[]
}

export interface AdminAuditEvent {
  eventId: string
  actor: { type: string; id: string }
  action: string
  resourceType: string
  resourceId: string
  occurredAt: string
}

export interface AdminAccount {
  accountId: string
  status: string
  createdAt: string
  deletionEffectiveAt?: string
  identities: Array<{
    provider: string
    displayName?: string
    email?: string
    linkedBy: string
    linkedAt: string
  }>
}

export class AdminApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: string,
  ) {
    super(message)
    this.name = 'AdminApiError'
  }
}

export class AdminApiClient {
  constructor(
    private readonly baseUrl: string,
    private readonly accessToken: string,
    private readonly fetchImplementation = globalThis.fetch.bind(globalThis),
  ) {}

  billingOverview() {
    return this.read<AdminBillingOverview>('/v1/admin/billing/overview')
  }

  account(accountId: string) {
    return this.read<AdminAccount>(
      `/v1/admin/accounts/${encodeURIComponent(accountId)}`,
    )
  }

  accounts(query: string) {
    return this.read<{ items: AdminAccount[] }>(
      `/v1/admin/accounts?query=${encodeURIComponent(query)}`,
    )
  }

  auditEvents() {
    return this.read<{ items: AdminAuditEvent[] }>('/v1/admin/audit-events')
  }

  reconciliation() {
    return this.read<Record<string, unknown>>('/v1/admin/reconciliation')
  }

  private async read<T>(path: string): Promise<T> {
    const response = await this.fetchImplementation(
      `${this.baseUrl.replace(/\/+$/, '')}${path}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.accessToken}`,
        },
      },
    )
    const body = await response.json().catch(() => undefined) as
      | { error?: string; message?: string }
      | undefined
    if (!response.ok) {
      throw new AdminApiError(
        body?.message || body?.error || `Admin API returned ${response.status}.`,
        response.status,
        body?.error,
      )
    }
    return body as T
  }
}
