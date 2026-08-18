<script setup lang="ts">
import { computed } from 'vue'
import type { Author } from '../composables/authors.data'
import logo from '../../../public/logo.png'

const props = defineProps<{
  author?: Author | null
  authorName?: string
  roleOverride?: string
}>()

const name = computed(() => props.author?.name || props.authorName || 'XMCL Core Team')
const avatar = computed(() => props.author?.data?.avatar || (name.value.toLowerCase().includes('bansafan') ? 'https://github.com/BANSAFAn.png' : (name.value.toLowerCase().includes('ci010') ? 'https://github.com/ci010.png' : logo)))
const role = computed(() => props.roleOverride || props.author?.data?.role || 'Core Contributor')

const profileUrl = computed(() => {
  if (props.author?.data?.github) return props.author.data.github
  if (props.author?.data?.gitlab) return props.author.data.gitlab
  if (props.author?.data?.reddit) return props.author.data.reddit
  if (name.value.toLowerCase() === 'bansafan') return 'https://github.com/BANSAFAn'
  if (name.value.toLowerCase() === 'ci010') return 'https://github.com/ci010'
  if (name.value.toLowerCase() === 'volodiakraplich') return 'https://gitlab.com/VolodiaKraplich'
  return null
})
</script>

<template>
  <component
    :is="profileUrl ? 'a' : 'div'"
    :href="profileUrl || undefined"
    :target="profileUrl ? '_blank' : undefined"
    :rel="profileUrl ? 'noopener noreferrer' : undefined"
    class="author-badge"
    :class="{ 'is-link': !!profileUrl }"
  >
    <img
      class="author-avatar"
      :src="avatar"
      :alt="name"
      width="36"
      height="36"
    />
    <div class="author-info">
      <span class="author-name">
        {{ name }}
        <span v-if="profileUrl" class="external-icon" aria-hidden="true">↗</span>
      </span>
      <span class="author-role">{{ role }}</span>
    </div>
  </component>
</template>

<style scoped>
.author-badge {
  align-items: center;
  border-radius: 8px;
  display: inline-flex;
  gap: 10px;
  padding: 4px 8px 4px 4px;
  text-decoration: none;
  transition: background 150ms ease;
}

.author-badge.is-link:hover {
  background: var(--xmcl-soft, #e9ece4);
}

.author-avatar {
  background: var(--xmcl-panel, #ffffff);
  border: 1px solid var(--xmcl-line, #d8ded7);
  border-radius: 50%;
  height: 36px;
  object-fit: contain;
  padding: 2px;
  width: 36px;
}

.author-info {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.author-name {
  align-items: center;
  color: var(--xmcl-ink, #17211f);
  display: inline-flex;
  font-size: 13.5px;
  font-weight: 700;
  gap: 4px;
}

.external-icon {
  font-size: 11px;
  opacity: 0.6;
  transition: transform 150ms ease, opacity 150ms ease;
}

.author-badge.is-link:hover .external-icon {
  opacity: 1;
  transform: translate(1px, -1px);
}

.author-role {
  color: var(--xmcl-muted, #64706c);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

html.dark .author-badge.is-link:hover {
  background: #151d18;
}

html.dark .author-name {
  color: #edf3ed;
}

html.dark .author-role {
  color: #9aa9a1;
}
</style>