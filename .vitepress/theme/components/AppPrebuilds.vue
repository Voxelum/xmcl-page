<template>
    <div class="prebuild-page" id="prebuild">
        <section class="prebuild-hero">
            <div class="prebuild-grid" aria-hidden="true"></div>
            <div class="prebuild-hero-inner">
                <div class="prebuild-kicker"><span class="prebuild-kicker-dot"></span> PREBUILD CHANNEL</div>
                <div class="prebuild-heading-row">
                    <div class="prebuild-heading-copy">
                        <h1>{{ t('prebuild.download') }}</h1>
                        <p>{{ t('prebuild.downloadDescription') }}</p>
                    </div>
                    <div class="prebuild-heading-aside">
                        <span>DEVELOPMENT BUILDS</span>
                        <strong>Try what is next.</strong>
                        <small>Unstable artifacts for testing upcoming XMCL changes.</small>
                    </div>
                </div>

                <div class="prebuild-featured" v-if="selected">
                    <div class="prebuild-featured-topline">
                        <div class="prebuild-build-id"><span>#</span>{{ selected.run_number }}</div>
                        <div class="prebuild-status"><span></span>{{ t('prebuild.ready') }}</div>
                    </div>
                    <div class="prebuild-featured-body">
                        <div>
                            <span class="prebuild-card-label">SELECTED BUILD</span>
                            <h2>{{ selected.display_title }}</h2>
                            <p>{{ formatBuildDate(selected.created_at) }} <span> / </span> {{ t('prebuild.downloadDescription') }}</p>
                        </div>
                        <div class="prebuild-featured-mark">#{{ selected.run_number }}</div>
                    </div>
                    <div class="prebuild-downloads">
                        <PrebuildDownloads :id="selected.id" />
                    </div>
                </div>
            </div>
        </section>

        <section class="prebuild-history">
            <div class="prebuild-history-inner">
                <div class="prebuild-section-heading">
                    <div>
                        <span class="prebuild-section-kicker">BUILD HISTORY</span>
                        <h2>{{ t('prebuild.history') }}</h2>
                    </div>
                    <p>{{ t('prebuild.historyDescription') }}</p>
                </div>
                <div class="prebuild-history-rule">
                    <span>{{ runs.length }} builds available</span>
                    <span>SELECT A BUILD</span>
                </div>

                <ClientOnly>
                    <div class="prebuild-build-grid">
                        <button
                            v-for="item of runs"
                            :key="item.id"
                            class="prebuild-build-card"
                            :class="{ active: selected?.id === item.id }"
                            type="button"
                            :aria-pressed="selected?.id === item.id"
                            @click="selectBuild(item)"
                        >
                            <span class="prebuild-build-card-topline">
                                <span>#{{ item.run_number }}</span>
                                <span class="prebuild-build-dot" :class="{ completed: item.status === 'completed' }"></span>
                            </span>
                            <strong>{{ item.display_title }}</strong>
                            <span class="prebuild-build-date">{{ new Date(item.created_at).toLocaleDateString() }}</span>
                            <span class="prebuild-build-action">
                                {{ selected?.id === item.id ? t('prebuild.selected') : t('prebuild.selectBuild') }}
                                <span aria-hidden="true">+</span>
                            </span>
                        </button>
                    </div>
                    <div v-if="runs.length === 0" class="prebuild-empty">
                        <span class="prebuild-section-kicker">NO BUILDS FOUND</span>
                        <strong>There are no prebuild artifacts available right now.</strong>
                        <p>Please check back after the next development workflow completes.</p>
                    </div>
                </ClientOnly>
            </div>
        </section>
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
import { useI18nSync } from '../composables/useI18nSync';

const { t } = useI18n()
useI18nSync()

const { state } = useAsyncState(() => getRuns(import.meta.env.VITE_GITHUB_TOKEN ?? ''), [], {
    shallow: true
})

const runs = computed(() => {
    return state.value.length > 0 ? state.value : data
})

const selected = ref(runs.value[0])

