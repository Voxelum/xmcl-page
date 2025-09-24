<template>
    <div class="w-full min-h-full" id="prebuild">
        <!-- Hero Section -->
        <div class="hero-section">
            <div class="container mx-auto px-6 lg:px-12">
                <div class="hero-content">
                    <h1 class="hero-title">{{ t('prebuild.download') }}</h1>
                    <p class="hero-description">{{ t('prebuild.downloadDescription') }}</p>
                </div>
                
                <!-- Featured Build Card -->
                <div class="featured-build-card" v-if="selected">
                    <div class="card-header">
                        <div class="build-number">
                            <span class="hash-symbol">#</span>
                            <span class="number">{{ selected.run_number }}</span>
                        </div>
                        <div class="build-status">
                            <div class="status-indicator completed"></div>
                            <span class="status-text">{{ t('prebuild.ready') }}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="build-title">{{ selected.display_title }}</h3>
                        <div class="build-meta">
                            <span class="build-date">{{ formatBuildDate(selected.created_at) }}</span>
                        </div>
                    </div>
                    <div class="downloads-section">
                        <PrebuildDownloads :id="selected.id" />
                    </div>
                </div>
            </div>
        </div>

        <!-- History Section -->
        <div class="history-section">
            <div class="container mx-auto px-6 lg:px-12">
                <div class="section-header">
                    <h2 class="section-title">{{ t('prebuild.history') }}</h2>
                    <p class="section-subtitle">{{ t('prebuild.historyDescription') }}</p>
                </div>
                
                <ClientOnly>
                    <div class="builds-grid">
                        <div 
                            class="build-card" 
                            v-for="item of runs" 
                            :key="item.id"
                            :class="{ active: selected?.id === item.id }"
                            @click="selectBuild(item)"
                        >
                            <div class="card-content">
                                <div class="build-header">
                                    <div class="build-info">
                                        <div class="build-number-small">#{{ item.run_number }}</div>
                                        <div class="build-status-small">
                                            <div 
                                                class="status-dot" 
                                                :class="{ 
                                                    completed: item.status === 'completed',
                                                    pending: item.status !== 'completed' 
                                                }"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="build-date-small">
                                        {{ new Date(item.created_at).toLocaleDateString() }}
                                    </div>
                                </div>
                                <h4 class="build-title-small">{{ item.display_title }}</h4>
                                <div class="card-actions">
                                    <button class="select-button">
                                        <span v-if="selected?.id === item.id">{{ t('prebuild.selected') }}</span>
                                        <span v-else>{{ t('prebuild.selectBuild') }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ClientOnly>
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

const formatBuildDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) {
        return 'Yesterday'
    } else if (diffDays < 7) {
        return `${diffDays} days ago`
    } else {
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        })
    }
}

const selectBuild = (item: any) => {
    selected.value = item
    nextTick().then(() => {
        (document.getElementById('app')?.firstChild as any)?.scroll({
            top: 0,
            behavior: 'smooth'
        })
    })
}

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
/* Hero Section */
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 60vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 5rem 0;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="2"/></g></svg>');
    opacity: 0.3;
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 3rem;
}

.hero-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: white;
    margin-bottom: 1.5rem;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    line-height: 1.1;
}

.hero-description {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Featured Build Card */
.featured-build-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.build-number {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
}

.hash-symbol {
    font-size: 1.5rem;
    color: #667eea;
    font-weight: 600;
}

.number {
    font-size: 2.5rem;
    font-weight: 800;
    color: #2d3748;
    line-height: 1;
}

.build-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #f0f9ff;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid #bae6fd;
}

.status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.status-indicator.completed {
    background: #10b981;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
}

.status-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: #059669;
}

.build-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.5rem;
    line-height: 1.3;
}

.build-meta {
    margin-bottom: 1.5rem;
}

.build-date {
    color: #718096;
    font-size: 0.95rem;
    font-weight: 500;
}

.downloads-section {
    border-top: 1px solid #e2e8f0;
    padding-top: 1.5rem;
}

/* History Section */
.history-section {
    padding: 4rem 0;
    background: linear-gradient(to bottom, #f8fafc, #ffffff);
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.5rem;
}

.section-subtitle {
    font-size: 1.125rem;
    color: #718096;
    margin: 0;
}

.builds-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
}

.build-card {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 2px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.build-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.build-card:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.build-card:hover::before {
    transform: scaleX(1);
}

.build-card.active {
    border-color: #667eea;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
}

.build-card.active::before {
    transform: scaleX(1);
}

.build-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.build-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.build-number-small {
    font-size: 1.25rem;
    font-weight: 700;
    color: #667eea;
}

.build-status-small {
    display: flex;
    align-items: center;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.status-dot.completed {
    background: #10b981;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
}

.status-dot.pending {
    background: #f59e0b;
    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
}

.build-date-small {
    font-size: 0.875rem;
    color: #718096;
    font-weight: 500;
}

.build-title-small {
    font-size: 1.125rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 1rem;
    line-height: 1.4;
}

.card-actions {
    margin-top: 1rem;
}

.select-button {
    width: 100%;
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.select-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}

.build-card.active .select-button {
    background: #10b981;
}

.build-card.active .select-button:hover {
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
}

.container {
    max-width: 1200px;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
    .hero-description {
        color: rgba(255, 255, 255, 0.85);
    }
    
    .featured-build-card {
        background: rgba(26, 32, 44, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .build-title,
    .number,
    .section-title,
    .build-title-small {
        color: #f7fafc;
    }
    
    .build-card {
        background: #2d3748;
        border-color: #4a5568;
    }
    
    .build-card.active {
        border-color: #667eea;
        background: #2d3748;
    }
    
    .history-section {
        background: linear-gradient(to bottom, #1a202c, #2d3748);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .hero-section {
        min-height: 50vh;
        padding: 2rem 0;
    }
    
    .featured-build-card {
        margin: 0 1rem;
        padding: 1.5rem;
    }
    
    .builds-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .build-status {
        align-self: flex-end;
    }
}

/* Legacy styles for compatibility */
.leading-title {
    text-align: left;
    font-weight: 700;
    font-size: clamp(1.875rem, 6vw, 3.75rem);
    line-height: 1.2;
    margin-right: 0.5rem;
}

.description-part {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 5rem;
    gap: 1.25rem;
}

@media (min-width: 640px) {
    .leading-title {
        font-size: 3.75rem;
        line-height: 1;
    }
}
</style>