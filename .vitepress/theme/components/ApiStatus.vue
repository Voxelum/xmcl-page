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
                <span class="metric-label">{{ tText.clusterHealth }}</span>
                <span class="metric-val font-mono">{{ operationalWorkersCount }}/3 {{ tText.activeWorkers }}</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">{{ tText.avgLatency }}</span>
                <span class="metric-val" :class="{ 'val-good': avgLatency && avgLatency < 200, 'val-warn': avgLatency && avgLatency >= 200 }">
                  {{ avgLatency !== null ? `${avgLatency} ms` : '—' }}
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
      </div>
    </header>

    <!-- Content Section -->
    <main class="status-content">
      <!-- Section 1: The 3 Primary Dedicated API Workers -->
      <section class="workers-section">
        <div class="section-heading">
          <div class="section-tag">{{ tText.workersTag }}</div>
          <h2 class="section-title">{{ tText.workersTitle }}</h2>
          <p class="section-subtitle">{{ tText.workersSubtitle }}</p>
        </div>

        <div class="workers-grid">
          <article
            v-for="worker in workers"
            :key="worker.id"
            class="worker-card"
            :class="[getWorkerStatusClass(worker), { 'is-selected': activeDomainFilter === worker.domain }]"
            @click="toggleDomainFilter(worker.domain)"
          >
            <!-- Card Header -->
            <div class="worker-card-header">
              <div class="worker-domain-group">
                <span class="worker-badge">{{ worker.badge }}</span>
                <h3 class="worker-domain">{{ worker.domain }}</h3>
              </div>
              <div class="worker-live-status">
                <span class="status-beacon" :class="getWorkerStatusClass(worker)" />
                <span class="worker-status-text">{{ getWorkerStatusText(worker) }}</span>
                <span v-if="worker.latency !== null" class="worker-ping">{{ worker.latency }} ms</span>
              </div>
            </div>

            <!-- Mounted Surface Pill -->
            <div class="worker-surface-line">
              <span class="surface-label">{{ tText.mountedSurface }}:</span>
              <code class="surface-code">{{ worker.surface }}</code>
            </div>

            <!-- What is it (Що за API) -->
            <div class="worker-block">
              <span class="block-title">{{ tText.whatIsIt }}</span>
              <p class="block-text">{{ worker.whatIsIt }}</p>
            </div>

            <!-- Responsibilities (За що відповідає) -->
            <div class="worker-block">
              <span class="block-title">{{ tText.responsibleFor }}</span>
              <ul class="block-list">
                <li v-for="(item, idx) in worker.responsibilities" :key="idx">
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Worker Footer -->
            <div class="worker-card-footer">
              <div class="worker-routes-count">
                <span class="dot-indicator" />
                <span>{{ worker.routesCount }} {{ tText.registeredRoutes }}</span>
              </div>
              <button
                type="button"
                class="filter-toggle-btn"
                :class="{ active: activeDomainFilter === worker.domain }"
                @click.stop="toggleDomainFilter(worker.domain)"
              >
                {{ activeDomainFilter === worker.domain ? tText.showingDetails : tText.showEndpoints }}
              </button>
            </div>
          </article>
        </div>
      </section>

      <!-- Section 2: Interactive Route Registry & Endpoints -->
      <section class="routes-section">
        <div class="section-heading">
          <div class="section-tag">{{ tText.routesTag }}</div>
          <h2 class="section-title">{{ tText.routesTitle }}</h2>
        </div>

        <!-- Filter Bar -->
        <div class="status-filter-bar">
          <!-- Domain & Category Tabs -->
          <div class="status-tabs" role="tablist">
            <button
              v-for="tab in filterTabs"
              :key="tab.id"
              type="button"
              class="status-tab-btn"
              :class="{ active: activeFilterTab === tab.id }"
              @click="setFilterTab(tab.id)"
            >
              <span>{{ tab.label }}</span>
              <span class="tab-count">{{ getFilterCount(tab.id) }}</span>
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
                <h4 class="service-title">{{ service.name }}</h4>
              </div>
              <div class="service-live-status">
                <span class="domain-pill">{{ service.domain }}</span>
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
      </section>

      <!-- Architecture Footnote -->
      <footer class="status-arch-footnote">
        <div class="arch-tag">{{ tText.archTag }}</div>
        <p class="arch-desc">{{ tText.archDesc }}</p>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isUk = computed(() => (lang.value || '').startsWith('uk'))

interface ApiWorker {
  id: 'api' | 'ai' | 'signaling'
  domain: string
  badge: string
  surface: string
  whatIsIt: string
  responsibilities: string[]
  routesCount: number
  status: 'operational' | 'degraded' | 'offline' | 'checking'
  latency: number | null
}

interface ApiService {
  id: string
  name: string
  method: 'GET' | 'POST' | 'WSS' | 'ALL'
  domain: string
  endpoint: string
  category: 'core' | 'ai' | 'signaling' | 'auth' | 'runtime'
  categoryLabel: string
  purpose: string
  responsibility: string
  upstream: string
}

// Live state
const isChecking = ref(false)
const cooldownSeconds = ref(0)
const lastChecked = ref<Date | null>(null)
const activeFilterTab = ref<string>('all')
const activeDomainFilter = ref<string | null>(null)
const searchQuery = ref('')

let cooldownTimer: any = null

const CACHE_KEY = 'xmcl_web_api_status_cache_v2'
const CACHE_TTL_MS = 60 * 1000 // 60s client cache to avoid overloading APIs

// Worker runtime states
const apiWorkerStatus = ref<'operational' | 'degraded' | 'offline' | 'checking'>('checking')
const apiWorkerLatency = ref<number | null>(null)

const aiWorkerStatus = ref<'operational' | 'degraded' | 'offline' | 'checking'>('checking')
const aiWorkerLatency = ref<number | null>(null)

const signalingWorkerStatus = ref<'operational' | 'degraded' | 'offline' | 'checking'>('checking')
const signalingWorkerLatency = ref<number | null>(null)

