<template>
  <div class="mt-20 pb-10">
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
