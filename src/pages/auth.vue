<template>
  <div class="auth w-full min-h-full pt-20">
    <div class="ui inverted container">
      <div class="icon-container">
        <i class="ui inverted massive windows icon"></i>
        <i class="ui inverted exchange large icon"></i>
        <!-- <i class="ui inverted large teal linkify icon"></i> -->
        <img :src="logo" width="132" height="132" />
      </div>
      <h1 class="ui inverted header" style="line-height: 1.4;">
        <div style="font-size: 1.25em">{{ t("authSuccess") }}</div>
        <div class="ui grey text"
          style="font-size: 0.55em; color: rgb(222 222 222); font-weight: 100; padding-top: 10px">{{
            t("authSuccessTitle")
          }}</div>
      </h1>
      <div class="ui horizontal inverted divider" style="margin-bottom: 40px;">{{ t("notWork") }}</div>
      <div class="message-container">
        <div class="ui icon positive large message">
          <i style="position: absolute" class="cat icon"></i>
          <div class="content">
            <div class="header">{{ t("redirectHelperTitle") }}</div>
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
          <a class="ui version inverted basic label" target="_blank"
            href="https://github.com/voxelum/x-minecraft-launcher/releases">{{ github.latestVersion }}</a>
        </div>
        <div class="flex item-center w-full justify-center mb-20 mt-10">
          <component :is="componentByPlatform" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import logo from "~/assets/logo.webp";
import LinuxVue from "~/components/Linux.vue";
import MacVue from "~/components/Mac.vue";
import Win32Vue from "~/components/Win32.vue";
import { useGithubInfoStore, usePlatform } from "~/composables";

const github = useGithubInfoStore()
const { t } = useI18n()

useHead({
  title: computed(() => t('title.auth')),
  meta: computed(() => [
    {
      name: 'keywords',
      content: t('keywords')
    },
    {
      name: 'description',
      content: t('description')
    }
  ]),
  link: [
    {
      rel: 'stylesheet',
      crossorigin: "anonymous",
      href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.6/dist/components/message.min.css",
    },
    {
      rel: 'stylesheet',
      crossorigin: "anonymous",
      href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.6/dist/components/divider.min.css",
    }
  ]
})

const query = useUrlSearchParams()


const callbackUrl = computed(
  () => `xmcl://launcher/auth?code=${query.code}`
);

const openApp = () => {
  window.location.assign(callbackUrl.value);
  fetch(`http://localhost:25555/auth?code=${query.code}`)
};
const onDragStart = (e: DragEvent) => {
  e.dataTransfer!.effectAllowed = "copyLink";
  e.dataTransfer!.setData("xmcl/url", callbackUrl.value);
};
onMounted(() => {
  window.location.assign(callbackUrl.value);
  fetch(`http://localhost:25555/auth?code=${query.code}`)
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
  background: #1b1c1d;
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
