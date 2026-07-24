<template>
  <section class="account-panel" aria-labelledby="account-title">
    <template v-if="callbackOnly">
      <p v-if="processing" class="notice">{{ text.completing }}</p>
      <p v-else-if="callbackError" class="notice notice--error">{{ callbackError }}</p>
    </template>
    <template v-else>
      <header class="account-hero">
        <span class="account-mark" aria-hidden="true">X</span>
        <div>
          <p class="eyebrow">XMCL ACCOUNT</p>
          <h2 id="account-title">{{ text.title }}</h2>
          <p>{{ text.description }}</p>
        </div>
      </header>

      <p v-if="accountSession.loading" class="notice">{{ text.loading }}</p>
      <p v-else-if="accountSession.error" class="notice notice--error">{{ accountSession.error }}</p>

      <template v-else-if="accountSession.account">
        <section class="profile-summary">
          <div class="account-avatar">{{ accountInitial }}</div>
          <div class="profile-copy">
            <p>{{ text.profile }}</p>
            <h3>{{ displayName }}</h3>
            <span class="status-badge">{{ text.active }}</span>
          </div>
          <button type="button" class="secondary-button" @click="handleSignOut">{{ text.signOut }}</button>
        </section>

        <section class="account-grid">
          <article class="account-card">
            <p>{{ text.account }}</p>
            <code>{{ accountSession.account.accountId }}</code>
            <span>{{ text.accountDescription }}</span>
          </article>
          <article class="account-card">
            <p>{{ text.status }}</p>
            <strong>{{ accountSession.account.status }}</strong>
            <span>{{ text.sessionDescription }}</span>
          </article>
        </section>

        <section class="identities-section">
          <header>
            <div>
              <p class="eyebrow">{{ text.identities }}</p>
              <h3>{{ text.identitiesTitle }}</h3>
            </div>
            <span>{{ accountSession.identities.length }}</span>
          </header>
          <ul class="identity-list">
            <li v-for="identity in accountSession.identities" :key="identity.provider">
              <span class="provider-mark">{{ providerLabel(identity.provider).slice(0, 1) }}</span>
              <div>
                <strong>{{ providerLabel(identity.provider) }}</strong>
                <span>{{ identity.displayName || text.noDisplayName }}</span>
              </div>
              <div class="identity-actions">
                <small>{{ text.connected }}</small>
                <button
                  type="button"
                  :disabled="disconnecting === identity.provider || accountSession.identities.length <= 1"
                  @click="handleDisconnect(identity.provider)"
                >
                  {{ disconnecting === identity.provider ? text.disconnecting : text.disconnect }}
                </button>
              </div>
            </li>
          </ul>
          <p v-if="managementError" class="notice notice--error">{{ managementError }}</p>
        </section>
      </template>

      <section v-else class="sign-in-panel">
        <div>
          <p class="eyebrow">{{ text.signIn }}</p>
          <h3>{{ text.signInTitle }}</h3>
          <p>{{ text.signInDescription }}</p>
        </div>
        <div class="provider-grid">
          <button
            v-for="provider in providers"
            :key="provider"
            type="button"
            class="primary-button"
            :disabled="signingIn"
            @click="handleSignIn(provider)"
          >
            {{ signingIn === provider ? text.redirecting : providerLabel(provider) }}
          </button>
        </div>
        <p v-if="signInError" class="notice notice--error">{{ signInError }}</p>
      </section>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
  accountSession,
  beginWebSignIn,
  completeWebSignIn,
  initializeAccountSession,
  signOut,
  unlinkIdentity,
  type OAuthProvider,
} from '../../lib/accountSession'

const props = withDefaults(defineProps<{
  locale?: 'en' | 'zh' | 'zh-TW'
  callbackOnly?: boolean
}>(), {
  locale: 'en',
  callbackOnly: false,
})

