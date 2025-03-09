<template>
  <div linux class="flex flex-col">
    <h1 v-if="title" class="ui inverted py-5" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">{{ t("downloadFor.linux") }}</div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <div class="gap-2 flex-wrap" :class="{
      'flex': !organized,
      organized: organized,
      'w-full': organized,
      'justify-center': organized
    }">
      <div class="ui labeled button" tabindex="0">
        <UIButton class="inverted positive" :disabled="!artifacts.deb" :organized="organized" :href="artifacts.deb"
          @click="trackDownload('linux', 'deb')" :text="t('download-deb') + ' (x64)'" :icon="'i-fa6-brands:debian'" />
        <UILeftPointingButton class="basic inverted green" :href="artifacts.debArm64" @click="trackDownload('linux', 'deb-arm64')" text="ARM64" />
      </div>
      <div class="ui labeled button" tabindex="0">
        <UIButton class="" :disabled="!artifacts.rpm" :organized="organized" :href="artifacts.rpm"
          @click="trackDownload('linux', 'rpm')" :text="t('download-rpm') + ' (x64)'" :icon="'i-fa6-brands:linux'" />
        <UILeftPointingButton class="white" :href="artifacts.rpmAArch64" @click="trackDownload('linux', 'rpm-aarch64')" text="AArch64" />
      </div>
      <div class="ui labeled button" tabindex="0">
        <UIButton class="inverted red" :disabled="!artifacts.appImage" :organized="organized" :href="artifacts.appImage"
          @click="trackDownload('linux', 'appimage')" :text="t('download-appimage') + ' (x64)'" :icon="'i-fa6-solid:hard-drive'" />
        <UILeftPointingButton class="inverted red" :href="artifacts.appImageArm64" @click="trackDownload('linux', 'appimage-arm64')" text="ARM64" />
      </div>
      <div class="ui labeled button" tabindex="0">
        <UIButton class="inverted brown" :disabled="!artifacts.tarxz" :organized="organized" :href="artifacts.tarxz"
          @click="trackDownload('linux', 'tar.xz')" :text="t('download-tarxz') + ' (x64)'" :icon="'i-fa6-solid:box'" />
        <UILeftPointingButton class="inverted brown" :href="artifacts.tarxzArm64" @click="trackDownload('linux', 'tar.xz-arm64')" text="ARM64" />
      </div>
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