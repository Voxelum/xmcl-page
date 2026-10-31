<template>
  <div class="api-status-page">
    <!-- Hero Banner -->
    <header class="status-hero">
      <div class="status-hero-grid" aria-hidden="true" />
      <div class="status-hero-content">
        <div class="status-hero-kicker">
          <span class="live-pulse-dot" :class="overallStatusClass" />
          <span>{{ tText.kicker }}</span>
          <span class="status-hero-sep">/</span>
          <a
            href="https://github.com/Voxelum/xmcl-web-api"
            target="_blank"
            rel="noopener noreferrer"
            class="status-repo-link"
          >
            Voxelum/xmcl-web-api ↗
          </a>
        </div>

        <h1 class="status-hero-title">{{ tText.title }}</h1>
        <p class="status-hero-description">{{ tText.description }}</p>

        <!-- Global Health Card -->
        <div class="global-health-card">
          <div class="health-main">
            <div class="health-status-badge" :class="overallStatusClass">
              <span class="health-dot" />
              <strong>{{ overallStatusText }}</strong>
            </div>

            <div class="health-metrics">
              <div class="metric-item">
                <span class="metric-label">{{ tText.edgeRegion }}</span>
                <span class="metric-val">Cloudflare Global Edge</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">{{ tText.latency }}</span>
                <span class="metric-val" :class="{ 'val-good': latency && latency < 200, 'val-warn': latency && latency >= 200 }">
                  {{ latency !== null ? `${latency} ms` : '—' }}
                </span>
              </div>
              <div class="metric-item">
                <span class="metric-label">{{ tText.lastChecked }}</span>
                <span class="metric-val">{{ lastCheckedText }}</span>
              </div>
            </div>
          </div>

          <div class="health-actions">
            <button
              type="button"
              class="refresh-btn"
              :disabled="isChecking || cooldownSeconds > 0"
              @click="checkStatus(true)"
            >
              <svg v-if="isChecking" class="spin-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke-width="3" stroke-dasharray="32" stroke-linecap="round" />
              </svg>
              <svg v-else viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 4v6h-6M1 20v-6h6" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
              <span>{{ cooldownSeconds > 0 ? `${tText.refresh} (${cooldownSeconds}s)` : tText.refresh }}</span>
            </button>
          </div>
        </div>

        <!-- System Architecture Overview Banner -->
        <div class="arch-banner">
          <div class="arch-tag">{{ tText.archTag }}</div>
          <p class="arch-desc">
            {{ tText.archDesc }}
          </p>
        </div>
      </div>
    </header>

    <!-- Content Section -->
    <main class="status-content">
      <!-- Filter Bar -->
      <div class="status-filter-bar">
        <!-- Category Tabs -->
        <div class="status-tabs" role="tablist">
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            class="status-tab-btn"
            :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
          >
            <span>{{ cat.label }}</span>
            <span class="tab-count">{{ getCategoryCount(cat.id) }}</span>
          </button>
        </div>

        <!-- Search Bar -->
        <div class="status-search-box">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="tText.searchPlaceholder"
            aria-label="Search APIs"
          />
          <button v-if="searchQuery" type="button" class="clear-search-btn" @click="searchQuery = ''">✕</button>
        </div>
      </div>

      <!-- Services Grid -->
      <div v-if="filteredServices.length > 0" class="services-grid">
        <article
          v-for="service in filteredServices"
          :key="service.id"
          class="service-card"
        >
          <!-- Card Header -->
          <div class="card-header">
            <div class="card-title-group">
              <span class="method-badge" :class="service.method.toLowerCase()">{{ service.method }}</span>
              <h2 class="service-title">{{ service.name }}</h2>
            </div>
            <div class="service-live-status">
              <span class="status-beacon" :class="getServiceStatusClass(service)" />
              <span class="status-label">{{ getServiceStatusText(service) }}</span>
            </div>
          </div>

          <!-- Endpoint URL -->
          <div class="endpoint-line">
            <code>{{ service.endpoint }}</code>
          </div>

          <!-- Purpose / "Що за API" -->
          <div class="card-section">
            <strong class="section-label">{{ tText.whatIsIt }}</strong>
            <p class="section-text">{{ service.purpose }}</p>
          </div>

          <!-- Responsibility / "За що відповідає" -->
          <div class="card-section">
            <strong class="section-label">{{ tText.responsibleFor }}</strong>
            <p class="section-text highlight">{{ service.responsibility }}</p>
          </div>

          <!-- Card Footer Metadata -->
          <div class="card-footer">
            <span class="card-upstream">
              <span class="meta-label">{{ tText.upstream }}:</span> {{ service.upstream }}
            </span>
            <span class="card-category-badge">{{ service.categoryLabel }}</span>
          </div>
        </article>
      </div>

      <!-- Empty Filter State -->
      <div v-else class="status-empty">
        <p>{{ tText.noServicesFound }} "{{ searchQuery }}"</p>
        <button type="button" class="reset-search-btn" @click="resetFilters">
          {{ tText.viewAll }}
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isUk = computed(() => (lang.value || '').startsWith('uk'))

