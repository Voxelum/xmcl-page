<template>
  <section class="billing-account" aria-labelledby="billing-account-title">
    <header class="account-heading">
      <div>
        <p class="eyebrow">{{ t('commercial.billing.overview') }}</p>
        <h2 id="billing-account-title">{{ t('commercial.billing.accountTitle') }}</h2>
      </div>
      <button type="button" class="refresh-button" :disabled="loading || !api" @click="refresh">
        <span :class="{ rotating: loading }" aria-hidden="true">↻</span>
        {{ loading ? t('commercial.common.refreshing') : t('commercial.common.refresh') }}
      </button>
    </header>

    <p v-if="message && error" class="error notice" role="alert">{{ message }}</p>
    <template v-if="balance">
      <p v-if="balance.available.amountMinor < 0" class="debt-warning" role="alert">
        {{ t('commercial.billing.debt', {
          amount: money({ ...balance.available, amountMinor: -balance.available.amountMinor }),
        }) }}
      </p>

      <div class="summary-grid">
        <article class="summary-card balance-card">
          <span class="summary-label">{{ t('commercial.billing.available') }}</span>
          <strong>{{ money(balance.available) }}</strong>
          <small>{{ t('commercial.billing.availableHint') }}</small>
        </article>
        <article class="summary-card">
          <span class="summary-icon" aria-hidden="true">◇</span>
          <div>
            <span class="summary-label">{{ t('commercial.billing.reserved') }}</span>
            <strong>{{ money(balance.reserved) }}</strong>
          </div>
          <small>{{ t('commercial.billing.reservedHint') }}</small>
        </article>
      </div>

      <slot name="topup" />

      <section class="activity-section">
        <div class="section-heading activity-heading">
          <div>
            <p class="eyebrow">{{ t('commercial.billing.history') }}</p>
            <h3>{{ t('commercial.billing.activity') }}</h3>
          </div>
          <nav class="activity-tabs" :aria-label="t('commercial.billing.activityViews')">
            <button type="button" :class="{ active: activityView === 'transactions' }" @click="activityView = 'transactions'">{{ t('commercial.billing.transactions') }}</button>
            <button type="button" :class="{ active: activityView === 'payments' }" @click="activityView = 'payments'">{{ t('commercial.billing.payments') }}</button>
            <button type="button" :class="{ active: activityView === 'usage' }" @click="activityView = 'usage'">{{ t('commercial.billing.usage') }}</button>
          </nav>
        </div>

        <div class="table-shell">
          <table v-if="activityView === 'transactions'">
            <thead><tr><th>{{ t('commercial.billing.descriptionLabel') }}</th><th>{{ t('commercial.billing.reference') }}</th><th>{{ t('commercial.billing.date') }}</th><th class="amount-column">{{ t('commercial.billing.amount') }}</th></tr></thead>
            <tbody><tr v-for="entry in ledger" :key="entry.ledgerEntryId"><td><strong>{{ humanize(entry.kind) }}</strong></td><td><code>{{ compactId(entry.referenceId) }}</code></td><td>{{ date(entry.occurredAt) }}</td><td class="amount-column" :class="{ credit: signedMoney(entry).startsWith('+') }">{{ signedMoney(entry) }}</td></tr></tbody>
          </table>
          <table v-else-if="activityView === 'payments'">
            <thead><tr><th>{{ t('commercial.billing.payment') }}</th><th>{{ t('commercial.billing.status') }}</th><th>{{ t('commercial.billing.date') }}</th><th class="amount-column">{{ t('commercial.billing.amount') }}</th></tr></thead>
            <tbody><tr v-for="order in orders" :key="order.orderId"><td><code>{{ compactId(order.orderId) }}</code></td><td><span :class="`status ${order.status}`">{{ humanize(order.status) }}</span></td><td>{{ date(order.updatedAt) }}</td><td class="amount-column">{{ money(order.cashAmount) }}</td></tr></tbody>
          </table>
          <table v-else>
            <thead><tr><th>{{ t('commercial.billing.usageEvent') }}</th><th>{{ t('commercial.billing.status') }}</th><th>{{ t('commercial.billing.rate') }}</th><th class="amount-column">{{ t('commercial.billing.charged') }}</th></tr></thead>
            <tbody><tr v-for="item in usage" :key="item.settlementId"><td><code>{{ compactId(item.usageEventId) }}</code></td><td><span :class="`status ${item.status}`">{{ humanize(item.status) }}</span></td><td>v{{ item.rateVersion }}</td><td class="amount-column">{{ money(item.charged) }}</td></tr></tbody>
          </table>
          <p v-if="activityView === 'transactions' && ledger.length === 0" class="empty">{{ t('commercial.billing.noTransactions') }}</p>
          <p v-else-if="activityView === 'payments' && orders.length === 0" class="empty">{{ t('commercial.billing.noPayments') }}</p>
          <p v-else-if="activityView === 'usage' && usage.length === 0" class="empty">{{ t('commercial.billing.noUsage') }}</p>
        </div>
      </section>
    </template>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { BillingApiError, formatIsoMoney, type BillingApi, type BillingBalance, type LedgerEntry, type UsageSettlement, type WaffoOrder } from '../../lib/commercialization/billing'

const props = defineProps<{ api?: BillingApi }>()
const { locale, t } = useI18n()
const balance = ref<BillingBalance>()
const orders = ref<WaffoOrder[]>([])
const ledger = ref<LedgerEntry[]>([])
const usage = ref<UsageSettlement[]>([])
const loading = ref(false)
const error = ref(false)
const message = ref('')
const activityView = ref<'transactions' | 'payments' | 'usage'>('transactions')

onMounted(() => void refresh())

