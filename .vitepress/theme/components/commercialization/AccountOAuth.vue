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
  locale?: string
  callbackOnly?: boolean
}>(), {
  locale: 'en',
  callbackOnly: false,
})

const copies: Record<string, {
  title: string
  description: string
  loading: string
  signIn: string
  signInTitle: string
  signInDescription: string
  redirecting: string
  account: string
  accountDescription: string
  status: string
  sessionDescription: string
  profile: string
  active: string
  identities: string
  identitiesTitle: string
  connected: string
  disconnect: string
  disconnecting: string
  lastIdentity: string
  noDisplayName: string
  signOut: string
  completing: string
}> = {
  en: {
    title: 'Your XMCL Together account',
    description: 'Sign in to manage the optional online services provided through XMCL Together.',
    loading: 'Loading your account…',
    signIn: 'Sign in',
    signInTitle: 'Choose how you want to continue.',
    signInDescription: 'Choose a provider. XMCL never receives your provider password.',
    redirecting: 'Redirecting…',
    account: 'Account ID',
    accountDescription: 'Your stable XMCL Together service identity.',
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
  uk: {
    title: 'Ваш акаунт XMCL Together',
    description: 'Увійдіть, щоб керувати хмарними сервісами та підписками XMCL Together.',
    loading: 'Завантаження акаунта…',
    signIn: 'Увійти',
    signInTitle: 'Оберіть спосіб авторизації.',
    signInDescription: 'Оберіть провайдера. XMCL ніколи не отримує ваш пароль.',
    redirecting: 'Перенаправлення…',
    account: 'ID акаунта',
    accountDescription: 'Ваш постійний ідентифікатор у сервісах XMCL Together.',
    status: 'Статус',
    sessionDescription: 'Ця сесія браузера активна.',
    profile: 'Профіль',
    active: 'Активний',
    identities: 'Прив’язані профілі',
    identitiesTitle: 'Способи входу',
    connected: 'Підключено',
    disconnect: 'Від’єднати',
    disconnecting: 'Від’єднання…',
    lastIdentity: 'Підключіть інший спосіб входу перед тим, як від’єднувати цей.',
    noDisplayName: 'Ім’я не вказано',
    signOut: 'Вийти',
    completing: 'Завершення входу…',
  },
  zh: {
    title: '你的 XMCL Together 账户',
    description: '登录以管理由 XMCL Together 提供的可选在线服务。',
    loading: '正在加载账户…',
    signIn: '登录',
    signInTitle: '选择一种继续方式。',
    signInDescription: '选择一个身份提供商。XMCL 不会接收你的 provider 密码。',
    redirecting: '正在跳转…',
    account: '账户 ID',
    accountDescription: '你的稳定 XMCL Together 服务身份。',
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
    title: '你的 XMCL Together 帳戶',
    description: '登入以管理由 XMCL Together 提供的選用線上服務。',
    loading: '正在載入帳戶…',
    signIn: '登入',
    signInTitle: '選擇一種繼續方式。',
    signInDescription: '選擇一個身分提供者。XMCL 不會接收你的 provider 密碼。',
    redirecting: '正在轉址…',
    account: '帳戶 ID',
    accountDescription: '你的穩定 XMCL Together 服務身分。',
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
  de: {
    title: 'Ihr XMCL Together-Konto',
    description: 'Melden Sie sich an, um Ihre XMCL Together-Dienste zu verwalten.',
    loading: 'Konto wird geladen…',
    signIn: 'Anmelden',
    signInTitle: 'Wählen Sie Ihre Anmeldemethode.',
    signInDescription: 'Wählen Sie einen Anbieter. XMCL erhält niemals Ihr Passwort.',
    redirecting: 'Weiterleitung…',
    account: 'Konto-ID',
    accountDescription: 'Ihre feste XMCL Together-Identität.',
    status: 'Status',
    sessionDescription: 'Diese Browsersitzung ist aktiv.',
    profile: 'Profil',
    active: 'Aktiv',
    identities: 'Verknüpfte Identitäten',
    identitiesTitle: 'Anmeldemethoden',
    connected: 'Verbunden',
    disconnect: 'Trennen',
    disconnecting: 'Wird getrennt…',
    lastIdentity: 'Verbinden Sie eine andere Methode, bevor Sie diese trennen.',
    noDisplayName: 'Kein Name angegeben',
    signOut: 'Abmelden',
    completing: 'Anmeldung wird abgeschlossen…',
  },
  fr: {
    title: 'Votre compte XMCL Together',
    description: 'Connectez-vous pour gérer les services en ligne XMCL Together.',
    loading: 'Chargement du compte…',
    signIn: 'Se connecter',
    signInTitle: 'Choisissez un moyen de connexion.',
    signInDescription: 'Choisissez un fournisseur. XMCL ne reçoit jamais votre mot de passe.',
    redirecting: 'Redirection…',
    account: 'ID de compte',
    accountDescription: 'Votre identifiant de service XMCL Together.',
    status: 'Statut',
    sessionDescription: 'Cette session est active.',
    profile: 'Profil',
    active: 'Actif',
    identities: 'Identités liées',
    identitiesTitle: 'Moyens de connexion',
    connected: 'Connecté',
    disconnect: 'Déconnecter',
    disconnecting: 'Déconnexion…',
    lastIdentity: 'Associez un autre compte avant de déconnecter celui-ci.',
    noDisplayName: 'Aucun nom affiché',
    signOut: 'Se déconnecter',
    completing: 'Finalisation de la connexion…',
  },
  es: {
    title: 'Tu cuenta de XMCL Together',
    description: 'Inicia sesión para gestionar los servicios de XMCL Together.',
    loading: 'Cargando cuenta…',
    signIn: 'Iniciar sesión',
    signInTitle: 'Elige cómo continuar.',
    signInDescription: 'Elige un proveedor. XMCL nunca recibe tu contraseña.',
    redirecting: 'Redirigiendo…',
    account: 'ID de cuenta',
    accountDescription: 'Tu identidad en XMCL Together.',
    status: 'Estado',
    sessionDescription: 'Esta sesión de navegador está activa.',
    profile: 'Perfil',
    active: 'Activo',
    identities: 'Identidades vinculadas',
    identitiesTitle: 'Métodos de acceso',
    connected: 'Conectado',
    disconnect: 'Desconectar',
    disconnecting: 'Desconectando…',
    lastIdentity: 'Conecta otro método antes de desconectar este.',
    noDisplayName: 'Sin nombre',
    signOut: 'Cerrar sesión',
    completing: 'Completando inicio de sesión…',
  },
  it: {
    title: 'Il tuo account XMCL Together',
    description: 'Accedi per gestire i servizi XMCL Together.',
    loading: 'Caricamento account…',
    signIn: 'Accedi',
    signInTitle: 'Scegli come continuare.',
    signInDescription: 'Scegli un provider. XMCL non riceve mai la tua password.',
    redirecting: 'Reindirizzamento…',
    account: 'ID account',
    accountDescription: 'La tua identità in XMCL Together.',
    status: 'Stato',
    sessionDescription: 'Sessione attiva.',
    profile: 'Profilo',
    active: 'Attivo',
    identities: 'Identità collegate',
    identitiesTitle: 'Metodi di accesso',
    connected: 'Collegato',
    disconnect: 'Disconnetti',
    disconnecting: 'Disconnessione…',
    lastIdentity: 'Collega un altro metodo prima di rimuovere questo.',
    noDisplayName: 'Nessun nome',
    signOut: 'Esci',
    completing: 'Accesso in corso…',
  },
  pl: {
    title: 'Twoje konto XMCL Together',
    description: 'Zaloguj się, aby zarządzać usługami XMCL Together.',
    loading: 'Ładowanie konta…',
    signIn: 'Zaloguj się',
    signInTitle: 'Wybierz sposób logowania.',
    signInDescription: 'Wybierz dostawcę. XMCL nigdy nie otrzymuje Twojego hasła.',
    redirecting: 'Przekierowywanie…',
    account: 'ID konta',
    accountDescription: 'Twój identyfikator XMCL Together.',
    status: 'Status',
    sessionDescription: 'Sesja jest aktywna.',
    profile: 'Profil',
    active: 'Aktywne',
    identities: 'Połączone tożsamości',
    identitiesTitle: 'Metody logowania',
    connected: 'Połączono',
    disconnect: 'Odłącz',
    disconnecting: 'Odłączanie…',
    lastIdentity: 'Podłącz inną metodę przed odłączeniem obecnej.',
    noDisplayName: 'Brak nazwy',
    signOut: 'Wyloguj się',
    completing: 'Finalizowanie logowania…',
  },
  pt: {
    title: 'Sua conta XMCL Together',
    description: 'Entre para gerenciar os serviços online do XMCL Together.',
    loading: 'Carregando conta…',
    signIn: 'Entrar',
    signInTitle: 'Escolha como continuar.',
    signInDescription: 'Escolha um provedor. O XMCL nunca recebe sua senha.',
    redirecting: 'Redirecionando…',
    account: 'ID da conta',
    accountDescription: 'Sua identidade no XMCL Together.',
    status: 'Status',
    sessionDescription: 'Esta sessão está ativa.',
    profile: 'Perfil',
    active: 'Ativo',
    identities: 'Identidades vinculadas',
    identitiesTitle: 'Métodos de login',
    connected: 'Conectado',
    disconnect: 'Desconectar',
    disconnecting: 'Desconectando…',
    lastIdentity: 'Conecte outro método antes de desconectar este.',
    noDisplayName: 'Sem nome',
    signOut: 'Sair',
    completing: 'Concluindo login…',
  },
  ar: {
    title: 'حساب XMCL Together الخاص بك',
    description: 'سجل الدخول لإدارة الخدمات السحابية في XMCL Together.',
    loading: 'جارٍ تحميل الحساب…',
    signIn: 'تسجيل الدخول',
    signInTitle: 'اختر طريقة المتابعة.',
    signInDescription: 'اختر مزود الخدمة. لا يستلم XMCL كلمة مرورك أبداً.',
    redirecting: 'جارٍ التحويل…',
    account: 'معرف الحساب',
    accountDescription: 'هويتك الدائمة في خدمة XMCL Together.',
    status: 'الحالة',
    sessionDescription: 'جلسة المتصفح هذه نشطة.',
    profile: 'الملف الشخصي',
    active: 'نشط',
    identities: 'الحسابات المرتبطة',
    identitiesTitle: 'طرق تسجيل الدخول',
    connected: 'متصل',
    disconnect: 'فصل',
    disconnecting: 'جارٍ الفصل…',
    lastIdentity: 'يرجى ربط طريقة تسجيل دخول أخرى قبل فصل هذه الطريقة.',
    noDisplayName: 'لم يتم توفير اسم',
    signOut: 'تسجيل الخروج',
    completing: 'جارٍ إتمام تسجيل الدخول…',
  },
  jp: {
    title: 'XMCL Together アカウント',
    description: 'ログインして XMCL Together の各種サービスを管理します。',
    loading: 'アカウントを読み込み中…',
    signIn: 'ログイン',
    signInTitle: '続行する方法を選択してください。',
    signInDescription: 'プロバイダーを選択します。XMCL がパスワードを受け取ることはありません。',
    redirecting: 'リダイレクト中…',
    account: 'アカウント ID',
    accountDescription: 'XMCL Together の共通アカウント識別子。',
    status: 'ステータス',
    sessionDescription: 'ブラウザセッションは有効です。',
    profile: 'プロフィール',
    active: '有効',
    identities: '連携済みアカウント',
    identitiesTitle: 'ログイン方法',
    connected: '連携中',
    disconnect: '連携解除',
    disconnecting: '解除中…',
    lastIdentity: '解除する前に別のアカウントを連携してください。',
    noDisplayName: '表示名なし',
    signOut: 'ログアウト',
    completing: 'ログイン完了処理中…',
  },
  ko: {
    title: 'XMCL Together 계정',
    description: '로그인하여 XMCL Together 온라인 서비스를 관리하세요.',
    loading: '계정 불러오는 중…',
    signIn: '로그인',
    signInTitle: '로그인 방식을 선택하세요.',
    signInDescription: '인증 제공자를 선택합니다. XMCL은 비밀번호를 저장하지 않습니다.',
    redirecting: '이동 중…',
    account: '계정 ID',
    accountDescription: 'XMCL Together 고유 식별자.',
    status: '상태',
    sessionDescription: '현재 세션이 활성화되어 있습니다.',
    profile: '프로필',
    active: '활성',
    identities: '연결된 계정',
    identitiesTitle: '로그인 수단',
    connected: '연결됨',
    disconnect: '연결 해제',
    disconnecting: '해제 중…',
    lastIdentity: '현재 수단을 해제하기 전에 다른 로그인 수단을 먼저 연결하세요.',
    noDisplayName: '표시 이름 없음',
    signOut: '로그아웃',
    completing: '로그인 완료 중…',
  },
  kk: {
    title: 'Сіздің XMCL Together тіркелгіңіз',
    description: 'XMCL Together қызметтерін басқару үшін жүйеге кіріңіз.',
    loading: 'Тіркелгі жүктелуде…',
    signIn: 'Кіру',
    signInTitle: 'Жалғастыру әдісін таңдаңыз.',
    signInDescription: 'Провайдерді таңдаңыз. XMCL құпия сөзіңізді сақтамайды.',
    redirecting: 'Бағытталуда…',
    account: 'Тіркелгі ID',
    accountDescription: 'XMCL Together қызметіндегі тұрақты сәйкестендіргішіңіз.',
    status: 'Күйі',
    sessionDescription: 'Бұл сессия белсенді.',
    profile: 'Профиль',
    active: 'Белсенді',
    identities: 'Байланыстырылған профильдер',
    identitiesTitle: 'Кіру әдістері',
    connected: 'Қосылған',
    disconnect: 'Ажырату',
    disconnecting: 'Ажыратылуда…',
    lastIdentity: 'Бұл әдісті ажыратпас бұрын басқасын қосыңыз.',
    noDisplayName: 'Аты көрсетілмеген',
    signOut: 'Шығу',
    completing: 'Кіру аяқталуда…',
  },
  be: {
    title: 'Ваш уліковы запіс XMCL Together',
    description: 'Увайдзіце, каб кіраваць сэрвісамі XMCL Together.',
    loading: 'Загрузка ўліковага запісу…',
    signIn: 'Увайсці',
    signInTitle: 'Абярыце спосаб уваходу.',
    signInDescription: 'Абярыце правайдэра. XMCL ніколі не атрымлівае ваш пароль.',
    redirecting: 'Перанакіраванне…',
    account: 'ID акаўнта',
    accountDescription: 'Ваш пастаянны ідэнтыфікатар у XMCL Together.',
    status: 'Статус',
    sessionDescription: 'Гэтая сесія актыўная.',
    profile: 'Профіль',
    active: 'Актыўны',
    identities: 'Прывязаныя профілі',
    identitiesTitle: 'Спосабы ўваходу',
    connected: 'Падключана',
    disconnect: 'Адключыць',
    disconnecting: 'Адключэнне…',
    lastIdentity: 'Падключыце іншы спосаб перад адключэннем гэтага.',
    noDisplayName: 'Імя не пазначана',
    signOut: 'Выйсці',
    completing: 'Завяршэнне ўваходу…',
  },
  ru: {
    title: 'Ваш аккаунт XMCL Together',
    description: 'Войдите, чтобы управлять сервисами и подписками XMCL Together.',
    loading: 'Загрузка аккаунта…',
    signIn: 'Войти',
    signInTitle: 'Выберите способ авторизации.',
    signInDescription: 'Выберите провайдера. XMCL никогда не получает ваш пароль.',
    redirecting: 'Перенаправление…',
    account: 'ID аккаунта',
    accountDescription: 'Ваш постоянный идентификатор в XMCL Together.',
    status: 'Статус',
    sessionDescription: 'Эта сессия браузера активна.',
    profile: 'Профиль',
    active: 'Активен',
    identities: 'Привязанные профили',
    identitiesTitle: 'Способы входа',
    connected: 'Подключено',
    disconnect: 'Отвязать',
    disconnecting: 'Отвязка…',
    lastIdentity: 'Привяжите другой способ входа перед отвязкой текущего.',
    noDisplayName: 'Имя не указано',
    signOut: 'Выйти',
    completing: 'Завершение входа…',
  },
}

const text = computed(() => copies[props.locale] || copies.en)

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