interface ApiService {
  id: string
  name: string
  method: 'GET' | 'POST' | 'WSS' | 'ALL'
  endpoint: string
  category: 'distribution' | 'runtime' | 'multiplayer' | 'auth' | 'ai'
  categoryLabel: string
  purpose: string
  responsibility: string
  upstream: string
  probedEndpoint?: string
}

// Live state
const isChecking = ref(false)
const overallStatus = ref<'operational' | 'degraded' | 'offline' | 'checking'>('checking')
const latency = ref<number | null>(null)
const lastChecked = ref<Date | null>(null)
const cooldownSeconds = ref(0)
const searchQuery = ref('')
const activeCategory = ref<string>('all')

let cooldownTimer: any = null

const CACHE_KEY = 'xmcl_web_api_status_cache'
const CACHE_TTL_MS = 60 * 1000 // 60 seconds

// Translations for Ukrainian vs English
const tText = computed(() => {
  if (isUk.value) {
    return {
      kicker: 'ІНФРАСТРУКТУРА ТА ХМАРНІ СЕРВІСИ XMCL',
      title: 'Статус систем та Web API XMCL',
      description: 'Моніторинг оперативної працездатності, кінцевих точок та мікросервісів екосистеми X-Minecraft Launcher у реальному часі.',
      edgeRegion: 'Мережевий шлюз',
      latency: 'Затримка відповіді',
      lastChecked: 'Остання перевірка',
      refresh: 'Оновити статус',
      archTag: 'АРХІТЕКТУРА HONO & CLOUDFLARE WORKERS',
      archDesc: 'Сервіси XMCL Web API побудовані на основі високопродуктивного стеку Hono, Cloudflare Workers, Durable Objects та Deno. Це забезпечує низьку затримку та автоматичне гео-розподілення трафіку по всьому світу.',
      whatIsIt: 'Що за API:',
      responsibleFor: 'За що відповідає в лаунчері:',
      upstream: 'Цільовий сервіс',
      searchPlaceholder: 'Пошук за назвою або ендпоінтом...',
      noServicesFound: 'Не знайдено сервісів за запитом',
      viewAll: 'Показати всі API',
      allOperational: 'Усі системи працюють штатно',
      degraded: 'Часткове уповільнення або збої',
      offline: 'Сервіс тимчасово недоступний',
      checkingStatus: 'Перевірка з\'єднання...',
      justNow: 'Щойно',
      ago: 'тому',
      minutes: 'хв',
      seconds: 'с'
    }
  }
  return {
    kicker: 'XMCL CLOUD & RUNTIME INFRASTRUCTURE',
    title: 'XMCL Systems & Web API Status',
    description: 'Real-time operational health, live endpoints, and architectural roles of the services powering the X-Minecraft Launcher ecosystem.',
    edgeRegion: 'Edge Gateway',
    latency: 'Response Latency',
    lastChecked: 'Last Checked',
    refresh: 'Refresh Status',
    archTag: 'HONO & CLOUDFLARE WORKERS ARCHITECTURE',
    archDesc: 'The XMCL Web API operates on a shared Hono source tree deployed across Cloudflare Workers, Durable Objects, and Deno, providing low-latency distribution and global edge resilience.',
    whatIsIt: 'Service Overview:',
    responsibleFor: 'Launcher Responsibility:',
    upstream: 'Upstream Engine',
    searchPlaceholder: 'Search by API name or endpoint...',
    noServicesFound: 'No services found matching',
    viewAll: 'View all APIs',
    allOperational: 'All Systems Operational',
    degraded: 'Partial Degraded Performance',
    offline: 'Service Disruptions Detected',
    checkingStatus: 'Checking connectivity...',
    justNow: 'Just now',
    ago: 'ago',
    minutes: 'm',
    seconds: 's'
  }
})

// Categories
const categories = computed(() => [
  { id: 'all', label: isUk.value ? 'Всі сервіси' : 'All Services' },
  { id: 'distribution', label: isUk.value ? 'Релізи та оновлення' : 'Releases & Updates' },
  { id: 'runtime', label: isUk.value ? 'Java та ресурси' : 'Java & Resources' },
  { id: 'multiplayer', label: isUk.value ? 'Мультиплеєр & P2P' : 'Multiplayer & P2P' },
  { id: 'auth', label: isUk.value ? 'Автентифікація' : 'Authentication' },
  { id: 'ai', label: isUk.value ? 'AI та бекапи' : 'AI & Backups' }
])

