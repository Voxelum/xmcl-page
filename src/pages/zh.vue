<template>
    <index />
</template>
<script lang="ts" setup>
import index from './index.vue'
const { locale } = useI18n()
locale.value = 'zh'
</script>
