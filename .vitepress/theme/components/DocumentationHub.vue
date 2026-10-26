<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { openSearchModal } from '../composables/useSearchModal'

const { lang, isDark } = useData()
const isMac = ref(false)

onMounted(() => {
  isMac.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
})

const isUk = computed(() => (lang.value || 'en').toLowerCase().startsWith('uk'))
const isRu = computed(() => (lang.value || 'en').toLowerCase().startsWith('ru'))
const isZh = computed(() => (lang.value || 'en').toLowerCase().startsWith('zh'))
const currentLocale = computed(() => lang.value || 'en')

interface DocItem {
  id: string
  index: string
  title: string
  desc: string
  link: string
  badge?: string
}

interface DocBlock {
  id: string
  number: string
  code: string
  kicker: string
  title: string
  desc: string
  status: string
  accentColor: string
  items: DocItem[]
}

const quickFlags = computed(() => {
  const loc = currentLocale.value
  if (isRu.value) {
    return [
      { flag: '--install', label: 'Установка', link: `/${loc}/guide/install` },
      { flag: '--modloaders', label: 'Forge / Fabric', link: `/${loc}/guide/modloader` },
      { flag: '--big-picture', label: 'Big Picture', link: `/${loc}/guide/big-picture` },
      { flag: '--ai-models', label: 'AI Agent', link: `/${loc}/guide/agnes-ai-setup` },
      { flag: '--together', label: 'Облачная игра', link: `/${loc}/guide/together` },
      { flag: '--p2p-lan', label: 'Сеть P2P', link: `/${loc}/guide/p2p` },
      { flag: '--custom-skins', label: 'Скины Ely.by', link: `/${loc}/guide/custom-skins` },
      { flag: '--core-api', label: 'Core Document', link: '/en/core/' },
      { flag: '--diagnostics', label: 'Отчет и логи', link: `/${loc}/guide/troubleshooting` },
    ]
  }
  if (isUk.value) {
    return [
      { flag: '--install', label: 'Встановлення', link: `/${loc}/guide/install` },
      { flag: '--modloaders', label: 'Forge / Fabric', link: `/${loc}/guide/modloader` },
      { flag: '--big-picture', label: 'Big Picture', link: `/${loc}/guide/big-picture` },
      { flag: '--ai-models', label: 'AI Agent', link: `/${loc}/guide/agnes-ai-setup` },
      { flag: '--together', label: 'Хмарна гра', link: `/${loc}/guide/together` },
      { flag: '--p2p-lan', label: 'Мережа P2P', link: `/${loc}/guide/p2p` },
      { flag: '--custom-skins', label: 'Скіни Ely.by', link: `/${loc}/guide/custom-skins` },
      { flag: '--core-api', label: 'Core Document', link: '/en/core/' },
      { flag: '--diagnostics', label: 'Звіт та логи', link: `/${loc}/guide/troubleshooting` },
    ]
  }
  if (isZh.value) {
    return [
      { flag: '--install', label: '安装指南', link: `/${loc}/guide/install` },
      { flag: '--modloaders', label: 'Forge / Fabric', link: `/${loc}/guide/modloader` },
      { flag: '--big-picture', label: '手柄大屏幕', link: `/${loc}/guide/big-picture` },
      { flag: '--ai-models', label: 'AI 助手', link: `/${loc}/guide/agnes-ai-setup` },
      { flag: '--together', label: 'XMCL 联机', link: `/${loc}/guide/together` },
      { flag: '--p2p-lan', label: 'P2P 局域网', link: `/${loc}/guide/p2p` },
      { flag: '--custom-skins', label: '自定义皮肤', link: `/${loc}/guide/custom-skins` },
      { flag: '--core-api', label: '核心架构文档', link: '/en/core/' },
      { flag: '--diagnostics', label: '故障报告', link: `/${loc}/guide/troubleshooting` },
    ]
  }
  return [
    { flag: '--install', label: 'Installation', link: `/${loc}/guide/install` },
    { flag: '--modloaders', label: 'Forge / Fabric', link: `/${loc}/guide/modloader` },
    { flag: '--big-picture', label: 'Big Picture', link: `/${loc}/guide/big-picture` },
    { flag: '--ai-models', label: 'AI Assistant', link: `/${loc}/guide/agnes-ai-setup` },
    { flag: '--together', label: 'Together Cloud', link: `/${loc}/guide/together` },
    { flag: '--p2p-lan', label: 'P2P Network', link: `/${loc}/guide/p2p` },
    { flag: '--custom-skins', label: 'Custom Skins', link: `/${loc}/guide/custom-skins` },
    { flag: '--core-api', label: 'Core Document', link: '/en/core/' },
    { flag: '--diagnostics', label: 'Reports & Logs', link: `/${loc}/guide/troubleshooting` },
  ]
})

