<template>
  <div class="feature-explorer">
    <header class="feature-explorer-hero">
      <a v-if="category" class="feature-explorer-back" :href="featuresRoot">← {{ t('features.ui.all') }}</a>
      <span class="feature-explorer-kicker">{{ t('features.ui.kicker') }}</span>
      <h1>{{ activeGroup ? t(`features.groups.${activeGroup.id}.title`) : t('features.ui.heading') }}</h1>
      <p>{{ activeGroup ? t(`features.groups.${activeGroup.id}.description`) : t('features.ui.description') }}</p>
      <nav class="feature-explorer-keyword-index" aria-label="Feature keywords">
        <section v-for="group in visibleGroups" :key="group.id" class="feature-explorer-keyword-group">
          <header class="feature-explorer-keyword-group-heading">
            <strong>{{ t(`features.groups.${group.id}.short`) }}</strong>
            <span>{{ group.features.length }} {{ t('features.ui.features') }}</span>
          </header>
          <div class="feature-explorer-keyword-list">
            <a v-for="feature in group.features" :key="feature.id" class="feature-explorer-keyword" :href="`#${feature.id}`">
              <span class="feature-explorer-keyword-copy"><strong>{{ featureTitle(feature) }}</strong><small>{{ featureStatus(feature) }}</small></span>
            </a>
          </div>
        </section>
      </nav>
      <nav v-if="!category" class="feature-explorer-groups" aria-label="Feature categories">
        <button v-for="group in groups" :key="group.id" :class="{ active: selectedGroup === group.id }" type="button" @click="selectedGroup = group.id">
          <span>{{ t(`features.groups.${group.id}.short`) }}</span>
          <small>{{ group.features.length }}</small>
        </button>
      </nav>
    </header>

    <main class="feature-explorer-content">
      <div v-if="!category" class="feature-explorer-toolbar">
        <label class="feature-explorer-search">
          <span class="i-fa6-solid:magnifying-glass" aria-hidden="true"></span>
          <input v-model="searchQuery" type="search" :placeholder="t('features.ui.search')" :aria-label="t('features.ui.search')" />
        </label>
        <span>{{ filteredFeatures.length }} {{ t('features.ui.featuresInView') }}</span>
      </div>

      <section class="feature-explorer-showcase" :aria-label="activeGroup ? t(`features.groups.${activeGroup.id}.title`) : t('features.ui.all')">
        <article v-for="(feature, featureIndex) in filteredFeatures" :id="feature.id" :key="feature.id" class="feature-explorer-showcase-item" :class="{ reversed: featureIndex % 2 === 1 }">
          <div class="feature-explorer-showcase-image-wrap">
            <span class="feature-explorer-showcase-number">{{ String(featureIndex + 1).padStart(2, '0') }}</span>
            <img class="feature-explorer-image" :src="feature.image" :alt="featureTitle(feature)" loading="lazy" />
          </div>
          <div class="feature-explorer-showcase-body">
            <div class="feature-explorer-card-meta"><span>{{ featureGroupLabel(feature) }}</span><span>{{ featureStatus(feature) }}</span></div>
            <h2>{{ featureTitle(feature) }}</h2>
            <p class="feature-explorer-benefit">{{ featureBenefit(feature) }}</p>
            <ul>
              <li v-for="capability in featureCapabilities(feature)" :key="capability">{{ capability }}</li>
            </ul>
            <a class="feature-explorer-link" :href="feature.link">{{ t('features.ui.readWorkflow') }} <span aria-hidden="true">+</span></a>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { useI18n } from 'vue-i18n'
import { useI18nSync } from '../composables/useI18nSync'

import homeExpanded from '../../../src/assets/home-expanded-1600-candidate.png'
import instanceCreateModloaders from '../../../src/assets/instance-create-modloaders-candidate.png'
import instanceFolderGroups from '../../../src/assets/instance-folder-groups-candidate.png'
import instanceTheme from '../../../src/assets/instance-theme-candidate.png'
import localServer from '../../../src/assets/instance-local-server-candidate.png'
import serverList from '../../../src/assets/vanilla-server-list-candidate.png'
import modpackMarket from '../../../src/assets/modpack-market-candidate.png'
import onlineModSearch from '../../../src/assets/online-mod-search-candidate.png'
import modpackDetail from '../../../src/assets/modpack-detail-candidate.png'
import modCollection from '../../../src/assets/mod-collection-candidate.png'
import localModManagement from '../../../src/assets/local-mod-management-candidate.png'
import modContextMenu from '../../../src/assets/mod-context-menu-groups-candidate.png'
import localModDetail from '../../../src/assets/local-mod-detail-candidate.png'
import savePreview from '../../../src/assets/save-preview-chunks-candidate.png'
import blueprintPreview from '../../../src/assets/blueprint-preview-candidate.png'
import modpackExport from '../../../src/assets/modpack-export-candidate.png'
import accountLogin from '../../../src/assets/account-login-dialog-candidate.png'
import quickAction from '../../../src/assets/quick-action-dialog-candidate.png'
import crashDiagnosis from '../../../src/assets/crash-ai-diagnosis-candidate.png'
import aiAgent from '../../../src/assets/ai-agent-dialog-candidate.png'

