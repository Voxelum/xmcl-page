<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import { openSearchModal, isSearchModalOpen } from '../composables/useSearchModal'

const { lang } = useData()
const route = useRoute()
const isMac = ref(false)

onMounted(() => {
  isMac.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
})

const isDoc = computed(() => {
  const path = route.path || ''
  const onDoc = path.includes('/guide/') || path.includes('/core/') || path.includes('/protocol/')
  const isLanding = path.endsWith('/guide/') || path.endsWith('/guide/index.html')
  return onDoc && !isLanding
})

const label = computed(() => {
  const currentLang = (lang.value || 'en').toLowerCase()
  if (currentLang.startsWith('uk')) {
    return 'Пошук у документації'
  }
  if (currentLang.startsWith('zh')) {
    return '搜索文档'
  }
  if (currentLang.startsWith('de')) {
    return 'Dokumentation suchen'
  }
  if (currentLang.startsWith('fr')) {
    return 'Rechercher'
  }
  if (currentLang.startsWith('ru')) {
    return 'Поиск по документации'
  }
  return 'Search Documentation'
})
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isDoc && !isSearchModalOpen"
      class="guide-floating-tool"
    >
      <button
        type="button"
        class="guide-floating-btn"
        :aria-label="label"
        @click="openSearchModal"
      >
        <span class="vpi-search guide-floating-icon" aria-hidden="true" />
        <span class="guide-floating-label">{{ label }}</span>
        <span class="guide-floating-keys" aria-hidden="true">
          <kbd>{{ isMac ? '⌘' : 'Ctrl' }}</kbd>
          <kbd>K</kbd>
        </span>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.guide-floating-tool {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 45;
  pointer-events: auto;
}

@media (min-width: 960px) {
  .guide-floating-tool {
    display: none;
  }
}

.guide-floating-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background-color: var(--xmcl-panel, #1b241f);
  color: var(--vp-c-text-1);
  border: 1px solid var(--xmcl-line, #334139);
  border-radius: 9999px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.guide-floating-btn:hover {
  transform: translateY(-2px);
  border-color: var(--xmcl-lime, #c9f85a);
  box-shadow: 0 6px 24px rgba(201, 248, 90, 0.2), 0 2px 8px rgba(0, 0, 0, 0.4);
}

.guide-floating-icon {
  font-size: 16px;
  color: var(--xmcl-lime, #c9f85a);
  transition: transform 0.2s ease;
}

.guide-floating-btn:hover .guide-floating-icon {
  transform: scale(1.15);
}

.guide-floating-keys {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 4px;
}

.guide-floating-keys kbd {
  display: inline-block;
  min-width: 16px;
  padding: 1px 4px;
  font-family: inherit;
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  color: var(--vp-c-text-3);
  text-align: center;
  background-color: var(--xmcl-soft, #151d18);
  border: 1px solid var(--xmcl-line, #334139);
  border-radius: 4px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(4px);
}

@media (max-width: 640px) {
  .guide-floating-label,
  .guide-floating-keys {
    display: none;
  }
  .guide-floating-btn {
    padding: 12px;
    border-radius: 50%;
  }
}
</style>
