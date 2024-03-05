<template>
  <div win class="flex flex-col">
    <h1 v-if="title" class="ui inverted py-5" style="line-height: 1.4; font-size: 3em">
      <div style="font-size: 0.45em">{{ t('downloadFor.windows') }}</div>
    </h1>
    <div class="flex gap-2 flex-wrap" :class="{
      'w-full': organized,
      'justify-center': organized
    }">
      <a class="ui huge inverted download labeled icon teal button w-full"
        :class="{ disabled: !artifacts.winWeb, '2xl:w-[45%]': organized, 'md:w-auto': !organized }"
        :href="artifacts.winWeb" @click="trackDownload('win32', 'appinstaller')">
        <i class="icon">
          <div class="i-fa6-solid:plane " />
        </i>
        <span>{{ t("download-appinstaller") }}</span>
      </a>
      <a class="ui huge inverted download labeled icon positive button w-full"
        :class="{ disabled: !artifacts.winAppx, '2xl:w-[45%]': organized, 'md:w-auto': !organized }"
        :href="artifacts.winAppx" @click="trackDownload('win32', 'appx')">
        <i class="icon">
          <div class="i-fa6-solid:rocket " />
        </i>
        <span>{{ t('download-appx') }}</span>
      </a>
      <a class="ui huge inverted download labeled icon brown button w-full" :disabled="!artifacts.winZip"
        :class="{ disabled: !artifacts.winZip, '2xl:w-[45%]': organized, 'md:w-auto': !organized }"
        :href="artifacts.winZip" @click="trackDownload('win32', 'zip64')">
        <i class="icon">
          <div class="i-fa6-solid:box " />
        </i>
        <span>{{ t("download-zip") }} (x64)</span>
      </a>
      <a class="ui huge inverted download labeled icon brown button w-full" :disabled="!artifacts.winZip32"
        :class="{ disabled: !artifacts.winZip32, '2xl:w-[45%]': organized, 'md:w-auto': !organized }"
        :href="artifacts.winZip32" @click="trackDownload('win32', 'zip32')">
        <i class="icon">
          <div class="i-fa6-solid:box " />
        </i>
        <span>{{ t("download-zip") }} (x32)</span>
      </a>
    </div>
  </div>
</template>

<script lang=ts setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDownloads } from '../composables/useDownloads';

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useDownloads()
const { trackDownload } = inject('telemtry', { trackDownload: (category: string, action: string) => { } })
const { t } = useI18n()

</script>
<style>

</style>