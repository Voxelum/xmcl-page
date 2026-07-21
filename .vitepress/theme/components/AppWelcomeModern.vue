<template>
  <div class="xmcl-modern" id="top">
    <section class="modern-hero">
      <div class="modern-grid" aria-hidden="true"></div>
      <div class="modern-hero-content">
        <div class="modern-kicker">
          <span class="modern-kicker-dot"></span>
          <span>OPEN SOURCE MINECRAFT LAUNCHER</span>
        </div>
        <h1>X Minecraft Launcher</h1>
        <i18n-t class="modern-hero-copy" keypath="intro.first.body" tag="p">
          <template #openSource>
            <span>{{ t('intro.first.openSource') }}</span>
          </template>
          <template #modernUx>
            <span>{{ t('intro.first.modernUx') }}</span>
          </template>
        </i18n-t>
        <p class="modern-hero-description">{{ t('intro.description') }}</p>
        <div class="modern-hero-actions">
          <a class="modern-button modern-button-primary" href="#download">
            <span class="i-fa6-solid:download"></span>
            <span>{{ t('downloadFor.windows').replace(':', '') }}</span>
          </a>
          <a class="modern-button modern-button-quiet" :href="guideUrl">
            <span>{{ t('guide') }}</span>
            <span aria-hidden="true">+</span>
          </a>
        </div>
        <div class="modern-hero-meta">
          <span class="modern-meta-item"><span class="i-fa6-solid:circle-check"></span> {{ t('intro.first.openSource') }}</span>
          <span class="modern-meta-divider"></span>
          <a class="modern-meta-item modern-meta-link" href="https://github.com/voxelum/x-minecraft-launcher" target="_blank" rel="noreferrer">
            <span class="i-fa6-brands:github"></span> GitHub
          </a>
        </div>
      </div>

      <div class="modern-hero-visual" v-motion :initial="{ opacity: 0, y: 24 }" :visibleOnce="heroTransition">
        <div class="modern-visual-label modern-visual-label-top">BUILT FOR MODDED WORLDS</div>
        <div class="modern-screenshot-frame">
          <div class="modern-window-bar">
            <span></span><span></span><span></span>
            <small>XMCL / HOME</small>
          </div>
          <AppPicture :value="homePicture" alt="X Minecraft Launcher home page" loading="eager" decoding="async" />
        </div>
        <div class="modern-floating-card modern-floating-version">
          <span class="modern-card-overline">LATEST RELEASE</span>
          <strong>{{ data.latestVersion }}</strong>
          <span class="modern-live-dot">READY TO PLAY</span>
        </div>
        <div class="modern-floating-card modern-floating-stack">
          <span class="modern-stack-icon i-fa6-solid:cubes-stacked"></span>
          <span><strong>One clean library</strong><small>Mods, packs, and instances</small></span>
        </div>
      </div>
    </section>

    <section class="modern-proof-row" aria-label="Launcher capabilities">
      <div><span class="i-fa6-solid:bolt"></span><strong>FAST SETUP</strong><small>From vanilla to modded</small></div>
      <div><span class="i-fa6-solid:layer-group"></span><strong>ONE LIBRARY</strong><small>Resources stay organized</small></div>
      <div><span class="i-fa6-solid:users"></span><strong>YOUR ECOSYSTEM</strong><small>Modrinth and CurseForge</small></div>
    </section>

    <section class="modern-feature-section">
      <div class="modern-section-heading">
        <div>
          <span class="modern-section-kicker">THE XMCL WORKFLOW</span>
          <h2>Everything your worlds need.</h2>
        </div>
        <p>Designed for players who want the power of a modded setup without the maintenance overhead.</p>
      </div>

      <div class="modern-feature-film">
        <div class="modern-feature-rail">
          <article v-for="feature in features" :key="feature.id" class="modern-feature-narrative" :class="{ active: activeFeature === feature.id }" :data-feature-id="feature.id">
            <div class="modern-feature-narrative-marker">{{ feature.index }}</div>
            <div class="modern-feature-narrative-copy">
              <span class="modern-feature-scene-index">{{ feature.index }} / 04</span>
              <h3>{{ feature.title }}</h3>
              <span class="modern-feature-scene-short">{{ feature.short }}</span>
              <p>{{ feature.description }}</p>
              <a :href="feature.link" target="_blank" rel="noreferrer">{{ feature.linkLabel }} <span aria-hidden="true">+</span></a>
            </div>
          </article>
        </div>
        <div class="modern-feature-stage-column">
          <div class="modern-feature-stage" :class="`modern-feature-stage-${activeFeatureData.index}`">
            <div class="modern-stage-label"><span>XMCL / WORKFLOW</span><span>{{ activeFeatureData.index }} / 04</span></div>
            <div class="modern-stage-window-bar"><span></span><span></span><span></span><small>{{ activeFeatureData.title }}</small></div>
            <div class="modern-stage-screen">
              <Transition name="feature-screen" mode="out-in">
                <AppPicture :key="activeFeatureData.id" :value="activeFeatureData.image" :alt="activeFeatureData.alt" loading="eager" decoding="async" />
              </Transition>
            </div>
            <div class="modern-stage-caption"><strong>{{ activeFeatureData.short }}</strong><span>SCROLL TO EXPLORE</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="modern-open-source" aria-labelledby="open-source-title">
      <div class="modern-open-source-inner">
        <header class="modern-open-source-header">
          <div>
            <span class="modern-section-kicker">OPEN SOURCE PULSE</span>
            <h2 id="open-source-title">Built in public.</h2>
          </div>
          <a class="modern-open-source-link" :href="githubUrl" target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">+</span></a>
        </header>

        <div class="modern-open-source-grid">
          <div class="modern-github-stats">
            <div class="modern-pulse-heading"><span>GITHUB REPOSITORY</span><span class="modern-pulse-live"><span></span> BUILD SNAPSHOT</span></div>
            <div class="modern-stat-grid">
              <a class="modern-stat" :href="`${githubUrl}/releases`" target="_blank" rel="noreferrer">
                <strong>{{ formatCount(githubStats.downloads) }}</strong><span>Downloads</span>
              </a>
              <a class="modern-stat" :href="githubUrl" target="_blank" rel="noreferrer">
                <strong>{{ formatCount(githubStats.stars) }}</strong><span>Stars</span>
              </a>
              <a class="modern-stat" :href="`${githubUrl}/network`" target="_blank" rel="noreferrer">
                <strong>{{ formatCount(githubStats.forks) }}</strong><span>Forks</span>
              </a>
              <a class="modern-stat" :href="githubIssuesUrl" target="_blank" rel="noreferrer">
                <strong>{{ formatCount(githubStats.issues) }}</strong><span>Open issues</span>
              </a>
            </div>
            <p class="modern-stats-note">GitHub project signals captured when this site was built.</p>
          </div>

          <div class="modern-support-column">
            <div class="modern-contributor-panel">
              <div class="modern-pulse-heading"><span>CONTRIBUTORS</span><span>{{ githubContributors.length || '--' }} IN VIEW</span></div>
              <div v-if="githubContributors.length" class="modern-avatar-list">
                <a v-for="contributor in githubContributors" :key="contributor.login" class="modern-contributor-avatar" :href="contributor.html_url" :title="`${contributor.login} - ${contributor.contributions} contributions`" target="_blank" rel="noreferrer">
                  <img :src="contributor.avatar_url" :alt="contributor.login" loading="lazy" />
                </a>
              </div>
              <p>Every issue, pull request, translation, and idea helps shape the next release.</p>
            </div>

            <div class="modern-sponsor-panel">
              <span class="modern-sponsor-label">SPONSOR XMCL</span>
              <h3>Keep the launcher moving.</h3>
              <p>Support maintenance, releases, and the people building XMCL in the open.</p>
              <div class="modern-sponsor-links">
                <a href="https://afdian.com/@ci010" target="_blank" rel="noreferrer">Afdian <span aria-hidden="true">+</span></a>
                <a href="https://patreon.com/xmcl" target="_blank" rel="noreferrer">Patreon <span aria-hidden="true">+</span></a>
              </div>
              <div class="modern-sponsor-partners">
                <span>SUPPORTED BY</span>
                <a href="https://signpath.io/" target="_blank" rel="noreferrer"><span class="modern-sponsor-logo modern-sponsor-logo-signpath" aria-hidden="true">S</span><span>SignPath</span></a>
                <a href="https://deno.com/deploy" target="_blank" rel="noreferrer"><span class="modern-sponsor-logo modern-sponsor-logo-deno i-simple-icons:deno" aria-hidden="true"></span><span>Deno Deploy</span></a>
                <a href="https://edgeone.ai/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/Voxelum/x-minecraft-launcher/master/assets/EdgeOne.png" alt="Tencent EdgeOne" /><span>Tencent EdgeOne</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="download" class="modern-download-section">
      <div class="modern-download-panel">
        <div class="modern-download-copy">
          <span class="modern-section-kicker">YOUR NEXT ADVENTURE</span>
          <h2>Ready when you are.</h2>
          <p>{{ t('launcher.description') }}</p>
          <a class="modern-text-link" :href="prebuildsUrl">{{ t('prebuild.entryHint') }} <span aria-hidden="true">+</span></a>
        </div>
        <div class="modern-download-control">
          <div class="modern-download-heading"><span class="modern-live-dot"></span><span>{{ t('auto-source') }}</span></div>
          <ClientOnly>
            <component :is="platformDownload" class="modern-download-component" :organized="true" />
            <p v-if="platform === 'Mac'" class="modern-download-note">{{ t('downloadMacHint.content').replace('{link}', t('downloadMacHint.link')) }}</p>
          </ClientOnly>
        </div>
      </div>
    </section>

    <footer class="modern-footer">
      <a class="modern-footer-brand" href="#top"><img src="/logo.svg" alt="" /> <span>XMCL</span></a>
      <div class="modern-footer-links">
        <a :href="guideUrl">{{ t('guide') }}</a>
        <a :href="prebuildsUrl">{{ t('prebuild.download') }}</a>
        <a :href="githubIssuesUrl" target="_blank" rel="noreferrer">Issues</a>
        <a href="https://discord.gg/W5XVwYY7GQ" target="_blank" rel="noreferrer">Discord</a>
        <a href="/legacy/">Legacy home</a>
        <a :href="githubUrl" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <span class="modern-footer-note">X Minecraft Launcher</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { data as githubData } from '../composables/github.data'
