<template>
  <section class="log-viewer-page" @dragenter.prevent="isDragging = true" @dragover.prevent @dragleave.prevent="isDragging = false" @drop.prevent="onDrop">
    <header class="log-viewer-hero">
      <div class="log-viewer-grid" aria-hidden="true" />
      <div class="log-viewer-hero-content">
        <p class="log-viewer-kicker"><span /> XMCL utility</p>
        <h1>Read the evidence.</h1>
        <p class="log-viewer-hero-copy">Open a support report and follow the launch story from first line to failure.</p>
        <p class="log-viewer-hero-description">Inspect XMCL support reports without uploading them anywhere. Every archive is read locally in your browser.</p>
        <div class="log-viewer-hero-actions">
          <button class="log-viewer-hero-action" type="button" @click="openFilePicker"><span class="i-fa6-solid:folder-open" aria-hidden="true" /> Open a report</button>
          <input ref="fileInput" class="file-picker-input" type="file" accept=".zip,application/zip" multiple @change="onFilesPicked">
        </div>
        <div class="log-viewer-hero-meta"><span><span class="i-fa6-solid:shield-halved" aria-hidden="true" /> Local processing</span><i /><span>ZIP support reports</span></div>
        <p v-if="status" class="hero-status" :class="{ error: statusIsError }">{{ status }}</p>
      </div>
    </header>

    <div class="log-viewer-shell">
      <template v-if="reports.length">
        <div class="viewer-layout">
          <aside class="viewer-sidebar" aria-label="Reports and log files">
            <div class="sidebar-heading">
              <p class="eyebrow">Reports</p>
              <span>{{ reports.length }}</span>
            </div>
            <div class="report-list">
              <button v-for="report in sortedReports" :key="report.id" class="report-item" :class="{ active: report.id === activeReportId }" type="button" @click="selectReport(report.id)">
                <span class="report-item-name">{{ report.id }}</span>
                <span>{{ report.logs.length }} logs</span>
              </button>
            </div>

            <div v-if="activeReport?.device" class="device-panel">
              <p class="eyebrow">Device</p>
              <dl>
                <template v-for="([key, value]) in deviceEntries" :key="key">
                  <dt>{{ key }}</dt>
                  <dd>{{ value }}</dd>
                </template>
              </dl>
            </div>

            <div class="sidebar-heading files-heading">
              <p class="eyebrow">Log files</p>
              <span>{{ activeReport?.logs.length ?? 0 }}</span>
            </div>
            <div class="log-list">
              <button v-for="log in activeReport?.logs" :key="log.path" class="log-item" :class="{ active: log.path === activeLogPath }" type="button" @click="activeLogPath = log.path">
                <span>{{ log.path }}</span>
                <small>{{ formatSize(log.size) }}</small>
              </button>
            </div>
          </aside>

          <main class="viewer-main">
            <template v-if="activeLog">
              <header class="viewer-header">
                <div>
                  <p class="eyebrow">Viewing log</p>
                  <h2>{{ activeLog.path }}</h2>
                </div>
                <div class="viewer-actions">
                  <span class="line-count">{{ visibleLineCount }} / {{ activeLogLineCount }} lines</span>
                  <button class="icon-button" type="button" title="Copy visible log content" aria-label="Copy visible log content" @click="copyVisibleLog">
                    <span class="i-fa6-regular:copy" aria-hidden="true" />
                  </button>
                  <button class="icon-button" type="button" title="Remove loaded reports" aria-label="Remove loaded reports" @click="resetReports">
                    <span class="i-fa6-solid:trash-can" aria-hidden="true" />
                  </button>
                </div>
              </header>

              <label class="filter-control">
                <span class="i-fa6-solid:magnifying-glass" aria-hidden="true" />
                <input v-model="filter" type="search" placeholder="Filter lines with text or a regular expression" aria-label="Filter log lines">
                <button v-if="filter" type="button" title="Clear filter" aria-label="Clear filter" @click="filter = ''">
                  <span class="i-fa6-solid:xmark" aria-hidden="true" />
                </button>
              </label>

              <p v-if="activeLog.content.length > largeLogThreshold" class="large-log-note"><span class="i-fa6-solid:triangle-exclamation" /> Large log: filtering and rendering can take a moment.</p>
              <pre class="log-output"><code>{{ visibleLogContent }}</code></pre>
            </template>
            <div v-else class="viewer-empty">
              <span class="i-fa6-solid:file-circle-question" aria-hidden="true" />
              <p>Select a log file to begin.</p>
            </div>
          </main>
        </div>
      </template>

      <div v-else class="empty-panel">
        <span class="i-fa6-solid:shield-halved" aria-hidden="true" />
        <div>
          <p class="eyebrow">Private by design</p>
          <p>Nothing leaves your device. The viewer reads report archives directly in your browser.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import JSZip from 'jszip'
