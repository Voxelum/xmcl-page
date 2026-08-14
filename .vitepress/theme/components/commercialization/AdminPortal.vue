<template>
  <main class="admin-portal">
    <header class="admin-hero">
      <div>
        <p class="eyebrow">XMCL TOGETHER / OPS</p>
        <h1>{{ copy.title }}</h1>
        <p>{{ copy.description }}</p>
      </div>
      <span class="read-only">{{ copy.readOnly }}</span>
    </header>

    <section class="connection">
      <p>{{ accountSession.session ? copy.identityReady : copy.signInRequired }}</p>
      <a v-if="!accountSession.session" :href="accountUrl">{{ copy.signIn }}</a>
      <button v-else type="button" :disabled="loading" @click="connect">
        {{ loading ? copy.loading : copy.reload }}
      </button>
    </section>
    <p class="security-note">{{ copy.security }}</p>

    <section v-if="error" class="error" role="alert">
      <span>{{ error }}</span>
      <a v-if="authenticationError" :href="accountUrl">{{ copy.reauthenticate }}</a>
    </section>

    <template v-if="overview">
      <section class="metrics" aria-label="Billing summary">
        <article>
          <span>{{ copy.accounts }}</span>
          <strong>{{ overview.accounts.length }}</strong>
        </article>
        <article>
          <span>{{ copy.collected }}</span>
          <strong>{{ money(totalCollected) }}</strong>
        </article>
        <article>
          <span>{{ copy.refunded }}</span>
          <strong>{{ money(totalRefunded) }}</strong>
        </article>
        <article>
          <span>{{ copy.available }}</span>
          <strong>{{ money(totalAvailable) }}</strong>
        </article>
      </section>

      <section class="panel account-search">
        <div class="panel-heading">
          <div><p class="eyebrow">{{ copy.support }}</p><h2>{{ copy.lookup }}</h2></div>
          <form @submit.prevent="lookupAccount">
            <input v-model.trim="accountQuery" :placeholder="copy.accountQuery" required spellcheck="false">
            <button type="submit" :disabled="accountLoading">{{ copy.lookupAction }}</button>
          </form>
        </div>
        <div v-if="searchResults.length > 1" class="search-results">
          <button v-for="item in searchResults" :key="item.accountId" type="button" @click="selectAccount(item.accountId)">
            <strong>{{ identityLabel(item) }}</strong>
            <span>{{ item.accountId }}</span>
          </button>
        </div>
        <div v-else-if="searchAttempted && searchResults.length === 0 && !selectedAccount" class="search-empty">
          <span>{{ copy.noAccountResults }}</span>
          <button type="button" class="text-button" @click="clearSearch">{{ copy.clearSearch }}</button>
        </div>
        <div v-if="selectedAccount" class="account-result">
          <div><span>{{ copy.accountId }}</span><strong>{{ selectedAccount.accountId }}</strong></div>
          <div><span>{{ copy.status }}</span><strong>{{ selectedAccount.status || '—' }}</strong></div>
          <div><span>{{ copy.available }}</span><strong>{{ selectedBillingAccount ? money(selectedBillingAccount.balance.available.amountMinor) : '—' }}</strong></div>
          <div><span>{{ copy.collected }}</span><strong>{{ selectedBillingAccount ? money(selectedBillingAccount.paidCashMinor) : '—' }}</strong></div>
          <div><span>{{ copy.refunded }}</span><strong>{{ selectedBillingAccount ? money(selectedBillingAccount.refundedCashMinor) : '—' }}</strong></div>
          <div><span>{{ copy.aiRemaining }}</span><strong>{{ selectedAllowance ? units(selectedAllowance.aiUnits.remaining) : '—' }}</strong><small>{{ selectedAllowance ? allowanceUsage(selectedAllowance.aiUnits) : '—' }}</small></div>
          <div><span>{{ copy.turnRemaining }}</span><strong>{{ selectedAllowance ? bytes(selectedAllowance.turnEgressBytes.remaining) : '—' }}</strong><small>{{ selectedAllowance ? allowanceBytesUsage(selectedAllowance.turnEgressBytes) : '—' }}</small></div>
        </div>
        <div v-if="selectedAccount" class="identity-list">
          <article v-for="identity in selectedAccount.identities" :key="`${identity.provider}:${identity.email || identity.displayName}`">
            <strong>{{ identity.provider }}</strong>
            <span>{{ identity.displayName || '—' }}</span>
            <span>{{ identity.email || '—' }}</span>
          </article>
        </div>
        <div v-if="selectedAccount" class="account-activity">
          <article>
            <h3>{{ copy.accountPayments }}</h3>
            <ul>
              <li v-for="order in selectedOrders" :key="order.orderId">
                <span>{{ date(order.updatedAt) }} · {{ order.provider }} · {{ order.status }}</span>
                <strong>{{ money(order.cashAmount.amountMinor, order.cashAmount.currency) }}</strong>
              </li>
              <li v-if="!selectedOrders.length">{{ copy.noPayments }}</li>
            </ul>
          </article>
          <article>
            <h3>{{ copy.accountLedger }}</h3>
            <ul>
              <li v-for="entry in selectedLedger" :key="entry.ledgerEntryId">
                <span>{{ date(entry.occurredAt) }} · {{ entry.kind }}</span>
                <strong>{{ money(entry.amount.amountMinor, entry.amount.currency) }}</strong>
              </li>
              <li v-if="!selectedLedger.length">{{ copy.noLedger }}</li>
            </ul>
          </article>
        </div>
        <div v-if="selectedAccount" class="selected-subscriptions">
          <article>
            <h3>Together Home</h3>
            <div v-for="item in selectedPlusSubscriptions" :key="item.subscriptionId">
              <span class="status" :data-status="item.status">{{ item.status }}</span>
              <strong>{{ subscriptionPeriod(item) }}</strong>
            </div>
            <p v-if="!selectedPlusSubscriptions.length">{{ copy.noHomeSubscription }}</p>
          </article>
          <article>
            <h3>{{ copy.hostedSubscriptions }}</h3>
            <div v-for="item in selectedSharedSubscriptions" :key="item.subscriptionId">
              <span>{{ item.planId || 'Shared hosting' }}</span>
              <strong>{{ subscriptionPeriod(item) }}</strong>
            </div>
            <p v-if="!selectedSharedSubscriptions.length">{{ copy.noHostedSubscriptions }}</p>
          </article>
        </div>
      </section>

      <section class="panel">
        <div class="panel-heading">
          <div><p class="eyebrow">{{ copy.billing }}</p><h2>{{ copy.payments }}</h2></div>
          <span>{{ date(overview.generatedAt) }}</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>{{ copy.time }}</th><th>{{ copy.accountId }}</th><th>{{ copy.provider }}</th><th>{{ copy.amount }}</th><th>{{ copy.refunded }}</th><th>{{ copy.status }}</th></tr></thead>
            <tbody>
              <tr v-for="order in overview.orders" :key="order.orderId">
                <td>{{ date(order.updatedAt) }}</td>
                <td><button class="text-button" @click="selectAccount(order.accountId)">{{ order.accountId }}</button></td>
                <td>{{ order.provider }}</td>
                <td>{{ money(order.cashAmount.amountMinor, order.cashAmount.currency) }}</td>
                <td>{{ money(order.refundedCashMinor, order.cashAmount.currency) }}</td>
                <td><span class="status" :data-status="order.status">{{ order.status }}</span></td>
              </tr>
              <tr v-if="overview.orders.length === 0"><td colspan="6" class="empty">{{ copy.noPayments }}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="two-column">
        <article class="panel">
          <div class="panel-heading"><div><p class="eyebrow">TOGETHER</p><h2>{{ copy.subscriptions }}</h2></div></div>
          <ul class="list">
            <li v-for="subscription in subscriptions" :key="subscription.subscriptionId">
              <div><strong>{{ subscription.accountId }}</strong><span>{{ subscription.planId || 'Together Plus' }} · {{ allowanceSummary(subscription.accountId) }}</span></div>
              <div class="list-end"><span class="status" :data-status="subscription.status">{{ subscription.status }}</span><small>{{ date(subscription.currentPeriodEndsAt) }}</small></div>
            </li>
            <li v-if="subscriptions.length === 0" class="empty">{{ copy.noSubscriptions }}</li>
          </ul>
        </article>
        <article class="panel">
          <div class="panel-heading"><div><p class="eyebrow">{{ copy.audit }}</p><h2>{{ copy.recentEvents }}</h2></div></div>
          <ul class="list">
            <li v-for="event in auditEvents.slice(0, 20)" :key="event.eventId">
              <div><strong>{{ event.action }}</strong><span>{{ event.resourceType }} / {{ event.resourceId }}</span></div>
              <small>{{ date(event.occurredAt) }}</small>
            </li>
            <li v-if="auditEvents.length === 0" class="empty">{{ copy.noEvents }}</li>
          </ul>
        </article>
      </section>

      <section class="panel refund-gate">
        <div><p class="eyebrow">{{ copy.refunds }}</p><h2>{{ copy.refundTitle }}</h2></div>
        <p>{{ copy.refundDescription }}</p>
      </section>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
  AdminApiClient,
  AdminApiError,
  type AdminAccount,
  type AdminAuditEvent,
  type AdminBillingAccount,
  type AdminBillingOverview,
} from '../../lib/commercialization/admin'
import {
  accountSession,
  authenticatedAccountRequest,
  initializeAccountSession,
} from '../../lib/accountSession'