type FeatureGroup = {
  id: string
  title: string
  shortTitle: string
  description: string
  features: Feature[]
}

type Feature = {
  id: string
  title: string
  benefit: string
  group: string
  groupLabel: string
  status: string
  image: string
  alt: string
  capabilities: string[]
  link: string
}

const feature = (group: string, groupLabel: string, values: Omit<Feature, 'group' | 'groupLabel'>): Feature => ({
  ...values,
  group,
  groupLabel,
})

const { lang, site } = useData()
const { t } = useI18n()
useI18nSync()
const featuresRoot = computed(() => `${site.value.base}${lang.value}/features/`)
const featuresPath = (path: string) => `${site.value.base}${lang.value === 'en' ? lang.value : 'en'}/features/${path}`
const featureTitle = (feature: Feature) => t(`features.items.${feature.id}.title`)
const featureBenefit = (feature: Feature) => t(`features.items.${feature.id}.benefit`)
const featureCapabilities = (feature: Feature) => t(`features.items.${feature.id}.capabilities`).split('|')
const featureGroupLabel = (feature: Feature) => t(`features.groups.${feature.group}.short`)
const featureStatus = (feature: Feature) => t(`features.status.${feature.status.toLowerCase()}`)

const groups: FeatureGroup[] = [
  {
    id: 'instances', shortTitle: 'Instances', title: 'Instances and profiles',
    description: 'Keep every Minecraft setup independent, visible, and ready to launch without losing the details that make it yours.',
    features: [
      feature('instances', 'Instances', { id: 'instance-library', title: 'One organized instance library', benefit: 'See vanilla, modded, and experimental worlds together in one launch-ready home.', status: 'Homepage', image: homeExpanded, alt: 'XMCL instance library with mods and resources', capabilities: ['Separate game versions and loaders', 'See Mods, Saves, and resources at a glance', 'Launch the setup you need'], link: '/en/guide/manage' }),
      feature('instances', 'Instances', { id: 'instance-create-modloaders', title: 'Create Java and Bedrock Instances', benefit: 'Start a new setup with the loader and edition that matches the world you want to play.', status: 'Catalog', image: instanceCreateModloaders, alt: 'XMCL Create Game dialog with Java, Bedrock, and Mod Loader options', capabilities: ['Java Edition and experimental Bedrock support', 'Forge, Fabric, Quilt, NeoForge, OptiFine, and LabyMod', 'Minecraft and local version sources'], link: featuresRoot.value + '#instance-create-modloaders' }),
      feature('instances', 'Instances', { id: 'instance-folder-groups', title: 'Instance Folder Groups', benefit: 'Arrange many instances into folders so different worlds and setups stay easy to scan.', status: 'Catalog', image: instanceFolderGroups, alt: 'XMCL instance home with folder groups in the left rail', capabilities: ['Group instances by purpose or project', 'Keep related setups together', 'Switch between folders from the instance rail'], link: featuresRoot.value + '#instance-folder-groups' }),
      feature('instances', 'Instances', { id: 'instance-settings', title: 'Instance settings', benefit: 'Tune Java, memory, versions, loaders, and launch behavior without touching another setup.', status: 'Guide', image: instanceTheme, alt: 'XMCL instance theme and settings view', capabilities: ['Independent instance configuration', 'Version and loader selection', 'Per-instance appearance controls'], link: '/en/guide/manage' }),
      feature('instances', 'Instances', { id: 'instance-theme', title: 'Instance Theme', benefit: 'Give each world its own identity with backgrounds, colors, blur, fonts, and custom CSS.', status: 'Detail', image: instanceTheme, alt: 'XMCL Instance Theme controls', capabilities: ['Background image and overlay', 'Rounded corners and font controls', 'Export and import a theme'], link: featuresRoot.value + '#instance-theme' }),
      feature('instances', 'Instances', { id: 'local-server', title: 'Launch a local server', benefit: 'Turn an instance into a configurable local server with a world, player limit, and exportable files.', status: 'Detail', image: localServer, alt: 'XMCL local server settings and export controls', capabilities: ['MOTD, port, and player limit', 'World and server file selection', 'Export a server package'], link: featuresPath('sharing/') }),
      feature('instances', 'Instances', { id: 'server-list', title: 'Server List', benefit: 'Keep multiplayer destinations close to the instance that uses them and see their connection state.', status: 'Detail', image: serverList, alt: 'XMCL Minecraft Server List', capabilities: ['Server status and player count', 'Pin and remove destinations', 'Show connection failures clearly'], link: featuresPath('sharing/') }),
    ],
  },
  {
    id: 'community', shortTitle: 'Community', title: 'Mods and community content',
    description: 'Discover, inspect, and install the projects that turn a Minecraft version into your next world.',
    features: [
      feature('community', 'Community', { id: 'modpack-market', title: 'Modpack Market', benefit: 'Browse Modrinth, CurseForge, and FTB content from one searchable marketplace.', status: 'Homepage', image: modpackMarket, alt: 'XMCL Modpack Market with filters and trending packs', capabilities: ['Source, version, loader, and category filters', 'Trending and latest pack discovery', 'Open a pack detail page'], link: featuresPath('modpacks/') }),
      feature('community', 'Community', { id: 'online-mod-search', title: 'Online Mod Search', benefit: 'Find compatible Mods across the major community platforms before they reach your instance.', status: 'Catalog', image: onlineModSearch, alt: 'XMCL online Mod search filters', capabilities: ['Modrinth and CurseForge sources', 'Minecraft version and loader filters', 'Environment and category filters'], link: featuresPath('mods/') }),
      feature('community', 'Community', { id: 'modpack-detail', title: 'Modpack Detail', benefit: 'Understand a pack before installing it, from screenshots and authors to technical requirements.', status: 'Detail', image: modpackDetail, alt: 'XMCL Modpack Detail page', capabilities: ['Screenshots, tags, and project stats', 'Install and launch actions', 'Technical information and external resources'], link: featuresPath('modpacks/') }),
      feature('community', 'Community', { id: 'mod-collections', title: 'Mod Collections', benefit: 'Save projects you want to revisit and turn a collection into a reusable setup.', status: 'Catalog', image: modCollection, alt: 'XMCL Mod Collection view', capabilities: ['Launcher collections', 'Followed Modrinth projects', 'Batch install and collection management'], link: featuresPath('mods/') }),
      feature('community', 'Community', { id: 'mod-detail', title: 'Mod Detail', benefit: 'Inspect a Mod before changing your instance and understand its versions, dependencies, and sources.', status: 'Detail', image: localModDetail, alt: 'XMCL local Mod detail page', capabilities: ['Version selection and dependencies', 'Loaders, categories, and source links', 'Description and external resources'], link: featuresPath('mods/') }),
    ],
  },
  {
    id: 'mods', shortTitle: 'Mod control', title: 'Mod management',
    description: 'Keep a large modded setup understandable with search, grouping, dependency checks, and deliberate update controls.',
    features: [
      feature('mods', 'Mod control', { id: 'local-mods', title: 'Installed Mod Management', benefit: 'See what is enabled, filter it quickly, and keep the working set healthy.', status: 'Homepage', image: localModManagement, alt: 'XMCL installed Mod management view', capabilities: ['Search, sort, and filter Mods', 'Check dependencies and unused content', 'Choose an update policy'], link: featuresPath('mods/') }),
      feature('mods', 'Mod control', { id: 'custom-mod-groups', title: 'Custom Mod Groups', benefit: 'Build your own groups and save the rules that organize a complex instance.', status: 'Detail', image: modContextMenu, alt: 'XMCL Mod context menu with custom grouping actions', capabilities: ['Apply and save grouping rules', 'Group Mods from the context menu', 'Enable, disable, or inspect files'], link: featuresPath('mods/') }),
    ],
  },
  {
    id: 'world-tools', shortTitle: 'World tools', title: 'World tools',
    description: 'Work with the worlds behind your instances: inspect their shape, select their pieces, and understand their materials.',
    features: [
      feature('world-tools', 'World tools', { id: 'save-preview', title: 'Save Preview and Chunk Tools', benefit: 'Read a world visually before launching it and make precise Chunk-level changes.', status: 'Homepage', image: savePreview, alt: 'XMCL Save Preview map with selected Chunks', capabilities: ['Pan and inspect world maps', 'Select, copy, or delete Chunks', 'Read world properties and materials'], link: featuresPath('world-tools/') }),
      feature('world-tools', 'World tools', { id: 'blueprint-preview', title: 'Blueprint Preview', benefit: 'Preview a structure in 3D and verify compatibility and materials before placing it in-game.', status: 'Catalog', image: blueprintPreview, alt: 'XMCL Blueprint 3D Preview', capabilities: ['Litematica and WorldEdit formats', 'Compatibility and missing Mod status', 'Materials list and format conversion'], link: featuresPath('world-tools/') }),
    ],
  },
  {
    id: 'sharing', shortTitle: 'Sharing', title: 'Sharing and multiplayer',
    description: 'Move a working setup from your machine to a friend, a server, or another install with the details intact.',
    features: [
      feature('sharing', 'Sharing', { id: 'modpack-export', title: 'Modpack Export', benefit: 'Package an instance for other players without losing the metadata and files that make it work.', status: 'Detail', image: modpackExport, alt: 'XMCL Modpack Export page', capabilities: ['CurseForge and Modrinth export', 'Author, description, and URL metadata', 'Choose files and assets to include'], link: featuresPath('modpacks/') }),
      feature('sharing', 'Sharing', { id: 'server-export', title: 'Server Export', benefit: 'Select the right world and server files, then export a local server with a clear configuration.', status: 'Detail', image: localServer, alt: 'XMCL Server Export controls', capabilities: ['Export to a folder or upload', 'Select server files', 'Configure MOTD and server options'], link: featuresPath('sharing/') }),
    ],
  },
  {
    id: 'accounts', shortTitle: 'Accounts', title: 'Accounts and productivity',
    description: 'Keep identity, customization, and frequent actions close to the worlds you play.',
    features: [
      feature('accounts', 'Accounts', { id: 'account-login', title: 'Multiple Auth Services', benefit: 'Choose the account service that matches how you play, from Microsoft to offline and third-party services.', status: 'Catalog', image: accountLogin, alt: 'XMCL account login dialog with multiple auth services', capabilities: ['Microsoft and offline accounts', 'Ely.by and LittleSkin services', 'Add and manage authentication services'], link: featuresPath('accounts/') }),
      feature('accounts', 'Accounts', { id: 'quick-action', title: 'Quick Action', benefit: 'Find instances and commands without leaving the page you are working on.', status: 'Catalog', image: quickAction, alt: 'XMCL Quick Action command dialog', capabilities: ['Search commands, instances, and Mods', 'Launch or create an instance', 'Keyboard-first navigation with Ctrl+K'], link: featuresPath('accounts/') }),
    ],
  },
  {
    id: 'diagnostics', shortTitle: 'Diagnostics', title: 'Diagnostics and assistance',
    description: 'When a launch fails, XMCL puts the evidence and the next action in the same place.',
    features: [
      feature('diagnostics', 'Diagnostics', { id: 'crash-diagnosis', title: 'Crash and Launch Failure Reports', benefit: 'Read the actual logs, crash reports, and server output behind a failed launch.', status: 'Catalog', image: crashDiagnosis, alt: 'XMCL crash report with AI diagnosis options', capabilities: ['Logs, crash reports, and launch failures', 'Mod resolution errors and exit codes', 'Copy a prompt for external AI tools'], link: featuresPath('diagnostics/') }),
      feature('diagnostics', 'Diagnostics', { id: 'ai-agent', title: 'Built-in AI Agent', benefit: 'Let an agent inspect the instance virtual filesystem and explain an actionable fix.', status: 'Detail', image: aiAgent, alt: 'XMCL Agent diagnosing a Minecraft launch failure', capabilities: ['Read instance files and reports', 'Investigate before making a conclusion', 'Apply an actionable fix when possible'], link: featuresPath('diagnostics/') }),
    ],
  },
]

