import type { WaffoOrder } from './billing'

export interface BillingFixture {
  title: string
  status: 'pending' | 'cancelled' | 'refunded' | 'disputed' | 'provider_failure' | 'unauthorized' | 'conflict'
  detail: string
}

export const billingFixtures: BillingFixture[] = [
  { title: 'Pending confirmation', status: 'pending', detail: 'Waffo checkout was returned; wait for the server-confirmed order state.' },
  { title: 'Cancelled checkout', status: 'cancelled', detail: 'No cash balance is credited when checkout is cancelled.' },
  { title: 'Refunded payment', status: 'refunded', detail: 'A completed payment can later show its server-confirmed refund state.' },
  { title: 'Payment dispute', status: 'disputed', detail: 'A dispute is shown as an order state; do not infer a balance change locally.' },
  { title: 'Provider failure', status: 'provider_failure', detail: 'A temporary provider failure is safe to retry with the same idempotency key.' },
  { title: 'Unauthorized', status: 'unauthorized', detail: 'HTTP 401 means a session is required before billing data is shown.' },
  { title: 'Stale-state conflict', status: 'conflict', detail: 'HTTP 409 means the service rejected a stale or mismatched operation.' },
]

export const billingPendingOrderFixture: WaffoOrder = {
  orderId: 'order-fixture-pending',
  status: 'pending',
  cashAmount: { currency: 'USD', amountMinor: 1000 },
  createdAt: '2026-07-22T10:00:00Z',
  updatedAt: '2026-07-22T10:01:00Z',
}
