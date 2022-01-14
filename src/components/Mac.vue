<template>
  <div mac>
    <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">
        {{ t("downloadFor.mac") }}
      </div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <a
      dmg
      class="ui huge inverted download labeled icon positive button"
      :disabled="!artifacts.macDmg"
      :href="artifacts.macDmg"
    >
      <i class="hdd icon"></i>
      <span> {{ t("download-dmg") }} </span>
    </a>
    <a
      mac-zip
      :disabled="!artifacts.macZip"
      class="ui huge inverted download labeled icon brown button"
      :href="artifacts.macZip"
    >
      <i class="box icon"></i>
      <span> {{ t("download-zip") }} </span>
    </a>
  </div>
</template>

<script lang=ts setup>
import { useArtifactsStore } from "~/composables";

const artifacts = useArtifactsStore()
const { t } = useI18n()

</script>
