<script lang="ts" setup>
import localSearchIndex from '@localSearchIndex'
import {
  computedAsync,
  watchDebounced,
  onKeyStroke,
  useEventListener,
  useLocalStorage,
  useScrollLock,
  useSessionStorage
} from '@vueuse/core'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import Mark from 'mark.js/src/vanilla.js'
import MiniSearch, { type SearchResult } from 'minisearch'
import { dataSymbol, inBrowser, useRouter } from 'vitepress'
import {
  computed,
  createApp,
  markRaw,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  watch,
  watchEffect,
  type Ref
} from 'vue'
import type { LocalSearchTranslations } from 'vitepress/types/local-search'
import { pathToFile } from 'vitepress/dist/client/app/utils.js'
import { escapeRegExp } from 'vitepress/dist/client/shared.js'
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import { LRUCache } from 'vitepress/dist/client/theme-default/support/lru.js'
import { createSearchTranslate } from 'vitepress/dist/client/theme-default/support/translation.js'
import { isSearchModalOpen, closeSearchModal } from '../composables/useSearchModal'

const emit = defineEmits<{
  (e: 'close'): void
}>()

function handleClose() {
  closeSearchModal()
  emit('close')
}

const el = shallowRef<HTMLElement>()
const resultsEl = shallowRef<HTMLElement>()

/* Search */

const searchIndexData = shallowRef(localSearchIndex)

// HMR
if (import.meta.hot) {
  import.meta.hot.accept('@localSearchIndex', (m) => {
    if (m) {
      searchIndexData.value = m.default
      loadedIndexes.clear()
    }
  })
}

interface Result {
  title: string
  titles: string[]
  text?: string
}

type ExtendedSearchResult = SearchResult & Result & {
  locale?: string
}

const vitePressData = useData()
const { activate } = useFocusTrap(el, {
  immediate: true,
  allowOutsideClick: true,
  clickOutsideDeactivates: true,
  escapeDeactivates: true
})
const { localeIndex, theme } = vitePressData
const isSearchIndexLoading = ref(false)
const isSearching = ref(false)
const showSearchSpinner = computed(() => {
  return isSearchIndexLoading.value || isSearching.value
})

const loadedIndexes = new Map<string, MiniSearch<Result>>()

async function loadIndexForLocale(loc: string): Promise<MiniSearch<Result> | null> {
  if (loadedIndexes.has(loc)) {
    return loadedIndexes.get(loc)!
  }
  const loader = searchIndexData.value?.[loc]
  if (!loader) return null
  try {
    const rawData = (await loader())?.default
    if (!rawData) return null
    const ms = MiniSearch.loadJSON<Result>(rawData, {
      fields: ['title', 'titles', 'text'],
      storeFields: ['title', 'titles'],
      searchOptions: {
        fuzzy: 0.2,
        prefix: true,
        boost: { title: 4, text: 2, titles: 1 },
        ...(theme.value.search?.provider === 'local' &&
          theme.value.search.options?.miniSearch?.searchOptions)
      },
      ...(theme.value.search?.provider === 'local' &&
        theme.value.search.options?.miniSearch?.options)
    })
    const marked = markRaw(ms)
    loadedIndexes.set(loc, marked)
    return marked
  } catch (e) {
    console.error(`Failed to load search index for ${loc}:`, e)
    return null
  }
}

// Preload current locale index and Ukrainian index
watch(
  localeIndex,
  async (newLocale) => {
    isSearchIndexLoading.value = true
    try {
      await Promise.all([
        loadIndexForLocale(newLocale || 'root'),
        loadIndexForLocale('uk'),
        loadIndexForLocale('en')
      ])
    } finally {
      isSearchIndexLoading.value = false
    }
  },
  { immediate: true }
)

const disableQueryPersistence = computed(() => {
  return (
    theme.value.search?.provider === 'local' &&
    theme.value.search.options?.disableQueryPersistence === true
  )
})

const filterText = disableQueryPersistence.value
  ? ref('')
  : useSessionStorage('vitepress:local-search-filter', '')

const showDetailedList = useLocalStorage(
  'vitepress:local-search-detailed-list',
  theme.value.search?.provider === 'local' &&
    theme.value.search.options?.detailedView === true
)

const disableDetailedView = computed(() => {
  return (
    theme.value.search?.provider === 'local' &&
    (theme.value.search.options?.disableDetailedView === true ||
      theme.value.search.options?.detailedView === false)
  )
})