const blocks = computed<DocBlock[]>(() => {
  const loc = currentLocale.value
  if (isRu.value) {
    return [
      {
        id: 'getting-started',
        number: '01 / 04',
        code: 'SYS_INIT',
        kicker: 'ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ',
        title: 'Начало работы',
        desc: 'Полный цикл развертывания XMCL: кроссплатформенная установка, аутентификация Microsoft, офлайн-профили и миграция данных.',
        status: 'READY // V0.56+',
        accentColor: '#c9f85a',
        items: [
          {
            id: 'install',
            index: '01.1',
            title: 'Руководство по установке',
            desc: 'Пакеты для Windows (Installer / Portable), macOS, Linux (AppImage, Flathub) и Steam Deck',
            link: `/${loc}/guide/install`,
            badge: 'CRITICAL',
          },
          {
            id: 'update',
            index: '01.2',
            title: 'Механизмы обновления',
            desc: 'Автоматические обновления релизных каналов и ручная установка сборок',
            link: `/${loc}/guide/update`,
            badge: 'UPDATE',
          },
          {
            id: 'offline-mode',
            index: '01.3',
            title: 'Офлайн-режим (Без лицензии)',
            desc: 'Локальные независимые профили без обращения к серверам авторизации Microsoft',
            link: `/${loc}/guide/offline-mode`,
            badge: 'OFFLINE',
          },
          {
            id: 'microsoft-login',
            index: '01.4',
            title: 'Аутентификация Microsoft и лицензии',
            desc: 'Решение проблем входа, разграничение Java и Bedrock, токены OAuth',
            link: `/${loc}/guide/microsoft-login-issues`,
            badge: 'AUTH',
          },
          {
            id: 'change-drive',
            index: '01.5',
            title: 'Перенос хранилища и смена диска',
            desc: 'Безопасное перемещение директории лаунчера и игровых данных с системного диска C:',
            link: `/${loc}/guide/change-drive`,
            badge: 'STORAGE',
          },
          {
            id: 'appx-migrate',
            index: '01.6',
            title: 'Миграция устаревшего пакета AppX',
            desc: 'Бесшовный перенос данных из Windows Store пакета в классический формат',
            link: `/${loc}/guide/appx-migrate`,
            badge: 'MIGRATE',
          },
        ],
      },
      {
        id: 'game-mods',
        number: '02 / 04',
        code: 'RUNTIME_ENG',
        kicker: 'КОНФИГУРАЦИЯ СРЕДЫ',
        title: 'Управление игрой и моды',
        desc: 'Архитектура загрузчиков модов, изоляция инстансов, кастомизация интерфейса через CSS, скины и настройка AI Agent.',
        status: 'LOADED // MODULAR',
        accentColor: '#4ade80',
        items: [
          {
            id: 'modloaders',
            index: '02.1',
            title: 'Загрузчики модов (Modloaders)',
            desc: 'Архитектура и установка Forge, Fabric, Quilt, NeoForge и OptiFine',
            link: `/${loc}/guide/modloader`,
            badge: 'MODLOADER',
          },
          {
            id: 'appearance',
            index: '02.2',
            title: 'Оформление и кастомный CSS движок',
            desc: 'Полная кастомизация темы, прозрачность, стили и адаптивные интерфейсы',
            link: `/${loc}/guide/appearance`,
            badge: 'UI_CUSTOM',
          },
          {
            id: 'big-picture',
            index: '02.3',
            title: 'Режим Big Picture и геймпады',
            desc: 'Поддержка контроллеров Xbox, PlayStation, Switch, Steam Deck и интерфейс для ТВ',
            link: `/${loc}/guide/big-picture`,
            badge: 'GAMEPAD',
          },
          {
            id: 'custom-skins',
            index: '02.4',
            title: 'Сторонние сервисы скинов',
            desc: 'Отображение пользовательских скинов и плащей через Ely.by и LittleSkin',
            link: `/${loc}/guide/custom-skins`,
            badge: 'SKINS',
          },
          {
            id: 'agnes-ai',
            index: '02.5',
            title: 'Встроенный AI Agent: Agnes AI',
            desc: 'Бесплатный умный ассистент для диагностики крашей и управления модами',
            link: `/${loc}/guide/agnes-ai-setup`,
            badge: 'BUILTIN_AI',
          },
          {
            id: 'ai-cloud-models',
            index: '02.6',
            title: 'Облачные модели ИИ (Gemini, ChatGPT...)',
            desc: 'Подключение внешних API нейросетей Claude, Qwen, Z.ai с шифрованием ключей',
            link: `/${loc}/guide/ai-cloud-models`,
            badge: 'CLOUD_AI',
          },
          {
            id: 'ai-local-models',
            index: '02.7',
            title: 'Локальные модели ИИ (Ollama, LM Studio)',
            desc: 'Запуск нейросетей прямо на вашем ПК для 100% приватности без интернета',
            link: `/${loc}/guide/ai-local-models`,
            badge: 'LOCAL_AI',
          },
          {
            id: 'manage-storage',
            index: '02.8',
            title: 'Изоляция данных и инстансы',
            desc: 'Управление общим пулом ресурсов, жесткими ссылками и версиями игры',
            link: `/${loc}/guide/manage`,
            badge: 'INSTANCES',
          },
          {
            id: 'bedrock',
            index: '02.9',
            title: 'Minecraft Bedrock Edition',
            desc: 'Запуск и поддержка Bedrock параллельно с Java версиями в единой среде',
            link: `/${loc}/guide/bedrock`,
            badge: 'BEDROCK',
          },
        ],
      },
      {
        id: 'multiplayer',
        number: '03 / 04',
        code: 'NET_P2P',
        kicker: 'СЕТЕВОЙ СТЕК И ДИАГНОСТИКА',
        title: 'Совместная игра и диагностика',
        desc: 'Децентрализованная сетевая игра без белого IP, аналитика JVM-логов и быстрая диагностика сбоев и конфликтов модов.',
        status: 'CONNECT // ONLINE',
        accentColor: '#38bdf8',
        items: [
          {
            id: 'together',
            index: '03.1',
            title: 'XMCL Together: Облачный мультиплеер',
            desc: 'Совместная сетевая игра в 1 клик, общие серверы и управление сессиями без настройки роутера',
            link: `/${loc}/guide/together`,
            badge: 'TOGETHER',
          },
          {
            id: 'p2p',
            index: '03.2',
            title: 'Прямая сетевая игра P2P (LAN)',
            desc: 'Прямое туннелирование трафика между ПК без промежуточных серверов и сторонних утилит',
            link: `/${loc}/guide/p2p`,
            badge: 'P2P_MESH',
          },
          {
            id: 'troubleshooting',
            index: '03.3',
            title: 'Устранение неполадок при запуске',
            desc: 'Ошибки Java JDK, распределение памяти OOM, видеодрайверы и конфликты модов',
            link: `/${loc}/guide/troubleshooting`,
            badge: 'FORENSICS',
          },
          {
            id: 'crash-logs',
            index: '03.4',
            title: 'Журналы сбоев и коды выхода',
            desc: 'Расположение логов, расшифровка кодов 0xC0000005, 1, 137 и анализ стектрейса',
            link: `/${loc}/guide/crash-logs`,
            badge: 'CRASH_LOGS',
          },
          {
            id: 'diagnostic-report',
            index: '03.5',
            title: 'Диагностический отчет (.zip) и приватность',
            desc: 'Формирование отчета лаунчера, проверка device.json и полная защита от утечки токенов',
            link: `/${loc}/guide/diagnostic-report`,
            badge: 'TELEMETRY',
          },
        ],
      },
      {
        id: 'architecture-core',
        number: '04 / 04',
        code: 'CORE_SPEC',
        kicker: 'СПЕЦИФИКАЦИЯ ЯДРА И МОДУЛИ',
        title: 'Базовая документация ядра и API',
        desc: 'Полная техническая документация модулей ядра @xmcl/*: запуск процессов JVM, сетевой протокол P2P и разработка.',
        status: 'SOURCE // TYPESCRIPT',
        accentColor: '#ff8060',
        items: [
          {
            id: 'core-overview',
            index: '04.1',
            title: 'Core Document (Обзор архитектуры)',
            desc: 'Генеральная спецификация и архитектура экосистемы модулей ядра @xmcl/*',
            link: '/en/core/',
            badge: 'CORE_API',
          },
          {
            id: 'core-installer',
            index: '04.2',
            title: '@xmcl/installer (Модуль установки)',
            desc: 'Автоматизированная загрузка и установка версий Minecraft, Forge, Fabric и Java',
            link: '/en/core/installer',
            badge: 'PACKAGE',
          },
          {
            id: 'core-core',
            index: '04.3',
            title: '@xmcl/core (Ядро запуска JVM)',
            desc: 'Управление процессами, аргументы JVM, запуск инстансов и конфигурация среды',
            link: '/en/core/core',
            badge: 'PACKAGE',
          },
          {
            id: 'core-client',
            index: '04.4',
            title: '@xmcl/client (Сетевой клиент)',
            desc: 'P2P подключение, обнаружение серверов в LAN, сигнальные протоколы и пинг',
            link: '/en/core/client',
            badge: 'PACKAGE',
          },
          {
            id: 'core-mod-parser',
            index: '04.5',
            title: '@xmcl/mod-parser (Анализатор модов)',
            desc: 'Извлечение метаданных из JAR-файлов, анализ манифестов Forge, Fabric и Quilt',
            link: '/en/core/mod-parser',
            badge: 'PACKAGE',
          },
          {
            id: 'p2p-protocol',
            index: '04.6',
            title: 'Спецификация протоколов P2P',
            desc: 'Форматы сообщений, сигнализация через STUN/TURN и безопасность передачи пакетов',
            link: `/${loc}/protocol/p2p`,
            badge: 'PROTOCOL',
          },
          {
            id: 'contributing',
            index: '04.7',
            title: 'Руководство разработчика (Contributing)',
            desc: 'Настройка окружения, локальная компиляция проекта и оформление Pull Request',
            link: `/${loc}/guide/contributing`,
            badge: 'DEV_GUIDE',
          },
        ],
      },
    ]
  }
  if (isUk.value) {
    return [
      {
        id: 'getting-started',
        number: '01 / 04',
        code: 'SYS_INIT',
        kicker: 'ІНІЦІАЛІЗАЦІЯ СИСТЕМИ',
        title: 'Початок роботи',
        desc: 'Повний цикл розгортання XMCL: мультіплатформне встановлення, автентифікація Microsoft, офлайн-профілі та міграція даних без втрат.',
        status: 'READY // V0.56+',
        accentColor: '#c9f85a',
        items: [
          {
            id: 'install',
            index: '01.1',
            title: 'Посібник зі встановлення',
            desc: 'Пакунки для Windows (Installer / Portable), macOS, Linux (AppImage, Flathub) та Steam Deck',
            link: `/${loc}/guide/install`,
            badge: 'CRITICAL',
          },
          {
            id: 'update',
            index: '01.2',
            title: 'Оновлення лаунчера',
            desc: 'Механізм автоматичного оновлення каналів релізів та ручне оновлення білдів',
            link: `/${loc}/guide/update`,
            badge: 'UPDATE',
          },
          {
            id: 'offline-mode',
            index: '01.3',
            title: 'Офлайн-режим (Без ліцензії)',
            desc: 'Локальні ізольовані профілі без авторизації в серверах Microsoft',
            link: `/${loc}/guide/offline-mode`,
            badge: 'OFFLINE',
          },
          {
            id: 'microsoft-login',
            index: '01.4',
            title: 'Автентифікація Microsoft',
            desc: 'Вирішення помилок доступу, розмежування Bedrock / Java та відновлення токенів OAuth',
            link: `/${loc}/guide/microsoft-login-issues`,
            badge: 'AUTH',
          },
          {
            id: 'change-drive',
            index: '01.5',
            title: 'Перенесення даних на інший диск',
            desc: 'Безпечне переміщення кореневого каталогу та звільнення місця на системному диску',
            link: `/${loc}/guide/change-drive`,
            badge: 'STORAGE',
          },
          {
            id: 'appx-migrate',
            index: '01.6',
            title: 'Міграція старих AppX пакунків',
            desc: 'Конвертація даних з формату Windows Store до сучасних автономних інсталяцій',
            link: `/${loc}/guide/appx-migrate`,
            badge: 'MIGRATE',
          },
        ],
      },
      {
        id: 'game-mods',
        number: '02 / 04',
        code: 'RUNTIME_ENG',
        kicker: 'КОНФІГУРАЦІЯ СЕРЕДОВИЩА',
        title: 'Керування грою та моди',
        desc: 'Конфігурація завантажувачів модифікацій, ізоляція інстансів, кастомізація UI через темний CSS, скіни та асистент Agnes AI.',
        status: 'LOADED // MODULAR',
        accentColor: '#4ade80',
        items: [
          {
            id: 'modloaders',
            index: '02.1',
            title: 'Завантажувачі модів',
            desc: 'Встановлення та сумісність Forge, Fabric, Quilt, NeoForge та OptiFine',
            link: `/${loc}/guide/modloader`,
            badge: 'MODLOADER',
          },
          {
            id: 'appearance',
            index: '02.2',
            title: 'Оформлення та кастомний CSS',
            desc: 'Глибока кастомізація інтерфейсу, теми, прозорість та власні таблиці стилів CSS',
            link: `/${loc}/guide/appearance`,
            badge: 'UI_CUSTOM',
          },
          {
            id: 'big-picture',
            index: '02.3',
            title: 'Режим Big Picture та геймпади',
            desc: 'Підтримка контролерів Xbox, PlayStation, Switch, Steam Deck та віртуальна клавіатура',
            link: `/${loc}/guide/big-picture`,
            badge: 'GAMEPAD',
          },
          {
            id: 'custom-skins',
            index: '02.4',
            title: 'Сторонні системи скінів',
            desc: 'Підключення кастомних скінів та плащів через Ely.by та LittleSkin API',
            link: `/${loc}/guide/custom-skins`,
            badge: 'SKINS',
          },
          {
            id: 'agnes-ai',
            index: '02.5',
            title: 'Штучний інтелект: Agnes AI',
            desc: 'Вбудований безкоштовний асистент для аналізу крашів, керування модами та налаштувань',
            link: `/${loc}/guide/agnes-ai-setup`,
            badge: 'AI_AGENT',
          },
          {
            id: 'ai-cloud-models',
            index: '02.6',
            title: 'Хмарні моделі ШІ (Gemini, ChatGPT, Claude...)',
            desc: 'Підключення власних API-ключів комерційних нейромереж через сумісний протокол',
            link: `/${loc}/guide/ai-cloud-models`,
            badge: 'CLOUD_AI',
          },
          {
            id: 'ai-local-models',
            index: '02.7',
            title: 'Локальні моделі ШІ (Ollama, LM Studio)',
            desc: 'Запуск нейромереж безпосередньо на вашому ПК для 100% приватності без інтернету',
            link: `/${loc}/guide/ai-local-models`,
            badge: 'LOCAL_AI',
          },
          {
            id: 'manage-storage',
            index: '02.8',
            title: 'Ізоляція даних та інстанси',
            desc: 'Як XMCL керує спільним пулом ресурсів, жорсткими посиланнями та версіями гри',
            link: `/${loc}/guide/manage`,
            badge: 'INSTANCES',
          },
          {
            id: 'bedrock',
            index: '02.9',
            title: 'Minecraft Bedrock Edition',
            desc: 'Запуск та підтримка Bedrock поруч із версіями Java в єдиному середовищі',
            link: `/${loc}/guide/bedrock`,
            badge: 'BEDROCK',
          },
        ],
      },
      {
        id: 'multiplayer',
        number: '03 / 04',
        code: 'NET_P2P',
        kicker: 'МЕРЕЖЕВИЙ СТЕК ТА ДІАГНОСТИКА',
        title: 'Спільна гра та діагностика',
        desc: 'Децентралізована мережева гра без білої IP-адреси, аналітика JVM-логів та швидка діагностика збоїв і конфліктів модів.',
        status: 'CONNECT // ONLINE',
        accentColor: '#38bdf8',
        items: [
          {
            id: 'together',
            index: '03.1',
            title: 'XMCL Together: Хмарний мультиплеєр',
            desc: 'Спільна мережева гра в 1 клік, спільні сервери та управління сесіями без налаштування роутера',
            link: `/${loc}/guide/together`,
            badge: 'TOGETHER',
          },
          {
            id: 'p2p',
            index: '03.2',
            title: 'Пряма мережева гра P2P (LAN)',
            desc: 'Пряме тунелювання трафіку між комп’ютерами без проміжних серверів та сторонніх утиліт',
            link: `/${loc}/guide/p2p`,
            badge: 'P2P_MESH',
          },
          {
            id: 'troubleshooting',
            index: '03.3',
            title: 'Вирішення проблем із запуском',
            desc: 'Помилки Java JDK, розподіл пам’яті OOM, відеодрайвери та конфлікти модів',
            link: `/${loc}/guide/troubleshooting`,
            badge: 'FORENSICS',
          },
          {
            id: 'crash-logs',
            index: '03.4',
            title: 'Журнали збоїв та коди виходу',
            desc: 'Розташування логів, розшифровка кодів 0xC0000005, 1, 137 та аналіз стектрейсу',
            link: `/${loc}/guide/crash-logs`,
            badge: 'CRASH_LOGS',
          },
          {
            id: 'diagnostic-report',
            index: '03.5',
            title: 'Діагностичний звіт (.zip) та приватність',
            desc: 'Формування звіту лаунчера, перевірка device.json та захист від витоку токенів',
            link: `/${loc}/guide/diagnostic-report`,
            badge: 'TELEMETRY',
          },
        ],
      },
      {
        id: 'architecture-core',
        number: '04 / 04',
        code: 'CORE_SPEC',
        kicker: 'СПЕЦИФІКАЦІЯ ЯДРА ТА МОДУЛІ',
        title: 'Базова документація ядра та API',
        desc: 'Повна технічна документація модулів ядра @xmcl/*: запуск процесів JVM, мережевий протокол P2P та розробка.',
        status: 'SOURCE // TYPESCRIPT',
        accentColor: '#ff8060',
        items: [
          {
            id: 'core-overview',
            index: '04.1',
            title: 'Core Document (Огляд архітектури)',
            desc: 'Генеральна специфікація та архітектура екосистеми модулів ядра @xmcl/*',
            link: '/en/core/',
            badge: 'CORE_API',
          },
          {
            id: 'core-installer',
            index: '04.2',
            title: '@xmcl/installer (Модуль встановлення)',
            desc: 'Автоматизоване завантаження та встановлення версій Minecraft, Forge, Fabric та Java',
            link: '/en/core/installer',
            badge: 'PACKAGE',
          },
          {
            id: 'core-core',
            index: '04.3',
            title: '@xmcl/core (Ядро запуску JVM)',
            desc: 'Керування процесами, аргументи JVM, запуск інстансів та конфігурація середовища',
            link: '/en/core/core',
            badge: 'PACKAGE',
          },
          {
            id: 'core-client',
            index: '04.4',
            title: '@xmcl/client (Мережевий клієнт)',
            desc: 'P2P підключення, виявлення серверів у LAN, сигнальні протоколи та пінг',
            link: '/en/core/client',
            badge: 'PACKAGE',
          },
          {
            id: 'core-mod-parser',
            index: '04.5',
            title: '@xmcl/mod-parser (Аналізатор модів)',
            desc: 'Вилучення метаданих з JAR-файлів, аналіз маніфестів Forge, Fabric та Quilt',
            link: '/en/core/mod-parser',
            badge: 'PACKAGE',
          },
          {
            id: 'p2p-protocol',
            index: '04.6',
            title: 'Специфікація протоколів P2P',
            desc: 'Формати повідомлень, сигналізація через STUN/TURN та безпека передачі пакетів',
            link: `/${loc}/protocol/p2p`,
            badge: 'PROTOCOL',
          },
          {
            id: 'contributing',
            index: '04.7',
            title: 'Посібник розробника (Contributing)',
            desc: 'Налаштування оточення, локальна компіляція проекту та оформлення Pull Request',
            link: `/${loc}/guide/contributing`,
            badge: 'DEV_GUIDE',
          },
        ],
      },
    ]
  }

  // English fallback
  return [
    {
      id: 'getting-started',
      number: '01 / 04',
      code: 'SYS_INIT',
      kicker: 'SYSTEM INITIALIZATION',
      title: 'Getting Started',
      desc: 'Complete XMCL deployment lifecycle: cross-platform installation, Microsoft authentication, offline profiles, and storage migration.',
      status: 'READY // V0.56+',
      accentColor: '#c9f85a',
      items: [
        {
          id: 'install',
          index: '01.1',
          title: 'Installation Guide',
          desc: 'Windows (Installer / Portable), macOS, Linux (AppImage, Flathub) & Steam Deck',
          link: `/${loc}/guide/install`,
          badge: 'CRITICAL',
        },
        {
          id: 'update',
          index: '01.2',
          title: 'Update Mechanisms',
          desc: 'Automated release channel updates and manual artifact deployment',
          link: `/${loc}/guide/update`,
          badge: 'UPDATE',
        },
        {
          id: 'offline-mode',
          index: '01.3',
          title: 'Playing Offline (No License)',
          desc: 'Independent local profiles operational without Microsoft authentication servers',
          link: `/${loc}/guide/offline-mode`,
          badge: 'OFFLINE',
        },
        {
          id: 'microsoft-login',
          index: '01.4',
          title: 'Microsoft Authentication & Licenses',
          desc: 'Resolving authorization failures, Java vs Bedrock scope, and OAuth refresh tokens',
          link: `/${loc}/guide/microsoft-login-issues`,
          badge: 'AUTH',
        },
        {
          id: 'change-drive',
          index: '01.5',
          title: 'Storage & Drive Relocation',
          desc: 'Migrate launcher storage and game instances safely away from system drive C:',
          link: `/${loc}/guide/change-drive`,
          badge: 'STORAGE',
        },
        {
          id: 'appx-migrate',
          index: '01.6',
          title: 'Legacy AppX Package Migration',
          desc: 'Seamless data transition from legacy Windows Store packages to modern standalone runs',
          link: `/${loc}/guide/appx-migrate`,
          badge: 'MIGRATE',
        },
      ],
    },
    {
      id: 'game-mods',
      number: '02 / 04',
      code: 'RUNTIME_ENG',
      kicker: 'RUNTIME CONFIGURATION',
      title: 'Game Management & Mods',
      desc: 'Modloader orchestration, instance isolation, interface personalization via custom CSS, skin relays, and Agnes AI setup.',
      status: 'LOADED // MODULAR',
      accentColor: '#4ade80',
      items: [
        {
          id: 'modloaders',
          index: '02.1',
          title: 'Modloaders Guide',
          desc: 'Architecture and installation of Forge, Fabric, Quilt, NeoForge & OptiFine',
          link: `/${loc}/guide/modloader`,
          badge: 'MODLOADER',
        },
        {
          id: 'appearance',
          index: '02.2',
          title: 'Appearance & Custom CSS Engine',
          desc: 'Full UI tailoring, transparency, themes, and custom cascading stylesheets',
          link: `/${loc}/guide/appearance`,
          badge: 'UI_CUSTOM',
        },
        {
          id: 'big-picture',
          index: '02.3',
          title: 'Big Picture Mode & Gamepads',
          desc: 'Support for Xbox, PlayStation, Switch, Steam Deck controllers and couch TV interface',
          link: `/${loc}/guide/big-picture`,
          badge: 'GAMEPAD',
        },
        {
          id: 'custom-skins',
          index: '02.4',
          title: 'Third-Party Skin Services',
          desc: 'Custom skins and capes routing via Ely.by and LittleSkin authentication',
          link: `/${loc}/guide/custom-skins`,
          badge: 'SKINS',
        },
        {
          id: 'agnes-ai',
          index: '02.5',
          title: 'AI Assistant: Agnes AI Setup',
          desc: 'Built-in free intelligent companion for crash diagnostics and mod management',
          link: `/${loc}/guide/agnes-ai-setup`,
          badge: 'AI_AGENT',
        },
        {
          id: 'ai-cloud-models',
          index: '02.6',
          title: 'Cloud AI Models (ChatGPT, Gemini, Claude...)',
          desc: 'Connecting commercial cloud LLM provider API keys using compatible protocol',
          link: `/${loc}/guide/ai-cloud-models`,
          badge: 'CLOUD_AI',
        },
        {
          id: 'ai-local-models',
          index: '02.7',
          title: 'Local Offline AI Models (Ollama, LM Studio)',
          desc: 'Running open-weights LLMs directly on your GPU for 100% offline privacy',
          link: `/${loc}/guide/ai-local-models`,
          badge: 'LOCAL_AI',
        },
        {
          id: 'manage-storage',
          index: '02.8',
          title: 'Data Isolation & Asset Pool',
          desc: 'How XMCL organizes instance folders, hardlink deduplication, and memory',
          link: `/${loc}/guide/manage`,
          badge: 'INSTANCES',
        },
        {
          id: 'bedrock',
          index: '02.9',
          title: 'Minecraft Bedrock Edition',
          desc: 'Launching and configuring Bedrock edition parallel to Java profiles',
          link: `/${loc}/guide/bedrock`,
          badge: 'BEDROCK',
        },
      ],
    },
    {
      id: 'multiplayer',
      number: '03 / 04',
      code: 'NET_P2P',
      kicker: 'NETWORK STACK & DIAGNOSTICS',
      title: 'Multiplayer & Diagnostics',
      desc: 'Decentralized peer-to-peer mesh networking without public IPs, JVM crash dump forensics, and conflict diagnosis.',
      status: 'CONNECT // ONLINE',
      accentColor: '#38bdf8',
      items: [
        {
          id: 'together',
          index: '03.1',
          title: 'XMCL Together: Cloud Multiplayer',
          desc: '1-Click instant cloud multiplayer rooms without router port forwarding',
          link: `/${loc}/guide/together`,
          badge: 'TOGETHER',
        },
        {
          id: 'p2p',
          index: '03.2',
          title: 'Direct P2P LAN Multiplayer',
          desc: 'Direct peer-to-peer data pipes without proxy bottlenecks or third-party apps',
          link: `/${loc}/guide/p2p`,
          badge: 'P2P_MESH',
        },
        {
          id: 'troubleshooting',
          index: '03.3',
          title: 'Launch & Crash Troubleshooting',
          desc: 'Resolve Java JDK faults, out-of-memory crashes, GPU driver errors, and mod conflicts',
          link: `/${loc}/guide/troubleshooting`,
          badge: 'FORENSICS',
        },
        {
          id: 'crash-logs',
          index: '03.4',
          title: 'Crash Logs & Exit Codes',
          desc: 'Locate log files, decode exit codes (0xC0000005, 1, 137), and parse Java stack traces',
          link: `/${loc}/guide/crash-logs`,
          badge: 'CRASH_LOGS',
        },
        {
          id: 'diagnostic-report',
          index: '03.5',
          title: 'Diagnostic Report (.zip) & Privacy',
          desc: 'Export launcher diagnostics, inspect device.json, and privacy safeguards against token leaks',
          link: `/${loc}/guide/diagnostic-report`,
          badge: 'TELEMETRY',
        },
      ],
    },
    {
      id: 'architecture-core',
      number: '04 / 04',
      code: 'CORE_SPEC',
      kicker: 'CORE SPECIFICATION & MODULES',
      title: 'Core Architecture & APIs',
      desc: 'Complete technical documentation of the @xmcl/* packages: process lifecycle, P2P network protocol, and developer setup.',
      status: 'SOURCE // TYPESCRIPT',
      accentColor: '#ff8060',
      items: [
        {
          id: 'core-overview',
          index: '04.1',
          title: 'Core Document (Overview & Architecture)',
          desc: 'Master architectural blueprint and reference for all @xmcl/* core libraries',
          link: '/en/core/',
          badge: 'CORE_API',
        },
        {
          id: 'core-installer',
          index: '04.2',
          title: '@xmcl/installer (Installation Engine)',
          desc: 'Automated installer for vanilla Minecraft, modloaders, assets, and Java runtimes',
          link: '/en/core/installer',
          badge: 'PACKAGE',
        },
        {
          id: 'core-core',
          index: '04.3',
          title: '@xmcl/core (Launch Process Lifecycle)',
          desc: 'JVM argument generators, process watchers, instance parameters, and execution engine',
          link: '/en/core/core',
          badge: 'PACKAGE',
        },
        {
          id: 'core-client',
          index: '04.4',
          title: '@xmcl/client (Network Client)',
          desc: 'P2P connection handlers, LAN multicast discovery, pinging, and query protocols',
          link: '/en/core/client',
          badge: 'PACKAGE',
        },
        {
          id: 'core-mod-parser',
          index: '04.5',
          title: '@xmcl/mod-parser (Mod JAR Analyzer)',
          desc: 'Inspect mod JAR manifests, metadata structures, and dependencies for Forge/Fabric/Quilt',
          link: '/en/core/mod-parser',
          badge: 'PACKAGE',
        },
        {
          id: 'p2p-protocol',
          index: '04.6',
          title: 'P2P Online Protocol Specification',
          desc: 'Technical wire protocol format, STUN/TURN signaling, and packet encryption specs',
          link: `/${loc}/protocol/p2p`,
          badge: 'PROTOCOL',
        },
        {
          id: 'contributing',
          index: '04.7',
          title: 'Developer Contributing Guide',
          desc: 'Setting up the TypeScript toolchain, compiling locally, and opening Pull Requests',
          link: `/${loc}/guide/contributing`,
          badge: 'DEV_GUIDE',
        },
      ],
    },
  ]
})

