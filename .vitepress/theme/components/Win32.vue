<template>
  <div win class="flex flex-col h-full w-full">
    <h3 v-if="title" class="text-2xl lg:text-xl xl:text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white flex items-center justify-center min-h-[4rem]">
      {{ t('downloadFor.windows') }}
    </h3>
    <div class="flex gap-3 flex-grow" :class="{
      'flex-wrap': !title,
      'flex-col': title,
      'items-stretch': title,
      'w-full': organized || title,
      'justify-center': organized && !title
    }">
      <UIButton class="inverted teal w-full" :disabled="!artifacts.winWeb" :organized="organized" :href="artifacts.winWeb"
        @click="trackDownload('win32', 'appinstaller')" :text="t('download-appinstaller')"
        :icon="'i-fa6-solid:plane'" />
      <UIButton class="inverted positive w-full" :disabled="!artifacts.winAppx" :organized="organized"
        :href="artifacts.winAppx" @click="trackDownload('win32', 'appx')" :text="t('download-appx')"
        :icon="'i-fa6-solid:rocket'" />
      <UIButton class="inverted brown w-full" :disabled="!artifacts.winZip" :organized="organized" :href="artifacts.winZip"
        @click="trackDownload('win32', 'zip64')" :text="t('download-zip') + ' (x64)'" :icon="'i-fa6-solid:box'" />
      <!-- <UIButton class="inverted brown" :disabled="!artifacts.winZip32" :organized="organized" :href="artifacts.winZip32"
        @click="trackDownload('win32', 'zip32')" :text="t('download-zip') + ' (x86)'" :icon="'i-fa6-solid:box'" /> -->
    </div>
  </div>
</template>

<script lang=ts setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDownloads } from '../composables/useDownloads';
import UIButton from './UIButton.vue';

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useDownloads()
const { trackDownload } = inject('telemtry', { trackDownload: (category: string, action: string) => { } })
const { t } = useI18n()

</script>
<style></style>