watchEffect(() => {
  if (disableDetailedView.value) {
    showDetailedList.value = false
  }
})

const results: Ref<ExtendedSearchResult[]> = shallowRef([])
const enableNoResults = ref(false)

watch(filterText, () => {
  enableNoResults.value = false
})

const mark = computedAsync(async () => {
  if (!resultsEl.value) return null
  return markRaw(new Mark(resultsEl.value))
}, null)

const cache = new LRUCache<string, Map<string, string>>(32)

const localeLabels: Record<string, string> = {
  uk: 'Українська',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  zh: '简体中文',
  'zh-TW': '繁體中文',
  ru: 'Русский',
  pl: 'Polski',
  pt: 'Português',
  es: 'Español',
  it: 'Italiano',
  jp: '日本語',
  ko: '한국어',
  kk: 'Қазақша',
  be: 'Беларуская',
  ar: 'العربية'
}

function getResultLocale(id: string): string {
  const clean = id.replace(/^\/+/, '')
  const first = clean.split('/')[0]
  return first in localeLabels ? first : 'en'
}

watchDebounced(
  () => [filterText.value, showDetailedList.value] as const,
  async ([filterTextValue, showDetailedListValue], old, onCleanup) => {
    let canceled = false
    onCleanup(() => {
      canceled = true
      isSearching.value = false
    })

    const query = (filterTextValue || '').trim()
    if (!query) {
      results.value = []
      return
    }

    isSearching.value = true

    const isCyrillic = /[\u0400-\u04FF]/.test(query)
    const hasUkrainianSpecial = /[іїєґІЇЄҐ]/.test(query)
    const currentLoc = localeIndex.value === 'root' ? 'en' : (localeIndex.value || 'en')
    const availableLocales = Object.keys(searchIndexData.value || {}).filter(l => l !== 'root')

    // Determine locale search order
    let searchLocales: string[]
    if (hasUkrainianSpecial) {
      // Strongly Ukrainian query
      searchLocales = ['uk', currentLoc, ...availableLocales.filter(l => l !== 'uk' && l !== currentLoc)]
    } else if (isCyrillic) {
      // Cyrillic query: prioritize Ukrainian, then current locale, then others
      searchLocales = ['uk', currentLoc, 'ru', 'be', ...availableLocales.filter(l => !['uk', currentLoc, 'ru', 'be'].includes(l))]
    } else {
      // Latin / other language query: prioritize current locale, then uk and en, then all others
      searchLocales = [currentLoc, 'uk', 'en', ...availableLocales.filter(l => ![currentLoc, 'uk', 'en'].includes(l))]
    }

    // Load necessary indices
    const loadedList: { loc: string; index: MiniSearch<Result> }[] = []
    for (const loc of searchLocales) {
      const idx = await loadIndexForLocale(loc)
      if (idx) {
        loadedList.push({ loc, index: idx })
      }
      // If we already have primary indices, continue
      if (loadedList.length >= 4 && !isCyrillic) break
    }

    if (canceled) return

    const combinedMap = new Map<string, ExtendedSearchResult>()

    for (const { loc, index } of loadedList) {
      try {
        const matches = index.search(query).slice(0, 16) as (SearchResult & Result)[]
        for (const match of matches) {
          const matchLocale = getResultLocale(match.id)
          let score = match.score

          // Boost scoring based on language intent
          if (hasUkrainianSpecial && matchLocale === 'uk') {
            score *= 5
          } else if (isCyrillic && matchLocale === 'uk') {
            score *= 3
          } else if (matchLocale === currentLoc) {
            score *= 1.5
          }

          const existing = combinedMap.get(match.id)
          if (!existing || existing.score < score) {
            combinedMap.set(match.id, {
              ...match,
              score,
              locale: matchLocale
            })
          }
        }
      } catch (err) {
        // MiniSearch search parsing error fallback
      }
    }

    let sortedResults = Array.from(combinedMap.values()).sort((a, b) => {
      // Ukrainian priority when query is Cyrillic
      if (isCyrillic) {
        const aIsUk = a.locale === 'uk'
        const bIsUk = b.locale === 'uk'
        if (aIsUk && !bIsUk) return -1
        if (!aIsUk && bIsUk) return 1
      }
      return b.score - a.score
    }).slice(0, 16)

    results.value = sortedResults
    enableNoResults.value = true

    // Highlighting & Excerpts
    const mods = showDetailedListValue
      ? await Promise.all(results.value.map((r) => fetchExcerpt(r.id)))
      : []

    if (canceled) return

    for (const { id, mod } of mods) {
      const mapId = id.includes('#') ? id.slice(0, id.indexOf('#')) : id
      let map = cache.get(mapId)
      if (map) continue
      map = new Map()
      cache.set(mapId, map)
      const comp = mod.default ?? mod
      if (comp?.render || comp?.setup) {
        const app = createApp(comp)
        app.config.warnHandler = () => {}
        app.provide(dataSymbol, vitePressData)
        Object.defineProperties(app.config.globalProperties, {
          $frontmatter: {
            get() {
              return vitePressData.frontmatter.value
            }
          },
          $params: {
            get() {
              return vitePressData.page.value.params
            }
          }
        })
        const div = document.createElement('div')
        app.mount(div)
        const headings = div.querySelectorAll('h1, h2, h3, h4, h5, h6')
        headings.forEach((el) => {
          const href = el.querySelector('a')?.getAttribute('href')
          const anchor = href?.startsWith('#') && href.slice(1)
          if (!anchor) return
          let html = ''
          while ((el = el.nextElementSibling!) && !/^h[1-6]$/i.test(el.tagName))
            html += el.outerHTML
          map!.set(anchor, html)
        })
        app.unmount()
      }
      if (canceled) return
    }

    const terms = new Set<string>()

    results.value = results.value.map((r) => {
      const [id, anchor] = r.id.split('#')
      const map = cache.get(id)
      const text = map?.get(anchor) ?? ''
      for (const term in r.match) {
        terms.add(term)
      }
      return { ...r, text }
    })

    await nextTick()
    if (canceled) return

    await new Promise((r) => {
      mark.value?.unmark({
        done: () => {
          mark.value?.markRegExp(formMarkRegex(terms), { done: r })
        }
      })
    })

    const excerpts = el.value?.querySelectorAll('.result .excerpt') ?? []
    for (const excerpt of excerpts) {
      excerpt
        .querySelector('mark[data-markjs="true"]')
        ?.scrollIntoView({ block: 'center' })
    }
    resultsEl.value?.firstElementChild?.scrollIntoView({ block: 'start' })
    isSearching.value = false
  },
  { debounce: 150, immediate: true }
)

