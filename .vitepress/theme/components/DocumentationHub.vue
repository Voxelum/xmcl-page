<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { openSearchModal } from '../composables/useSearchModal'
import { getDocHubData } from '../lib/docHubI18n'

const { lang, isDark } = useData()
const isMac = ref(false)

onMounted(() => {
  isMac.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
})

const isUk = computed(() => (lang.value || 'en').toLowerCase().startsWith('uk'))
const isRu = computed(() => (lang.value || 'en').toLowerCase().startsWith('ru'))
const isZh = computed(() => (lang.value || 'en').toLowerCase().startsWith('zh'))
const currentLocale = computed(() => lang.value || 'en')

interface DocItem {
  id: string
  index: string
  title: string
  desc: string
  link: string
  badge?: string
}

interface DocBlock {
  id: string
  number: string
  code: string
  kicker: string
  title: string
  desc: string
  status: string
  accentColor: string
  items: DocItem[]
}

const hubData = computed(() => getDocHubData(lang.value || 'en'))
const t = computed(() => hubData.value)
const quickFlags = computed(() => hubData.value.quickFlagsList)
const blocks = computed(() => hubData.value.blocks)
</script>

<template>
  <div class="modern-doc-hub" :class="{ 'dark': isDark }">
    <!-- Top HUD Terminal Bar -->
    <header class="hub-terminal-header">
      <div class="hub-status-strip">
        <div class="hub-kicker-badge">
          <span class="hub-pulse-dot" aria-hidden="true"></span>
          <span class="hub-kicker-text">{{ t.kicker }}</span>
        </div>
        <div class="hub-version-tag">
          <span class="hub-tag-prefix">BUILD:</span>
          <strong>v0.56+ // PRODUCTION</strong>
        </div>
      </div>

      <div class="hub-hero-headline">
        <h1 class="hub-title">
          <span class="hub-title-light">{{ t.titleLight }}</span>
          <span class="hub-title-strong">{{ t.titleStrong }}</span>
        </h1>
        <p class="hub-lead">
          {{ t.lead }}
        </p>
      </div>

      <!-- Command Console Search Terminal -->
      <div class="hub-search-terminal">
        <div class="hub-terminal-window-bar">
          <div class="hub-terminal-dots">
            <span class="dot dot-1"></span>
            <span class="dot dot-2"></span>
            <span class="dot dot-3"></span>
          </div>
          <span class="hub-terminal-caption">bash — xmcl-docs-search --live-index</span>
          <span class="hub-terminal-hint">[INDEX: 23 PACKAGES + 18 GUIDES]</span>
        </div>

        <button
          type="button"
          class="hub-terminal-input-btn"
          :aria-label="t.searchLabel"
          @click="openSearchModal"
        >
          <div class="hub-input-inner">
            <span class="hub-cli-prompt">user@xmcl:~$</span>
            <span class="hub-cli-cmd">query-docs</span>
            <span class="hub-cli-placeholder">{{ t.searchPlaceholder }}</span>
            <span class="hub-cli-cursor">_</span>
          </div>
          <div class="hub-shortcut-keys" aria-hidden="true">
            <kbd class="hub-key">{{ isMac ? '⌘' : 'CTRL' }}</kbd>
            <span class="hub-key-plus">+</span>
            <kbd class="hub-key">K</kbd>
          </div>
        </button>

        <!-- Command Flags Strip -->
        <div class="hub-flags-row">
          <span class="hub-flags-label">{{ t.quickFlags }}</span>
          <div class="hub-flags-list">
            <a
              v-for="item in quickFlags"
              :key="item.flag"
              :href="item.link"
              class="hub-flag-chip"
            >
              <span class="chip-flag">{{ item.flag }}</span>
              <span class="chip-label">{{ item.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- 4-Quadrant Architecture Matrix -->
    <main class="hub-matrix-grid">
      <article
        v-for="block in blocks"
        :id="block.id"
        :key="block.id"
        class="hub-quadrant-card"
        :style="{ '--quadrant-accent': block.accentColor }"
      >
        <!-- Quadrant Window Bar -->
        <div class="quadrant-window-bar">
          <div class="quadrant-win-dots">
            <span class="qdot"></span>
            <span class="qdot"></span>
            <span class="qdot"></span>
          </div>
          <span class="quadrant-code">{{ block.code }}</span>
          <span class="quadrant-index">{{ block.number }}</span>
        </div>

        <!-- Quadrant Header -->
        <div class="quadrant-body-header">
          <div class="quadrant-kicker-row">
            <span class="quadrant-kicker">{{ block.kicker }}</span>
            <span class="quadrant-status">{{ block.status }}</span>
          </div>
          <h2 class="quadrant-title">{{ block.title }}</h2>
          <p class="quadrant-desc">{{ block.desc }}</p>
        </div>

        <!-- Articles Register -->
        <div class="quadrant-register">
          <div class="register-header">
            <span>{{ t.indexRegister }}</span>
            <span>{{ t.module }}</span>
          </div>

          <div class="register-list">
            <a
              v-for="item in block.items"
              :key="item.id"
              :href="item.link"
              class="register-item-link"
            >
              <div class="register-item-idx">{{ item.index }}</div>
              <div class="register-item-content">
                <div class="register-item-topline">
                  <strong class="register-item-title">{{ item.title }}</strong>
                  <span v-if="item.badge" class="register-item-badge">{{ item.badge }}</span>
                </div>
                <p class="register-item-desc">{{ item.desc }}</p>
              </div>
              <span class="register-item-action" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <!-- Quadrant Terminal Jump -->
        <div class="quadrant-card-footer">
          <a :href="block.items[0]?.link" class="quadrant-action-btn">
            <span class="btn-prefix">&gt;</span>
            <span class="btn-text">{{ isUk ? 'ПЕРЕГЛЯНУТИ РОЗДІЛ' : 'VIEW MODULE SPECS' }}</span>
            <span class="btn-arrow" aria-hidden="true">+</span>
          </a>
        </div>
      </article>
    </main>

    <!-- Bottom Developer & Community Consoles -->
    <section class="hub-consoles-section">
      <!-- Community Console -->
      <div class="hub-console-card console-community">
        <div class="console-window-bar">
          <div class="quadrant-win-dots">
            <span class="qdot"></span>
            <span class="qdot"></span>
            <span class="qdot"></span>
          </div>
          <span class="console-label">RELAY // 01</span>
          <span class="console-status">LIVE PEERS</span>
        </div>
        <div class="console-body">
          <div class="console-meta-kicker">{{ isUk ? 'СПІЛЬНОТА РОЗРОБНИКІВ ТА ГРАВЦІВ' : (isRu ? 'СООБЩЕСТВО И ПОДДЕРЖКА' : 'PEER NETWORK & SUPPORT') }}</div>
          <h3 class="console-heading">{{ isUk ? 'Спільнота та зворотний зв’язок' : (isRu ? 'Сообщество и обратная связь' : 'Community & Support Relay') }}</h3>
          <p class="console-copy">
            {{
              isUk
                ? 'Якщо документація не допомогла вирішити проблему чи ви знайшли баг у лаунчері, зверніться до спільноти або створіть Issue на GitHub:'
                : (isRu
                  ? 'Если документация не помогла решить проблему или вы обнаружили баг, обратитесь к сообществу или создайте Issue на GitHub:'
                  : 'If the documentation didn’t resolve your issue, get direct community support or report launcher bugs on Discord, Reddit, or GitHub:')
            }}
          </p>
          <div class="console-actions-row">
            <a
              href="https://discord.gg/W5XVwYY7GQ"
              target="_blank"
              rel="noopener noreferrer"
              class="console-btn"
            >
              <span>{{ isUk ? 'DISCORD СПІЛЬНОТА' : (isRu ? 'DISCORD СООБЩЕСТВО' : 'CONNECT TO DISCORD') }}</span>
              <span class="console-btn-plus">+</span>
            </a>
            <a
              href="https://www.reddit.com/r/XMCL/"
              target="_blank"
              rel="noopener noreferrer"
              class="console-btn"
            >
              <span>{{ isUk ? 'R/XMCL НА REDDIT' : (isRu ? 'R/XMCL НА REDDIT' : 'R/XMCL ON REDDIT') }}</span>
              <span class="console-btn-plus">+</span>
            </a>
            <a
              href="https://github.com/voxelum/x-minecraft-launcher/issues"
              target="_blank"
              rel="noopener noreferrer"
              class="console-btn"
            >
              <span>{{ isUk ? 'GITHUB ISSUES (БАГИ)' : (isRu ? 'GITHUB ISSUES (БАГИ)' : 'GITHUB ISSUES (REPORT BUG)') }}</span>
              <span class="console-btn-plus">+</span>
            </a>
          </div>
        </div>
      </div>

      <!-- GitHub Documentation Source Console -->
      <div class="hub-console-card console-github">
        <div class="console-window-bar">
          <div class="quadrant-win-dots">
            <span class="qdot"></span>
            <span class="qdot"></span>
            <span class="qdot"></span>
          </div>
          <span class="console-label">SOURCE // 02</span>
          <span class="console-status">PUBLIC REPO</span>
        </div>
        <div class="console-body">
          <div class="console-meta-kicker">{{ isUk ? 'ВІДКРИТИЙ ВИХІДНИЙ КОД' : 'OPEN DOCUMENTATION SOURCE' }}</div>
          <h3 class="console-heading">{{ isUk ? 'Допомогти вдосконалити документацію' : 'Contribute to Documentation' }}</h3>
          <p class="console-copy">
            {{
              isUk
                ? 'Усі посібники та технічна документація зберігаються на GitHub. Ви можете виправити неточність, оновити статтю або написати новий посібник через PR.'
                : 'Every guide, API reference, and translation is open source. Open a Pull Request on GitHub to fix a typo, update a guide, or contribute new tutorials.'
            }}
          </p>
          <a
            href="https://github.com/voxelum/xmcl-page"
            target="_blank"
            rel="noopener noreferrer"
            class="console-btn"
          >
            <span>{{ t.repoBtn }}</span>
            <span class="console-btn-plus">+</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Base Reset & Variables Matching XMCL Brand */
.modern-doc-hub {
  --hub-ink: var(--xmcl-ink, #17211f);
  --hub-muted: var(--xmcl-muted, #64706c);
  --hub-paper: var(--xmcl-paper, #f4f5ef);
  --hub-panel: var(--xmcl-panel, #ffffff);
  --hub-line: var(--xmcl-line, #d8ded7);
  --hub-line-dark: #b8c4b6;
  --hub-lime: #c9f85a;
  --hub-orange: #e45e42;
  --hub-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --hub-sans: 'Space Grotesk', 'Avenir Next', 'Segoe UI', -apple-system, sans-serif;
  
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 32px clamp(16px, 4vw, 48px) 96px;
  box-sizing: border-box;
  color: var(--hub-ink);
  font-family: var(--hub-sans);
}

:global(html.dark) .modern-doc-hub,
.modern-doc-hub.dark {
  --hub-ink: #edf3ed;
  --hub-muted: #9aa9a1;
  --hub-paper: #101612;
  --hub-panel: #1b241f;
  --hub-line: #334139;
  --hub-line-dark: #44564c;
  --hub-lime: #c9f85a;
  --hub-orange: #ff8060;
  color: #edf3ed;
}

:global(html.dark) .hub-quadrant-card,
:global(html.dark) .hub-console-card,
:global(html.dark) .hub-search-terminal,
.modern-doc-hub.dark .hub-quadrant-card,
.modern-doc-hub.dark .hub-console-card,
.modern-doc-hub.dark .hub-search-terminal {
  background-color: #1b241f !important;
  color: #edf3ed !important;
  border-color: #334139 !important;
}

:global(html.dark) .console-body,
.modern-doc-hub.dark .console-body {
  background-color: #1b241f !important;
  color: #edf3ed !important;
}

:global(html.dark) .console-btn,
.modern-doc-hub.dark .console-btn {
  background-color: #151d18 !important;
  color: #edf3ed !important;
  border-color: #334139 !important;
}

:global(html.dark) .console-btn:hover,
.modern-doc-hub.dark .console-btn:hover {
  background-color: #c9f85a !important;
  color: #17211f !important;
  border-color: #c9f85a !important;
}

:global(html.dark) .register-list,
.modern-doc-hub.dark .register-list {
  background-color: #1b241f !important;
}

:global(html.dark) .register-item-link,
.modern-doc-hub.dark .register-item-link {
  border-color: #334139 !important;
  background-color: #1b241f;
}

:global(html.dark) .register-item-link:hover,
.modern-doc-hub.dark .register-item-link:hover {
  background-color: rgba(201, 248, 90, 0.05) !important;
}

:global(html.dark) .register-item-title,
.modern-doc-hub.dark .register-item-title {
  color: #edf3ed !important;
}

:global(html.dark) .register-item-desc,
.modern-doc-hub.dark .register-item-desc {
  color: #9aa9a1 !important;
}

:global(html.dark) .console-heading,
.modern-doc-hub.dark .console-heading {
  color: #edf3ed !important;
}

:global(html.dark) .console-copy,
.modern-doc-hub.dark .console-copy {
  color: #9aa9a1 !important;
}

:global(html.dark) .hub-flag-chip,
.modern-doc-hub.dark .hub-flag-chip {
  background-color: #151d18 !important;
  color: #edf3ed !important;
  border-color: #334139 !important;
}

:global(html.dark) .hub-title-strong,
.modern-doc-hub.dark .hub-title-strong {
  color: #edf3ed !important;
}

:global(html.dark) .quadrant-title,
.modern-doc-hub.dark .quadrant-title {
  color: #edf3ed !important;
}

:global(html.dark) .quadrant-action-btn,
.modern-doc-hub.dark .quadrant-action-btn {
  background-color: #151d18 !important;
  color: #edf3ed !important;
  border-color: #334139 !important;
}

/* ==========================================================================
   Terminal Header & Hero
   ========================================================================== */
.hub-terminal-header {
  margin-bottom: 56px;
}

.hub-status-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--hub-line);
  padding-bottom: 14px;
  margin-bottom: 28px;
  font-family: var(--hub-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hub-kicker-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: var(--hub-muted);
}

.hub-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--hub-lime);
  box-shadow: 0 0 10px rgba(201, 248, 90, 0.7);
  display: inline-block;
  animation: pulse-glow 2.4s infinite ease-in-out;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.85); }
}

.hub-version-tag {
  color: var(--hub-muted);
  display: flex;
  align-items: center;
  gap: 8px;
}

.hub-version-tag strong {
  color: var(--hub-ink);
}

.hub-hero-headline {
  max-width: 980px;
  margin-bottom: 36px;
}

.hub-title {
  font-size: clamp(38px, 6vw, 76px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.05em;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
}

.hub-title-light {
  color: var(--hub-orange);
}

.hub-title-strong {
  color: var(--hub-ink);
}

.hub-lead {
  font-size: clamp(16px, 1.6vw, 20px);
  line-height: 1.55;
  color: var(--hub-muted);
  margin: 0;
  max-width: 780px;
}

/* ==========================================================================
   Command Console Search Terminal
   ========================================================================== */
.hub-search-terminal {
  background: var(--hub-panel);
  border: 1px solid var(--hub-ink);
  box-shadow: 8px 8px 0px var(--hub-lime);
  transition: transform 180ms ease, box-shadow 180ms ease;
  overflow: hidden;
}

:global(html.dark) .hub-search-terminal {
  box-shadow: 8px 8px 0px rgba(201, 248, 90, 0.35);
  border-color: var(--hub-line-dark);
}

.hub-terminal-window-bar {
  background: #151d18;
  color: #8e9c94;
  border-bottom: 1px solid var(--hub-line);
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--hub-mono);
  font-size: 11px;
}

:global(html:not(.dark)) .hub-terminal-window-bar {
  background: #202925;
  color: #a4b4ab;
}

.hub-terminal-dots {
  display: flex;
  gap: 6px;
}

.hub-terminal-dots .dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.dot-1 { background: #e45e42; }
.dot-2 { background: #eab308; }
.dot-3 { background: #22c55e; }

.hub-terminal-caption {
  font-weight: 700;
  letter-spacing: 0.05em;
}

.hub-terminal-hint {
  margin-left: auto;
  font-size: 10px;
  color: #6a7c72;
  letter-spacing: 0.08em;
}

.hub-terminal-input-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 160ms ease;
}

.hub-terminal-input-btn:hover {
  background: rgba(201, 248, 90, 0.06);
}

.hub-input-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-family: var(--hub-mono);
  font-size: 14px;
}

.hub-cli-prompt {
  color: var(--hub-lime);
  font-weight: 700;
}

.hub-cli-cmd {
  color: var(--hub-orange);
  font-weight: 700;
}

.hub-cli-placeholder {
  color: var(--hub-muted);
  font-weight: 500;
}

.hub-cli-cursor {
  color: var(--hub-lime);
  font-weight: 900;
  animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hub-shortcut-keys {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--hub-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--hub-ink);
  flex-shrink: 0;
}

.hub-key {
  background: rgba(154, 169, 161, 0.15);
  border: 1px solid var(--hub-line-dark);
  padding: 4px 8px;
  min-width: 24px;
  text-align: center;
  box-shadow: 2px 2px 0px var(--hub-ink);
}

.hub-key-plus {
  color: var(--hub-muted);
}

.hub-flags-row {
  border-top: 1px solid var(--hub-line);
  padding: 12px 22px;
  background: rgba(21, 29, 24, 0.03);
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

:global(html.dark) .hub-flags-row {
  background: rgba(0, 0, 0, 0.2);
}

.hub-flags-label {
  font-family: var(--hub-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--hub-muted);
}

.hub-flags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.hub-flag-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid var(--hub-line);
  background: var(--hub-paper);
  text-decoration: none;
  font-size: 11px;
  font-family: var(--hub-mono);
  color: var(--hub-ink);
  transition: all 140ms ease;
}

.hub-flag-chip:hover {
  border-color: var(--hub-lime);
  background: var(--hub-lime);
  color: #17211f;
  transform: translate(-1px, -1px);
  box-shadow: 2px 2px 0px var(--hub-ink);
}

.chip-flag {
  color: var(--hub-orange);
  font-weight: 700;
}

.hub-flag-chip:hover .chip-flag {
  color: #17211f;
}

.chip-label {
  font-weight: 600;
}

/* ==========================================================================
   4-Quadrant Architectural Bento Grid
   ========================================================================== */
.hub-matrix-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  margin-bottom: 64px;
}

@media (min-width: 960px) {
  .hub-matrix-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.hub-quadrant-card {
  background: var(--hub-panel);
  border: 1px solid var(--hub-ink);
  box-shadow: 6px 6px 0px var(--quadrant-accent);
  display: flex;
  flex-direction: column;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

:global(html.dark) .hub-quadrant-card {
  border-color: var(--hub-line-dark);
}

.hub-quadrant-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0px var(--quadrant-accent);
}

/* Window Bar inside Quadrant */
.quadrant-window-bar {
  background: #1b241f;
  color: #8e9c94;
  border-bottom: 1px solid var(--hub-line);
  padding: 9px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--hub-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
}

:global(html:not(.dark)) .quadrant-window-bar {
  background: #202925;
  color: #9aa9a1;
}

.quadrant-win-dots {
  display: flex;
  gap: 5px;
}

.qdot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #64716b;
}

.quadrant-code {
  font-weight: 800;
  color: var(--quadrant-accent);
}

.quadrant-index {
  margin-left: auto;
  font-weight: 800;
  color: #edf3ed;
}

/* Quadrant Body Header */
.quadrant-body-header {
  padding: 24px 24px 18px;
  border-bottom: 1px solid var(--hub-line);
}

.quadrant-kicker-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: var(--hub-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  font-weight: 800;
}

.quadrant-kicker {
  color: var(--hub-orange);
}

.quadrant-status {
  color: var(--hub-muted);
}

.quadrant-title {
  font-size: clamp(24px, 2.4vw, 32px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin: 0 0 10px;
  color: var(--hub-ink);
}

.quadrant-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--hub-muted);
  margin: 0;
}

/* Register Table / Articles */
.quadrant-register {
  flex: 1 1 auto;
}

.register-header {
  display: flex;
  justify-content: space-between;
  padding: 8px 24px;
  background: rgba(21, 29, 24, 0.04);
  border-bottom: 1px solid var(--hub-line);
  font-family: var(--hub-mono);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: var(--hub-muted);
}

:global(html.dark) .register-header {
  background: rgba(0, 0, 0, 0.25);
}

.register-list {
  display: flex;
  flex-direction: column;
}

.register-item-link {
  display: grid;
  grid-template-columns: 46px 1fr auto;
  align-items: start;
  gap: 14px;
  padding: 16px 24px;
  text-decoration: none;
  border-bottom: 1px solid var(--hub-line);
  transition: all 140ms ease;
  position: relative;
}

.register-item-link:last-child {
  border-bottom: none;
}

.register-item-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0px;
  background: var(--quadrant-accent);
  transition: width 140ms ease;
}

