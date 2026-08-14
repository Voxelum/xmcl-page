<template>
  <AccountMenu v-if="isTogetherPath" />
  <TogetherButton v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import AccountMenu from './AccountMenu.vue'
import TogetherButton from './TogetherButton.vue'

const { page } = useData()
const isTogetherPath = computed(() => page.value.relativePath.split('/').includes('together'))
</script>