const t = computed(() => {
  if (isUk.value) {
    return {
      kicker: 'ТЕХНІЧНА СПЕЦИФІКАЦІЯ XMCL',
      titleLight: 'АРХІТЕКТУРА ТА',
      titleStrong: 'ДОКУМЕНТАЦІЯ',
      lead: 'Офіційний довідковий центр лаунчера: посібники з розгортання, ізоляція модифікацій, P2P mesh-мережі, діагностика краш-логів та документація ядра @xmcl/*.',
      searchLabel: 'Пошук по всій документації',
      searchPlaceholder: 'Пошук статей, параметрів JVM, модулів ядра, помилок...',
      quickFlags: 'ШВИДКИЙ ВИКЛИК:',
      indexRegister: 'ІНДЕКС / РЕЄСТР',
      module: 'МОДУЛЬ',
      viewSpecs: 'ВІДКРИТИ РОЗДІЛ',
      discordKicker: 'СПІЛЬНОТА ТА ПІДТРИМКА',
      discordTitle: 'Офіційний сервер Discord',
      discordDesc: 'Приєднуйтесь до каналів розробників та спільноти гравців: обговорення модів, вирішення мережевих збоїв та технічна допомога онлайн.',
      discordBtn: 'ПРИЄДНАТИСЯ В DISCORD',
      repoKicker: 'ВІДКРИТИЙ РЕПОЗИТОРІЙ ДОКУМЕНТАЦІЇ',
      repoTitle: 'Співавторство документації',
      repoDesc: 'Документація створюється спільнотою у відкритому репозиторії. Ви можете виправити помилку, доповнити статтю або додати новий матеріал.',
      repoBtn: 'ВІДКРИТИ РЕПОЗИТОРІЙ GITHUB',
    }
  }
  if (isRu.value) {
    return {
      kicker: 'ТЕХНИЧЕСКАЯ СПЕЦИФИКАЦИЯ XMCL',
      titleLight: 'АРХИТЕКТУРА И',
      titleStrong: 'ДОКУМЕНТАЦИЯ',
      lead: 'Официальный справочный центр лаунчера: руководства по развертыванию, изоляция модификаций, P2P mesh-сети, диагностика краш-логов и документация ядра @xmcl/*.',
      searchLabel: 'Поиск по всей документации',
      searchPlaceholder: 'Поиск статей, параметров JVM, модулей ядра, ошибок...',
      quickFlags: 'БЫСТРЫЙ ВЫЗОВ:',
      indexRegister: 'ИНДЕКС / РЕЕСТР',
      module: 'МОДУЛЬ',
      viewSpecs: 'ОТКРЫТЬ РАЗДЕЛ',
      discordKicker: 'СООБЩЕСТВО И ПОДДЕРЖКА',
      discordTitle: 'Официальный сервер Discord',
      discordDesc: 'Присоединяйтесь к каналам разработчиков и сообщества: обсуждение модов, решение сетевых проблем и техническая помощь онлайн.',
      discordBtn: 'ПРИСОЕДИНИТЬСЯ В DISCORD',
      repoKicker: 'ОТКРЫТЫЙ РЕПОЗИТОРИЙ ДОКУМЕНТАЦИИ',
      repoTitle: 'Соавторство документации',
      repoDesc: 'Документация создается сообществом в открытом репозитории. Вы можете исправить ошибку, дополнить статью или сделать перевод.',
      repoBtn: 'ОТКРЫТЬ РЕПОЗИТОРИЙ GITHUB',
    }
  }
  return {
    kicker: 'XMCL TECHNICAL SPECIFICATION',
    titleLight: 'ARCHITECTURE &',
    titleStrong: 'DOCUMENTATION',
    lead: 'The comprehensive manual for launcher deployment, instance orchestration, peer-to-peer mesh networking, crash forensics, and the @xmcl TypeScript core engine.',
    searchLabel: 'Search all documentation',
    searchPlaceholder: 'Search guides, JVM parameters, core modules, error codes...',
    quickFlags: 'QUICK_FLAGS:',
    indexRegister: 'INDEX / REGISTER',
    module: 'MODULE',
    viewSpecs: 'VIEW MODULE SPECS',
    discordKicker: 'PEER NETWORK & SUPPORT',
    discordTitle: 'Community Discord Relay',
    discordDesc: 'Join the core developers and player community for mod troubleshooting, live P2P network diagnostics, and real-time guidance.',
    discordBtn: 'CONNECT TO DISCORD',
    repoKicker: 'OPEN DOCUMENTATION SOURCE',
    repoTitle: 'Contribute to Documentation',
    repoDesc: 'XMCL documentation is entirely open-source. Help us improve guides, fix typos, submit architectural updates, or translate into new locales.',
    repoBtn: 'OPEN GITHUB REPOSITORY',
  }
})

