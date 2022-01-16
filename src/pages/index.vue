<template>
  <div id="fullpage" class>
    <!-- <div class=" bg-light-50 w-10 h-10 absolute z-100 top-120">1</div> -->
    <div class="section face h-100vh">
      <div main class="ui container h-full flex flex-col items-center justify-center">
        <a
          class="ui black version label"
          target="_blank"
          href="https://github.com/voxelum/x-minecraft-launcher/releases"
        >{{ github.latestVersion }}</a>
        <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
          <div style="font-size: 1.75em; font-weight: bold">X Minecraft Launcher</div>
          <div style="font-size: 0.75em">KeyStone UI</div>
          <div style="font-size: 0.75em">{{ t("launcher.description") }}</div>
        </h1>
      </div>
      <component :is="platform" />
    </div>
    <div class="section flex flex-col p-15 pt-25 bg-red-500 text-white">
      <h1 class="text-5xl text-center w-full font-bold">{{ t('features') }}</h1>
      <div class="flex">
        <div class="w-250 max-w-250 relative">
          <div class="flex flex-col mt-30">
            <keep-alive>
              <transition-group name="transition-list">
                <div
                  v-for="(item, index) in visibled"
                  :key="item.id"
                  class="rounded hover:bg-[rgba(255,255,255,0.4)] p-5 cursor-pointer feature w-200"
                  :class="{ 'active-feature': index === 1 }"
                  @mouseenter="onMouseEnter(index)"
                  @mouseleave="onMouseLeave()"
                  @click="go(index - 1)"
                >
                  <h1 class="text-3xl font-bold">{{ item.title }}</h1>
                  <p>{{ item.contents }}</p>
                </div>
              </transition-group>
            </keep-alive>
          </div>
        </div>
        <div class="p-25">
          <img
            class="rounded shadow-black shadow-2xl"
            style="width: 920px;"
            :src="activeItem.image"
          />
        </div>
      </div>
    </div>
    <div class="section intro h-100vh">
      <div class="ui container h-full flex flex-col justify-center">
        <win-32 />
        <mac />
        <linux />
      </div>
      <div class="w-full absolute bottom-0 flex items-center justify-center">
        <div class="flex flex-col items-center pb-2">
          <router-link to="privacy">Software Privacy</router-link>
          <div>Copyright © 2020-2021 CI010</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import { useGithubInfoStore, usePlatform } from "../composables";
import i18nGif from '../assets/i18n.webp'
import modGif from '../assets/mod.webp'
import resourcePackGif from '../assets/resourcepack.webp'
import curseforgeGif from '../assets/curseforge.webp'
import { Ref } from "vue";

const github = useGithubInfoStore()
const platform = usePlatform()
const { t } = useI18n()

useHead({
  title: 'XMCL',
})

// onMounted(() => {
//   github.refresh()
// })

const showingIndex = ref(-1)
const activeIndex = ref(1)

const activeItem = computed(() => paused.value && showingIndex.value !== -1 ? items.value[showingIndex.value] : items.value[activeIndex.value])

const paused = ref(false)

interface Feature {
  id: number,
  title: string
  contents: string
  image: string
  time: number
}

let freeId = -1

const items: Ref<Feature[]> = ref([{
  id: 0,
  title: computed(() => t('feature.multilingual.title')),
  contents: computed(() => t('feature.multilingual.description')),
  image: i18nGif,
  time: 10,
}, {
  id: 1,
  title: computed(() => t('feature.modManage.title')),
  contents: computed(() => t('feature.modManage.description')),
  image: modGif,
  time: 10,
}, {
  id: 2,
  title: computed(() => t('feature.curseforgeIntegration.title')),
  contents: computed(() => t('feature.curseforgeIntegration.description')),
  image: curseforgeGif,
  time: 10,
}, {
  id: 3,
  title: computed(() => t('feature.resourcepackManage.title')),
  contents: computed(() => t('feature.resourcepackManage.description')),
  image: resourcePackGif,
  time: 10,
}])

const visibled = computed(() => items.value.filter((v, i) => i <= 2))

function go(offset: number) {
  if (offset === 0) {
    showingIndex.value = 1
    return
  }
  if (offset === 1) {
    showingIndex.value = 2
  } else {
    showingIndex.value = 0
  }
}

function next() {
  const last = items.value.pop()
  if (last) {
    const lastId = last.id
    last.id = freeId
    freeId = lastId
    items.value.unshift(last)
  }
}

function onMouseEnter(index: number) {
  showingIndex.value = index
  paused.value = true
}

function onMouseLeave() {
  paused.value = false
  showingIndex.value = -1
}

useIntervalFn(() => {
  if (!paused.value) {
    next()
  }
}, 3000)

onMounted(() => {
  $("body").pagepiling({
    // onLeave: function (index, nextIndex, direction) {
    // },
  });
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

.feature {
  transition-property: opacity transform background-color;
  transition-duration: 1s;
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
