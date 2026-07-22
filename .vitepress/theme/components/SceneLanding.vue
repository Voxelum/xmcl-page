<template>
  <div class="scene-landing" :class="`scene-${kind}`">
    <main>
      <section class="scene-hero">
        <div class="scene-hero-copy">
          <span class="scene-eyebrow"><span class="scene-eyebrow-mark"></span>{{ content.eyebrow }}</span>
          <h1>{{ content.title }}</h1>
          <p class="scene-hero-lede">{{ content.lede }}</p>
          <div class="scene-actions">
            <a class="scene-button scene-button-primary" :href="content.primaryAction.href">
              <span class="i-fa6-solid:arrow-right" aria-hidden="true"></span>
              {{ content.primaryAction.label }}
            </a>
            <a class="scene-button scene-button-secondary" :href="content.secondaryAction.href">{{ content.secondaryAction.label }} <span aria-hidden="true">+</span></a>
          </div>
          <div class="scene-hero-note"><span class="i-fa6-solid:circle-check" aria-hidden="true"></span>{{ content.heroNote }}</div>
        </div>

        <div class="scene-hero-visual">
          <div class="scene-visual-index">{{ content.visualIndex }}</div>
          <div class="scene-window">
            <div class="scene-window-bar"><span></span><span></span><span></span><small>{{ content.visualLabel }}</small></div>
            <img :src="content.heroImage" :alt="content.heroAlt" loading="eager" decoding="async" />
          </div>
          <div class="scene-visual-tag scene-visual-tag-top">{{ content.visualTag }}</div>
          <div class="scene-visual-tag scene-visual-tag-bottom"><span class="scene-live-dot"></span>{{ content.visualStatus }}</div>
        </div>
      </section>

      <section class="scene-signal-row" :aria-label="`${content.title} highlights`">
        <article v-for="signal in content.signals" :key="signal.label" class="scene-signal">
          <span class="scene-signal-number">{{ signal.number }}</span>
          <div><strong>{{ signal.label }}</strong><p>{{ signal.description }}</p></div>
        </article>
      </section>

      <section id="workflow" class="scene-workflow">
        <header class="scene-section-heading">
          <div><span class="scene-section-kicker">{{ content.workflowKicker }}</span><h2>{{ content.workflowTitle }}</h2></div>
          <p>{{ content.workflowDescription }}</p>
        </header>
        <div class="scene-story">
          <article v-for="(feature, index) in content.features" :key="feature.title" class="scene-story-item" :class="{ reversed: index % 2 === 1 }">
            <div class="scene-story-media">
              <span class="scene-story-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <img :src="feature.image" :alt="feature.alt" loading="lazy" decoding="async" />
            </div>
            <div class="scene-story-copy">
              <span class="scene-story-label">{{ feature.label }}</span>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
              <ul><li v-for="point in feature.points" :key="point">{{ point }}</li></ul>
            </div>
          </article>
        </div>
      </section>

      <section v-if="kind === 'linux'" id="download" class="scene-download">
        <div class="scene-download-copy">
          <span class="scene-section-kicker">DOWNLOAD FOR LINUX</span>
          <h2>Install XMCL your way.</h2>
          <p>Choose the package that belongs on your system, or use Flathub to bring XMCL to Steam Deck.</p>
          <a class="scene-text-link" :href="prebuildsUrl">See every release and prebuild <span aria-hidden="true">+</span></a>
        </div>
        <div class="scene-download-control"><ClientOnly><Linux :organized="true" /></ClientOnly></div>
      </section>

      <section v-else class="scene-creator-cta">
        <div><span class="scene-section-kicker">A WORKBENCH FOR YOUR NEXT RELEASE</span><h2>Make the pack. Ship the pack. Keep it healthy.</h2></div>
        <div><p>XMCL gives creators a fast local loop for discovery, testing, diagnosis, and export across the two ecosystems your players already use.</p><a class="scene-button scene-button-primary" :href="featuresUrl">Explore every feature <span aria-hidden="true">+</span></a></div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import Linux from './Linux.vue'

import aiAgent from '../../../src/assets/ai-agent-dialog-candidate.png'
import homeExpanded from '../../../src/assets/home-expanded-1600-candidate.png'
import homeProduction from '../../../src/assets/home-production-1920.png'
import instanceCreate from '../../../src/assets/instance-create-modloaders-candidate.png'
import localModDetail from '../../../src/assets/local-mod-detail-candidate.png'
import localModManagement from '../../../src/assets/local-mod-management-candidate.png'
import modpackExport from '../../../src/assets/modpack-export-candidate.png'
import modpackMarket from '../../../src/assets/modpack-market-candidate.png'
import onlineModSearch from '../../../src/assets/online-mod-search-candidate.png'