function formMarkRegex(terms: Set<string>): RegExp {
  const parts = Array.from(terms).map(escapeRegExp)
  return new RegExp(`\\b(${parts.join('|')})`, 'gi')
}

async function fetchExcerpt(id: string) {
  const pagePath = id.includes('#') ? id.slice(0, id.indexOf('#')) : id
  const file = pathToFile(pagePath)
  try {
    if (!file) throw new Error(`Cannot find file for id: ${id}`)
    return { id, mod: await import(/*@vite-ignore*/ file) }
  } catch (e) {
    return { id, mod: {} }
  }
}

/* Search input focus */

const searchInput = ref<HTMLInputElement>()
const disableReset = computed(() => {
  return filterText.value?.length <= 0
})

function focusSearchInput(select = true) {
  searchInput.value?.focus()
  select && searchInput.value?.select()
}

onMounted(() => {
  focusSearchInput()
})

function onSearchBarClick(event: PointerEvent) {
  if (event.pointerType === 'mouse') {
    focusSearchInput()
  }
}

function resetSearch() {
  filterText.value = ''
  nextTick().then(() => focusSearchInput(false))
}

/* Search keyboard selection */

const selectedIndex = ref(-1)
const disableMouseOver = ref(true)

watch(results, (r) => {
  selectedIndex.value = r.length ? 0 : -1
  scrollToSelectedResult()
})

function scrollToSelectedResult() {
  nextTick(() => {
    const selectedEl = document.querySelector('.result.selected')
    selectedEl?.scrollIntoView({ block: 'nearest' })
  })
}

function onMouseMove() {
  disableMouseOver.value = false
}

function selectPreviousResult(event: KeyboardEvent) {
  event.preventDefault()
  selectedIndex.value--
  if (selectedIndex.value < 0) {
    selectedIndex.value = results.value.length - 1
  }
  disableMouseOver.value = true
  scrollToSelectedResult()
}