.register-item-link:hover {
  background: rgba(201, 248, 90, 0.04);
  padding-left: 28px;
}

.register-item-link:hover::before {
  width: 4px;
}

.register-item-idx {
  font-family: var(--hub-mono);
  font-size: 11px;
  font-weight: 800;
  color: var(--hub-muted);
  padding-top: 2px;
}

.register-item-link:hover .register-item-idx {
  color: var(--quadrant-accent);
}

.register-item-content {
  min-width: 0;
}

.register-item-topline {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.register-item-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--hub-ink);
  line-height: 1.3;
}

.register-item-link:hover .register-item-title {
  color: var(--hub-orange);
}

.register-item-badge {
  font-family: var(--hub-mono);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 1px 6px;
  background: rgba(201, 248, 90, 0.15);
  border: 1px solid var(--quadrant-accent);
  color: var(--hub-ink);
}

.register-item-desc {
  font-size: 12px;
  line-height: 1.5;
  color: var(--hub-muted);
  margin: 0;
}

.register-item-action {
  font-size: 16px;
  font-weight: 700;
  color: var(--hub-muted);
  align-self: center;
  transition: transform 140ms ease, color 140ms ease;
}

.register-item-link:hover .register-item-action {
  transform: translateX(4px);
  color: var(--quadrant-accent);
}

