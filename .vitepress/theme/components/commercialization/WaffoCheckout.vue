<template>
  <section class="waffo-checkout" aria-labelledby="waffo-checkout-title">
    <div class="checkout-intro">
      <span class="checkout-icon" aria-hidden="true">+</span>
      <div>
        <h2 id="waffo-checkout-title">{{ t('commercial.checkout.title') }}</h2>
        <p>{{ t('commercial.checkout.description') }}</p>
      </div>
    </div>
    <div class="checkout-form">
      <div class="amount-field">
        <label for="top-up-amount">{{ t('commercial.checkout.amount') }}</label>
        <div class="money-input">
          <span>{{ currency }}</span>
          <input id="top-up-amount" v-model="amountText" type="number" min="0.01" step="0.01" inputmode="decimal" :disabled="busy || !api || activeOrder?.status === 'pending'">
        </div>
      </div>
      <div class="presets" aria-label="Top-up amount presets">
        <button
          v-for="preset in presets"
          :key="preset"
          type="button"
          class="preset"
          :class="{ selected: amountMinor === preset }"
          :disabled="busy || !api || activeOrder?.status === 'pending'"
          @click="amountText = (preset / 100).toFixed(2)"
        >
          {{ formatIsoMoney({ currency, amountMinor: preset }, locale) }}
        </button>
      </div>
    </div>
    <p v-if="message" :class="{ error }" role="status">{{ message }}</p>
    <article v-if="activeOrder" class="active-order">
      <div>
        <span :class="`order-status ${activeOrder.status}`">{{ activeOrder.status.replaceAll('_', ' ') }}</span>
        <strong>{{ formatIsoMoney(activeOrder.cashAmount, locale) }}</strong>
        <small>{{ compactId(activeOrder.orderId) }}</small>
      </div>
      <a
        v-if="activeOrder.approvalUrl && isWaffoCheckoutUrl(activeOrder.approvalUrl) && activeOrder.status === 'pending'"
        :href="activeOrder.approvalUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ t('commercial.checkout.openCheckout') }}
      </a>
    </article>
    <div class="actions">
      <button type="button" class="primary" :disabled="busy || !api || activeOrder?.status === 'pending'" @click="startCheckout">
        {{ busy ? t('commercial.checkout.preparing') : t('commercial.checkout.add', { amount: formattedAmount }) }}
        <span aria-hidden="true">→</span>
      </button>
      <button v-if="activeOrder" type="button" class="secondary" :disabled="busy" @click="finishCheckout('cancelled')">{{ t('commercial.checkout.cancelledReturned') }}</button>
      <button v-if="activeOrder?.status === 'pending'" type="button" class="secondary" :disabled="busy" @click="startNewCheckout">{{ t('commercial.checkout.newTopUp') }}</button>
    </div>
    <p class="provider-note"><span aria-hidden="true">↗</span> {{ t('commercial.checkout.providerNote') }}</p>
    <p class="legal-note">
      {{ t('commercial.checkout.legalNote') }}
      <a :href="termsUrl" target="_blank" rel="noopener">{{ t('commercial.checkout.terms') }}</a>
      {{ t('commercial.checkout.and') }}
      <a :href="privacyUrl" target="_blank" rel="noopener">{{ t('commercial.checkout.privacy') }}</a>.
    </p>
    <p class="minecraft-disclaimer">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</p>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { BillingApiError, formatIsoMoney, type BillingApi, type WaffoOrder } from '../../lib/commercialization/billing'

const props = withDefaults(defineProps<{
  api?: BillingApi
  currency?: string
  initialAmountMinor?: number
}>(), {
  currency: 'USD',
  initialAmountMinor: 1000,
})
const { locale, t } = useI18n()
const presets = [500, 1000, 2500, 5000]
const checkoutStorageKey = 'xmcl-waffo-checkout/v1'

const emit = defineEmits<{
  refreshed: [order: WaffoOrder | undefined]
}>()

const amountText = ref((props.initialAmountMinor / 100).toFixed(2))
const amountMinor = computed(() => {
  const parsed = Number(amountText.value)
  const minor = Math.round(parsed * 100)
  return Number.isFinite(parsed) && Math.abs(parsed * 100 - minor) < 0.000001 ? minor : 0
})
const activeOrder = ref<WaffoOrder>()
const busy = ref(false)
const error = ref(false)
const message = ref('')
const awaitingReturn = ref(false)
const checkoutIntentKey = ref<string>()
let pollTimer: ReturnType<typeof setInterval> | undefined

const formattedAmount = computed(() => formatIsoMoney({ currency: props.currency, amountMinor: Math.max(0, amountMinor.value || 0) }, locale.value))
const legalLocale = computed(() => ['zh', 'zh-TW'].includes(locale.value) ? locale.value : 'en')
const termsUrl = computed(() => `https://www.xmcl.app/${legalLocale.value}/together/terms`)
const privacyUrl = computed(() => `https://www.xmcl.app/${legalLocale.value}/together/privacy`)