async function refresh() {
  if (!props.api) return
  loading.value = true
  error.value = false
  try {
    const [nextBalance, nextOrders, nextLedger, nextUsage] = await Promise.all([
      props.api.getBalance(),
      props.api.listOrders(),
      props.api.listLedger(),
      props.api.listUsage(),
    ])
    balance.value = nextBalance
    orders.value = nextOrders.items
    ledger.value = nextLedger.items
    usage.value = nextUsage.items
  } catch (cause) {
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.billing.loadError')
  } finally {
    loading.value = false
  }
}

function money(value: { currency: string; amountMinor: number }) {
  return formatIsoMoney(value, locale.value)
}

function date(value: string) {
  return new Intl.DateTimeFormat(locale.value, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
}

function signedMoney(entry: LedgerEntry) {
  const sign = entry.kind === 'waffo_credit' || entry.kind === 'reservation_release'
    ? '+'
    : entry.kind === 'balance_adjust' ? '' : '−'
  return `${sign}${money({ ...entry.amount, amountMinor: Math.abs(entry.amount.amountMinor) })}`
}

function compactId(value: string) {
  return value.length > 24 ? `${value.slice(0, 12)}…${value.slice(-8)}` : value
}

function humanize(value: string) {
  return value.replaceAll('_', ' ')
}

defineExpose({ refresh })
</script>

<style scoped>
.billing-account { display: grid; gap: 24px; }
h2, h3, p { margin: 0; }
.account-heading { align-items: center; display: flex; gap: 18px; justify-content: space-between; }
.account-heading > div, .section-heading > div { display: grid; gap: 6px; }
.account-heading h2 { font-size: 24px; letter-spacing: -.02em; }
.eyebrow { color: var(--xmcl-orange); font-size: 10px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
button { border: 1px solid var(--xmcl-ink); border-radius: 8px; cursor: pointer; font: inherit; font-size: 12px; font-weight: 750; padding: 10px 14px; }
.refresh-button { background: transparent; border-color: var(--xmcl-line); color: var(--xmcl-ink); }
.refresh-button span { display: inline-block; font-size: 16px; margin-right: 5px; }
.rotating { animation: rotate .8s linear infinite; }
button:disabled { cursor: not-allowed; opacity: .55; }
.summary-grid { display: grid; gap: 12px; grid-template-columns: 1.4fr 1fr; }
.summary-card { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 14px; display: grid; gap: 8px; min-height: 142px; padding: 22px; }
.summary-card.balance-card { background: linear-gradient(135deg, var(--xmcl-ink), color-mix(in srgb, var(--xmcl-ink) 86%, var(--xmcl-orange))); color: var(--xmcl-panel); }
.summary-card > div { display: grid; gap: 5px; }
.summary-label { color: var(--xmcl-muted); font-size: 12px; font-weight: 700; }
.balance-card .summary-label, .balance-card small { color: color-mix(in srgb, var(--xmcl-panel) 70%, transparent); }
.summary-card strong { font-size: 22px; line-height: 1.2; }
.balance-card strong { font-size: clamp(32px, 5vw, 44px); letter-spacing: -.04em; }
.summary-card small { align-self: end; color: var(--xmcl-muted); }
.summary-icon { align-items: center; background: color-mix(in srgb, var(--xmcl-orange) 12%, transparent); border-radius: 8px; color: var(--xmcl-orange); display: flex; height: 30px; justify-content: center; width: 30px; }
.debt-warning, .notice { background: color-mix(in srgb, #bd3f2b 9%, var(--xmcl-panel)); border: 1px solid #bd3f2b; border-radius: 10px; padding: 14px 16px; }
.activity-section { border-top: 1px solid var(--xmcl-line); display: grid; gap: 18px; margin-top: 16px; padding-top: 34px; }
.section-heading { align-items: end; display: flex; justify-content: space-between; }
.section-heading h3 { font-size: 24px; letter-spacing: -.025em; }
.activity-heading { gap: 20px; }
.activity-tabs { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 9px; display: flex; padding: 3px; }
.activity-tabs button { background: transparent; border: 0; color: var(--xmcl-muted); }
.activity-tabs button.active { background: var(--xmcl-paper); color: var(--xmcl-ink); box-shadow: 0 1px 3px color-mix(in srgb, var(--xmcl-ink) 12%, transparent); }
.table-shell { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 12px; overflow-x: auto; }
table { border-collapse: collapse; min-width: 680px; width: 100%; }
th, td { border-bottom: 1px solid var(--xmcl-line); padding: 14px 16px; text-align: left; white-space: nowrap; }
tbody tr:last-child td { border-bottom: 0; }
th { color: var(--xmcl-muted); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }
td { font-size: 13px; }
td code { color: var(--xmcl-muted); font-size: 11px; }
.amount-column { font-weight: 750; text-align: right; }
.credit { color: #31855b; }
.status { font-size: 10px; font-weight: 850; letter-spacing: .05em; text-transform: uppercase; }
.failed, .payment_due, .rejected { color: #bd3f2b; }
.pending { color: #a96d00; }
.completed, .active, .settled { color: #31855b; }
.cancelled { color: var(--xmcl-muted); }
.table-shell > .empty { color: var(--xmcl-muted); font-size: 13px; padding: 24px; text-align: center; }
.error { color: #bd3f2b; font-weight: 700; }
@keyframes rotate { to { transform: rotate(360deg); } }
@media (max-width: 600px) {
  .account-heading, .activity-heading { align-items: stretch; flex-direction: column; }
  .summary-grid { grid-template-columns: 1fr; }
  .activity-tabs { overflow-x: auto; }
  .activity-tabs button { flex: 1; }
}
</style>