</script>

<template>
  <div class="modern-doc-hub" :class="{ 'dark': isDark }">
    <!-- Top HUD Terminal Bar -->
    <header class="hub-terminal-header">
      <div class="hub-status-strip">
        <div class="hub-kicker-badge">
          <span class="hub-pulse-dot" aria-hidden="true"></span>
          <span class="hub-kicker-text">{{ t.kicker }}</span>
        </div>
        <div class="hub-version-tag">
          <span class="hub-tag-prefix">BUILD:</span>
          <strong>v0.56+ // PRODUCTION</strong>
        </div>
      </div>

      <div class="hub-hero-headline">
        <h1 class="hub-title">
          <span class="hub-title-light">{{ t.titleLight }}</span>
          <span class="hub-title-strong">{{ t.titleStrong }}</span>
        </h1>
        <p class="hub-lead">
          {{ t.lead }}
        </p>
      </div>

      <!-- Command Console Search Terminal -->
      <div class="hub-search-terminal">
        <div class="hub-terminal-window-bar">
          <div class="hub-terminal-dots">
            <span class="dot dot-1"></span>
            <span class="dot dot-2"></span>
            <span class="dot dot-3"></span>
          </div>
          <span class="hub-terminal-caption">bash — xmcl-docs-search --live-index</span>
          <span class="hub-terminal-hint">[INDEX: 23 PACKAGES + 18 GUIDES]</span>
        </div>

        <button
          type="button"
          class="hub-terminal-input-btn"
          :aria-label="t.searchLabel"
          @click="openSearchModal"
        >
          <div class="hub-input-inner">
            <span class="hub-cli-prompt">user@xmcl:~$</span>
            <span class="hub-cli-cmd">query-docs</span>
            <span class="hub-cli-placeholder">{{ t.searchPlaceholder }}</span>
            <span class="hub-cli-cursor">_</span>
          </div>
          <div class="hub-shortcut-keys" aria-hidden="true">
            <kbd class="hub-key">{{ isMac ? '⌘' : 'CTRL' }}</kbd>
            <span class="hub-key-plus">+</span>
            <kbd class="hub-key">K</kbd>
          </div>
        </button>

        <!-- Command Flags Strip -->
        <div class="hub-flags-row">
          <span class="hub-flags-label">{{ t.quickFlags }}</span>
          <div class="hub-flags-list">
            <a
              v-for="item in quickFlags"
              :key="item.flag"
              :href="item.link"
              class="hub-flag-chip"
            >
              <span class="chip-flag">{{ item.flag }}</span>
              <span class="chip-label">{{ item.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- 4-Quadrant Architecture Matrix -->
    <main class="hub-matrix-grid">
      <article
        v-for="block in blocks"
        :id="block.id"
        :key="block.id"
        class="hub-quadrant-card"
        :style="{ '--quadrant-accent': block.accentColor }"
      >
        <!-- Quadrant Window Bar -->
        <div class="quadrant-window-bar">
          <div class="quadrant-win-dots">
            <span class="qdot"></span>
            <span class="qdot"></span>
            <span class="qdot"></span>
          </div>
          <span class="quadrant-code">{{ block.code }}</span>
          <span class="quadrant-index">{{ block.number }}</span>
        </div>

        <!-- Quadrant Header -->
        <div class="quadrant-body-header">
          <div class="quadrant-kicker-row">
            <span class="quadrant-kicker">{{ block.kicker }}</span>
            <span class="quadrant-status">{{ block.status }}</span>
          </div>
          <h2 class="quadrant-title">{{ block.title }}</h2>
          <p class="quadrant-desc">{{ block.desc }}</p>
        </div>

        <!-- Articles Register -->
        <div class="quadrant-register">
          <div class="register-header">
            <span>{{ t.indexRegister }}</span>
            <span>{{ t.module }}</span>
          </div>

          <div class="register-list">
            <a
              v-for="item in block.items"
              :key="item.id"
              :href="item.link"
              class="register-item-link"
            >
              <div class="register-item-idx">{{ item.index }}</div>
              <div class="register-item-content">
                <div class="register-item-topline">
                  <strong class="register-item-title">{{ item.title }}</strong>
                  <span v-if="item.badge" class="register-item-badge">{{ item.badge }}</span>
                </div>
                <p class="register-item-desc">{{ item.desc }}</p>
              </div>
              <span class="register-item-action" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <!-- Quadrant Terminal Jump -->
        <div class="quadrant-card-footer">
          <a :href="block.items[0]?.link" class="quadrant-action-btn">
            <span class="btn-prefix">&gt;</span>
            <span class="btn-text">{{ isUk ? 'ПЕРЕГЛЯНУТИ РОЗДІЛ' : 'VIEW MODULE SPECS' }}</span>
            <span class="btn-arrow" aria-hidden="true">+</span>
          </a>
        </div>
      </article>
    </main>

    <!-- Bottom Developer & Community Consoles -->
    <section class="hub-consoles-section">
      <!-- Community Console -->
      <div class="hub-console-card console-community">
        <div class="console-window-bar">
          <div class="quadrant-win-dots">
            <span class="qdot"></span>
            <span class="qdot"></span>
            <span class="qdot"></span>
          </div>
          <span class="console-label">RELAY // 01</span>
          <span class="console-status">LIVE PEERS</span>
        </div>
        <div class="console-body">
          <div class="console-meta-kicker">{{ isUk ? 'СПІЛЬНОТА РОЗРОБНИКІВ ТА ГРАВЦІВ' : (isRu ? 'СООБЩЕСТВО И ПОДДЕРЖКА' : 'PEER NETWORK & SUPPORT') }}</div>
          <h3 class="console-heading">{{ isUk ? 'Спільнота та зворотний зв’язок' : (isRu ? 'Сообщество и обратная связь' : 'Community & Support Relay') }}</h3>
          <p class="console-copy">
            {{
              isUk
                ? 'Якщо документація не допомогла вирішити проблему чи ви знайшли баг у лаунчері, зверніться до спільноти або створіть Issue на GitHub:'
                : (isRu
                  ? 'Если документация не помогла решить проблему или вы обнаружили баг, обратитесь к сообществу или создайте Issue на GitHub:'
                  : 'If the documentation didn’t resolve your issue, get direct community support or report launcher bugs on Discord, Reddit, or GitHub:')
            }}
          </p>
          <div class="console-actions-row">
            <a
              href="https://discord.gg/W5XVwYY7GQ"
              target="_blank"
              rel="noopener noreferrer"
              class="console-btn"
            >
              <span>{{ isUk ? 'DISCORD СПІЛЬНОТА' : (isRu ? 'DISCORD СООБЩЕСТВО' : 'CONNECT TO DISCORD') }}</span>
              <span class="console-btn-plus">+</span>
            </a>
            <a
              href="https://www.reddit.com/r/XMCL/"
              target="_blank"
              rel="noopener noreferrer"
              class="console-btn"
            >
              <span>{{ isUk ? 'R/XMCL НА REDDIT' : (isRu ? 'R/XMCL НА REDDIT' : 'R/XMCL ON REDDIT') }}</span>
              <span class="console-btn-plus">+</span>
            </a>
            <a
              href="https://github.com/voxelum/x-minecraft-launcher/issues"
              target="_blank"
              rel="noopener noreferrer"
              class="console-btn"
            >
              <span>{{ isUk ? 'GITHUB ISSUES (БАГИ)' : (isRu ? 'GITHUB ISSUES (БАГИ)' : 'GITHUB ISSUES (REPORT BUG)') }}</span>
              <span class="console-btn-plus">+</span>
            </a>
          </div>
        </div>
      </div>

      <!-- GitHub Documentation Source Console -->
      <div class="hub-console-card console-github">
        <div class="console-window-bar">
          <div class="quadrant-win-dots">
            <span class="qdot"></span>
            <span class="qdot"></span>
            <span class="qdot"></span>
          </div>
          <span class="console-label">SOURCE // 02</span>
          <span class="console-status">PUBLIC REPO</span>
        </div>
        <div class="console-body">
          <div class="console-meta-kicker">{{ isUk ? 'ВІДКРИТИЙ ВИХІДНИЙ КОД' : 'OPEN DOCUMENTATION SOURCE' }}</div>
          <h3 class="console-heading">{{ isUk ? 'Допомогти вдосконалити документацію' : 'Contribute to Documentation' }}</h3>
          <p class="console-copy">
            {{
              isUk
                ? 'Усі посібники та технічна документація зберігаються на GitHub. Ви можете виправити неточність, оновити статтю або написати новий посібник через PR.'
                : 'Every guide, API reference, and translation is open source. Open a Pull Request on GitHub to fix a typo, update a guide, or contribute new tutorials.'
            }}
          </p>
          <a
            href="https://github.com/voxelum/xmcl-page"
            target="_blank"
            rel="noopener noreferrer"
            class="console-btn"
          >
            <span>{{ t.repoBtn }}</span>
            <span class="console-btn-plus">+</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Base Reset & Variables Matching XMCL Brand */
.modern-doc-hub {
  --hub-ink: var(--xmcl-ink, #17211f);
  --hub-muted: var(--xmcl-muted, #64706c);
  --hub-paper: var(--xmcl-paper, #f4f5ef);
  --hub-panel: var(--xmcl-panel, #ffffff);
  --hub-line: var(--xmcl-line, #d8ded7);
  --hub-line-dark: #b8c4b6;
  --hub-lime: #c9f85a;
  --hub-orange: #e45e42;
  --hub-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --hub-sans: 'Space Grotesk', 'Avenir Next', 'Segoe UI', -apple-system, sans-serif;
  
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 32px clamp(16px, 4vw, 48px) 96px;
  box-sizing: border-box;
  color: var(--hub-ink);
  font-family: var(--hub-sans);
}

:global(html.dark) .modern-doc-hub,
.modern-doc-hub.dark {
  --hub-ink: #edf3ed;
  --hub-muted: #9aa9a1;
  --hub-paper: #101612;
  --hub-panel: #1b241f;
  --hub-line: #334139;
  --hub-line-dark: #44564c;
  --hub-lime: #c9f85a;
  --hub-orange: #ff8060;
  color: #edf3ed;
}

:global(html.dark) .hub-quadrant-card,
:global(html.dark) .hub-console-card,
:global(html.dark) .hub-search-terminal,
.modern-doc-hub.dark .hub-quadrant-card,
.modern-doc-hub.dark .hub-console-card,
.modern-doc-hub.dark .hub-search-terminal {
  background-color: #1b241f !important;
  color: #edf3ed !important;
  border-color: #334139 !important;
}

:global(html.dark) .console-body,
.modern-doc-hub.dark .console-body {
  background-color: #1b241f !important;
  color: #edf3ed !important;
}

:global(html.dark) .console-btn,
.modern-doc-hub.dark .console-btn {
  background-color: #151d18 !important;
  color: #edf3ed !important;
  border-color: #334139 !important;
}

:global(html.dark) .console-btn:hover,
.modern-doc-hub.dark .console-btn:hover {
  background-color: #c9f85a !important;
  color: #17211f !important;
  border-color: #c9f85a !important;
}

:global(html.dark) .register-list,
.modern-doc-hub.dark .register-list {
  background-color: #1b241f !important;
}

:global(html.dark) .register-item-link,
.modern-doc-hub.dark .register-item-link {
  border-color: #334139 !important;
  background-color: #1b241f;
}

:global(html.dark) .register-item-link:hover,
.modern-doc-hub.dark .register-item-link:hover {
  background-color: rgba(201, 248, 90, 0.05) !important;
}

:global(html.dark) .register-item-title,
.modern-doc-hub.dark .register-item-title {
  color: #edf3ed !important;
}

:global(html.dark) .register-item-desc,
.modern-doc-hub.dark .register-item-desc {
  color: #9aa9a1 !important;
}

:global(html.dark) .console-heading,
.modern-doc-hub.dark .console-heading {
  color: #edf3ed !important;
}

:global(html.dark) .console-copy,
.modern-doc-hub.dark .console-copy {
  color: #9aa9a1 !important;
}

:global(html.dark) .hub-flag-chip,
.modern-doc-hub.dark .hub-flag-chip {
  background-color: #151d18 !important;
  color: #edf3ed !important;
  border-color: #334139 !important;
}

:global(html.dark) .hub-title-strong,
.modern-doc-hub.dark .hub-title-strong {
  color: #edf3ed !important;
}

:global(html.dark) .quadrant-title,
.modern-doc-hub.dark .quadrant-title {
  color: #edf3ed !important;
}

:global(html.dark) .quadrant-action-btn,
.modern-doc-hub.dark .quadrant-action-btn {
  background-color: #151d18 !important;
  color: #edf3ed !important;
  border-color: #334139 !important;
}

/* ==========================================================================
   Terminal Header & Hero
   ========================================================================== */
.hub-terminal-header {
  margin-bottom: 56px;
}

.hub-status-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--hub-line);
  padding-bottom: 14px;
  margin-bottom: 28px;
  font-family: var(--hub-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hub-kicker-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: var(--hub-muted);
}

.hub-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--hub-lime);
  box-shadow: 0 0 10px rgba(201, 248, 90, 0.7);
  display: inline-block;
  animation: pulse-glow 2.4s infinite ease-in-out;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.85); }
}

.hub-version-tag {
  color: var(--hub-muted);
  display: flex;
  align-items: center;
  gap: 8px;
}

.hub-version-tag strong {
  color: var(--hub-ink);
}

.hub-hero-headline {
  max-width: 980px;
  margin-bottom: 36px;
}

.hub-title {
  font-size: clamp(38px, 6vw, 76px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.05em;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
}

.hub-title-light {
  color: var(--hub-orange);
}

.hub-title-strong {
  color: var(--hub-ink);
}

.hub-lead {
  font-size: clamp(16px, 1.6vw, 20px);
  line-height: 1.55;
  color: var(--hub-muted);
  margin: 0;
  max-width: 780px;
}

/* ==========================================================================
   Command Console Search Terminal
   ========================================================================== */
.hub-search-terminal {
  background: var(--hub-panel);
  border: 1px solid var(--hub-ink);
  box-shadow: 8px 8px 0px var(--hub-lime);
  transition: transform 180ms ease, box-shadow 180ms ease;
  overflow: hidden;
}

:global(html.dark) .hub-search-terminal {
  box-shadow: 8px 8px 0px rgba(201, 248, 90, 0.35);
  border-color: var(--hub-line-dark);
}

.hub-terminal-window-bar {
  background: #151d18;
  color: #8e9c94;
  border-bottom: 1px solid var(--hub-line);
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--hub-mono);
  font-size: 11px;
}

:global(html:not(.dark)) .hub-terminal-window-bar {
  background: #202925;
  color: #a4b4ab;
}

.hub-terminal-dots {
  display: flex;
  gap: 6px;
}

.hub-terminal-dots .dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.dot-1 { background: #e45e42; }
.dot-2 { background: #eab308; }
.dot-3 { background: #22c55e; }

.hub-terminal-caption {
  font-weight: 700;
  letter-spacing: 0.05em;
}

.hub-terminal-hint {
  margin-left: auto;
  font-size: 10px;
  color: #6a7c72;
  letter-spacing: 0.08em;
}

.hub-terminal-input-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 160ms ease;
}

.hub-terminal-input-btn:hover {
  background: rgba(201, 248, 90, 0.06);
}

.hub-input-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-family: var(--hub-mono);
  font-size: 14px;
}

.hub-cli-prompt {
  color: var(--hub-lime);
  font-weight: 700;
}

.hub-cli-cmd {
  color: var(--hub-orange);
  font-weight: 700;
}

.hub-cli-placeholder {
  color: var(--hub-muted);
  font-weight: 500;
}

.hub-cli-cursor {
  color: var(--hub-lime);
  font-weight: 900;
  animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hub-shortcut-keys {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--hub-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--hub-ink);
  flex-shrink: 0;
}

.hub-key {
  background: rgba(154, 169, 161, 0.15);
  border: 1px solid var(--hub-line-dark);
  padding: 4px 8px;
  min-width: 24px;
  text-align: center;
  box-shadow: 2px 2px 0px var(--hub-ink);
}

.hub-key-plus {
  color: var(--hub-muted);
}

.hub-flags-row {
  border-top: 1px solid var(--hub-line);
  padding: 12px 22px;
  background: rgba(21, 29, 24, 0.03);
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

:global(html.dark) .hub-flags-row {
  background: rgba(0, 0, 0, 0.2);
}

.hub-flags-label {
  font-family: var(--hub-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--hub-muted);
}

.hub-flags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.hub-flag-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid var(--hub-line);
  background: var(--hub-paper);
  text-decoration: none;
  font-size: 11px;
  font-family: var(--hub-mono);
  color: var(--hub-ink);
  transition: all 140ms ease;
}

.hub-flag-chip:hover {
  border-color: var(--hub-lime);
  background: var(--hub-lime);
  color: #17211f;
  transform: translate(-1px, -1px);
  box-shadow: 2px 2px 0px var(--hub-ink);
}

.chip-flag {
  color: var(--hub-orange);
  font-weight: 700;
}

.hub-flag-chip:hover .chip-flag {
  color: #17211f;
}

.chip-label {
  font-weight: 600;
}

/* ==========================================================================
   4-Quadrant Architectural Bento Grid
   ========================================================================== */
.hub-matrix-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  margin-bottom: 64px;
}

@media (min-width: 960px) {
  .hub-matrix-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.hub-quadrant-card {
  background: var(--hub-panel);
  border: 1px solid var(--hub-ink);
  box-shadow: 6px 6px 0px var(--quadrant-accent);
  display: flex;
  flex-direction: column;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

:global(html.dark) .hub-quadrant-card {
  border-color: var(--hub-line-dark);
}

.hub-quadrant-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0px var(--quadrant-accent);
}

/* Window Bar inside Quadrant */
.quadrant-window-bar {
  background: #1b241f;
  color: #8e9c94;
  border-bottom: 1px solid var(--hub-line);
  padding: 9px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--hub-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
}

:global(html:not(.dark)) .quadrant-window-bar {
  background: #202925;
  color: #9aa9a1;
}

.quadrant-win-dots {
  display: flex;
  gap: 5px;
}

.qdot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #64716b;
}

.quadrant-code {
  font-weight: 800;
  color: var(--quadrant-accent);
}

.quadrant-index {
  margin-left: auto;
  font-weight: 800;
  color: #edf3ed;
}

/* Quadrant Body Header */
.quadrant-body-header {
  padding: 24px 24px 18px;
  border-bottom: 1px solid var(--hub-line);
}

.quadrant-kicker-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: var(--hub-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  font-weight: 800;
}

.quadrant-kicker {
  color: var(--hub-orange);
}

.quadrant-status {
  color: var(--hub-muted);
}

.quadrant-title {
  font-size: clamp(24px, 2.4vw, 32px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin: 0 0 10px;
  color: var(--hub-ink);
}

.quadrant-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--hub-muted);
  margin: 0;
}

/* Register Table / Articles */
.quadrant-register {
  flex: 1 1 auto;
}

.register-header {
  display: flex;
  justify-content: space-between;
  padding: 8px 24px;
  background: rgba(21, 29, 24, 0.04);
  border-bottom: 1px solid var(--hub-line);
  font-family: var(--hub-mono);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: var(--hub-muted);
}

:global(html.dark) .register-header {
  background: rgba(0, 0, 0, 0.25);
}

.register-list {
  display: flex;
  flex-direction: column;
}

.register-item-link {
  display: grid;
  grid-template-columns: 46px 1fr auto;
  align-items: start;
  gap: 14px;
  padding: 16px 24px;
  text-decoration: none;
  border-bottom: 1px solid var(--hub-line);
  transition: all 140ms ease;
  position: relative;
}

.register-item-link:last-child {
  border-bottom: none;
}

.register-item-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0px;
  background: var(--quadrant-accent);
  transition: width 140ms ease;
}

