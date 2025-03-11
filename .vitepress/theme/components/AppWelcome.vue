<template>
    <div class="relative transition-colors">
        <section class="section dark:bg-gray-900 bg-gray-200 face min-h-100vh dark:text-gray-200 lg:py-0 lg:py-20">
            <div class="flex lg:flex-row flex-col-reverse p-1 items-center gap-4 pl-0 2xl:pl-20">
                <div main class="lg:w-1/2 description-part">
                    <div v-motion :initial="{ opacity: 0, y: 10 }" :visibleOnce="transitionFinal">
                        <i18n-t class="leading-title" keypath="intro.first.body" tag="p" for="tos">
                            <template v-slot:openSource>
                                <span class="text-[rgb(61,239,233)]">{{ t('intro.first.openSource') }}</span>
                            </template>

                            <template v-slot:modernUx>
                                <span class="text-[rgb(107,217,104)]">{{ t('intro.first.modernUx') }}</span>
                            </template>
                        </i18n-t>
                        <p class="leading-title">
                            <i18n-t keypath="intro.second.body" tag="span">

                                <template v-slot:diskEfficient>
                                    <span class="text-yellow-300">{{ t('intro.second.diskEfficient') }}</span>
                                </template>

                                <template v-slot:mods>
                                    <span class="text-amber-600">{{ t('intro.second.mods') }}</span>
                                </template>
                            </i18n-t>
                        </p>
                    </div>
                    <p v-motion :initial="{ opacity: 0, y: 10 }" :visibleOnce="{
                        ...transitionFinal,
                        transition: {
                            ...transitionFinal.transition,
                            delay: 400
                        }
                    }" class="text-xl dark:text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7">{{
                        t('intro.description')
                        }}</p>

                    <div class="flex flex-col" v-motion :initial="{ opacity: 0, y: 10 }" :visibleOnce="{
                        ...transitionFinal,
                        transition: {
                            ...transitionFinal.transition,
                            delay: 800
                        }
                    }">
                        <div class="w-full flex justify-center mt-10 gap-2">
                            <a class="ui version inverted basic label text-sm" target="_blank"
                                href="https://github.com/voxelum/x-minecraft-launcher/releases">
                                <span>{{ data.latestVersion }}</span>
                            </a>
                        </div>

                        <ClientOnly>
                            <component :is="platformDownload" class="mt-10 w-full mb-5" :organized="true" />
                            <div v-if="platform === 'Mac'"
                                class="text-center text-gray-400 warning custom-block lg:mx-8 mb-2 pb-4! text-lg!">
                                <i18n-t keypath="downloadMacHint.content" tag="p">
                                    <template v-slot:link>
                                        <a :href="`/${locale}/guide/install#macos`" class="font-bold capitalize">
                                            {{ t('downloadMacHint.link') }}
                                        </a>
                                    </template>
                                </i18n-t>
                            </div>
                        </ClientOnly>

                        <a class="ui link cursor-pointer self-center font-medium italic" :href="prebuildsUrl">{{
                            t('prebuild.entryHint') }}</a>

                        <span class="flex gap-2 items-start w-full mt-5 items-center justify-center">
                            <a href="https://fabricmc.net/" target="_blank">
                                <AppPicture decoding="async" :value="fabricPicture" class="h-15 w-15" alt="fabric" />
                            </a>
                            <a href="https://files.minecraftforge.net/net/minecraftforge/forge/" target="_blank"
                                class="relative">
                                <AppPicture decoding="async" :value="forgePicture" class="h-15 w-15" alt="forge" />
                            </a>
                            <a href="https://neoforged.net/" target="_blank" class="relative">
                                <AppPicture decoding="async" :value="neoforgedPicture" class="h-15 w-15"
                                    alt="neoforged" />
                            </a>
                            <a href="http://curseforge.com/minecraft" target="_blank" class="relative rounded">
                                <curseforge-icon class="h-15 w-15" alt="" />
                            </a>
                            <a href="https://modrinth.com/" target="_blank">
                                <modrinth-icon class="h-15 w-15" />
                            </a>
                            <a href="https://quiltmc.org/" target="_blank">
                                <quilt-icon class="h-15 w-15" />
                            </a>
                        </span>
                    </div>
                </div>
                <div class="lg:w-1/2 side-image-container">
                    <div :initial="{ opacity: 0, y: 10 }" :visibleOnce="transitionFinal"
                        class="bg-yellow-400 lg:p-15 sm:p-5 rounded-2xl lg:absolute -right-10 lg:min-h-70vh flex items-center">
                        <AppPicture decoding="async" :value="homePicture" alt="Launcher home page screenshot" />
                    </div>
                </div>
            </div>
        </section>

        <section class="section flex flex-col min-h-80vh dark:text-white dark:bg-gray-800 bg-gray-100">
            <div class="flex gap-5 lg:flex-row flex-col-reverse pr-0 2xl:pr-20">
                <div class="lg:w-1/2 side-image-container">
                    <div v-motion :initial="{ opacity: 0, x: -100 }" :visibleOnce="transitionFinal"
                        class="bg-orange-400 lg:p-15 sm:p-5 rounded-2xl lg:absolute -left-10 lg:min-h-70vh flex items-center">
                        <div class="rounded-xl relative">
                            <AppPicture :value="installPicture" loading="lazy" decoding="async"
                                alt="Install Minecraft process screenshots" />
                            <AppPicture class="absolute left-0 top-0 transition-all duration-300"
                                :class="{ 'opacity-0': !hoverInstall }" :value="install2Picture" loading="lazy"
                                decoding="async" alt="Install Minecraft process screenshots" />
                        </div>
                    </div>
                </div>
                <div class="description-part lg:w-1/2" v-motion :initial="{ opacity: 0, x: 100 }"
                    :visibleOnce="transitionFinal">
                    <i18n-t class="leading-title" keypath="gameInstall.title.body" tag="p"
                        @mouseenter="hoverInstall = true" @mouseleave="hoverInstall = false">

                        <template v-slot:gameInstall>
                            <span class="text-green-400"> {{ t('gameInstall.title.gameInstall') }}</span>
                        </template>
                    </i18n-t>
                    <p class="text-xl dark:text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7">{{
                        t('gameInstall.description') }}</p>
                    <div class="flex flex-col items-start w-full mt-3 text-gray-400">
                        <a href="https://bmclapidoc.bangbang93.com/" class="text-lg" target="_blank">> BMCL API</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="section flex flex-col min-h-80vh dark:text-white dark:bg-gray-900 bg-gray-300">
            <div class="flex gap-5 lg:flex-row flex-col pl- 2xl:pl-20">
                <div class="description-part lg:w-1/2" v-motion :initial="{ opacity: 0, x: -100 }"
                    :visibleOnce="transitionFinal">
                    <i18n-t tag="p" class="leading-title" keypath="optimalDisk.title.body"
                        @mouseenter="hoverResource = true" @mouseleave="hoverResource = false">

                        <template v-slot:optimal>
                            <span class="dark:text-yellow-300 text-yello-600"> {{ t('optimalDisk.title.optimal') }}
                            </span>
                        </template>

                        <template v-slot:massiveResources>
                            <span class="text-red-700">{{ t('optimalDisk.title.massiveResources') }}</span>
                        </template>
                    </i18n-t>
                    <p class="text-xl dark:text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7">{{
                        t('optimalDisk.description') }}</p>
                    <div class="flex flex-col items-start w-full mt-3 text-gray-400">
                        <a href="https://en.wikipedia.org/wiki/Hard_link" class="text-lg" target="_blank">> Hard
                            link</a>
                        <a href="https://en.wikipedia.org/wiki/Symbolic_link" class="text-lg" target="_blank">> Symbolic
                            link</a>
                    </div>
                </div>
                <div class="lg:w-1/2 side-image-container">
                    <div v-motion :initial="{ opacity: 0, x: 100 }" :visibleOnce="transitionFinal"
                        class="bg-red-400 lg:p-15 sm:p-5 rounded-2xl lg:absolute -right-10 lg:min-h-70vh flex items-center">
                        <div class="rounded-xl relative">
                            <AppPicture :value="modsPicture" loading="lazy" decoding="async"
                                alt="Mods page screenshot" />
                            <AppPicture class="absolute left-0 top-0 transition-all duration-300"
                                :class="{ 'opacity-0': !hoverResource }" :value="resourcePackPicture" loading="lazy"
                                decoding="async" alt="Resource packs page screenshot" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section flex flex-col min-h-80vh dark:text-white">
            <div class="flex gap-5 lg:flex-row flex-col-reverse pr-0 2xl:pr-20">
                <div class="lg:w-1/2 side-image-container">
                    <div v-motion :initial="{ opacity: 0, x: -100 }" :visibleOnce="transitionFinal"
                        class="bg-pink-300 lg:p-15 sm:p-5 rounded-2xl lg:absolute -left-10 lg:min-h-70vh flex items-center">
                        <div class="rounded-xl relative">
                            <AppPicture :value="instancesPicture" loading="lazy" decoding="async"
                                alt="Instance manage page screenshot" />
                            <AppPicture class="absolute left-0 top-0 transition-all duration-300"
                                :class="{ 'opacity-0': !hoverInstance }" :value="instancesCreatePicture" loading="lazy"
                                decoding="async" alt="Instance creation dialog screenshot" />
                        </div>
                    </div>
                </div>
                <div class="description-part lg:w-1/2" v-motion :initial="{ opacity: 0, x: 100 }"
                    :visibleOnce="transitionFinal">
                    <i18n-t tag="p" class="leading-title" keypath="cleanWorkspace.title.body"
                        @mouseenter="hoverInstance = true" @mouseleave="hoverInstance = false">

                        <template v-slot:clean>
                            <span class="text-[rgb(61,239,233)]">{{ t('cleanWorkspace.title.clean') }}</span>
                        </template>
                    </i18n-t>
                    <p class="text-xl dark:text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7">{{
                        t('cleanWorkspace.description') }}</p>
                </div>
            </div>
        </section>

        <section class="section flex flex-col min-h-80vh dark:text-white dark:bg-gray-900 bg-gray-200">
            <div class="flex gap-5 lg:flex-row flex-col pl-0 2xl:pl-20">
                <div class="description-part lg:w-1/2" v-motion :initial="{ opacity: 0, x: -100 }"
                    :visibleOnce="transitionFinal">
                    <i18n-t class="leading-title" keypath="communityIntegration.title.body" tag="p"
                        @mouseenter="hoverCommunity = true" @mouseleave="hoverCommunity = false">

                        <template v-slot:multipleCommunities>
                            <span class="text-emerald-700">{{ t('communityIntegration.title.multipleCommunities')
                            }}</span>
                        </template>
                    </i18n-t>
                    <p class="text-xl dark:text-[rgb(208,208,208)] font-medium mt-5 text-left lg:mr-2 mr-7">{{
                        t('communityIntegration.description') }}</p>
                    <div class="flex flex-col w-full mt-3 text-gray-400 items-start">
                        <a href="https://curseforge.com/minecraft/" class="text-lg" target="_blank">> Curseforge</a>
                        <a href="https://modrinth.com/" class="text-lg" target="_blank">> Modrinth</a>
                        <a href="https://github.com/bs-community" class="text-lg" target="_blank">> Blessing Skin</a>
                        <a href="https://blessing.netlify.app/yggdrasil-api/authlib-injector.html" class="text-lg"
                            target="_blank">>
                            Authlib Injector</a>
                    </div>
                </div>
                <div class="lg:w-1/2 side-image-container">
                    <div v-motion :initial="{ opacity: 0, x: 100 }" :visibleOnce="transitionFinal"
                        class="bg-white lg:p-15 sm:p-5 rounded-2xl lg:absolute -right-10 lg:min-h-70vh flex items-center">
                        <div class="rounded-xl relative">
                            <AppPicture :value="modrinthPicture" loading="lazy" decoding="async"
                                alt="Modrinth page screenshot" />
                            <AppPicture class="absolute left-0 top-0 transition-all duration-300"
                                :class="{ 'opacity-0': !hoverCommunity }" :value="curseforgePicture" loading="lazy"
                                decoding="async" alt="Curseforge page screenshot" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section intro min-h-100vh mb-10">
            <div class="flex flex-col justify-center min-h-100vh px-10 sm:px-40">
                <win32 title v-motion :initial="{ opacity: 0, y: 50 }" :visibleOnce="transitionFinal" />
                <mac title v-motion :initial="{ opacity: 0, y: 50 }" :visibleOnce="transitionFinal" />
                <linux title v-motion :initial="{ opacity: 0, y: 50 }" :visibleOnce="transitionFinal" />
            </div>
        </section>
    </div>