onMounted(() => {
  window.addEventListener('visibilitychange', refreshAfterApprovalReturn)
  window.addEventListener('focus', refreshAfterApprovalReturn)
  void restoreCheckout()
})
onBeforeUnmount(() => {
  window.removeEventListener('visibilitychange', refreshAfterApprovalReturn)
  window.removeEventListener('focus', refreshAfterApprovalReturn)
  stopPolling()
})

async function startCheckout() {
  if (!props.api || !Number.isSafeInteger(amountMinor.value) || amountMinor.value < 1) {
    error.value = true
    message.value = t('commercial.checkout.invalidAmount')
    return
  }

  busy.value = true
  error.value = false
  try {
    if (activeOrder.value?.status !== 'pending') {
      activeOrder.value = undefined
    }
    checkoutIntentKey.value ??= createIntentKey()
    persistCheckout()
    activeOrder.value = await props.api.createWaffoOrder({
      cashAmount: { currency: props.currency, amountMinor: amountMinor.value },
      idempotencyKey: checkoutIntentKey.value,
    })
    persistCheckout()
    if (!activeOrder.value.approvalUrl || !isWaffoCheckoutUrl(activeOrder.value.approvalUrl)) {
      throw new Error(t('commercial.checkout.unsafeUrl'))
    }
    const opened = window.open(activeOrder.value.approvalUrl, '_blank', 'noopener,noreferrer')
    awaitingReturn.value = Boolean(opened)
    startPolling()
    message.value = opened
      ? t('commercial.checkout.opened')
      : t('commercial.checkout.blocked')
    if (!opened) await finishCheckout('failure')
  } catch (cause) {
    if (activeOrder.value) {
      await refreshOrderAndBalance()
    } else {
      await props.api?.getBalance().catch(() => undefined)
    }
    error.value = true
    message.value = describeError(cause)
  } finally {
    busy.value = false
  }
}

async function refreshAfterApprovalReturn() {
  if (document.visibilityState === 'visible' && awaitingReturn.value) {
    awaitingReturn.value = false
    await finishCheckout('returned')
  }
}

async function finishCheckout(reason: 'returned' | 'cancelled' | 'failure') {
  busy.value = true
  try {
    const order = await refreshOrderAndBalance()
    error.value = false
    message.value = `${reason === 'cancelled' ? t('commercial.checkout.returnRecorded') : t('commercial.checkout.returnDetected')} ${order?.status ?? ''}`
  } catch (cause) {
    error.value = true
    message.value = `${describeError(cause)} ${t('commercial.checkout.refreshFailed')}`
  } finally {
    busy.value = false
  }
}

function startNewCheckout() {
  stopPolling()
  awaitingReturn.value = false
  activeOrder.value = undefined
  checkoutIntentKey.value = undefined
  clearPersistedCheckout()
  error.value = false
  message.value = t('commercial.checkout.newIntent')
}

async function refreshOrderAndBalance() {
  if (!props.api) return undefined
  // Never infer approval locally: every success, cancel, and error path reads server state.
  const [order] = await Promise.all([
    activeOrder.value
      ? props.api.getOrder(activeOrder.value.orderId)
      : Promise.resolve(undefined),
    props.api.getBalance(),
  ])
  if (order) {
    activeOrder.value = order
    if (order.status === 'completed' || order.status === 'failed' || order.status === 'cancelled') {
      stopPolling()
      checkoutIntentKey.value = undefined
      clearPersistedCheckout()
    } else {
      persistCheckout()
    }

  }
  emit('refreshed', order)
  return order
}

async function restoreCheckout() {
  if (!props.api) return
  const stored = readPersistedCheckout()
  if (!stored) return
  checkoutIntentKey.value = stored.idempotencyKey
  amountText.value = (stored.amountMinor / 100).toFixed(2)
  if (!stored.orderId) return
  busy.value = true
  try {
    activeOrder.value = await props.api.getOrder(stored.orderId)
    if (activeOrder.value.status === 'pending') {
      startPolling()
    } else {
      checkoutIntentKey.value = undefined
      clearPersistedCheckout()
    }
  } catch {
    message.value = t('commercial.checkout.restoreFailed')
  } finally {
    busy.value = false
  }
}

function persistCheckout() {
  if (typeof window === 'undefined' || !checkoutIntentKey.value) return
  window.sessionStorage.setItem(checkoutStorageKey, JSON.stringify({
    idempotencyKey: checkoutIntentKey.value,
    amountMinor: amountMinor.value,
    ...(activeOrder.value ? { orderId: activeOrder.value.orderId } : {}),
  }))
}

function readPersistedCheckout() {
  if (typeof window === 'undefined') return undefined
  const raw = window.sessionStorage.getItem(checkoutStorageKey)
  if (!raw) return undefined
  try {
    const value = JSON.parse(raw) as {
      idempotencyKey?: unknown
      amountMinor?: unknown
      orderId?: unknown
    }
    if (
      typeof value.idempotencyKey !== 'string' ||
      !Number.isSafeInteger(value.amountMinor) ||
      (value.amountMinor as number) <= 0 ||
      (value.orderId !== undefined && typeof value.orderId !== 'string')
    ) {
      throw new Error('invalid checkout state')
    }
    return {
      idempotencyKey: value.idempotencyKey,
      amountMinor: value.amountMinor as number,
      ...(value.orderId ? { orderId: value.orderId as string } : {}),
    }
  } catch {
    clearPersistedCheckout()
    return undefined
  }
}

