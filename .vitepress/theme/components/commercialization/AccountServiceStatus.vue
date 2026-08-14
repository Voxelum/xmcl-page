<template>
  <section class="service-status">
    <header>
      <div>
        <p class="eyebrow">XMCL TOGETHER</p>
        <h2>{{ copy.title }}</h2>
      </div>
      <button type="button" :disabled="loading || !accountSession.session" @click="refresh">
        {{ copy.refresh }}
      </button>
    </header>

    <p v-if="!accountSession.session && !loading" class="notice">{{ copy.signIn }}</p>
    <p v-else-if="error" class="notice error" role="alert">{{ error }}</p>
    <div v-else-if="balance && allowances" class="summary">
      <article>
        <span>{{ copy.balance }}</span>
        <strong>{{ money(balance.available) }}</strong>
        <a href="../billing">{{ copy.addFunds }}</a>
      </article>
      <article>
        <span>Together Home</span>
        <strong>{{ plusStatus }}</strong>
        <small>{{ plusPeriod }}</small>
      </article>
      <article>
        <span>{{ copy.ai }}</span>
        <strong>{{ number(allowances.aiUnits.remaining) }}</strong>
        <small>{{ usage(allowances.aiUnits.consumed, allowances.aiUnits.included) }}</small>
      </article>
      <article>
        <span>{{ copy.turn }}</span>
        <strong>{{ bytes(allowances.turnEgressBytes.remaining) }}</strong>
        <small>{{ usageBytes(allowances.turnEgressBytes.consumed, allowances.turnEgressBytes.included) }}</small>
      </article>
    </div>

    <section v-if="subscriptions.length" class="subscriptions">
      <h3>{{ copy.hosted }}</h3>
      <article v-for="subscription in subscriptions" :key="subscription.subscriptionId">
        <div>
          <strong>{{ planName(subscription.planId) }}</strong>
          <span>{{ subscription.status }}</span>
        </div>
        <small>{{ periodLabel(subscription.currentPeriodEndsAt, subscription.cancelAtPeriodEnd) }}</small>
      </article>
    </section>
    <p v-else-if="balance && allowances" class="coming-soon">{{ copy.hostedComingSoon }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { accountSession, initializeAccountSession, refreshAccountSession } from '../../lib/accountSession'
import {
  BillingApiClient,
  BillingApiError,
  formatIsoMoney,
  type BillingBalance,
  type SharedHostingSubscription,
  type XmclPlusAllowances,
  type XmclPlusSubscription,
} from '../../lib/commercialization/billing'

const { locale } = useI18n()
const copies = {
  en: {
    title: 'Services and remaining allowance', refresh: 'Refresh', signIn: 'Sign in above to view your Together services.',
    balance: 'Available balance', addFunds: 'Add funds', ai: 'AI remaining', turn: 'TURN remaining',
    hosted: 'Hosted server subscriptions', hostedComingSoon: 'Camp, Lodge, and Village are coming soon. No hosted server can be purchased or controlled during staging verification.',
    active: 'Active', inactive: 'Not subscribed', renews: 'Renews', cancels: 'Cancels on',
  },
  zh: {
    title: '服务与剩余额度', refresh: '刷新', signIn: '请先在上方登录，以查看你的 Together 服务。',
    balance: '可用余额', addFunds: '充值', ai: 'AI 剩余额度', turn: 'TURN 剩余流量',
    hosted: '托管服务器订阅', hostedComingSoon: 'Camp、Lodge 和 Village 即将推出；staging 验证期间无法购买或控制托管服务器。',
    active: '已开通', inactive: '未订阅', renews: '续费于', cancels: '将取消于',
  },
  'zh-TW': {
    title: '服務與剩餘額度', refresh: '重新整理', signIn: '請先在上方登入，以查看你的 Together 服務。',
    balance: '可用餘額', addFunds: '儲值', ai: 'AI 剩餘額度', turn: 'TURN 剩餘流量',
    hosted: '託管伺服器訂閱', hostedComingSoon: 'Camp、Lodge 與 Village 即將推出；staging 驗證期間無法購買或控制託管伺服器。',
    active: '已啟用', inactive: '未訂閱', renews: '續費於', cancels: '將取消於',
  },
} as const
const copy = computed(() => copies[locale.value as keyof typeof copies] || copies.en)
const loading = ref(true)
const error = ref('')
const balance = ref<BillingBalance>()
const allowances = ref<XmclPlusAllowances>()
const subscription = ref<XmclPlusSubscription | null>(null)
const subscriptions = ref<SharedHostingSubscription[]>([])
const baseUrl = (import.meta.env.VITE_BILLING_API_BASE || '').replace(/\/$/, '')
const api = baseUrl ? new BillingApiClient({
  baseUrl,
  sharedHostingServiceBaseUrl: (import.meta.env.VITE_SHARED_HOSTING_API_BASE || baseUrl).replace(/\/$/, ''),
  getSession: async () => {
    await initializeAccountSession()
    return accountSession.session
  },
  refreshSession: refreshAccountSession,
}) : undefined
const plusStatus = computed(() =>
  subscription.value?.cancelAtPeriodEnd
    ? copy.value.cancels
    : subscription.value && subscription.value.status !== 'cancelled'
    ? copy.value.active
    : copy.value.inactive
)
const plusPeriod = computed(() =>
  subscription.value && subscription.value.status !== 'cancelled'
    ? periodLabel(subscription.value.currentPeriodEndsAt, subscription.value.cancelAtPeriodEnd)
    : '—'
)

onMounted(async () => {
  await initializeAccountSession()
  await refresh()
})

async function refresh() {
  if (!accountSession.session || !api) {
    loading.value = false
    return
  }
  loading.value = true
  error.value = ''
  try {
    [balance.value, allowances.value, subscription.value, subscriptions.value] = await Promise.all([
      api.getBalance(),
      api.getXmclPlusAllowances(),
      api.getXmclPlusStatus(),
      api.listSharedHostingSubscriptions(),
    ])
  } catch (cause) {
    error.value = cause instanceof BillingApiError ? cause.message : String(cause)
  } finally {
    loading.value = false
  }
}

function money(value: { currency: string; amountMinor: number }) {
  return formatIsoMoney(value, locale.value)
}
function number(value: number) {
  return new Intl.NumberFormat(locale.value).format(value)
}
function bytes(value: number) {
  return `${new Intl.NumberFormat(locale.value, { maximumFractionDigits: 2 }).format(value / 1_000_000_000)} GB`
}
function usage(consumed: number, included: number) {
  return `${number(consumed)} / ${number(included)}`
}
function usageBytes(consumed: number, included: number) {
  return `${bytes(consumed)} / ${bytes(included)}`
}
function periodLabel(value: string, cancels = false) {
  const prefix = cancels ? copy.value.cancels : copy.value.renews
  return `${prefix} ${new Intl.DateTimeFormat(locale.value, { dateStyle: 'medium' }).format(new Date(value))}`
}
function planName(planId: string) {
  return ({ 'shared-small': 'Together Camp', 'shared-medium': 'Together Lodge', 'shared-large': 'Together Village' } as Record<string, string>)[planId] || planId
}
</script>

<style scoped>
.service-status { color: var(--xmcl-ink); display: grid; gap: 18px; margin: -44px auto 70px; max-width: 980px; padding: 0 16px; }
.service-status > header { align-items: end; display: flex; justify-content: space-between; }
.eyebrow { color: var(--xmcl-orange); font-size: 10px; font-weight: 850; letter-spacing: .12em; margin: 0; }
h2, h3 { margin: 4px 0 0; }
h2 { font-size: 28px; letter-spacing: -.035em; }
button, a { background: var(--xmcl-lime); border: 1px solid var(--xmcl-ink); border-radius: 8px; color: #17211f; font: inherit; font-size: 12px; font-weight: 800; padding: 9px 13px; text-decoration: none; }
button:disabled { cursor: not-allowed; opacity: .55; }
.summary { display: grid; gap: 10px; grid-template-columns: repeat(4, 1fr); }
.summary article, .subscriptions, .notice, .coming-soon { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 12px; }
.summary article { display: grid; gap: 6px; padding: 18px; }
.summary span, .summary small, .subscriptions span, .subscriptions small { color: var(--xmcl-muted); font-size: 11px; }
.summary strong { font-size: 22px; }
.summary a { background: transparent; border: 0; color: var(--xmcl-orange); padding: 0; width: fit-content; }
.subscriptions { overflow: hidden; }
.subscriptions h3 { padding: 17px 20px; }
.subscriptions article { align-items: center; border-top: 1px solid var(--xmcl-line); display: flex; justify-content: space-between; padding: 14px 20px; }
.subscriptions article div { display: grid; gap: 3px; }
.notice, .coming-soon { color: var(--xmcl-muted); margin: 0; padding: 18px; }
.error { border-color: #bd3f2b; color: #bd3f2b; }
@media (max-width: 800px) { .summary { grid-template-columns: 1fr 1fr; } }
@media (max-width: 520px) { .summary { grid-template-columns: 1fr; } }
</style>