const language = typeof window === 'undefined'
  ? 'en'
  : window.location.pathname.split('/').filter(Boolean).find((part) =>
      ['en', 'zh', 'zh-TW'].includes(part)
    ) || 'en'
const copies = {
  en: {
    title: 'Operations console', description: 'Inspect payments, balances, subscriptions, and audit activity before enabling production billing.',
    readOnly: 'Read-only verification', reload: 'Reload operations data', signIn: 'Sign in', signInRequired: 'Sign in with an approved XMCL identity to access operations data.', identityReady: 'Your XMCL identity will be exchanged for a short-lived admin session.',
    loading: 'Loading…', security: 'Admin access is verified from your OAuth identity and expires after 15 minutes.', accounts: 'Accounts',
    collected: 'Gross collected', refunded: 'Refunded', available: 'Available balance', support: 'Support lookup',
    lookup: 'Inspect an account', accountId: 'Account ID', accountQuery: 'Account ID, email, or display name', lookupAction: 'Search', status: 'Status', billing: 'Billing',
    payments: 'Payment activity', time: 'Updated', provider: 'Provider', amount: 'Amount', noPayments: 'No payment activity.',
    subscriptions: 'Subscriptions', noSubscriptions: 'No Together subscriptions.', audit: 'Audit', recentEvents: 'Recent admin events',
    noEvents: 'No admin events.', refunds: 'Refund controls', refundTitle: 'Locked during verification',
    aiRemaining: 'AI remaining', turnRemaining: 'TURN remaining', accountPayments: 'Account payments', accountLedger: 'Account ledger', noLedger: 'No ledger activity.',
    noAccountResults: 'No account matched this query.', clearSearch: 'Clear search', reauthenticate: 'Manage sign-in',
    usageSummary: '{consumed} used of {included}', hostedSubscriptions: 'Hosted subscriptions',
    noHomeSubscription: 'No Together Home subscription.', noHostedSubscriptions: 'No hosted server subscriptions.',
    cancelsOn: 'Cancels on {date}', renewsOn: 'Renews on {date}',
    refundDescription: 'Use the Waffo sandbox to initiate refunds. The signed refund webhook updates the immutable XMCL ledger. An in-console refund action will remain disabled until provider API and end-to-end idempotency tests pass.',
  },
  zh: {
    title: '运营控制台', description: '在开放生产计费前检查付款、余额、订阅和审计活动。',
    readOnly: '只读验证', reload: '重新加载运营数据', signIn: '登录', signInRequired: '请使用获准的 XMCL 身份登录以访问运营数据。', identityReady: '系统会将你的 XMCL 身份换取短时管理员会话。',
    loading: '加载中…', security: '管理员权限由 OAuth 身份验证，并在 15 分钟后过期。', accounts: '账户数',
    collected: '累计收款', refunded: '已退款', available: '可用余额', support: '客服查询',
    lookup: '查询账户', accountId: '账户 ID', accountQuery: '账户 ID、邮箱或显示名', lookupAction: '搜索', status: '状态', billing: '计费',
    payments: '付款记录', time: '更新时间', provider: '渠道', amount: '金额', noPayments: '暂无付款记录。',
    subscriptions: '订阅', noSubscriptions: '暂无 Together 订阅。', audit: '审计', recentEvents: '最近管理事件',
    noEvents: '暂无管理事件。', refunds: '退款控制', refundTitle: '验证期间保持锁定',
    aiRemaining: 'AI 剩余额度', turnRemaining: 'TURN 剩余流量', accountPayments: '账户付款', accountLedger: '账户账本', noLedger: '暂无账本记录。',
    noAccountResults: '没有找到匹配的账户。', clearSearch: '清空搜索', reauthenticate: '管理登录状态',
    usageSummary: '已用 {consumed} / 共 {included}', hostedSubscriptions: '托管服务器订阅',
    noHomeSubscription: '未订阅 Together Home。', noHostedSubscriptions: '没有托管服务器订阅。',
    cancelsOn: '将取消于 {date}', renewsOn: '续费于 {date}',
    refundDescription: '目前请在 Waffo sandbox 发起退款，签名退款 Webhook 会更新 XMCL 的不可变账本。只有支付商退款 API 和端到端幂等测试通过后，才会开放控制台内退款按钮。',
  },
  'zh-TW': {
    title: '營運控制台', description: '在開放正式計費前檢查付款、餘額、訂閱與稽核活動。',
    readOnly: '唯讀驗證', reload: '重新載入營運資料', signIn: '登入', signInRequired: '請使用獲准的 XMCL 身分登入以存取營運資料。', identityReady: '系統會將你的 XMCL 身分換取短效管理員工作階段。',
    loading: '載入中…', security: '管理員權限由 OAuth 身分驗證，並於 15 分鐘後失效。', accounts: '帳戶數',
    collected: '累計收款', refunded: '已退款', available: '可用餘額', support: '客服查詢',
    lookup: '查詢帳戶', accountId: '帳戶 ID', accountQuery: '帳戶 ID、信箱或顯示名稱', lookupAction: '搜尋', status: '狀態', billing: '計費',
    payments: '付款紀錄', time: '更新時間', provider: '管道', amount: '金額', noPayments: '暫無付款紀錄。',
    subscriptions: '訂閱', noSubscriptions: '暫無 Together 訂閱。', audit: '稽核', recentEvents: '最近管理事件',
    noEvents: '暫無管理事件。', refunds: '退款控制', refundTitle: '驗證期間維持鎖定',
    aiRemaining: 'AI 剩餘額度', turnRemaining: 'TURN 剩餘流量', accountPayments: '帳戶付款', accountLedger: '帳戶帳本', noLedger: '暫無帳本紀錄。',
    noAccountResults: '找不到符合的帳戶。', clearSearch: '清除搜尋', reauthenticate: '管理登入狀態',
    usageSummary: '已用 {consumed} / 共 {included}', hostedSubscriptions: '託管伺服器訂閱',
    noHomeSubscription: '未訂閱 Together Home。', noHostedSubscriptions: '沒有託管伺服器訂閱。',
    cancelsOn: '將取消於 {date}', renewsOn: '續費於 {date}',
    refundDescription: '目前請在 Waffo sandbox 發起退款，簽名退款 Webhook 會更新 XMCL 的不可變帳本。只有支付商退款 API 與端對端冪等測試通過後，才會開放控制台內退款按鈕。',
  },
} as const
const copy = copies[language as keyof typeof copies] || copies.en
const configuredApiBase = (import.meta.env.VITE_ADMIN_API_BASE || '').replace(/\/$/, '')
const apiBaseUrl = ref(configuredApiBase || 'http://127.0.0.1:8787')
const accessToken = ref('')
const loading = ref(false)
const accountLoading = ref(false)
const error = ref('')
const overview = ref<AdminBillingOverview>()
const auditEvents = ref<AdminAuditEvent[]>([])
const accountQuery = ref('')
const selectedAccount = ref<AdminAccount>()
const searchResults = ref<AdminAccount[]>([])
const searchAttempted = ref(false)
const authenticationError = ref(false)
let api: AdminApiClient | undefined
const accountUrl = `../account/`