import { computed, ref } from 'vue'

interface DeviceInfo {
  [key: string]: unknown
}

interface LogEntry {
  path: string
  content: string
  size: number
  containerTime?: number
}

interface Report {
  id: string
  logs: LogEntry[]
  device?: DeviceInfo
  lastModified: number
}

interface Container {
  label: string
  time?: number
}

const largeLogThreshold = 5_000_000
const reports = ref<Report[]>([])
const activeReportId = ref<string>()
const activeLogPath = ref<string>()
const filter = ref('')
const status = ref('')
const statusIsError = ref(false)
const isDragging = ref(false)
const fileInput = ref<HTMLInputElement>()

const sortedReports = computed(() => [...reports.value].sort((left, right) => right.lastModified - left.lastModified || left.id.localeCompare(right.id)))
const activeReport = computed(() => reports.value.find((report) => report.id === activeReportId.value))
const activeLog = computed(() => activeReport.value?.logs.find((log) => log.path === activeLogPath.value))
const activeLogLineCount = computed(() => activeLog.value ? countLines(activeLog.value.content) : 0)
const visibleLogContent = computed(() => filterLog(activeLog.value?.content ?? '', filter.value))
const visibleLineCount = computed(() => countLines(visibleLogContent.value))
const deviceEntries = computed(() => Object.entries(activeReport.value?.device ?? {}).filter(([key, value]) => key && value !== undefined && value !== null).slice(0, 8))

function countLines(content: string) {
  return content ? content.split(/\r?\n/).length : 0
}

function filterLog(content: string, query: string) {
  const trimmedQuery = query.trim()
  if (!trimmedQuery) return content
  let matches: (line: string) => boolean
  try {
    const expression = new RegExp(trimmedQuery, 'i')
    matches = (line) => expression.test(line)
  } catch {
    const normalizedQuery = trimmedQuery.toLowerCase()
    matches = (line) => line.toLowerCase().includes(normalizedQuery)
  }
  return content.split(/\r?\n/).filter(matches).join('\n')
}

function formatSize(size: number) {
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
  return `${(size / 1024 / 1024).toFixed(2)} MB`
}

function containerFor(name: string): Container {
  const label = name.replace(/\.zip$/i, '').replaceAll('!', ':')
  const time = Date.parse(label)
  return Number.isNaN(time) ? { label } : { label, time }
}

async function readZip(zip: JSZip, logs: LogEntry[], device: { value?: DeviceInfo }, containers: Container[] = []) {
  const entries: Promise<void>[] = []
  zip.forEach((relativePath, entry) => {
    entries.push((async () => {
      if (entry.dir) return
      const normalizedPath = relativePath.replaceAll('\\', '/')
      const lowerPath = normalizedPath.toLowerCase()
      if (lowerPath.endsWith('.zip')) {
        const nestedZip = await JSZip.loadAsync(await entry.async('uint8array'))
        const nestedName = normalizedPath.split('/').pop() || normalizedPath
        await readZip(nestedZip, logs, device, [...containers, containerFor(nestedName)])
        return
      }
      if (lowerPath.endsWith('device.json')) {
        try {
          device.value = JSON.parse(await entry.async('string')) as DeviceInfo
        } catch {
          // A malformed optional device file should not prevent the logs from opening.
        }
        return
      }
      if (!lowerPath.endsWith('.log')) return
      const container = containers.at(-1)
      logs.push({
        path: container ? `${container.label}/${normalizedPath}` : normalizedPath,
        content: await entry.async('string'),
        size: entry._data?.uncompressedSize ?? 0,
        containerTime: container?.time,
      })
    })())
  })
  await Promise.all(entries)
}

