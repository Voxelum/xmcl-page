import fs from 'node:fs'
import path from 'node:path'
import type { MarkdownRenderer } from 'vitepress'
import { createMarkdownRenderer } from 'vitepress'
import { formatDistance } from 'date-fns'
import useBlogFile from './useBlogFile'

let md: MarkdownRenderer
const { folderDir, readFrontMatter } = useBlogFile()

const dir = folderDir('posts')

export interface Post {
  title: string
  author: string
  href: string
  locale: string
  date: {
    time: number
    string: string
    since: string
  }
  excerpt: string | undefined
  data: Record<string, any>
}

declare const data: Post[]
export { data }

async function load(): Promise<Post[]>
async function load() {
  md = md || (await createMarkdownRenderer(process.cwd()))
  const srcRoot = path.resolve(process.cwd(), 'src')
  const locales = fs
    .readdirSync(srcRoot, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(name => fs.existsSync(path.join(srcRoot, name, 'blog', 'posts')))

  const posts: Post[] = []
  for (const locale of locales) {
    const postDir = path.join(srcRoot, locale, 'blog', 'posts')
    const files = fs.readdirSync(postDir).filter(f => f.endsWith('.md'))
    for (const file of files) {
      posts.push(getPost(file, postDir, locale))
    }
  }
  return posts.sort((a, b) => b.date.time - a.date.time)
}

export default {
  watch: path.join(dir, '*.md'),
  load,
}

const cache = new Map()

function getPost(file: string, postDir: string, locale: string): Post {
  const fullPath = path.join(postDir, file)
  const timestamp = fs.statSync(fullPath).mtimeMs

  const { data, excerpt } = readFrontMatter(file, postDir, cache)

  const post: Post = {
    title: data.title,
    author: data.author ? data.author : 'Unknown',
    href: `/posts/${file.replace(/\.md$/, '')}`,
    locale,
    date: safeFormatDate(data.date, timestamp),
    excerpt: excerpt && md.render(excerpt),
    data,
  }

  cache.set(fullPath, {
    timestamp,
    post,
  })
  return post
}

function formatDate(date: Date): Post['date'] {
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    since: formatDistance(date, new Date(), { addSuffix: true }),
  }
}

function safeFormatDate(raw: unknown, fallbackTimestamp: number): Post['date'] {
  let d: Date
  if (raw instanceof Date) {
    d = raw
  } else if (typeof raw === 'string' && raw.trim().length > 0) {
    const parsed = new Date(raw)
    d = isNaN(+parsed) ? new Date(fallbackTimestamp) : parsed
  } else if (typeof raw === 'number' && !isNaN(raw)) {
    d = new Date(raw)
  } else {
    d = new Date(fallbackTimestamp)
  }
  return formatDate(d)
}