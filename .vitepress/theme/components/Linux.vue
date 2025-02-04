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
        <a deb class="ui huge inverted download positive labeled icon button w-full"
          :class="{ 'md:w-auto': !organized }" :disabled="!artifacts.deb" :href="artifacts.deb"
          @click="trackDownload('linux', 'deb')">
          <i class="icon">
            <div class="i-fa6-brands:debian" />
          </i>
          <div class="flex flex-col justify-center items-center h-full">
            <span>{{ t("download-deb") }} (x64)</span>
          </div>
        </a>
        <a class="ui basic inverted green left pointing label" :href="artifacts.debArm64"
          @click="trackDownload('linux', 'deb-arm64')">
          ARM64
        </a>
      </div>
      <div class="ui labeled button" tabindex="0">
        <a rpm class="ui huge download labeled icon button w-full"
          :class="{ disabled: !artifacts.rpm, 'md:w-auto': !organized }" :disabled="!artifacts.rpm"
          :href="artifacts.rpm" @click="trackDownload('linux', 'rpm')">
          <i class="icon">
            <div class="i-fa6-brands:linux" />
          </i>
          <div class="flex flex-col justify-center items-center h-full">
            <span>{{ t("download-rpm") }} (x64)</span>
          </div>
        </a>
        <a class="ui white left pointing label" :href="artifacts.rpmAArch64"
          @click="trackDownload('linux', 'rpm-aarch64')">
          AArch64
        </a>
      </div>
      <div class="ui labeled button" tabindex="0">
        <a appimage class="ui huge inverted download labeled icon red button w-full"
          :class="{ disabled: !artifacts.appImage, 'md:w-auto': !organized }" :disabled="!artifacts.appImage"
          :href="artifacts.appImage" @click="trackDownload('linux', 'appimage')">
          <i class="dolly flatbed icon">
            <div class="i-fa6-solid:hard-drive" />
          </i>
          <span>{{ t("download-appimage") }} (x64)</span>
        </a>
        <a class="ui inverted red left pointing label" :href="artifacts.appImageArm64"
          @click="trackDownload('linux', 'appimage-arm64')">
          ARM64
        </a>
      </div>
      <div class="ui labeled button" tabindex="0">
        <a rpm class="ui huge inverted download brown labeled icon button w-full"
          :class="{ disabled: !artifacts.tarxz, 'md:w-auto': !organized }" :disabled="!artifacts.tarxz"
          :href="artifacts.tarxz" @click="trackDownload('linux', 'tar.xz')">
          <i class="icon">
            <div class="i-fa6-solid:box" />
          </i>
          <div class="flex flex-col justify-center items-center h-full">
            <span>{{ t("download-tarxz") }} (x64)</span>
          </div>
        </a>
        <a class="ui inverted brown left pointing label" :href="artifacts.tarxzArm64"
          @click="trackDownload('linux', 'tar.xz-arm64')">
          ARM64
        </a>
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n'
import { useDownloads } from '../composables/useDownloads';
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