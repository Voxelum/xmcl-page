<template>
  <a class="together-button" :href="togetherUrl">
    <span class="together-mark" aria-hidden="true">✦</span>
    <span>Together</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang, site } = useData()
const locale = computed(() => ['en', 'zh', 'zh-TW'].includes(lang.value) ? lang.value : 'en')
const togetherUrl = computed(() => `${site.value.base}${locale.value}/together/`)
</script>

<style scoped>
.together-button {
  align-items: center;
  background: var(--xmcl-lime, #c9f85a);
  border: 1px solid var(--xmcl-ink, #17211f);
  border-radius: 7px;
  color: #17211f !important;
  display: inline-flex;
  font-size: 12px;
  font-weight: 800;
  gap: 7px;
  height: 34px;
  letter-spacing: .04em;
  margin-left: 10px;
  padding: 0 12px;
  text-decoration: none !important;
  text-transform: uppercase;
  transition: box-shadow 180ms ease, transform 180ms ease;
}

.together-button:hover {
  box-shadow: 3px 3px 0 var(--xmcl-ink, #17211f);
  transform: translate(-1px, -1px);
}

.together-mark {
  color: var(--xmcl-orange, #e45e42);
  font-size: 14px;
}

@media (max-width: 760px) {
  .together-button {
    margin-left: 6px;
    padding-inline: 9px;
  }

  .together-button span:last-child {
    display: none;
  }
}
</style>
