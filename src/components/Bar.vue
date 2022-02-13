<template>
  <div class="following bar flex">
    <div class="flex flex-col items-center justify-center pl-5">
      <img src="../assets/logo.webp" width="28" class="cursor-pointer" @click="push('/')" />
    </div>
    <div class="ui container">
      <div class="ui large inverted secondary network menu">
        <a class="item" href="https://github.com/voxelum/x-minecraft-launcher">
          <i class="github square icon"></i>
          <p data-i18n="repository">{{ t("repository") }}</p>
        </a>
        <a class="item" href="https://github.com/ci010">
          <i class="github square icon"></i>
          <p>cijhn@hotmail.com</p>
        </a>
        <!-- <a class="item" @click="push('/docs')">{{ t('userManual') }}</a> -->
        <div class="right menu">
          <div class="item"></div>
          <div class="ui language floating dropdown link item" id="languages">
            <i class="world icon"></i>
            <div class="text" style="color: white">{{ t("lang") }}</div>
            <div class="menu">
              <div class="scrolling menu">
                <div class="item" value="zh" @click="setLocale('zh')">简体中文</div>
                <div class="item" value="en" @click="setLocale('en')">English</div>
                <!-- <div class="item" value="ru" @click="setLocale('ru')">Русский</div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="menu">
          <div class="item"></div>
          <div class="ui language floating dropdown link item" id="source">
            <i class="download icon"></i>
            <div class="text" style="color: white" data-i18n="auto-source">{{ t("auto-source") }}</div>
            <div class="menu">
              <div class="scrolling menu">
                <div class="item" @click="download.source = 'auto'">{{ t("auto-source") }}</div>
                <div class="item" @click="download.source = 'azure'">{{ t("azure-source") }}</div>
                <div class="item" @click="download.source = 'azure-ms'">{{ t("azure-ms-source") }}</div>
                <div class="item" @click="download.source = 'github'">{{ t("github-source") }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useDownloadStore } from "~/composables";

const download = useDownloadStore()

const { t, locale } = useI18n()
const { push } = useRouter()

function setLocale(newLocale: string) {
  locale.value = newLocale
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.following .bar {
  background-color: #666666;
}
</style>
