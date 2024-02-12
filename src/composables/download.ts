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
  const winWeb = computed(() => '')
  // const winWeb = computed(() => getUrl(a => a.name.endsWith('.appinstaller')))
  const winZip = computed(() => getUrl(a => a.name.endsWith('win32-x64.zip')))
  // const winAppx = computed(() => getUrl(a => a.name.endsWith('.appx') && a.name.indexOf('unsigned') === -1))
  const winAppx = computed(() => '')
  const macZip = computed(() => getUrl(a => a.name.endsWith('zip') && a.name.indexOf('darwin') !== -1))
  const macDmg = computed(() => getUrl(a => a.name.endsWith('.dmg')))
  const macZipArm64 = computed(() => getUrl(a => a.name.endsWith('zip') && a.name.indexOf('darwin') !== -1 && a.name.indexOf('arm64') !== -1))
  const deb = computed(() => getUrl(a => a.name.endsWith('.deb') && a.name.indexOf('arm64') === -1))
  const debArm64 = computed(() => getUrl(a => a.name.endsWith('.deb') && a.name.indexOf('arm64') !== -1))
  const snap = computed(() => getUrl(a => a.name.endsWith('.snap')))
  const appImage = computed(() => getUrl(a => a.name.endsWith('.AppImage') && a.name.indexOf('arm64') === -1))
  const appImageArm64 = computed(() => getUrl(a => a.name.endsWith('.AppImage') && a.name.indexOf('arm64') !== -1))
  const tarxz = computed(() => getUrl(a => a.name.endsWith('.tar.xz') && a.name.indexOf('arm64') === -1))
  const tarxzArm64 = computed(() => getUrl(a => a.name.endsWith('.tar.xz') && a.name.indexOf('arm64') !== -1))

  const rpm = computed(() => getUrl(a => a.name.endsWith('.rpm') && a.name.indexOf('aarch64') === -1))
  const rpmAArch64 = computed(() => getUrl(a => a.name.endsWith('.rpm') && a.name.indexOf('aarch64') !== -1))
  // const linuxZip = computed(() => getUrl(a => a.name.endsWith('.zip') && a.name.indexOf('darwin') === -1 && a.name.indexOf('win') === -1))

  return {
    winZip32,
    macZipArm64,
    winWeb,
    winZip,
    winAppx,
    macZip,
    macDmg,
    deb,
    debArm64,
    appImageArm64,
    rpmAArch64,
    tarxz,
    tarxzArm64,
    snap,
    appImage,
    // linuxZip,
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
    fetch('https://xmcl.blob.core.windows.net/releases/latest_version.json')
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
