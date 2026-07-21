import { mkdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

interface CacheEntry<T> {
  expiresAt: string
  value: T
}

const cacheDirectory = join(process.cwd(), '.vitepress', 'cache', 'github')
const cacheDuration = 6 * 60 * 60 * 1000
const failedRequestCacheDuration = 15 * 60 * 1000

async function readCache<T>(key: string): Promise<CacheEntry<T> | undefined> {
  try {
    return JSON.parse(await readFile(join(cacheDirectory, `${key}.json`), 'utf-8')) as CacheEntry<T>
  } catch {
    return undefined
  }
}

async function writeCache<T>(key: string, value: T, duration: number) {
  try {
    await mkdir(cacheDirectory, { recursive: true })
    await writeFile(join(cacheDirectory, `${key}.json`), JSON.stringify({ expiresAt: new Date(Date.now() + duration).toISOString(), value }), 'utf-8')
  } catch (error) {
    console.warn(`Failed to write GitHub cache for ${key}.`, error)
  }
}

export async function loadCachedGitHubData<T>(key: string, load: () => Promise<T>, fallback?: () => T): Promise<T> {
  const cached = await readCache<T>(key)
  const expiresAt = cached ? Date.parse(cached.expiresAt) : Number.NaN
  if (cached && !Number.isNaN(expiresAt) && Date.now() < expiresAt) return cached.value

  try {
    const value = await load()
    await writeCache(key, value, cacheDuration)
    return value
  } catch (error) {
    if (cached) {
      console.warn(`Failed to refresh GitHub cache for ${key}; using the previous snapshot.`, error)
      return cached.value
    }
    if (fallback) {
      const value = fallback()
      await writeCache(key, value, failedRequestCacheDuration)
      console.warn(`Failed to fetch GitHub data for ${key}; caching the fallback snapshot.`, error)
      return value
    }
    throw error
  }
}