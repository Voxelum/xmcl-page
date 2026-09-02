<template>
  <main class="billing-portal">
    <header class="portal-hero">
      <div>
        <p class="eyebrow">{{ t('commercial.billing.eyebrow') }}</p>
        <h1>{{ t('commercial.billing.title') }}</h1>
        <p class="hero-copy">{{ t('commercial.billing.description') }}</p>
      </div>
      <a class="account-link" :href="accountUrl">{{ t('commercial.billing.accountSettings') }} <span aria-hidden="true">→</span></a>
    </header>

    <section v-if="!billingBaseUrl" class="portal-notice" role="status">
      {{ t('commercial.billing.disabled') }}
    </section>
    <section v-else-if="initializing" class="portal-notice portal-loading" role="status">
      <span class="spinner" aria-hidden="true"></span>
      <div><strong>{{ t('commercial.billing.loadingTitle') }}</strong><p>{{ t('commercial.billing.loadingDescription') }}</p></div>
    </section>
    <section v-else-if="!accountSession.session" class="portal-notice sign-in-notice">
      <span class="notice-icon" aria-hidden="true">X</span>
      <div>
        <strong>{{ t('commercial.billing.signInTitle') }}</strong>
        <p>{{ t('commercial.billing.signInDescription') }}</p>
      </div>
      <a :href="accountUrl">{{ t('commercial.common.signIn') }}</a>
    </section>
    <template v-else>
      <p v-if="fundingNotice" class="funding-notice" role="status">{{ fundingNotice }}</p>
      <BillingAccount ref="billingAccount" :api="api">
        <template #topup>
          <WaffoCheckout :api="api" :currency="topUpCurrency" :initial-amount-minor="initialAmountMinor" @refreshed="refreshAccount" />
        </template>
      </BillingAccount>
      <aside class="merchant-note">
        <span class="shield" aria-hidden="true">✓</span>
        <div>
          <strong>{{ t('commercial.billing.securedTitle') }}</strong>
          <p>{{ t('commercial.billing.securedDescription') }}</p>
        </div>
      </aside>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { accountSession, initializeAccountSession, refreshAccountSession } from '../../lib/accountSession'
import { BillingApiClient, formatIsoMoney } from '../../lib/commercialization/billing'
import BillingAccount from './BillingAccount.vue'
import WaffoCheckout from './WaffoCheckout.vue'

const billingBaseUrl = (import.meta.env.VITE_BILLING_API_BASE || '').replace(/\/$/, '')
const { locale, t } = useI18n()
const initializing = ref(true)
const billingAccount = ref<{ refresh(): Promise<void> }>()
const fundingNotice = ref('')
const initialAmountMinor = ref(1000)
const topUpCurrency = ref('USD')
const accountUrl = computed(() => {
  if (typeof window === 'undefined') return '/en/together/account/'
  const locale = window.location.pathname.split('/').filter(Boolean)[0]
  const stagingPrefix = window.location.pathname.startsWith('/billing-staging/')
    ? '/billing-staging'
    : ''
  const pathLocale = stagingPrefix
    ? window.location.pathname.split('/').filter(Boolean)[1]
    : locale
  const targetLocale = pathLocale || 'en'
  return `${stagingPrefix}/${targetLocale}/together/account/`
})
const api = billingBaseUrl
  ? new BillingApiClient({
      baseUrl: billingBaseUrl,
      getSession: async () => {
        await initializeAccountSession()
        return accountSession.session
      },
      refreshSession: refreshAccountSession,
    })
  : undefined

onMounted(async () => {
  const params = new URLSearchParams(window.location.search)
  if (params.get('reason') === 'home-insufficient-balance') {
    const amountMinor = Number(params.get('amountMinor'))
    const currency = params.get('currency')
    if (Number.isSafeInteger(amountMinor) && amountMinor > 0 && amountMinor <= 1_000_000) {
      initialAmountMinor.value = amountMinor
    }
    if (currency && /^[A-Z]{3}$/.test(currency)) {
      topUpCurrency.value = currency
    }
    fundingNotice.value = t('commercial.billing.homeFundingRequired', {
      amount: formatIsoMoney({
        currency: topUpCurrency.value,
        amountMinor: initialAmountMinor.value,
      }, locale.value),
    })
  }
  await initializeAccountSession()
  initializing.value = false
})

