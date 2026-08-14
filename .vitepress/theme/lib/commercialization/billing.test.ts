import assert from 'node:assert/strict'
import test from 'node:test'
import { BillingApiClient, formatIsoMoney } from './billing'

test('Billing client authenticates reads and retains the idempotency key across a retry', async () => {
  const requests: RequestInit[] = []
  const api = new BillingApiClient({
    baseUrl: 'https://billing.example.test',
    getSessionBearer: () => 'session-token',
    createRequestId: (() => {
      let index = 0
      return () => `request-${++index}`
    })(),
    createIdempotencyKey: () => 'intent-1',
    fetch: async (_url, init) => {
      requests.push(init ?? {})
      if (requests.length === 1) {
        return new Response(JSON.stringify({ error: 'payment_provider_unavailable', message: 'Retry me.' }), { status: 503 })
      }
      return new Response(JSON.stringify({
        orderId: 'order-1',
        status: 'approval_required',
        cashAmount: { currency: 'USD', amountMinor: 1000 },
        approvalUrl: 'https://pancake.waffo.ai/store/xmcl/checkout/order-1',
        createdAt: '2026-07-22T10:00:00Z',
        updatedAt: '2026-07-22T10:00:00Z',
      }), { status: 200 })
    },
  })

  const order = await api.createWaffoOrder({ cashAmount: { currency: 'USD', amountMinor: 1000 } })
  assert.equal(order.orderId, 'order-1')
  assert.equal(requests.length, 2)
  assert.equal(new Headers(requests[0].headers).get('Authorization'), 'Bearer session-token')
  assert.equal(new Headers(requests[0].headers).get('Idempotency-Key'), 'intent-1')
  assert.equal(new Headers(requests[1].headers).get('Idempotency-Key'), 'intent-1')
  assert.equal(requests[0].body, JSON.stringify({ amountMinor: 1000 }))
  assert.deepEqual(
    [new Headers(requests[0].headers).get('X-Request-Id'), new Headers(requests[1].headers).get('X-Request-Id')],
    ['request-1', 'request-2'],
  )
})

test('Billing money formatting uses ISO currency minor units', () => {
  assert.equal(formatIsoMoney({ currency: 'USD', amountMinor: 1234 }, 'en-US'), '$12.34')
  assert.equal(formatIsoMoney({ currency: 'JPY', amountMinor: 1234 }, 'en-US'), '¥1,234')
})

test('Billing client sends a fresh DPoP proof for a DPoP-bound session', async () => {
  let proofOptions: { method: string; url: string; accessToken?: string } | undefined
  const api = new BillingApiClient({
    baseUrl: 'https://billing.example.test',
    getSession: () => ({
      accessToken: 'dpop-session-token',
      tokenType: 'DPoP',
      cnf: { jkt: 'browser-key-thumbprint' },
    }),
    createDpopProof: async (options) => {
      proofOptions = options
      return 'signed-dpop-proof'
    },
    fetch: async (_url, init) => {
      const headers = new Headers(init?.headers)
      assert.equal(headers.get('Authorization'), 'DPoP dpop-session-token')
      assert.equal(headers.get('DPoP'), 'signed-dpop-proof')
      return new Response(JSON.stringify({
        accountId: 'account-1',
        available: { currency: 'USD', amountMinor: 0 },
        reserved: { currency: 'USD', amountMinor: 0 },
      }), { status: 200 })
    },
  })

  await api.getBalance()
  assert.deepEqual(proofOptions, {
    method: 'GET',
    url: 'https://billing.example.test/v1/billing/balance',
    accessToken: 'dpop-session-token',
  })
})

test('Billing client refreshes an invalid access token and retries with the new session', async () => {
  const authorization: string[] = []
  let refreshes = 0
  const api = new BillingApiClient({
    baseUrl: 'https://billing.example.test',
    getSession: () => ({
      accessToken: 'stale-token',
      tokenType: 'DPoP',
      cnf: { jkt: 'browser-key-thumbprint' },
    }),
    refreshSession: async () => {
      refreshes += 1
      return {
        accessToken: 'refreshed-token',
        tokenType: 'DPoP',
        cnf: { jkt: 'browser-key-thumbprint' },
      }
    },
    createDpopProof: async () => 'signed-dpop-proof',
    fetch: async (_url, init) => {
      authorization.push(new Headers(init?.headers).get('Authorization') ?? '')
      if (authorization.length === 1) {
        return new Response(JSON.stringify({ error: 'invalid_access_token' }), { status: 401 })
      }
      return new Response(JSON.stringify({
        accountId: 'account-1',
        available: { currency: 'USD', amountMinor: 0 },
        reserved: { currency: 'USD', amountMinor: 0 },
      }), { status: 200 })
    },
  })

  await api.getBalance()

  assert.equal(refreshes, 1)
  assert.deepEqual(authorization, ['DPoP stale-token', 'DPoP refreshed-token'])
})