function selectNextResult(event: KeyboardEvent) {
  event.preventDefault()
  selectedIndex.value++
  if (selectedIndex.value >= results.value.length) {
    selectedIndex.value = 0
  }
  disableMouseOver.value = true
  scrollToSelectedResult()
}

function isMacCtrlShortcut(event: KeyboardEvent) {
  return (
    event.ctrlKey &&
    !event.altKey &&
    !event.metaKey &&
    !event.shiftKey &&
    document.documentElement.classList.contains('mac')
  )
}

onKeyStroke('ArrowUp', selectPreviousResult)
onKeyStroke('ArrowDown', selectNextResult)

onKeyStroke(['p', 'P'], (event) => {
  if (isMacCtrlShortcut(event)) {
    selectPreviousResult(event)
  }
})

onKeyStroke(['n', 'N'], (event) => {
  if (isMacCtrlShortcut(event)) {
    selectNextResult(event)
  }
})

const router = useRouter()

onKeyStroke('Enter', (e) => {
  if (e.isComposing) return

  if (e.target instanceof HTMLButtonElement && e.target.type !== 'submit')
    return

  const selectedPackage = results.value[selectedIndex.value]
  if (e.target instanceof HTMLInputElement && !selectedPackage) {
    e.preventDefault()
    return
  }

  if (selectedPackage) {
    router.go(selectedPackage.id)
    handleClose()
  }
})

onKeyStroke('Escape', () => {
  handleClose()
})

/* Translations */

const defaultTranslations: LocalSearchTranslations = {
  button: {
    buttonText: 'Search'
  },
  modal: {
    displayDetails: 'Display detailed list',
    resetButtonTitle: 'Reset search',
    backButtonTitle: 'Close search',
    noResultsText: 'No results for',
    footer: {
      selectText: 'to select',
      selectKeyAriaLabel: 'enter',
      navigateText: 'to navigate',
      navigateUpKeyAriaLabel: 'up arrow',
      navigateDownKeyAriaLabel: 'down arrow',
      closeText: 'to close',
      closeKeyAriaLabel: 'escape'
    }
  }
}

const translate = createSearchTranslate(defaultTranslations)

onMounted(() => {
  window.history.pushState(null, '', null)
})

useEventListener('popstate', (event) => {
  event.preventDefault()
  handleClose()
})

useScrollLock(inBrowser ? document.body : null, true)
</script>

