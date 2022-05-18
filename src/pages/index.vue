<template>
  <div class="relative">
    <div class="section face min-h-100vh bg-gray-900 text-gray-200 lg:py-0 py-20">
      <div class="flex lg:flex-row flex-col p-1 items-center gap-4 pl-0 2xl:pl-20">
        <div main class="lg:w-1/2 description-part">
          <p class="leading-title" v-html="t('intro.first')"></p>
          <p class="leading-title">
            <span v-html="t('intro.second')"></span>
            <package-file-icon
              class="max-h-10 sm:max-h-18 inline-block px-2 max-w-15 sm:max-w-full sm:-mt-4 -mt-2"
            />!
          </p>
          <p
            class="text-xl text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7"
          >{{ t('intro.description') }}</p>
          <div class="w-full flex justify-center mt-10">
            <a
              class="ui version inverted basic label"
              target="_blank"
              href="https://github.com/voxelum/x-minecraft-launcher/releases"
            >
              <span>{{ github.latestVersion }}</span>
            </a>
          </div>
          <component :is="platformDownload" class="mt-10 w-full mb-10" :organized="true" />

          <span class="flex gap-2 items-start w-full mt-5 items-center justify-center">
            <a href="https://fabricmc.net/" target="_blank">
              <img src="../assets/fabric.png" class="h-15" />
            </a>
            <a
              href="https://files.minecraftforge.net/net/minecraftforge/forge/"
              target="_blank"
              class="relative"
            >
              <img src="../assets/forge.png" class="h-15" />
            </a>
            <a href="http://curseforge.com/minecraft" target="_blank" class="relative rounded">
              <curseforge-icon class="h-15 w-15" />
            </a>
            <a href="https://modrinth.com/" target="_blank">
              <modrinth-icon class="h-15 w-15" />
            </a>
          </span>
        </div>
        <div class="lg:w-1/2 side-image-container">
          <div
            class="bg-yellow-400 lg:p-15 sm:p-5 rounded-2xl lg:absolute -right-10 lg:min-h-70vh flex items-center"
          >
            <img src="../assets/home.webp" class="rounded-xl" />
          </div>
        </div>
      </div>
    </div>

    <div class="section flex flex-col min-h-80vh text-white features">
      <div class="flex gap-5 lg:flex-row flex-col flex-col-reverse pr-0 2xl:pr-20">
        <div class="lg:w-1/2 side-image-container">
          <div
            class="bg-orange-400 lg:p-15 sm:p-5 rounded-2xl lg:absolute -left-10 lg:min-h-70vh flex items-center"
          >
            <picture class="rounded-xl">
              <source srcset="../assets/install.webp" type="image/webp" />
              <source srcset="../assets/install.jpg" type="image/jpg" />
              <img src="../assets/install.png" />
            </picture>
          </div>
        </div>
        <div class="description-part lg:w-1/2">
          <p class="leading-title" v-html="t('gameInstall.title')"></p>
          <p
            class="text-xl text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7"
          >{{ t('gameInstall.description') }}</p>
          <div class="flex flex-col items-start w-full mt-3 text-gray-400">
            <a href="https://bmclapidoc.bangbang93.com/" class="text-lg" target="_blank">> BMCL API</a>
          </div>
        </div>
      </div>
    </div>

    <div class="section flex flex-col min-h-80vh text-white bg-gray-900">
      <div class="flex gap-5 lg:flex-row flex-col pl- 2xl:pl-20">
        <div class="description-part lg:w-1/2">
          <p class="leading-title" v-html="t('optimalDisk.title')"></p>
          <p
            class="text-xl text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7"
          >{{ t('optimalDisk.description') }}</p>
          <div class="flex flex-col items-start w-full mt-3 text-gray-400">
            <a
              href="https://en.wikipedia.org/wiki/Hard_link"
              class="text-lg"
              target="_blank"
            >> Hard link</a>
            <a
              href="https://en.wikipedia.org/wiki/Symbolic_link"
              class="text-lg"
              target="_blank"
            >> Symbolic link</a>
          </div>
        </div>
        <div class="lg:w-1/2 side-image-container">
          <div
            class="bg-red-400 lg:p-15 sm:p-5 rounded-2xl lg:absolute -right-10 lg:min-h-70vh flex items-center"
          >
            <picture class="rounded-xl">
              <source srcset="../assets/mods.webp" type="image/webp" />
              <source srcset="../assets/mods.jpg" type="image/jpg" />
              <img src="../assets/mods.png" />
            </picture>
          </div>
        </div>
      </div>
    </div>

    <div class="section flex flex-col min-h-80vh text-white">
      <div class="flex gap-5 lg:flex-row flex-col flex-col-reverse pr-0 2xl:pr-20">
        <div class="lg:w-1/2 side-image-container">
          <div
            class="bg-pink-300 lg:p-15 sm:p-5 rounded-2xl lg:absolute -left-10 lg:min-h-70vh flex items-center"
          >
            <picture class="rounded-xl">
              <source srcset="../assets/instances.webp" type="image/webp" />
              <source srcset="../assets/instances.jpg" type="image/jpg" />
              <img src="../assets/instances.png" />
            </picture>
          </div>
        </div>
        <div class="description-part lg:w-1/2">
          <p class="leading-title" v-html="t('cleanWorkspace.title')"></p>
          <p
            class="text-xl text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7"
          >{{ t('cleanWorkspace.description') }}</p>
        </div>
      </div>
    </div>

    <div class="section flex flex-col min-h-80vh text-white bg-gray-900">
      <div class="flex gap-5 lg:flex-row flex-col pl-0 2xl:pl-20">
        <div class="description-part lg:w-1/2">
          <p class="leading-title" v-html="t('communityIntegration.title')"></p>
          <p
            class="text-xl text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7"
          >{{ t('communityIntegration.description') }}</p>
          <div class="flex flex-col w-full mt-3 text-gray-400 items-start">
            <a href="https://curseforge.com/minecraft/" class="text-lg" target="_blank">> Curseforge</a>
            <a href="https://modrinth.com/" class="text-lg" target="_blank">> Modrinth</a>
            <a
              href="https://github.com/bs-community"
              class="text-lg"
              target="_blank"
            >> Blessing Skin</a>
            <a
              href="https://blessing.netlify.app/yggdrasil-api/authlib-injector.html"
              class="text-lg"
              target="_blank"
            >> Authlib Injector</a>
          </div>
        </div>
        <div class="lg:w-1/2 side-image-container">
          <div
            class="bg-white lg:p-15 sm:p-5 rounded-2xl lg:absolute -right-10 lg:min-h-70vh flex items-center"
          >
            <picture class="rounded-xl">
              <source srcset="../assets/modrinth.webp" type="image/webp" />
              <source srcset="../assets/modrinth.jpg" type="image/jpg" />
              <img src="../assets/modrinth.png" />
            </picture>
          </div>
        </div>
      </div>
    </div>

    <div class="section intro min-h-100vh">
      <div class="h-full flex flex-col justify-center h-100vh px-10 sm:px-40">
        <win-32 title />
        <mac title />
        <linux title />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang=ts setup>
