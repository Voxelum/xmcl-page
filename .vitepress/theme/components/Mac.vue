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
      <a dmg class="ui huge inverted download labeled icon positive button w-full"
        :class="{ disabled: !artifacts.macDmg, 'md:w-auto': !organized, 'md:w-[45%]': organized }"
        :href="artifacts.macDmg" @click="trackDownload('mac', 'x64')">
        <i class="icon">
          <div class="i-fa6-solid:hard-drive" />
        </i>
        <span>{{ t("download-dmg") }}</span>
        <a class="ui huge left pointing brown inverted label" :href="artifacts.macDmgArm64"
          :class="{ disabled: !artifacts.macDmgArm64 }"
          @click="trackDownload('mac', 'arm64')">
          ARM64
        </a>
      </a>
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
