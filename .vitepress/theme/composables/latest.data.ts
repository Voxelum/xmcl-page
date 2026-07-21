export interface DownloadInfo {
  // eslint-disable-next-line camelcase
  assets?: { name: string; browser_download_url: string }[]
  prerelease: boolean
  // eslint-disable-next-line camelcase
  tag_name: string
}

export declare const data: {
  releases: DownloadInfo[]
  latest?: DownloadInfo
  versionWithBuild: string
  latestVersion: string
  prerelease: boolean
}

async function load() {
  try {
    const resp = await fetch('https://api.github.com/repos/voxelum/x-minecraft-launcher/releases/latest')
    if (!resp.ok) {
      throw new Error(`GitHub API error ${resp.status}`)
    }

    const latest = await resp.json().then(v => v as DownloadInfo)
    const latestVersion = latest?.tag_name ?? 'unknown'
    const prerelease = !!latest?.prerelease

    const versionAsset = latest?.assets?.find(a => a.name.endsWith('version'))
    let versionWithBuild = ''
    if (versionAsset?.browser_download_url) {
      const version = await fetch(versionAsset.browser_download_url)
      if (!version.ok) {
        throw new Error(`Version asset request failed with status ${version.status}`)
      }
      versionWithBuild = (await version.text()).trim()
    }

    return {
      versionWithBuild,
      latest,
      latestVersion,
      prerelease,
    }
  } catch (error) {
    console.warn('Failed to fetch latest release data', error)
    return {
      versionWithBuild: '',
      latest: undefined,
      latestVersion: 'unknown',
      prerelease: false,
    }
  }
}

export default {
  load,
}