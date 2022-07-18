<template>
    <div class="">
        <h1 class="text-5xl font-bold text-amber-400 leading-8 text-center">
            Changelogs
        </h1>
        <router-view></router-view>
    </div>
</template>
<script lang="ts" setup>

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


