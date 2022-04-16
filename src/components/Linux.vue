<template>
  <div linux class="flex flex-col">
    <h1 v-if="title" class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">{{ t("downloadFor.linux") }}</div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <div
      class="flex gap-2 flex-wrap"
      :class="{
        'w-full': organized,
        'justify-center': organized
      }"
    >
      <a
        deb
        class="ui huge inverted download positive labeled icon  button w-full"
        :class="{ 'md:w-auto': !organized, 'md:w-[45%]': organized }"
        :disabled="artifacts.refreshing || !artifacts.deb"
        :href="artifacts.deb"
        @click="trackDownload('linux', 'deb')"
      >
        <i class="circle outline icon"></i>
        <span>{{ t("download-deb") }}</span>
      </a>
      <a
        rpm
        class="ui huge inverted download labeled icon button w-full md:w-auto"
        :class="{ disabled: artifacts.refreshing || !artifacts.rpm, 'md:w-auto': !organized, 'md:w-[45%]': organized }"
        :disabled="!artifacts.rpm"
        :href="artifacts.rpm"
        @click="trackDownload('linux', 'rpm')"
      >
        <i class="hdd icon"></i>
        <span>{{ t("download-rpm") }}</span>
      </a>
      <a
        snap
        class="ui huge inverted download labeled icon teal button w-full"
        :class="{ disabled: !artifacts.snap, 'md:w-auto': !organized, 'md:w-[45%]': organized }"
        :disabled="artifacts.refreshing || !artifacts.snap"
        :href="artifacts.snap"
        @click="trackDownload('linux', 'snap')"
      >
        <i class="dolly icon"></i>
        <span>{{ t("download-snap") }}</span>
      </a>
      <a
        appimage
        class="ui huge inverted download labeled icon red button w-full"
        :class="{ disabled: !artifacts.appImage, 'md:w-auto': !organized, 'md:w-[45%]': organized }"
        :disabled="artifacts.refreshing || !artifacts.appImage"
        :href="artifacts.appImage"
        @click="trackDownload('linux', 'appimage')"
      >
        <i class="dolly flatbed icon"></i>
        <span>{{ t("download-appimage") }}</span>
      </a>
      <a
        rpm
        class="ui huge inverted download brown labeled icon button w-full md:w-auto"
        :class="{ disabled: artifacts.refreshing || !artifacts.tarxz, 'md:w-auto': !organized, 'md:w-[45%]': organized }"
        :disabled="!artifacts.tarxz"
        :href="artifacts.tarxz"
        @click="trackDownload('linux', 'tar.xz')"
      >
        <i class="box icon"></i>
        <span>{{ t("download-tarxz") }}</span>
      </a>
        <a
        rpm
        class="ui huge inverted download brown labeled icon button w-full md:w-auto"
        :class="{ disabled: artifacts.refreshing || !artifacts.linuxZip, 'md:w-auto': !organized, 'md:w-[45%]': organized }"
        :disabled="!artifacts.linuxZip"
        :href="artifacts.linuxZip"
        @click="trackDownload('linux', 'zip')"
      >
        <i class="box icon"></i>
        <span>{{ t("download-linuxZip") }}</span>
      </a>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useTelemetry } from "~/composables/telemetry";
import { useArtifactsStore } from "../composables";

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useArtifactsStore()
const { t } = useI18n()
const { trackDownload } = useTelemetry()

</script>
