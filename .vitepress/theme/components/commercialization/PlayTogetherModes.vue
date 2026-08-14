<template>
  <nav class="play-modes" :aria-label="t('commercial.playModes.label')">
    <a href="#friend-hosted">
      <span>{{ t('commercial.playModes.plusEyebrow') }}</span>
      <strong>{{ t('commercial.playModes.plusTitle') }}</strong>
      <p>{{ t('commercial.playModes.plusDescription') }}</p>
    </a>
    <a href="#always-online">
      <span>{{ t('commercial.playModes.serverEyebrow') }}</span>
      <strong>{{ t('commercial.playModes.serverTitle') }}</strong>
      <p>{{ t('commercial.playModes.serverDescription') }}</p>
    </a>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.play-modes { display: grid; gap: 12px; grid-template-columns: 1fr 1fr; margin-bottom: 32px; }
.play-modes a { background: var(--xmcl-panel); border: 1px solid var(--xmcl-line); border-radius: 14px; color: var(--xmcl-ink); display: grid; gap: 6px; padding: 20px 22px; text-decoration: none; transition: border-color .16s ease, transform .16s ease; }
.play-modes a:hover { border-color: var(--xmcl-ink); transform: translateY(-1px); }
.play-modes a:first-child { background: var(--xmcl-ink); border-color: var(--xmcl-ink); color: var(--xmcl-panel); }
.play-modes span { color: var(--xmcl-orange); font-size: 9px; font-weight: 850; letter-spacing: .1em; text-transform: uppercase; }
.play-modes a:first-child span { color: var(--xmcl-lime); }
.play-modes strong { font-size: 17px; }
.play-modes p { color: var(--xmcl-muted); font-size: 12px; margin: 0; }
.play-modes a:first-child p { color: color-mix(in srgb, var(--xmcl-panel) 66%, transparent); }
@media (max-width: 680px) { .play-modes { grid-template-columns: 1fr; } }
</style>