const props = defineProps<{ category?: string }>()
const selectedGroup = ref(props.category || 'all')
const searchQuery = ref('')

const activeGroup = computed(() => groups.find(group => group.id === selectedGroup.value))
const filterFeatures = (features: Feature[]) => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return features
  return features.filter(feature => [featureTitle(feature), featureBenefit(feature), featureGroupLabel(feature), ...featureCapabilities(feature)].join(' ').toLowerCase().includes(query))
}
const visibleGroups = computed(() => (activeGroup.value ? [activeGroup.value] : groups)
  .map(group => ({ ...group, features: filterFeatures(group.features) }))
  .filter(group => group.features.length > 0))
const filteredFeatures = computed(() => visibleGroups.value.flatMap(group => group.features))
</script>

<style scoped>
:global(body:has(.feature-explorer) .VPContent),
:global(body:has(.feature-explorer) .VPDoc),
:global(body:has(.feature-explorer) .VPDoc .container),
:global(body:has(.feature-explorer) .VPDoc .content-container),
:global(body:has(.feature-explorer) .VPDoc .content) {
  max-width: none !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  width: 100% !important;
}

:global(body:has(.feature-explorer) .VPDocFooter) {
  display: none !important;
}

:global(body:has(.feature-explorer) .VPDocAside) {
  display: none !important;
}

