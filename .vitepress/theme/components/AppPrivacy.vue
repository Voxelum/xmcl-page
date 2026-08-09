<template>
  <AppPrivacyUk v-if="currentLang === 'uk'" />
  <AppPrivacyRu v-else-if="currentLang === 'ru'" />
  <AppPrivacyZh v-else-if="currentLang === 'zh'" />
  <AppPrivacyJp v-else-if="currentLang === 'jp' || currentLang === 'ja'" />
  <AppPrivacyAr v-else-if="currentLang === 'ar'" />
  <AppPrivacyEn v-else />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import AppPrivacyUk from './AppPrivacyUk.vue'
import AppPrivacyRu from './AppPrivacyRu.vue'
import AppPrivacyZh from './AppPrivacyZh.vue'
import AppPrivacyJp from './AppPrivacyJp.vue'
import AppPrivacyAr from './AppPrivacyAr.vue'
import AppPrivacyEn from './AppPrivacyEn.vue'

const { lang } = useData()
const currentLang = computed(() => lang.value || 'en')
</script>
