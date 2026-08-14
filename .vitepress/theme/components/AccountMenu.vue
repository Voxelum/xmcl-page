<template>
  <a v-if="displayName" class="account-menu" :href="accountUrl">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
    </svg>
    <span>{{ displayName }}</span>
  </a>
  <div v-else class="account-entry">
    <button
      class="account-menu"
      type="button"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      @click="isOpen = !isOpen"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
      </svg>
      <span>Sign in</span>
    </button>
    <div v-if="isOpen" class="account-provider-menu" role="menu">
      <p>Sign in with</p>
      <button
        v-for="provider in providers"
        :key="provider"
        type="button"
        :disabled="signingIn === provider"
        @click="startSignIn(provider)"
      >
        {{ signingIn === provider ? 'Redirecting...' : providerLabel(provider) }}
      </button>
      <span v-if="error" role="alert">{{ error }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import {
  accountDisplayName,
  beginWebSignIn,
  initializeAccountSession,
  type OAuthProvider,
} from '../lib/accountSession'

const { lang, site } = useData()
const supportedAccountLocales = new Set(['en', 'zh', 'zh-TW'])
const displayName = computed(accountDisplayName)
const providers: OAuthProvider[] = ['microsoft', 'modrinth', 'google', 'discord']
const isOpen = ref(false)
const signingIn = ref<OAuthProvider>()
const error = ref<string>()
const accountUrl = computed(() => {
  const locale = supportedAccountLocales.has(lang.value) ? lang.value : 'en'
  return `${site.value.base}${locale}/account/`
})

onMounted(() => {
  void initializeAccountSession()
})

async function startSignIn(provider: OAuthProvider) {
  signingIn.value = provider
  error.value = undefined
  try {
    await beginWebSignIn(provider, window.location.href)
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : 'Unable to start sign-in.'
    signingIn.value = undefined
  }
}

function providerLabel(provider: OAuthProvider) {
  return provider.charAt(0).toUpperCase() + provider.slice(1)
}
</script>

<style scoped>
.account-entry {
  position: relative;
}

.account-menu {
  align-items: center;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 70%, transparent);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  gap: 10px;
  height: 34px;
  letter-spacing: 0.04em;
  max-width: 180px;
  margin-left: 16px;
  overflow: hidden;
  padding: 0 10px;
  text-decoration: none;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

button.account-menu {
  cursor: pointer;
  font-family: inherit;
}

.account-menu svg {
  fill: currentColor;
  flex: 0 0 auto;
  height: 15px;
  width: 15px;
}

.account-menu span {
  overflow: hidden;
  text-overflow: ellipsis;
}

.account-menu:hover {
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-text-1);
  color: var(--vp-c-text-1);
}

.account-provider-menu {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  box-shadow: 0 10px 24px color-mix(in srgb, var(--vp-c-text-1) 18%, transparent);
  display: grid;
  gap: 4px;
  padding: 8px;
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  width: 168px;
  z-index: 10;
}

.account-provider-menu p,
.account-provider-menu span {
  color: var(--vp-c-text-2);
  font-size: 11px;
  margin: 2px 4px 5px;
}

.account-provider-menu button {
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  padding: 8px;
  text-align: left;
}

.account-provider-menu button:hover:not(:disabled) {
  background: var(--vp-c-bg-soft);
}

.account-provider-menu button:disabled {
  cursor: wait;
  opacity: 0.7;
}

.account-provider-menu span {
  color: var(--vp-c-danger-1);
  margin-top: 6px;
}

@media (max-width: 959px) {
  .account-menu {
    justify-content: center;
    margin-left: 8px;
    padding: 0;
    width: 34px;
  }

  .account-menu span {
    display: none;
  }
}
</style>