const totalCollected = computed(() => overview.value?.accounts.reduce((sum, account) => sum + account.paidCashMinor, 0) || 0)
const totalRefunded = computed(() => overview.value?.accounts.reduce((sum, account) => sum + account.refundedCashMinor, 0) || 0)
const totalAvailable = computed(() => overview.value?.accounts.reduce((sum, account) => sum + account.balance.available.amountMinor, 0) || 0)
const subscriptions = computed(() => [
  ...(overview.value?.plusSubscriptions || []),
  ...(overview.value?.sharedHostingSubscriptions || []),
])
const selectedBillingAccount = computed<AdminBillingAccount | undefined>(() =>
  overview.value?.accounts.find((account) => account.accountId === selectedAccount.value?.accountId)
)
const selectedAllowance = computed(() =>
  overview.value?.allowances.find((allowance) => allowance.accountId === selectedAccount.value?.accountId)
)
const selectedOrders = computed(() =>
  overview.value?.orders.filter((order) => order.accountId === selectedAccount.value?.accountId) || []
)
const selectedLedger = computed(() =>
  overview.value?.ledger.filter((entry) => entry.accountId === selectedAccount.value?.accountId) || []
)
const selectedPlusSubscriptions = computed(() =>
  overview.value?.plusSubscriptions.filter((item) => item.accountId === selectedAccount.value?.accountId) || []
)
const selectedSharedSubscriptions = computed(() =>
  overview.value?.sharedHostingSubscriptions.filter((item) => item.accountId === selectedAccount.value?.accountId) || []
)

