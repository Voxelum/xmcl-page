<template>
  <div mac class="download-os-card mac">
    <div v-if="title" class="download-section-header">
      <div class="os-icon-wrapper mac">
        <div class="i-fa6-brands:apple"></div>
      </div>
      <h2 class="os-title">{{ t("downloadFor.mac") }}</h2>
    </div>
    <div class="download-buttons-flex" :class="{
      'w-full': organized,
      'justify-center': organized
    }">
      <div class="download-segmented-btn color-indigo" tabindex="0">
        <UIButton :disabled="!buttonData[0].href" :organized="organized" :href="buttonData[0].href"
          @click="buttonData[0].click()" :text="buttonData[0].text" :icon="'i-fa6-solid:compact-disc'" />
        <UILeftPointingButton :href="buttonData[1].href" @click="buttonData[1].click()"
          :text="buttonData[1].text" />
      </div>
      <UIButton class="color-amber" href="javascript:void(0)" :organized="organized"
        @click.prevent="openHomebrew" text="Homebrew" :icon="'i-fa6-solid:terminal'" />
    </div>

    <CliModal :isOpen="isModalOpen" type="homebrew" @close="isModalOpen = false" />
  </div>
</template>

<script lang=ts setup>
import { computed, inject, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { useDownloads } from '../composables/useDownloads';
import UIButton from './UIButton.vue';
import UILeftPointingButton from './UILeftPointingButton.vue';
import CliModal from './CliModal.vue';

const { title, organized } = defineProps({ title: Boolean, organized: Boolean })

const artifacts = useDownloads()
const { t } = useI18n()
const telemetry = inject<any>('telemetry', inject<any>('telemtry', { trackDownload: (category: string, action: string) => { } }))
const trackDownload = telemetry?.trackDownload || ((category: string, action: string) => { })

const isModalOpen = ref(false)

function openHomebrew() {
  trackDownload('mac', 'homebrew')
  isModalOpen.value = true
}

async function detectMacArchitecture() {
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

  const isMac = navigator.platform.toUpperCase().includes('MAC');
  const isAppleSilicon = navigator.userAgent.includes('Macintosh; ARM');

  if (isMac) {
    if (isAppleSilicon) {
      return 'arm';
    } else {
      return 'x64';
    }
  }

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

  return '';
}

const buttonData = computed(() => {
  if (arch.value !== 'arm') {
    return [{
      text: t("download-dmg") + ' (x64)',
      href: artifacts.macDmg,
      click: () => trackDownload('mac', 'x64'),
    }, {
      text: 'ARM64',
      href: artifacts.macDmgArm64,
      click: () => trackDownload('mac', 'arm64'),
    }]
  }
  return [{
    text: t("download-dmg") + ' (ARM64)',
    href: artifacts.macDmgArm64,
    click: () => trackDownload('mac', 'arm64'),
  }, {
    text: 'x64',
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
