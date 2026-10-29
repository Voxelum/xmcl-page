<template>
  <div class="nav-language-selector" ref="containerRef">
    <!-- Original Compact Trigger Button in Navbar (as user requested: "це міг не змінювати (поверни його") -->
    <button
      type="button"
      class="lang-trigger-btn"
      :class="{ 'is-open': isOpen }"
      :aria-expanded="isOpen"
      :title="triggerTooltip"
      aria-label="Change language / Вибір мови"
      @click="toggleDropdown"
    >
      <!-- Translation Icon (VitePress 文A) -->
      <span class="trigger-translate-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6" />
        </svg>
      </span>

      <!-- Dropdown Chevron -->
      <span class="trigger-chevron" :class="{ 'rotate-180': isOpen }">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </button>

    <!-- Cyberpunk Language Popover Dropdown -->
    <Transition name="lang-popover-anim">
      <div v-if="isOpen" class="lang-popover" @click.stop>
        <!-- Popover Header -->
        <div class="popover-header">
          <div class="header-status">
            <span class="status-pulse-dot" />
            <span class="header-title">{{ isUk ? 'СИСТЕМНА ЛОКАЛІЗАЦІЯ' : 'SYSTEM LOCALIZATION' }}</span>
          </div>
          <span class="header-count-badge">{{ languagesList.length }} LOCALES</span>
        </div>

        <!-- Quick Filter / Search Bar -->
        <div class="search-box-wrapper">
          <span class="search-lens-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            ref="searchInputRef"
            v-model="searchQuery"
            type="text"
            class="search-input"
            :placeholder="isUk ? 'Пошук мови (назва, код або регіон)...' : 'Filter languages (name, code, region)...'"
            @keydown.esc="closeDropdown"
          />
          <button
            v-if="searchQuery"
            type="button"
            class="search-clear-btn"
            title="Clear filter"
            @click="searchQuery = ''"
          >
            ✕
          </button>
        </div>

        <!-- Scrollable 2-Column Languages Grid with Vector SVG Flags -->
        <div class="languages-scroller custom-cyber-scroll">
          <div v-if="filteredLanguages.length > 0" class="languages-grid">
            <a
              v-for="item in filteredLanguages"
              :key="item.locale"
              :href="item.link"
              class="lang-card"
              :class="{ 'is-active': item.locale === activeLocale }"
              @click="onSelectLanguage(item)"
            >
              <!-- Flag (Coded SVG vector, NO emoji) -->
              <div
                class="card-flag-frame"
                :class="{ 'frame-active': item.locale === activeLocale }"
                v-html="item.flagSvg"
              />

              <!-- Titles -->
              <div class="card-titles">
                <span class="native-name">{{ item.nativeName }}</span>
                <span class="region-name">{{ item.secondaryName }}</span>
              </div>

              <!-- Active Status Dot / Checkmark -->
              <div class="card-status">
                <span v-if="item.locale === activeLocale" class="active-pill">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span v-else class="card-arrow">→</span>
              </div>
            </a>
          </div>

          <!-- Empty Search State -->
          <div v-else class="empty-search">
            <span class="empty-code">// NO_LOCALES_FOUND</span>
            <p class="empty-hint">{{ isUk ? 'Спробуйте інший пошуковий запит' : 'Try searching for another keyword or language code' }}</p>
          </div>
        </div>

        <!-- Popover Footer -->
        <div class="popover-footer">
          <span class="footer-note">
            <span class="neon-dot-small" />
            {{ isUk ? 'Зберігає поточну сторінку та розділ' : 'Preserves current page and guide chapter' }}
          </span>
          <a
            href="https://github.com/voxelum/xmcl-page"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-contrib-link"
          >
            {{ isUk ? 'Допомогти з перекладом ↗' : 'Contribute translations ↗' }}
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useData } from 'vitepress'
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs'

interface LocaleEntry {
  locale: string
  code: string
  nativeName: string
  secondaryName: string
  region?: string
  flagSvg: string
}