async function parseReport(file: File) {
  const logs: LogEntry[] = []
  const device: { value?: DeviceInfo } = {}
  await readZip(await JSZip.loadAsync(await file.arrayBuffer()), logs, device)
  logs.sort((left, right) => (left.containerTime ?? Number.MAX_SAFE_INTEGER) - (right.containerTime ?? Number.MAX_SAFE_INTEGER) || left.path.localeCompare(right.path))
  return { id: file.name.replace(/\.zip$/i, ''), logs, device: device.value, lastModified: file.lastModified } satisfies Report
}

async function loadFiles(files: File[]) {
  const archives = files.filter((file) => file.name.toLowerCase().endsWith('.zip'))
  if (!archives.length) {
    status.value = 'Choose a .zip report archive to continue.'
    statusIsError.value = true
    return
  }

  status.value = `Reading ${archives.length} report${archives.length === 1 ? '' : 's'}...`
  statusIsError.value = false
  const results = await Promise.allSettled(archives.map(parseReport))
  const loaded = results.filter((result): result is PromiseFulfilledResult<Report> => result.status === 'fulfilled').map((result) => result.value)
  const rejected = results.length - loaded.length
  for (const report of loaded) {
    const index = reports.value.findIndex((existing) => existing.id === report.id)
    if (index === -1) reports.value.push(report)
    else reports.value.splice(index, 1, report)
  }
  if (!activeReportId.value && loaded[0]) selectReport(loaded[0].id)
  status.value = rejected ? `Opened ${loaded.length} report${loaded.length === 1 ? '' : 's'}; ${rejected} could not be read.` : `Opened ${loaded.length} report${loaded.length === 1 ? '' : 's'}.`
  statusIsError.value = Boolean(rejected)
}

function onFilesPicked(event: Event) {
  const files = Array.from((event.target as HTMLInputElement).files ?? [])
  void loadFiles(files)
  if (fileInput.value) fileInput.value.value = ''
}

function openFilePicker() {
  fileInput.value?.click()
}

function onDrop(event: DragEvent) {
  isDragging.value = false
  void loadFiles(Array.from(event.dataTransfer?.files ?? []))
}

function selectReport(id: string) {
  activeReportId.value = id
  const report = reports.value.find((item) => item.id === id)
  activeLogPath.value = report?.logs[0]?.path
  filter.value = ''
}

async function copyVisibleLog() {
  if (!visibleLogContent.value || !navigator.clipboard) return
  await navigator.clipboard.writeText(visibleLogContent.value)
  status.value = 'Visible log content copied to your clipboard.'
  statusIsError.value = false
}

function resetReports() {
  reports.value = []
  activeReportId.value = undefined
  activeLogPath.value = undefined
  filter.value = ''
  status.value = ''
}
</script>

<style scoped>
:global(body:has(.log-viewer-page) .VPContent),
:global(body:has(.log-viewer-page) .VPDoc),
:global(body:has(.log-viewer-page) .VPDoc .container),
:global(body:has(.log-viewer-page) .VPDoc .content-container),
:global(body:has(.log-viewer-page) .VPDoc .content) { max-width: none !important; padding-left: 0 !important; padding-right: 0 !important; width: 100% !important; }
:global(body:has(.log-viewer-page) .VPDocFooter),
:global(body:has(.log-viewer-page) .VPDocAside) { display: none !important; }