const scrollToSelected = () => {
    nextTick().then(() => {
        document.getElementById('prebuild')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
}

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
}

watch(selected, (val) => {
    if (val) {
        scrollToSelected()
    }
})

watch(state, (value) => {
    const next = value[0] || data[0]
    if (next) selected.value = next
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

<style scoped>
.prebuild-page {
    --prebuild-ink: var(--xmcl-ink, #17211f);
    --prebuild-muted: var(--xmcl-muted, #64706c);
    --prebuild-paper: var(--xmcl-paper, #f4f5ef);
    --prebuild-panel: var(--xmcl-panel, #ffffff);
    --prebuild-soft: var(--xmcl-soft, #e9ece4);
    --prebuild-line: var(--xmcl-line, #d8ded7);
    --prebuild-lime: var(--xmcl-lime, #c9f85a);
    --prebuild-orange: var(--xmcl-orange, #e45e42);
    background: var(--prebuild-paper);
    color: var(--prebuild-ink);
    font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif;
    min-height: 100%;
}

:global(html.dark .prebuild-page) {
    --prebuild-ink: #edf3ed;
    --prebuild-muted: #9aa9a1;
    --prebuild-paper: #101612;
    --prebuild-panel: #1b241f;
    --prebuild-soft: #151d18;
    --prebuild-line: #334139;
    --prebuild-lime: #c9f85a;
    --prebuild-orange: #ff8060;
}

.prebuild-hero { background: var(--prebuild-paper); border-bottom: 1px solid var(--prebuild-line); overflow: hidden; padding: 82px clamp(24px, 7vw, 112px) 72px; position: relative; }
.prebuild-grid { background-image: linear-gradient(to right, color-mix(in srgb, var(--prebuild-ink) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--prebuild-ink) 7%, transparent) 1px, transparent 1px); background-size: 56px 56px; inset: 0; mask-image: linear-gradient(to bottom, black, transparent 94%); pointer-events: none; position: absolute; }
.prebuild-hero-inner { margin: 0 auto; max-width: 1216px; position: relative; z-index: 1; }
.prebuild-kicker, .prebuild-section-kicker, .prebuild-card-label, .prebuild-heading-aside > span, .prebuild-history-rule { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
.prebuild-kicker { align-items: center; color: var(--prebuild-muted); display: flex; gap: 10px; }
.prebuild-kicker-dot, .prebuild-status span, .prebuild-build-dot { background: #77b82a; border-radius: 50%; display: inline-block; height: 8px; width: 8px; }
.prebuild-heading-row { align-items: end; display: grid; gap: 48px; grid-template-columns: minmax(0, 1fr) minmax(230px, 0.4fr); margin: 28px 0 52px; }
.prebuild-heading-copy h1 { font-size: clamp(50px, 7vw, 96px); font-weight: 700; letter-spacing: -0.06em; line-height: 0.94; margin: 0 0 22px; }
.prebuild-heading-copy p { color: var(--prebuild-muted); font-size: 17px; line-height: 1.65; margin: 0; max-width: 670px; }
.prebuild-heading-aside { border-left: 1px solid var(--prebuild-line); display: flex; flex-direction: column; gap: 12px; padding: 12px 0 4px 24px; }
.prebuild-heading-aside > span, .prebuild-section-kicker, .prebuild-card-label { color: var(--prebuild-orange); }
.prebuild-heading-aside strong { font-size: 24px; letter-spacing: -0.04em; line-height: 1.1; }
.prebuild-heading-aside small { color: var(--prebuild-muted); font-size: 13px; line-height: 1.5; }

.prebuild-featured { background: var(--prebuild-panel); border: 1px solid var(--prebuild-ink); box-shadow: 8px 8px 0 var(--prebuild-orange); padding: clamp(22px, 4vw, 42px); }
.prebuild-featured-topline, .prebuild-featured-body { align-items: center; display: flex; justify-content: space-between; }
.prebuild-featured-topline { border-bottom: 1px solid var(--prebuild-line); padding-bottom: 18px; }
.prebuild-build-id { color: var(--prebuild-ink); font-size: 28px; font-weight: 700; letter-spacing: -0.04em; }
.prebuild-build-id span { color: var(--prebuild-orange); }
.prebuild-status { align-items: center; color: #5d9624; display: inline-flex; font-size: 11px; font-weight: 700; gap: 8px; letter-spacing: 0.12em; text-transform: uppercase; }
.prebuild-featured-body { gap: 32px; padding: 30px 0; }
.prebuild-featured-body h2 { color: var(--prebuild-ink); font-size: clamp(24px, 3vw, 38px); letter-spacing: -0.04em; line-height: 1.05; margin: 10px 0 10px; }
.prebuild-featured-body p { color: var(--prebuild-muted); font-size: 13px; line-height: 1.5; margin: 0; }
.prebuild-featured-body p span { color: var(--prebuild-orange); }
.prebuild-featured-mark { color: var(--prebuild-soft); font-size: clamp(50px, 8vw, 100px); font-weight: 800; letter-spacing: -0.08em; line-height: 1; }
.prebuild-downloads { border-top: 1px solid var(--prebuild-line); padding-top: 24px; }
.prebuild-downloads :deep(.downloads-container) { margin: 0; }

.prebuild-history { background: var(--prebuild-soft); padding: 100px clamp(24px, 7vw, 112px) 120px; }
.prebuild-history-inner { margin: 0 auto; max-width: 1216px; }
.prebuild-section-heading { align-items: end; display: flex; gap: 40px; justify-content: space-between; }
.prebuild-section-kicker { display: block; margin-bottom: 14px; }
.prebuild-section-heading h2 { color: var(--prebuild-ink); font-size: clamp(36px, 5vw, 62px); letter-spacing: -0.06em; line-height: 0.95; margin: 0; }
.prebuild-section-heading p { color: var(--prebuild-muted); line-height: 1.6; margin: 0 0 2px; max-width: 330px; }
.prebuild-history-rule { border-bottom: 1px solid var(--prebuild-line); border-top: 1px solid var(--prebuild-line); color: var(--prebuild-muted); display: flex; justify-content: space-between; margin: 48px 0 16px; padding: 13px 0; }
.prebuild-build-grid { display: grid; gap: 12px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.prebuild-build-card { background: var(--prebuild-panel); border: 1px solid var(--prebuild-line); color: var(--prebuild-ink); cursor: pointer; display: flex; flex-direction: column; min-height: 220px; padding: 22px; text-align: left; transition: background 180ms ease, border-color 180ms ease, transform 180ms ease; }
.prebuild-build-card:hover, .prebuild-build-card.active { background: var(--prebuild-lime); border-color: var(--prebuild-ink); color: #17211f; transform: translateY(-3px); }
.prebuild-build-card-topline { align-items: center; color: var(--prebuild-orange); display: flex; font-size: 13px; font-weight: 700; justify-content: space-between; }
.prebuild-build-card.active .prebuild-build-card-topline, .prebuild-build-card:hover .prebuild-build-card-topline { color: #17211f; }
.prebuild-build-dot { background: #d5ddd6; height: 7px; width: 7px; }
.prebuild-build-dot.completed { background: #5d9624; }
.prebuild-build-card strong { font-size: 19px; letter-spacing: -0.03em; line-height: 1.2; margin: 30px 0 10px; }
.prebuild-build-date { color: var(--prebuild-muted); font-size: 12px; }
.prebuild-build-card.active .prebuild-build-date, .prebuild-build-card:hover .prebuild-build-date { color: #405035; }
.prebuild-build-action { align-items: center; border-top: 1px solid var(--prebuild-line); display: flex; font-size: 12px; font-weight: 700; justify-content: space-between; margin-top: auto; padding-top: 16px; }
.prebuild-build-card.active .prebuild-build-action, .prebuild-build-card:hover .prebuild-build-action { border-top-color: rgba(23, 33, 31, 0.25); }
.prebuild-build-action span { font-size: 20px; font-weight: 400; }
.prebuild-empty { border: 1px solid var(--prebuild-line); padding: 36px 24px; }
.prebuild-empty strong { color: var(--prebuild-ink); display: block; font-size: 20px; letter-spacing: -0.03em; margin-top: 10px; }
.prebuild-empty p { color: var(--prebuild-muted); font-size: 13px; margin: 8px 0 0; }

@media (max-width: 900px) {
    .prebuild-heading-row { grid-template-columns: 1fr; }
    .prebuild-heading-aside { border-left: 0; border-top: 1px solid var(--prebuild-line); padding: 20px 0 0; }
    .prebuild-build-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 600px) {
    .prebuild-hero { padding: 54px 20px 52px; }
    .prebuild-heading-copy h1 { font-size: 56px; }
    .prebuild-featured { box-shadow: 5px 5px 0 var(--prebuild-orange); padding: 20px; }
    .prebuild-featured-body { align-items: start; flex-direction: column; }
    .prebuild-featured-mark { display: none; }
    .prebuild-history { padding: 72px 20px 84px; }
    .prebuild-section-heading { align-items: start; flex-direction: column; gap: 18px; }
    .prebuild-build-grid { grid-template-columns: 1fr; }
}
</style>