function clearPersistedCheckout() {
  if (typeof window !== 'undefined') {
    window.sessionStorage.removeItem(checkoutStorageKey)
  }
}

function startPolling() {
  stopPolling()
  pollTimer = setInterval(() => {
    if (!busy.value && activeOrder.value?.status === 'pending') {
      void refreshOrderAndBalance()
    }
  }, 2500)
}

function stopPolling() {
  if (pollTimer) clearInterval(pollTimer)
  pollTimer = undefined
}

function isWaffoCheckoutUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && (
      url.hostname === 'checkout.waffo.ai' ||
      url.hostname === 'pancake.waffo.ai'
    )
  } catch {
    return false
  }
}

function describeError(cause: unknown) {
  if (cause instanceof BillingApiError) return cause.message
  return cause instanceof Error ? cause.message : 'Checkout could not be started.'
}

function createIntentKey() {
  return globalThis.crypto?.randomUUID?.() ?? `billing-checkout-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function compactId(value: string) {
  return value.length > 24 ? `${value.slice(0, 12)}…${value.slice(-8)}` : value
}
</script>

<style scoped>
.waffo-checkout {
  background: var(--xmcl-panel);
  border: 1px solid var(--xmcl-line);
  border-radius: 14px;
  box-shadow: 0 12px 30px color-mix(in srgb, var(--xmcl-ink) 5%, transparent);
  display: grid;
  gap: 24px;
  margin-top: 24px;
  padding: clamp(22px, 4vw, 32px);
}
.waffo-checkout h2, .waffo-checkout p { margin: 0; }
.checkout-intro { align-items: center; display: flex; gap: 14px; }
.checkout-intro > div { display: grid; gap: 3px; }
.checkout-intro h2 { font-size: 20px; }
.checkout-intro p, .provider-note { color: var(--xmcl-muted); font-size: 13px; }
.checkout-icon {
  align-items: center;
  background: var(--xmcl-lime);
  border: 1px solid var(--xmcl-ink);
  border-radius: 10px;
  color: #17211f;
  display: flex;
  flex: 0 0 auto;
  font-size: 24px;
  font-weight: 700;
  height: 42px;
  justify-content: center;
  width: 42px;
}
.checkout-form, .amount-field { display: grid; gap: 10px; }
label { color: var(--xmcl-muted); font-size: 12px; font-weight: 700; }
.money-input {
  align-items: center;
  background: var(--xmcl-paper);
  border: 1px solid var(--xmcl-line);
  border-radius: 10px;
  display: flex;
  padding: 0 16px;
}
.money-input:focus-within { border-color: var(--xmcl-ink); box-shadow: 0 0 0 3px color-mix(in srgb, var(--xmcl-lime) 35%, transparent); }
.money-input span { color: var(--xmcl-muted); font-size: 12px; font-weight: 800; }
input {
  background: transparent;
  border: 0;
  color: var(--xmcl-ink);
  flex: 1;
  font: inherit;
  font-size: 22px;
  font-weight: 750;
  min-width: 0;
  outline: 0;
  padding: 13px 12px;
}
.presets { display: flex; flex-wrap: wrap; gap: 8px; }
button {
  border: 1px solid var(--xmcl-line);
  border-radius: 8px;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 750;
  padding: 10px 14px;
}
button.preset, button.secondary { background: transparent; color: var(--xmcl-ink); }
button.preset:hover, button.preset.selected { background: color-mix(in srgb, var(--xmcl-lime) 18%, transparent); border-color: var(--xmcl-ink); }
button.primary {
  align-items: center;
  background: var(--xmcl-lime);
  border-color: var(--xmcl-ink);
  color: #17211f;
  display: flex;
  font-size: 13px;
  justify-content: center;
  min-height: 44px;
}
button.primary span { margin-left: auto; }
button:disabled { cursor: not-allowed; opacity: .55; }
.waffo-checkout > .error { color: #bd3f2b; font-size: 13px; font-weight: 700; }
.active-order { align-items: center; background: var(--xmcl-paper); border: 1px solid var(--xmcl-line); border-radius: 10px; display: flex; gap: 16px; justify-content: space-between; padding: 14px; }
.active-order > div { display: grid; gap: 3px; }
.active-order small { color: var(--xmcl-muted); }
.active-order a { color: var(--xmcl-ink); font-size: 12px; font-weight: 800; }
.order-status { color: var(--xmcl-muted); font-size: 10px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.order-status.completed { color: #31855b; }
.order-status.failed { color: #bd3f2b; }
.actions { display: grid; gap: 9px; }
.provider-note { border-top: 1px solid var(--xmcl-line); padding-top: 16px; }
.provider-note span { color: var(--xmcl-orange); margin-right: 5px; }
.minecraft-disclaimer { color: var(--xmcl-muted); font-size: 10px; line-height: 1.5; }
@media (max-width: 560px) { .active-order { align-items: stretch; flex-direction: column; } }
</style>
