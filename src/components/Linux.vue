<template>
  <div linux>
    <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">{{ t("downloadFor.linux") }}</div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <a
      deb
      class="ui huge inverted download labeled icon red button"
      :disabled="!artifacts.deb"
      :href="artifacts.deb"
    >
      <i class="circle outline icon"></i>
      <span>{{ t("download-deb") }}</span>
    </a>
    <a
      snap
      class="ui huge inverted download labeled icon teal button"
      :class="{ disabled: !artifacts.snap }"
      :disabled="!artifacts.snap"
      :href="artifacts.snap"
    >
      <i class="dolly icon"></i>
      <span>{{ t("download-snap") }}</span>
    </a>
    <a
      appimage
      class="ui huge inverted download labeled icon positive button"
      :class="{ disabled: !artifacts.appImage }"
      :disabled="!artifacts.appImage"
      :href="artifacts.appImage"
    >
      <i class="dolly flatbed icon"></i>
      <span>{{ t("download-appimage") }}</span>
    </a>
    <a
      rpm
      class="ui huge inverted download labeled icon button"
      :class="{ disabled: !artifacts.rpm }"
      :disabled="!artifacts.rpm"
      :href="artifacts.rpm"
    >
      <i class="hdd icon"></i>
      <span>{{ t("download-rpm") }}</span>
    </a>
  </div>
</template>

<script lang=ts setup>
import { useArtifactsStore } from "../composables";

const artifacts = useArtifactsStore()
const { t } = useI18n()

</script>
