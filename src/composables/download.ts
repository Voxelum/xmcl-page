import { defineStore } from 'pinia'
import { Ref } from 'vue'
import { useGFWStore } from './gfw'
import allReleases from 'virtual:latest-release'

export const useDownloadStore = defineStore('download', () => {
  const source = ref('auto')
  return { source }
})

export const useArtifactsStore = defineStore('artifacts', () => {
  const gfwStore = useGFWStore()
  const downloadStore = useDownloadStore()
  const githubStore = useGithubInfoStore()

  function getAzureUrl(name: string) { return `https://xmcl-release.azureedge.net/releases/${name}` }
  function getAzureMsUrl(name: string) { return `https://xmcl-release-ms.azureedge.net/releases/${name}` }
  function getUrl(find: (r: { name: string }) => boolean) {
    if (!githubStore.latest) return ''
    if (!githubStore.latest.assets) return ''
    const result = githubStore.latest.assets.find(find)
    if (result) {
      if (result.name.endsWith('.appinstaller')) {
        return 'https://xmcl.blob.core.windows.net/releases/xmcl.appinstaller'
      }
      if (downloadStore.source === 'auto') {
        return gfwStore ? getAzureMsUrl(result.name) : result.browser_download_url
      } else if (downloadStore.source === 'azure') {
        return getAzureUrl(result.name)
      } else if (downloadStore.source === 'azure-ms') {
        return getAzureMsUrl(result.name)
      }
      return result.browser_download_url
    }
    return ''
  }


  const winZip32 = computed(() => getUrl(a => a.name.endsWith('win32-ia32.zip')))
  const winWeb = computed(() => getUrl(a => a.name.endsWith('.appinstaller')))
  const winZip = computed(() => getUrl(a => a.name.endsWith('win32-x64.zip')))
  const winAppx = computed(() => getUrl(a => a.name.endsWith('.appx') && a.name.indexOf('unsigned') === -1))
  const macZip = computed(() => getUrl(a => a.name.endsWith('zip') && a.name.indexOf('win32') === -1))
  const macDmg = computed(() => getUrl(a => a.name.endsWith('.dmg')))
  const deb = computed(() => getUrl(a => a.name.endsWith('.deb')))
  const snap = computed(() => getUrl(a => a.name.endsWith('.snap')))
  const appImage = computed(() => getUrl(a => a.name.endsWith('.AppImage')))
  const rpm = computed(() => getUrl(a => a.name.endsWith('.rpm')))

  return {
    winZip32,
    winWeb,
    winZip,
    winAppx,
    macZip,
    macDmg,
    deb,
    snap,
    appImage,
    rpm,
    refreshing: githubStore.refreshing
  }
})

export const useGithubInfoStore = defineStore('github', () => {
  const releases = ref(allReleases)
  const latest: Ref<{
    // eslint-disable-next-line camelcase
    assets?: { name: string; browser_download_url: string }[]
    prerelease: boolean
    // eslint-disable-next-line camelcase
    tag_name: string
  }> = computed(() => releases.value[0])
  const latestVersion: Ref<string> = computed(() => latest.value ? latest.value.tag_name : 'unknown')
  const prerelease = computed(() => latest.value ? !!latest.value.prerelease : false)
  const refreshing = ref(false)
  function refresh() {
    refreshing.value = true
    fetch('https://cdnms.xmcl.app/releases/latest_version.json')
      .then(resp => resp.json())
      .then(r => releases.value = [r])
      .finally(() => { refreshing.value = false })
  }

  const github = {
    latest,
    latestVersion,
    prerelease,
    refresh,
    refreshing,
  }

  return github
})
