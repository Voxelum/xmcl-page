<template>
  <section :class="['server-plans', { compact }]">
    <header class="server-heading">
      <div>
        <p class="eyebrow">{{ t('commercial.server.overview') }}</p>
        <h2>{{ t('commercial.server.yourServer') }}</h2>
      </div>
      <div v-if="balance" class="balance">
        <span>{{ t('commercial.server.balance') }}</span>
        <strong>{{ money(balance.available) }}</strong>
        <a href="./billing">{{ t('commercial.server.addFunds') }}</a>
      </div>
    </header>

    <p v-if="message" :class="['notice', { error }]" role="status">{{ message }}</p>
    <article v-if="activeSubscription" class="subscription" :class="{ due: activeSubscription.status === 'payment_due' }">
      <div>
        <span :class="`status ${activeSubscription.status}`">{{ humanize(activeSubscription.status) }}</span>
        <strong>{{ activeSubscription.plan.displayName }}</strong>
        <span v-if="activeSubscription.status === 'payment_due'">{{ t('commercial.server.paymentDue') }}</span>
        <span v-else-if="activeSubscription.cancelAtPeriodEnd">{{ t('commercial.server.cancelsOn', { date: date(activeSubscription.currentPeriodEndsAt) }) }}</span>
        <span v-else>{{ t('commercial.server.renewsOn', { date: date(activeSubscription.currentPeriodEndsAt) }) }}</span>
      </div>
      <button v-if="!activeSubscription.cancelAtPeriodEnd" type="button" class="secondary" :disabled="mutating" @click="cancelSubscription(activeSubscription.subscriptionId)">
        {{ t('commercial.server.cancel') }}
      </button>
    </article>

    <div class="section-heading">
      <p class="eyebrow">{{ t('commercial.server.plansEyebrow') }}</p>
      <h2>{{ t('commercial.server.choosePlan') }}</h2>
      <p>{{ t('commercial.server.planDescription') }}</p>
    </div>
    <div v-if="loading" class="loading">{{ t('commercial.common.loading') }}</div>
    <div v-else class="plans">
      <article v-for="plan in plans" :key="plan.planId" :class="{ selected: activeSubscription?.planId === plan.planId }">
        <div class="plan-heading">
          <div><h3>{{ plan.displayName }}</h3><span>{{ plan.memoryMiB / 1024 }} GiB RAM</span></div>
          <span v-if="activeSubscription?.planId === plan.planId" class="current-badge">{{ t('commercial.server.current') }}</span>
        </div>
        <p class="plan-price"><strong>{{ money({ currency: plan.currency, amountMinor: plan.monthlyBaseMinor }) }}</strong><span>{{ t('commercial.server.perMonth') }}</span></p>
        <ul class="specs">
          <li><span>{{ t('commercial.server.cpu') }}</span><strong>{{ t('commercial.server.cpuValue', { count: plan.sharedCpu }) }}</strong></li>
          <li><span>{{ t('commercial.server.memory') }}</span><strong>{{ plan.memoryMiB / 1024 }} GiB</strong></li>
          <li><span>{{ t('commercial.server.storage') }}</span><strong>{{ plan.persistentStorageGiB }} GiB</strong></li>
          <li><span>{{ t('commercial.server.includedAi') }}</span><strong>{{ t('commercial.server.includedAiValue') }}</strong></li>
        </ul>
        <p class="runtime-price">{{ t('commercial.server.runtimePrice', { amount: money({ currency: plan.currency, amountMinor: plan.hourlyAmountMinor }) }) }}</p>
        <button v-if="!activeSubscription" type="button" :disabled="mutating" @click="subscribe(plan.planId)">{{ t('commercial.server.select', { plan: plan.displayName }) }}</button>
        <button v-else type="button" class="secondary" disabled>{{ activeSubscription.planId === plan.planId ? t('commercial.server.selected') : t('commercial.server.unavailable') }}</button>
      </article>
    </div>
    <p v-if="!loading && plans.length === 0" class="empty">{{ t('commercial.server.noPlans') }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { BillingApiError, formatIsoMoney, type BillingApi, type BillingBalance, type SharedHostingPlan, type SharedHostingRegion, type SharedHostingSubscription } from '../../lib/commercialization/billing'

const props = defineProps<{ api?: BillingApi; compact?: boolean }>()
const { locale, t } = useI18n()
const balance = ref<BillingBalance>()
const plans = ref<SharedHostingPlan[]>([])
const subscriptions = ref<SharedHostingSubscription[]>([])
const regions = ref<SharedHostingRegion[]>([])
const loading = ref(false)
const mutating = ref(false)
const error = ref(false)
const message = ref('')
const activeSubscription = computed(() => subscriptions.value.find(subscription => subscription.status !== 'cancelled'))

onMounted(() => void refresh())

async function refresh() {
  if (!props.api) return
  loading.value = true
  error.value = false
  try {
    const [nextBalance, nextPlans, nextSubscriptions, nextRegions] = await Promise.all([
      props.api.getBalance(),
      props.api.getSharedHostingPlans(),
      props.api.listSharedHostingSubscriptions(),
      props.api.getSharedHostingRegions(),
    ])
    balance.value = nextBalance
    plans.value = nextPlans
    subscriptions.value = nextSubscriptions
    regions.value = nextRegions
    message.value = ''
  } catch (cause) {
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.server.loadError')
  } finally {
    loading.value = false
  }
}

async function subscribe(planId: SharedHostingPlan['planId']) {
  if (!props.api) return
  mutating.value = true
  error.value = false
  try {
    const regionId = regions.value[0]?.regionId
    if (!regionId) throw new Error('No shared hosting region is enabled.')
    await props.api.createSharedHostingSubscription(planId, regionId)
    await refresh()
  } catch (cause) {
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.server.subscribeError')
  } finally {
    mutating.value = false
  }
}

async function cancelSubscription(subscriptionId: string) {
  if (!props.api) return
  mutating.value = true
  error.value = false
  try {
    await props.api.cancelSharedHostingSubscription(subscriptionId)
    await refresh()
  } catch (cause) {
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.server.cancelError')
  } finally {
    mutating.value = false
  }
}

function money(value: { currency: string; amountMinor: number }) {
  return formatIsoMoney(value, locale.value)
}
function date(value: string) {
  return new Intl.DateTimeFormat(locale.value, { dateStyle: 'medium' }).format(new Date(value))
}
function humanize(value: string) {
  return value.replaceAll('_', ' ')
}
</script>

<style scoped>
.server-plans { display: grid; gap: 24px; }
h2, h3, p { margin: 0; }
.server-heading { align-items: end; display: flex; gap: 24px; justify-content: space-between; }
.server-heading > div:first-child, .section-heading { display: grid; gap: 6px; }
.eyebrow { color: var(--xmcl-orange); font-size: 10px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
.balance { align-items: baseline; background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 10px; display: flex; gap: 10px; padding: 12px 16px; }
.balance span { color: var(--xmcl-muted); font-size: 12px; }
.balance a { color: var(--xmcl-orange); font-size: 12px; font-weight: 750; margin-left: 6px; }
.subscription { align-items: center; background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-left: 4px solid var(--xmcl-lime); border-radius: 12px; display: flex; gap: 20px; justify-content: space-between; padding: 18px 20px; }
.subscription.due { border-left-color: #bd3f2b; }
.subscription > div { display: grid; gap: 5px; }
.subscription > div > span:last-child, .section-heading > p:last-child, .empty { color: var(--xmcl-muted); font-size: 13px; }
.section-heading { margin-top: 18px; }
.section-heading h2 { font-size: 28px; letter-spacing: -.03em; }
.plans { display: grid; gap: 12px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.compact .plans { grid-template-columns: 1fr; }
.plans article { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 14px; display: grid; gap: 18px; padding: 22px; }
.plans article.selected { border-color: var(--xmcl-ink); box-shadow: 0 0 0 2px var(--xmcl-lime); }
.plan-heading { align-items: start; display: flex; gap: 10px; justify-content: space-between; }
.plan-heading > div { display: grid; gap: 5px; }
.plan-heading span, .runtime-price { color: var(--xmcl-muted); font-size: 12px; }
.current-badge { background: var(--xmcl-lime); border-radius: 999px; color: #17211f !important; font-size: 9px !important; font-weight: 850; padding: 4px 7px; text-transform: uppercase; }
.plan-price { align-items: baseline; display: flex; gap: 5px; }
.plan-price strong { font-size: 28px; letter-spacing: -.03em; }
.plan-price span { color: var(--xmcl-muted); font-size: 12px; }
.specs { border-bottom: 1px solid var(--xmcl-line); border-top: 1px solid var(--xmcl-line); display: grid; gap: 9px; list-style: none; margin: 0; padding: 14px 0; }
.specs li { align-items: center; display: flex; font-size: 12px; justify-content: space-between; }
.specs li span { color: var(--xmcl-muted); }
.specs li strong { font-size: 12px; }
button { background: var(--xmcl-lime); border: 1px solid var(--xmcl-ink); border-radius: 8px; color: #17211f; cursor: pointer; font: inherit; font-size: 12px; font-weight: 750; padding: 10px 14px; }
button.secondary { background: transparent; color: var(--xmcl-ink); }
button:disabled { cursor: not-allowed; opacity: .55; }
.plans article > button { margin-top: auto; width: 100%; }
.status { color: #31855b; font-size: 10px; font-weight: 850; letter-spacing: .05em; text-transform: uppercase; }
.payment_due { color: #bd3f2b; }
.notice, .loading { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 10px; padding: 16px; }
.error { border-color: #bd3f2b; color: #bd3f2b; }
@media (max-width: 800px) { .plans { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .server-heading, .subscription { align-items: stretch; flex-direction: column; } .balance { flex-wrap: wrap; } }
</style>
