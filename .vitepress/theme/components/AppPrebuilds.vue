<template>
    <div class="w-full min-h-full" id="prebuild">
        <div class="py-4 mb-10 gap-2 ">
            <div class="description-part ">
                <p class="leading-title px-60">{{ t('prebuild.download') }}</p>
                <p class="px-60 mb-10 text-xl dark:text-[rgb(208,208,208)] font-medium text-left lg:mr-2 mr-7">
                    {{ t('prebuild.downloadDescription') }}</p>
                <div class="bg-yellow-500 rounded px-60 w-full py-10" v-if="selected">
                    <h4 class="text-4xl text-white font-bold mb-6">#{{ selected.run_number }}</h4>
                    <p class="text-xl text-white font-medium mb-6">{{ selected.display_title }}</p>
                    <PrebuildDownloads :id="selected.id" />
                </div>
            </div>
        </div>
        <h4 class="ui header text-xl px-60">
            {{ t('prebuild.history') }}
        </h4>
        <div class="ui selection large list !px-60" :class="{ inverted: isDark }">
            <div class="item" v-for="item of runs" @click="selected = item">
                <object class="ui avatar image self-center object-center">
                    <i v-if="item.status === 'completed'" class="check circle icon text-green-400"></i>
                </object>
                <div class="content">
                    <a class="header">{{ item.display_title }}</a>
                    <div class="description">#{{ item.run_number }} {{ new
                        Date(item.created_at).toLocaleDateString() }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useAsyncState } from '@vueuse/core';
import { computed, ref, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { data } from '../composables/runs.data';
import '../styles/list.min.css';
import '../styles/progress.min.css';
import PrebuildDownloads from './PrebuildDownloads.vue';
import { getRuns } from '../composables/runs';
import { useData } from 'vitepress';
import { useI18nSync } from '../composables/useI18nSync';

const { t } = useI18n()
const { isDark } = useData()
useI18nSync()

watch(isDark, (val) => {
    console.log('isDark', val)
}, { immediate: true })

const { state, isReady } = useAsyncState(() => getRuns(import.meta.env.VITE_GITHUB_TOKEN ?? ''), [], {
    shallow: true
})

const runs = computed(() => {
    return (isReady.value && state.value) || data
})

const selected = ref(runs.value[0])

watch(selected, (val) => {
    if (val) {
        nextTick().then(() => {
            (document.getElementById('app')?.firstChild as any)?.scroll({
                top: 0,
                behavior: 'smooth'
            })
        })
    }
})

watch(state, (value) => {
    selected.value = value[0]
}, { immediate: true })


</script>
<style scoped>
.leading-title {
    @apply text-left font-bold sm:text-6xl sm:leading-19 lg:mr-2 mr-7 text-3xl leading-10;
}

.description-part {
    @apply flex flex-col items-start justify-center pt-20 gap-5;
}
</style>