// Services definition
const services = computed<ApiService[]>(() => {
  if (isUk.value) {
    return [
      {
        id: 'api-root',
        name: 'Web API Gateway & Health Check',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/',
        category: 'distribution',
        categoryLabel: 'Шлюз API',
        purpose: 'Головна коренева точка входу та автоматичний реєстр активних маршрутів.',
        responsibility: 'Забезпечує перевірку працездатності шлюзу (Health Check) та динамічне виявлення активних мікросервісів лаунчера.',
        upstream: 'Cloudflare Worker (api)',
        probedEndpoint: 'https://api.xmcl.app/'
      },
      {
        id: 'release-latest',
        name: 'Release Manifest & Versioning',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/latest',
        category: 'distribution',
        categoryLabel: 'Релізи',
        purpose: 'Шлюз метаданих останнього релізу XMCL із GitHub Releases.',
        responsibility: 'Визначає наявність оновлень, версію лаунчера, прямі посилання на файли та перевіряє хеші для безпечного автоматичного оновлення.',
        upstream: 'GitHub API / Releases',
        probedEndpoint: 'https://api.xmcl.app/latest'
      },
      {
        id: 'release-mirror',
        name: 'Release Asset Download Mirror',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/releases/:filename',
        category: 'distribution',
        categoryLabel: 'Дистрибуція',
        purpose: 'Високошвидкісне кешуюче дзеркало дистрибутивів лаунчера.',
        responsibility: 'Доставка інсталяторів (AppX, Snap, AppImage, DMG, Zip, Tar.xz) з глобального CDN для уникнення лімітів GitHub.',
        upstream: 'Cloudflare R2 / GitHub Assets'
      },
      {
        id: 'notifications',
        name: 'Broadcast Incident & Maintenance Notices',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/notifications',
        category: 'distribution',
        categoryLabel: 'Сповіщення',
        purpose: 'Система екстрених широкомовних технічних сповіщень.',
        responsibility: 'Попереджає користувачів про технічні збої сервісів Mojang/Microsoft, планові роботи лаунчера або критичні патчі безпеки.',
        upstream: 'XMCL Incident Desk'
      },
      {
        id: 'flights',
        name: 'Feature Flights & Experimentation',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/flights',
        category: 'distribution',
        categoryLabel: 'Експерименти',
        purpose: 'Сервіс динамічних конфігурацій (Feature Flags).',
        responsibility: 'Керує поступовим розгортанням нових бета-функцій лаунчера для безпечного тестування без повторної компіляції.',
        upstream: 'Cloudflare Edge KV'
      },
      {
        id: 'zulu-java',
        name: 'Java Zulu OpenJDK Resolver',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/zulu',
        category: 'runtime',
        categoryLabel: 'Java Engine',
        purpose: 'Диспетчер сумісних пакетів середовища виконання Java.',
        responsibility: 'Автоматично знаходить, обирає та завантажує точну версію Azul Zulu JRE/JDK (Java 8, 17, 21) під поточну ОС та архітектуру (x64, arm64).',
        upstream: 'Azul Systems API'
      },
      {
        id: 'mod-translation',
        name: 'Community Content Translation Proxy',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/translation',
        category: 'runtime',
        categoryLabel: 'Локалізація',
        purpose: 'Шлюз машинної та краудсорсингової локалізації контенту.',
        responsibility: 'Перекладає назви, описи та категорії модів із Modrinth і CurseForge рідною мовою гравця в інтерфейсі пошуку.',
        upstream: 'Azure Table & Community i18n extra'
      },
      {
        id: 'db-downloads',
        name: 'Minecraft Upstream Database Mirror',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/downloads/databases/:source/:asset',
        category: 'runtime',
        categoryLabel: 'Бази даних',
        purpose: 'Кешуючий проксі ігрових каталогів та метаданих.',
        responsibility: 'Прискорює синхронізацію маніфестів версій гри, Forge/Fabric завантажувачів та індексів ресурспаків.',
        upstream: 'Mojang / BMCLAPI Mirror'
      },
      {
        id: 'rtc-signaling',
        name: 'WebRTC Signaling & P2P Session Rooms',
        method: 'WSS',
        endpoint: 'wss://api.xmcl.app/v1/multiplayer & apps/signaling',
        category: 'multiplayer',
        categoryLabel: 'Мультиплеєр',
        purpose: 'Сигнальний сервер реального часу для однорангової мережі (P2P).',
        responsibility: 'Організовує обмін SDP/ICE кандидатами, створює віртуальні ігрові кімнати та забезпечує гру з друзями в XMCL Together без виділеного сервера.',
        upstream: 'Cloudflare Durable Objects & COTURN'
      },
      {
        id: 'backup-policy',
        name: 'Cloud Backup Storage Policy & Quota',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/v1/backup-storage-policy',
        category: 'ai',
        categoryLabel: 'Хмарні бекапи',
        purpose: 'Сервіс керування хмарним сховищем збережень світів.',
        responsibility: 'Генерує безпечні пресайнед-посилання на S3/Cloudflare R2 для вивантаження резервних копій та відстежує квоти збережень.',
        upstream: 'S3 Presigner / R2 Storage'
      },
      {
        id: 'auth-gateway',
        name: 'Multi-Provider Identity & Session Hub',
        method: 'ALL',
        endpoint: 'https://api.xmcl.app/v1/auth/:provider/* & /v1/sessions/*',
        category: 'auth',
        categoryLabel: 'Автентифікація',
        purpose: 'Централізований шлюз автентифікації та ротації сесій.',
        responsibility: 'Безпечно авторизує користувачів (Microsoft, GitHub, Discord), генерує та ротує криптографічні сесійні токени лаунчера.',
        upstream: 'OAuth Providers / Secure Store'
      },
      {
        id: 'elyby-authlib',
        name: 'Ely.by Authlib & Alternative Skin Relay',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/elyby/authlib',
        category: 'auth',
        categoryLabel: 'Скіни',
        purpose: 'Проксі-міст до альтернативних служб автентифікації та скінів.',
        responsibility: 'Забезпечує прозору підтримку кастомних скінів та авторизації облікових записів сервісу Ely.by у грі.',
        upstream: 'Ely.by API'
      },
      {
        id: 'modrinth-auth',
        name: 'Modrinth OAuth2 Integration Gateway',
        method: 'GET',
        endpoint: 'https://api.xmcl.app/modrinth/auth',
        category: 'auth',
        categoryLabel: 'Modrinth',
        purpose: 'Шлюз авторизації та взаємодії з платформою Modrinth.',
        responsibility: 'Дозволяє користувачам керувати власними проектами, синхронізувати обрані збірки та отримувати доступ до API Modrinth.',
        upstream: 'Modrinth OAuth Gateway'
      },
      {
        id: 'agnes-ai',
        name: 'Agnes AI Diagnostics & LLM Gateway',
        method: 'POST',
        endpoint: 'apps/ai -> https://api.xmcl.app/v1/chat/completions',
        category: 'ai',
        categoryLabel: 'Штучний інтелект',
        purpose: 'Шлюз мовної моделі вбудованого асистента Agnes AI.',
        responsibility: 'Обробляє логи крашів гри, аналізує конфлікти модів та пропонує готові кроки для виправлення помилок запуску.',
        upstream: 'OpenAI / Gemini / DeepSeek Cloud Proxy'
      },
      {
        id: 'billing-services',
        name: 'XMCL+ Allowances & Billing Subsystem',
        method: 'ALL',
        endpoint: 'https://api.xmcl.app/v1/billing/* & /v1/xmcl-plus/*',
        category: 'ai',
        categoryLabel: 'XMCL+',
        purpose: 'Підсистема підписок XMCL+ та хмарних ресурсів.',
        responsibility: 'Обробляє підписки, квоти хмарного сховища резервних копій та виділену смугу пропускання для релею мультиплеєра.',
        upstream: 'Mongo Ledger / Payment Engine'
      }
    ]
  }

  // English fallback
  return [
    {
      id: 'api-root',
      name: 'Web API Gateway & Health Check',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/',
      category: 'distribution',
      categoryLabel: 'API Gateway',
      purpose: 'Primary root entry point and dynamic route registry discovery.',
      responsibility: 'Ensures gateway health verification (Health Check) and dynamically exposes all available microservice endpoints to the launcher.',
      upstream: 'Cloudflare Worker (api)',
      probedEndpoint: 'https://api.xmcl.app/'
    },
    {
      id: 'release-latest',
      name: 'Release Manifest & Versioning',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/latest',
      category: 'distribution',
      categoryLabel: 'Releases',
      purpose: 'Metadata gateway for latest launcher releases from GitHub.',
      responsibility: 'Handles update checks, version resolution, release notes, and binary asset download mirrors for automatic in-launcher updates.',
      upstream: 'GitHub API / Releases',
      probedEndpoint: 'https://api.xmcl.app/latest'
    },
    {
      id: 'release-mirror',
      name: 'Release Asset Download Mirror',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/releases/:filename',
      category: 'distribution',
      categoryLabel: 'Distribution',
      purpose: 'High-speed cached mirror for binary release distributions.',
      responsibility: 'Delivers application installers (AppX, Snap, AppImage, DMG, Zip, Tar.xz) from global edge cache without GitHub rate-limits.',
      upstream: 'Cloudflare R2 / GitHub Assets'
    },
    {
      id: 'notifications',
      name: 'Broadcast Incident & Maintenance Notices',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/notifications',
      category: 'distribution',
      categoryLabel: 'Notices',
      purpose: 'Emergency broadcast technical advisory feed.',
      responsibility: 'Informs players of Mojang/Microsoft service outages, planned launcher maintenance, or critical security advisories.',
      upstream: 'XMCL Incident Desk'
    },
    {
      id: 'flights',
      name: 'Feature Flights & Experimentation',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/flights',
      category: 'distribution',
      categoryLabel: 'Experiments',
      purpose: 'Dynamic configuration and feature-flag distribution service.',
      responsibility: 'Manages gradual rollouts of experimental launcher capabilities for safe telemetry-backed testing without recompiling.',
      upstream: 'Cloudflare Edge KV'
    },
    {
      id: 'zulu-java',
      name: 'Java Zulu OpenJDK Resolver',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/zulu',
      category: 'runtime',
      categoryLabel: 'Java Engine',
      purpose: 'OpenJDK runtime package resolver and discovery service.',
      responsibility: 'Automatically identifies, matches, and delivers compatible Azul Zulu JRE/JDK packages (Java 8, 17, 21) based on OS architecture.',
      upstream: 'Azul Systems API'
    },
    {
      id: 'mod-translation',
      name: 'Community Content Translation Proxy',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/translation',
      category: 'runtime',
      categoryLabel: 'Localization',
      purpose: 'Machine & crowdsourced community mod localization service.',
      responsibility: 'Translates mod titles, summaries, and tags from Modrinth and CurseForge into the user native language in real-time.',
      upstream: 'Azure Table & Community i18n extra'
    },
    {
      id: 'db-downloads',
      name: 'Minecraft Upstream Database Mirror',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/downloads/databases/:source/:asset',
      category: 'runtime',
      categoryLabel: 'Databases',
      purpose: 'Edge cache proxy for upstream game databases.',
      responsibility: 'Speeds up downloads of official Minecraft version lists, Forge/Fabric loader manifests, and resource pack catalogs.',
      upstream: 'Mojang / BMCLAPI Mirror'
    },
    {
      id: 'rtc-signaling',
      name: 'WebRTC Signaling & P2P Session Rooms',
      method: 'WSS',
      endpoint: 'wss://api.xmcl.app/v1/multiplayer & apps/signaling',
      category: 'multiplayer',
      categoryLabel: 'Multiplayer',
      purpose: 'Real-time WebSocket signaling server for peer-to-peer play.',
      responsibility: 'Exchanges SDP/ICE connection candidates, orchestrates room matchmaking, and connects players in XMCL Together without port forwarding.',
      upstream: 'Cloudflare Durable Objects & COTURN'
    },
    {
      id: 'backup-policy',
      name: 'Cloud Backup Storage Policy & Quota',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/v1/backup-storage-policy',
      category: 'ai',
      categoryLabel: 'Cloud Backups',
      purpose: 'Management service for cloud game instance storage.',
      responsibility: 'Issues secure presigned upload authorizations for S3/R2 storage, validates backup integrity, and enforces storage quotas.',
      upstream: 'S3 Presigner / R2 Storage'
    },
    {
      id: 'auth-gateway',
      name: 'Multi-Provider Identity & Session Hub',
      method: 'ALL',
      endpoint: 'https://api.xmcl.app/v1/auth/:provider/* & /v1/sessions/*',
      category: 'auth',
      categoryLabel: 'Identity',
      purpose: 'Centralized OAuth2 gateway and session rotation authority.',
      responsibility: 'Secures user authentication (Microsoft, GitHub, Discord) and signs cryptographic launcher session tokens with automated rotation.',
      upstream: 'OAuth Providers / Secure Store'
    },
    {
      id: 'elyby-authlib',
      name: 'Ely.by Authlib & Alternative Skin Relay',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/elyby/authlib',
      category: 'auth',
      categoryLabel: 'Custom Skins',
      purpose: 'Proxy relay for alternative authentication and skin servers.',
      responsibility: 'Provides seamless in-game support for Ely.by player skins, capes, and non-Mojang authentication profiles.',
      upstream: 'Ely.by API'
    },
    {
      id: 'modrinth-auth',
      name: 'Modrinth OAuth2 Integration Gateway',
      method: 'GET',
      endpoint: 'https://api.xmcl.app/modrinth/auth',
      category: 'auth',
      categoryLabel: 'Modrinth',
      purpose: 'Authentication and token exchange gateway for Modrinth.',
      responsibility: 'Enables users to manage personal mod collections, sync modpacks, and authenticate with Modrinth services.',
      upstream: 'Modrinth OAuth Gateway'
    },
    {
      id: 'agnes-ai',
      name: 'Agnes AI Diagnostics & LLM Gateway',
      method: 'POST',
      endpoint: 'apps/ai -> https://api.xmcl.app/v1/chat/completions',
      category: 'ai',
      categoryLabel: 'AI Assistant',
      purpose: 'LLM proxy gateway for the integrated Agnes AI assistant.',
      responsibility: 'Analyzes Minecraft crash reports, diagnoses mod conflicts, and generates targeted remediation steps for launch failures.',
      upstream: 'OpenAI / Gemini / DeepSeek Cloud Proxy'
    },
    {
      id: 'billing-services',
      name: 'XMCL+ Allowances & Billing Subsystem',
      method: 'ALL',
      endpoint: 'https://api.xmcl.app/v1/billing/* & /v1/xmcl-plus/*',
      category: 'ai',
      categoryLabel: 'XMCL+',
      purpose: 'Billing and subscription ledger for XMCL+ cloud features.',
      responsibility: 'Manages cloud backup allowances, dedicated TURN relay bandwidth, and premium server control features.',
      upstream: 'Mongo Ledger / Payment Engine'
    }
  ]
})

