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
  const resp = await fetch('https://api.github.com/repos/voxelum/x-minecraft-launcher/releases?per_page=5')
  const releases = await resp.json().then(v => v instanceof Array ? v : [])

  const latest: DownloadInfo = releases[0]
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
    releases,
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