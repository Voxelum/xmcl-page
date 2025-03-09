<template>
  <div win class="flex flex-col">
    <h1 v-if="title" class="ui inverted py-5" style="line-height: 1.4; font-size: 3em">
      <div style="font-size: 0.45em">{{ t('downloadFor.windows') }}</div>
    </h1>
    <div class="flex gap-2 flex-wrap" :class="{
      'w-full': organized,
      'justify-center': organized
    }">
      <UIButton class="inverted teal" :disabled="!artifacts.winWeb" :organized="organized" :href="artifacts.winWeb"
        @click="trackDownload('win32', 'appinstaller')" :text="t('download-appinstaller')"
        :icon="'i-fa6-solid:plane'" />
      <UIButton class="inverted positive" :disabled="!artifacts.winAppx" :organized="organized"
        :href="artifacts.winAppx" @click="trackDownload('win32', 'appx')" :text="t('download-appx')"
        :icon="'i-fa6-solid:rocket'" />
      <UIButton class="inverted brown" :disabled="!artifacts.winZip" :organized="organized" :href="artifacts.winZip"
        @click="trackDownload('win32', 'zip64')" :text="t('download-zip') + ' (x64)'" :icon="'i-fa6-solid:box'" />
      <UIButton class="inverted brown" :disabled="!artifacts.winZip32" :organized="organized" :href="artifacts.winZip32"
        @click="trackDownload('win32', 'zip32')" :text="t('download-zip') + ' (x86)'" :icon="'i-fa6-solid:box'" />
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