test('Billing client reads plans and sends idempotent subscription mutations', async () => {
  const requests: Array<{ url: string; init: RequestInit }> = []
  const api = new BillingApiClient({
    baseUrl: 'https://billing.example.test',
    getSessionBearer: () => 'session-token',
    createIdempotencyKey: (() => {
      let index = 0
      return () => `subscription-intent-${++index}`
    })(),
    fetch: async (url, init) => {
      requests.push({ url: String(url), init: init ?? {} })
      return new Response(JSON.stringify(
        String(url).endsWith('/plans')
          ? []
          : {
              subscriptionId: 'subscription-1',
              planId: 'shared-small',
              status: 'active',
              currentPeriodStartedAt: '2026-08-11T00:00:00.000Z',
              currentPeriodEndsAt: '2026-09-11T00:00:00.000Z',
              createdAt: '2026-08-11T00:00:00.000Z',
              updatedAt: '2026-08-11T00:00:00.000Z',
              plan: {},
            },
      ), { status: 200 })
    },
  })

  await api.getSharedHostingPlans()
  await api.getSharedHostingRegions()
  await api.createSharedHostingSubscription('shared-small', 'nrt')
  await api.cancelSharedHostingSubscription('subscription-1')
  await api.listSharedHostingServices()
  await api.startSharedHostingService('service-1')
  await api.stopSharedHostingService('service-1')

  assert.equal(requests[0].url, 'https://billing.example.test/v1/shared-hosting/plans')
  assert.equal(requests[1].url, 'https://billing.example.test/v1/shared-hosting/regions')
  assert.equal(requests[2].init.body, JSON.stringify({ planId: 'shared-small', regionId: 'nrt' }))
  assert.equal(new Headers(requests[2].init.headers).get('Idempotency-Key'), 'subscription-intent-1')
  assert.equal(
    requests[3].url,
    'https://billing.example.test/v1/shared-hosting/subscriptions/subscription-1/cancel',
  )
  assert.equal(new Headers(requests[3].init.headers).get('Idempotency-Key'), 'subscription-intent-2')
  assert.equal(requests[4].url, 'https://billing.example.test/v1/shared-hosting/services')
  assert.equal(
    requests[5].url,
    'https://billing.example.test/v1/shared-hosting/services/service-1/start',
  )
  assert.equal(new Headers(requests[5].init.headers).get('Idempotency-Key'), 'subscription-intent-3')
  assert.equal(
    requests[6].url,
    'https://billing.example.test/v1/shared-hosting/services/service-1/stop',
  )
  assert.equal(new Headers(requests[6].init.headers).get('Idempotency-Key'), 'subscription-intent-4')
})

test('Billing client preserves the service base path in requests and DPoP proofs', async () => {
  const requests: string[] = []
  const proofs: Array<{ method: string; url: string; accessToken?: string }> = []
  const api = new BillingApiClient({
    baseUrl: 'https://billing.example.test',
    sharedHostingServiceBaseUrl: 'https://services.example.test/api',
    getSession: () => ({
      accessToken: 'dpop-session-token',
      tokenType: 'DPoP',
      cnf: { jkt: 'browser-key-thumbprint' },
    }),
    createDpopProof: async (options) => {
      proofs.push(options)
      return 'signed-dpop-proof'
    },
    fetch: async (url) => {
      requests.push(String(url))
      return new Response(JSON.stringify([]), { status: 200 })
    },
  })

  await api.listSharedHostingServices()

  assert.deepEqual(requests, [
    'https://services.example.test/api/v1/shared-hosting/services',
  ])
  assert.deepEqual(proofs, [{
    method: 'GET',
    url: 'https://services.example.test/api/v1/shared-hosting/services',
    accessToken: 'dpop-session-token',
  }])
})

test('Billing client reads and mutates XMCL Plus with idempotency', async () => {
  const requests: Array<{ url: string; init: RequestInit }> = []
  const api = new BillingApiClient({
    baseUrl: 'https://billing.example.test',
    getSessionBearer: () => 'session-token',
    createIdempotencyKey: () => 'plus-intent-1',
    fetch: async (url, init) => {
      requests.push({ url: String(url), init: init ?? {} })
      return new Response(JSON.stringify(null), { status: 200 })
    },
  })

  await api.getXmclPlusOffer()
  await api.getXmclPlusStatus()
  await api.getXmclPlusAllowances()
  await api.subscribeXmclPlus()
  await api.cancelXmclPlus()

  assert.deepEqual(requests.map(request => request.url), [
    'https://billing.example.test/v1/xmcl-plus/offer',
    'https://billing.example.test/v1/xmcl-plus/status',
    'https://billing.example.test/v1/xmcl-plus/allowances',
    'https://billing.example.test/v1/xmcl-plus/subscribe',
    'https://billing.example.test/v1/xmcl-plus/cancel',
  ])
  assert.equal(new Headers(requests[3].init.headers).get('Idempotency-Key'), 'plus-intent-1')
  assert.equal(new Headers(requests[4].init.headers).get('Idempotency-Key'), 'plus-intent-1')
})