// Translations
const tText = computed(() => {
  if (isUk.value) {
    return {
      kicker: 'ІНФРАСТРУКТУРА ТА ХМАРНІ СЕРВІСИ XMCL',
      title: 'Статус систем та Web API XMCL',
      description: 'Офіційний моніторинг трьох незалежних Web API сервісів екосистеми X-Minecraft Launcher: стан з\'єднання, призначення кожного API та їх роль у лаунчері.',
      clusterHealth: 'Кластер воркерів',
      activeWorkers: 'активно',
      avgLatency: 'Сер. затримка',
      lastChecked: 'Остання перевірка',
      refresh: 'Оновити статус',
      workersTag: '3 НЕЗАЛЕЖНІ МІКРОСЕРВІСИ',
      workersTitle: 'Архітектура 3 хмарних API лаунчера',
      workersSubtitle: 'Інфраструктура XMCL розділена на три виділені домени з ізольованими робочими навантаженнями для забезпечення максимальної швидкості та відмовостійкості.',
      mountedSurface: 'Точка монтування',
      whatIsIt: 'Що за API:',
      responsibleFor: 'За що відповідає в лаунчері:',
      registeredRoutes: 'маршрутів зареєстровано',
      showingDetails: 'Активний фільтр ✓',
      showEndpoints: 'Переглянути ендпоінти →',
      routesTag: 'РЕЄСТР ЕНДПОІНТІВ ТА МАРШРУТІВ',
      routesTitle: 'Специфікація маршрутів та підсистем',
      upstream: 'Цільовий сервіс',
      searchPlaceholder: 'Пошук за назвою, доменом або маршрутом...',
      noServicesFound: 'Не знайдено сервісів за запитом',
      viewAll: 'Показати всі API',
      allOperational: 'Усі 3 API працюють штатно',
      degraded: 'Часткове уповільнення або збої',
      offline: 'Сервіс тимчасово недоступний',
      checkingStatus: 'Перевірка 3 сервісів...',
      justNow: 'Щойно',
      ago: 'тому',
      minutes: 'хв',
      seconds: 'с',
      archTag: 'АРХІТЕКТУРА HONO, CLOUDFLARE WORKERS ТА DURABLE OBJECTS',
      archDesc: 'Сервіси XMCL Web API розгорнуто як безсерверні мікроворкери Cloudflare Workers із застосуванням Hono, Durable Objects (для WebRTC P2P-кімнат) та гео-розподіленого кешування R2.'
    }
  }

  return {
    kicker: 'XMCL CLOUD & RUNTIME INFRASTRUCTURE',
    title: 'XMCL Systems & Web API Status',
    description: 'Official real-time health dashboard for the 3 dedicated Web API workers powering X-Minecraft Launcher: latency, live operational status, and architectural responsibilities.',
    clusterHealth: 'Worker Cluster',
    activeWorkers: 'operational',
    avgLatency: 'Avg Latency',
    lastChecked: 'Last Checked',
    refresh: 'Refresh Status',
    workersTag: '3 DEDICATED MICROSERVICES',
    workersTitle: 'The 3-Worker Architecture',
    workersSubtitle: 'XMCL Web API infrastructure is separated into three distinct domains with isolated workloads for peak resilience and minimal latency.',
    mountedSurface: 'Mounted surface',
    whatIsIt: 'Service Overview:',
    responsibleFor: 'Launcher Responsibility:',
    registeredRoutes: 'registered routes',
    showingDetails: 'Filtered ✓',
    showEndpoints: 'Inspect Endpoints →',
    routesTag: 'DETAILED ROUTE REGISTRY',
    routesTitle: 'Endpoints & Subsystem Specifications',
    upstream: 'Upstream Engine',
    searchPlaceholder: 'Search by API name, domain, or route...',
    noServicesFound: 'No services found matching',
    viewAll: 'View all APIs',
    allOperational: 'All 3 Systems Operational',
    degraded: 'Partial Degraded Performance',
    offline: 'Service Disruptions Detected',
    checkingStatus: 'Probing 3 API endpoints...',
    justNow: 'Just now',
    ago: 'ago',
    minutes: 'm',
    seconds: 's',
    archTag: 'HONO, CLOUDFLARE WORKERS & DURABLE OBJECTS',
    archDesc: 'The XMCL Web API is partitioned across three edge workers leveraging Hono, Cloudflare Workers, Durable Objects for WebRTC session orchestration, and distributed R2 caching.'
  }
})