</template>

<script lang=ts setup>
import 'uno.css';
import { useData, useRoute } from 'vitepress';
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { data } from '../composables/latest.data';
import { useGFW } from '../composables/useGFW';
import { useI18nSync } from '../composables/useI18nSync';
import { usePlatform } from '../composables/usePlatform';
import '../styles/button.min.css';
import '../styles/label.min.css';
import AppPicture from './AppPicture.vue';
import CurseforgeIcon from './CurseforgeIcon.vue';
import Linux from './Linux.vue';
import Mac from './Mac.vue';
import ModrinthIcon from './ModrinthIcon.vue';
import QuiltIcon from './QuiltIcon.vue';
import Win32 from './Win32.vue';

import curseforgePicture from "../assets/curseforge.png?w=200;400;800&format=avif;webp;jpg&as=picture";
import fabricPicture from "../assets/fabric.png?w=60&format=avif;webp;jpg&as=picture";
import forgePicture from "../assets/forge.png?w=60&format=avif;webp;jpg&as=picture";
import homePicture from '../assets/home.png?w=200;400;800&format=avif;webp;jpg&as=picture';
import install2Picture from '../assets/install-2.png?w=200;400;800&format=avif;webp;jpg&as=picture';
import installPicture from '../assets/install.png?w=200;400;800&format=avif;webp;jpg&as=picture';
import instancesCreatePicture from "../assets/instances-create.png?w=200;400;800&format=avif;webp;jpg&as=picture";
import instancesPicture from "../assets/instances.png?w=200;400;800&format=avif;webp;jpg&as=picture";
import modrinthPicture from "../assets/modrinth.png?w=200;400;800&format=avif;webp;jpg&as=picture";
import modsPicture from "../assets/mods.png?w=200;400;800&format=avif;webp;jpg&as=picture";
import neoforgedPicture from "../assets/neoforged.png?w=60&format=avif;webp;jpg&as=picture";
import resourcePackPicture from "../assets/resourcePack.png?w=200;400;800&format=avif;webp;jpg&as=picture";
// import { useIntervalFn, useStyleTag, useTimeout } from '@vueuse/core';

