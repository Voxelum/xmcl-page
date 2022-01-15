<template>
  <div win>
    <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div style="font-size: 0.45em">
          {{ t('downloadFor.windows') }}
      </div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <a
      win-web
      class="ui huge inverted download labeled icon teal button"
      :class="{ disabled: !artifacts.winWeb }"
      :href="artifacts.winWeb"
    >
      <i class="plane icon"></i>
      <span> {{ t("download-web") }} </span>
    </a>
    <a
      win-setup
      class="ui huge inverted download labeled icon positive button"
      :class="{ disabled: !artifacts.winNsis }"
      :href="artifacts.winNsis"
    >
      <i class="rocket icon"></i>
      <span> {{ t('download') }} </span>
    </a>
    <a
      win-zip
      class="ui huge inverted download labeled icon brown button"
      :disabled="!artifacts.winZip"
      :class="{ disabled: !artifacts.winZip }"
      :href="artifacts.winZip"
    >
      <i class="box icon"></i>
      <span> {{ t("download-zip") }} </span>
    </a>
  </div>
</template>

<script lang=ts setup>
import { useArtifactsStore } from "../composables";

const artifacts = useArtifactsStore()
const { t } = useI18n()

</script>