// Filtered list
const filteredServices = computed(() => {
  let list = services.value
  if (activeCategory.value !== 'all') {
    list = list.filter(s => s.category === activeCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    list = list.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.endpoint.toLowerCase().includes(q) ||
      s.purpose.toLowerCase().includes(q) ||
      s.responsibility.toLowerCase().includes(q)
    )
  }
  return list
})

function getCategoryCount(catId: string) {
  if (catId === 'all') return services.value.length
  return services.value.filter(s => s.category === catId).length
}

function resetFilters() {
  searchQuery.value = ''
  activeCategory.value = 'all'
}

// Status checks
const overallStatusClass = computed(() => {
  if (overallStatus.value === 'operational') return 'is-operational'
  if (overallStatus.value === 'degraded') return 'is-degraded'
  if (overallStatus.value === 'offline') return 'is-offline'
  return 'is-checking'
})

const overallStatusText = computed(() => {
  if (overallStatus.value === 'operational') return tText.value.allOperational
  if (overallStatus.value === 'degraded') return tText.value.degraded
  if (overallStatus.value === 'offline') return tText.value.offline
  return tText.value.checkingStatus
})

const lastCheckedText = computed(() => {
  if (!lastChecked.value) return '—'
  const diffSec = Math.floor((Date.now() - lastChecked.value.getTime()) / 1000)
  if (diffSec < 5) return tText.value.justNow
  if (diffSec < 60) return `${diffSec}${tText.value.seconds} ${tText.value.ago}`
  const diffMin = Math.floor(diffSec / 60)
  return `${diffMin}${tText.value.minutes} ${tText.value.ago}`
})

