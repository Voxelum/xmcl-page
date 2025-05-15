import { computed, inject, reactive, ref } from "vue"
import { data } from './latest.data'

export function useDownloads() {
  const inGFW = inject('gfw', ref(false))


  function getProxiedUrl(url: string) {
    const proxies = [
      'https://gh-proxy.com',
      'https://gitproxy.click',
      'https://github.moeyy.xyz',
      'https://ghfile.geekertao.top',
      'https://github.proxy.class3.fun',
      'https://github-proxy.lixxing.top',
      'https://github.tbedu.top',
      'https://hub.gitmirror.com',
      'https://gh-proxy.net',
      'https://gh-proxy.cijhn.workers.dev',
    ]
    const randomPick = Math.floor(Math.random() * proxies.length)
    const proxy = proxies[randomPick]
    return `${proxy}/${url}`
  }

  function getUrl(find: (r: { name: string }) => boolean) {
    if (!data.latest) return ''
    if (!data.latest.assets) return ''
    const result = data.latest.assets.find(find)
    if (result && result.name.endsWith('.appinstaller')) {
      return 'https://xmcl.blob.core.windows.net/releases/xmcl.appinstaller'
    }
    if (result) {
      return inGFW.value ? getProxiedUrl(result.browser_download_url) : result.browser_download_url
    }
    return ''
  }

  const winZip32 = computed(() => getUrl(a => a.name.endsWith('win32-ia32.zip')))
  const winWeb = computed(() => getUrl(a => a.name.endsWith('.appinstaller')))
  const winZip = computed(() => getUrl(a => a.name.endsWith('win32-x64.zip')))
  const winAppx = computed(() => getUrl(a => a.name.endsWith('.appx')))
  const macDmg = computed(() => getUrl(a => a.name.endsWith('.dmg') && a.name.indexOf('arm64') === -1))
  const macDmgArm64 = computed(() => getUrl(a => a.name.endsWith('.dmg') && a.name.indexOf('arm64') !== -1))
  const deb = computed(() => getUrl(a => a.name.endsWith('.deb') && a.name.indexOf('arm64') === -1))
  const debArm64 = computed(() => getUrl(a => a.name.endsWith('.deb') && a.name.indexOf('arm64') !== -1))
  const snap = computed(() => getUrl(a => a.name.endsWith('.snap')))
  const appImage = computed(() => getUrl(a => a.name.endsWith('.AppImage') && a.name.indexOf('arm64') === -1))
  const appImageArm64 = computed(() => getUrl(a => a.name.endsWith('.AppImage') && a.name.indexOf('arm64') !== -1))
  const tarxz = computed(() => getUrl(a => a.name.endsWith('.tar.xz') && a.name.indexOf('arm64') === -1))
  const tarxzArm64 = computed(() => getUrl(a => a.name.endsWith('.tar.xz') && a.name.indexOf('arm64') !== -1))
  const rpm = computed(() => getUrl(a => a.name.endsWith('.rpm') && a.name.indexOf('aarch64') === -1))
  const rpmAArch64 = computed(() => getUrl(a => a.name.endsWith('.rpm') && a.name.indexOf('aarch64') !== -1))

  return reactive({
    winZip32,
    macDmgArm64,
    winWeb,
    winZip,
    winAppx,
    macDmg,
    deb,
    debArm64,
    appImageArm64,
    rpmAArch64,
    tarxz,
    tarxzArm64,
    snap,
    appImage,
    rpm,
  })
}
