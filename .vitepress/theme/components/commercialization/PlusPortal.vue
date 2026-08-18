<template>
  <main class="plus-portal">
    <header class="plus-hero">
      <div class="hero-copy">
        <p class="eyebrow">{{ t('commercial.plus.eyebrow') }}</p>
        <h1>{{ t('commercial.plus.title') }}</h1>
        <p>{{ t('commercial.plus.description') }} <a class="story-link" :href="storyUrl">{{ t('commercial.plus.storyLink') }}</a></p>
        <p class="project-boundary">{{ t('commercial.plus.projectBoundary') }}</p>
      </div>
      <div class="hero-note">
        <span>HOME · CAMP · LODGE · VILLAGE</span>
        <strong>{{ t('commercial.plus.catalog.heroNote') }}</strong>
      </div>
    </header>

    <section class="catalog">
      <header class="section-intro">
        <p class="eyebrow">{{ t('commercial.plus.catalog.eyebrow') }}</p>
        <h2>{{ t('commercial.plus.catalog.title') }}</h2>
        <p>{{ t('commercial.plus.catalog.description') }}</p>
      </header>

      <p v-if="message" :class="['notice', { error }]" role="status">{{ message }}</p>
      <section v-if="!initializing && accountSession.session && !loading" class="account-overview">
        <article>
          <small>{{ t('commercial.server.balance') }}</small>
          <strong>{{ balance ? money(balance.available) : '—' }}</strong>
          <a :href="billingUrl">{{ t('commercial.server.addFunds') }}</a>
        </article>
        <article>
          <small>{{ t('commercial.plus.aiAllowance') }}</small>
          <strong>{{ number(aiRemaining) }}</strong>
          <span>{{ t('commercial.plus.aiUnits') }}</span>
          <span>{{ t('commercial.plus.aiUsage', { consumed: number(aiConsumed), included: number(aiIncluded) }) }}</span>
        </article>
        <article>
          <small>{{ t('commercial.plus.turnAllowance') }}</small>
          <strong>{{ bytes(turnRemaining) }}</strong>
          <span>{{ t('commercial.plus.turnEgress') }}</span>
          <span>{{ t('commercial.plus.turnUsage', { consumed: bytes(turnConsumed), included: bytes(turnIncluded) }) }}</span>
        </article>
        <p v-if="allowanceStatus">{{ allowanceStatus }}</p>
      </section>

      <section v-if="!initializing && serverManagementEnabled && accountSession.session && serverServices.length" class="server-manager">
        <header>
          <div>
            <p class="eyebrow">{{ t('commercial.server.managerEyebrow') }}</p>
            <h2>{{ t('commercial.server.managerTitle') }}</h2>
          </div>
          <p>{{ t('commercial.server.managerDescription') }}</p>
        </header>
        <div class="server-tabs" role="tablist">
          <button
            v-for="(service, index) in serverServices"
            :key="service.serviceId"
            type="button"
            role="tab"
            :aria-selected="selectedService?.serviceId === service.serviceId"
            :class="{ active: selectedService?.serviceId === service.serviceId }"
            @click="selectedServiceId = service.serviceId"
          >
            {{ serverName(service, index) }}
            <small>{{ serviceStatus(service) }}</small>
          </button>
        </div>
        <article v-if="selectedService" class="server-panel">
          <div class="server-panel-heading">
            <div>
              <span :class="['status-dot', selectedService.status]" aria-hidden="true"></span>
              <div>
                <strong>{{ serviceStatus(selectedService) }}</strong>
                <small>{{ regionName(selectedService.regionId) }}</small>
              </div>
            </div>
            <button
              v-if="canStop(selectedService)"
              type="button"
              class="secondary"
              :disabled="mutating"
              @click="operateServer(selectedService, 'stop')"
            >{{ t('commercial.server.stop') }}</button>
            <button
              v-else-if="canStart(selectedService)"
              type="button"
              :disabled="mutating"
              @click="operateServer(selectedService, 'start')"
            >{{ t('commercial.server.start') }}</button>
          </div>
          <div class="server-metrics">
            <div>
              <span>{{ t('commercial.server.cpuUsage') }}</span>
              <strong>{{ selectedService.metrics ? `${selectedService.metrics.cpuPercent.toFixed(1)}%` : '—' }}</strong>
              <progress :value="Math.min(selectedService.metrics?.cpuPercent ?? 0, 100)" max="100"></progress>
            </div>
            <div>
              <span>{{ t('commercial.server.memoryUsage') }}</span>
              <strong>{{ memoryUsage(selectedService) }}</strong>
              <progress :value="selectedService.metrics?.memoryUsageMiB ?? 0" :max="selectedService.metrics?.memoryLimitMiB ?? 1"></progress>
            </div>
          </div>
          <p class="launcher-guide">{{ t('commercial.server.launcherGuide') }}</p>
        </article>
      </section>

      <div class="plan-grid">
        <article v-for="plan in catalogPlans" :key="plan.id" :class="['plan-card', { recommended: plan.recommended, selected: plan.selected }]">
          <div class="plan-topline">
            <span>{{ plan.location }}</span>
            <small v-if="plan.id === 'home' && subscription?.cancelAtPeriodEnd" class="ending-badge">
              {{ t('commercial.plus.cancelsOn', { date: date(subscription.currentPeriodEndsAt) }) }}
            </small>
            <small v-else-if="plan.selected" class="selected-badge">{{ t('commercial.server.current') }}</small>
            <small v-else-if="plan.recommended">{{ t('commercial.plus.catalog.recommended') }}</small>
          </div>
          <div>
            <h3>Together {{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
          </div>
          <p class="plan-price">
            <strong>{{ plan.price }}</strong>
            <span>{{ t('commercial.plus.catalog.perMonth') }}</span>
          </p>
          <p :class="['billing-model', { metered: plan.runtime }]">
            {{ plan.runtime || t('commercial.plus.catalog.flatMonthly') }}
          </p>
          <dl>
            <div v-for="spec in plan.specs" :key="spec.label" class="plan-spec">
              <dt>{{ spec.label }}</dt>
              <dd>{{ spec.value }}</dd>
            </div>
          </dl>
          <div class="ai-included">
            <span aria-hidden="true">✦</span>
            <p><strong>{{ t('commercial.plus.catalog.aiIncluded') }}</strong>{{ t('commercial.plus.catalog.aiIncludedDescription') }}</p>
          </div>
          <div v-if="plan.id !== 'home'" class="plan-action">
            <button type="button" disabled>{{ comingSoon }}</button>
          </div>
          <div v-else class="plan-action">
            <template v-if="accountSession.session">
              <a v-if="subscription?.status === 'payment_due'" :href="homeFundingUrl">{{ t('commercial.plus.addFunds') }}</a>
              <button v-else-if="!subscription || subscription.status === 'cancelled'" type="button" :disabled="mutating || loading" @click="subscribe">
                {{ t('commercial.plus.subscribe') }}
              </button>
              <button v-else-if="!subscription.cancelAtPeriodEnd" type="button" class="secondary" :disabled="mutating || loading" @click="cancel">
                {{ t('commercial.plus.cancel') }}
              </button>
              <span v-else class="plan-state">{{ t('commercial.plus.cancelsOn', { date: date(subscription.currentPeriodEndsAt) }) }}</span>
            </template>
            <button v-else type="button" :disabled="mutating" @click="subscribe">
              {{ t('commercial.plus.subscribe') }}
            </button>
          </div>
        </article>
      </div>

      <section v-if="initializing" class="portal-notice">{{ t('commercial.common.loading') }}</section>
      <section v-else-if="!accountSession.session" class="portal-notice sign-in">
        <div><strong>{{ t('commercial.plus.signInTitle') }}</strong><p>{{ t('commercial.plus.signInDescription') }}</p></div>
        <a :href="accountUrl">{{ t('commercial.common.signIn') }}</a>
      </section>
    </section>

    <section class="shared-experience">
      <div class="shared-heading">
        <p class="eyebrow">{{ t('commercial.plus.shared.eyebrow') }}</p>
        <h2>{{ t('commercial.plus.shared.title') }}</h2>
        <p>{{ t('commercial.plus.shared.description') }}</p>
      </div>
      <div class="shared-features">
        <article>
          <span>01</span>
          <div>
            <h3>{{ t('commercial.plus.shared.aiTitle') }}</h3>
            <p>{{ t('commercial.plus.shared.aiDescription') }}</p>
          </div>
        </article>
        <article>
          <span>02</span>
          <div>
            <h3>{{ t('commercial.plus.shared.worldTitle') }}</h3>
            <p>{{ t('commercial.plus.shared.worldDescription') }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="runtime-story">
      <div class="runtime-copy">
        <p class="eyebrow">{{ t('commercial.plus.runtime.eyebrow') }}</p>
        <h2>{{ t('commercial.plus.runtime.title') }}</h2>
        <p>{{ t('commercial.plus.runtime.description') }}</p>
      </div>
      <ol>
        <li>
          <span>1</span>
          <div><strong>{{ t('commercial.plus.runtime.playTitle') }}</strong><p>{{ t('commercial.plus.runtime.playDescription') }}</p></div>
        </li>
        <li>
          <span>2</span>
          <div><strong>{{ t('commercial.plus.runtime.pauseTitle') }}</strong><p>{{ t('commercial.plus.runtime.pauseDescription') }}</p></div>
        </li>
      </ol>
    </section>

    <dialog ref="confirmDialog" class="confirm-dialog" @close="clearConfirmation">
      <form method="dialog">
        <button class="dialog-close" value="cancel" :aria-label="t('commercial.plus.confirm.close')">×</button>
        <p class="eyebrow">{{ confirmation?.kind === 'purchase' ? t('commercial.plus.confirm.purchaseEyebrow') : t('commercial.plus.confirm.cancelEyebrow') }}</p>
        <h2>{{ confirmationTitle }}</h2>
        <p>{{ confirmationDescription }}</p>
        <div v-if="confirmation?.kind === 'purchase'" class="region-picker">
          <div class="region-picker-heading">
            <label for="purchase-region">{{ t('commercial.plus.confirm.regionLabel') }}</label>
            <button type="button" class="text-button" :disabled="testingRegions" @click="testRegions">
              {{ testingRegions ? t('commercial.plus.confirm.testingRegions') : t('commercial.plus.confirm.testRegions') }}
            </button>
          </div>
          <select id="purchase-region" v-model="purchaseRegionId" :disabled="testingRegions">
            <option v-for="region in purchaseRegions" :key="region.regionId" :value="region.regionId">
              {{ regionLabel(region) }}
            </option>
          </select>
          <p>{{ t('commercial.plus.confirm.regionDescription', { count: purchaseRegions.length }) }}</p>
          <p v-if="regionTestMessage" class="region-test-result" role="status">{{ regionTestMessage }}</p>
        </div>
        <div v-if="confirmation?.kind === 'cancel'" class="retention-note">
          <strong>{{ t('commercial.plus.confirm.retentionTitle') }}</strong>
          <p>{{ t('commercial.plus.confirm.retentionDescription', { date: cancellationRetentionDate }) }}</p>
        </div>
        <div class="dialog-actions">
          <button value="cancel" class="secondary">{{ t('commercial.plus.confirm.back') }}</button>
          <button value="default" type="button" :disabled="mutating" @click="confirmAction">
            {{ confirmation?.kind === 'purchase' ? t('commercial.plus.confirm.purchase') : t('commercial.plus.confirm.cancel') }}
          </button>
        </div>
      </form>
    </dialog>

    <footer class="service-legal">
      <span>{{ t('commercial.plus.serviceOperator') }}</span>
      <a :href="termsUrl" target="_blank" rel="noopener">{{ t('commercial.checkout.terms') }}</a>
      <a :href="privacyUrl" target="_blank" rel="noopener">{{ t('commercial.checkout.privacy') }}</a>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { accountSession, initializeAccountSession, refreshAccountSession } from '../../lib/accountSession'
import { BillingApiClient, BillingApiError, formatIsoMoney, type BillingBalance, type SharedHostingPlan, type SharedHostingRegion, type SharedHostingService, type SharedHostingSubscription, type XmclPlusAllowances, type XmclPlusOffer, type XmclPlusSubscription } from '../../lib/commercialization/billing'

const { locale, t } = useI18n()
const initializing = ref(true)
const loading = ref(false)
const mutating = ref(false)
const error = ref(false)
const message = ref('')
const offer = ref<XmclPlusOffer>()
const subscription = ref<XmclPlusSubscription | null>(null)
const allowances = ref<XmclPlusAllowances>()
const balance = ref<BillingBalance>()
const hostingPlans = ref<SharedHostingPlan[]>([])
const serverSubscriptions = ref<SharedHostingSubscription[]>([])
const serverServices = ref<SharedHostingService[]>([])
const selectedServiceId = ref('')
const confirmDialog = ref<HTMLDialogElement>()
const purchaseRegionId = ref('')
const testingRegions = ref(false)
const regionLatencies = ref<Record<string, number>>({})
const regionTestMessage = ref('')
const regionTestController = ref<AbortController>()
const purchaseRegions = ref<SharedHostingRegion[]>([])
const serverManagementEnabled = false
const confirmation = ref<
  | { kind: 'purchase'; planId: SharedHostingPlan['planId'] }
  | { kind: 'cancel'; subscription: SharedHostingSubscription }
>()
const billingBaseUrl = (import.meta.env.VITE_BILLING_API_BASE || '').replace(/\/$/, '')
const api = billingBaseUrl ? new BillingApiClient({
  baseUrl: billingBaseUrl,
  sharedHostingServiceBaseUrl: (import.meta.env.VITE_SHARED_HOSTING_API_BASE || billingBaseUrl).replace(/\/$/, ''),
  getSession: async () => {
    await initializeAccountSession()
    return accountSession.session
  },
  refreshSession: refreshAccountSession,
}) : undefined
const accountUrl = './account/'
const billingUrl = './billing'
const storyUrl = './story'
const homeFundingUrl = computed(() => {
  const requiredMinor = offer.value?.monthlyPrice.amountMinor ?? 299
  const availableMinor = balance.value?.available.amountMinor ?? 0
  const params = new URLSearchParams({
    reason: 'home-insufficient-balance',
    amountMinor: String(Math.max(1, requiredMinor - availableMinor)),
    currency: offer.value?.monthlyPrice.currency ?? 'USD',
  })
  return `${billingUrl}?${params}`
})
const legalLocale = computed(() => ['zh', 'zh-TW'].includes(locale.value) ? locale.value : 'en')
const comingSoon = computed(() => locale.value === 'zh'
  ? '即将推出'
  : locale.value === 'zh-TW'
  ? '即將推出'
  : 'Coming soon')
const termsUrl = computed(() => `https://www.xmcl.app/${legalLocale.value}/together/terms`)
const privacyUrl = computed(() => `https://www.xmcl.app/${legalLocale.value}/together/privacy`)
const aiIncluded = computed(() => accountSession.session
  ? allowances.value?.aiUnits.included ?? 0
  : offer.value?.aiUnitsPerPeriod ?? 2_000_000)
const aiConsumed = computed(() => allowances.value?.aiUnits.consumed ?? 0)
const aiRemaining = computed(() => allowances.value?.aiUnits.remaining ?? 0)
const turnIncluded = computed(() => accountSession.session
  ? allowances.value?.turnEgressBytes.included ?? 0
  : offer.value?.turnEgressBytesPerPeriod ?? 20_000_000_000)
const turnConsumed = computed(() => allowances.value?.turnEgressBytes.consumed ?? 0)
const turnRemaining = computed(() => allowances.value?.turnEgressBytes.remaining ?? 0)
const allowanceStatus = computed(() => allowances.value?.aiUnits.meteringStatus === 'not_configured'
  ? t('commercial.plus.meteringUnavailable')
  : '')
const confirmationPlan = computed(() => confirmation.value?.kind === 'purchase'
  ? hostingPlans.value.find(plan => plan.planId === confirmation.value?.planId)
  : undefined)
const confirmationTitle = computed(() => confirmation.value?.kind === 'purchase'
  ? t('commercial.plus.confirm.purchaseTitle', { plan: confirmationPlan.value?.displayName ?? '' })
  : t('commercial.plus.confirm.cancelTitle', {
      plan: confirmation.value?.kind === 'cancel' ? confirmation.value.subscription.plan.displayName : '',
    }))
const confirmationDescription = computed(() => {
  if (confirmation.value?.kind === 'purchase') {
    const plan = confirmationPlan.value
    if (!plan) return ''
    return t('commercial.plus.confirm.purchaseDescription', {
      monthly: money({ currency: plan.currency, amountMinor: plan.monthlyBaseMinor }),
      hourly: money({ currency: plan.currency, amountMinor: plan.hourlyAmountMinor }),
    })
  }
  if (confirmation.value?.kind === 'cancel') {
    return t('commercial.plus.confirm.cancelDescription', {
      date: date(confirmation.value.subscription.currentPeriodEndsAt),
    })
  }
  return ''
})
const cancellationRetentionDate = computed(() => {
  if (confirmation.value?.kind !== 'cancel') return ''
  const retentionEndsAt = new Date(confirmation.value.subscription.currentPeriodEndsAt)
  retentionEndsAt.setUTCDate(retentionEndsAt.getUTCDate() + 30)
  return date(retentionEndsAt.toISOString())
})
const selectedService = computed(() =>
  serverServices.value.find(service => service.serviceId === selectedServiceId.value)
  ?? serverServices.value[0])
const catalogPlans = computed(() => [
  {
    id: 'home',
    name: 'Home',
    location: t('commercial.plus.catalog.home.location'),
    description: t('commercial.plus.catalog.home.description'),
    price: offer.value ? money(offer.value.monthlyPrice) : '$2.99',
    runtime: '',
    recommended: false,
    selected: subscription.value?.status === 'active' || subscription.value?.status === 'payment_due',
    planId: undefined,
    subscriptions: [] as SharedHostingSubscription[],
    specs: [
      { label: t('commercial.plus.catalog.runsOn'), value: t('commercial.plus.catalog.home.runsOn') },
      { label: t('commercial.plus.catalog.bestFor'), value: t('commercial.plus.catalog.home.bestFor') },
      { label: t('commercial.plus.catalog.connection'), value: t('commercial.plus.catalog.home.connection') },
    ],
  },
  {
    id: 'camp',
    name: 'Camp',
    location: t('commercial.plus.catalog.hosted'),
    description: t('commercial.plus.catalog.camp.description'),
    price: serverPrice('shared-small', 'monthly', '$4'),
    runtime: t('commercial.plus.catalog.runtime', { price: serverPrice('shared-small', 'hourly', '$0.06') }),
    recommended: false,
    selected: activeSubscriptionsFor('shared-small').length > 0,
    planId: 'shared-small' as const,
    subscriptions: activeSubscriptionsFor('shared-small'),
    specs: [
      { label: t('commercial.plus.catalog.memory'), value: '4 GiB' },
      { label: t('commercial.plus.catalog.cpu'), value: '2 / 4 vCPU' },
      { label: t('commercial.plus.catalog.storage'), value: '32 GiB' },
    ],
  },
  {
    id: 'lodge',
    name: 'Lodge',
    location: t('commercial.plus.catalog.hosted'),
    description: t('commercial.plus.catalog.lodge.description'),
    price: serverPrice('shared-medium', 'monthly', '$6'),
    runtime: t('commercial.plus.catalog.runtime', { price: serverPrice('shared-medium', 'hourly', '$0.09') }),
    recommended: true,
    selected: activeSubscriptionsFor('shared-medium').length > 0,
    planId: 'shared-medium' as const,
    subscriptions: activeSubscriptionsFor('shared-medium'),
    specs: [
      { label: t('commercial.plus.catalog.memory'), value: '6 GiB' },
      { label: t('commercial.plus.catalog.cpu'), value: '3 / 6 vCPU' },
      { label: t('commercial.plus.catalog.storage'), value: '48 GiB' },
    ],
  },
  {
    id: 'village',
    name: 'Village',
    location: t('commercial.plus.catalog.hosted'),
    description: t('commercial.plus.catalog.village.description'),
    price: serverPrice('shared-large', 'monthly', '$8'),
    runtime: t('commercial.plus.catalog.runtime', { price: serverPrice('shared-large', 'hourly', '$0.12') }),
    recommended: false,
    selected: activeSubscriptionsFor('shared-large').length > 0,
    planId: 'shared-large' as const,
    subscriptions: activeSubscriptionsFor('shared-large'),
    specs: [
      { label: t('commercial.plus.catalog.memory'), value: '8 GiB' },
      { label: t('commercial.plus.catalog.cpu'), value: '4 / 8 vCPU' },
      { label: t('commercial.plus.catalog.storage'), value: '64 GiB' },
    ],
  },
])

onMounted(() => {
  window.setTimeout(() => void initializePortal(), 0)
})

async function initializePortal() {
  await initializeAccountSession()
  initializing.value = false
  if (accountSession.session) await refresh()
}

async function refresh() {
  if (!api) {
    error.value = true
    message.value = t('commercial.plus.disabled')
    return
  }
  loading.value = true
  error.value = false
  try {
    const [nextOffer, nextSubscription, nextAllowances, nextBalance] = await Promise.all([
      api.getXmclPlusOffer(),
      api.getXmclPlusStatus(),
      api.getXmclPlusAllowances(),
      api.getBalance(),
    ])
    offer.value = nextOffer
    subscription.value = nextSubscription
    allowances.value = nextAllowances
    balance.value = nextBalance
    hostingPlans.value = []
    serverSubscriptions.value = []
    serverServices.value = []
    purchaseRegions.value = []
    message.value = ''
  } catch (cause) {
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.plus.loadError')
  } finally {
    loading.value = false
  }
}

async function subscribe() {
  if (!api) return
  await initializeAccountSession()
  if (!accountSession.session) {
    window.location.assign(accountUrl)
    return
  }
  const requiredMinor = offer.value?.monthlyPrice.amountMinor ?? 299
  const availableMinor = balance.value?.available.amountMinor
  if (availableMinor !== undefined && availableMinor < requiredMinor) {
    redirectToBilling(requiredMinor - availableMinor, offer.value?.monthlyPrice.currency ?? 'USD')
    return
  }
  mutating.value = true
  error.value = false
  try {
    await api.subscribeXmclPlus()
    await refresh()
  } catch (cause) {
    if (cause instanceof BillingApiError && cause.code === 'insufficient_balance') {
      redirectToBilling(
        Math.max(1, requiredMinor - (balance.value?.available.amountMinor ?? 0)),
        offer.value?.monthlyPrice.currency ?? 'USD',
      )
      return
    }
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.plus.subscribeError')
  } finally {
    mutating.value = false
  }
}

function redirectToBilling(amountMinor: number, currency: string) {
  const target = new URL(billingUrl, window.location.href)
  target.search = new URLSearchParams({
    reason: 'home-insufficient-balance',
    amountMinor: String(amountMinor),
    currency,
  }).toString()
  window.location.assign(target)
}

async function cancel() {
  if (!api) return
  mutating.value = true
  error.value = false
  try {
    await api.cancelXmclPlus()
    await refresh()
  } catch (cause) {
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.plus.cancelError')
  } finally {
    mutating.value = false
  }
}

async function subscribeServer(planId: SharedHostingPlan['planId'], regionId: string) {
  if (!api) return
  mutating.value = true
  error.value = false
  try {
    await api.createSharedHostingSubscription(planId, regionId)
    await refresh()
  } catch (cause) {
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.server.subscribeError')
  } finally {
    mutating.value = false
  }
}

async function cancelServer(subscriptionId: string) {
  if (!api) return
  mutating.value = true
  error.value = false
  try {
    await api.cancelSharedHostingSubscription(subscriptionId)
    await refresh()
  } catch (cause) {
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.server.cancelError')
  } finally {
    mutating.value = false
  }
}

async function operateServer(service: SharedHostingService, operation: 'start' | 'stop') {
  if (!api) return
  mutating.value = true
  error.value = false
  try {
    await (operation === 'start'
      ? api.startSharedHostingService(service.serviceId)
      : api.stopSharedHostingService(service.serviceId))
    await refresh()
  } catch (cause) {
    error.value = true
    message.value = cause instanceof BillingApiError ? cause.message : t('commercial.server.operationError')
  } finally {
    mutating.value = false
  }
}

function canStart(service: SharedHostingService) {
  return ['ready', 'failed'].includes(service.status)
}

function canStop(service: SharedHostingService) {
  return ['starting', 'running'].includes(service.status)
}

function serviceStatus(service: SharedHostingService) {
  return t(`commercial.server.status.${service.status}`)
}

function serverName(service: SharedHostingService, index: number) {
  const names: Record<SharedHostingPlan['planId'], string> = {
    'shared-small': 'Camp',
    'shared-medium': 'Lodge',
    'shared-large': 'Village',
  }
  return t('commercial.server.serverNumber', { plan: names[service.planId], number: index + 1 })
}

function regionName(regionId?: string) {
  const region = purchaseRegions.value.find(value => value.regionId === regionId)
  return region ? regionLabel(region) : (regionId ?? '—')
}

function memoryUsage(service: SharedHostingService) {
  if (!service.metrics) return '—'
  return `${number(service.metrics.memoryUsageMiB)} / ${number(service.metrics.memoryLimitMiB)} MiB`
}

function serverPrice(planId: SharedHostingPlan['planId'], kind: 'monthly' | 'hourly', fallback: string) {
  const plan = hostingPlans.value.find(item => item.planId === planId)
  if (!plan) return fallback
  return money({ currency: plan.currency, amountMinor: kind === 'monthly' ? plan.monthlyBaseMinor : plan.hourlyAmountMinor })
}

function activeSubscriptionsFor(planId: SharedHostingPlan['planId']) {
  return serverSubscriptions.value.filter(item => item.planId === planId && item.status !== 'cancelled')
}

function subscriptionStatus(item: SharedHostingSubscription) {
  if (item.status === 'payment_due') return t('commercial.server.paymentDue')
  if (item.cancelAtPeriodEnd) return t('commercial.server.cancelsOn', { date: date(item.currentPeriodEndsAt) })
  return t('commercial.server.renewsOn', { date: date(item.currentPeriodEndsAt) })
}

function openPurchaseDialog(planId: SharedHostingPlan['planId']) {
  purchaseRegionId.value = 'sgp'
  regionLatencies.value = {}
  regionTestMessage.value = ''
  confirmation.value = { kind: 'purchase', planId }
  confirmDialog.value?.showModal()
}

function openCancelDialog(subscription: SharedHostingSubscription) {
  confirmation.value = { kind: 'cancel', subscription }
  confirmDialog.value?.showModal()
}

function clearConfirmation() {
  regionTestController.value?.abort()
  confirmation.value = undefined
}

async function confirmAction() {
  const action = confirmation.value
  if (!action) return
  if (action.kind === 'purchase') await subscribeServer(action.planId, purchaseRegionId.value)
  else await cancelServer(action.subscription.subscriptionId)
  confirmDialog.value?.close()
}


function money(value: { currency: string; amountMinor: number }) {
  return formatIsoMoney(value, locale.value)
}
function date(value: string) {
  return new Intl.DateTimeFormat(locale.value, { dateStyle: 'medium' }).format(new Date(value))
}
function number(value: number) {
  return new Intl.NumberFormat(locale.value).format(value)
}
function bytes(value: number) {
  if (value === 0) return '0 GB'
  return `${new Intl.NumberFormat(locale.value, { maximumFractionDigits: 1 }).format(value / 1_000_000_000)} GB`
}
function regionLabel(region: SharedHostingRegion) {
  const country = new Intl.DisplayNames([locale.value], { type: 'region' }).of(region.country)
  const latency = regionLatencies.value[region.regionId]
  return `${region.city} · ${country ?? region.country}${latency === undefined ? '' : ` · ${latency} ms`}`
}
async function testRegions() {
  regionTestController.value?.abort()
  const controller = new AbortController()
  regionTestController.value = controller
  testingRegions.value = true
  regionLatencies.value = {}
  regionTestMessage.value = ''
  try {
    await Promise.all(purchaseRegions.value.map(region => measureRegion(region, controller.signal)))
    const samples = new Map<string, number[]>()
    for (let round = 0; round < 3; round += 1) {
      const results = await Promise.all(purchaseRegions.value.map(async (region) => ({
        id: region.regionId,
        latency: await measureRegion(region, controller.signal),
      })))
      for (const result of results) {
        if (result.latency === undefined) continue
        samples.set(result.id, [...(samples.get(result.id) ?? []), result.latency])
      }
    }
    if (controller.signal.aborted) return
    const latencies = Object.fromEntries([...samples].map(([id, values]) => {
      const sorted = [...values].sort((left, right) => left - right)
      return [id, Math.round(sorted[Math.floor(sorted.length / 2)])]
    }))
    regionLatencies.value = latencies
    const fastest = purchaseRegions.value
      .filter(region => latencies[region.regionId] !== undefined)
      .sort((left, right) => latencies[left.regionId] - latencies[right.regionId])[0]
    if (!fastest) {
      regionTestMessage.value = t('commercial.plus.confirm.testUnavailable')
      return
    }
    purchaseRegionId.value = fastest.regionId
    regionTestMessage.value = t('commercial.plus.confirm.testComplete', {
      location: regionLabel(fastest).replace(` · ${latencies[fastest.regionId]} ms`, ''),
      latency: latencies[fastest.regionId],
    })
  } finally {
    if (regionTestController.value === controller) {
      testingRegions.value = false
      regionTestController.value = undefined
    }
  }
}
async function measureRegion(region: SharedHostingRegion, signal: AbortSignal) {
  const startedAt = performance.now()
  try {
    await Promise.race([
      fetch(`${region.latencyTestUrl}?xmcl-latency=${Date.now()}-${Math.random()}`, {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-store',
        signal,
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4_000)),
    ])
    return performance.now() - startedAt
  } catch {
    return undefined
  }
}
</script>

<style scoped>
.plus-portal { color: var(--xmcl-ink); margin: 0 auto; max-width: 1440px; padding: clamp(42px, 7vw, 96px) clamp(20px, 4vw, 56px) 112px; }
h1, h2, h3, p { margin: 0; }
.eyebrow { color: var(--xmcl-orange); font-size: 10px; font-weight: 850; letter-spacing: .13em; text-transform: uppercase; }
.plus-hero { align-items: end; display: grid; gap: 56px; grid-template-columns: minmax(0, 1fr) 280px; padding-bottom: clamp(56px, 7vw, 92px); }
.hero-copy h1 { font-size: clamp(48px, 7vw, 88px); letter-spacing: -.06em; line-height: .92; margin: 12px 0 22px; max-width: 950px; }
.project-boundary { border-left: 3px solid var(--xmcl-lime); color: var(--xmcl-muted); font-size: 13px; margin-top: 18px; padding-left: 12px; }
.hero-copy > p:not(.project-boundary) { color: var(--xmcl-muted); font-size: clamp(16px, 1.6vw, 20px); line-height: 1.55; max-width: 760px; }
.story-link { background: color-mix(in srgb, var(--xmcl-lime) 38%, transparent); border: 1px solid color-mix(in srgb, var(--xmcl-ink) 18%, transparent); border-radius: 999px; color: var(--xmcl-ink); display: inline-flex; font-size: 13px; font-weight: 850; margin-left: 8px; padding: 5px 11px; text-decoration: none; white-space: nowrap; }
.story-link::after { content: ' →'; margin-left: 4px; }
.story-link:hover { background: var(--xmcl-lime); border-color: var(--xmcl-ink); }
.hero-note { border-left: 2px solid var(--xmcl-lime); display: grid; gap: 9px; padding: 8px 0 8px 18px; }
.hero-note span { color: var(--xmcl-orange); font-size: 9px; font-weight: 850; letter-spacing: .11em; }
.hero-note strong { font-size: 18px; line-height: 1.3; }
.catalog { display: grid; gap: 30px; }
.section-intro { display: grid; gap: 9px; max-width: 720px; }
.section-intro h2, .shared-heading h2, .runtime-copy h2 { font-size: clamp(32px, 4vw, 52px); letter-spacing: -.045em; line-height: 1; }
.section-intro > p:last-child, .shared-heading > p:last-child, .runtime-copy > p:last-child { color: var(--xmcl-muted); line-height: 1.55; }
.account-overview { background: var(--xmcl-ink); border-radius: 14px; color: var(--xmcl-panel); display: grid; grid-template-columns: repeat(3, 1fr); overflow: hidden; }
.account-overview article { display: grid; gap: 3px; padding: 18px 22px; }
.account-overview article + article { border-left: 1px solid color-mix(in srgb, var(--xmcl-panel) 16%, transparent); }
.account-overview small, .account-overview span, .account-overview > p { color: color-mix(in srgb, var(--xmcl-panel) 68%, transparent); font-size: 11px; }
.account-overview strong { font-size: 23px; letter-spacing: -.025em; }
.account-overview a { color: var(--xmcl-lime); font-size: 11px; font-weight: 800; margin-top: 3px; width: fit-content; }
.account-overview > p { border-top: 1px solid color-mix(in srgb, var(--xmcl-panel) 16%, transparent); grid-column: 1 / -1; padding: 10px 22px; }
.server-manager { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 16px; display: grid; gap: 18px; padding: 24px; }
.server-manager > header { align-items: end; display: flex; gap: 32px; justify-content: space-between; }
.server-manager > header h2 { font-size: 26px; letter-spacing: -.035em; margin-top: 5px; }
.server-manager > header > p { color: var(--xmcl-muted); font-size: 12px; line-height: 1.5; max-width: 520px; }
.server-tabs { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 2px; }
.server-tabs button { background: transparent; border-color: var(--xmcl-line); color: var(--xmcl-ink); display: grid; flex: 0 0 auto; gap: 2px; min-width: 140px; text-align: left; }
.server-tabs button.active { background: var(--xmcl-ink); color: var(--xmcl-panel); }
.server-tabs small { color: var(--xmcl-muted); font-size: 9px; font-weight: 600; }
.server-tabs button.active small { color: color-mix(in srgb, var(--xmcl-panel) 70%, transparent); }
.server-panel { background: color-mix(in srgb, var(--xmcl-ink) 3%, transparent); border-radius: 12px; display: grid; gap: 18px; padding: 20px; }
.server-panel-heading, .server-panel-heading > div { align-items: center; display: flex; gap: 10px; }
.server-panel-heading { justify-content: space-between; }
.server-panel-heading > div > div { display: grid; gap: 2px; }
.server-panel-heading small { color: var(--xmcl-muted); font-size: 10px; }
.server-panel-heading button.secondary { border-color: var(--xmcl-line); color: var(--xmcl-ink); }
.status-dot { background: #9ba3a0; border-radius: 50%; display: block; height: 10px; width: 10px; }
.status-dot.running, .status-dot.ready { background: #2e9b57; }
.status-dot.starting, .status-dot.stopping, .status-dot.pending { background: var(--xmcl-orange); }
.status-dot.failed, .status-dot.payment_due { background: #bd3f2b; }
.server-metrics { display: grid; gap: 12px; grid-template-columns: 1fr 1fr; }
.server-metrics > div { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 10px; display: grid; gap: 7px; padding: 14px; }
.server-metrics span { color: var(--xmcl-muted); font-size: 10px; }
.server-metrics strong { font-size: 20px; }
.server-metrics progress { accent-color: var(--xmcl-orange); height: 6px; width: 100%; }
.launcher-guide { border-left: 3px solid var(--xmcl-lime); color: var(--xmcl-muted); font-size: 11px; line-height: 1.55; padding-left: 12px; }
.plan-grid { display: grid; gap: 12px; grid-template-columns: repeat(4, minmax(0, 1fr)); }
.plan-card { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 16px; display: flex; flex-direction: column; gap: 20px; min-width: 0; padding: 24px; position: relative; }
.plan-card.recommended { border-color: var(--xmcl-ink); box-shadow: inset 0 4px 0 var(--xmcl-lime); }
.plan-card.selected { border-color: var(--xmcl-ink); box-shadow: inset 0 4px 0 var(--xmcl-orange); }
.plan-topline { align-items: center; display: flex; justify-content: space-between; min-height: 20px; }
.plan-topline > span { color: var(--xmcl-orange); font-size: 9px; font-weight: 850; letter-spacing: .1em; text-transform: uppercase; }
.plan-topline small { background: var(--xmcl-lime); border-radius: 999px; color: #17211f; font-size: 9px; font-weight: 850; padding: 4px 7px; }
.plan-topline .selected-badge { background: var(--xmcl-orange); color: white; }
.plan-topline .ending-badge { background: color-mix(in srgb, var(--xmcl-orange) 16%, var(--xmcl-panel)); color: var(--xmcl-orange); }
.plan-card h3 { font-size: 25px; letter-spacing: -.035em; }
.plan-description { color: var(--xmcl-muted); font-size: 13px; line-height: 1.5; margin-top: 8px; min-height: 58px; }
.plan-price { align-items: baseline; display: flex; gap: 6px; }
.plan-price strong { font-size: 38px; letter-spacing: -.05em; }
.plan-price span { color: var(--xmcl-muted); font-size: 12px; }
.billing-model { background: color-mix(in srgb, var(--xmcl-lime) 18%, transparent); border-radius: 8px; font-size: 12px; font-weight: 750; padding: 10px 12px; }
.billing-model.metered { background: color-mix(in srgb, var(--xmcl-orange) 10%, transparent); color: var(--xmcl-orange); }
.plan-card dl { border-bottom: 1px solid var(--xmcl-line); border-top: 1px solid var(--xmcl-line); display: grid; gap: 10px; margin: 0; padding: 14px 0; }
.plan-spec { display: grid; grid-template-columns: 1fr auto; }
.plan-card dt { color: var(--xmcl-muted); font-size: 11px; }
.plan-card dd { font-size: 11px; font-weight: 750; margin: 0; text-align: right; }
.ai-included { align-items: start; display: flex; gap: 10px; margin-top: auto; }
.ai-included > span { align-items: center; background: color-mix(in srgb, var(--xmcl-orange) 12%, transparent); border-radius: 8px; color: var(--xmcl-orange); display: flex; flex: 0 0 32px; height: 32px; justify-content: center; }
.ai-included p { color: var(--xmcl-muted); font-size: 11px; line-height: 1.45; }
.ai-included strong { color: var(--xmcl-ink); display: block; font-size: 12px; }
.plan-action { border-top: 1px solid var(--xmcl-line); display: grid; padding-top: 16px; }
.plan-action button, .plan-action a { text-align: center; width: 100%; }
.plan-action button.secondary { border-color: var(--xmcl-line); color: var(--xmcl-ink); }
.plan-state { color: var(--xmcl-muted); font-size: 11px; line-height: 1.45; }
.server-subscriptions { display: grid; gap: 8px; margin-bottom: 12px; }
.server-subscriptions > div { align-items: center; background: color-mix(in srgb, var(--xmcl-ink) 4%, transparent); border-radius: 8px; display: flex; gap: 8px; justify-content: space-between; padding: 9px 10px; }
.server-subscriptions span { color: var(--xmcl-muted); display: grid; font-size: 9px; gap: 2px; line-height: 1.3; }
.server-subscriptions span strong { color: var(--xmcl-ink); font-size: 11px; }
.server-subscriptions .text-button, .server-subscriptions a { background: transparent; border: 0; color: var(--xmcl-orange); font-size: 10px; padding: 3px; text-align: right; width: auto; }
.shared-experience { border-bottom: 1px solid var(--xmcl-line); border-top: 1px solid var(--xmcl-line); display: grid; gap: 64px; grid-template-columns: .8fr 1.2fr; margin: clamp(72px, 9vw, 120px) 0; padding: clamp(52px, 7vw, 84px) 0; }
.shared-heading { display: grid; gap: 10px; }
.shared-features { display: grid; grid-template-columns: 1fr 1fr; }
.shared-features article { display: flex; gap: 18px; padding: 8px 28px; }
.shared-features article + article { border-left: 1px solid var(--xmcl-line); }
.shared-features article > span { color: var(--xmcl-orange); font-size: 10px; font-weight: 850; }
.shared-features h3 { font-size: 19px; margin-bottom: 8px; }
.shared-features p { color: var(--xmcl-muted); font-size: 13px; line-height: 1.55; }
.runtime-story { background: var(--xmcl-ink); border-radius: 20px; color: var(--xmcl-panel); display: grid; gap: 64px; grid-template-columns: .8fr 1.2fr; padding: clamp(32px, 5vw, 60px); }
.runtime-copy { display: grid; gap: 12px; }
.runtime-copy .eyebrow { color: var(--xmcl-panel); }
.runtime-copy > p:last-child { color: color-mix(in srgb, var(--xmcl-panel) 82%, transparent); font-size: 15px; line-height: 1.65; }
.runtime-story ol { display: grid; gap: 10px; list-style: none; margin: 0; padding: 0; }
.runtime-story li { align-items: start; background: color-mix(in srgb, var(--xmcl-panel) 7%, transparent); border: 1px solid color-mix(in srgb, var(--xmcl-panel) 13%, transparent); border-radius: 12px; display: grid; gap: 16px; grid-template-columns: 40px 1fr; padding: 18px; }
.runtime-story li > span { align-items: center; border: 1px solid color-mix(in srgb, var(--xmcl-panel) 42%, transparent); border-radius: 50%; color: var(--xmcl-panel); display: flex; font-size: 12px; font-weight: 750; height: 32px; justify-content: center; width: 32px; }
.runtime-story li strong { color: var(--xmcl-panel); font-size: 17px; }
.runtime-story li p { color: color-mix(in srgb, var(--xmcl-panel) 80%, transparent); font-size: 14px; line-height: 1.55; margin-top: 6px; }
.portal-notice, .notice { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 14px; padding: 24px; }
.sign-in { align-items: center; display: flex; gap: 20px; justify-content: space-between; }
.sign-in p { color: var(--xmcl-muted); margin-top: 4px; }
.sign-in a, .actions a, button { background: var(--xmcl-lime); border: 1px solid var(--xmcl-ink); border-radius: 8px; color: #17211f; cursor: pointer; font: inherit; font-size: 12px; font-weight: 800; padding: 10px 14px; text-decoration: none; }
.error { border-color: #bd3f2b; color: #bd3f2b; }
button.secondary { background: transparent; border-color: color-mix(in srgb, var(--xmcl-panel) 35%, transparent); color: var(--xmcl-panel); }
button:disabled { cursor: not-allowed; opacity: .55; }
.confirm-dialog { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 18px; color: var(--xmcl-ink); max-width: 520px; padding: 0; width: calc(100% - 32px); }
.confirm-dialog::backdrop { background: color-mix(in srgb, var(--xmcl-ink) 68%, transparent); backdrop-filter: blur(3px); }
.confirm-dialog form { display: grid; gap: 16px; padding: 30px; position: relative; }
.confirm-dialog h2 { font-size: 28px; letter-spacing: -.035em; line-height: 1.1; }
.confirm-dialog form > p:not(.eyebrow), .retention-note p { color: var(--xmcl-muted); font-size: 13px; line-height: 1.6; }
.dialog-close { background: transparent; border: 0; color: var(--xmcl-muted); font-size: 24px; padding: 4px; position: absolute; right: 14px; top: 10px; }
.region-picker { background: color-mix(in srgb, var(--xmcl-ink) 4%, transparent); border: 1px solid var(--xmcl-line); border-radius: 10px; display: grid; gap: 8px; padding: 14px; }
.region-picker-heading { align-items: center; display: flex; gap: 12px; justify-content: space-between; }
.region-picker label { font-size: 13px; font-weight: 800; }
.region-picker .text-button { background: transparent; border: 0; color: var(--xmcl-orange); font-size: 11px; padding: 2px; }
.region-picker select { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 8px; color: var(--xmcl-ink); font: inherit; font-size: 13px; padding: 10px 12px; width: 100%; }
.region-picker p { color: var(--xmcl-muted); font-size: 11px; line-height: 1.5; }
.region-picker .region-test-result { color: var(--xmcl-ink); font-weight: 750; }
.retention-note { background: color-mix(in srgb, var(--xmcl-orange) 9%, transparent); border-left: 3px solid var(--xmcl-orange); display: grid; gap: 5px; padding: 14px 16px; }
.retention-note strong { font-size: 13px; }
.dialog-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 4px; }
.dialog-actions button.secondary { border-color: var(--xmcl-line); color: var(--xmcl-ink); }
.service-legal { border-top: 1px solid var(--xmcl-line); color: var(--xmcl-muted); display: flex; flex-wrap: wrap; font-size: 11px; gap: 14px; margin-top: 64px; padding-top: 18px; }
.service-legal a { color: var(--xmcl-ink); font-weight: 750; }
@media (max-width: 1100px) { .plan-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .plan-description { min-height: 0; } }
@media (max-width: 860px) { .plus-hero, .shared-experience, .runtime-story { grid-template-columns: 1fr; } .plus-hero { align-items: start; gap: 28px; } .hero-note { max-width: 420px; } .shared-experience, .runtime-story { gap: 36px; } }
@media (max-width: 600px) { .plus-portal { padding-inline: 16px; } .sign-in, .server-manager > header { align-items: stretch; flex-direction: column; } .account-overview, .plan-grid, .shared-features, .server-metrics { grid-template-columns: 1fr; } .account-overview article + article { border-left: 0; border-top: 1px solid color-mix(in srgb, var(--xmcl-panel) 16%, transparent); } .shared-features article { padding: 18px 0; } .shared-features article + article { border-left: 0; border-top: 1px solid var(--xmcl-line); } .plan-card { padding: 22px; } .server-manager { padding: 18px; } }
</style>
