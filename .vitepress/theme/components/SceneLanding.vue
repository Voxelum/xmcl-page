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
          <span class="scene-section-kicker">{{ content.download.kicker }}</span>
          <h2>{{ content.download.title }}</h2>
          <p>{{ content.download.description }}</p>
          <a class="scene-text-link" :href="prebuildsUrl">{{ content.download.link }} <span aria-hidden="true">+</span></a>
        </div>
        <div class="scene-download-control"><ClientOnly><Linux :organized="true" /></ClientOnly></div>
      </section>

      <section v-else-if="kind === 'together'" id="plans" class="scene-creator-cta scene-together-cta">
        <div><span class="scene-section-kicker">{{ content.cta.kicker }}</span><h2>{{ content.cta.title }}</h2></div>
        <div>
          <p>{{ content.cta.description }}</p>
          <a class="scene-button scene-button-primary" :href="accountUrl">{{ content.cta.button }} <span aria-hidden="true">+</span></a>
          <div class="scene-together-legal">
            <span>{{ togetherLabels.operator }}</span>
            <a :href="termsUrl">{{ togetherLabels.terms }}</a>
            <a :href="privacyUrl">{{ togetherLabels.privacy }}</a>
          </div>
        </div>
      </section>

      <section v-else class="scene-creator-cta">
        <div><span class="scene-section-kicker">{{ content.cta.kicker }}</span><h2>{{ content.cta.title }}</h2></div>
        <div><p>{{ content.cta.description }}</p><a class="scene-button scene-button-primary" :href="featuresUrl">{{ content.cta.button }} <span aria-hidden="true">+</span></a></div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useI18n } from 'vue-i18n'
import Linux from './Linux.vue'
import { useI18nSync } from '../composables/useI18nSync'

import aiAgent from '../../../src/assets/ai-agent-dialog-candidate.png'
import homeExpanded from '../../../src/assets/home-expanded-1600-candidate.png'
import homeProduction from '../../../src/assets/home-production-1920.png'
import instanceCreate from '../../../src/assets/instance-create-modloaders-candidate.png'
import localModDetail from '../../../src/assets/local-mod-detail-candidate.png'
import localModManagement from '../../../src/assets/local-mod-management-candidate.png'
import modpackExport from '../../../src/assets/modpack-export-candidate.png'
import modpackMarket from '../../../src/assets/modpack-market-candidate.png'
import multiplayerConnected from '../../../src/assets/multiplayer-connected.png'
import multiplayerJoin from '../../../src/assets/multiplayer-join.png'
import onlineModSearch from '../../../src/assets/online-mod-search-candidate.png'

const props = defineProps<{ kind: 'linux' | 'creators' | 'together' }>()
const { lang, site } = useData()
const { t } = useI18n()
useI18nSync()
const pageUrl = (path: string) => `${site.value.base}${lang.value}/${path}`
const prebuildsUrl = computed(() => pageUrl('prebuilds'))
const featuresUrl = computed(() => pageUrl('features/'))
const accountUrl = computed(() => pageUrl('together/account/'))
const termsUrl = computed(() => pageUrl('together/terms'))
const privacyUrl = computed(() => pageUrl('together/privacy'))
const togetherLabels = computed(() => {
  if (lang.value === 'zh') return { operator: 'XMCL Together 是由 CI010 运营的可选在线服务。', terms: '服务条款', privacy: '隐私政策' }
  if (lang.value === 'zh-TW') return { operator: 'XMCL Together 是由 CI010 營運的選用線上服務。', terms: '服務條款', privacy: '隱私權政策' }
  return { operator: 'XMCL Together is an optional online service operated by CI010.', terms: 'Terms', privacy: 'Privacy' }
})

