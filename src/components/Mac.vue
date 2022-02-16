<template>
  <div mac>
    <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">{{ t("downloadFor.mac") }}</div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <div class="flex gap-2 flex-wrap">
      <a
        dmg
        class="ui huge inverted download labeled icon positive button w-full md:w-auto"
        :class="{ disabled: !artifacts.macDmg }"
        :href="artifacts.macDmg"
        @click="trackDownload('mac', 'dmg')"
      >
        <i class="hdd icon"></i>
        <span>{{ t("download-dmg") }}</span>
      </a>
      <a
        mac-zip
        class="ui huge inverted download labeled icon brown button w-full md:w-auto"
        :class="{ disabled: !artifacts.macZip }"
        :href="artifacts.macZip"
        @click="trackDownload('mac', 'zip')"
      >
        <i class="box icon"></i>
        <span>{{ t("download-zip") }}</span>
      </a>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useArtifactsStore } from "~/composables";
import { useTelemetry } from "~/composables/telemetry";

const artifacts = useArtifactsStore()
const { t } = useI18n()
const { trackDownload } = useTelemetry()

</script>
