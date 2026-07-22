<template>
  <footer class="site-footer" :aria-label="t('siteFooter.ariaLabel')">
    <div class="site-footer-main">
      <div class="site-footer-brand">
        <a class="site-footer-logo" :href="homeUrl"><img src="/logo.svg" alt="" /> <span>XMCL</span></a>
        <p>{{ t('siteFooter.description') }}</p>
        <span class="site-footer-status"><span class="site-footer-live-dot"></span> {{ t('siteFooter.status') }}</span>
      </div>
      <nav class="site-footer-links" :aria-label="t('siteFooter.navigation')">
        <section class="site-footer-group">
          <h2>{{ t('siteFooter.explore.title') }}</h2>
          <a :href="homeUrl">{{ t('siteFooter.explore.home') }}</a>
          <a :href="featuresUrl">{{ t('siteFooter.explore.features') }}</a>
          <a :href="guideUrl">{{ t('siteFooter.explore.documentation') }}</a>
        </section>
        <section class="site-footer-group">
          <h2>{{ t('siteFooter.useCases.title') }}</h2>
          <a :href="linuxUrl">{{ t('siteFooter.useCases.linux') }}</a>
          <a :href="creatorsUrl">{{ t('siteFooter.useCases.creators') }}</a>
          <a :href="prebuildsUrl">{{ t('siteFooter.useCases.download') }}</a>
        </section>
        <section class="site-footer-group">
          <h2>{{ t('siteFooter.resources.title') }}</h2>
          <a :href="logViewerUrl">{{ t('siteFooter.resources.logViewer') }}</a>
          <a :href="githubUrl" target="_blank" rel="noreferrer">{{ t('siteFooter.resources.github') }}</a>
          <a :href="githubIssuesUrl" target="_blank" rel="noreferrer">{{ t('siteFooter.resources.issue') }}</a>
          <a href="https://discord.gg/W5XVwYY7GQ" target="_blank" rel="noreferrer">{{ t('siteFooter.resources.discord') }}</a>
        </section>
      </nav>
    </div>
    <div class="site-footer-bottom"><span>© {{ year }} X Minecraft Launcher</span><span>{{ t('siteFooter.bottomNote') }}</span><a :href="guideUrl">{{ t('siteFooter.readDocumentation') }} <span aria-hidden="true">+</span></a></div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useI18n } from 'vue-i18n'
import { useI18nSync } from '../composables/useI18nSync'

const { lang, site } = useData()
const { t } = useI18n()
useI18nSync()
const pageUrl = (path: string) => `${site.value.base}${lang.value}/${path}`
const homeUrl = computed(() => `${site.value.base}${lang.value}/`)
const guideUrl = computed(() => pageUrl('guide/install'))
const featuresUrl = computed(() => pageUrl('features/'))
const prebuildsUrl = computed(() => pageUrl('prebuilds'))
const linuxUrl = computed(() => pageUrl('linux-minecraft-launcher'))
const creatorsUrl = computed(() => pageUrl('modpack-creator'))
const logViewerUrl = computed(() => pageUrl('log-viewer'))
const githubUrl = 'https://github.com/voxelum/x-minecraft-launcher'
const githubIssuesUrl = `${githubUrl}/issues`
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  --footer-ink: #17211f;
  --footer-muted: #a7b2aa;
  --footer-accent: #c9f85a;
  background: var(--footer-ink);
  color: var(--footer-muted);
  padding: 76px clamp(24px, 7vw, 112px) 28px;
}

.site-footer-main,
.site-footer-bottom {
  margin: 0 auto;
  max-width: 1680px;
}

.site-footer-main {
  display: grid;
  gap: 70px;
  grid-template-columns: minmax(230px, 0.7fr) minmax(0, 1.3fr);
}

.site-footer-brand {
  max-width: 280px;
}

.site-footer-logo {
  align-items: center;
  color: #fff !important;
  display: inline-flex;
  font-size: 18px;
  font-weight: 800;
  gap: 10px;
  letter-spacing: 0.02em;
}

.site-footer-logo img {
  height: 27px;
  width: 27px;
}

.site-footer-brand p {
  color: var(--footer-muted) !important;
  font-size: 13px;
  line-height: 1.7;
  margin: 24px 0 0;
}

.site-footer-status {
  align-items: center;
  color: var(--footer-accent);
  display: inline-flex;
  font-size: 10px;
  font-weight: 800;
  gap: 8px;
  letter-spacing: 0.08em;
  margin-top: 26px;
  text-transform: uppercase;
}

.site-footer-live-dot {
  background: var(--footer-accent);
  border-radius: 50%;
  display: inline-block;
  height: 7px;
  width: 7px;
}

.site-footer-links {
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(3, minmax(130px, 1fr));
}

.site-footer-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.site-footer-group h2 {
  border: 0 !important;
  color: var(--footer-accent) !important;
  font-size: 11px !important;
  font-weight: 800;
  letter-spacing: 0.13em;
  line-height: 1.2 !important;
  margin: 3px 0 10px !important;
  padding: 0 !important;
  text-transform: uppercase;
}

.site-footer-group a {
  color: var(--footer-muted);
  font-size: 13px;
  line-height: 1.4;
  transition: color 180ms ease, transform 180ms ease;
  width: fit-content;
}

.site-footer-group a:hover {
  color: var(--footer-accent);
  transform: translateX(3px);
}

.site-footer-bottom {
  align-items: center;
  border-top: 1px solid #334139;
  display: flex;
  font-size: 11px;
  gap: 20px;
  justify-content: space-between;
  margin-top: 70px;
  padding-top: 24px;
}

.site-footer-bottom a {
  color: #fff;
  font-weight: 700;
}

@media (max-width: 680px) {
  .site-footer {
    padding: 56px 22px 28px;
  }

  .site-footer-main {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .site-footer-brand {
    max-width: 420px;
  }

  .site-footer-links {
    gap: 24px 16px;
    grid-template-columns: repeat(2, minmax(130px, 1fr));
  }

  .site-footer-bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    margin-top: 52px;
  }
}
</style>
