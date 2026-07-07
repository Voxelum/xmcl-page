<template>
  <div linux class="flex flex-col h-full w-full">
    <h3 v-if="title" class="text-2xl lg:text-xl xl:text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white flex items-center justify-center min-h-[4rem]">
      {{ t("downloadFor.linux") }}
    </h3>
    <div class="gap-3 flex-grow" :class="{
      'flex': !organized || title,
      'flex-wrap': !title,
      'flex-col': title,
      'items-stretch': title,
      organized: organized && !title,
      'w-full': organized || title,
      'justify-center': organized && !title
    }">
      <div class="ui labeled button w-full flex" tabindex="0">
        <UIButton class="inverted positive flex-grow" :disabled="!artifacts.deb" :organized="organized" :href="artifacts.deb"
          @click="trackDownload('linux', 'deb')" :text="t('download-deb') + ' (x64)'" :icon="'i-fa6-brands:debian'" />
        <UILeftPointingButton class="basic inverted green whitespace-nowrap shrink-0" :href="artifacts.debArm64" @click="trackDownload('linux', 'deb-arm64')" text="ARM64" />
      </div>
      <div class="ui labeled button w-full flex" tabindex="0">
        <UIButton class="flex-grow" :disabled="!artifacts.rpm" :organized="organized" :href="artifacts.rpm"
          @click="trackDownload('linux', 'rpm')" :text="t('download-rpm') + ' (x64)'" :icon="'i-fa6-brands:linux'" />
        <UILeftPointingButton class="white whitespace-nowrap shrink-0" :href="artifacts.rpmAArch64" @click="trackDownload('linux', 'rpm-aarch64')" text="AArch64" />
      </div>
      <div class="ui labeled button w-full flex" tabindex="0">
        <UIButton class="inverted red flex-grow" :disabled="!artifacts.appImage" :organized="organized" :href="artifacts.appImage"
          @click="trackDownload('linux', 'appimage')" :text="t('download-appimage') + ' (x64)'" :icon="'i-fa6-solid:hard-drive'" />
        <UILeftPointingButton class="inverted red whitespace-nowrap shrink-0" :href="artifacts.appImageArm64" @click="trackDownload('linux', 'appimage-arm64')" text="ARM64" />
      </div>
      <div class="ui labeled button w-full flex" tabindex="0">
        <UIButton class="inverted brown flex-grow" :disabled="!artifacts.tarxz" :organized="organized" :href="artifacts.tarxz"
          @click="trackDownload('linux', 'tar.xz')" :text="t('download-tarxz') + ' (x64)'" :icon="'i-fa6-solid:box'" />
        <UILeftPointingButton class="inverted brown whitespace-nowrap shrink-0" :href="artifacts.tarxzArm64" @click="trackDownload('linux', 'tar.xz-arm64')" text="ARM64" />
      </div>
      <UIButton class="inverted grey w-full" :organized="organized" href="https://flathub.org/en/apps/app.xmcl.voxelum"
        target="_blank" @click="trackDownload('linux', 'flathub')" :text="t('download-flathub') + ' (+ steam deck)'" :icon="'i-simple-icons:flathub'" />
    </div>
  </div>
</template>

<script lang=ts setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n'
import { useDownloads } from '../composables/useDownloads';
import UIButton from './UIButton.vue';
import UILeftPointingButton from './UILeftPointingButton.vue';

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useDownloads()
const { t } = useI18n()
const { trackDownload } = inject('telemtry', { trackDownload: (category: string, action: string) => { } })

</script>

<style lang="css" scoped>
.organized {
  display: grid;
  /* 2 cols */
  grid-template-columns: repeat(2, 1fr);
  /* each row height is even */
  grid-auto-rows: 1fr;

  row-gap: 1rem;
}

/* 1 grid cols < width 1600px */
@media (max-width: 1600px) {
  .organized {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>