<script setup lang="ts">
import { computed } from 'vue'
import type { Post } from '../composables/posts.data'

const props = defineProps<{
  post: Post
}>()

const category = computed(() => props.post.category || props.post.data?.category || 'Article')

const icon = computed(() => {
  const cat = category.value.toLowerCase()
  if (cat.includes('major') || cat.includes('update') || cat.includes('release')) return '🚀'
  if (cat.includes('announce')) return '📢'
  if (cat.includes('guide') || cat.includes('tutorial')) return '📖'
  if (cat.includes('engineer') || cat.includes('tech') || cat.includes('backend')) return '⚙️'
  if (cat.includes('status') || cat.includes('security')) return '🛡️'
  return '📝'
})
</script>

<template>
  <span class="category-pill">
    <span class="category-icon" aria-hidden="true">{{ icon }}</span>
    <span class="category-text">{{ category }}</span>
  </span>
</template>

<style scoped>
.category-pill {
  align-items: center;
  background: color-mix(in srgb, var(--xmcl-orange, #e45e42) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--xmcl-orange, #e45e42) 28%, transparent);
  border-radius: 999px;
  color: var(--xmcl-orange, #e45e42);
  display: inline-flex;
  font-size: 11px;
  font-weight: 700;
  gap: 5px;
  letter-spacing: 0.05em;
  padding: 3px 10px;
  text-transform: uppercase;
}

html.dark .category-pill {
  background: color-mix(in srgb, var(--xmcl-lime, #c9f85a) 12%, transparent);
  border-color: color-mix(in srgb, var(--xmcl-lime, #c9f85a) 30%, transparent);
  color: var(--xmcl-lime, #c9f85a);
}

.category-icon {
  font-size: 12px;
  line-height: 1;
}

.category-text {
  line-height: 1;
}
</style>