onMounted(async () => {
  await initializeAccountSession()
  if (accountSession.session) await connect()
})

async function connect() {
  loading.value = true
  error.value = ''
  authenticationError.value = false
  try {
    const session = await authenticatedAccountRequest<{ accessToken: string; expiresAt: string }>(
      '/v1/admin/session',
      { method: 'POST' },
    )
    accessToken.value = session.accessToken
    api = new AdminApiClient(apiBaseUrl.value, accessToken.value)
    overview.value = await api.billingOverview()
    auditEvents.value = await api.auditEvents()
      .then((audit) => audit.items)
      .catch(() => [])
  } catch (cause) {
    overview.value = undefined
    auditEvents.value = []
    error.value = message(cause)
    authenticationError.value = cause instanceof AdminApiError && [401, 403].includes(cause.status)
  } finally {
    loading.value = false
  }
}

async function lookupAccount() {
  if (!api) return
  accountLoading.value = true
  error.value = ''
  searchAttempted.value = true
  try {
    searchResults.value = (await api.accounts(accountQuery.value)).items
    selectedAccount.value = searchResults.value.length === 1 ? searchResults.value[0] : undefined
  } catch (cause) {
    selectedAccount.value = undefined
    searchResults.value = []
    error.value = message(cause)
  } finally {
    accountLoading.value = false
  }
}