// 100% Coded SVG Flags (NO EMOJIS, pure vector graphics)
const ALL_LOCALES: LocaleEntry[] = [
  {
    locale: 'uk',
    code: 'UK',
    nativeName: 'Українська',
    secondaryName: 'Ukrainian',
    region: 'Україна',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="8" fill="#0057B7"/><rect y="8" width="24" height="8" fill="#FFDD00"/></svg>`
  },
  {
    locale: 'en',
    code: 'EN',
    nativeName: 'English',
    secondaryName: 'English',
    region: 'International',
    flagSvg: `<svg viewBox="0 0 60 40" width="24" height="16"><rect width="60" height="40" fill="#012169"/><path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFF" stroke-width="8"/><path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" stroke-width="4.5"/><path d="M30 0 v40 M0 20 h60" stroke="#FFF" stroke-width="12"/><path d="M30 0 v40 M0 20 h60" stroke="#C8102E" stroke-width="7"/></svg>`
  },
  {
    locale: 'lol',
    code: 'LOL',
    nativeName: 'LOLCAT',
    secondaryName: 'Kingdom of Cats',
    region: 'Minceraft',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#1b2921"/><polygon points="6,6 8,2.5 10,6" fill="#c9f85a"/><polygon points="14,6 16,2.5 18,6" fill="#c9f85a"/><rect x="6.5" y="5.5" width="11" height="7.5" rx="1" fill="#c9f85a"/><rect x="8.5" y="7.5" width="2" height="2" rx="0.5" fill="#0d1410"/><rect x="13.5" y="7.5" width="2" height="2" rx="0.5" fill="#0d1410"/><polygon points="12,10.5 11,9.5 13,9.5" fill="#e45e42"/></svg>`
  },
  {
    locale: 'zh',
    code: 'ZH',
    nativeName: '简体中文',
    secondaryName: 'Chinese (Simplified)',
    region: '中国大陆',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#DE2910"/><polygon points="5,2.5 5.8,5.1 3.5,3.5 6.5,3.5 4.2,5.1" fill="#FFDE00"/><circle cx="8.5" cy="2.5" r="0.7" fill="#FFDE00"/><circle cx="10" cy="4" r="0.7" fill="#FFDE00"/><circle cx="10" cy="6.2" r="0.7" fill="#FFDE00"/><circle cx="8.5" cy="7.7" r="0.7" fill="#FFDE00"/></svg>`
  },
  {
    locale: 'zh-TW',
    code: 'TW',
    nativeName: '繁體中文',
    secondaryName: 'Chinese (Traditional)',
    region: '台灣 / 香港',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#FE0000"/><rect width="12" height="8" fill="#000095"/><circle cx="6" cy="4" r="2.4" fill="#FFF"/><circle cx="6" cy="4" r="1.8" fill="#000095"/><circle cx="6" cy="4" r="1.2" fill="#FFF"/></svg>`
  },
  {
    locale: 'es',
    code: 'ES',
    nativeName: 'Español',
    secondaryName: 'Spanish',
    region: 'España / LatAm',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="4" fill="#AA151B"/><rect y="4" width="24" height="8" fill="#F1BF00"/><rect y="12" width="24" height="4" fill="#AA151B"/><rect x="5.5" y="6" width="2.5" height="4" rx="0.5" fill="#AA151B"/></svg>`
  },
  {
    locale: 'hi',
    code: 'HI',
    nativeName: 'हिन्दी',
    secondaryName: 'Hindi',
    region: 'भारत (India)',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="5.33" fill="#FF9933"/><rect y="5.33" width="24" height="5.33" fill="#FFFFFF"/><rect y="10.66" width="24" height="5.34" fill="#138808"/><circle cx="12" cy="8" r="2.1" fill="none" stroke="#000080" stroke-width="0.7"/><circle cx="12" cy="8" r="0.7" fill="#000080"/></svg>`
  },
  {
    locale: 'bn',
    code: 'BN',
    nativeName: 'বাংলা',
    secondaryName: 'Bengali',
    region: 'বাংলাদেশ / भारत',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#006A4E"/><circle cx="10.5" cy="8" r="4.4" fill="#F42A41"/></svg>`
  },
  {
    locale: 'jp',
    code: 'JA',
    nativeName: '日本語',
    secondaryName: 'Japanese',
    region: '日本',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#FFFFFF"/><circle cx="12" cy="8" r="4.6" fill="#BC002D"/></svg>`
  },
  {
    locale: 'jv',
    code: 'JV',
    nativeName: 'Basa Jawa',
    secondaryName: 'Javanese',
    region: 'Indonesia (Jawa)',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="8" fill="#FF0000"/><rect y="8" width="24" height="8" fill="#FFFFFF"/></svg>`
  },
  {
    locale: 'ko',
    code: 'KO',
    nativeName: '한국어',
    secondaryName: 'Korean',
    region: '대한민국',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#FFFFFF"/><circle cx="12" cy="8" r="3.8" fill="#CD2E3A"/><path d="M 8.2 8 A 3.8 3.8 0 0 0 15.8 8 A 1.9 1.9 0 0 0 12 8 A 1.9 1.9 0 0 1 8.2 8" fill="#0047A0"/><line x1="4.5" y1="3" x2="6.8" y2="4.6" stroke="#000" stroke-width="0.8"/><line x1="17.2" y1="11.4" x2="19.5" y2="13" stroke="#000" stroke-width="0.8"/><line x1="17.2" y1="3" x2="19.5" y2="4.6" stroke="#000" stroke-width="0.8"/><line x1="4.5" y1="11.4" x2="6.8" y2="13" stroke="#000" stroke-width="0.8"/></svg>`
  },
  {
    locale: 'vi',
    code: 'VI',
    nativeName: 'Tiếng Việt',
    secondaryName: 'Vietnamese',
    region: 'Việt Nam',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#DA251D"/><polygon points="12,3.5 13.5,8.2 18.2,8.2 14.4,11 15.8,15.2 12,12.5 8.2,15.2 9.6,11 5.8,8.2 10.5,8.2" fill="#FFFF00" transform="translate(2.4, 1.5) scale(0.8)"/></svg>`
  },
  {
    locale: 'it',
    code: 'IT',
    nativeName: 'Italiano',
    secondaryName: 'Italian',
    region: 'Italia',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="8" height="16" fill="#009246"/><rect x="8" width="8" height="16" fill="#FFFFFF"/><rect x="16" width="8" height="16" fill="#CE2B37"/></svg>`
  },
  {
    locale: 'tr',
    code: 'TR',
    nativeName: 'Türkçe',
    secondaryName: 'Turkish',
    region: 'Türkiye',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#E30A17"/><circle cx="9.8" cy="8" r="4.2" fill="#FFFFFF"/><circle cx="11.1" cy="8" r="3.3" fill="#E30A17"/><polygon points="14.8,6.8 15.3,8 16.5,8 15.5,8.7 15.9,9.8 14.8,9.2 13.8,9.8 14.2,8.7 13.2,8 14.4,8" fill="#FFFFFF"/></svg>`
  },
  {
    locale: 'pt',
    code: 'PT',
    nativeName: 'Português',
    secondaryName: 'Portuguese (Brasil)',
    region: 'Brasil',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#009B3A"/><polygon points="12,2 22,8 12,14 2,8" fill="#FEDF01"/><circle cx="12" cy="8" r="3.4" fill="#002776"/><path d="M 9.5 8.7 Q 12 7.2 14.5 9" stroke="#FFFFFF" stroke-width="0.7" fill="none"/></svg>`
  },
  {
    locale: 'de',
    code: 'DE',
    nativeName: 'Deutsch',
    secondaryName: 'German',
    region: 'Deutschland',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="5.33" fill="#000000"/><rect y="5.33" width="24" height="5.33" fill="#DD0000"/><rect y="10.66" width="24" height="5.34" fill="#FFCE00"/></svg>`
  },
  {
    locale: 'fr',
    code: 'FR',
    nativeName: 'Français',
    secondaryName: 'French',
    region: 'France',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="8" height="16" fill="#002395"/><rect x="8" width="8" height="16" fill="#FFFFFF"/><rect x="16" width="8" height="16" fill="#ED2939"/></svg>`
  },
  {
    locale: 'pl',
    code: 'PL',
    nativeName: 'Polski',
    secondaryName: 'Polish',
    region: 'Polska',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="8" fill="#FFFFFF"/><rect y="8" width="24" height="8" fill="#DC143C"/></svg>`
  },
  {
    locale: 'ru',
    code: 'RU',
    nativeName: 'Русский',
    secondaryName: 'Russian',
    region: 'СНГ',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="5.33" width="24" height="5.33" fill="#0039A6"/><rect y="10.66" width="24" height="5.34" fill="#D52B1E"/></svg>`
  },
  {
    locale: 'kk',
    code: 'KK',
    nativeName: 'Қазақша',
    secondaryName: 'Kazakh',
    region: 'Қазақстан',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="16" fill="#00AFCA"/><circle cx="12" cy="7.2" r="2.6" fill="#FEC50C"/><path d="M 8.5 11 Q 12 9.4 15.5 11" stroke="#FEC50C" stroke-width="1.2" fill="none"/><rect x="1" y="2" width="1.5" height="12" fill="#FEC50C"/></svg>`
  },
  {
    locale: 'be',
    code: 'BE',
    nativeName: 'Беларуская',
    secondaryName: 'Belarusian',
    region: 'Беларусь',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="10.5" fill="#C8313E"/><rect y="10.5" width="24" height="5.5" fill="#4CA852"/><rect width="4.5" height="16" fill="#FFFFFF"/><path d="M 0 0 L 4.5 4.5 L 0 9 L 4.5 13.5 L 0 16" stroke="#C8313E" stroke-width="0.9" fill="none"/></svg>`
  },
  {
    locale: 'ar',
    code: 'AR',
    nativeName: 'العربية',
    secondaryName: 'Arabic (RTL)',
    region: 'الشرق الأوسط',
    flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="5.33" fill="#000000"/><rect y="5.33" width="24" height="5.33" fill="#FFFFFF"/><rect y="10.66" width="24" height="5.34" fill="#007A3D"/><polygon points="0,0 7,8 0,16" fill="#CE1126"/></svg>`
  },
]

const { page, lang } = useData()
const { localeLinks } = useLangs({ correspondingLink: true })

const isOpen = ref(false)
const searchQuery = ref('')
const containerRef = ref<HTMLElement | null>(null)
const searchInputRef = ref<HTMLInputElement | null>(null)

// Current active locale
const activeLocale = computed(() => {
  const path = page.value.relativePath || ''
  const firstSegment = path.split('/')[0]
  const matched = ALL_LOCALES.find(l => l.locale === firstSegment)
  if (matched) return matched.locale

  const langVal = (lang.value || '').toLowerCase()
  const matchedLang = ALL_LOCALES.find(l => l.locale === langVal)
  if (matchedLang) return matchedLang.locale

  return 'en'
})

const isUk = computed(() => activeLocale.value === 'uk')

const currentMeta = computed(() => {
  return ALL_LOCALES.find(l => l.locale === activeLocale.value) || ALL_LOCALES[1]
})

const triggerTooltip = computed(() => {
  return isUk.value
    ? `Поточна мова: ${currentMeta.value.nativeName} (Змінити мову)`
    : `Current language: ${currentMeta.value.nativeName} (Change language)`
})

// Compute target link for a given locale, preserving page path
function getTargetLink(targetLocale: string): string {
  const linkObj = localeLinks.value.find(l => {
    if (targetLocale === 'en' && (l.link === '/' || l.link.startsWith('/en/'))) return true
    return l.link.startsWith(`/${targetLocale}/`)
  })

  if (linkObj && linkObj.link) {
    return linkObj.link
  }

  const relPath = page.value.relativePath || ''
  const segments = relPath.split('/')
  const restOfPath = ALL_LOCALES.some(l => l.locale === segments[0])
    ? segments.slice(1).join('/')
    : relPath

  const cleanPath = restOfPath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')

  if (!cleanPath) {
    return `/${targetLocale}/`
  }
  return `/${targetLocale}/${cleanPath}`
}

// Full languages list with resolved links
const languagesList = computed(() => {
  return ALL_LOCALES.map(item => {
    let link = ''
    if (item.locale === activeLocale.value) {
      link = '#'
    } else {
      link = getTargetLink(item.locale)
    }
    return {
      ...item,
      link,
    }
  })
})

// Filtered languages based on search query
const filteredLanguages = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return languagesList.value

  return languagesList.value.filter(item => {
    return (
      item.code.toLowerCase().includes(q) ||
      item.locale.toLowerCase().includes(q) ||
      item.nativeName.toLowerCase().includes(q) ||
      item.secondaryName.toLowerCase().includes(q) ||
      (item.region && item.region.toLowerCase().includes(q))
    )
  })
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      searchInputRef.value?.focus()
    })
  } else {
    searchQuery.value = ''
  }
}

function closeDropdown() {
  isOpen.value = false
  searchQuery.value = ''
}

function onSelectLanguage(item: LocaleEntry & { link: string }) {
  if (item.locale === activeLocale.value) {
    closeDropdown()
    return
  }
  // Store language cookie
  if (typeof document !== 'undefined') {
    document.cookie = `nf_lang=${item.locale}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
  closeDropdown()
}

// Click outside handling
function handleClickOutside(event: MouseEvent) {
  if (!isOpen.value) return
  if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
    closeDropdown()
  }
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isOpen.value) {
    closeDropdown()
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.nav-language-selector {
  position: relative;
  display: inline-flex;
  align-items: center;
}

/* Original Compact Trigger Button in Navbar (as user requested: "це міг не змінювати (поверни його") */
.lang-trigger-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 36px;
  padding: 0 10px;
  border-radius: 8px;
  background: var(--vp-c-bg, #111714);
  border: 1px solid var(--vp-c-divider, #233128);
  color: var(--vp-c-text-1, #e0eae2);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

.lang-trigger-btn:hover {
  background: rgba(22, 32, 26, 0.85);
  border-color: rgba(201, 248, 90, 0.5);
  color: #fff;
  box-shadow: 0 0 10px rgba(201, 248, 90, 0.16);
}

.lang-trigger-btn.is-open {
  background: rgba(20, 30, 24, 0.95);
  border-color: #c9f85a;
  box-shadow: 0 0 14px rgba(201, 248, 90, 0.24);
}

.trigger-translate-icon {
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1, #d6e2d9);
  transition: color 0.2s ease;
}

.lang-trigger-btn:hover .trigger-translate-icon,
.lang-trigger-btn.is-open .trigger-translate-icon {
  color: #c9f85a;
}

.trigger-chevron {
  display: flex;
  align-items: center;
  color: var(--vp-c-text-2, #8b9d92);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease;
}

.trigger-chevron.rotate-180 {
  transform: rotate(180deg);
  color: #c9f85a;
}

/* Dropdown Popover Window */
.lang-popover {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 480px;
  max-width: 94vw;
  background: #0d120f;
  border: 1px solid #233527;
  border-top: 2px solid #c9f85a;
  border-radius: 10px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.88), 0 0 1px 1px rgba(201, 248, 90, 0.18);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform-origin: top right;
}

/* Popover Header */
.popover-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid #1a271e;
  background: rgba(18, 25, 21, 0.85);
}

.header-status {
  display: flex;
  align-items: center;
  gap: 7px;
}

.status-pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #c9f85a;
  box-shadow: 0 0 8px #c9f85a;
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.85); }
}