/* Quadrant Footer Action */
.quadrant-card-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--hub-line);
  background: rgba(21, 29, 24, 0.02);
}

:global(html.dark) .quadrant-card-footer {
  background: rgba(0, 0, 0, 0.15);
}

.quadrant-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: var(--hub-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--hub-ink);
  padding: 8px 14px;
  border: 1px solid var(--hub-ink);
  background: transparent;
  transition: all 160ms ease;
}

:global(html.dark) .quadrant-action-btn {
  border-color: var(--hub-line-dark);
}

.quadrant-action-btn:hover {
  background: var(--quadrant-accent);
  color: #17211f;
  border-color: var(--quadrant-accent);
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0px var(--hub-ink);
}

.btn-prefix {
  color: var(--quadrant-accent);
}

.quadrant-action-btn:hover .btn-prefix {
  color: #17211f;
}

.btn-arrow {
  font-weight: 900;
}

/* ==========================================================================
   Bottom Developer & Community Consoles
   ========================================================================== */
.hub-consoles-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  border-top: 1px solid var(--hub-line);
  padding-top: 56px;
}

@media (min-width: 860px) {
  .hub-consoles-section {
    grid-template-columns: repeat(2, 1fr);
  }
}

.hub-console-card {
  background: var(--hub-panel);
  border: 1px solid var(--hub-ink);
  box-shadow: 6px 6px 0px var(--hub-ink);
  display: flex;
  flex-direction: column;
}

