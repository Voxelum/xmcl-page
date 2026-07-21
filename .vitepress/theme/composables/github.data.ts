export interface GitHubStats {
  stars: number | null
  forks: number | null
  issues: number | null
  downloads: number | null
}

export interface GitHubContributor {
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}

export interface GitHubData {
  stats: GitHubStats
  contributors: GitHubContributor[]
  generatedAt: string
}

declare const data: GitHubData
export { data }

declare const process: {
  env: Record<string, string | undefined>
}

interface RepositoryResponse {
  stargazers_count: number
  forks_count: number
  open_issues_count: number
}

interface ReleaseResponse {
  assets?: Array<{ download_count?: number }>
}

const repository = 'Voxelum/x-minecraft-launcher'
const apiBase = `https://api.github.com/repos/${repository}`

async function fetchGitHub<T>(url: string): Promise<T> {
  const token = process.env.GITHUB_TOKEN ?? process.env.VITE_GITHUB_TOKEN
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
  if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`)
  return response.json() as Promise<T>
}

async function load(): Promise<GitHubData> {
  const fallback: GitHubData = {
    stats: { stars: null, forks: null, issues: null, downloads: null },
    contributors: [],
    generatedAt: new Date().toISOString(),
  }

  const [repositoryResult, releasesResult, contributorsResult] = await Promise.allSettled([
    fetchGitHub<RepositoryResponse>(apiBase),
    fetchGitHub<ReleaseResponse[]>(`${apiBase}/releases?per_page=100`),
    fetchGitHub<GitHubContributor[]>(`${apiBase}/contributors?per_page=12`),
  ])

  if (repositoryResult.status === 'fulfilled') {
    fallback.stats = {
      ...fallback.stats,
      stars: repositoryResult.value.stargazers_count,
      forks: repositoryResult.value.forks_count,
      issues: repositoryResult.value.open_issues_count,
    }
  }

  if (releasesResult.status === 'fulfilled') {
    fallback.stats.downloads = releasesResult.value.reduce(
      (total, release) => total + (release.assets || []).reduce((count, asset) => count + (asset.download_count || 0), 0),
      0,
    )
  }

  if (contributorsResult.status === 'fulfilled') {
    fallback.contributors = contributorsResult.value.filter(contributor => contributor.avatar_url && contributor.html_url)
  }

  if (repositoryResult.status === 'rejected' && releasesResult.status === 'rejected' && contributorsResult.status === 'rejected') {
    console.warn('Failed to fetch GitHub project data; using empty snapshot', repositoryResult.reason)
  }

  return fallback
}

export default {
  load,
}