const { t, locale } = useI18n()
const { site } = useData()
const route = useRoute()

onMounted(() => {
    console.log(route.path)
})

const transitionFinal = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
        ease: [0.22, 1, 0.36, 1],
        duration: 700,
        delay: 200
    }
}

useGFW()
useI18nSync()

// const { isDark } = useData()

const prebuildsUrl = computed(() => `${site.value.base}${locale.value}/prebuilds`)

const platform = usePlatform()

const hoverInstall = ref(false)
const hoverResource = ref(false)
const hoverInstance = ref(false)
const hoverCommunity = ref(false)

const platformDownload = computed(() => {
    switch (platform) {
        case 'Linux': return Linux
        case 'Mac': return Mac
        default:
    }
    if (window.navigator.platform.startsWith('Linux')) {
        return Linux
    }
    return Win32
})

// const lightColors = [
//     'rgb(229 231 235 / 1)',
//     'rgb(243 244 246 / 1)',
//     'rgb(209 213 219 / 1)',
//     'transparent',
// ]
// const darkColors = [
//     'rgb(17 24 39 / 1)',
//     'rgb(31 41 55 / 1)',
//     'rgb(17 24 39 / 1)',
//     'transparent',
// ]
// const index = ref(0)
// const bg = computed(() => isDark.value ? darkColors[index.value] : lightColors[index.value])
// useIntervalFn(() => {
//     // increment index
//     index.value = (index.value + 1) % lightColors.length
// }, 10_000)

// useStyleTag(computed(() => `
// .VPContent {
//     background: transparent;
// }
// .VPFooter {
//     --vp-c-bg: ${bg.value};
//     transition: background 1s;
// }
// .Layout {
//     background: ${bg.value};
//     transition: background 1s;
// }
// `))

</script>

<style scoped>
.top {
    top: 20%;
}

.bottom {
    bottom: 40%;
}

.leading-title {
    @apply text-left font-bold sm:text-6xl sm:leading-19 lg:mr-2 mr-7 text-3xl leading-10;
    /* text-align: left;
    font-weight: 700;
    margin-right: 1.75rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
    line-height: 2.5rem; */
}

.description-part {
    @apply flex flex-col items-start justify-center lg:min-h-100vh pt-20 sm:px-8 px-8 lg:pb-10;
}

/* .features::after {
    @apply transform-gpu h-20vh absolute right-0 left-0 bg-gray-700 z-0 mt-10 grayscale-0 from-gray-700 bg-gradient-to-b;
    content: '';
  } */

.side-image-container {
    @apply flex items-center overflow-hidden relative lg:min-h-100vh mt-10 lg:mt-0;
}

.active-feature {
    @apply bg-[rgba(255, 255, 255, 0.1)];
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

<style>
.icon {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>