<template>
  <Teleport to="body">
    <div
      ref="el"
      role="button"
      :aria-owns="results?.length ? 'localsearch-list' : undefined"
      aria-expanded="true"
      aria-haspopup="listbox"
      aria-labelledby="localsearch-label"
      class="VPLocalSearchBox"
    >
      <div class="backdrop" @click="handleClose" />

      <div class="shell">
        <form
          class="search-bar"
          @pointerup="onSearchBarClick($event)"
          @submit.prevent=""
        >
          <label
            :title="translate('button.buttonText')"
            id="localsearch-label"
            for="localsearch-input"
          >
            <span aria-hidden="true" class="vpi-search search-icon local-search-icon" />
          </label>
          <div class="search-actions before">
            <button
              class="back-button"
              :title="translate('modal.backButtonTitle')"
              @click="handleClose"
            >
              <span class="vpi-arrow-left local-search-icon" />
            </button>
          </div>
          <input
            ref="searchInput"
            v-model="filterText"
            :aria-activedescendant="selectedIndex > -1 ? ('localsearch-item-' + selectedIndex) : undefined"
            aria-autocomplete="both"
            :aria-controls="results?.length ? 'localsearch-list' : undefined"
            aria-labelledby="localsearch-label"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            class="search-input"
            id="localsearch-input"
            enterkeyhint="go"
            maxlength="64"
            :placeholder="translate('button.buttonText')"
            spellcheck="false"
            type="search"
          />
          <div class="search-actions">
            <span
              class="search-loading"
              :class="{ active: showSearchSpinner }"
              :role="showSearchSpinner ? 'status' : undefined"
              aria-live="polite"
              :aria-label="showSearchSpinner ? 'Loading search results' : undefined"
            />

            <button
              v-if="!disableDetailedView"
              class="toggle-layout-button"
              type="button"
              :class="{ 'detailed-list': showDetailedList }"
              :title="translate('modal.displayDetails')"
              @click="
                selectedIndex > -1 && (showDetailedList = !showDetailedList)
              "
            >
              <span class="vpi-layout-list local-search-icon" />
            </button>

            <button
              class="clear-button"
              type="reset"
              :disabled="disableReset"
              :title="translate('modal.resetButtonTitle')"
              @click="resetSearch"
            >
              <span class="vpi-delete local-search-icon" />
            </button>
          </div>
        </form>

        <ul
          ref="resultsEl"
          :id="results?.length ? 'localsearch-list' : undefined"
          :role="results?.length ? 'listbox' : undefined"
          :aria-busy="showSearchSpinner ? 'true' : 'false'"
          :aria-labelledby="results?.length ? 'localsearch-label' : undefined"
          class="results"
          @mousemove="onMouseMove"
        >
          <li
            v-for="(p, index) in results"
            :key="p.id"
            :id="'localsearch-item-' + index"
            :aria-selected="selectedIndex === index ? 'true' : 'false'"
            role="option"
          >
            <a
              :href="p.id"
              class="result"
              :class="{
                selected: selectedIndex === index
              }"
              :aria-label="[...p.titles, p.title].join(' > ')"
              @mouseenter="!disableMouseOver && (selectedIndex = index)"
              @focusin="selectedIndex = index"
              @click="handleClose"
              :data-index="index"
            >
              <div>
                <div class="titles">
                  <span class="title-icon">#</span>
                  <span
                    v-for="(t, tIndex) in p.titles"
                    :key="tIndex"
                    class="title"
                  >
                    <span class="text" v-html="t" />
                    <span class="vpi-chevron-right local-search-icon" />
                  </span>
                  <span class="title main">
                    <span class="text" v-html="p.title" />
                  </span>
                  <span
                    v-if="p.locale && p.locale !== (localeIndex === 'root' ? 'en' : localeIndex)"
                    class="locale-pill"
                    :class="{ 'locale-pill-uk': p.locale === 'uk' }"
                  >
                    {{ localeLabels[p.locale] || p.locale }}
                  </span>
                </div>

                <div v-if="showDetailedList" class="excerpt-wrapper">
                  <div v-if="p.text" class="excerpt" inert>
                    <div class="vp-doc" v-html="p.text" />
                  </div>
                  <div class="excerpt-gradient-bottom" />
                  <div class="excerpt-gradient-top" />
                </div>
              </div>
            </a>
          </li>
          <li
            v-if="filterText && !results.length && enableNoResults"
            class="no-results"
          >
            {{ translate('modal.noResultsText') }} "<strong>{{ filterText }}</strong>"
          </li>
        </ul>

        <div class="search-keyboard-shortcuts">
          <span>
            <kbd :aria-label="translate('modal.footer.navigateUpKeyAriaLabel')">
              <span class="vpi-arrow-up navigate-icon" />
            </kbd>
            <kbd :aria-label="translate('modal.footer.navigateDownKeyAriaLabel')">
              <span class="vpi-arrow-down navigate-icon" />
            </kbd>
            {{ translate('modal.footer.navigateText') }}
          </span>
          <span>
            <kbd :aria-label="translate('modal.footer.selectKeyAriaLabel')">
              <span class="vpi-corner-down-left navigate-icon" />
            </kbd>
            {{ translate('modal.footer.selectText') }}
          </span>
          <span>
            <kbd :aria-label="translate('modal.footer.closeKeyAriaLabel')">esc</kbd>
            {{ translate('modal.footer.closeText') }}
          </span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.VPLocalSearchBox {
  position: fixed;
  z-index: 100;
  inset: 0;
  display: flex;
}

.backdrop {
  position: absolute;
  inset: 0;
  background: var(--vp-backdrop-bg-color);
  transition: opacity 0.5s;
}

.shell {
  position: relative;
  padding: 16px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--xmcl-panel, #1b241f);
  border: 1px solid var(--xmcl-line, #334139);
  width: min(100vw - 60px, 860px);
  height: min-content;
  max-height: min(100vh - 128px, 860px);
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05);
}

@media (max-width: 767px) {
  .shell {
    margin: 0;
    width: 100vw;
    height: 100vh;
    max-height: none;
    border-radius: 0;
  }
}

