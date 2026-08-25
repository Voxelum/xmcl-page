<template>
  <a v-if="displayName" class="account-menu" :href="accountUrl">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
    </svg>
    <span>{{ displayName }}</span>
  </a>
  <div v-else ref="menuRef" class="account-entry">
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
      <span>{{ copy.signIn }}</span>
    </button>

    <transition name="menu-fade">
      <div v-if="isOpen" class="account-provider-menu" role="menu">
        <p class="menu-header">{{ copy.signInWith }}</p>
        <div class="provider-list">
          <button
            v-for="provider in providers"
            :key="provider"
            type="button"
            class="provider-button"
            :disabled="signingIn === provider"
            @click="startSignIn(provider)"
          >
            <span class="provider-icon-wrapper" :class="provider">
              <!-- Microsoft -->
              <svg v-if="provider === 'microsoft'" viewBox="0 0 21 21" width="16" height="16">
                <path fill="#f25022" d="M1 1h9v9H1z"/>
                <path fill="#7fba00" d="M11 1h9v9h-9z"/>
                <path fill="#00a4ef" d="M1 11h9v9H1z"/>
                <path fill="#ffb900" d="M11 11h9v9h-9z"/>
              </svg>
              <!-- Modrinth -->
              <img v-else-if="provider === 'modrinth'" src="/modrinth-logo.png" width="16" height="16" alt="Modrinth" class="provider-img" />
              <!-- Google -->
              <svg v-else-if="provider === 'google'" viewBox="0 0 24 24" width="16" height="16">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <!-- Discord -->
              <svg v-else-if="provider === 'discord'" viewBox="0 0 24 24" width="16" height="16" fill="#5865F2">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.373-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </span>
            <span class="provider-label">
              {{ signingIn === provider ? copy.redirecting : providerLabel(provider) }}
            </span>
          </button>
        </div>
        <span v-if="error" class="menu-error" role="alert">{{ error }}</span>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'
import {
  accountDisplayName,
  beginWebSignIn,
  initializeAccountSession,
  type OAuthProvider,
} from '../lib/accountSession'

const { lang, site, page } = useData()
const supportedAccountLocales = new Set([
  'en', 'zh', 'zh-TW', 'uk', 'de', 'fr', 'es', 'it', 'pl', 'pt', 'ar', 'jp', 'ko', 'kk', 'be', 'ru'
])
const displayName = computed(accountDisplayName)
const providers: OAuthProvider[] = ['microsoft', 'modrinth', 'google', 'discord']
const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const signingIn = ref<OAuthProvider>()
const error = ref<string>()
const copy = computed(() => {
  const map: Record<string, { signIn: string; signInWith: string; redirecting: string }> = {
    zh: { signIn: '登录', signInWith: '登录方式', redirecting: '正在跳转…' },
    'zh-TW': { signIn: '登入', signInWith: '登入方式', redirecting: '正在跳轉…' },
    uk: { signIn: 'Увійти', signInWith: 'Увійти через', redirecting: 'Перенаправлення…' },
    de: { signIn: 'Anmelden', signInWith: 'Anmelden mit', redirecting: 'Weiterleitung…' },
    fr: { signIn: 'Se connecter', signInWith: 'Se connecter avec', redirecting: 'Redirection…' },
    es: { signIn: 'Iniciar sesión', signInWith: 'Iniciar sesión con', redirecting: 'Redirigiendo…' },
    it: { signIn: 'Accedi', signInWith: 'Accedi con', redirecting: 'Reindirizzamento…' },
    pl: { signIn: 'Zaloguj się', signInWith: 'Zaloguj przez', redirecting: 'Przekierowywanie…' },
    pt: { signIn: 'Entrar', signInWith: 'Entrar com', redirecting: 'Redirecionando…' },
    ar: { signIn: 'تسجيل الدخول', signInWith: 'تسجيل الدخول عبر', redirecting: 'جارٍ التحويل…' },
    jp: { signIn: 'ログイン', signInWith: 'ログイン方法', redirecting: 'リダイレクト中…' },
    ko: { signIn: '로그인', signInWith: '로그인 방법', redirecting: '이동 중…' },
    kk: { signIn: 'Кіру', signInWith: 'Кіру әдісі', redirecting: 'Бағытталуда…' },
    be: { signIn: 'Увайсці', signInWith: 'Увайсці праз', redirecting: 'Перанакіраванне…' },
    ru: { signIn: 'Войти', signInWith: 'Войти через', redirecting: 'Перенаправление…' },
    en: { signIn: 'Sign in', signInWith: 'Sign in with', redirecting: 'Redirecting…' },
  }
  return map[lang.value] || map.en
})
const accountUrl = computed(() => {
  const locale = supportedAccountLocales.has(lang.value) ? lang.value : 'en'
  const together = page.value.relativePath.split('/').includes('together')
  return `${site.value.base}${locale}/${together ? 'together/account/' : 'account/'}`
})

function handleClickOutside(event: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  void initializeAccountSession()
  window.addEventListener('click', handleClickOutside)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
  window.removeEventListener('keydown', handleKeydown)
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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.625rem;
  color: var(--vp-c-text-1);
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: 600;
  gap: 0.5rem;
  height: 2.25rem;
  line-height: 1;
  max-width: 180px;
  margin-left: 14px;
  overflow: hidden;
  padding: 0 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
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
  background: var(--vp-c-brand-soft, rgba(16, 185, 129, 0.12));
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.account-provider-menu {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.875rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24), 0 2px 6px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0.625rem;
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  width: 190px;
  z-index: 100;
}

.menu-header {
  color: var(--vp-c-text-2);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin: 2px 4px 4px;
  text-transform: uppercase;
}

.provider-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.provider-button {
  align-items: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  color: var(--vp-c-text-1);
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  gap: 0.625rem;
  padding: 7px 10px;
  text-align: left;
  transition: all 0.15s ease;
  width: 100%;
}

.provider-icon-wrapper {
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  display: flex;
  flex: 0 0 auto;
  height: 26px;
  justify-content: center;
  width: 26px;
  transition: transform 0.15s ease, background 0.15s ease;
}

html:not(.dark) .provider-icon-wrapper {
  background: rgba(0, 0, 0, 0.04);
  border-color: rgba(0, 0, 0, 0.08);
}

.provider-button:hover:not(:disabled) {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.25);
  color: var(--vp-c-brand-1);
}

.provider-button:hover:not(:disabled) .provider-icon-wrapper {
  transform: scale(1.08);
}

.provider-button:disabled {
  cursor: wait;
  opacity: 0.6;
}

.provider-label {
  flex: 1;
  font-weight: 500;
}

.menu-error {
  color: var(--vp-c-danger-1);
  font-size: 0.75rem;
  line-height: 1.4;
  margin-top: 4px;
  padding: 0 4px;
}

/* Transition */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.96);
}

@media (max-width: 959px) {
  .account-menu {
    justify-content: center;
    margin-left: 10px;
    padding: 0;
    width: 2.25rem;
  }

  .account-menu span {
    display: none;
  }
}
</style>