.header-title {
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #c9f85a;
}

.header-count-badge {
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #a4b8ab;
}

/* Search Filter Box */
.search-box-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid #1a271e;
  background: #111814;
}

.search-lens-icon {
  position: absolute;
  left: 24px;
  color: #728779;
  pointer-events: none;
}

.search-input {
  width: 100%;
  height: 32px;
  padding: 0 30px 0 30px;
  border-radius: 5px;
  background: #090d0b;
  border: 1px solid #1f2e23;
  color: #e5f0e8;
  font-size: 12.5px;
  outline: none;
  transition: all 0.2s ease;
}

.search-input:focus {
  border-color: #c9f85a;
  box-shadow: 0 0 10px rgba(201, 248, 90, 0.15);
  background: #0c120e;
}

.search-clear-btn {
  position: absolute;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #9cb1a3;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.search-clear-btn:hover {
  background: rgba(201, 248, 90, 0.25);
  color: #c9f85a;
}

/* Languages Grid Scroller */
.languages-scroller {
  max-height: 360px;
  overflow-y: auto;
  padding: 10px;
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}

@media (max-width: 520px) {
  .languages-grid {
    grid-template-columns: 1fr;
  }
}

/* Language Item Card */
.lang-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  background: #121a15;
  border: 1px solid #1c2a20;
  text-decoration: none;
  color: #d1ded5;
  transition: all 0.16s ease;
  position: relative;
}