.register-item-link:hover {
  background: rgba(201, 248, 90, 0.04);
  padding-left: 28px;
}

.register-item-link:hover::before {
  width: 4px;
}

.register-item-idx {
  font-family: var(--hub-mono);
  font-size: 11px;
  font-weight: 800;
  color: var(--hub-muted);
  padding-top: 2px;
}

.register-item-link:hover .register-item-idx {
  color: var(--quadrant-accent);
}

.register-item-content {
  min-width: 0;
}

.register-item-topline {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.register-item-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--hub-ink);
  line-height: 1.3;
}

.register-item-link:hover .register-item-title {
  color: var(--hub-orange);
}

.register-item-badge {
  font-family: var(--hub-mono);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 1px 6px;
  background: rgba(201, 248, 90, 0.15);
  border: 1px solid var(--quadrant-accent);
  color: var(--hub-ink);
}

.register-item-desc {
  font-size: 12px;
  line-height: 1.5;
  color: var(--hub-muted);
  margin: 0;
}

.register-item-action {
  font-size: 16px;
  font-weight: 700;
  color: var(--hub-muted);
  align-self: center;
  transition: transform 140ms ease, color 140ms ease;
}

.register-item-link:hover .register-item-action {
  transform: translateX(4px);
  color: var(--quadrant-accent);
}