async function refreshAccount() {
  await billingAccount.value?.refresh()
}
</script>

<style scoped>
.billing-portal {
  --billing-radius: 14px;
  color: var(--xmcl-ink, var(--vp-c-text-1));
  margin: 0 auto;
  max-width: 1180px;
  padding: clamp(36px, 7vw, 82px) clamp(20px, 4vw, 48px) 96px;
}
.portal-hero {
  align-items: flex-end;
  border-bottom: 1px solid var(--xmcl-line, var(--vp-c-divider));
  display: flex;
  gap: 32px;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-bottom: 28px;
}
.portal-hero h1 {
  font-size: clamp(36px, 5vw, 56px);
  letter-spacing: -.045em;
  line-height: 1;
  margin: 8px 0 12px;
}
.portal-hero p { margin: 0; }
.funding-notice {
  background: color-mix(in srgb, var(--xmcl-orange) 10%, var(--xmcl-panel));
  border: 1px solid var(--xmcl-orange);
  border-radius: var(--billing-radius);
  margin: 0 0 24px;
  padding: 16px 18px;
}
.eyebrow {
  color: var(--xmcl-orange);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .12em;
}
.hero-copy {
  color: var(--xmcl-muted, var(--vp-c-text-2));
  font-size: 16px;
}
.account-link {
  color: var(--xmcl-ink);
  flex: 0 0 auto;
  font-size: 13px;
  font-weight: 750;
  text-decoration: none;
}
.account-link span { margin-left: 6px; }
.portal-notice {
  background: var(--xmcl-panel, var(--vp-c-bg-soft));
  border: 1px solid var(--xmcl-line, var(--vp-c-divider));
  border-radius: var(--billing-radius);
  display: flex;
  gap: 16px;
  margin: 32px 0;
  padding: clamp(22px, 4vw, 30px);
}
.portal-notice p { margin: 0; }
.sign-in-notice { align-items: center; }
.sign-in-notice > div { flex: 1; }
.notice-icon {
  align-items: center;
  background: var(--xmcl-ink);
  border-radius: 10px;
  color: var(--xmcl-panel);
  display: flex;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  justify-content: center;
  width: 44px;
}
.portal-notice a {
  background: var(--xmcl-lime, var(--vp-c-brand-1));
  border: 1px solid var(--xmcl-ink);
  border-radius: 8px;
  color: #17211f;
  font-size: 13px;
  font-weight: 800;
  padding: 11px 18px;
  text-decoration: none;
}
.portal-loading { align-items: center; }
.spinner {
  animation: spin .8s linear infinite;
  border: 2px solid var(--xmcl-line);
  border-right-color: var(--xmcl-orange);
  border-radius: 50%;
  height: 28px;
  width: 28px;
}
.merchant-note {
  align-items: flex-start;
  color: var(--xmcl-muted);
  display: flex;
  font-size: 13px;
  gap: 12px;
  margin: 18px 4px 0;
}
.merchant-note strong { color: var(--xmcl-ink); }
.merchant-note p { margin: 3px 0 0; }
.shield {
  align-items: center;
  background: color-mix(in srgb, #31855b 14%, transparent);
  border-radius: 50%;
  color: #31855b;
  display: flex;
  flex: 0 0 auto;
  font-weight: 900;
  height: 28px;
  justify-content: center;
  width: 28px;
}
@keyframes spin { to { transform: rotate(360deg); } }
@media (max-width: 640px) {
  .billing-portal { padding-inline: 16px; }
  .portal-hero { align-items: flex-start; flex-direction: column; }
  .sign-in-notice { align-items: stretch; flex-direction: column; }
  .sign-in-notice a { text-align: center; }
}
</style>