.feature-explorer {
  --feature-ink: var(--xmcl-ink, #17211f);
  --feature-muted: var(--xmcl-muted, #64706c);
  --feature-paper: var(--xmcl-paper, #f4f5ef);
  --feature-panel: var(--xmcl-panel, #ffffff);
  --feature-soft: var(--xmcl-soft, #e9ece4);
  --feature-line: var(--xmcl-line, #d8ded7);
  --feature-lime: var(--xmcl-lime, #c9f85a);
  --feature-orange: var(--xmcl-orange, #e45e42);
  color: var(--feature-ink);
  margin: 0 auto;
  max-width: 1800px;
  padding: 72px clamp(24px, 5vw, 96px) 140px;
}

.feature-explorer-hero { border-bottom: 1px solid var(--feature-line); margin: 0 auto; max-width: 1680px; padding-bottom: 54px; }
.feature-explorer-back { color: var(--feature-orange); display: inline-flex; font-size: 13px; font-weight: 700; margin-bottom: 42px; }
.feature-explorer-kicker { color: var(--feature-orange); display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; margin-bottom: 18px; text-transform: uppercase; }
.feature-explorer h1 { color: var(--feature-ink); font-size: clamp(44px, 7vw, 88px); letter-spacing: -0.06em; line-height: 0.95; margin: 0; max-width: 800px; }
.feature-explorer-hero p { color: var(--feature-muted); font-size: 17px; line-height: 1.7; margin: 24px 0 0; max-width: 650px; }
.feature-explorer-groups { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 42px; }
.feature-explorer-groups button { background: transparent; border: 1px solid var(--feature-line); color: var(--feature-muted); cursor: pointer; display: inline-flex; font: inherit; font-size: 12px; font-weight: 700; gap: 10px; padding: 11px 14px; }
.feature-explorer-groups button:hover, .feature-explorer-groups button.active { background: var(--feature-lime); border-color: var(--feature-ink); color: #17211f; }
.feature-explorer-groups small { opacity: 0.65; }
.feature-explorer-content { margin: 0 auto; max-width: 1680px; padding-top: 34px; }
.feature-explorer-keyword-index { display: flex; flex-direction: column; gap: 24px; margin: 0 0 36px; }
.feature-explorer-keyword-group { border-top: 1px solid var(--feature-line); padding-top: 10px; }
.feature-explorer-keyword-group-heading { align-items: baseline; color: var(--feature-muted); display: flex; gap: 12px; justify-content: space-between; margin-bottom: 7px; text-transform: uppercase; }
.feature-explorer-keyword-group-heading strong { color: var(--feature-orange); font-size: 10px; letter-spacing: 0.14em; }
.feature-explorer-keyword-group-heading span { font-size: 9px; font-weight: 700; letter-spacing: 0.1em; }
.feature-explorer-keyword-list { display: grid; gap: 6px; grid-template-columns: repeat(5, minmax(0, 1fr)); }
.feature-explorer-keyword { align-items: center; border: 1px solid var(--feature-line); color: var(--feature-ink); display: flex; min-height: 70px; padding: 12px 15px; transition: background 180ms ease, border-color 180ms ease, transform 180ms ease; }
.feature-explorer-keyword:hover { background: var(--feature-lime); border-color: var(--feature-ink); color: #17211f !important; transform: translateY(-4px); }
.feature-explorer-keyword-copy { display: flex; flex-direction: column; gap: 4px; }
.feature-explorer-keyword-copy strong { color: var(--feature-ink); font-size: 14px; letter-spacing: -0.02em; line-height: 1.1; }
.feature-explorer-keyword-copy small { color: var(--feature-muted); font-size: 9px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.feature-explorer-keyword:hover .feature-explorer-keyword-copy small { color: #405035; }
.feature-explorer-keyword:hover .feature-explorer-keyword-copy strong { color: #17211f !important; }
.feature-explorer-toolbar { align-items: center; display: flex; gap: 18px; justify-content: space-between; margin-bottom: 24px; }
.feature-explorer-toolbar > span { color: var(--feature-muted); font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.feature-explorer-search { align-items: center; border: 1px solid var(--feature-line); display: flex; gap: 10px; max-width: 440px; padding: 11px 14px; width: 100%; }
.feature-explorer-search span { color: var(--feature-orange); }
.feature-explorer-search input { background: transparent; border: 0; color: var(--feature-ink); font: inherit; min-width: 0; outline: 0; width: 100%; }
.feature-explorer-showcase { display: flex; flex-direction: column; gap: 120px; }
.feature-explorer-showcase-item { align-items: center; border-top: 1px solid var(--feature-line); display: grid; gap: clamp(34px, 6vw, 120px); grid-template-columns: minmax(0, 1.55fr) minmax(300px, 0.45fr); padding-top: 32px; scroll-margin-top: 28px; }
.feature-explorer-showcase-item.reversed { grid-template-columns: minmax(300px, 0.45fr) minmax(0, 1.55fr); }
.feature-explorer-showcase-item.reversed .feature-explorer-showcase-image-wrap { grid-column: 2; grid-row: 1; }
.feature-explorer-showcase-item.reversed .feature-explorer-showcase-body { grid-column: 1; grid-row: 1; }
.feature-explorer-showcase-image-wrap { aspect-ratio: 16 / 9; background: #202925; box-shadow: 14px 14px 0 var(--feature-orange); overflow: hidden; position: relative; }
.feature-explorer-showcase-number { color: var(--feature-lime); font-size: 11px; font-weight: 700; left: 18px; letter-spacing: 0.14em; position: absolute; text-shadow: 1px 1px 0 #17211f; top: 16px; z-index: 1; }
.feature-explorer-image { display: block; height: 100%; object-fit: cover; transition: transform 300ms ease; width: 100%; }
.feature-explorer-showcase-item:hover .feature-explorer-image { transform: scale(1.025); }
.feature-explorer-showcase-body { max-width: 430px; }
.feature-explorer-card-meta { color: var(--feature-orange); display: flex; font-size: 10px; font-weight: 700; justify-content: space-between; letter-spacing: 0.12em; text-transform: uppercase; }
.feature-explorer-card-meta span:last-child { color: var(--feature-muted); }
.feature-explorer h2 { color: var(--feature-ink); font-size: 26px; letter-spacing: -0.04em; line-height: 1; margin: 18px 0 0; }
.feature-explorer-benefit { color: var(--feature-muted); font-size: 14px; line-height: 1.65; margin: 12px 0 0; }
.feature-explorer-card ul { color: var(--feature-muted); font-size: 12px; line-height: 1.6; margin: 18px 0 0; padding-left: 18px; }
.feature-explorer-link { align-items: center; color: var(--feature-ink); display: inline-flex; font-size: 12px; font-weight: 700; gap: 8px; margin-top: auto; padding-top: 24px; }
.feature-explorer-link:hover { color: var(--feature-orange); }

@media (max-width: 760px) {
  .feature-explorer { padding-top: 42px; }
  .feature-explorer h1 { font-size: 52px; }
  .feature-explorer-keyword-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .feature-explorer-toolbar { align-items: stretch; flex-direction: column; }
  .feature-explorer-showcase { gap: 78px; }
  .feature-explorer-showcase-item,
  .feature-explorer-showcase-item.reversed { display: flex; flex-direction: column; gap: 28px; }
  .feature-explorer-showcase-item.reversed .feature-explorer-showcase-image-wrap,
  .feature-explorer-showcase-item.reversed .feature-explorer-showcase-body { order: initial; }
  .feature-explorer-showcase-image-wrap { box-shadow: 7px 7px 0 var(--feature-orange); width: 100%; }
  .feature-explorer-showcase-body { max-width: none; width: 100%; }
}

@media (min-width: 761px) and (max-width: 1120px) {
  .feature-explorer-keyword-list { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

@media (max-width: 480px) {
  .feature-explorer-keyword-list { grid-template-columns: 1fr; }
}
</style>