function getServiceStatusClass(service: ApiService) {
  if (overallStatus.value === 'checking') return 'is-checking'
  if (overallStatus.value === 'operational') return 'is-operational'
  if (overallStatus.value === 'degraded') return 'is-degraded'
  return 'is-offline'
}

function getServiceStatusText(service: ApiService) {
  if (overallStatus.value === 'checking') return isUk.value ? 'Перевірка...' : 'Checking...'
  if (overallStatus.value === 'operational') return isUk.value ? 'Працює стабільно' : 'Operational'
  if (overallStatus.value === 'degraded') return isUk.value ? 'Уповільнення' : 'Degraded'
  return isUk.value ? 'Недоступно' : 'Offline'
}

// Smart, low-impact status check
async function checkStatus(force = false) {
  if (isChecking.value) return

  // Check cache if not forced
  if (!force && typeof window !== 'undefined' && window.sessionStorage) {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY)
      if (cached) {
        const parsed = JSON.parse(cached)
        const age = Date.now() - parsed.timestamp
        if (age < CACHE_TTL_MS) {
          overallStatus.value = parsed.status
          latency.value = parsed.latency
          lastChecked.value = new Date(parsed.timestamp)
          return
        }
      }
    } catch {
      // ignore storage errors
    }
  }

  isChecking.value = true
  overallStatus.value = 'checking'

  const t0 = performance.now()
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 4000)

  try {
    // Single lightweight ping to the Cloudflare gateway root
    const res = await fetch('https://api.xmcl.app/', {
      method: 'GET',
      signal: controller.signal,
      cache: 'no-cache'
    })

    clearTimeout(timer)
    const t1 = performance.now()
    const ms = Math.round(t1 - t0)
    latency.value = ms

    if (res.ok) {
      overallStatus.value = 'operational'
    } else if (res.status >= 500) {
      overallStatus.value = 'offline'
    } else {
      overallStatus.value = 'degraded'
    }

    lastChecked.value = new Date()

    // Store in cache
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({
          status: overallStatus.value,
          latency: latency.value,
          timestamp: lastChecked.value.getTime()
        }))
      } catch {
        // ignore storage errors
      }
    }
  } catch (err: any) {
    clearTimeout(timer)
    const t1 = performance.now()
    latency.value = Math.round(t1 - t0)
    // If aborted due to timeout or CORS
    if (err.name === 'AbortError') {
      overallStatus.value = 'degraded'
    } else {
      overallStatus.value = 'degraded'
    }
    lastChecked.value = new Date()
  } finally {
    isChecking.value = false
    startCooldown(10)
  }
}

