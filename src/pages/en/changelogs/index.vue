<template>
    <div class="flex gap-2 relative mt-20">
        <div class="flex-auto gap-2 p-4 flex flex-col gap-4">
            <component v-for="ver of versions" :is="ver.default" :key="ver.version"></component>
        </div>
        <nav class="p-10">
            <div class="sticky top-30">
                <li v-for="ver of versions" :to="`/zh/changelogs/${ver.version}`" :key="ver.version"
                    class="hover:(text-white) text-gray-200 transition-all cursor-pointer list-none ">
                    <a class="border-l-2 border-l-gray-500 active:border-l-white focus:border-l-white p-1 pl-2 block"
                        @click="navTo(ver.version)">
                        <div class="transition-all text-lg ">
                            v{{ ver.version }}
                        </div>
                        <span class="text-gray-400 text-sm "> {{ new Date(ver.date).toLocaleDateString() }} </span>
                    </a>
                </li>
            </div>
        </nav>
    </div>
</template>
<script lang="ts" setup>

const { push } = useRouter()
const navTo = (ver: string) => {
    push({ hash: `#${ver}` })
}

const versions = Object.values(import.meta.globEager('./*.md')).reverse()

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


