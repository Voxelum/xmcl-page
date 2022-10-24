<template>
  <div class="my-40 xl:mx-80 mx-20 pb-40">
    <PrivacyContent />
  </div>
</template>

<script lang=ts setup>
const { t } = useI18n()
useHead({
  title: computed(() => t('title.privacy')),
  meta: computed(() => [
    {
      name: 'keywords',
      content: t('keywords')
    },
    {
      name: 'description',
      content: t('description')
    }
  ])
})
</script>
