<template>
  <div mac class="flex flex-col">
    <h1 v-if="title" class="ui inverted py-5" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">{{ t("downloadFor.mac") }}</div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <div class="flex gap-2 flex-wrap" :class="{
      'w-full': organized,
      'justify-center': organized
    }">
      <div class="ui labeled button" tabindex="0">
        <a dmg class="ui huge inverted download labeled icon positive button w-full"
          :class="{ disabled: !artifacts.macDmgArm64, 'md:w-auto': !organized }"
          :href="artifacts.macDmgArm64" @click="trackDownload('mac', 'arm64')">
          <i class="icon">
            <div class="i-fa6-solid:hard-drive" />
          </i>
          <span>{{ t("download-dmg") }} (M1)</span>
        </a>
        <a class="ui basic inverted green left pointing label" :href="artifacts.macDmg"
          :class="{ disabled: !artifacts.macDmg }" @click="trackDownload('mac', 'x64')">
          X64
        </a>
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n'
import { useDownloads } from '../composables/useDownloads';

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useDownloads()
const { t } = useI18n()
const { trackDownload } = inject('telemtry', { trackDownload: (category: string, action: string) => { } })

</script>