const legacyContent = computed(() => props.kind === 'linux' ? {
  eyebrow: 'XMCL / LINUX EDITION',
  title: 'The Minecraft launcher that feels native on Linux.',
  lede: 'A polished, open-source launcher for Linux desktops and Steam Deck. Pick the package your distribution expects, plug into a 4K display, and keep every world one clear launch away.',
  primaryAction: { label: 'Download for Linux', href: '#download' },
  secondaryAction: { label: 'See the Linux workflow', href: '#workflow' },
  heroNote: 'Native Linux builds, ARM64 options, and Flathub support',
  visualIndex: '01 / 02',
  visualLabel: 'XMCL · Linux workspace',
  heroImage: homeProduction,
  heroAlt: 'XMCL home screen showing a library of Minecraft instances',
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
    { label: '03 / PLAY ANYWHERE', title: 'A desktop launcher that travels well.', description: 'Move from a Linux desktop to a Steam Deck session without giving up a clear library or a dependable setup. XMCL gives your collection room to grow without turning it into a spreadsheet.', points: ['Flathub path designed for Steam Deck', 'A focused interface on 4K displays', 'Open source and built for Linux players'], image: homeProduction, alt: 'XMCL home page with a large instance library' },
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
  heroAlt: 'XMCL modpack market with Modrinth and CurseForge projects',
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

const content = computed(() => {
  if (props.kind === 'together') {
    const copy = lang.value === 'zh'
      ? {
          eyebrow: 'XMCL / 可选在线服务',
          title: '让朋友进入同一个世界，也让联机继续下去。',
          lede: 'Together Home 为整合包玩家提供 AI 辅助排错和中继连接。它是独立的可选服务；XMCL 启动器仍然免费、开源，并且无需 Together 账户即可使用。',
          primaryAction: '了解 Together Home',
          secondaryAction: '登录 Together',
          heroNote: '启动器无付费墙 · 不登录也能正常使用',
          visualLabel: 'XMCL · 好友联机',
          heroAlt: 'XMCL 好友联机界面显示已连接的玩家',
          visualTag: '好友世界在线',
          visualStatus: '连接已建立',
          workflowKicker: '从问题到同一个世界',
          workflowTitle: '把整合包排错与可靠联机放在一条路径上。',
          workflowDescription: 'Together 处理那些不应由一个朋友独自承担的问题：分析失败、建立连接，并在直连不可用时继续游戏。',
          signals: [
            { number: '$2.99', label: '每月', description: '从 Together 余额续费，可随时取消。' },
            { number: '200 万', label: 'AI 加权用量', description: '用于整合包、崩溃和配置排查。' },
            { number: '20 GB', label: 'TURN 中继', description: '直连失败时保持好友联机。' },
          ],
          features: [
            { label: '01 / 解决问题', title: '让 AI 读取上下文，而不是只看一段错误。', description: '在启动器中结合实例、版本、加载器和日志分析整合包问题，给出可以继续操作的下一步。', points: ['结合实例与启动日志分析', '处理模组冲突和依赖问题', '用量包含在 Together Home 中'], image: aiAgent, alt: 'XMCL AI Agent 分析启动失败' },
            { label: '02 / 邀请朋友', title: '从本地世界直接开始，不必先管理服务器。', description: '在自己的电脑上打开世界并邀请朋友。Together 负责连接流程，让临时游戏不必先变成服务器项目。', points: ['适合朋友之间的临时联机', '继续使用现有世界与整合包', '账户只用于可选 Together 服务'], image: multiplayerJoin, alt: 'XMCL 好友加入多人游戏的界面' },
            { label: '03 / 保持连接', title: '直连走不通时，用中继继续游戏。', description: '网络环境无法建立稳定直连时，Together 可以使用计量的 TURN 中继流量维持会话。', points: ['优先尝试点对点连接', '20 GB 月度中继额度', '清晰展示用量和剩余额度'], image: multiplayerConnected, alt: 'XMCL 多人连接成功界面' },
          ],
          cta: { kicker: 'TOGETHER HOME', title: '每月 2.99 美元，没有启动器付费墙。', description: '订阅从 XMCL Together 余额按月续费。它不包含 Minecraft 副本或许可，你仍需合法获取游戏和第三方内容。', button: '登录 Together' },
        }
      : lang.value === 'zh-TW'
        ? {
            eyebrow: 'XMCL / 選用線上服務',
            title: '讓朋友進入同一個世界，也讓連線繼續下去。',
            lede: 'Together Home 為整合包玩家提供 AI 輔助疑難排解與中繼連線。它是獨立的選用服務；XMCL 啟動器仍然免費、開源，而且不需要 Together 帳戶即可使用。',
            primaryAction: '瞭解 Together Home',
            secondaryAction: '登入 Together',
            heroNote: '啟動器沒有付費牆 · 不登入也能正常使用',
            visualLabel: 'XMCL · 好友連線',
            heroAlt: 'XMCL 好友連線介面顯示已連線的玩家',
            visualTag: '好友世界在線',
            visualStatus: '連線已建立',
            workflowKicker: '從問題到同一個世界',
            workflowTitle: '把整合包疑難排解與可靠連線放在同一條路徑。',
            workflowDescription: 'Together 處理那些不應由一位朋友獨自承擔的問題：分析失敗、建立連線，並在直連不可用時繼續遊戲。',
            signals: [
              { number: '$2.99', label: '每月', description: '從 Together 餘額續訂，可隨時取消。' },
              { number: '200 萬', label: 'AI 加權用量', description: '用於整合包、崩潰和設定疑難排解。' },
              { number: '20 GB', label: 'TURN 中繼', description: '直連失敗時維持好友連線。' },
            ],
            features: [
              { label: '01 / 解決問題', title: '讓 AI 讀取情境，而不只看一段錯誤。', description: '在啟動器中結合實例、版本、載入器和日誌分析整合包問題，提供可以繼續操作的下一步。', points: ['結合實例與啟動日誌分析', '處理模組衝突和相依性問題', '用量包含於 Together Home'], image: aiAgent, alt: 'XMCL AI Agent 分析啟動失敗' },
              { label: '02 / 邀請朋友', title: '從本機世界直接開始，不必先管理伺服器。', description: '在自己的電腦上開啟世界並邀請朋友。Together 負責連線流程，讓臨時遊戲不必先變成伺服器專案。', points: ['適合朋友之間的臨時連線', '繼續使用現有世界與整合包', '帳戶只用於選用 Together 服務'], image: multiplayerJoin, alt: 'XMCL 好友加入多人遊戲的介面' },
              { label: '03 / 保持連線', title: '直連走不通時，用中繼繼續遊戲。', description: '網路環境無法建立穩定直連時，Together 可以使用計量的 TURN 中繼流量維持工作階段。', points: ['優先嘗試點對點連線', '20 GB 每月中繼額度', '清楚顯示用量和剩餘額度'], image: multiplayerConnected, alt: 'XMCL 多人連線成功介面' },
            ],
            cta: { kicker: 'TOGETHER HOME', title: '每月 2.99 美元，沒有啟動器付費牆。', description: '訂閱從 XMCL Together 餘額按月續訂。它不包含 Minecraft 副本或授權，你仍需合法取得遊戲和第三方內容。', button: '登入 Together' },
          }
        : {
            eyebrow: 'XMCL / OPTIONAL ONLINE SERVICES',
            title: 'Get your friends into the same world—and keep them there.',
            lede: 'Together Home adds AI-assisted modpack troubleshooting and relay connectivity. It is a separate, optional service; the XMCL launcher stays free, open source, and fully usable without a Together account.',
            primaryAction: 'Explore Together Home',
            secondaryAction: 'Sign in to Together',
            heroNote: 'No launcher paywall · no account required for local use',
            visualLabel: 'XMCL · friend multiplayer',
            heroAlt: 'XMCL friend multiplayer screen showing connected players',
            visualTag: 'FRIEND WORLD ONLINE',
            visualStatus: 'CONNECTION ESTABLISHED',
            workflowKicker: 'FROM PROBLEM TO SHARED WORLD',
            workflowTitle: 'Put modpack support and reliable multiplayer on one path.',
            workflowDescription: 'Together handles the work that should not fall on one friend alone: understand the failure, establish the connection, and keep playing when direct networking cannot.',
            signals: [
              { number: '$2.99', label: 'Per month', description: 'Renews from Together balance; cancel any time.' },
              { number: '2M', label: 'Weighted AI units', description: 'For modpack, crash, and configuration support.' },
              { number: '20 GB', label: 'TURN relay', description: 'Keep friends connected when direct paths fail.' },
            ],
            features: [
              { label: '01 / SOLVE', title: 'Give AI the context, not just one error line.', description: 'Investigate a modpack with its instance, versions, loader, and logs together, then turn the diagnosis into a useful next action.', points: ['Instance-aware launch and crash analysis', 'Mod conflict and dependency investigation', 'Usage included with Together Home'], image: aiAgent, alt: 'XMCL AI agent investigating a launch failure' },
              { label: '02 / INVITE', title: 'Start with the world on your computer.', description: 'Open the world you already have and invite friends. Together handles the connection flow so a casual session does not begin as a server project.', points: ['Designed for temporary friend sessions', 'Keep using the world and modpack you have', 'Accounts apply only to optional Together services'], image: multiplayerJoin, alt: 'XMCL interface for joining a friend multiplayer session' },
              { label: '03 / STAY CONNECTED', title: 'Relay the session when direct networking cannot.', description: 'When the network cannot establish a dependable peer-to-peer path, metered TURN relay traffic keeps the session moving.', points: ['Peer-to-peer attempted first', '20 GB monthly relay allowance', 'Visible usage and remaining allowance'], image: multiplayerConnected, alt: 'XMCL multiplayer screen with an established connection' },
            ],
            cta: { kicker: 'TOGETHER HOME', title: '$2.99/month. No launcher paywall.', description: 'The subscription renews monthly from your XMCL Together balance. It does not include a copy or license of Minecraft; obtain the game and third-party content lawfully.', button: 'Sign in to Together' },
          }

    return {
      eyebrow: copy.eyebrow,
      title: copy.title,
      lede: copy.lede,
      primaryAction: { label: copy.primaryAction, href: '#plans' },
      secondaryAction: { label: copy.secondaryAction, href: accountUrl.value },
      heroNote: copy.heroNote,
      visualIndex: '03 / 03',
      visualLabel: copy.visualLabel,
      heroImage: multiplayerConnected,
      heroAlt: copy.heroAlt,
      visualTag: copy.visualTag,
      visualStatus: copy.visualStatus,
      workflowKicker: copy.workflowKicker,
      workflowTitle: copy.workflowTitle,
      workflowDescription: copy.workflowDescription,
      signals: copy.signals,
      features: copy.features,
      download: { kicker: '', title: '', description: '', link: '' },
      cta: copy.cta,
    }
  }

  const prefix = props.kind === 'linux' ? 'sceneLanding.linux' : 'sceneLanding.creators'
  const text = (key: string) => t(`${prefix}.${key}`)
  const feature = (key: string, image: unknown) => ({
    label: text(`features.${key}.label`),
    title: text(`features.${key}.title`),
    description: text(`features.${key}.description`),
    points: [1, 2, 3].map(index => text(`features.${key}.point${index}`)),
    image,
    alt: text(`features.${key}.alt`),
  })

  if (props.kind === 'linux') {
    return {
      eyebrow: text('eyebrow'), title: text('title'), lede: text('lede'),
      primaryAction: { label: text('primaryAction'), href: '#download' },
      secondaryAction: { label: text('secondaryAction'), href: '#workflow' },
      heroNote: text('heroNote'), visualIndex: '01 / 02', visualLabel: text('visualLabel'),
      heroImage: homeProduction, heroAlt: text('heroAlt'), visualTag: text('visualTag'), visualStatus: text('visualStatus'),
      workflowKicker: text('workflowKicker'), workflowTitle: text('workflowTitle'), workflowDescription: text('workflowDescription'),
      signals: ['packages', 'scale', 'worlds'].map(key => ({ number: text(`signals.${key}.number`), label: text(`signals.${key}.label`), description: text(`signals.${key}.description`) })),
      features: [feature('install', instanceCreate), feature('organize', homeExpanded), feature('anywhere', homeProduction)],
      download: { kicker: text('download.kicker'), title: text('download.title'), description: text('download.description'), link: text('download.link') },
      cta: { kicker: '', title: '', description: '', button: '' },
    }
  }

  return {
    eyebrow: text('eyebrow'), title: text('title'), lede: text('lede'),
    primaryAction: { label: text('primaryAction'), href: '#workflow' },
    secondaryAction: { label: text('secondaryAction'), href: featuresUrl.value },
    heroNote: text('heroNote'), visualIndex: '02 / 02', visualLabel: text('visualLabel'),
    heroImage: modpackMarket, heroAlt: text('heroAlt'), visualTag: text('visualTag'), visualStatus: text('visualStatus'),
    workflowKicker: text('workflowKicker'), workflowTitle: text('workflowTitle'), workflowDescription: text('workflowDescription'),
    signals: ['sources', 'export', 'ai'].map(key => ({ number: text(`signals.${key}.number`), label: text(`signals.${key}.label`), description: text(`signals.${key}.description`) })),
    features: [feature('discover', onlineModSearch), feature('build', localModDetail), feature('curate', localModManagement), feature('export', modpackExport), feature('diagnose', aiAgent)],
    download: { kicker: '', title: '', description: '', link: '' },
    cta: { kicker: text('cta.kicker'), title: text('cta.title'), description: text('cta.description'), button: text('cta.button') },
  }
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
.scene-together { --scene-accent: #c9f85a; --scene-hot: #e45e42; --scene-paper: #f4f5ef; }
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
.scene-together-legal { align-items: center; display: flex; flex-wrap: wrap; font-size: 11px; gap: 14px; margin-top: 20px; }
.scene-together-legal a { color: var(--scene-accent-text); font-weight: 800; text-decoration: underline; text-underline-offset: 3px; }
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
