<template>
    <div class="downloads-container">
        <div class="platforms-grid">
            <div class="platform-card windows" :class="{ active: platform === 'Win32', loading: fetching }">
                <button @click="onDownload(windowsArtifact)" class="download-btn">
                    <div class="platform-icon">
                        <div class="i-fa6-brands-windows w-6 h-6"></div>
                    </div>
                    <div class="platform-info">
                        <span class="platform-name">Windows</span>
                        <span class="platform-arch">x64</span>
                    </div>
                    <div class="download-indicator">
                        <div class="i-fa6-solid-download w-5 h-5" v-if="!fetching"></div>
                        <div class="loading-spinner" v-else></div>
                    </div>
                </button>
            </div>

            <div class="platform-card macos" :class="{ active: platform === 'Mac', loading: fetching }">
                <button @click="onDownload(macArtifact)" class="download-btn">
                    <div class="platform-icon">
                        <div class="i-fa6-brands-apple w-6 h-6"></div>
                    </div>
                    <div class="platform-info">
                        <span class="platform-name">macOS</span>
                        <span class="platform-arch">Intel</span>
                    </div>
                    <div class="download-indicator">
                        <div class="i-fa6-solid-download w-5 h-5" v-if="!fetching"></div>
                        <div class="loading-spinner" v-else></div>
                    </div>
                </button>
                <button @click="onDownload(macArm64Artifact)" class="arch-btn" :class="{ disabled: fetching }">
                    <span>Apple Silicon</span>
                </button>
            </div>

            <div class="platform-card linux" :class="{ active: platform === 'Linux', loading: fetching }">
                <button @click="onDownload(linuxArtifact)" class="download-btn">
                    <div class="platform-icon">
                        <div class="i-fa6-brands-linux w-6 h-6"></div>
                    </div>
                    <div class="platform-info">
                        <span class="platform-name">Linux</span>
                        <span class="platform-arch">x64</span>
                    </div>
                    <div class="download-indicator">
                        <div class="i-fa6-solid-download w-5 h-5" v-if="!fetching"></div>
                        <div class="loading-spinner" v-else></div>
                    </div>
                </button>
                <button @click="onDownload(linuxArm64Artifact)" class="arch-btn" :class="{ disabled: fetching }">
                    <span>ARM64</span>
                </button>
            </div>
        </div>
        
        <div class="progress-container" v-if="downloadProgress">
            <div class="progress-bar">
                <div class="progress-fill" :style="{ width: downloadProgress + '%' }">
                    <div class="progress-text">{{ downloadProgress }}%</div>
                </div>
            </div>
            <p class="progress-label">{{ t('prebuild.downloading') }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePlatform } from '../composables/usePlatform';
import { useAsyncState } from '@vueuse/core';

const { t } = useI18n();
const platform = usePlatform();

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

            const blob = new Blob(chunks as BlobPart[]);
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

const { state } = useAsyncState(getLatestWorkflowArtifacts, [], {
    shallow: true
})

const artifacts = computed(() => state.value?.filter(a => a.name !== 'build') ?? [])

</script>

<style scoped>
.downloads-container {
    width: 100%;
}

.platforms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.platform-card {
    background: white;
    border-radius: 16px;
    padding: 1rem;
    border: 2px solid #e2e8f0;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.platform-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--platform-color), var(--platform-color-light));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.platform-card.windows {
    --platform-color: #00a1f1;
    --platform-color-light: #40b4f7;
}

.platform-card.macos {
    --platform-color: #a78bfa;
    --platform-color-light: #c4b5fd;
}

.platform-card.linux {
    --platform-color: #f97316;
    --platform-color-light: #fb923c;
}

.platform-card:hover {
    border-color: var(--platform-color);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.platform-card:hover::before,
.platform-card.active::before {
    transform: scaleX(1);
}

.platform-card.active {
    border-color: var(--platform-color);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.download-btn {
    width: 100%;
    background: none;
    border: none;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    border-radius: 12px;
    transition: all 0.3s ease;
    color: #374151;
    font-weight: 600;
    text-align: left;
}

.download-btn:hover {
    background: rgba(0, 0, 0, 0.02);
    color: var(--platform-color);
}

.platform-card.active .download-btn {
    color: var(--platform-color);
}

.platform-card.loading .download-btn {
    pointer-events: none;
    opacity: 0.7;
}

.platform-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.download-btn:hover .platform-icon,
.platform-card.active .platform-icon {
    background: var(--platform-color);
    color: white;
}

.platform-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.platform-name {
    font-size: 1.125rem;
    font-weight: 600;
}

.platform-arch {
    font-size: 0.875rem;
    color: #6b7280;
}

.download-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    transition: opacity 0.3s ease;
}

.download-btn:hover .download-indicator,
.platform-card.active .download-indicator {
    opacity: 1;
}

.arch-btn {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--platform-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}

.arch-btn:hover:not(.disabled) {
    background: var(--platform-color-light);
    transform: translateY(-1px);
}

.arch-btn.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid #e5e7eb;
    border-top: 2px solid var(--platform-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.progress-container {
    margin-top: 1.5rem;
}

.progress-bar {
    width: 100%;
    height: 12px;
    background: #e5e7eb;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 6px;
    transition: width 0.3s ease;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.progress-text {
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.progress-label {
    text-align: center;
    margin-top: 0.5rem;
    color: #6b7280;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
    .platform-card {
        background: #374151;
        border-color: #4b5563;
        color: #f3f4f6;
    }
    
    .download-btn {
        color: #f3f4f6;
    }
    
    .download-btn:hover {
        background: rgba(255, 255, 255, 0.05);
    }
    
    .platform-icon {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .platform-arch {
        color: #9ca3af;
    }
    
    .progress-bar {
        background: #4b5563;
    }
    
    .progress-label {
        color: #9ca3af;
    }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .platforms-grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }
    
    .platform-card {
        padding: 0.75rem;
    }
    
    .download-btn {
        padding: 0.75rem;
        gap: 0.75rem;
    }
    
    .platform-icon {
        width: 40px;
        height: 40px;
    }
}
</style>