function selectAccount(value: string) {
  accountQuery.value = value
  const result = searchResults.value.find((item) => item.accountId === value)
  if (result) {
    selectedAccount.value = result
    searchResults.value = []
  } else if (api) {
    void api.account(value).then((account) => {
      selectedAccount.value = account
    }).catch((cause) => {
      error.value = message(cause)
    })
  }

  function clearSearch() {
    accountQuery.value = ''
    searchResults.value = []
    selectedAccount.value = undefined
    searchAttempted.value = false
  }
}

function identityLabel(account: AdminAccount) {
  const identity = account.identities.find((item) => item.email || item.displayName)
  return identity?.email || identity?.displayName || account.accountId
}

function money(amountMinor: number, currency = 'USD') {
  return new Intl.NumberFormat(language, { style: 'currency', currency }).format(amountMinor / 100)
}

function date(value: string) {
  return new Intl.DateTimeFormat(language, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
}

function units(value: number) {
  return new Intl.NumberFormat(language).format(value)
}

function bytes(value: number) {
  return `${new Intl.NumberFormat(language, { maximumFractionDigits: 2 }).format(value / 1_000_000_000)} GB`
}

function allowanceSummary(value: string) {
  const allowance = overview.value?.allowances.find((item) => item.accountId === value)
  return allowance
    ? `${units(allowance.aiUnits.remaining)} AI / ${bytes(allowance.turnEgressBytes.remaining)} TURN`
    : '—'
}

function allowanceUsage(value: { consumed: number; included: number }) {
  return copy.usageSummary
    .replace('{consumed}', units(value.consumed))
    .replace('{included}', units(value.included))
}

function allowanceBytesUsage(value: { consumed: number; included: number }) {
  return copy.usageSummary
    .replace('{consumed}', bytes(value.consumed))
    .replace('{included}', bytes(value.included))
}

function subscriptionPeriod(item: { cancelAtPeriodEnd?: true; currentPeriodEndsAt: string }) {
  return (item.cancelAtPeriodEnd ? copy.cancelsOn : copy.renewsOn)
    .replace('{date}', date(item.currentPeriodEndsAt))
}

function message(cause: unknown) {
  if (cause instanceof AdminApiError) return `${cause.code || cause.status}: ${cause.message}`
  return cause instanceof Error ? cause.message : String(cause)
}
</script>

<style scoped>
.admin-portal { color: var(--xmcl-ink, var(--vp-c-text-1)); margin: 0 auto; max-width: 1240px; padding: clamp(32px, 6vw, 72px) clamp(16px, 4vw, 42px) 96px; }
.admin-hero { align-items: flex-end; border-bottom: 1px solid var(--xmcl-line, var(--vp-c-divider)); display: flex; gap: 24px; justify-content: space-between; padding-bottom: 28px; }
.admin-hero h1 { font-size: clamp(38px, 6vw, 64px); letter-spacing: -.055em; line-height: .95; margin: 8px 0 14px; }
.admin-hero p { color: var(--xmcl-muted, var(--vp-c-text-2)); margin: 0; max-width: 700px; }
.eyebrow { color: var(--xmcl-orange, #e45e42) !important; font-size: 11px; font-weight: 850; letter-spacing: .12em; margin: 0; text-transform: uppercase; }
.read-only { background: color-mix(in srgb, #d8952c 15%, transparent); border: 1px solid #d8952c; border-radius: 999px; color: #9b6413; flex: 0 0 auto; font-size: 11px; font-weight: 850; padding: 7px 11px; text-transform: uppercase; }
.connection { align-items: center; display: flex; gap: 18px; justify-content: space-between; margin-top: 28px; }
.connection p { color: var(--xmcl-muted, var(--vp-c-text-2)); margin: 0; }
.connection a { background: var(--xmcl-lime, #c9f85a); border: 1px solid var(--xmcl-ink, #17211f); border-radius: 8px; color: #17211f; font-size: 12px; font-weight: 850; padding: 11px 15px; text-decoration: none; }
label { display: grid; gap: 6px; }
label span { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 11px; font-weight: 750; text-transform: uppercase; }
input { background: var(--xmcl-panel, var(--vp-c-bg-soft)); border: 1px solid var(--xmcl-line, var(--vp-c-divider)); border-radius: 8px; color: inherit; font: inherit; min-width: 0; padding: 11px 12px; }
button { background: var(--xmcl-lime, #c9f85a); border: 1px solid var(--xmcl-ink, #17211f); border-radius: 8px; color: #17211f; cursor: pointer; font: inherit; font-size: 12px; font-weight: 850; padding: 11px 15px; }
button:disabled { cursor: wait; opacity: .6; }
.security-note { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 12px; margin: 9px 0 0; }
.error { align-items: center; background: color-mix(in srgb, #c6453d 12%, transparent); border: 1px solid #c6453d; border-radius: 10px; color: #a22d28; display: flex; gap: 16px; justify-content: space-between; margin-top: 22px; padding: 14px 16px; }
.error a { color: inherit; font-weight: 800; white-space: nowrap; }
.metrics { display: grid; gap: 14px; grid-template-columns: repeat(4, 1fr); margin: 32px 0 18px; }
.metrics article, .panel { background: var(--xmcl-panel, var(--vp-c-bg-soft)); border: 1px solid var(--xmcl-line, var(--vp-c-divider)); border-radius: 13px; }
.metrics article { display: grid; gap: 5px; padding: 18px; }
.metrics span { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 11px; font-weight: 750; text-transform: uppercase; }
.metrics strong { font-size: clamp(22px, 3vw, 32px); letter-spacing: -.04em; }
.panel { margin-top: 18px; overflow: hidden; }
.panel-heading { align-items: center; display: flex; gap: 20px; justify-content: space-between; padding: 20px; }
.panel-heading h2, .refund-gate h2 { font-size: 20px; margin: 3px 0 0; }
.panel-heading > span { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 12px; }
.panel-heading form { display: flex; gap: 8px; }
.account-result { border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); display: grid; grid-template-columns: repeat(4, 1fr); }
.account-result div { display: grid; gap: 5px; padding: 18px 20px; }
.account-result span { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 11px; text-transform: uppercase; }
.account-result small { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 10px; }
.search-empty { align-items: center; border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); color: var(--xmcl-muted, var(--vp-c-text-2)); display: flex; justify-content: space-between; padding: 18px 20px; }
.search-results { border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); display: grid; grid-template-columns: repeat(2, 1fr); padding: 10px; }
.search-results button { background: transparent; border-color: transparent; color: inherit; display: grid; gap: 3px; text-align: left; }
.search-results button:hover { border-color: var(--xmcl-line, var(--vp-c-divider)); }
.search-results span, .identity-list span { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 11px; }
.identity-list { border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); display: flex; flex-wrap: wrap; gap: 10px; padding: 14px 20px; }
.identity-list article { background: var(--vp-c-bg); border-radius: 8px; display: grid; gap: 2px; padding: 10px 12px; }
.account-activity { border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); display: grid; grid-template-columns: 1fr 1fr; }
.account-activity > article { padding: 18px 20px; }
.account-activity > article + article { border-left: 1px solid var(--xmcl-line, var(--vp-c-divider)); }
.account-activity h3 { font-size: 14px; margin: 0 0 10px; }
.account-activity ul { display: grid; gap: 8px; list-style: none; margin: 0; padding: 0; }
.account-activity li { display: flex; font-size: 11px; gap: 12px; justify-content: space-between; }
.account-activity li span { color: var(--xmcl-muted, var(--vp-c-text-2)); }
.selected-subscriptions { border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); display: grid; grid-template-columns: 1fr 1fr; }
.selected-subscriptions article { padding: 18px 20px; }
.selected-subscriptions article + article { border-left: 1px solid var(--xmcl-line, var(--vp-c-divider)); }
.selected-subscriptions h3 { font-size: 14px; margin: 0 0 12px; }
.selected-subscriptions article > div { align-items: center; display: flex; gap: 12px; justify-content: space-between; margin-top: 8px; }
.selected-subscriptions article > div strong, .selected-subscriptions p { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 11px; margin: 0; }
.table-wrap { overflow-x: auto; }
table { border-collapse: collapse; font-size: 12px; width: 100%; }
th { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 10px; letter-spacing: .06em; text-align: left; text-transform: uppercase; }
th, td { border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); padding: 12px 16px; white-space: nowrap; }
.text-button { background: none; border: 0; color: var(--xmcl-orange, #e45e42); padding: 0; }
.status { background: var(--vp-c-bg); border-radius: 999px; display: inline-block; font-size: 10px; font-weight: 800; padding: 4px 8px; text-transform: uppercase; }
.status[data-status="completed"], .status[data-status="active"] { color: #278253; }
.status[data-status="failed"], .status[data-status="payment_due"] { color: #c6453d; }
.two-column { display: grid; gap: 18px; grid-template-columns: 1fr 1fr; }
.list { border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); list-style: none; margin: 0; padding: 0; }
.list li { align-items: center; border-bottom: 1px solid var(--xmcl-line, var(--vp-c-divider)); display: flex; gap: 14px; justify-content: space-between; padding: 13px 20px; }
.list li:last-child { border-bottom: 0; }
.list li div { display: grid; }
.list li span, .list small { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 11px; }
.list-end { justify-items: end; }
.empty { color: var(--xmcl-muted, var(--vp-c-text-2)); padding: 24px !important; text-align: center; }
.refund-gate { align-items: center; border-style: dashed; display: flex; gap: 32px; justify-content: space-between; padding: 22px; }
.refund-gate p:last-child { color: var(--xmcl-muted, var(--vp-c-text-2)); font-size: 13px; margin: 0; max-width: 720px; }
@media (max-width: 800px) {
  .admin-hero, .refund-gate { align-items: flex-start; flex-direction: column; }
  .metrics, .two-column, .account-result { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .connection { align-items: stretch; flex-direction: column; }
  .metrics, .two-column, .account-result, .account-activity, .search-results, .selected-subscriptions { grid-template-columns: 1fr; }
  .account-activity > article + article { border-left: 0; border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); }
  .selected-subscriptions article + article { border-left: 0; border-top: 1px solid var(--xmcl-line, var(--vp-c-divider)); }
  .panel-heading { align-items: flex-start; flex-direction: column; }
  .panel-heading form { width: 100%; }
  .panel-heading input { flex: 1; }
}
</style>