.search-bar {
  border: 1px solid var(--xmcl-line, #334139);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: text;
  background: var(--xmcl-soft, #151d18);
  transition: all 0.2s ease;
}

@media (max-width: 767px) {
  .search-bar {
    padding: 0 8px;
  }
}

.search-bar:focus-within {
  border-color: var(--xmcl-lime, #c9f85a);
  box-shadow: 0 0 0 1px rgba(201, 248, 90, 0.3);
}

.local-search-icon {
  display: block;
  font-size: 18px;
}

.navigate-icon {
  display: block;
  font-size: 14px;
}

.search-icon {
  margin: 8px;
}

@media (max-width: 767px) {
  .search-icon {
    display: none;
  }
}

.search-input {
  padding: 6px 12px;
  font-size: inherit;
  width: 100%;
}

.search-input::-webkit-search-cancel-button {
  display: none;
}

@media (max-width: 767px) {
  .search-input {
    padding: 6px 4px;
  }
}

.search-actions {
  display: flex;
  gap: 4px;
}

@media (any-pointer: coarse) {
  .search-actions {
    gap: 8px;
  }
}

@media (min-width: 769px) {
  .search-actions.before {
    display: none;
  }
}

.search-actions button {
  padding: 8px;
}

.search-actions button:not([disabled]):hover,
.toggle-layout-button.detailed-list {
  color: var(--vp-c-brand-1);
}

.search-actions button.clear-button:disabled {
  opacity: 0.37;
}

.search-loading {
  visibility: hidden;
  margin: 8px;
  width: 18px;
  height: 18px;
  flex: none;
  border: 2px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
}

.search-loading.active {
  visibility: visible;
  animation: local-search-loading 0.8s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .search-loading.active {
    animation: none;
  }
}

@keyframes local-search-loading {
  to {
    transform: rotate(360deg);
  }
}

.search-keyboard-shortcuts {
  font-size: 0.8rem;
  opacity: 75%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  line-height: 14px;
}

.search-keyboard-shortcuts span {
  display: flex;
  align-items: center;
  gap: 4px;
}

@media (max-width: 767px) {
  .search-keyboard-shortcuts {
    display: none;
  }
}

.search-keyboard-shortcuts kbd {
  background: rgba(128, 128, 128, 0.1);
  border-radius: 4px;
  padding: 3px 6px;
  min-width: 24px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid rgba(128, 128, 128, 0.15);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}

.results {
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.result {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  transition: none;
  line-height: 1rem;
  border: solid 2px var(--vp-local-search-result-border);
  outline: none;
}

.result > div {
  margin: 12px;
  width: 100%;
  overflow: hidden;
}

@media (max-width: 767px) {
  .result > div {
    margin: 8px;
  }
}

.titles {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  position: relative;
  z-index: 1001;
  padding: 2px 0;
}

.title {
  display: flex;
  align-items: center;
  gap: 4px;
}

.title.main {
  font-weight: 500;
}

.title-icon {
  opacity: 0.5;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.locale-pill {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 4px;
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  margin-left: 6px;
  display: inline-flex;
  align-items: center;
}

.locale-pill-uk {
  background-color: rgba(59, 130, 246, 0.12);
  color: #3b82f6;
  border-color: rgba(59, 130, 246, 0.3);
}

.title svg {
  opacity: 0.5;
}

.result.selected {
  --vp-local-search-result-bg: var(--vp-local-search-result-selected-bg);
  border-color: var(--vp-local-search-result-selected-border);
}

.excerpt-wrapper {
  position: relative;
}

.excerpt {
  opacity: 50%;
  pointer-events: none;
  max-height: 140px;
  overflow: hidden;
  position: relative;
  margin-top: 4px;
}

.result.selected .excerpt {
  opacity: 1;
}

.excerpt :deep(*) {
  font-size: 0.8rem !important;
  line-height: 130% !important;
}

.titles :deep(mark),
.excerpt :deep(mark) {
  background-color: var(--vp-local-search-highlight-bg);
  color: var(--vp-local-search-highlight-text);
  border-radius: 2px;
  padding: 0 2px;
}

.excerpt :deep(.vp-code-group) .tabs {
  display: none;
}

.excerpt :deep(.vp-code-group) div[class*='language-'] {
  border-radius: 8px !important;
}

.excerpt-gradient-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(transparent, var(--vp-local-search-result-bg));
  z-index: 1000;
}

.excerpt-gradient-top {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(var(--vp-local-search-result-bg), transparent);
  z-index: 1000;
}

.result.selected .titles,
.result.selected .title-icon {
  color: var(--vp-c-brand-1) !important;
}

.no-results {
  font-size: 0.9rem;
  text-align: center;
  padding: 12px;
}

svg {
  flex: none;
}
</style>
