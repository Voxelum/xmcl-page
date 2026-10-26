<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import { openSearchModal } from '../composables/useSearchModal'

const { lang } = useData()
const route = useRoute()
const isMac = ref(false)

onMounted(() => {
  isMac.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
})

const isDoc = computed(() => {
  const path = route.path || ''
  return path.includes('/guide/') || path.includes('/core/') || path.includes('/protocol/')
})

const placeholder = computed(() => {
  const currentLang = (lang.value || 'en').toLowerCase()
  if (currentLang.startsWith('uk')) {
    return 'Пошук...'
  }
  if (currentLang.startsWith('zh')) {
    return '搜索文档...'
  }
  if (currentLang.startsWith('de')) {
    return 'Suchen...'
  }
  if (currentLang.startsWith('fr')) {
    return 'Rechercher...'
  }
  if (currentLang.startsWith('ru')) {
    return 'Поиск...'
  }
  return 'Search docs...'
})
</script>

<template>
  <div v-if="isDoc" class="guide-search-tool-wrapper">
    <button
      type="button"
      class="guide-search-tool-btn"
      :aria-label="placeholder"
      @click="openSearchModal"
    >
      <div class="search-btn-content">
        <svg
          class="search-btn-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span class="search-btn-placeholder">{{ placeholder }}</span>
      </div>

      <div class="search-btn-keys" aria-hidden="true">
        <kbd class="key-badge">{{ isMac ? '⌘' : 'Ctrl' }}</kbd>
        <kbd class="key-badge">K</kbd>
      </div>
    </button>
  </div>
</template>

<style scoped>
.guide-search-tool-wrapper {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--xmcl-line, var(--vp-c-divider));
}

.guide-search-tool-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  padding: 0 14px;
  background-color: var(--xmcl-soft, var(--vp-c-bg-alt));
  border: 1px solid var(--xmcl-line, var(--vp-c-divider));
  border-radius: 8px;
  color: var(--xmcl-muted, var(--vp-c-text-2));
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
  user-select: none;
}

.guide-search-tool-btn:hover {
  background-color: var(--xmcl-panel, var(--vp-c-bg-elv));
  border-color: var(--xmcl-lime, #c9f85a);
  color: var(--xmcl-ink, var(--vp-c-text-1));
  box-shadow: 0 0 0 1px var(--xmcl-lime, #c9f85a), 0 4px 14px rgba(0, 0, 0, 0.2);
}

.search-btn-content {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  flex: 1;
}

.search-btn-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--xmcl-lime, #c9f85a);
  transition: transform 180ms ease;
}

.guide-search-tool-btn:hover .search-btn-icon {
  transform: scale(1.1);
}

.search-btn-placeholder {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  letter-spacing: -0.01em;
}

.search-btn-keys {
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  margin-left: 8px;
}

.key-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  color: var(--xmcl-muted, var(--vp-c-text-3));
  background-color: var(--xmcl-paper, var(--vp-c-bg));
  border: 1px solid var(--xmcl-line, var(--vp-c-divider));
  border-radius: 4px;
  transition: border-color 180ms ease, color 180ms ease;
}

.guide-search-tool-btn:hover .key-badge {
  border-color: rgba(201, 248, 90, 0.4);
  color: var(--xmcl-ink, var(--vp-c-text-1));
}
</style>
