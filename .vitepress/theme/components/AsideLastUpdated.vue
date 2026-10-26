<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page, theme, lang } = useData()

const hasLastUpdated = computed(() => !!page.value.lastUpdated)

const formattedDate = computed(() => {
  if (!page.value.lastUpdated) return ''
  try {
    const date = new Date(page.value.lastUpdated)
    return new Intl.DateTimeFormat(lang.value || 'en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date)
  } catch {
    return new Date(page.value.lastUpdated).toLocaleDateString()
  }
})

const labelText = computed(() => {
  if (lang.value === 'uk') return 'Останнє оновлення'
  if (lang.value === 'ru') return 'Последнее обновление'
  return theme.value.lastUpdatedText || 'Last Updated'
})
</script>

<template>
  <div v-if="hasLastUpdated" class="aside-last-updated-card">
    <div class="aside-last-updated-header">
      <span class="pulse-indicator"></span>
      <span class="aside-last-updated-label">{{ labelText }}</span>
    </div>
    <div class="aside-last-updated-timestamp">
      {{ formattedDate }}
    </div>
  </div>
</template>

<style scoped>
.aside-last-updated-card {
  margin-top: 24px;
  padding: 10px 14px;
  background: var(--vp-c-bg-soft, #f6f8f6);
  border: 1px solid var(--vp-c-divider, rgba(0, 0, 0, 0.08));
  border-radius: 6px;
  font-family: 'JetBrains Mono', 'Space Grotesk', monospace;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  transition: border-color 0.2s ease;
}

html.dark .aside-last-updated-card {
  background: #101612;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.aside-last-updated-card:hover {
  border-color: rgba(30, 215, 96, 0.4);
}

.aside-last-updated-header {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 4px;
}

.pulse-indicator {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--xmcl-orange, #e45e42);
  box-shadow: 0 0 6px rgba(228, 94, 66, 0.5);
  animation: pulse-dot 2.4s infinite ease-in-out;
}

html.dark .pulse-indicator {
  background-color: var(--xmcl-lime, #c9f85a);
  box-shadow: 0 0 8px rgba(201, 248, 90, 0.6);
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.85);
  }
}

.aside-last-updated-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-2, #64706c);
}

html.dark .aside-last-updated-label {
  color: #7d8f85;
}

.aside-last-updated-timestamp {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--vp-c-text-1, #18201a);
  letter-spacing: 0.02em;
}

html.dark .aside-last-updated-timestamp {
  color: #d1ded6;
}
</style>
