<template>
    <div class="gap-2 p-4 mt-10 flex flex-col gap-4">
        <router-link v-for="ver of versions" :to="`/zh/changelogs/${ver.version}`" :key="ver.version" class="rounded border p-4 hover:(border-teal-400) text-gray-400 hover:(text-white) transition-all flex items-center cursor-pointer">
            <div class="leading-10 text-3xl transition-all">
                v{{ ver.version }}
            </div>
            <div class="flex-grow"></div>
            <span class="text-gray-400 ml-2"> {{ new Date(ver.date).toLocaleDateString() }} </span>
        </router-link>
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

const versions = Object.values(import.meta.globEager('./*.md')).map((r: any) => {
    const { date, version } = r
    return { date, version }
}).reverse()

onMounted(() => {
    const body = document.getElementsByClassName('markdown-body')
    const tables = body.item(0)?.getElementsByTagName('table')
    console.log(tables?.item(0))
    tables?.item(0)?.classList.add('ui', 'celled', 'inverted', 'table')
})

</script>

<route lang="yaml">
meta:
  layout: changelog
</route>