/* Quadrant Footer Action */
.quadrant-card-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--hub-line);
  background: rgba(21, 29, 24, 0.02);
}

:global(html.dark) .quadrant-card-footer {
  background: rgba(0, 0, 0, 0.15);
}

.quadrant-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: var(--hub-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--hub-ink);
  padding: 8px 14px;
  border: 1px solid var(--hub-ink);
  background: transparent;
  transition: all 160ms ease;
}

:global(html.dark) .quadrant-action-btn {
  border-color: var(--hub-line-dark);
}

.quadrant-action-btn:hover {
  background: var(--quadrant-accent);
  color: #17211f;
  border-color: var(--quadrant-accent);
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0px var(--hub-ink);
}

.btn-prefix {
  color: var(--quadrant-accent);
}

.quadrant-action-btn:hover .btn-prefix {
  color: #17211f;
}

.btn-arrow {
  font-weight: 900;
}

/* ==========================================================================
   Bottom Developer & Community Consoles
   ========================================================================== */
.hub-consoles-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  border-top: 1px solid var(--hub-line);
  padding-top: 56px;
}

@media (min-width: 860px) {
  .hub-consoles-section {
    grid-template-columns: repeat(2, 1fr);
  }
}

.hub-console-card {
  background: var(--hub-panel);
  border: 1px solid var(--hub-ink);
  box-shadow: 6px 6px 0px var(--hub-ink);
  display: flex;
  flex-direction: column;
}