.log-viewer-page { --ink: #17211f; --muted: #64706c; --paper: #f4f5ef; --panel: #ffffff; --soft: #e9ece4; --line: #d8ded7; --lime: #c9f85a; --orange: #e45e42; background: var(--paper); color: var(--ink); font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif; min-height: calc(100vh - 64px); }
:global(html.dark .log-viewer-page) { --ink: #edf3ed; --muted: #9aa9a1; --paper: #101612; --panel: #1b241f; --soft: #151d18; --line: #334139; }
.log-viewer-hero { display: grid; grid-template-columns: minmax(0, 1fr); min-height: min(580px, calc(100vh - 64px)); overflow: hidden; padding: 88px clamp(24px, 7vw, 112px) 72px; position: relative; }
.log-viewer-grid { background-image: linear-gradient(to right, rgba(23, 33, 31, .05) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 33, 31, .05) 1px, transparent 1px); background-size: 56px 56px; inset: 0; mask-image: linear-gradient(to bottom, black, transparent 90%); position: absolute; z-index: 0; }
:global(html.dark .log-viewer-grid) { background-image: linear-gradient(to right, rgba(237, 243, 237, .07) 1px, transparent 1px), linear-gradient(to bottom, rgba(237, 243, 237, .07) 1px, transparent 1px); }
.log-viewer-hero-content { align-self: center; max-width: 600px; padding: 30px 0 50px; position: relative; z-index: 1; }
.log-viewer-kicker { align-items: center; color: var(--muted); display: flex; font-size: 11px; font-weight: 700; gap: 10px; letter-spacing: .14em; margin: 0; text-transform: uppercase; }
.log-viewer-kicker > span { background: #77b82a; border-radius: 50%; display: inline-block; height: 8px; width: 8px; }
.eyebrow { align-items: center; color: var(--orange); display: flex; font-size: 10px; font-weight: 800; gap: 8px; letter-spacing: .14em; line-height: 1.2; margin: 0; text-transform: uppercase; }
.log-viewer-hero h1 { color: var(--ink) !important; font-size: clamp(52px, 7vw, 104px); font-weight: 700; letter-spacing: -0.05em; line-height: .94; margin: 28px 0 22px; max-width: 700px; }
.log-viewer-hero-copy { color: var(--ink); font-size: clamp(20px, 2.2vw, 30px); font-weight: 600; letter-spacing: -0.02em; line-height: 1.15; margin: 0; max-width: 550px; }
.log-viewer-hero-copy::first-line { color: var(--orange); }
.log-viewer-hero-description { color: var(--muted); font-size: 16px; line-height: 1.7; margin: 24px 0 0; max-width: 540px; }
.log-viewer-hero-actions { display: flex; margin-top: 32px; }
.log-viewer-hero-action { align-items: center; background: var(--ink); border: 1px solid var(--ink); color: var(--paper); cursor: pointer; display: inline-flex; font: inherit; font-size: 14px; font-weight: 700; gap: 10px; height: 46px; padding: 0 20px; transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease; }
.log-viewer-hero-action:hover { background: var(--lime); box-shadow: 4px 4px 0 var(--ink); color: #17211f; transform: translate(-2px, -2px); }
:global(html.dark .log-viewer-hero-action) { background: var(--lime); border-color: var(--lime); color: #17211f; }
.file-picker-input { height: 1px; opacity: 0; overflow: hidden; position: absolute; width: 1px; }
.log-viewer-hero-meta { align-items: center; color: var(--muted); display: flex; flex-wrap: wrap; font-size: 12px; gap: 14px; margin-top: 34px; }
.log-viewer-hero-meta > span { align-items: center; display: inline-flex; gap: 7px; }
.log-viewer-hero-meta i { background: var(--line); height: 14px; width: 1px; }
.hero-status { color: var(--muted); font-size: 12px; margin: 16px 0 0; }
.hero-status.error { color: #d6614d; }
.log-viewer-shell { margin: 0 auto; max-width: 1800px; padding: 42px clamp(24px, 5vw, 96px) 110px; }
.viewer-header h2 { color: var(--ink); font-size: 20px; letter-spacing: 0; line-height: 1.1; margin: 6px 0 0; }
.viewer-layout { background: var(--panel); border: 1px solid var(--line); display: grid; grid-template-columns: minmax(250px, 300px) minmax(0, 1fr); margin-top: 26px; min-height: 650px; }
.viewer-sidebar { background: var(--soft); border-right: 1px solid var(--line); display: flex; flex-direction: column; min-height: 0; }
.sidebar-heading { align-items: center; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; padding: 17px 18px 12px; }
.sidebar-heading > span { background: var(--ink); color: var(--lime); font-size: 10px; font-weight: 800; min-width: 22px; padding: 3px 6px; text-align: center; }
.report-list, .log-list { overflow-y: auto; }
.report-list { border-bottom: 1px solid var(--line); max-height: 190px; }
.report-item, .log-item { background: transparent; border: 0; border-bottom: 1px solid color-mix(in srgb, var(--line) 75%, transparent); color: var(--muted); cursor: pointer; display: flex; font: inherit; text-align: left; width: 100%; }
.report-item { flex-direction: column; font-size: 10px; gap: 5px; padding: 12px 18px; }
.report-item-name { color: var(--ink); font-size: 12px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.report-item:hover, .report-item.active, .log-item:hover, .log-item.active { background: var(--lime); color: #17211f; }
.report-item:hover .report-item-name, .report-item.active .report-item-name { color: #17211f; }
.device-panel { border-bottom: 1px solid var(--line); padding: 17px 18px; }
.device-panel dl { display: grid; font-size: 10px; gap: 5px 10px; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); margin: 12px 0 0; }
.device-panel dt { color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.device-panel dd { color: var(--ink); font-weight: 700; margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.files-heading { margin-top: auto; }
.log-list { max-height: 240px; }
.log-item { align-items: baseline; font-size: 11px; gap: 12px; justify-content: space-between; padding: 10px 18px; }
.log-item span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.log-item small { flex: 0 0 auto; font-size: 9px; }
.viewer-main { display: flex; flex-direction: column; min-width: 0; padding: 28px; }
.viewer-header { align-items: start; display: flex; gap: 20px; justify-content: space-between; margin-bottom: 22px; }
.viewer-actions { align-items: center; display: flex; flex: 0 0 auto; gap: 8px; }
.line-count { color: var(--muted); font-size: 10px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; white-space: nowrap; }
.icon-button { background: transparent; color: var(--ink); min-height: 34px; padding: 0; width: 34px; }
.icon-button:hover, .icon-button:focus-visible { background: var(--ink); color: var(--lime); outline: none; }
.filter-control { align-items: center; border-bottom: 1px solid var(--ink); display: flex; gap: 11px; margin-bottom: 14px; padding: 0 0 9px; }
.filter-control > span { color: var(--orange); font-size: 13px; }
.filter-control input { background: transparent; border: 0; color: var(--ink); font: inherit; font-size: 13px; min-width: 0; outline: none; width: 100%; }
.filter-control button { background: transparent; border: 0; color: var(--muted); cursor: pointer; font-size: 13px; padding: 0; }
.filter-control button:hover { color: var(--orange); }
.large-log-note { color: #9a6515; font-size: 11px; margin: 0 0 12px; }
.log-output { background: #17211f; color: #d6e5d9; flex: 1; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-size: 12px; line-height: 1.6; margin: 0; max-height: 720px; min-height: 420px; overflow: auto; padding: 20px; tab-size: 2; white-space: pre-wrap; word-break: break-word; }
.viewer-empty { align-items: center; color: var(--muted); display: flex; flex: 1; flex-direction: column; font-size: 13px; justify-content: center; }
.viewer-empty > span { color: var(--orange); font-size: 28px; }
.empty-panel { align-items: center; background: var(--ink); color: #d7e1da; display: flex; gap: 16px; margin-top: 26px; max-width: 670px; padding: 21px 25px; }
.empty-panel > span { color: var(--lime); font-size: 28px; }
.empty-panel .eyebrow { color: var(--lime); }
.empty-panel p:last-child { font-size: 12px; line-height: 1.5; margin: 7px 0 0; }

@media (max-width: 780px) {
  .log-viewer-hero { grid-template-columns: 1fr; min-height: auto; padding-top: 64px; }
  .log-viewer-hero-content { padding-bottom: 30px; }
  .viewer-layout { display: flex; flex-direction: column; }
  .viewer-sidebar { border-bottom: 1px solid var(--line); border-right: 0; }
  .report-list { max-height: 150px; }
  .log-list { max-height: 190px; }
  .files-heading { margin-top: 0; }
  .viewer-main { min-height: 580px; padding: 20px; }
}

@media (max-width: 480px) {
  .log-viewer-shell { padding-left: 16px; padding-right: 16px; }
  .log-viewer-hero { padding: 46px 20px 60px; }
  .log-viewer-hero h1 { font-size: 54px; }
  .viewer-header { align-items: stretch; flex-direction: column; }
  .viewer-actions { justify-content: space-between; }
  .log-output { font-size: 11px; min-height: 340px; padding: 15px; }
}
</style>