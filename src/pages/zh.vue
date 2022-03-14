<template>
    <index />
</template>
<script lang="ts" setup>
import index from './index.vue'
// document.getElementsByTagName('html').item(0)?.setAttribute('lang', 'en')
const { locale } = useI18n()
locale.value = 'zh'
</script>