.lang-card:hover {
  background: #17241c;
  border-color: rgba(201, 248, 90, 0.45);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  color: #fff;
}

.lang-card.is-active {
  background: rgba(201, 248, 90, 0.1);
  border-color: #c9f85a;
  box-shadow: 0 0 10px rgba(201, 248, 90, 0.12);
}

/* Flag Frame (Vector SVG, crisp at any DPR, NO emoji) */
.card-flag-frame {
  width: 24px;
  height: 16px;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  background: #0e1411;
  transition: all 0.16s ease;
}

.lang-card:hover .card-flag-frame {
  border-color: rgba(201, 248, 90, 0.6);
  box-shadow: 0 0 8px rgba(201, 248, 90, 0.25);
  transform: scale(1.06);
}

.card-flag-frame.frame-active {
  border-color: #c9f85a;
  box-shadow: 0 0 8px rgba(201, 248, 90, 0.4);
}

.card-flag-frame :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}

/* Card Titles */
.card-titles {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex-grow: 1;
}

.native-name {
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #e5eee8;
}

.lang-card.is-active .native-name {
  color: #c9f85a;
}

.region-name {
  font-size: 10.5px;
  color: #758b7c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-status {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.active-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #c9f85a;
  color: #0d120f;
}

.card-arrow {
  font-size: 12px;
  color: #3b5042;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.15s ease;
}

.lang-card:hover .card-arrow {
  opacity: 1;
  color: #c9f85a;
  transform: translateX(0);
}

/* Empty State */
.empty-search {
  padding: 30px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.empty-code {
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 12px;
  font-weight: 700;
  color: #e06c75;
}

.empty-hint {
  font-size: 11.5px;
  color: #799081;
  margin: 0;
}

/* Popover Footer */
.popover-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 14px;
  border-top: 1px solid #1a271e;
  background: #090e0b;
  font-size: 10.5px;
}

.footer-note {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #6b8273;
}

.neon-dot-small {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #c9f85a;
}

.footer-contrib-link {
  color: #a1b8a9;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s ease;
}

.footer-contrib-link:hover {
  color: #c9f85a;
  text-decoration: underline;
}

/* Transition Animation */
.lang-popover-anim-enter-active,
.lang-popover-anim-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.lang-popover-anim-enter-from,
.lang-popover-anim-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
</style>