// The 3 Primary Dedicated API Workers
const workers = computed<ApiWorker[]>(() => {
  if (isUk.value) {
    return [
      {
        id: 'api',
        domain: 'api.xmcl.app',
        badge: 'API Worker',
        surface: 'API Worker: all core APIs, including /translation',
        whatIsIt: 'Головний сервісний шлюз XMCL. Обслуговує всю ключову логіку завантаження, оновлень, сумісності середовищ Java, машинного перекладу модів та керування обліковими записами.',
        responsibilities: [
          'Перевірка версій та роздача оновлень лаунчера (/latest, /releases)',
          'Автоматичне виявлення та завантаження середовищ Java Zulu (8, 17, 21) (/zulu)',
          'Проксі-переклад назв та описів модів Modrinth/CurseForge українською (/translation)',
          'Автентифікація користувачів (Microsoft, Ely.by) та менеджмент сесійних токенів (/v1/auth, /v1/sessions)',
          'Політики резервного копіювання світів у хмару та підписки XMCL+ (/v1/backup-storage-policy, /v1/billing)'
        ],
        routesCount: 46,
        status: apiWorkerStatus.value,
        latency: apiWorkerLatency.value
      },
      {
        id: 'ai',
        domain: 'ai.xmcl.app',
        badge: 'AI Worker',
        surface: 'POST /v1/chat/completions only',
        whatIsIt: 'Ізольований високопродуктивний шлюз штучного інтелекту. Працює виключно для потокового обслуговування мовних моделей вбудованого асистента Agnes AI.',
        responsibilities: [
          'Інтелектуальний аналіз звітів про аварійне завершення гри (Minecraft Crash Reports)',
          'Миттєве визначення конфліктуючих модів, нестачі виділеної оперативної пам\'яті або несумісних версій Forge/Fabric',
          'Формування покрокових підказок щодо вирішення помилок безпосередньо у вікні лаунчера без потреби шукати на форумах'
        ],
        routesCount: 1,
        status: aiWorkerStatus.value,
        latency: aiWorkerLatency.value
      },
      {
        id: 'signaling',
        domain: 'signaling.xmcl.app',
        badge: 'Signaling Worker',
        surface: '/v1/multiplayer/* and /v1/rtc/official',
        whatIsIt: 'Високонавантажений WebRTC сигнальний сервер реального часу та координатор однорангових P2P-з\'єднань на базі Cloudflare Durable Objects.',
        responsibilities: [
          'Оркестрація віртуальних ігрових кімнат та лобі для режиму XMCL Together (/v1/multiplayer/rooms)',
          'Миттєвий обмін SDP та ICE-кандидатами між гравцями для встановлення прямого тунелю',
          'Координація офіційного релею та STUN/TURN серверів (/v1/rtc/official) для гри без білої IP-адреси та без прокидання портів'
        ],
        routesCount: 6,
        status: signalingWorkerStatus.value,
        latency: signalingWorkerLatency.value
      }
    ]
  }

  return [
    {
      id: 'api',
      domain: 'api.xmcl.app',
      badge: 'API Worker',
      surface: 'API Worker: all core APIs, including /translation',
      whatIsIt: 'Core backend gateway for XMCL. Powers release delivery, runtime compatibility, community mod translation, account identity, and cloud storage management.',
      responsibilities: [
        'Version checking, update manifests, and binary distribution (/latest, /releases)',
        'Automatic Azul Zulu JRE/JDK runtime resolution and installation (/zulu)',
        'Crowdsourced and machine translation proxy for Modrinth/CurseForge mod metadata (/translation)',
        'Authentication identity provider hub (Microsoft, Ely.by) and session rotation (/v1/auth, /v1/sessions)',
        'World cloud backup policies and XMCL+ subscription ledger (/v1/backup-storage-policy, /v1/billing)'
      ],
      routesCount: 46,
      status: apiWorkerStatus.value,
      latency: apiWorkerLatency.value
    },
    {
      id: 'ai',
      domain: 'ai.xmcl.app',
      badge: 'AI Worker',
      surface: 'POST /v1/chat/completions only',
      whatIsIt: 'Dedicated high-throughput LLM gateway for the integrated Agnes AI assistant. Scoped strictly to streaming chat completions and forensic crash analysis.',
      responsibilities: [
        'Automatic crash report forensic parsing and stacktrace diagnosis',
        'Root-cause detection for modloader incompatibilities, memory exhaustion, and missing dependencies',
        'Actionable step-by-step resolution guidance presented directly inside the launcher window'
      ],
      routesCount: 1,
      status: aiWorkerStatus.value,
      latency: aiWorkerLatency.value
    },
    {
      id: 'signaling',
      domain: 'signaling.xmcl.app',
      badge: 'Signaling Worker',
      surface: '/v1/multiplayer/* and /v1/rtc/official',
      whatIsIt: 'Real-time WebRTC signaling coordinator and peer-to-peer session room engine built on Cloudflare Durable Objects.',
      responsibilities: [
        'Matchmaking and session room orchestration for XMCL Together multiplayer (/v1/multiplayer/rooms)',
        'Real-time SDP and ICE candidate negotiation for direct peer mesh interconnects',
        'STUN/TURN relay allocation and official network diagnostics (/v1/rtc/official) without port forwarding'
      ],
      routesCount: 6,
      status: signalingWorkerStatus.value,
      latency: signalingWorkerLatency.value
    }
  ]
})

