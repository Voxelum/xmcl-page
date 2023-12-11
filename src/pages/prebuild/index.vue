<template>
    <div class="w-full min-h-full pt-20 " id="prebuild">
        <div class="py-4 mb-10 gap-2 ">
            <div class="description-part ">
                <p class="leading-title px-60">{{ t('prebuild.download') }}</p>
                <p class="px-60 mb-10 text-xl text-[rgb(208,208,208)] font-medium text-left lg:mr-2 mr-7">
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
        <div class="ui selection large inverted list px-60">
            <div class="item " v-for="item of runs" @click="selected = item">
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

import prebuilds from 'virtual:prebuilds'

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
            href: "/list.min.css",
        },
        {
            rel: 'stylesheet',
            crossorigin: "anonymous",
            href: "/progress.min.css",
        }
    ],
})

type WorkflowRun = {
    name: string;
    display_title: string
    status: string;
    created_at: string;
    run_number: number;
    id: number;
    // Add more properties as needed
};

const { } = useRouter()


async function getRuns(): Promise<WorkflowRun[]> {
    console.log(import.meta.env.VITE_GITHUB_TOKEN)
    const runResponse = await fetch(`https://api.github.com/repos/voxelum/x-minecraft-launcher/actions/workflows/1220495/runs`, {
        headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
    });

    return processData(await runResponse.json() as any)
}

const { state } = useAsyncState(getRuns, [], {
    shallow: true
})

const processData = (data: { workflow_runs: WorkflowRun[] }) => {
    return data.workflow_runs.filter(r => r.status !== 'in_progress').sort((a, b) => a.created_at > b.created_at ? -1 : 1);
}

const runs = computed(() => {
    return state.value || (prebuilds ? processData(prebuilds) : [])
})

const selected = ref(runs.value[0])

watch(selected, (val) => {
    if (val) {
        (document.getElementById('app')?.firstChild as any)?.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
})

watch(state, (value) => {
    selected.value = value[0]
}, { immediate: true })


</script>
<style scoped>
.leading-title {
    @apply text-left font-bold sm: text-6xl sm:leading-19 lg:mr-2 mr-7 text-3xl leading-10;
}

.description-part {
    @apply flex flex-col items-start justify-center pt-20 gap-5;
}
</style>