const text = {
  en: {
    title: 'Your XMCL account',
    description: 'Sign in with an identity provider to view the XMCL account shared by XMCL services.',
    loading: 'Loading your account…',
    signIn: 'Sign in',
    signInTitle: 'Choose how you want to continue.',
    signInDescription: 'Choose a provider. XMCL never receives your provider password.',
    redirecting: 'Redirecting…',
    account: 'Account ID',
    accountDescription: 'Your stable XMCL service identity.',
    status: 'Status',
    sessionDescription: 'This browser session is active.',
    profile: 'Profile',
    active: 'Active',
    identities: 'Linked identities',
    identitiesTitle: 'Sign-in methods',
    connected: 'Connected',
    disconnect: 'Disconnect',
    disconnecting: 'Disconnecting…',
    lastIdentity: 'Connect another sign-in method before disconnecting this one.',
    noDisplayName: 'No display name provided',
    signOut: 'Sign out',
    completing: 'Completing sign-in…',
  },
  zh: {
    title: '你的 XMCL 账户',
    description: '使用身份提供商登录，即可查看 XMCL 服务共用的账户。',
    loading: '正在加载账户…',
    signIn: '登录',
    signInTitle: '选择一种继续方式。',
    signInDescription: '选择一个身份提供商。XMCL 不会接收你的 provider 密码。',
    redirecting: '正在跳转…',
    account: '账户 ID',
    accountDescription: '你的稳定 XMCL 服务身份。',
    status: '状态',
    sessionDescription: '当前浏览器 session 正在使用。',
    profile: '个人资料',
    active: '正常',
    identities: '已绑定身份',
    identitiesTitle: '登录方式',
    connected: '已连接',
    disconnect: '断开连接',
    disconnecting: '正在断开…',
    lastIdentity: '请先连接另一种登录方式，再断开当前方式。',
    noDisplayName: '未提供显示名称',
    signOut: '退出登录',
    completing: '正在完成登录…',
  },
  'zh-TW': {
    title: '你的 XMCL 帳戶',
    description: '使用身分提供者登入，即可檢視 XMCL 服務共用的帳戶。',
    loading: '正在載入帳戶…',
    signIn: '登入',
    signInTitle: '選擇一種繼續方式。',
    signInDescription: '選擇一個身分提供者。XMCL 不會接收你的 provider 密碼。',
    redirecting: '正在轉址…',
    account: '帳戶 ID',
    accountDescription: '你的穩定 XMCL 服務身分。',
    status: '狀態',
    sessionDescription: '目前的瀏覽器 session 正在使用。',
    profile: '個人資料',
    active: '正常',
    identities: '已綁定身分',
    identitiesTitle: '登入方式',
    connected: '已連結',
    disconnect: '解除連結',
    disconnecting: '正在解除連結…',
    lastIdentity: '請先連結另一種登入方式，再解除目前的方式。',
    noDisplayName: '未提供顯示名稱',
    signOut: '登出',
    completing: '正在完成登入…',
  },
}[props.locale]

const providers: OAuthProvider[] = ['microsoft', 'modrinth', 'google', 'discord']
const signingIn = ref<OAuthProvider>()
const signInError = ref<string>()
const processing = ref(false)
const callbackError = ref<string>()
const disconnecting = ref<OAuthProvider>()
const managementError = ref<string>()
const displayName = computed(() =>
  accountSession.identities.find((identity) => identity.displayName)?.displayName ?? 'XMCL User',
)
const accountInitial = computed(() => displayName.value.slice(0, 1).toUpperCase())

onMounted(async () => {
  if (props.callbackOnly) {
    processing.value = true
    try {
      const returnUrl = await completeWebSignIn(window.location.search)
      window.location.replace(safeReturnUrl(returnUrl))
    } catch (error) {
      callbackError.value = error instanceof Error ? error.message : 'Unable to complete sign-in.'
    } finally {
      processing.value = false
    }
    return
  }
  await initializeAccountSession()
})

async function handleSignIn(provider: OAuthProvider) {
  signingIn.value = provider
  signInError.value = undefined
  try {
    await beginWebSignIn(provider, window.location.href)
  } catch (error) {
    signInError.value = error instanceof Error ? error.message : 'Unable to start sign-in.'
    signingIn.value = undefined
  }
}

async function handleSignOut() {
  await signOut()
}

async function handleDisconnect(provider: OAuthProvider) {
  if (accountSession.identities.length <= 1) {
    managementError.value = text.lastIdentity
    return
  }
  if (!window.confirm(`${text.disconnect} ${providerLabel(provider)}?`)) return

  disconnecting.value = provider
  managementError.value = undefined
  try {
    await unlinkIdentity(provider)
  } catch (error) {
    managementError.value = error instanceof Error ? error.message : 'Unable to disconnect this sign-in method.'
  } finally {
    disconnecting.value = undefined
  }
}

function providerLabel(provider: OAuthProvider) {
  return provider.charAt(0).toUpperCase() + provider.slice(1)
}

function safeReturnUrl(value: string) {
  const url = new URL(value, window.location.origin)
  return url.origin === window.location.origin
    ? `${url.pathname}${url.search}${url.hash}`
    : '/en/account/'
}
</script>

<style scoped>
.account-panel {
  margin: clamp(28px, 7vw, 88px) auto;
  max-width: 920px;
}

