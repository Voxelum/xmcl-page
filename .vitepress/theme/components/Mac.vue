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
      <div class="ui labeled button w-full" tabindex="0">
        <UIButton class="inverted positive" :disabled="!buttonData[0].href" :organized="organized" :href="buttonData[0].href"
          @click="buttonData[0].click()" :text="buttonData[0].text" :icon="'i-fa6-solid:hard-drive'" />
        <UILeftPointingButton class="basic inverted green" :href="buttonData[1].href" @click="buttonData[1].click()"
          :text="buttonData[1].text" />
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import { computed, inject, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { useDownloads } from '../composables/useDownloads';
import UIButton from './UIButton.vue';
import UILeftPointingButton from './UILeftPointingButton.vue';

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useDownloads()
const { t } = useI18n()
const { trackDownload } = inject('telemtry', { trackDownload: (category: string, action: string) => { } })

async function detectMacArchitecture() {
  // 方法 1: 使用 navigator.userAgentData (首选)
  if ('userAgentData' in navigator && navigator.userAgentData) {
    try {
      const data = await (navigator.userAgentData as any).getHighEntropyValues(['architecture']);
      if (data.architecture === 'arm') {
        return 'arm';
      } else if (data.architecture === 'x86') {
        return 'x64';
      }
    } catch (error) {
      console.warn('Failed to get architecture from navigator.userAgentData:', error);
    }
  }

  // 方法 2: 使用 navigator.platform 和 navigator.userAgent (回退)
  const isMac = navigator.platform.toUpperCase().includes('MAC');
  const isAppleSilicon = navigator.userAgent.includes('Macintosh; ARM');

  if (isMac) {
    if (isAppleSilicon) {
      return 'arm';
    } else {
      return 'x64';
    }
  }

  // 方法 3: 使用 WebAssembly (最后的回退)
  try {
    const module = new WebAssembly.Module(new Uint8Array([
      0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00
    ]));
    const instance = new WebAssembly.Instance(module);
    const isARM = instance.exports instanceof WebAssembly.Instance;

    if (isARM) {
      return 'arm';
    } else {
      return 'x64';
    }
  } catch (error) {
    console.warn('Failed to detect architecture using WebAssembly:', error);
  }

  // 如果所有方法都失败
  return '';
}

const buttonData = computed(() => {
  if (arch.value !== 'arm') {
    return [{
      text: t("download-dmg") + ' (X64)',
      href: artifacts.macDmg,
      click: () => trackDownload('mac', 'x64'),
    }, {
      text: 'ARM',
      href: artifacts.macDmgArm64,
      click: () => trackDownload('mac', 'arm64'),
    }]
  }
  return [{
    text: t("download-dmg") + ' (ARM)',
    href: artifacts.macDmgArm64,
    click: () => trackDownload('mac', 'arm64'),
  }, {
    text: 'X64',
    href: artifacts.macDmg,
    click: () => trackDownload('mac', 'x64'),
  }]
})


const arch = ref('')
onMounted(() => {
  detectMacArchitecture().then(architecture => {
    arch.value = architecture;
  });
})

</script>