const props = defineProps<{ kind: 'linux' | 'creators' }>()
const { site } = useData()
const pageUrl = (path: string) => `${site.value.base}en/${path}`
const prebuildsUrl = computed(() => pageUrl('prebuilds'))
const featuresUrl = computed(() => pageUrl('features/'))

const content = computed(() => props.kind === 'linux' ? {
  eyebrow: 'XMCL / LINUX EDITION',
  title: 'The Minecraft launcher that feels native on Linux.',
  lede: 'A polished, open-source launcher for Linux desktops and Steam Deck. Pick the package your distribution expects, plug into a 4K display, and keep every world one clear launch away.',
  primaryAction: { label: 'Download for Linux', href: '#download' },
  secondaryAction: { label: 'See the Linux workflow', href: '#workflow' },
  heroNote: 'Native Linux builds, ARM64 options, and Flathub support',
  visualIndex: '01 / 02',
  visualLabel: 'XMCL · Linux workspace',
  heroImage: homeProduction,
  heroAlt: 'X Minecraft Launcher home screen showing a library of Minecraft instances',
  visualTag: '4K-ready workspace',
  visualStatus: 'READY FOR YOUR NEXT WORLD',
  workflowKicker: 'A LINUX-FIRST WORKFLOW',
  workflowTitle: 'From package manager to play session without the friction.',
  workflowDescription: 'XMCL keeps the things Linux players care about close: predictable installs, a sharp interface, and independent game environments that stay easy to move between.',
  signals: [
    { number: '05', label: 'Linux packages', description: 'DEB, RPM, AppImage, tar.xz, and Flathub.' },
    { number: '4K', label: 'Clear at any scale', description: 'A dense library that stays readable on a large display.' },
    { number: '∞', label: 'Separate worlds', description: 'Keep versions, loaders, and saves from colliding.' },
  ],
  features: [
    { label: '01 / CHOOSE YOUR INSTALL', title: 'Use the format your distribution understands.', description: 'Download a native package for your desktop or use Flathub when you want a portable, Steam Deck-friendly route. XMCL also offers ARM64 builds where the hardware calls for them.', points: ['DEB and RPM for mainstream Linux desktops', 'AppImage and tar.xz for portable installs', 'Flathub support for Steam Deck'], image: instanceCreate, alt: 'XMCL create instance dialog with Minecraft versions and mod loaders' },
    { label: '02 / KEEP IT ORGANIZED', title: 'Every instance gets its own clean runway.', description: 'Separate vanilla, modded, testing, and server setups without juggling folders by hand. Your versions, loaders, mods, saves, and settings stay together.', points: ['Independent game data and launch settings', 'Forge, Fabric, Quilt, NeoForge, and more', 'Fast switching between worlds and experiments'], image: homeExpanded, alt: 'XMCL instance library with organized Minecraft game profiles' },
    { label: '03 / PLAY ANYWHERE', title: 'A desktop launcher that travels well.', description: 'Move from a Linux desktop to a Steam Deck session without giving up a clear library or a dependable setup. XMCL gives your collection room to grow without turning it into a spreadsheet.', points: ['Flathub path designed for Steam Deck', 'A focused interface on 4K displays', 'Open source and built for Linux players'], image: homeProduction, alt: 'X Minecraft Launcher home page with a large instance library' },
  ],
} : {
  eyebrow: 'XMCL / FOR MODPACK CREATORS',
  title: 'Build modpacks with the whole release loop in one place.',
  lede: 'Discover projects, resolve dependencies, test a working set, diagnose crashes, and export a clean Modrinth or CurseForge pack without leaving your launcher.',
  primaryAction: { label: 'Explore creator workflows', href: '#workflow' },
  secondaryAction: { label: 'Open the feature catalog', href: featuresUrl.value },
  heroNote: 'Modrinth and CurseForge workflows, with AI-assisted diagnosis',
  visualIndex: '02 / 02',
  visualLabel: 'XMCL · creator workspace',
  heroImage: modpackMarket,
  heroAlt: 'X Minecraft Launcher modpack market with Modrinth and CurseForge projects',
  visualTag: 'MODRINTH ↔ CURSEFORGE',
  visualStatus: 'WORKING SET IN SYNC',
  workflowKicker: 'THE CREATOR LOOP',
  workflowTitle: 'A faster path from rough idea to a pack players can actually launch.',
  workflowDescription: 'XMCL treats a modpack as a living system. Explore both catalogs, make deliberate changes, and let the launcher surface the relationships that keep your release healthy.',
  signals: [
    { number: '2×', label: 'Project sources', description: 'Search Modrinth and CurseForge from one workspace.' },
    { number: '1-CLICK', label: 'Pack export', description: 'Build a distributable MR or CF package in a few steps.' },
    { number: 'AI', label: 'Crash assistance', description: 'Turn a failure report into a useful next action.' },
  ],
  features: [
    { label: '01 / DISCOVER', title: 'Search both ecosystems without splitting your focus.', description: 'Find projects across Modrinth and CurseForge with version, loader, environment, and category filters. XMCL maps projects across both sources so you can compare the same work with less guesswork.', points: ['Modrinth and CurseForge search in one flow', 'Minecraft version and loader compatibility filters', 'Cross-platform project mapping'], image: onlineModSearch, alt: 'XMCL online mod search with source and compatibility filters' },
    { label: '02 / BUILD', title: 'Make dependencies part of the plan.', description: 'When a mod needs another mod, XMCL can install the dependency with it. When you enable or disable a project, the launcher helps keep the resulting set coherent instead of making you trace the graph manually.', points: ['Automatic dependency installation', 'Dependency-aware enable and disable actions', 'Inspect versions, loaders, and project metadata'], image: localModDetail, alt: 'XMCL mod detail view showing versions and dependencies' },
    { label: '03 / CURATE', title: 'Keep the working set lean and intentional.', description: 'Search, sort, group, update, and remove the mods that no longer belong. Custom groups make it easy to test optional content, compare profiles, or keep a release candidate focused.', points: ['Automatic mod update checks', 'Custom groups for optional and test content', 'Find and remove unused mods'], image: localModManagement, alt: 'XMCL installed mod management view with search and update controls' },
    { label: '04 / EXPORT', title: 'Ship one pack in the format your players need.', description: 'Export a polished Modrinth or CurseForge modpack with the right metadata and selected files. The release step becomes a repeatable part of the workflow, not a last-minute archive operation.', points: ['One-click Modrinth and CurseForge export', 'Author, description, URL, and version metadata', 'Choose exactly which files and assets ship'], image: modpackExport, alt: 'XMCL modpack export screen for Modrinth and CurseForge formats' },
    { label: '05 / DIAGNOSE', title: 'Let AI help turn crash reports into fixes.', description: 'When a test launch fails, XMCL puts logs, crash reports, and an AI agent in the same place. The agent can inspect the instance context and explain an actionable next step.', points: ['Read launch logs and crash reports in context', 'AI-assisted investigation of instance files', 'Resolve mod conflicts before release'], image: aiAgent, alt: 'XMCL AI agent investigating a Minecraft launch failure' },
  ],
})
</script>