import { data } from '../composables/latest.data'
import { useGFW } from '../composables/useGFW'
import { useI18nSync } from '../composables/useI18nSync'
import { usePlatform } from '../composables/usePlatform'
import AppPicture from './AppPicture.vue'
import Linux from './Linux.vue'
import Mac from './Mac.vue'
import Win32 from './Win32.vue'

import homePicture from '../assets/home.png?w=400;800&format=avif;webp;jpg&as=picture'
import installPicture from '../assets/install.png?w=400;800&format=avif;webp;jpg&as=picture'
import instancesPicture from '../assets/instances.png?w=400;800&format=avif;webp;jpg&as=picture'
import modrinthPicture from '../assets/modrinth.png?w=400;800&format=avif;webp;jpg&as=picture'

const { t, locale } = useI18n()
const { site } = useData()
const platform = usePlatform()
const activeFeature = ref('install')
const githubStats = githubData.stats
const githubContributors = githubData.contributors

useGFW()
useI18nSync()

const heroTransition = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  transition: { ease: [0.22, 1, 0.36, 1], duration: 700, delay: 180 },
}

const guideUrl = computed(() => `${site.value.base}${locale.value}/guide/install`)
const prebuildsUrl = computed(() => `${site.value.base}${locale.value}/prebuilds`)
const platformDownload = computed(() => platform === 'Mac' ? Mac : platform === 'Linux' ? Linux : Win32)
const githubUrl = 'https://github.com/voxelum/x-minecraft-launcher'
const githubIssuesUrl = `${githubUrl}/issues`

