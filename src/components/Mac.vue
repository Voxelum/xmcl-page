<template>
  <div mac class="flex flex-col">
    <h1 v-if="title" class="ui inverted section-header" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">{{ t("downloadFor.mac") }}</div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <div class="flex gap-2 flex-wrap" :class="{
      'w-full': organized,
      'justify-center': organized
    }">
      <a dmg class="ui huge inverted download labeled icon positive button w-full"
        :class="{ disabled: artifacts.refreshing || !artifacts.macDmg, 'md:w-auto': !organized, 'md:w-[45%]': organized }"
        :href="artifacts.macDmg" @click="trackDownload('mac', 'dmg')">
        <i class="hdd icon"></i>
        <span>{{ t("download-dmg") }}</span>
      </a>

      <div class="ui labeled button" tabindex="0">
        <a mac-zip class="ui huge inverted download labeled icon brown button w-full"
          :class="{ disabled: artifacts.refreshing || !artifacts.macZip, ' md:w-auto': !organized, 'md:w-[45%]': organized }"
          :href="artifacts.macZip" @click="trackDownload('mac', 'zip')">
          <i class="box icon"></i>
          <span>{{ t("download-zip") }}</span>
        </a>
        <a class="ui huge left pointing brown inverted label" :href="artifacts.macZipArm64"
          @click="trackDownload('mac', 'zip-arm64')">
          ARM64
        </a>
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useArtifactsStore } from "~/composables";
import { useTelemetry } from "~/composables/telemetry";

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useArtifactsStore()
const { t } = useI18n()
const { trackDownload } = useTelemetry()

</script>
