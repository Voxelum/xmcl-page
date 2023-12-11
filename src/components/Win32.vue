<template>
  <div win class="flex flex-col">
    <h1 v-if="title" class="ui inverted section-header" style="line-height: 1.4; font-size: 3em">
      <div style="font-size: 0.45em">{{ t('downloadFor.windows') }}</div>
    </h1>
    <div class="flex gap-2 flex-wrap"
    :class="{
      'w-full': organized,
      'justify-center': organized
    }">
      <a
        win-web
        class="ui huge inverted download labeled icon teal button w-full"
        :class="{ disabled: artifacts.refreshing || !artifacts.winWeb, '2xl:w-[45%]': organized, 'md:w-auto': !organized }"
        :href="artifacts.winWeb"
        @click="trackDownload('win32', 'appinstaller')"
      >
        <i class="plane icon"></i>
        <span>{{ t("download-appinstaller") }}</span>
      </a>
      <a
        win-setup
        class="ui huge inverted download labeled icon positive button w-full"
        :class="{ disabled: artifacts.refreshing || !artifacts.winAppx, '2xl:w-[45%]': organized, 'md:w-auto': !organized }"
        :href="artifacts.winAppx"
        @click="trackDownload('win32', 'appx')"
      >
        <i class="rocket icon"></i>
        <span>{{ t('download-appx') }}</span>
      </a>
      <a
        win-zip
        class="ui huge inverted download labeled icon brown button w-full"
        :disabled="!artifacts.winZip"
        :class="{ disabled: artifacts.refreshing || !artifacts.winZip, '2xl:w-[45%]': organized, 'md:w-auto': !organized }"
        :href="artifacts.winZip"
        @click="trackDownload('win32', 'zip64')"
      >
        <i class="box icon"></i>
        <span>{{ t("download-zip") }}</span>
      </a>
      <a
        win-zip
        class="ui huge inverted download labeled icon brown button w-full"
        :disabled="!artifacts.winZip32"
        :class="{ disabled: artifacts.refreshing || !artifacts.winZip32, '2xl:w-[45%]': organized, 'md:w-auto': !organized }"
        :href="artifacts.winZip32"
        @click="trackDownload('win32', 'zip32')"
      >
        <i class="box icon"></i>
        <span>{{ t("download-zip-32") }}</span>
      </a>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useTelemetry } from "~/composables/telemetry";
import { useArtifactsStore } from "../composables";

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useArtifactsStore()
const { trackDownload } = useTelemetry()
const { t } = useI18n()

</script>

