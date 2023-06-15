<template>
    <div class="">
        <h1 class="text-5xl font-bold text-amber-400 leading-8 text-center">
            Changelogs
        </h1>
        <changelogs></changelogs>
    </div>
</template>
<script lang="ts" setup>
import { useLocaledPage } from '~/composables/localedPage';
import changelogs from '../en/changelogs/index.vue'

useLocaledPage('uk')
onMounted(() => {
    const body = document.getElementsByClassName('markdown-body')
    const tables = body.item(0)?.getElementsByTagName('table')
    tables?.item(0)?.classList.add('ui', 'celled', 'inverted', 'table')
})

</script>

<route lang="yaml">
meta:
  layout: changelog
</route>