.account-panel h2,
.account-panel h3,
.account-panel p {
  margin-top: 0;
}

.account-hero {
  align-items: flex-start;
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  gap: 18px;
  padding: 0 0 32px;
}

.account-hero h2 {
  color: var(--vp-c-text-1);
  font-size: clamp(34px, 5vw, 54px);
  letter-spacing: -0.05em;
  line-height: 0.95;
  margin: 0 0 12px;
}

.account-hero > div > p:last-child {
  color: var(--vp-c-text-2);
  line-height: 1.65;
  margin-bottom: 0;
  max-width: 560px;
}

.account-mark,
.account-avatar,
.provider-mark {
  align-items: center;
  background: var(--vp-c-brand-1);
  color: #17211f;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 800;
  justify-content: center;
}

.account-mark {
  font-size: 22px;
  height: 54px;
  width: 54px;
}

.eyebrow {
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.notice,
.sign-in-panel {
  padding: 12px 14px;
  border-left: 3px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.notice--error {
  border-left-color: var(--vp-c-danger-1);
}

.profile-summary {
  align-items: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  display: flex;
  gap: 18px;
  margin-top: 28px;
  padding: 22px;
}

.account-avatar {
  border-radius: 50%;
  font-size: 28px;
  height: 64px;
  width: 64px;
}

.profile-copy {
  flex: 1;
  min-width: 0;
}

.profile-copy p {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.profile-copy h3 {
  color: var(--vp-c-text-1);
  font-size: 23px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status-badge {
  background: color-mix(in srgb, var(--vp-c-brand-1) 18%, transparent);
  color: var(--vp-c-brand-1);
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 5px 8px;
  text-transform: uppercase;
}

.secondary-button,
.primary-button {
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  padding: 10px 14px;
}

.secondary-button {
  background: transparent;
  color: var(--vp-c-text-2);
}

.secondary-button:hover {
  border-color: var(--vp-c-text-1);
  color: var(--vp-c-text-1);
}

.account-grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 14px;
}

.account-card {
  border: 1px solid var(--vp-c-divider);
  min-height: 138px;
  padding: 20px;
}

.account-card p {
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.account-card code,
.account-card strong {
  color: var(--vp-c-text-1);
  display: block;
  font-size: 15px;
  margin-bottom: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.account-card span {
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.45;
}

.identities-section,
.sign-in-panel {
  border: 1px solid var(--vp-c-divider);
  border-left: 1px solid var(--vp-c-divider);
  margin-top: 14px;
  padding: 22px;
}

.identities-section > header {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
}

.identities-section h3,
.sign-in-panel h3 {
  color: var(--vp-c-text-1);
  font-size: 22px;
  letter-spacing: -0.03em;
  margin-bottom: 0;
}

.identities-section > header > span {
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 700;
  padding: 5px 8px;
}

.provider-grid,
.identity-list {
  display: grid;
  gap: 12px;
  padding: 0;
}

.provider-grid {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin-top: 20px;
}

.primary-button {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #17211f;
  text-align: left;
}

.primary-button:disabled {
  cursor: wait;
  opacity: 0.7;
}

.identity-list {
  list-style: none;
  margin: 20px 0 0;
}

.identity-list li {
  align-items: center;
  border: 1px solid var(--vp-c-divider);
  display: flex;
  gap: 12px;
  padding: 13px;
}

.provider-mark {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-brand-1);
  font-size: 13px;
  height: 32px;
  width: 32px;
}

.identity-list li > div {
  display: grid;
  flex: 1;
  gap: 3px;
  min-width: 0;
}

.identity-list strong {
  color: var(--vp-c-text-1);
  font-size: 13px;
}

.identity-list li > div > span,
.identity-list small {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.identity-actions {
  align-items: flex-end;
  display: grid;
  gap: 5px;
  justify-items: end;
}

.identity-list small {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.identity-actions button {
  background: transparent;
  border: 0;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  font-weight: 700;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.identity-actions button:hover:not(:disabled) {
  color: var(--vp-c-danger-1);
}

.identity-actions button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.sign-in-panel {
  border-left-color: var(--vp-c-brand-1);
  padding: 28px;
}

.sign-in-panel > div:first-child > p:last-child {
  color: var(--vp-c-text-2);
  line-height: 1.65;
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .profile-summary {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .profile-summary .secondary-button {
    margin-left: 82px;
  }

  .account-grid {
    grid-template-columns: 1fr;
  }

  .account-hero {
    gap: 13px;
  }

  .account-mark {
    height: 44px;
    width: 44px;
  }
}
</style>
