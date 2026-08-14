<template>
  <section class="callback-panel" aria-live="polite">
    <span class="callback-mark" aria-hidden="true">X</span>
    <h1>{{ failed ? 'Sign-in failed' : 'Completing sign-in' }}</h1>
    <p :class="{ error: failed }">{{ message }}</p>
    <a v-if="failed" :href="accountUrl">Return to XMCL Together Account</a>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { completeWebSignIn } from '../../lib/accountSession'

const failed = ref(false)
const message = ref('Verifying the authorization and binding this browser’s DPoP key…')
const locale = typeof window === 'undefined'
  ? 'en'
  : window.location.pathname.split('/').find((part) => ['en', 'zh', 'zh-TW'].includes(part)) || 'en'
const stagingPrefix = typeof window !== 'undefined' && window.location.pathname.startsWith('/billing-staging/')
  ? '/billing-staging'
  : ''
const accountUrl = `${stagingPrefix}/${locale}/together/account/`

onMounted(async () => {
  try {
    const returnUrl = await completeWebSignIn(window.location.search)
    message.value = 'Sign-in complete. Redirecting…'
    window.location.replace(returnUrl)
  } catch (cause) {
    failed.value = true
    message.value = cause instanceof Error
      ? cause.message
      : 'Unable to complete sign-in. Start sign-in again.'
  }
})
</script>

<style scoped>
.callback-panel {
  align-items: center;
  display: grid;
  gap: 14px;
  justify-items: center;
  margin: 12vh auto;
  max-width: 32rem;
  padding: 32px;
  text-align: center;
}
.callback-mark {
  align-items: center;
  background: var(--xmcl-lime);
  border-radius: 12px;
  color: #17211f;
  display: flex;
  font-size: 32px;
  font-weight: 900;
  height: 64px;
  justify-content: center;
  width: 64px;
}
h1, p { margin: 0; }
.error { color: #bd3f2b; }
a { color: var(--vp-c-brand-1); font-weight: 700; }
</style>
