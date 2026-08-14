<template>
  <section class="service-links" :aria-label="t('commercial.accountLinks.title')">
    <a class="service-link plus" href="../">
      <span class="icon" aria-hidden="true">✦</span>
      <span><small>XMCL TOGETHER</small><strong>{{ t('commercial.accountLinks.plusTitle') }}</strong><span>{{ t('commercial.accountLinks.plusDescription') }}</span></span>
      <span class="arrow" aria-hidden="true">→</span>
    </a>
    <a class="service-link" href="../billing">
      <span class="icon" aria-hidden="true">$</span>
      <span><small>{{ t('commercial.accountLinks.billingEyebrow') }}</small><strong>{{ t('commercial.accountLinks.billingTitle') }}</strong><span>{{ t('commercial.accountLinks.billingDescription') }}</span></span>
      <span class="arrow" aria-hidden="true">→</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.service-links { display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr); margin: 0 auto 72px; max-width: 760px; }
.service-link { align-items: center; background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 12px; color: var(--xmcl-ink); display: grid; gap: 14px; grid-template-columns: auto 1fr auto; padding: 20px; text-decoration: none; transition: border-color .2s ease, transform .2s ease; }
.service-link.plus { background: linear-gradient(135deg, var(--xmcl-panel), color-mix(in srgb, var(--xmcl-lime) 12%, var(--xmcl-panel))); }
.service-link:hover { border-color: var(--xmcl-ink); transform: translateY(-2px); }
.service-link > span:nth-child(2) { display: grid; gap: 4px; }
.service-link small { color: var(--xmcl-orange); font-size: 9px; font-weight: 850; letter-spacing: .1em; }
.service-link strong { font-size: 18px; }
.service-link > span > span { color: var(--xmcl-muted); font-size: 12px; line-height: 1.4; }
.icon { align-items: center; background: var(--xmcl-paper); border-radius: 9px; display: flex; font-size: 18px; font-weight: 850; height: 38px; justify-content: center; width: 38px; }
.plus .icon { background: var(--xmcl-lime); color: #17211f; }
.icon.server { background: color-mix(in srgb, var(--xmcl-orange) 14%, var(--xmcl-paper)); color: var(--xmcl-orange); }
.arrow { font-weight: 850; }
@media (max-width: 800px) { .service-links { grid-template-columns: 1fr; margin: -32px 16px 48px; } }
</style>
