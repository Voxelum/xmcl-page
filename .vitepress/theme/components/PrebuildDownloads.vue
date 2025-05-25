<template>
    <div class="flex flex-col gap-4">
        <div class="flex lg:flex-row flex-col gap-4">
            <a :class="{ positive: platform === 'Win32', loading: fetching }"
                class="ui huge inverted download button" @click="onDownload(windowsArtifact)">
                <span>Windows</span>
            </a>
            <div class="ui labeled button" tabindex="0">
                <a class="ui huge purple download button w-full"
                    :class="{ positive: platform === 'Mac', loading: fetching }" @click="onDownload(macArtifact)">
                    <span>MacOS</span>
                </a>
                <a class="ui basic inverted green left pointing label" :class="{ disabled: fetching }"
                    @click="onDownload(macArm64Artifact)">
                    ARM64
                </a>
            </div>
            <div class="ui labeled button" tabindex="0">
                <a :class="{ positive: platform === 'Linux', loading: fetching }"
                    class="ui huge orange download button w-full" @click="onDownload(linuxArtifact)">
                    <span>Linux</span>
                </a>
                <a class="ui basic inverted green left pointing label" :class="{ disabled: fetching }"
                    @click="onDownload(linuxArm64Artifact)">
                    ARM64
                </a>
            </div>
        </div>
        <div class="w-full">
            <div v-if="downloadProgress" class="ui blue progress active w-full" :data-percent="downloadProgress">
                <div class="bar" style="transition-duration: 300ms; display: block;"
                    :style="{ width: downloadProgress + '%' }">
                    <div class="progress">{{ downloadProgress }}%</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { usePlatform } from '../composables/usePlatform';
import { useAsyncState } from '@vueuse/core';
const owner: string = 'voxelum';
const repo: string = 'x-minecraft-launcher';
const platform = usePlatform()

const props = defineProps<{
    id: number
}>()

type Artifact = {
    name: string;
    size_in_bytes: number;
    archive_download_url: string;
};

const tName = (name: string) => {
    return tDownload(name) + tSuffix(name)
}
const tDownload = (name: string) => {
    if (name.startsWith('win-')) return 'Windows'
    if (name.startsWith('mac-')) return 'MacOS'
    if (name.startsWith('linux-')) return 'Linux'
    return name
}
const tSuffix = (name: string) => {
    if (name.endsWith('-arm64')) return ' Arm64.zip'
    return '.zip'
}
const macArtifact = computed(() => artifacts.value.find(a => a.name.startsWith('mac-')))
const windowsArtifact = computed(() => artifacts.value.find(a => a.name.startsWith('win-')))
const linuxArtifact = computed(() => artifacts.value.find(a => a.name.startsWith('linux-')))
const linuxArm64Artifact = computed(() => artifacts.value.find(a => a.name.startsWith('linux-') && a.name.endsWith('-arm64')))
const macArm64Artifact = computed(() => artifacts.value.find(a => a.name.startsWith('mac-') && a.name.endsWith('-arm64')))

const getPercentage = (v: number) => {
    return Math.round(v * 100)
}

const fetching = ref(false)
const downloadProgress = ref(0)
const onDownload = async (a?: Artifact) => {
    if (!a) {
        console.error('Artifact not found')
        return
    }
    if (fetching.value) return
    fetching.value = true
    try {
        const response = await fetch(a.archive_download_url, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
        })
        if (response.ok) {
            const reader = response.body?.getReader()!
            const contentLength = Number(response.headers.get('content-length')) || (a.size_in_bytes / 16 * 7);

            let receivedLength = 0;
            const chunks = [] as Uint8Array[];

            while (true) {
                const { done, value } = await reader.read();

                if (done) {
                    break;
                }

                chunks.push(value);
                receivedLength += value.length;

                const progress = getPercentage(receivedLength / contentLength);
                downloadProgress.value = progress;
            }

            downloadProgress.value = 0;

            const blob = new Blob(chunks);
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = tName(a.name)
            link.click()
        }
    } finally {
        fetching.value = false
    }
}

async function getLatestWorkflowArtifacts(): Promise<Artifact[]> {
    const runId: number = props.id;

    const artifactsResponse = await fetch(`https://api.xmcl.app/prebuilds/${runId}`, {
        headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
    });

    const runData: { artifacts: Artifact[] } = await artifactsResponse.json();

    console.log('Artifacts:', runData.artifacts)
    return runData.artifacts
}

const { state, error, isLoading } = useAsyncState(getLatestWorkflowArtifacts, [], {
    shallow: true
})

const artifacts = computed(() => state.value?.filter(a => a.name !== 'build'))

</script>