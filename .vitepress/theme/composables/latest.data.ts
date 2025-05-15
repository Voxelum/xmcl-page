export interface DownloadInfo {
  // eslint-disable-next-line camelcase
  assets?: { name: string; browser_download_url: string }[]
  prerelease: boolean
  // eslint-disable-next-line camelcase
  tag_name: string
}

export declare const data: {
  releases: DownloadInfo[]
  latest: DownloadInfo
  versionWithBuild: string
  latestVersion: string
  prerelease: boolean
}

async function load() {
  const resp = await fetch('https://api.github.com/repos/voxelum/x-minecraft-launcher/releases/latest')
  const latest = await resp.json().then(v => v as DownloadInfo)
  const latestVersion = latest ? latest.tag_name : 'unknown'
  const prerelease = latest ? !!latest.prerelease : false

  const versionAsset = latest.assets?.find(a => a.name.endsWith('version'))
  let versionWithBuild = ''
  if (versionAsset?.browser_download_url) {
    const version = await fetch(versionAsset.browser_download_url)
    versionWithBuild = await version.text()
    versionWithBuild = versionWithBuild.trim()
  }
 
  const github = {
    versionWithBuild,
    latest,
    latestVersion,
    prerelease,
  }

  return github
}

export default {
  load,
}