// Detailed endpoints registry
const services = computed<ApiService[]>(() => {
  if (isUk.value) {
    return [
      // api.xmcl.app (Core API Worker)
      {
        id: 'release-latest',
        name: 'Release Manifest & Versioning',
        method: 'GET',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/latest',
        category: 'core',
        categoryLabel: 'Релізи',
        purpose: 'Шлюз метаданих останнього стабільного релізу лаунчера.',
        responsibility: 'Визначає наявність оновлень, номер поточної версії, прямі посилання на файли та хеші контрольних сум для безпечного оновлення.',
        upstream: 'Cloudflare Worker (api) / GitHub Releases'
      },
      {
        id: 'release-mirror',
        name: 'Release Asset Download Mirror',
        method: 'GET',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/releases/:filename',
        category: 'core',
        categoryLabel: 'Дистрибуція',
        purpose: 'Високошвидкісне глобальне CDN-дзеркало інсталяторів XMCL.',
        responsibility: 'Доставка інсталяторів (AppX, Snap, AppImage, DMG, Zip, Tar.xz) на максимальній швидкості без лімітів GitHub API.',
        upstream: 'Cloudflare R2 / GitHub Assets'
      },
      {
        id: 'zulu-java',
        name: 'Java Zulu OpenJDK Engine Resolver',
        method: 'GET',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/zulu',
        category: 'runtime',
        categoryLabel: 'Java Engine',
        purpose: 'Диспетчер сумісних пакетів середовища виконання Java для Minecraft.',
        responsibility: 'Автоматично підбирає та завантажує точну версію Azul Zulu JRE/JDK (Java 8, 17, 21) під ОС користувача (Windows, macOS, Linux, ARM64).',
        upstream: 'Azul Systems API'
      },
      {
        id: 'mod-translation',
        name: 'Community Content Translation Proxy',
        method: 'GET',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/translation',
        category: 'core',
        categoryLabel: 'Локалізація',
        purpose: 'Шлюз машинної та краудсорсингової локалізації контенту.',
        responsibility: 'Перекладає назви, описи та категорії модів із Modrinth і CurseForge рідною мовою гравця в інтерфейсі каталогу.',
        upstream: 'Azure Table & Community i18n extra'
      },
      {
        id: 'notifications',
        name: 'Broadcast Incident & Maintenance Notices',
        method: 'GET',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/notifications',
        category: 'core',
        categoryLabel: 'Сповіщення',
        purpose: 'Система екстрених широкомовних технічних сповіщень.',
        responsibility: 'Попереджає про технічні збої серверів автентифікації Mojang/Microsoft, планові роботи або критичні патчі безпеки.',
        upstream: 'Cloudflare Worker (api)'
      },
      {
        id: 'flights',
        name: 'Feature Flights & Experimentation',
        method: 'GET',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/flights',
        category: 'core',
        categoryLabel: 'Експерименти',
        purpose: 'Сервіс динамічних перемикачів функцій (Feature Flags).',
        responsibility: 'Керує поступовим розгортанням експериментальних функцій лаунчера без повторної компіляції клієнта.',
        upstream: 'Cloudflare KV'
      },
      {
        id: 'auth-gateway',
        name: 'Multi-Provider Identity & Session Hub',
        method: 'ALL',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/v1/auth/:provider/* & /v1/sessions/*',
        category: 'auth',
        categoryLabel: 'Автентифікація',
        purpose: 'Централізований шлюз авторизації та ротації токенів сесій.',
        responsibility: 'Безпечно авторизує користувачів (Microsoft, GitHub, Discord) та захищає сесійні токени лаунчера.',
        upstream: 'OAuth Providers / Secure Store'
      },
      {
        id: 'elyby-authlib',
        name: 'Ely.by Authlib & Alternative Skin Relay',
        method: 'GET',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/elyby/authlib',
        category: 'auth',
        categoryLabel: 'Скіни',
        purpose: 'Проксі-міст до альтернативних служб автентифікації та скінів.',
        responsibility: 'Забезпечує прозору підтримку кастомних скінів та плащів сервісу Ely.by під час запуску гри.',
        upstream: 'Ely.by API'
      },
      {
        id: 'backup-policy',
        name: 'Cloud Backup Storage Policy & Quota',
        method: 'GET',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/v1/backup-storage-policy',
        category: 'core',
        categoryLabel: 'Хмарні бекапи',
        purpose: 'Сервіс керування хмарним сховищем збережень світів.',
        responsibility: 'Генерує безпечні пресайнед-посилання на S3/Cloudflare R2 для вивантаження резервних копій та контролює дискові квоти.',
        upstream: 'S3 Presigner / R2 Storage'
      },
      {
        id: 'billing-services',
        name: 'XMCL+ Allowances & Billing Subsystem',
        method: 'ALL',
        domain: 'api.xmcl.app',
        endpoint: 'https://api.xmcl.app/v1/billing/* & /v1/xmcl-plus/*',
        category: 'core',
        categoryLabel: 'XMCL+',
        purpose: 'Підсистема підписок XMCL+ та хмарних ресурсів.',
        responsibility: 'Обробляє підписки, квоти хмарного сховища резервних копій та виділений канал для релею мультиплеєра.',
        upstream: 'Mongo Ledger / Payment Engine'
      },

      // ai.xmcl.app (AI Worker)
      {
        id: 'agnes-ai-completions',
        name: 'Agnes AI Crash Diagnostics & LLM Gateway',
        method: 'POST',
        domain: 'ai.xmcl.app',
        endpoint: 'https://ai.xmcl.app/v1/chat/completions',
        category: 'ai',
        categoryLabel: 'Штучний інтелект',
        purpose: 'Виділений шлюз мовної моделі вбудованого асистента Agnes AI.',
        responsibility: 'Обробляє логи крашів гри, аналізує конфлікти модів, помилки Java Virtual Machine та генерує швидкі поради з усунення помилок прямо в лаунчері.',
        upstream: 'Cloudflare AI Gateway / LLM Clusters'
      },

      // signaling.xmcl.app (Signaling Worker)
      {
        id: 'rtc-signaling-rooms',
        name: 'WebRTC P2P Multiplayer Room Orchestrator',
        method: 'ALL',
        domain: 'signaling.xmcl.app',
        endpoint: 'https://signaling.xmcl.app/v1/multiplayer/rooms',
        category: 'signaling',
        categoryLabel: 'Мультиплеєр',
        purpose: 'Сервіс створення та керування P2P кімнатами XMCL Together.',
        responsibility: 'Створює кімнати спільної гри, реєструє хост-гравця та керує приєднанням друзів без необхідності виділеного сервера.',
        upstream: 'Cloudflare Durable Objects'
      },
      {
        id: 'rtc-signaling-join',
        name: 'WebRTC Peer Join & SDP Exchange',
        method: 'POST',
        domain: 'signaling.xmcl.app',
        endpoint: 'https://signaling.xmcl.app/v1/multiplayer/rooms/:roomId/join',
        category: 'signaling',
        categoryLabel: 'Мультиплеєр',
        purpose: 'Шлюз з\'єднання пірів у реальному часі.',
        responsibility: 'Обмінює Session Description Protocol (SDP) пропозиції та відповіді між клієнтами лаунчера для встановлення прямого тунелю зв\'язку.',
        upstream: 'Cloudflare Durable Objects'
      },
      {
        id: 'rtc-official',
        name: 'Official RTC STUN/TURN Diagnostics',
        method: 'GET',
        domain: 'signaling.xmcl.app',
        endpoint: 'https://signaling.xmcl.app/v1/rtc/official',
        category: 'signaling',
        categoryLabel: 'STUN / TURN Relay',
        purpose: 'Офіційний сервіс конфігурації та діагностики релеїв зв\'язку.',
        responsibility: 'Надає перевірені адреси STUN/TURN серверів для обходу жорсткого NAT/файрволу, якщо пряме з\'єднання між гравцями неможливе.',
        upstream: 'COTURN Relay Infrastructure'
      }
    ]
  }

  // English
  return [
    // api.xmcl.app
    {
      id: 'release-latest',
      name: 'Release Manifest & Versioning',
      method: 'GET',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/latest',
      category: 'core',
      categoryLabel: 'Releases',
      purpose: 'Metadata endpoint for latest stable launcher releases.',
      responsibility: 'Determines update availability, current build number, download targets, and SHA-256 integrity hashes for secure self-updating.',
      upstream: 'Cloudflare Worker (api) / GitHub Releases'
    },
    {
      id: 'release-mirror',
      name: 'Release Asset Download Mirror',
      method: 'GET',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/releases/:filename',
      category: 'core',
      categoryLabel: 'Distribution',
      purpose: 'High-speed edge mirror for XMCL binary releases.',
      responsibility: 'Delivers multi-platform installers (AppX, Snap, AppImage, DMG, Zip, Tar.xz) from global CDN, avoiding GitHub rate limits.',
      upstream: 'Cloudflare R2 / GitHub Assets'
    },
    {
      id: 'zulu-java',
      name: 'Java Zulu OpenJDK Engine Resolver',
      method: 'GET',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/zulu',
      category: 'runtime',
      categoryLabel: 'Java Engine',
      purpose: 'Runtime resolver for Minecraft compatible OpenJDK binaries.',
      responsibility: 'Automatically matches, retrieves, and unpacks the exact Azul Zulu JRE/JDK (Java 8, 17, 21) required for the target Minecraft version.',
      upstream: 'Azul Systems API'
    },
    {
      id: 'mod-translation',
      name: 'Community Content Translation Proxy',
      method: 'GET',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/translation',
      category: 'core',
      categoryLabel: 'Localization',
      purpose: 'Machine & crowdsourced mod translation relay.',
      responsibility: 'Translates titles, summaries, and categories for Modrinth and CurseForge mods into the player\'s native language.',
      upstream: 'Azure Table & Community i18n extra'
    },
    {
      id: 'notifications',
      name: 'Broadcast Incident & Maintenance Notices',
      method: 'GET',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/notifications',
      category: 'core',
      categoryLabel: 'Notices',
      purpose: 'Emergency broadcast and maintenance messaging feed.',
      responsibility: 'Alerts active users of Mojang/Microsoft authentication outages, planned maintenance, or urgent security patches.',
      upstream: 'Cloudflare Worker (api)'
    },
    {
      id: 'flights',
      name: 'Feature Flights & Experimentation',
      method: 'GET',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/flights',
      category: 'core',
      categoryLabel: 'Flags',
      purpose: 'Dynamic feature-flagging service.',
      responsibility: 'Enables progressive rollout of experimental launcher features to flight rings without requiring binary rebuilding.',
      upstream: 'Cloudflare KV'
    },
    {
      id: 'auth-gateway',
      name: 'Multi-Provider Identity & Session Hub',
      method: 'ALL',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/v1/auth/:provider/* & /v1/sessions/*',
      category: 'auth',
      categoryLabel: 'Auth Hub',
      purpose: 'Centralized authentication and session token rotation.',
      responsibility: 'Handles multi-provider login flows (Microsoft, GitHub, Discord) and signs cryptographic launcher session tokens.',
      upstream: 'OAuth Providers / Secure Store'
    },
    {
      id: 'elyby-authlib',
      name: 'Ely.by Authlib & Alternative Skin Relay',
      method: 'GET',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/elyby/authlib',
      category: 'auth',
      categoryLabel: 'Skins',
      purpose: 'Bridge proxy for alternative auth and skin servers.',
      responsibility: 'Provides seamless in-game support for Ely.by player skins, capes, and non-Mojang authentication profiles.',
      upstream: 'Ely.by API'
    },
    {
      id: 'backup-policy',
      name: 'Cloud Backup Storage Policy & Quota',
      method: 'GET',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/v1/backup-storage-policy',
      category: 'core',
      categoryLabel: 'Cloud Backup',
      purpose: 'World save cloud storage orchestration.',
      responsibility: 'Generates secure S3/Cloudflare R2 presigned upload credentials and manages cloud save quotas.',
      upstream: 'S3 Presigner / R2 Storage'
    },
    {
      id: 'billing-services',
      name: 'XMCL+ Allowances & Billing Subsystem',
      method: 'ALL',
      domain: 'api.xmcl.app',
      endpoint: 'https://api.xmcl.app/v1/billing/* & /v1/xmcl-plus/*',
      category: 'core',
      categoryLabel: 'XMCL+',
      purpose: 'Billing and subscription ledger for XMCL+ cloud features.',
      responsibility: 'Manages cloud backup allowances, dedicated TURN relay bandwidth, and premium server control features.',
      upstream: 'Mongo Ledger / Payment Engine'
    },

    // ai.xmcl.app
    {
      id: 'agnes-ai-completions',
      name: 'Agnes AI Crash Diagnostics & LLM Gateway',
      method: 'POST',
      domain: 'ai.xmcl.app',
      endpoint: 'https://ai.xmcl.app/v1/chat/completions',
      category: 'ai',
      categoryLabel: 'AI Assistant',
      purpose: 'Dedicated LLM proxy gateway for Agnes AI.',
      responsibility: 'Analyzes Minecraft crash reports, diagnoses mod conflicts, JVM memory faults, and delivers actionable fix advice right in the launcher.',
      upstream: 'Cloudflare AI Gateway / LLM Clusters'
    },

    // signaling.xmcl.app
    {
      id: 'rtc-signaling-rooms',
      name: 'WebRTC P2P Multiplayer Room Orchestrator',
      method: 'ALL',
      domain: 'signaling.xmcl.app',
      endpoint: 'https://signaling.xmcl.app/v1/multiplayer/rooms',
      category: 'signaling',
      categoryLabel: 'Multiplayer',
      purpose: 'XMCL Together P2P room lifecycle coordinator.',
      responsibility: 'Spawns virtual multiplayer game rooms, tracks host states, and coordinates peer join requests without dedicated servers.',
      upstream: 'Cloudflare Durable Objects'
    },
    {
      id: 'rtc-signaling-join',
      name: 'WebRTC Peer Join & SDP Exchange',
      method: 'POST',
      domain: 'signaling.xmcl.app',
      endpoint: 'https://signaling.xmcl.app/v1/multiplayer/rooms/:roomId/join',
      category: 'signaling',
      categoryLabel: 'Multiplayer',
      purpose: 'Real-time peer signaling handshake.',
      responsibility: 'Exchanges Session Description Protocol (SDP) offers and answers between clients to establish direct WebRTC peer connections.',
      upstream: 'Cloudflare Durable Objects'
    },
    {
      id: 'rtc-official',
      name: 'Official RTC STUN/TURN Diagnostics',
      method: 'GET',
      domain: 'signaling.xmcl.app',
      endpoint: 'https://signaling.xmcl.app/v1/rtc/official',
      category: 'signaling',
      categoryLabel: 'STUN / TURN Relay',
      purpose: 'RTC configuration and relay diagnostics service.',
      responsibility: 'Supplies verified STUN/TURN relay credentials to bypass symmetric NAT and strict firewalls when direct peer connections fail.',
      upstream: 'COTURN Relay Infrastructure'
    }
  ]
})

// Filter Tabs
const filterTabs = computed(() => {
  if (isUk.value) {
    return [
      { id: 'all', label: 'Всі маршрути' },
      { id: 'api.xmcl.app', label: 'api.xmcl.app (Core)' },
      { id: 'ai.xmcl.app', label: 'ai.xmcl.app (Agnes AI)' },
      { id: 'signaling.xmcl.app', label: 'signaling.xmcl.app (RTC)' }
    ]
  }
  return [
    { id: 'all', label: 'All Endpoints' },
    { id: 'api.xmcl.app', label: 'api.xmcl.app (Core)' },
    { id: 'ai.xmcl.app', label: 'ai.xmcl.app (Agnes AI)' },
    { id: 'signaling.xmcl.app', label: 'signaling.xmcl.app (RTC)' }
  ]
})

// Filtered services
const filteredServices = computed(() => {
  let list = services.value

  const effectiveDomain = activeDomainFilter.value || (activeFilterTab.value !== 'all' ? activeFilterTab.value : null)
  if (effectiveDomain) {
    list = list.filter(s => s.domain === effectiveDomain)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    list = list.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.domain.toLowerCase().includes(q) ||
      s.endpoint.toLowerCase().includes(q) ||
      s.purpose.toLowerCase().includes(q) ||
      s.responsibility.toLowerCase().includes(q)
    )
  }

  return list
})

function getFilterCount(tabId: string) {
  if (tabId === 'all') return services.value.length
  return services.value.filter(s => s.domain === tabId).length
}

function setFilterTab(tabId: string) {
  activeFilterTab.value = tabId
  activeDomainFilter.value = tabId === 'all' ? null : tabId
}

function toggleDomainFilter(domain: string) {
  if (activeDomainFilter.value === domain) {
    activeDomainFilter.value = null
    activeFilterTab.value = 'all'
  } else {
    activeDomainFilter.value = domain
    activeFilterTab.value = domain
  }
}

function resetFilters() {
  searchQuery.value = ''
  activeDomainFilter.value = null
  activeFilterTab.value = 'all'
}

// Cluster aggregate status
const operationalWorkersCount = computed(() => {
  let count = 0
  if (apiWorkerStatus.value === 'operational') count++
  if (aiWorkerStatus.value === 'operational') count++
  if (signalingWorkerStatus.value === 'operational') count++
  return count
})

const avgLatency = computed(() => {
  const lats = [apiWorkerLatency.value, aiWorkerLatency.value, signalingWorkerLatency.value].filter((x): x is number => typeof x === 'number')
  if (lats.length === 0) return null
  return Math.round(lats.reduce((a, b) => a + b, 0) / lats.length)
})

const overallStatusClass = computed(() => {
  if (apiWorkerStatus.value === 'checking' || aiWorkerStatus.value === 'checking' || signalingWorkerStatus.value === 'checking') {
    return 'is-checking'
  }
  const count = operationalWorkersCount.value
  if (count === 3) return 'is-operational'
  if (count > 0) return 'is-degraded'
  return 'is-offline'
})

const overallStatusText = computed(() => {
  if (overallStatusClass.value === 'is-checking') return tText.value.checkingStatus
  if (operationalWorkersCount.value === 3) return tText.value.allOperational
  if (operationalWorkersCount.value > 0) return tText.value.degraded
  return tText.value.offline
})

const lastCheckedText = computed(() => {
  if (!lastChecked.value) return '—'
  const diffSec = Math.floor((Date.now() - lastChecked.value.getTime()) / 1000)
  if (diffSec < 5) return tText.value.justNow
  if (diffSec < 60) return `${diffSec}${tText.value.seconds} ${tText.value.ago}`
  const diffMin = Math.floor(diffSec / 60)
  return `${diffMin}${tText.value.minutes} ${tText.value.ago}`
})

function getWorkerStatusClass(worker: ApiWorker) {
  if (worker.status === 'operational') return 'is-operational'
  if (worker.status === 'degraded') return 'is-degraded'
  if (worker.status === 'offline') return 'is-offline'
  return 'is-checking'
}

function getWorkerStatusText(worker: ApiWorker) {
  if (worker.status === 'checking') return isUk.value ? 'Перевірка...' : 'Probing...'
  if (worker.status === 'operational') return isUk.value ? 'Працює штатно' : 'Operational'
  if (worker.status === 'degraded') return isUk.value ? 'Уповільнення' : 'Degraded'
  return isUk.value ? 'Недоступно' : 'Offline'
}

// Low-overhead parallel status check of the 3 dedicated domains
async function checkStatus(force = false) {
  if (isChecking.value) return

  // Check cache first (TTL 60s) to keep network load light
  if (!force && typeof window !== 'undefined' && window.sessionStorage) {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY)
      if (cached) {
        const parsed = JSON.parse(cached)
        const age = Date.now() - parsed.timestamp
        if (age < CACHE_TTL_MS) {
          apiWorkerStatus.value = parsed.apiStatus
          apiWorkerLatency.value = parsed.apiLat
          aiWorkerStatus.value = parsed.aiStatus
          aiWorkerLatency.value = parsed.aiLat
          signalingWorkerStatus.value = parsed.sigStatus
          signalingWorkerLatency.value = parsed.sigLat
          lastChecked.value = new Date(parsed.timestamp)
          return
        }
      }
    } catch {
      // ignore
    }
  }

  isChecking.value = true
  apiWorkerStatus.value = 'checking'
  aiWorkerStatus.value = 'checking'
  signalingWorkerStatus.value = 'checking'

  const pingWorker = async (url: string) => {
    const t0 = performance.now()
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 4000)
    try {
      const res = await fetch(url, {
        method: 'GET',
        signal: controller.signal,
        cache: 'no-cache'
      })
      clearTimeout(timer)
      const lat = Math.round(performance.now() - t0)
      if (res.ok) {
        return { status: 'operational' as const, latency: lat }
      }
      return { status: res.status >= 500 ? ('offline' as const) : ('degraded' as const), latency: lat }
    } catch {
      clearTimeout(timer)
      const lat = Math.round(performance.now() - t0)
      return { status: 'degraded' as const, latency: lat }
    }
  }

  try {
    const [apiRes, aiRes, sigRes] = await Promise.all([
      pingWorker('https://api.xmcl.app/'),
      pingWorker('https://ai.xmcl.app/'),
      pingWorker('https://signaling.xmcl.app/')
    ])

    apiWorkerStatus.value = apiRes.status
    apiWorkerLatency.value = apiRes.latency

    aiWorkerStatus.value = aiRes.status
    aiWorkerLatency.value = aiRes.latency

    signalingWorkerStatus.value = sigRes.status
    signalingWorkerLatency.value = sigRes.latency

    lastChecked.value = new Date()

    // Save to sessionStorage
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({
          apiStatus: apiRes.status,
          apiLat: apiRes.latency,
          aiStatus: aiRes.status,
          aiLat: aiRes.latency,
          sigStatus: sigRes.status,
          sigLat: sigRes.latency,
          timestamp: lastChecked.value.getTime()
        }))
      } catch {
        // ignore
      }
    }
  } finally {
    isChecking.value = false
    if (force) {
      startCooldown(10)
    }
  }
}

function startCooldown(seconds: number) {
  cooldownSeconds.value = seconds
  clearInterval(cooldownTimer)
  cooldownTimer = setInterval(() => {
    cooldownSeconds.value--
    if (cooldownSeconds.value <= 0) {
      clearInterval(cooldownTimer)
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
  --status-bg: #090c0a;
  --status-panel: #111613;
  --status-paper: #0c100e;
  --status-soft: #17201a;
  --status-card-hover: #151e18;
  --status-line: rgba(255, 255, 255, 0.08);
  --status-line-strong: rgba(255, 255, 255, 0.14);
  --status-ink: #f0fdf4;
  --status-muted: #86968c;
  --status-faint: #4e5e54;
  --status-lime: #a3e635;
  --status-green: #22c55e;
  --status-yellow: #eab308;
  --status-red: #ef4444;
  --status-blue: #38bdf8;
  --status-purple: #c084fc;

  background-color: var(--status-bg);
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
  max-width: 840px;
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
  color: #4ade80;
}

.health-status-badge.is-degraded {
  background: rgba(234, 179, 8, 0.12);
  border: 1px solid rgba(234, 179, 8, 0.35);
  color: #facc15;
}

.health-status-badge.is-offline {
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: #f87171;
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

.health-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.metric-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  font-size: 14px;
  font-weight: 700;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

.metric-val.val-good { color: var(--status-green); }
.metric-val.val-warn { color: var(--status-yellow); }

.health-actions {
  display: flex;
  align-items: center;
}

.refresh-btn {
  align-items: center;
  background: var(--status-soft);
  border: 1px solid var(--status-line-strong);
  border-radius: 8px;
  color: var(--status-ink);
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  gap: 8px;
  padding: 8px 16px;
  transition: all 150ms ease;
}

.refresh-btn:hover:not(:disabled) {
  background: color-mix(in srgb, var(--status-soft) 80%, var(--status-lime));
  border-color: var(--status-lime);
}

.refresh-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.spin-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Main Content */
.status-content {
  margin: 0 auto;
  max-width: 1400px;
  padding: 48px clamp(24px, 6vw, 96px) 80px;
}

/* Headings */
.section-heading {
  margin-bottom: 28px;
}

.section-tag {
  color: var(--status-lime);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.section-title {
  font-size: clamp(24px, 3.2vw, 36px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin: 0 0 8px;
}

.section-subtitle {
  color: var(--status-muted);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  max-width: 800px;
}

/* Workers Section (3 Cards) */
.workers-section {
  margin-bottom: 64px;
}

.workers-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
}

.worker-card {
  background: var(--status-panel);
  border: 1px solid var(--status-line);
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  transition: all 200ms ease;
}

.worker-card:hover {
  background: var(--status-card-hover);
  border-color: rgba(163, 230, 53, 0.4);
  transform: translateY(-2px);
}

.worker-card.is-selected {
  border-color: var(--status-lime);
  box-shadow: 0 0 20px rgba(163, 230, 53, 0.12);
}

.worker-card-header {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.worker-domain-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.worker-badge {
  align-self: flex-start;
  background: rgba(163, 230, 53, 0.1);
  border: 1px solid rgba(163, 230, 53, 0.25);
  border-radius: 4px;
  color: var(--status-lime);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  text-transform: uppercase;
}

.worker-domain {
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
}

.worker-live-status {
  align-items: center;
  background: var(--status-soft);
  border: 1px solid var(--status-line);
  border-radius: 999px;
  display: flex;
  gap: 6px;
  padding: 4px 10px;
}

.status-beacon {
  border-radius: 50%;
  height: 8px;
  width: 8px;
}

.status-beacon.is-operational { background: var(--status-green); }
.status-beacon.is-degraded { background: var(--status-yellow); }
.status-beacon.is-offline { background: var(--status-red); }
.status-beacon.is-checking { background: var(--status-muted); }

.worker-status-text {
  font-size: 11px;
  font-weight: 700;
}

.worker-ping {
  color: var(--status-lime);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
}

.worker-surface-line {
  background: var(--status-soft);
  border: 1px dashed var(--status-line-strong);
  border-radius: 8px;
  font-size: 12px;
  margin-bottom: 18px;
  padding: 8px 12px;
}

.surface-label {
  color: var(--status-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-right: 6px;
  text-transform: uppercase;
}

.surface-code {
  color: var(--status-lime);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
}

.worker-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.block-title {
  color: var(--status-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.block-text {
  color: var(--status-ink);
  font-size: 13.5px;
  line-height: 1.55;
  margin: 0;
}

.block-list {
  color: color-mix(in srgb, var(--status-ink) 90%, transparent);
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  padding-left: 18px;
}

.block-list li {
  margin-bottom: 5px;
}

.worker-card-footer {
  align-items: center;
  border-top: 1px solid var(--status-line);
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 16px;
}

.worker-routes-count {
  align-items: center;
  color: var(--status-muted);
  display: flex;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  gap: 6px;
}

.dot-indicator {
  background: var(--status-lime);
  border-radius: 50%;
  height: 6px;
  width: 6px;
}

.filter-toggle-btn {
  background: transparent;
  border: 1px solid var(--status-line-strong);
  border-radius: 6px;
  color: var(--status-ink);
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  padding: 5px 12px;
  transition: all 150ms ease;
}

.filter-toggle-btn:hover {
  background: var(--status-soft);
  border-color: var(--status-lime);
  color: var(--status-lime);
}

.filter-toggle-btn.active {
  background: rgba(163, 230, 53, 0.15);
  border-color: var(--status-lime);
  color: var(--status-lime);
}

/* Routes Section */
.routes-section {
  margin-bottom: 48px;
}

/* Filter Bar */
.status-filter-bar {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 24px;
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
  border-radius: 8px;
  color: var(--status-muted);
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 700;
  gap: 8px;
  padding: 8px 14px;
  transition: all 150ms ease;
}

.status-tab-btn:hover {
  background: var(--status-soft);
  color: var(--status-ink);
}

.status-tab-btn.active {
  background: var(--status-soft);
  border-color: var(--status-lime);
  color: var(--status-lime);
}

.tab-count {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 7px;
}

.status-search-box {
  align-items: center;
  background: var(--status-panel);
  border: 1px solid var(--status-line);
  border-radius: 8px;
  display: flex;
  gap: 8px;
  max-width: 320px;
  padding: 8px 12px;
  width: 100%;
}

.status-search-box svg {
  color: var(--status-muted);
  flex-shrink: 0;
}

.status-search-box input {
  background: transparent;
  border: none;
  color: var(--status-ink);
  font-family: inherit;
  font-size: 13px;
  outline: none;
  width: 100%;
}

.status-search-box input::placeholder {
  color: var(--status-faint);
}

.clear-search-btn {
  background: none;
  border: none;
  color: var(--status-muted);
  cursor: pointer;
  font-size: 11px;
  padding: 0;
}

/* Services Grid */
.services-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
}

.service-card {
  background: var(--status-panel);
  border: 1px solid var(--status-line);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: border-color 150ms ease, transform 150ms ease;
}

.service-card:hover {
  border-color: var(--status-line-strong);
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
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.method-badge {
  align-self: flex-start;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 2px 6px;
}

.method-badge.get { background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); }
.method-badge.post { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }
.method-badge.wss { background: rgba(192, 132, 252, 0.15); color: #c084fc; border: 1px solid rgba(192, 132, 252, 0.3); }
.method-badge.all { background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); }

.service-title {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
}

.domain-pill {
  background: var(--status-soft);
  border: 1px solid var(--status-line-strong);
  border-radius: 4px;
  color: var(--status-lime);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 7px;
}

.endpoint-line {
  background: var(--status-soft);
  border: 1px solid var(--status-line);
  border-radius: 6px;
  margin-bottom: 14px;
  overflow-x: auto;
  padding: 6px 10px;
}

.endpoint-line code {
  color: var(--status-ink);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  white-space: nowrap;
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
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.section-text {
  color: var(--status-ink);
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

.section-text.highlight {
  color: color-mix(in srgb, var(--status-ink) 95%, transparent);
}

.card-footer {
  align-items: center;
  border-top: 1px solid var(--status-line);
  display: flex;
  font-size: 11px;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 12px;
}

.card-upstream {
  color: var(--status-muted);
}

.meta-label {
  color: var(--status-faint);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
}

.card-category-badge {
  background: var(--status-soft);
  border-radius: 4px;
  color: var(--status-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  padding: 2px 6px;
}

/* Empty State */
.status-empty {
  background: var(--status-panel);
  border: 1px dashed var(--status-line-strong);
  border-radius: 12px;
  padding: 48px;
  text-align: center;
}

.status-empty p {
  color: var(--status-muted);
  font-size: 14px;
  margin: 0 0 16px;
}

.reset-search-btn {
  background: var(--status-soft);
  border: 1px solid var(--status-line-strong);
  border-radius: 6px;
  color: var(--status-lime);
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 700;
  padding: 8px 16px;
}

/* Footnote */
.status-arch-footnote {
  background: var(--status-panel);
  border: 1px solid var(--status-line);
  border-radius: 12px;
  padding: 24px;
}

.arch-tag {
  color: var(--status-lime);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.arch-desc {
  color: var(--status-muted);
  font-size: 13.5px;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .workers-grid {
    grid-template-columns: 1fr;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .global-health-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .status-filter-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .status-search-box {
    max-width: 100%;
  }
}
</style>