:global(html.dark) .hub-console-card {
  border-color: var(--hub-line-dark);
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.5);
}

.console-community {
  border-top: 3px solid #38bdf8;
}

.console-github {
  border-top: 3px solid var(--hub-lime);
}

.console-window-bar {
  background: #1b241f;
  color: #8e9c94;
  border-bottom: 1px solid var(--hub-line);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--hub-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
}

:global(html:not(.dark)) .console-window-bar {
  background: #202925;
  color: #9aa9a1;
}

.console-label {
  font-weight: 800;
  color: #edf3ed;
}

.console-status {
  margin-left: auto;
  font-weight: 800;
  color: var(--hub-lime);
}

.console-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

.console-meta-kicker {
  font-family: var(--hub-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--hub-orange);
  margin-bottom: 8px;
}

.console-heading {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0 0 12px;
  color: var(--hub-ink);
}

.console-copy {
  font-size: 13px;
  line-height: 1.6;
  color: var(--hub-muted);
  margin: 0 0 24px;
  flex: 1 1 auto;
}

.console-actions-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.console-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  border: 1px solid var(--hub-ink);
  background: var(--hub-panel);
  color: var(--hub-ink);
  text-decoration: none;
  font-family: var(--hub-mono);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  transition: all 160ms ease;
}

:global(html.dark) .console-btn {
  border-color: var(--hub-line-dark);
}

.console-btn:hover {
  background: var(--hub-lime);
  color: #17211f;
  border-color: var(--hub-lime);
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0px var(--hub-ink);
}

.console-btn-plus {
  font-size: 14px;
  font-weight: 900;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .hub-terminal-header {
    margin-bottom: 36px;
  }
  .hub-status-strip {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .hub-shortcut-keys {
    display: none;
  }
  .register-item-link {
    grid-template-columns: 36px 1fr auto;
    padding: 14px 16px;
  }
  .quadrant-body-header {
    padding: 20px 16px 14px;
  }
}
</style>