const formatCount = (value: number | null) => value === null
  ? '--'
  : new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value)

let featureObserver: IntersectionObserver | undefined

onMounted(() => {
  const scenes = document.querySelectorAll<HTMLElement>('.modern-feature-narrative')
  featureObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
    const featureId = visible?.target.getAttribute('data-feature-id')
    if (featureId) activeFeature.value = featureId
  }, { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.5, 0.8] })
  scenes.forEach(scene => featureObserver?.observe(scene))
})

onBeforeUnmount(() => featureObserver?.disconnect())

const features = computed(() => [
  {
    id: 'install', index: '01', title: t('gameInstall.title.gameInstall'), short: 'Vanilla, Forge, Fabric',
    description: t('gameInstall.description'), image: installPicture, alt: 'Minecraft installation flow',
    link: 'https://bmclapidoc.bangbang93.com/', linkLabel: 'BMCL API',
  },
  {
    id: 'library', index: '02', title: t('optimalDisk.title.optimal'), short: 'No duplicated resources',
    description: t('optimalDisk.description'), image: homePicture, alt: 'XMCL resource library',
    link: 'https://en.wikipedia.org/wiki/Hard_link', linkLabel: 'How hard links work',
  },
  {
    id: 'instances', index: '03', title: t('cleanWorkspace.title.clean'), short: 'Separate every setup',
    description: t('cleanWorkspace.description'), image: instancesPicture, alt: 'XMCL instances manager',
    link: `${site.value.base}${locale.value}/guide/manage`, linkLabel: t('guide'),
  },
  {
    id: 'community', index: '04', title: t('communityIntegration.title.multipleCommunities'), short: 'Modrinth, CurseForge, more',
    description: t('communityIntegration.description'), image: modrinthPicture, alt: 'XMCL community integrations',
    link: 'https://modrinth.com/', linkLabel: 'Modrinth',
  },
])

const activeFeatureData = computed(() => features.value.find(feature => feature.id === activeFeature.value) || features.value[0])
</script>

<style scoped>
:global(body:has(.xmcl-modern) .VPFooter) { display: none; }

:global(body:has(.xmcl-modern)) {
  --vp-c-bg: #f4f5ef;
  --vp-c-bg-alt: #e9ece4;
  --vp-c-bg-elv: #ffffff;
  --vp-c-bg-soft: #edf0ea;
  --vp-c-divider: #d8ded7;
  --vp-c-text-1: #17211f;
  --vp-c-text-2: #64706c;
  --vp-c-text-3: #87918c;
  --vp-c-brand-1: #e45e42;
  --vp-c-brand-2: #c94f37;
  --vp-c-brand-3: #ff7757;
  background: #f4f5ef;
  color: #17211f;
  font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif;
}

:global(body:has(.xmcl-modern) .VPNav) {
  background: rgba(244, 245, 239, 0.9) !important;
  border-bottom: 1px solid #d8ded7 !important;
  box-shadow: none !important;
  color: #17211f;
}

:global(body:has(.xmcl-modern) .VPNavBar) {
  background: transparent !important;
}

:global(body:has(.xmcl-modern) .VPNavBar .container) {
  max-width: 1400px !important;
  padding-left: clamp(20px, 7vw, 112px) !important;
  padding-right: clamp(20px, 7vw, 112px) !important;
}

:global(body:has(.xmcl-modern) .VPNavBarTitle .title) {
  color: #17211f !important;
  font-family: inherit;
  font-size: 14px !important;
  font-weight: 800 !important;
  letter-spacing: 0 !important;
}

