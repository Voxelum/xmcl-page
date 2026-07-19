<template>
  <div linux class="download-os-card linux">
    <div v-if="title" class="download-section-header">
      <div class="os-icon-wrapper linux">
        <div class="i-fa6-brands:linux"></div>
      </div>
      <h2 class="os-title">{{ t("downloadFor.linux") }}</h2>
    </div>
    <div class="download-buttons-flex" :class="{
      'w-full': organized,
      'justify-center': organized
    }">
      <div class="download-segmented-btn color-rose" tabindex="0">
        <UIButton :disabled="!artifacts.deb" :organized="organized" :href="artifacts.deb"
          @click="trackDownload('linux', 'deb')" :text="t('download-deb') + ' (x64)'" :icon="'i-fa6-brands:debian'" />
        <UILeftPointingButton :href="artifacts.debArm64" @click="trackDownload('linux', 'deb-arm64')" text="ARM64" />
      </div>
      <div class="download-segmented-btn color-red" tabindex="0">
        <UIButton :disabled="!artifacts.rpm" :organized="organized" :href="artifacts.rpm"
          @click="trackDownload('linux', 'rpm')" :text="t('download-rpm') + ' (x64)'" :icon="'i-fa6-brands:redhat'" />
        <UILeftPointingButton :href="artifacts.rpmAArch64" @click="trackDownload('linux', 'rpm-aarch64')" text="AArch64" />
      </div>
      <div class="download-segmented-btn color-violet" tabindex="0">
        <UIButton :disabled="!artifacts.appImage" :organized="organized" :href="artifacts.appImage"
          @click="trackDownload('linux', 'appimage')" :text="t('download-appimage') + ' (x64)'" :icon="'i-fa6-solid:cube'" />
        <UILeftPointingButton :href="artifacts.appImageArm64" @click="trackDownload('linux', 'appimage-arm64')" text="ARM64" />
      </div>
      <div class="download-segmented-btn color-amber" tabindex="0">
        <UIButton :disabled="!artifacts.tarxz" :organized="organized" :href="artifacts.tarxz"
          @click="trackDownload('linux', 'tar.xz')" :text="t('download-tarxz') + ' (x64)'" :icon="'i-fa6-solid:file-zipper'" />
        <UILeftPointingButton :href="artifacts.tarxzArm64" @click="trackDownload('linux', 'tar.xz-arm64')" text="ARM64" />
      </div>
      <div class="download-segmented-btn color-sky" tabindex="0">
        <UIButton :organized="organized" href="javascript:void(0)"
          @click.prevent="openFlathub" :text="t('download-flathub') + ' (+ Steam Deck)'" :icon="'i-simple-icons:flathub'" />
      </div>
    </div>

    <CliModal :isOpen="isModalOpen" type="flathub" @close="isModalOpen = false" />
  </div>
</template>

<script lang=ts setup>
import { inject, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { useDownloads } from '../composables/useDownloads';
import UIButton from './UIButton.vue';
import UILeftPointingButton from './UILeftPointingButton.vue';
import CliModal from './CliModal.vue';

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useDownloads()
const { t } = useI18n()
const telemetry = inject<any>('telemetry', inject<any>('telemtry', { trackDownload: (category: string, action: string) => { } }))
const trackDownload = telemetry?.trackDownload || ((category: string, action: string) => { })

const isModalOpen = ref(false)

function openFlathub() {
  trackDownload('linux', 'flathub')
  isModalOpen.value = true
}
</script>