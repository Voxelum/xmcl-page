<template>
  <div class="h-full text-gray-200">
    <Bar />
    <div class="my-30 xl:mx-80 mx-20">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>

const { t } = useI18n()
useHead({
    title: computed(() => `X Minecraft Launcher - ${t('title.changelog')}`),
    meta: computed(() => [
        {
            name: 'keywords',
            content: t('keywords')
        },
        {
            name: 'description',
            content: t('description')
        }
    ]),
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

</script>