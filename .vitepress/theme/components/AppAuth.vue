<template>
  <div class="auth w-full min-h-full pt-20">
    <div class="w-full lg:px-40" :class="{ inverted: isDark }">
      <div class="icon-container">
        <i class="ui massive windows icon" :class="{ inverted: isDark }"></i>
        <i class="ui exchange large icon"></i>
        <!-- <i class="ui inverted large teal linkify icon"></i> -->
        <img :src="logo" width="132" height="132" />
      </div>
      <h1 class="ui section-header" style="line-height: 1.4;">
        <div class="text-5xl leading-20">{{ t("authSuccess") }}</div>
        <div class="ui grey text text-lg"
          style="color: rgb(222 222 222); padding-top: 10px">{{
            t("authSuccessTitle")
          }}</div>
      </h1>
      <div class="ui horizontal divider" :class="{ inverted: isDark }" style="margin-bottom: 40px;">{{ t("notWork") }}</div>
      <div class="message-container">
        <div class="ui icon positive large message">
          <i class="cat icon 2xl:absolute"></i>
          <div class="content">
            <div class="section-header">{{ t("redirectHelperTitle") }}</div>
            <p>{{ t("redirectHelperMessage") }}</p>
            <button class="ui teal right labeled icon button" @click="openApp" draggable="true"
              @dragstart="onDragStart">
              <i class="play icon"></i>
              {{ t("openInAppButton") }}
            </button>
          </div>
        </div>
        <div style="color: rgb(222 222 222);  line-height: 1.4; font-size: 1.4rem; padding-top: 10px">{{
          t("nothingWork")
        }}</div>
        <div class="w-full flex justify-center mt-10">
          <a class="ui version basic label text-sm" :class="{ inverted: isDark }" target="_blank"
            href="https://github.com/voxelum/x-minecraft-launcher/releases">{{ data.latestVersion }}</a>
        </div>
        <div class="flex item-center w-full justify-center mb-20 mt-10">
          <component :is="componentByPlatform" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useUrlSearchParams } from '@vueuse/core';
import { computed, onMounted } from "vue";
import { useI18n } from 'vue-i18n';
import logo from "../assets/logo.png";
import LinuxVue from "../components/Linux.vue";
import MacVue from "../components/Mac.vue";
import Win32Vue from "../components/Win32.vue";
import { data } from '../composables/latest.data';
import { usePlatform } from '../composables/usePlatform';
import '../styles/divider.min.css';
import '../styles/message.min.css';
import '../styles/container.min.css';
import '../styles/label.min.css';
import { useData } from 'vitepress';
import { useI18nSync } from '../composables/useI18nSync';
import { useGFW } from '../composables/useGFW';

const { isDark } = useData()
const { t } = useI18n()
useGFW()
useI18nSync()

const query = useUrlSearchParams()

const callbackUrl = computed(
  () => `xmcl://launcher/auth?code=${query.code}`
);

const openApp = () => {
  window.location.assign(callbackUrl.value);
  const port = query.port || 25555
  fetch(`http://localhost:${port}/auth?code=${query.code}`)
};
const onDragStart = (e: DragEvent) => {
  e.dataTransfer!.effectAllowed = "copyLink";
  e.dataTransfer!.setData("xmcl/url", callbackUrl.value);
};
onMounted(() => {
  openApp()
});
const platform = usePlatform()

const componentByPlatform = computed(() => {
  if (platform === 'Mac') return MacVue
  if (platform === 'Linux') return LinuxVue
  return Win32Vue
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.auth {
  text-align: center;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  overflow: auto;
  min-height: 600px;
  min-width: 450px;
}

.message-container {
  padding: 0 15px;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 540px) {
  .message-container {
    padding: 0 0px;
  }

  .icon-container {
    display: none;
  }
}

@media screen and (max-height: 740px) {
  .icon-container {
    display: none;
  }
}
</style>
