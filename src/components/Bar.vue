<template>
  <div class="following bar flex bg-black">
    <div class="flex items-center justify-center px-5 gap-5 cursor-pointer" @click="push('/')">
      <!-- <img src="../assets/Compact White.png" width="28" /> -->
      <span class="font-bold">XMCL</span>
    </div>
    <div class="ui container">
      <div class="ui large inverted secondary network menu">
        <a class="item" href="https://github.com/voxelum/x-minecraft-launcher" target="_blank">
          <i class="github square icon m-0 sm:mr-2"></i>
          <p data-i18n="repository" class="sm:block hidden">{{ t("repository") }}</p>
        </a>
        <a class="item" href="https://discord.gg/W5XVwYY7GQ" target="_blank">
          <i class="discord square icon m-0 sm:mr-2"></i>
          <p class="sm:block hidden">Discord</p>
        </a>
        <a class="item" :href="docUrl">
          <i class="book icon m-0 sm:mr-2"></i>
          <p class="sm:block hidden">{{ t("docs") }}</p>
        </a>
        <a :href="changelogUrl" class="item">
          <i class="history icon m-0 sm:mr-2"></i>
          <p class="sm:block hidden">{{ t('fullChangelog') }}</p>
        </a>

        <!-- <div class="right menu">
          <div class="item"></div>
          <div class="ui language floating dropdown link item" id="languages">
            <i class="world icon"></i>
            <div class="text" style="color: white">{{ t("lang") }}</div>
            <div class="menu">
              <div class="scrolling menu">
                <div class="item" value="zh" @click="setLocale('zh')">简体中文</div>
                <div class="item" value="en" @click="setLocale('en')">English</div>
              </div>
            </div>
          </div>
        </div>-->
        <Menu as="div" class="relative inline-block text-left right menu flex">
          <MenuButton class="ui language floating dropdown link item">
            <i class="world icon"></i>
            <div class="text-white">{{ t("lang") }}</div>
          </MenuButton>

          <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
              class="ui dropdown origin-bottom-left bg-dark-300 absolute left-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div class="py-1">
                <MenuItem class="cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
                <div class="item" value="en" @click="setLocale('en')">English</div>
                </MenuItem>
                <MenuItem class="cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
                <div class="item" value="zh" @click="setLocale('zh')">简体中文</div>
                </MenuItem>
                <MenuItem class="cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
                <div class="item" value="ru" @click="setLocale('ru')">Русский</div>
                </MenuItem>
                <MenuItem class="cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
                <div class="item" value="fr" @click="setLocale('fr')">French</div>
                </MenuItem>
                <MenuItem class="cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
                <div class="item" value="fr" @click="setLocale('uk')">Українська мова</div>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <Menu as="div" class="relative inline-block text-left menu sm:flex hidden">
          <MenuButton class="ui language floating dropdown link item">
            <i class="download icon"></i>
            <div class="text-white">{{ mapping[download.source] }}</div>
          </MenuButton>

          <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
              class="ui dropdown origin-bottom-left bg-dark-300 absolute left-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1">
                <MenuItem class="cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
                <div class="item" @click="download.source = 'auto'">{{ t("auto-source") }}</div>
                </MenuItem>
                <MenuItem class="cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
                <div class="item" @click="download.source = 'azure'">{{ t("azure-source") }}</div>
                </MenuItem>
                <MenuItem class="cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
                <div class="item" @click="download.source = 'azure-ms'">{{ t("azure-ms-source") }}</div>
                </MenuItem>
                <MenuItem class="cursor-pointer hover:bg-[rgba(0,0,0,0.1)]">
                <div class="item" @click="download.source = 'github'">{{ t("github-source") }}</div>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useDownloadStore } from "~/composables";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const download = useDownloadStore()

const { t, locale } = useI18n()
const { push } = useRouter()

function setLocale(newLocale: string) {
  locale.value = newLocale
}

const mapping = reactive({
  ['auto']: computed(() => t("auto-source")),
  ['azure']: computed(() => t("azure-source")),
  ['azure-ms']: computed(() => t("azure-ms-source")),
  ['github']: computed(() => t("github-source")),
})

// const docUrl = computed(() => ((import.meta.env.PROD || import.meta.env.SSR) ? 'https://docs.xmcl.app/' : 'http://localhost:9000/') + locale.value + '/')
const docUrl = 'https://docs.xmcl.app/'
const changelogUrl = computed(() => {
  const l = locale.value.startsWith('zh') ? 'zh' : 'en'
  return `https://docs.xmcl.app/${l}/changelogs`
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .following.bar {
  background-color: #66666671;
  @apply rounded-b-2xl;
} */

.dropdown .item {
  @apply hover: bg-[rgba(123, 123, 123, 0.5)];
}
</style>