import LinuxVue from '~/components/Linux.vue';
import MacVue from '~/components/Mac.vue';
import Win32Vue from '~/components/Win32.vue';
import { useGithubInfoStore, usePlatform } from "../composables";

const { t } = useI18n()

useHead({
  title: computed(() => t('title.index')),
  meta: computed(() => [
    {
      name: 'keywords',
      content: t('keywords')
    },
    {
      name: 'description',
      content: t('description')
    }
  ])
})

const github = useGithubInfoStore()
const platform = usePlatform()

const platformDownload = computed(() => {
  switch (platform) {
    case 'Linux': return LinuxVue
    case 'Mac': return MacVue
    default: return Win32Vue
  }
})

onMounted(() => {
  github.refresh()
})

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  top: 20%;
}

.bottom {
  bottom: 40%;
}

.features {
  @apply bg-gray-800;
}

/* .features::before {
  @apply transform-gpu h-20vh top-[100vh] absolute right-0 left-0 bg-gray-800 z-0 bg-gradient-to-b from-gray-900;
  content: "";
}

.features::after {
  @apply transform-gpu h-20vh top-[100vh] absolute right-0 left-0 bg-gray-900 z-0 bg-gradient-to-b from-gray-800;
  content: "";
} */

.leading-title {
  @apply text-left font-bold sm:text-6xl sm:leading-19 lg:mr-2 mr-7 text-3xl leading-10;
}

.description-part {
  @apply flex flex-col items-start justify-center lg:min-h-100vh pt-20 sm:px-20 px-8;
}

/* .features::after {
  @apply transform-gpu h-20vh absolute right-0 left-0 bg-gray-700 z-0 mt-10 grayscale-0 from-gray-700 bg-gradient-to-b;
  content: '';
} */

.side-image-container {
  @apply flex items-center overflow-hidden relative lg:min-h-100vh mt-10 lg:mt-0;
}

.active-feature {
  @apply bg-[rgba(255,255,255,0.1)];
}

.transition-list-enter-from {
  opacity: 0 !important;
  transform: translateY(-40px) scale(75%);
}

.transition-list-enter-to {
  opacity: 1 !important;
  transform: translateY(0px) scale(100%);
}

.transition-list-leave-from {
  opacity: 1 !important;
  transform: translateY(0px) scale(100%);
}

.transition-list-leave-to {
  opacity: 0 !important;
  transform: translateY(40px) scale(75%);
}
</style>
<route lang="yaml">
meta:
  layout: default
</route>
