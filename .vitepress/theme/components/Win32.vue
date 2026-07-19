<template>
  <div win class="download-os-card windows">
    <div v-if="title" class="download-section-header">
      <div class="os-icon-wrapper windows">
        <div class="i-fa6-brands:windows"></div>
      </div>
      <h2 class="os-title">{{ t('downloadFor.windows') }}</h2>
    </div>
    <div class="download-buttons-flex" :class="{
      'w-full': organized,
      'justify-center': organized
    }">
      <UIButton class="color-cyan" :disabled="!artifacts.winWeb" :organized="organized" :href="artifacts.winWeb"
        @click="trackDownload('win32', 'appinstaller')" :text="t('download-appinstaller')"
        :icon="'i-fa6-solid:download'" />
      <UIButton class="color-emerald" :disabled="!artifacts.winAppx" :organized="organized"
        :href="artifacts.winAppx" @click="trackDownload('win32', 'appx')" :text="t('download-appx')"
        :icon="'i-fa6-brands:microsoft'" />
      <UIButton class="color-amber" :disabled="!artifacts.winZip" :organized="organized" :href="artifacts.winZip"
        @click="trackDownload('win32', 'zip64')" :text="t('download-zip') + ' (x64)'" :icon="'i-fa6-solid:file-zipper'" />
      <UIButton class="color-sky" href="javascript:void(0)" :organized="organized"
        @click.prevent="openWinGet" text="WinGet CLI" :icon="'i-fa6-solid:terminal'" />
    </div>

    <CliModal :isOpen="isModalOpen" type="winget" @close="isModalOpen = false" />
  </div>
</template>

<script lang=ts setup>
import { inject, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDownloads } from '../composables/useDownloads';
import UIButton from './UIButton.vue';
import CliModal from './CliModal.vue';

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useDownloads()
const telemetry = inject<any>('telemetry', inject<any>('telemtry', { trackDownload: (category: string, action: string) => { } }))
const trackDownload = telemetry?.trackDownload || ((category: string, action: string) => { })
const { t } = useI18n()

const isModalOpen = ref(false)

function openWinGet() {
  trackDownload('win32', 'winget')
  isModalOpen.value = true
}
</script>
