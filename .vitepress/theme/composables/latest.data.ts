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
  latestVersion: string
  prerelease: boolean
}

async function load() {
  const resp = await fetch('https://api.github.com/repos/voxelum/x-minecraft-launcher/releases?per_page=5')
  const releases = await resp.json().then(v => v instanceof Array ? v : [])

  const latest: DownloadInfo = releases[0]
  const latestVersion = latest ? latest.tag_name : 'unknown'
  const prerelease = latest ? !!latest.prerelease : false
 
  const github = {
    releases,
    latest,
    latestVersion,
    prerelease,
  }

  return github
}

export default {
  load,
}