:global(html.dark) .hub-console-card {
  border-color: var(--hub-line-dark);
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);
}

.console-community {
  border-top: 3px solid #38bdf8;
}

.console-github {
  border-top: 3px solid var(--hub-lime);
}

.console-window-bar {
  background: #1b241f;
  color: #8e9c94;
  border-bottom: 1px solid var(--hub-line);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--hub-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
}

:global(html:not(.dark)) .console-window-bar {
  background: #202925;
  color: #9aa9a1;
}

.console-label {
  font-weight: 800;
  color: #edf3ed;
}

.console-status {
  margin-left: auto;
  font-weight: 800;
  color: var(--hub-lime);
}

.console-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

.console-meta-kicker {
  font-family: var(--hub-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--hub-orange);
  margin-bottom: 8px;
}

.console-heading {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0 0 12px;
  color: var(--hub-ink);
}

.console-copy {
  font-size: 13px;
  line-height: 1.6;
  color: var(--hub-muted);
  margin: 0 0 24px;
  flex: 1 1 auto;
}

.console-actions-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.console-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  border: 1px solid var(--hub-ink);
  background: var(--hub-panel);
  color: var(--hub-ink);
  text-decoration: none;
  font-family: var(--hub-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  transition: all 160ms ease;
}

:global(html.dark) .console-btn {
  border-color: var(--hub-line-dark);
}

.console-btn:hover {
  background: var(--hub-lime);
  color: #17211f;
  border-color: var(--hub-lime);
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0px var(--hub-ink);
}

.console-btn-plus {
  font-size: 14px;
  font-weight: 900;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .hub-terminal-header {
    margin-bottom: 36px;
  }
  .hub-status-strip {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .hub-shortcut-keys {
    display: none;
  }
  .register-item-link {
    grid-template-columns: 36px 1fr auto;
    padding: 14px 16px;
  }
  .quadrant-body-header {
    padding: 20px 16px 14px;
  }
}
</style>
