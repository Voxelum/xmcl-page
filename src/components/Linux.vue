<template>
  <div linux>
    <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">{{ t("downloadFor.linux") }}</div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <div class="flex gap-2 flex-wrap">
      <a
        deb
        class="ui huge inverted download labeled icon red button w-full md:w-auto"
        :disabled="!artifacts.deb"
        :href="artifacts.deb"
        @click="trackDownload('linux', 'deb')"
      >
        <i class="circle outline icon"></i>
        <span>{{ t("download-deb") }}</span>
      </a>
      <a
        snap
        class="ui huge inverted download labeled icon teal button w-full md:w-auto"
        :class="{ disabled: !artifacts.snap }"
        :disabled="!artifacts.snap"
        :href="artifacts.snap"
        @click="trackDownload('linux', 'snap')"
      >
        <i class="dolly icon"></i>
        <span>{{ t("download-snap") }}</span>
      </a>
      <a
        appimage
        class="ui huge inverted download labeled icon positive button w-full md:w-auto"
        :class="{ disabled: !artifacts.appImage }"
        :disabled="!artifacts.appImage"
        :href="artifacts.appImage"
        @click="trackDownload('linux', 'appimage')"
      >
        <i class="dolly flatbed icon"></i>
        <span>{{ t("download-appimage") }}</span>
      </a>
      <a
        rpm
        class="ui huge inverted download labeled icon button w-full md:w-auto"
        :class="{ disabled: !artifacts.rpm }"
        :disabled="!artifacts.rpm"
        :href="artifacts.rpm"
        @click="trackDownload('linux', 'rpm')"
      >
        <i class="hdd icon"></i>
        <span>{{ t("download-rpm") }}</span>
      </a>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useTelemetry } from "~/composables/telemetry";
import { useArtifactsStore } from "../composables";

const artifacts = useArtifactsStore()
const { t } = useI18n()
const { trackDownload } = useTelemetry()

</script>
