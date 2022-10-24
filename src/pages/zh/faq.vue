<template>
    <div class="my-30">
        <router-view></router-view>
    </div>
    <Footer />
</template>
<script lang="ts" setup>
import { useLocaledPage } from '~/composables/localedPage';

useHead({
    link: [
        {
            rel: "stylesheet",
            crossorigin: "anonymous",
            href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.6/dist/components/list.min.css",
        },
        {
            rel: "stylesheet",
            crossorigin: "anonymous",
            href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.6/dist/components/table.min.css",
        }
    ]
})

useLocaledPage('zh')
onMounted(() => {
    const body = document.getElementsByClassName('markdown-body')
    const tables = body.item(0)?.getElementsByTagName('table')
    console.log(tables?.item(0))
    tables?.item(0)?.classList.add('ui', 'celled', 'inverted', 'table')
})

</script>
