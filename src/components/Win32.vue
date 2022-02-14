<template>
  <div win class="flex flex-col">
    <h1 v-if="title" class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div style="font-size: 0.45em">{{ t('downloadFor.windows') }}</div>
    </h1>
    <div class="flex gap-2 flex-wrap">
      <a
        win-web
        class="ui huge inverted download labeled icon teal button w-full md:w-auto"
        :class="{ disabled: !artifacts.winWeb }"
        :href="artifacts.winWeb"
      >
        <i class="plane icon"></i>
        <span>{{ t("download-appinstaller") }}</span>
      </a>
      <a
        win-setup
        class="ui huge inverted download labeled icon positive button w-full md:w-auto"
        :class="{ disabled: !artifacts.winNsis }"
        :href="artifacts.winNsis"
      >
        <i class="rocket icon"></i>
        <span>{{ t('download-appx') }}</span>
      </a>
      <a
        win-zip
        class="ui huge inverted download labeled icon brown button w-full md:w-auto"
        :disabled="!artifacts.winZip"
        :class="{ disabled: !artifacts.winZip }"
        :href="artifacts.winZip"
      >
        <i class="box icon"></i>
        <span>{{ t("download-zip") }}</span>
      </a>
      <a
        win-zip
        class="ui huge inverted download labeled icon brown button w-full md:w-auto"
        :disabled="!artifacts.winZip32"
        :class="{ disabled: !artifacts.winZip32 }"
        :href="artifacts.winZip32"
      >
        <i class="box icon"></i>
        <span>{{ t("download-zip-32") }}</span>
      </a>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useArtifactsStore } from "../composables";

const { title } = defineProps({ title: Boolean })

const artifacts = useArtifactsStore()
const { t } = useI18n()

</script>