:global(body:has(.xmcl-modern) .VPNavBarMenuLink) {
  border: 1px solid transparent !important;
  border-radius: 6px !important;
  color: #64706c !important;
  font-family: inherit;
  font-size: 12px !important;
  font-weight: 700 !important;
  height: 34px !important;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

:global(body:has(.xmcl-modern) .VPNavBarMenuLink:hover),
:global(body:has(.xmcl-modern) .VPNavBarMenuLink.active) {
  background: #c9f85a !important;
  border-color: #17211f !important;
  color: #17211f !important;
  transform: none;
}

:global(body:has(.xmcl-modern) .VPNavBarMenuLink::before) {
  filter: saturate(0.7);
}

:global(body:has(.xmcl-modern) .VPFlyout .button),
:global(body:has(.xmcl-modern) .VPNavBarAppearance .VPSwitchAppearance) {
  border: 1px solid #d8ded7 !important;
  border-radius: 6px !important;
  color: #64706c !important;
  font-family: inherit;
}

:global(body:has(.xmcl-modern) .VPFlyout .button:hover),
:global(body:has(.xmcl-modern) .VPNavBarAppearance .VPSwitchAppearance:hover) {
  background: #ffffff !important;
  border-color: #17211f !important;
  box-shadow: none !important;
  color: #17211f !important;
}

:global(body:has(.xmcl-modern) .VPSocialLink) {
  background: transparent !important;
  border: 1px solid transparent !important;
  border-radius: 6px !important;
  color: #64706c !important;
  height: 32px !important;
  width: 32px !important;
}

:global(body:has(.xmcl-modern) .VPSocialLink:hover) {
  background: #ffffff !important;
  border-color: #d8ded7 !important;
  box-shadow: none !important;
  color: #17211f !important;
  transform: none;
}

:global(body:has(.xmcl-modern) .VPFlyout .menu) {
  background: #ffffff !important;
  border: 1px solid #d8ded7 !important;
  border-radius: 6px !important;
  box-shadow: 5px 5px 0 #17211f !important;
  padding: 6px !important;
}

:global(body:has(.xmcl-modern) .VPFlyout .option:hover) {
  background: #c9f85a !important;
  color: #17211f !important;
}

:global(body:has(.xmcl-modern) .VPNavScreen) {
  background: #f4f5ef !important;
  border-top: 1px solid #d8ded7 !important;
}

:global(body:has(.xmcl-modern) .VPNavScreenMenuLink) {
  border-bottom: 1px solid #d8ded7 !important;
  color: #17211f !important;
  font-family: inherit;
}

:global(body:has(.xmcl-modern) .VPNavScreenMenuLink:hover) {
  background: #c9f85a !important;
}

:global(body:has(.xmcl-modern) .VPContent) {
  background: #f4f5ef;
  padding-bottom: 0 !important;
}

:global(html.dark body:has(.xmcl-modern)) {
  --vp-c-bg: #101612;
  --vp-c-bg-alt: #151d18;
  --vp-c-bg-elv: #1b241f;
  --vp-c-bg-soft: #1d2821;
  --vp-c-divider: #334139;
  --vp-c-text-1: #edf3ed;
  --vp-c-text-2: #9aa9a1;
  --vp-c-text-3: #718078;
  --vp-c-brand-1: #c9f85a;
  --vp-c-brand-2: #b3e444;
  --vp-c-brand-3: #d8ff7b;
  background: #101612;
  color: #edf3ed;
}

:global(html.dark body:has(.xmcl-modern) .VPNav) {
  background: rgba(16, 22, 18, 0.92) !important;
  border-bottom-color: #334139 !important;
  color: #edf3ed;
}

:global(html.dark body:has(.xmcl-modern) .VPNavBarTitle .title),
:global(html.dark body:has(.xmcl-modern) .VPNavBarMenuLink) {
  color: #edf3ed !important;
}

:global(html.dark body:has(.xmcl-modern) .VPNavBarMenuLink:hover),
:global(html.dark body:has(.xmcl-modern) .VPNavBarMenuLink.active) {
  background: #c9f85a !important;
  border-color: #c9f85a !important;
  color: #17211f !important;
}

:global(html.dark body:has(.xmcl-modern) .VPFlyout .button),
:global(html.dark body:has(.xmcl-modern) .VPNavBarAppearance .VPSwitchAppearance),
:global(html.dark body:has(.xmcl-modern) .VPSocialLink) {
  border-color: #334139 !important;
  color: #9aa9a1 !important;
}

:global(html.dark body:has(.xmcl-modern) .VPFlyout .button:hover),
:global(html.dark body:has(.xmcl-modern) .VPNavBarAppearance .VPSwitchAppearance:hover),
:global(html.dark body:has(.xmcl-modern) .VPSocialLink:hover) {
  background: #1d2821 !important;
  border-color: #718078 !important;
  color: #edf3ed !important;
}

:global(html.dark body:has(.xmcl-modern) .VPFlyout .menu) {
  background: #1b241f !important;
  border-color: #334139 !important;
  box-shadow: 5px 5px 0 #050806 !important;
}

:global(html.dark body:has(.xmcl-modern) .VPFlyout .option:hover),
:global(html.dark body:has(.xmcl-modern) .VPNavScreenMenuLink:hover) {
  background: #c9f85a !important;
  color: #17211f !important;
}

:global(html.dark body:has(.xmcl-modern) .VPNavScreen) {
  background: #101612 !important;
  border-top-color: #334139 !important;
}

:global(html.dark body:has(.xmcl-modern) .VPNavScreenMenuLink) {
  border-bottom-color: #334139 !important;
  color: #edf3ed !important;
}

:global(html.dark body:has(.xmcl-modern) .VPContent) {
  background: #101612;
}

.xmcl-modern {
  --modern-ink: #17211f;
  --modern-muted: #64706c;
  --modern-paper: #f4f5ef;
  --modern-panel: #ffffff;
  --modern-soft: #e9ece4;
  --modern-line: #d8ded7;
  --modern-lime: #c9f85a;
  --modern-orange: #ff7757;
  --modern-blue: #a9dcff;
  background: var(--modern-paper);
  color: var(--modern-ink);
  font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif;
  overflow: clip;
}

:global(html.dark .xmcl-modern) {
  --modern-ink: #edf3ed;
  --modern-muted: #9aa9a1;
  --modern-paper: #101612;
  --modern-panel: #1b241f;
  --modern-soft: #151d18;
  --modern-line: #334139;
  --modern-lime: #c9f85a;
  --modern-orange: #ff8060;
  --modern-blue: #a9dcff;
}

:global(html.dark .modern-grid) {
  background-image: linear-gradient(to right, rgba(237, 243, 237, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(237, 243, 237, 0.07) 1px, transparent 1px);
}

:global(html.dark .modern-button-primary) {
  background: #c9f85a;
  border-color: #c9f85a;
  color: #17211f;
}

:global(html.dark .modern-button-quiet) {
  border-color: #edf3ed;
  color: #edf3ed;
}

:global(html.dark .modern-button:hover) {
  box-shadow: 4px 4px 0 #c9f85a;
}

:global(html.dark .modern-feature-preview) {
  background: #1b241f;
}

:global(html.dark .modern-download-section) {
  background: #080d0a;
}

:global(html.dark .modern-download-copy h2),
:global(html.dark .modern-download-copy .modern-text-link) {
  color: #17211f;
}

.modern-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  min-height: min(820px, calc(100vh - 64px));
  padding: 88px clamp(24px, 7vw, 112px) 72px;
  position: relative;
  isolation: isolate;
}

.modern-grid {
  background-image: linear-gradient(to right, rgba(23, 33, 31, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 33, 31, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
  inset: 0;
  mask-image: linear-gradient(to bottom, black, transparent 90%);
  pointer-events: none;
  position: absolute;
  z-index: -1;
}

.modern-hero-content {
  align-self: center;
  max-width: 600px;
  padding: 30px 0 50px;
  position: relative;
  z-index: 1;
}

.modern-kicker, .modern-section-kicker, .modern-card-overline, .modern-visual-label, .modern-preview-topline, .modern-download-heading, .modern-proof-row strong {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.modern-kicker {
  align-items: center;
  color: var(--modern-muted);
  display: flex;
  gap: 10px;
}

.modern-kicker-dot, .modern-live-dot {
  background: #77b82a;
  border-radius: 50%;
  display: inline-block;
  height: 8px;
  width: 8px;
}

.modern-hero h1 {
  font-size: clamp(52px, 7vw, 104px);
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 0.94;
  margin: 28px 0 22px;
  max-width: 700px;
}

.modern-hero-copy {
  color: var(--modern-ink);
  font-size: clamp(20px, 2.2vw, 30px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.18;
  margin: 0;
  max-width: 540px;
}

.modern-hero-copy span:first-child { color: #e45e42; }
.modern-hero-copy span:last-child { color: #5d9624; }

.modern-hero-description {
  color: var(--modern-muted);
  font-size: 16px;
  line-height: 1.7;
  margin: 24px 0 0;
  max-width: 540px;
}

.modern-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }

.modern-button {
  align-items: center;
  border: 1px solid var(--modern-ink);
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  gap: 10px;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.modern-button:hover { box-shadow: 4px 4px 0 var(--modern-ink); transform: translate(-2px, -2px); }
.modern-button-primary { background: var(--modern-ink); color: white; }
.modern-button-quiet { background: transparent; color: var(--modern-ink); }
.modern-button-quiet:hover { background: var(--modern-lime); }

.modern-hero-meta { align-items: center; color: var(--modern-muted); display: flex; flex-wrap: wrap; font-size: 12px; gap: 14px; margin-top: 34px; }
.modern-meta-item { align-items: center; display: inline-flex; gap: 7px; }
.modern-meta-divider { background: var(--modern-line); height: 14px; width: 1px; }
.modern-meta-link:hover { color: var(--modern-ink); }

.modern-hero-visual { align-self: center; justify-self: start; max-width: 760px; padding: 42px 32px 78px 24px; position: relative; width: 100%; }
.modern-visual-label { color: var(--modern-muted); left: 0; position: absolute; top: 0; }
.modern-screenshot-frame { background: #202925; border: 1px solid var(--modern-ink); box-shadow: 14px 14px 0 var(--modern-orange); padding: 12px 12px 0; transform: rotate(2deg); }
.modern-window-bar { align-items: center; color: #8e9c94; display: flex; gap: 6px; height: 32px; padding: 0 6px; }
.modern-window-bar > span { background: #64716b; border-radius: 50%; height: 7px; width: 7px; }
.modern-window-bar small { font-size: 8px; letter-spacing: 0.14em; margin-left: auto; }
.modern-screenshot-frame img { display: block; height: auto; width: 100%; }
.modern-floating-card { background: var(--modern-panel); border: 1px solid var(--modern-ink); box-shadow: 5px 5px 0 var(--modern-ink); position: absolute; }
.modern-floating-version { bottom: 20px; padding: 14px 18px; right: 0; transform: rotate(-3deg); }
.modern-card-overline { color: var(--modern-muted); display: block; font-size: 9px; margin-bottom: 5px; }
.modern-floating-version strong { display: block; font-size: 22px; letter-spacing: -0.04em; }
.modern-live-dot { height: 6px; margin-right: 6px; width: 6px; }
.modern-floating-version .modern-live-dot { color: #5d9624; display: block; font-size: 9px; letter-spacing: 0.12em; margin-top: 9px; width: auto; }
.modern-floating-stack { align-items: center; display: flex; gap: 11px; left: 6px; padding: 12px 14px; top: 76px; transform: rotate(-4deg); }
.modern-stack-icon { align-items: center; background: var(--modern-lime); display: flex; font-size: 18px; height: 34px; justify-content: center; width: 34px; }
.modern-floating-stack strong, .modern-floating-stack small { display: block; }
.modern-floating-stack strong { font-size: 12px; }
.modern-floating-stack small { color: var(--modern-muted); font-size: 10px; margin-top: 3px; }

.modern-proof-row { border-bottom: 1px solid var(--modern-line); border-top: 1px solid var(--modern-line); display: grid; grid-template-columns: repeat(3, 1fr); margin: 0 clamp(24px, 7vw, 112px); }
.modern-proof-row > div { align-items: center; border-right: 1px solid var(--modern-line); display: grid; gap: 2px 12px; grid-template-columns: auto 1fr; padding: 20px 24px; }
.modern-proof-row > div:last-child { border-right: 0; }
.modern-proof-row > div > span { color: #e45e42; grid-row: span 2; }
.modern-proof-row small { color: var(--modern-muted); font-size: 12px; }

.modern-feature-section { margin: 0 auto; max-width: 1400px; padding: 140px clamp(24px, 7vw, 112px); }
.modern-section-kicker { color: #e45e42; display: block; margin-bottom: 16px; }
.modern-section-heading { align-items: end; display: flex; gap: 40px; justify-content: space-between; margin-bottom: 48px; }
.modern-section-heading h2, .modern-download-copy h2 { font-size: clamp(36px, 5vw, 64px); letter-spacing: -0.05em; line-height: 0.98; margin: 0; }
.modern-section-heading p { color: var(--modern-muted); line-height: 1.6; margin: 0 0 3px; max-width: 340px; }
.modern-feature-film { display: grid; gap: clamp(34px, 7vw, 100px); grid-template-columns: minmax(300px, 0.8fr) minmax(0, 1.2fr); }
.modern-feature-rail { border-left: 1px solid var(--modern-line); }
.modern-feature-narrative { align-items: start; display: grid; gap: 22px; grid-template-columns: 42px 1fr; min-height: 500px; opacity: 0.42; padding: 30px 20px 30px 0; position: relative; scroll-margin-top: 120px; transition: opacity 220ms ease; }
.modern-feature-narrative::before { background: var(--modern-line); content: ''; height: 1px; left: -1px; position: absolute; right: 0; top: 0; }
.modern-feature-narrative.active { opacity: 1; }
.modern-feature-narrative-marker { color: var(--modern-muted); font-size: 11px; font-weight: 700; padding-top: 5px; text-align: center; }
.modern-feature-narrative.active .modern-feature-narrative-marker { background: var(--modern-lime); color: #17211f; padding: 5px 0; }
.modern-feature-narrative-copy { max-width: 390px; }
.modern-feature-scene-index { color: var(--modern-orange); display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; }
.modern-feature-narrative-copy h3 { color: var(--modern-ink); font-size: clamp(30px, 4vw, 52px); letter-spacing: -0.05em; line-height: 0.98; margin: 22px 0 12px; }
.modern-feature-scene-short { color: var(--modern-muted); display: block; font-size: 13px; font-weight: 700; }
.modern-feature-narrative-copy p { color: var(--modern-muted); font-size: 14px; line-height: 1.7; margin: 24px 0 0; }
.modern-feature-narrative-copy a { color: var(--modern-ink); display: inline-flex; font-size: 13px; font-weight: 700; gap: 8px; margin-top: 22px; }
.modern-feature-narrative-copy a:hover { color: var(--modern-orange); }
.modern-feature-stage-column { min-width: 0; }
.modern-feature-stage { background: #e4e8e1; border: 1px solid var(--modern-ink); box-shadow: 14px 14px 0 var(--modern-orange); padding: 18px; position: sticky; top: 112px; }
:global(html.dark .modern-feature-stage) { background: #1b241f; }
.modern-stage-label, .modern-stage-caption { align-items: center; color: var(--modern-muted); display: flex; font-size: 9px; font-weight: 700; justify-content: space-between; letter-spacing: 0.14em; text-transform: uppercase; }
.modern-stage-label { margin-bottom: 14px; }
.modern-stage-window-bar { align-items: center; background: #202925; color: #8e9c94; display: flex; gap: 6px; height: 32px; padding: 0 10px; }
.modern-stage-window-bar > span { background: #64716b; border-radius: 50%; height: 7px; width: 7px; }
.modern-stage-window-bar small { font-size: 8px; letter-spacing: 0.14em; margin-left: auto; }
.modern-stage-screen { background: #202925; min-height: 330px; overflow: hidden; }
.modern-stage-screen img { display: block; height: 100%; object-fit: cover; width: 100%; }
.modern-stage-caption { border-top: 1px solid var(--modern-line); margin-top: 14px; padding-top: 14px; }
.modern-stage-caption strong { color: var(--modern-ink); font-size: 12px; letter-spacing: 0; text-transform: none; }
.feature-screen-enter-active, .feature-screen-leave-active { transition: opacity 220ms ease, transform 220ms ease; }
.feature-screen-enter-from { opacity: 0; transform: translateY(10px); }
.feature-screen-leave-to { opacity: 0; transform: translateY(-10px); }
.modern-preview-topline { color: var(--modern-muted); display: flex; font-size: 9px; justify-content: space-between; margin-bottom: 14px; }
.modern-text-link { color: var(--modern-ink); display: inline-flex; font-size: 13px; font-weight: 700; gap: 8px; margin-top: 16px; }
.modern-text-link:hover { color: #e45e42; }

.modern-download-section { background: var(--modern-ink); padding: 100px clamp(24px, 7vw, 112px); }
.modern-download-panel { align-items: center; background: var(--modern-lime); display: grid; gap: 64px; grid-template-columns: minmax(230px, 0.75fr) minmax(0, 1.25fr); margin: 0 auto; max-width: 1176px; padding: clamp(28px, 5vw, 64px); }
.modern-download-copy p { color: #405035; font-size: 15px; line-height: 1.65; margin: 24px 0 0; max-width: 380px; }
.modern-download-copy .modern-text-link { border-bottom: 1px solid #405035; padding-bottom: 3px; }
.modern-download-control { background: var(--modern-panel); border: 1px solid var(--modern-ink); padding: 20px; }
.modern-download-heading { align-items: center; display: flex; gap: 9px; margin-bottom: 18px; }
.modern-download-component :deep(.download-os-card) { margin: 0; }
.modern-download-component :deep(.download-section-header) { display: none; }
.modern-download-component :deep(.download-buttons-flex) { align-items: stretch; gap: 8px; }
.modern-download-component :deep(.download-btn-base) { border-radius: 0; min-height: 42px; }
.modern-download-note { color: var(--modern-muted); font-size: 11px; line-height: 1.5; margin: 12px 0 0; }

.modern-open-source { background: var(--modern-paper); border-bottom: 1px solid var(--modern-line); padding: 100px clamp(24px, 7vw, 112px); }
.modern-open-source-inner { margin: 0 auto; max-width: 1176px; }
.modern-open-source-header { align-items: end; display: flex; justify-content: space-between; margin-bottom: 42px; }
.modern-open-source-header h2 { font-size: clamp(36px, 5vw, 64px); letter-spacing: -0.05em; line-height: 0.98; margin: 0; }
.modern-open-source-link { border-bottom: 1px solid var(--modern-ink); color: var(--modern-ink); display: inline-flex; font-size: 13px; font-weight: 700; gap: 8px; padding-bottom: 4px; }
.modern-open-source-link:hover { border-color: var(--modern-orange); color: var(--modern-orange); }
.modern-open-source-grid { display: grid; gap: 12px; grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr); }
.modern-github-stats, .modern-contributor-panel, .modern-sponsor-panel { border: 1px solid var(--modern-line); padding: 24px; }
.modern-github-stats { background: var(--modern-panel); }
.modern-pulse-heading { align-items: center; color: var(--modern-muted); display: flex; font-size: 10px; font-weight: 700; justify-content: space-between; letter-spacing: 0.14em; text-transform: uppercase; }
.modern-pulse-live { align-items: center; color: #5d9624; display: inline-flex; gap: 7px; }
.modern-pulse-live > span { background: #77b82a; border-radius: 50%; height: 6px; width: 6px; }
.modern-stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 42px; }
.modern-stat { border-right: 1px solid var(--modern-line); color: var(--modern-ink); display: flex; flex-direction: column; gap: 8px; padding: 0 18px; }
.modern-stat:first-child { padding-left: 0; }
.modern-stat:last-child { border-right: 0; padding-right: 0; }
.modern-stat:hover strong { color: var(--modern-orange); }
.modern-stat strong { font-size: clamp(25px, 3vw, 38px); letter-spacing: -0.06em; line-height: 1; }
.modern-stat span { color: var(--modern-muted); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.modern-stats-note, .modern-contributor-panel p, .modern-sponsor-panel p { color: var(--modern-muted); font-size: 12px; line-height: 1.6; margin: 28px 0 0; }
.modern-support-column { display: grid; gap: 12px; grid-template-rows: 1fr auto; }
.modern-contributor-panel { background: var(--modern-soft, #e9ece4); }
.modern-avatar-list { display: flex; flex-wrap: wrap; gap: 0; margin: 30px 0 0; padding-left: 8px; }
.modern-contributor-avatar { border: 3px solid var(--modern-soft, #e9ece4); border-radius: 50%; height: 44px; margin-left: -8px; overflow: hidden; transition: transform 180ms ease, border-color 180ms ease; width: 44px; }
.modern-contributor-avatar:hover { border-color: var(--modern-orange); transform: translateY(-4px); z-index: 1; }
.modern-contributor-avatar img { display: block; height: 100%; object-fit: cover; width: 100%; }
.modern-sponsor-panel { background: var(--modern-lime); border-color: var(--modern-ink); }
.modern-sponsor-label { color: #405035; display: block; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; }
.modern-sponsor-panel h3 { color: #17211f; font-size: 25px; letter-spacing: -0.04em; line-height: 1.05; margin: 12px 0 0; }
.modern-sponsor-panel p { color: #405035; margin-top: 10px; }
.modern-sponsor-links { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 22px; }
.modern-sponsor-links a { border-bottom: 1px solid #17211f; color: #17211f; display: inline-flex; font-size: 12px; font-weight: 700; gap: 6px; padding-bottom: 3px; }
.modern-sponsor-links a:hover { border-color: #e45e42; color: #e45e42; }
.modern-sponsor-partners { align-items: center; border-top: 1px solid rgba(23, 33, 31, 0.22); display: flex; flex-wrap: wrap; gap: 10px 16px; margin-top: 24px; padding-top: 14px; }
.modern-sponsor-partners > span { color: #405035; font-size: 9px; font-weight: 700; letter-spacing: 0.12em; width: 100%; }
.modern-sponsor-partners a { align-items: center; color: #405035; display: inline-flex; font-size: 11px; font-weight: 700; gap: 6px; }
.modern-sponsor-partners a img { filter: grayscale(1) contrast(0.9); height: 20px; max-width: 72px; object-fit: contain; width: auto; }
.modern-sponsor-logo { display: inline-block; height: 20px; width: 20px; }
.modern-sponsor-logo-deno { color: #405035; }
.modern-sponsor-logo-signpath { align-items: center; border: 1px solid currentColor; color: #405035; display: inline-flex; font-size: 13px; font-weight: 800; justify-content: center; }
.modern-sponsor-partners a:hover { color: #e45e42; }
.modern-sponsor-partners a:hover img { filter: none; }

.modern-footer { align-items: center; background: var(--modern-paper); border-top: 1px solid var(--modern-line); display: flex; gap: 24px; justify-content: space-between; padding: 28px clamp(24px, 7vw, 112px); }
.modern-footer-brand { align-items: center; display: inline-flex; font-size: 14px; font-weight: 800; gap: 8px; }
.modern-footer-brand img { height: 24px; width: 24px; }
.modern-footer-links { display: flex; flex-wrap: wrap; gap: 20px; }
.modern-footer-links, .modern-footer-note { color: var(--modern-muted); font-size: 12px; }
.modern-footer-links a:hover { color: var(--modern-ink); }

@media (max-width: 900px) {
  .modern-hero { grid-template-columns: 1fr; padding-top: 64px; }
  .modern-hero-content { padding-bottom: 30px; }
  .modern-hero-visual { justify-self: center; max-width: 650px; }
  .modern-section-heading { align-items: start; flex-direction: column; gap: 18px; }
  .modern-feature-film, .modern-download-panel { grid-template-columns: 1fr; }
  .modern-feature-stage-column { order: -1; }
  .modern-feature-stage { top: 88px; }
  .modern-download-panel { gap: 32px; }
  .modern-open-source-grid { grid-template-columns: 1fr; }
}

@media (max-width: 620px) {
  .modern-hero { min-height: auto; padding: 46px 20px 60px; }
  .modern-hero h1 { font-size: 54px; }
  .modern-hero-actions .modern-button { flex: 1; }
  .modern-hero-meta { gap: 9px; }
  .modern-hero-visual { padding: 40px 14px 80px 20px; }
  .modern-screenshot-frame { box-shadow: 8px 8px 0 var(--modern-orange); }
  .modern-floating-stack { left: -4px; }
  .modern-floating-version { right: -4px; }
  .modern-proof-row { grid-template-columns: 1fr; margin: 0 20px; }
  .modern-proof-row > div { border-bottom: 1px solid var(--modern-line); border-right: 0; }
  .modern-proof-row > div:last-child { border-bottom: 0; }
  .modern-feature-section { padding: 86px 20px; }
  .modern-feature-narrative { min-height: 430px; padding-right: 0; }
  .modern-feature-narrative-copy { max-width: none; }
  .modern-feature-stage { box-shadow: 6px 6px 0 var(--modern-orange); padding: 12px; top: 74px; }
  .modern-stage-screen { min-height: 220px; }
  .modern-download-section { padding: 64px 20px; }
  .modern-open-source { padding: 72px 20px; }
  .modern-open-source-header { align-items: start; flex-direction: column; gap: 22px; }
  .modern-github-stats, .modern-contributor-panel, .modern-sponsor-panel { padding: 20px; }
  .modern-stat-grid { grid-template-columns: repeat(2, 1fr); row-gap: 26px; }
  .modern-stat:nth-child(2) { border-right: 0; }
  .modern-stat:nth-child(3), .modern-stat:nth-child(4) { border-top: 1px solid var(--modern-line); padding-top: 26px; }
  .modern-stat:nth-child(3) { padding-left: 0; }
  .modern-download-panel { padding: 28px 20px; }
  .modern-download-control { padding: 14px; }
  .modern-download-component :deep(.download-buttons-flex) { flex-direction: column; }
  .modern-footer { align-items: start; flex-direction: column; padding: 26px 20px; }
  .modern-footer-note { display: none; }
}
</style>