<style scoped>
:global(body:has(.scene-landing) .VPContent),
:global(body:has(.scene-landing) .VPDoc),
:global(body:has(.scene-landing) .VPDoc .container),
:global(body:has(.scene-landing) .VPDoc.has-aside .content),
:global(body:has(.scene-landing) .VPDoc .content-container),
:global(body:has(.scene-landing) .VPDoc .content) { max-width: none !important; padding-left: 0 !important; padding-right: 0 !important; width: 100% !important; }
:global(body:has(.scene-landing) .VPDoc.has-aside .container) { display: block !important; }
:global(body:has(.scene-landing) .VPDoc.has-aside .content) { flex: 1 1 auto !important; }
:global(body:has(.scene-landing) .VPDocFooter),
:global(body:has(.scene-landing) .VPDocAside) { display: none !important; }

.scene-landing {
  --scene-ink: #17211f;
  --scene-muted: #64706c;
  --scene-button-surface: #17211f;
  --scene-button-text: #ffffff;
  --scene-accent-text: #17211f;
  --scene-dark-surface: #17211f;
  --scene-dark-text: #f4f7f3;
  --scene-dark-muted: #c3d0c8;
  --scene-paper: #f4f5ef;
  --scene-panel: #ffffff;
  --scene-soft: #e9ece4;
  --scene-line: #d8ded7;
  --scene-accent: #c9f85a;
  --scene-hot: #e45e42;
  background: var(--scene-paper);
  color: var(--scene-ink);
  font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif;
  min-height: 100vh;
  overflow: hidden;
}
.scene-creators { --scene-accent: #ffce5c; --scene-hot: #2979ff; --scene-paper: #f5f5f1; }
.scene-landing main { background-image: linear-gradient(to right, rgba(23, 33, 31, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 33, 31, 0.045) 1px, transparent 1px); background-size: 56px 56px; }
:global(html.dark .scene-landing) { --scene-ink: #f1f5f2; --scene-muted: #c3d0c8; --scene-button-surface: #17211f; --scene-button-text: #ffffff; --scene-accent-text: #17211f; --scene-dark-surface: #17211f; --scene-dark-text: #f4f7f3; --scene-dark-muted: #c3d0c8; --scene-paper: #111814; --scene-panel: #1b251f; --scene-soft: #18211c; --scene-line: #3b4a40; --scene-accent: #d8ff73; --scene-hot: #ff9476; }
:global(html.dark .scene-landing main) { background-image: linear-gradient(to right, rgba(237, 243, 237, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(237, 243, 237, 0.06) 1px, transparent 1px); }
.scene-landing .scene-hero-lede,
.scene-landing .scene-hero-note,
.scene-landing .scene-signal p,
.scene-landing .scene-section-heading > p,
.scene-landing .scene-story-copy p,
.scene-landing .scene-story-copy ul,
.scene-landing .scene-download p { color: var(--scene-muted) !important; }
.scene-hero, .scene-signal-row, .scene-workflow, .scene-download, .scene-creator-cta { margin: 0 auto; max-width: 1680px; padding-left: clamp(24px, 7vw, 112px); padding-right: clamp(24px, 7vw, 112px); }
.scene-hero { align-items: center; display: grid; gap: 70px; grid-template-columns: minmax(320px, 0.84fr) minmax(460px, 1.16fr); min-height: 720px; padding-bottom: 94px; padding-top: 116px; }
.scene-eyebrow, .scene-section-kicker { color: var(--scene-hot); display: inline-flex; font-size: 11px; font-weight: 800; gap: 10px; letter-spacing: 0.14em; text-transform: uppercase; }
.scene-eyebrow-mark { background: var(--scene-accent); border: 1px solid var(--scene-ink); display: inline-block; height: 10px; transform: rotate(45deg); width: 10px; }
.scene-hero h1 { font-size: 74px; font-weight: 800; letter-spacing: -0.065em; line-height: 0.94; margin: 26px 0 0; max-width: 670px; }
.scene-hero-lede { color: var(--scene-muted); font-size: 18px; line-height: 1.65; margin: 28px 0 0; max-width: 590px; }
.scene-actions { align-items: center; display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
.scene-button { align-items: center; border: 1px solid var(--scene-ink); display: inline-flex; font-size: 12px; font-weight: 800; gap: 10px; justify-content: center; letter-spacing: 0.04em; min-height: 46px; padding: 0 18px; transition: background 180ms ease, color 180ms ease, transform 180ms ease; }
.scene-button:hover { transform: translateY(-3px); }
.scene-button-primary { background: var(--scene-button-surface); color: var(--scene-button-text) !important; }
.scene-button-primary:hover { background: var(--scene-hot); border-color: var(--scene-hot); }
.scene-button-secondary { color: var(--scene-ink); }
.scene-button-secondary:hover { background: var(--scene-accent); }
.scene-hero-note { align-items: center; color: var(--scene-muted); display: flex; font-size: 11px; font-weight: 700; gap: 8px; margin-top: 20px; }
.scene-hero-note span { color: var(--scene-hot); }
.scene-hero-visual { min-width: 0; position: relative; }
.scene-visual-index { color: var(--scene-hot); font-size: 11px; font-weight: 800; letter-spacing: 0.14em; margin-bottom: 12px; text-align: right; }
.scene-window { background: #202925; border: 1px solid var(--scene-ink); box-shadow: 18px 18px 0 var(--scene-hot); overflow: hidden; position: relative; transform: rotate(1.2deg); }
.scene-window-bar, .scene-stage-window-bar { align-items: center; background: #17211f; color: #a7b2aa; display: flex; gap: 6px; height: 32px; padding: 0 12px; }
.scene-window-bar > span, .scene-stage-window-bar > span { background: #64706c; border-radius: 50%; height: 6px; width: 6px; }
.scene-window-bar small, .scene-stage-window-bar small { font-size: 9px; letter-spacing: 0.08em; margin-left: 8px; overflow: hidden; text-overflow: ellipsis; text-transform: uppercase; white-space: nowrap; }
.scene-window img { display: block; height: auto; max-width: 100%; width: 100%; }
.scene-visual-tag { background: var(--scene-accent); border: 1px solid var(--scene-accent-text); color: var(--scene-accent-text); font-size: 10px; font-weight: 800; letter-spacing: 0.1em; padding: 10px 12px; position: absolute; text-transform: uppercase; }
.scene-visual-tag-top { left: -22px; top: 54px; transform: rotate(-4deg); }
.scene-visual-tag-bottom { align-items: center; bottom: -24px; display: flex; gap: 8px; right: 24px; transform: rotate(-2deg); }
.scene-live-dot { background: var(--scene-hot); border-radius: 50%; display: inline-block; height: 7px; width: 7px; }
.scene-signal-row { border-bottom: 1px solid var(--scene-line); border-top: 1px solid var(--scene-line); display: grid; grid-template-columns: repeat(3, 1fr); }
.scene-signal { align-items: flex-start; border-left: 1px solid var(--scene-line); display: flex; gap: 18px; padding: 24px 22px 26px 0; }
.scene-signal:first-child { border-left: 0; }
.scene-signal:not(:first-child) { padding-left: 22px; }
.scene-signal-number { color: var(--scene-hot); font-size: 23px; font-weight: 800; letter-spacing: -0.05em; }
.scene-signal strong { display: block; font-size: 13px; letter-spacing: 0.02em; }
.scene-signal p { color: var(--scene-muted); font-size: 12px; line-height: 1.45; margin: 5px 0 0; }
.scene-workflow { padding-bottom: 140px; padding-top: 128px; }
.scene-section-heading { align-items: end; border-bottom: 1px solid var(--scene-line); display: flex; gap: 40px; justify-content: space-between; padding-bottom: 38px; }
.scene-section-heading h2, .scene-download h2, .scene-creator-cta h2 { font-size: 44px; font-weight: 800; letter-spacing: -0.06em; line-height: 0.98; margin: 18px 0 0; max-width: 710px; }
.scene-section-heading p { color: var(--scene-muted); font-size: 15px; line-height: 1.65; margin: 0; max-width: 420px; }
.scene-story { display: flex; flex-direction: column; gap: 110px; padding-top: 64px; }
.scene-story-item { align-items: center; display: grid; gap: clamp(36px, 7vw, 130px); grid-template-columns: minmax(0, 1.55fr) minmax(290px, 0.45fr); }
.scene-story-item.reversed { grid-template-columns: minmax(290px, 0.45fr) minmax(0, 1.55fr); }
.scene-story-item.reversed .scene-story-media { grid-column: 2; grid-row: 1; }
.scene-story-item.reversed .scene-story-copy { grid-column: 1; grid-row: 1; }
.scene-story-media { background: #202925; box-shadow: 14px 14px 0 var(--scene-accent); overflow: hidden; position: relative; }
.scene-story-media img { display: block; height: auto; transition: transform 300ms ease; width: 100%; }
.scene-story-item:hover .scene-story-media img { transform: scale(1.025); }
.scene-story-number { color: var(--scene-accent); font-size: 11px; font-weight: 800; left: 18px; letter-spacing: 0.14em; position: absolute; text-shadow: 1px 1px 0 var(--scene-ink); top: 16px; z-index: 1; }
.scene-story-copy { max-width: 440px; }
.scene-story-label { color: var(--scene-hot); font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
.scene-story-copy h3 { font-size: 30px; font-weight: 800; letter-spacing: -0.05em; line-height: 1; margin: 18px 0 0; }
.scene-story-copy p { color: var(--scene-muted); font-size: 14px; line-height: 1.7; margin: 14px 0 0; }
.scene-story-copy ul { color: var(--scene-muted); font-size: 12px; line-height: 1.65; margin: 18px 0 0; padding-left: 18px; }
.scene-story-copy li::marker { color: var(--scene-hot); }
.scene-download { align-items: center; background: var(--scene-dark-surface); color: var(--scene-dark-text); display: grid; gap: 60px; grid-template-columns: minmax(260px, 0.55fr) minmax(0, 1.45fr); padding-bottom: 70px; padding-top: 70px; }
.scene-download .scene-section-kicker { color: var(--scene-accent); }
.scene-download h2 { border-top: 0 !important; color: var(--scene-dark-text) !important; font-size: 40px; padding-top: 0 !important; }
.scene-download p { color: var(--scene-dark-muted) !important; font-size: 14px; line-height: 1.7; margin: 20px 0 0; max-width: 390px; }
.scene-download-control { min-width: 0; }
.scene-download-control :deep(.download-os-card) { margin-bottom: 0; width: 100%; }
.scene-download-control :deep(.download-os-card) { color: #fff; }
.scene-download-control :deep(.download-buttons-flex) { align-items: stretch; display: grid !important; gap: 10px; grid-template-columns: repeat(2, minmax(0, 1fr)); width: 100%; }
.scene-download-control :deep(.download-segmented-btn) { min-width: 0; width: 100%; }
.scene-download-control :deep(.download-segmented-btn > *) { min-width: 0; width: 100%; }
.scene-download-control :deep(.download-btn-base) { gap: 8px; min-width: 0; padding: 0.8rem 0.75rem; width: 100%; }
.scene-download-control :deep(.download-btn-arch-chip) { padding: 0.8rem 0.65rem; }
.scene-download-control :deep(.btn-text) { overflow-wrap: anywhere; text-align: left; }
.scene-download-control :deep(.color-sky) { grid-column: 1 / -1; }
.scene-text-link { color: var(--scene-accent); display: inline-flex; font-size: 12px; font-weight: 800; gap: 8px; margin-top: 22px; }
.scene-creator-cta { align-items: end; background: var(--scene-accent); color: var(--scene-accent-text); display: grid; gap: 60px; grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr); padding-bottom: 72px; padding-top: 72px; }
.scene-creator-cta .scene-section-kicker { color: var(--scene-hot); }
.scene-creator-cta h2 { border-top: 0 !important; color: var(--scene-accent-text) !important; font-size: 48px; margin-top: 16px; padding-top: 0 !important; }
.scene-creator-cta p { color: var(--scene-accent-text) !important; font-size: 15px; line-height: 1.65; margin: 0 0 24px; max-width: 430px; }
.scene-creator-cta .scene-button-primary { background: var(--scene-button-surface); color: var(--scene-button-text) !important; }
@media (max-width: 980px) {
  .scene-hero { gap: 45px; grid-template-columns: 1fr; padding-bottom: 80px; }
  .scene-hero-copy { max-width: 720px; }
  .scene-hero-visual { margin: 0 auto; max-width: 760px; width: 100%; }
  .scene-hero h1 { font-size: 64px; }
  .scene-story-item, .scene-story-item.reversed { gap: 42px; grid-template-columns: 1fr 0.65fr; }
  .scene-story-item.reversed .scene-story-media { grid-column: 1; }
  .scene-story-item.reversed .scene-story-copy { grid-column: 2; }
  .scene-download, .scene-creator-cta { grid-template-columns: 1fr; }
}

@media (max-width: 680px) {
  .scene-hero, .scene-signal-row, .scene-workflow, .scene-download, .scene-creator-cta { padding-left: 22px; padding-right: 22px; }
  .scene-hero { min-height: 0; padding-bottom: 72px; padding-top: 78px; }
  .scene-hero h1 { font-size: 51px; }
  .scene-hero-lede { font-size: 16px; }
  .scene-window { box-shadow: 9px 9px 0 var(--scene-hot); }
  .scene-visual-tag-top { left: -5px; }
  .scene-signal-row { display: flex; flex-direction: column; }
  .scene-signal, .scene-signal:not(:first-child) { border-left: 0; border-top: 1px solid var(--scene-line); padding: 18px 0; }
  .scene-signal:first-child { border-top: 0; }
  .scene-workflow { padding-bottom: 84px; padding-top: 84px; }
  .scene-section-heading { align-items: start; flex-direction: column; gap: 22px; }
  .scene-section-heading h2, .scene-download h2 { font-size: 36px; }
  .scene-story { gap: 76px; padding-top: 42px; }
  .scene-story-item, .scene-story-item.reversed { display: flex; flex-direction: column; gap: 30px; }
  .scene-story-item.reversed .scene-story-media, .scene-story-item.reversed .scene-story-copy { order: initial; }
  .scene-story-media { box-shadow: 8px 8px 0 var(--scene-accent); width: calc(100% - 8px); }
  .scene-story-copy { max-width: none; }
  .scene-story-copy h3 { font-size: 27px; }
  .scene-download, .scene-creator-cta { padding-bottom: 52px; padding-top: 52px; }
  .scene-download-control :deep(.download-buttons-flex) { grid-template-columns: 1fr; }
  .scene-download-control :deep(.color-sky) { grid-column: auto; }
  .scene-creator-cta { gap: 32px; }
  .scene-creator-cta h2 { font-size: 38px; }
}
</style>