function startCooldown(sec: number) {
  cooldownSeconds.value = sec
  if (cooldownTimer) clearInterval(cooldownTimer)
  cooldownTimer = setInterval(() => {
    if (cooldownSeconds.value > 0) {
      cooldownSeconds.value -= 1
    } else {
      clearInterval(cooldownTimer)
      cooldownTimer = null
    }
  }, 1000)
}

onMounted(() => {
  checkStatus(false)
})

onUnmounted(() => {
  if (cooldownTimer) clearInterval(cooldownTimer)
})
</script>

<style scoped>
.api-status-page {
  --status-ink: var(--xmcl-ink, #17211f);
  --status-muted: var(--xmcl-muted, #7e8d85);
  --status-paper: var(--xmcl-paper, #f4f5ef);
  --status-panel: var(--xmcl-panel, #ffffff);
  --status-soft: var(--xmcl-soft, #e9ece4);
  --status-line: var(--xmcl-line, #d8ded7);
  --status-lime: var(--xmcl-lime, #c9f85a);
  --status-green: #22c55e;
  --status-yellow: #eab308;
  --status-red: #ef4444;
  background: var(--status-paper);
  color: var(--status-ink);
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  min-height: 100vh;
}

/* Hero Section */
.status-hero {
  background: var(--status-paper);
  border-bottom: 1px solid var(--status-line);
  overflow: hidden;
  padding: 56px clamp(24px, 6vw, 96px) 42px;
  position: relative;
}

.status-hero-grid {
  background-image:
    linear-gradient(to right, color-mix(in srgb, var(--status-ink) 7%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--status-ink) 7%, transparent) 1px, transparent 1px);
  background-size: 56px 56px;
  inset: 0;
  mask-image: linear-gradient(to bottom, black, transparent 95%);
  pointer-events: none;
  position: absolute;
}

.status-hero-content {
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  z-index: 1;
}

.status-hero-kicker {
  align-items: center;
  color: var(--status-muted);
  display: flex;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  gap: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.status-hero-sep {
  color: var(--status-line);
}

.status-repo-link {
  color: var(--status-ink);
  font-weight: 700;
  text-decoration: none;
  transition: color 150ms ease;
}

.status-repo-link:hover {
  color: var(--status-lime);
}

.live-pulse-dot {
  border-radius: 50%;
  display: inline-block;
  height: 8px;
  width: 8px;
}

.live-pulse-dot.is-operational { background: var(--status-green); box-shadow: 0 0 10px var(--status-green); }
.live-pulse-dot.is-degraded { background: var(--status-yellow); box-shadow: 0 0 10px var(--status-yellow); }
.live-pulse-dot.is-offline { background: var(--status-red); box-shadow: 0 0 10px var(--status-red); }
.live-pulse-dot.is-checking { background: var(--status-muted); }

.status-hero-title {
  font-size: clamp(32px, 4.5vw, 56px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 16px 0 12px;
}

.status-hero-description {
  color: var(--status-muted);
  font-size: clamp(15px, 1.8vw, 17px);
  line-height: 1.6;
  margin: 0 0 32px;
  max-width: 780px;
}

/* Global Health Card */
.global-health-card {
  align-items: center;
  background: var(--status-panel);
  border: 1px solid var(--status-line);
  border-radius: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  padding: 22px 28px;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.health-main {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}

.health-status-badge {
  align-items: center;
  border-radius: 999px;
  display: inline-flex;
  font-size: 14px;
  gap: 10px;
  letter-spacing: -0.01em;
  padding: 8px 18px;
}

.health-status-badge.is-operational {
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.35);
  color: #15803d;
}

.health-status-badge.is-degraded {
  background: rgba(234, 179, 8, 0.12);
  border: 1px solid rgba(234, 179, 8, 0.35);
  color: #a16207;
}

.health-status-badge.is-offline {
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: #b91c1c;
}

.health-status-badge.is-checking {
  background: var(--status-soft);
  border: 1px solid var(--status-line);
  color: var(--status-muted);
}

.health-dot {
  border-radius: 50%;
  height: 9px;
  width: 9px;
}

.is-operational .health-dot { background: var(--status-green); }
.is-degraded .health-dot { background: var(--status-yellow); }
.is-offline .health-dot { background: var(--status-red); }
.is-checking .health-dot { background: var(--status-muted); }

.health-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.metric-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.metric-label {
  color: var(--status-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.metric-val {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
}

.metric-val.val-good { color: #16a34a; }
.metric-val.val-warn { color: #ca8a04; }

.refresh-btn {
  align-items: center;
  background: var(--status-ink);
  border: 1px solid var(--status-ink);
  border-radius: 8px;
  color: var(--status-paper);
  cursor: pointer;
  display: inline-flex;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 700;
  gap: 8px;
  padding: 10px 18px;
  transition: all 150ms ease;
}

.refresh-btn:hover:not(:disabled) {
  background: color-mix(in srgb, var(--status-ink) 85%, var(--status-lime));
  border-color: var(--status-lime);
}

.refresh-btn:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.spin-icon {
  animation: spin 800ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Architecture Banner */
.arch-banner {
  align-items: flex-start;
  background: rgba(201, 248, 90, 0.04);
  border: 1px solid color-mix(in srgb, var(--status-lime) 30%, var(--status-line));
  border-left: 3px solid var(--status-lime);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 24px;
  padding: 14px 18px;
}

.arch-tag {
  color: var(--status-ink);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.arch-desc {
  color: var(--status-muted);
  font-size: 12.5px;
  line-height: 1.5;
  margin: 0;
}

/* Content Area */
.status-content {
  margin: 0 auto;
  max-width: 1400px;
  padding: 42px clamp(24px, 6vw, 96px) 120px;
}

/* Filter Bar */
.status-filter-bar {
  align-items: center;
  border-bottom: 1px solid var(--status-line);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 36px;
  padding-bottom: 20px;
}

.status-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.status-tab-btn {
  align-items: center;
  background: var(--status-panel);
  border: 1px solid var(--status-line);
  border-radius: 999px;
  color: var(--status-muted);
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  gap: 8px;
  padding: 7px 16px;
  transition: all 150ms ease;
}

.status-tab-btn:hover {
  border-color: var(--status-ink);
  color: var(--status-ink);
}

.status-tab-btn.active {
  background: var(--status-ink);
  border-color: var(--status-ink);
  color: var(--status-paper);
}

.tab-count {
  background: color-mix(in srgb, currentColor 18%, transparent);
  border-radius: 999px;
  font-size: 10px;
  padding: 1px 6px;
}

.status-search-box {
  align-items: center;
  background: var(--status-panel);
  border: 1px solid var(--status-line);
  border-radius: 8px;
  color: var(--status-muted);
  display: inline-flex;
  gap: 8px;
  padding: 7px 12px;
  transition: border-color 150ms ease;
  width: 280px;
}

.status-search-box:focus-within {
  border-color: var(--status-ink);
  color: var(--status-ink);
}

.status-search-box input {
  background: transparent;
  border: 0;
  color: inherit;
  font-family: inherit;
  font-size: 13px;
  outline: none;
  width: 100%;
}

.clear-search-btn {
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  font-size: 11px;
  padding: 0 4px;
}

/* Services Grid */
.services-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
}

.service-card {
  background: var(--status-panel);
  border: 1px solid var(--status-line);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.service-card:hover {
  border-color: color-mix(in srgb, var(--status-ink) 45%, var(--status-line));
  box-shadow: 0 10px 24px -10px color-mix(in srgb, var(--status-ink) 8%, transparent);
  transform: translateY(-2px);
}

.card-header {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  margin-bottom: 12px;
}

.card-title-group {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.method-badge {
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 2px 6px;
}

.method-badge.get { background: rgba(34, 197, 94, 0.15); color: #16a34a; }
.method-badge.post { background: rgba(59, 130, 246, 0.15); color: #2563eb; }
.method-badge.wss { background: rgba(168, 85, 247, 0.15); color: #9333ea; }
.method-badge.all { background: rgba(234, 179, 8, 0.15); color: #ca8a04; }

.service-title {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0;
}

.service-live-status {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 6px;
}

.status-beacon {
  border-radius: 50%;
  height: 7px;
  width: 7px;
}

.status-beacon.is-operational { background: var(--status-green); box-shadow: 0 0 6px var(--status-green); }
.status-beacon.is-degraded { background: var(--status-yellow); }
.status-beacon.is-offline { background: var(--status-red); }
.status-beacon.is-checking { background: var(--status-muted); }

.status-label {
  color: var(--status-muted);
  font-size: 11px;
  font-weight: 600;
}

.endpoint-line {
  background: var(--status-soft);
  border: 1px solid var(--status-line);
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 6px 10px;
}

.endpoint-line code {
  color: var(--status-ink);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  word-break: break-all;
}

.card-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}

.section-label {
  color: var(--status-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.section-text {
  color: var(--status-ink);
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

.section-text.highlight {
  color: color-mix(in srgb, var(--status-ink) 90%, var(--status-muted));
  font-weight: 500;
}

.card-footer {
  align-items: center;
  border-top: 1px solid var(--status-line);
  display: flex;
  font-size: 11px;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 14px;
}

.card-upstream {
  color: var(--status-muted);
  font-size: 11px;
}

.meta-label {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
}

.card-category-badge {
  background: var(--status-soft);
  border-radius: 4px;
  color: var(--status-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
}

/* Empty State */
.status-empty {
  align-items: center;
  background: var(--status-panel);
  border: 1px dashed var(--status-line);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 56px 20px;
  text-align: center;
}

.reset-search-btn {
  background: var(--status-ink);
  border: 0;
  border-radius: 6px;
  color: var(--status-paper);
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 18px;
}

/* Dark Mode Theme */
html.dark .api-status-page {
  --status-ink: #edf3ed;
  --status-muted: #8b9991;
  --status-paper: #101612;
  --status-panel: #1b241f;
  --status-soft: #151d18;
  --status-line: #334139;
  --status-lime: #c9f85a;
}

html.dark .health-status-badge.is-operational {
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.4);
  color: #4ade80;
}

html.dark .health-status-badge.is-degraded {
  background: rgba(234, 179, 8, 0.15);
  border-color: rgba(234, 179, 8, 0.4);
  color: #facc15;
}

html.dark .health-status-badge.is-offline {
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.4);
  color: #f87171;
}

html.dark .metric-val.val-good { color: #4ade80; }
html.dark .metric-val.val-warn { color: #facc15; }

html.dark .refresh-btn {
  background: var(--status-lime);
  border-color: var(--status-lime);
  color: #17211f;
}

html.dark .refresh-btn:hover:not(:disabled) {
  background: #d8ff72;
}

html.dark .status-tab-btn.active {
  background: var(--status-lime);
  border-color: var(--status-lime);
  color: #17211f;
}

html.dark .arch-banner {
  background: rgba(201, 248, 90, 0.08);
  border-color: rgba(201, 248, 90, 0.25);
  border-left: 3px solid var(--status-lime);
}

html.dark .arch-tag {
  color: var(--status-lime);
}

html.dark .service-card:hover {
  background: color-mix(in srgb, #1b241f 92%, #2d3e33);
  border-color: var(--status-lime);
}

@media (max-width: 768px) {
  .global-health-card { flex-direction: column; align-items: flex-start; }
  .health-actions { width: 100%; }
  .refresh-btn { width: 100%; justify-content: center; }
  .status-filter-bar { flex-direction: column; align-items: stretch; }
  .status-search-box { width: 100%; }
  .services-grid { grid-template-columns: 1fr; }
}
</style>
