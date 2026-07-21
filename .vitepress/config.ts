import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { existsSync, readdirSync } from 'fs'
import { join, resolve } from 'path'
import Unocss from 'unocss/vite'
import { LocaleConfig, defineConfigWithTheme } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import { DefaultTheme } from 'vitepress/theme'
import { loadTheme } from './themeHelper'
import { imagetools } from 'vite-imagetools'

const src = resolve(__dirname, '../src')
const files = readdirSync(src)
const localesOrder = ['en', 'de', 'fr', 'pl', 'uk', 'ru', 'kk', 'ar', 'zh', 'zh-TW', 'ko', 'jp']
const locales = files
  .filter(f => f !== 'assets' && !f.endsWith('.md'))
  .sort((a, b) => {
    const indexA = localesOrder.indexOf(a)
    const indexB = localesOrder.indexOf(b)
    if (indexA === -1 && indexB === -1) return a.localeCompare(b)
    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })
const localeConfig: LocaleConfig<DefaultTheme.Config> = {}
for (const locale of locales) {
  localeConfig[locale] = loadTheme(resolve(src, locale), locale)
}
if (localeConfig['en']) {
  localeConfig['root'] = localeConfig['en']
}

const siteUrl = 'https://xmcl.app'
const localeMetadata: Record<string, { hreflang: string; ogLocale: string }> = {
  ar: { hreflang: 'ar', ogLocale: 'ar_AR' },
  be: { hreflang: 'be', ogLocale: 'be_BY' },
  de: { hreflang: 'de', ogLocale: 'de_DE' },
  en: { hreflang: 'en', ogLocale: 'en_US' },
  es: { hreflang: 'es', ogLocale: 'es_ES' },
  fr: { hreflang: 'fr', ogLocale: 'fr_FR' },
  it: { hreflang: 'it', ogLocale: 'it_IT' },
  jp: { hreflang: 'ja', ogLocale: 'ja_JP' },
  kk: { hreflang: 'kk', ogLocale: 'kk_KZ' },
  ko: { hreflang: 'ko', ogLocale: 'ko_KR' },
  pl: { hreflang: 'pl', ogLocale: 'pl_PL' },
  ru: { hreflang: 'ru', ogLocale: 'ru_RU' },
  uk: { hreflang: 'uk', ogLocale: 'uk_UA' },
  'zh-TW': { hreflang: 'zh-Hant', ogLocale: 'zh_TW' },
  zh: { hreflang: 'zh-Hans', ogLocale: 'zh_CN' },
}

function normalizeRelativePath(relativePath: string) {
  return relativePath.replaceAll('\\', '/')
}

function getLocalizedRelativePath(relativePath: string) {
  const normalizedPath = normalizeRelativePath(relativePath)
  const firstSegment = normalizedPath.split('/')[0]
  return locales.includes(firstSegment) ? normalizedPath.split('/').slice(1).join('/') : normalizedPath
}

function getPagePath(relativePath: string) {
  const normalizedPath = normalizeRelativePath(relativePath).replace(/\.md$/, '')
  if (normalizedPath === 'index') return '/'
  if (normalizedPath.endsWith('/index')) return `/${normalizedPath.slice(0, -6)}/`
  return `/${normalizedPath}`
}

function getLocalizedPagePath(locale: string, relativePath: string) {
  return getPagePath(`${locale}/${getLocalizedRelativePath(relativePath)}`)
}

function getLocale(relativePath: string) {
  const firstSegment = normalizeRelativePath(relativePath).split('/')[0]
  return locales.includes(firstSegment) ? firstSegment : 'en'
}

function getJsonLdScript(data: Record<string, unknown>): HeadConfig {
  return ['script', { type: 'application/ld+json' }, JSON.stringify(data).replace(/</g, '\\u003c')]
}

export default defineConfigWithTheme<DefaultTheme.Config>({
  title: "X Minecraft Launcher",
  srcDir: 'src',
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://xmcl.app',
  },
  description: 'X Minecraft Launcher official document.',
  transformHead({ pageData, title, description, head }) {
    const relativePath = normalizeRelativePath(pageData.relativePath)
    const locale = getLocale(relativePath)
    const localizedRelativePath = getLocalizedRelativePath(relativePath)
    const isRootPage = relativePath === 'index.md'
    const isHomePage = isRootPage || localizedRelativePath === 'index.md'
    const isArticle = relativePath.includes('/blog/posts/')
    const canonicalPath = isRootPage ? '/en/' : getPagePath(relativePath)
    const canonicalUrl = new URL(canonicalPath, siteUrl).href
    const imageUrl = new URL('/logo.svg', siteUrl).href
    const robots = pageData.isNotFound || pageData.frontmatter.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    const alternateHead: HeadConfig[] = []

    for (const alternateLocale of locales) {
      const alternateRelativePath = getLocalizedRelativePath(relativePath)
      if (!existsSync(join(src, alternateLocale, alternateRelativePath))) continue
      const alternatePath = getLocalizedPagePath(alternateLocale, relativePath)
      alternateHead.push([
        'link',
        {
          rel: 'alternate',
          hreflang: localeMetadata[alternateLocale]?.hreflang || alternateLocale,
          href: new URL(alternatePath, siteUrl).href,
        },
      ])
    }

    if (existsSync(join(src, 'en', localizedRelativePath))) {
      alternateHead.push([
        'link',
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: new URL(getLocalizedPagePath('en', relativePath), siteUrl).href,
        },
      ])
    }

    const structuredData = isHomePage
      ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            name: 'X Minecraft Launcher',
            url: siteUrl,
            inLanguage: localeMetadata[locale]?.hreflang || locale,
          },
          {
            '@type': 'SoftwareApplication',
            name: 'X Minecraft Launcher',
            alternateName: 'XMCL',
            description,
            url: canonicalUrl,
            image: imageUrl,
            applicationCategory: 'GameApplication',
            operatingSystem: 'Windows, macOS, Linux',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          },
        ],
      }
      : isArticle
        ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description,
          datePublished: pageData.frontmatter.date,
          author: {
            '@type': 'Organization',
            name: 'Voxelum',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
        }
        : undefined

    const seoHead: HeadConfig[] = [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ...alternateHead,
      ['meta', { name: 'author', content: 'Voxelum' }],
      ['meta', { name: 'robots', content: robots }],
      ['meta', { name: 'googlebot', content: robots }],
      ['meta', { name: 'theme-color', content: '#3b82f6' }],
      ['meta', { property: 'og:type', content: isArticle ? 'article' : 'website' }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: imageUrl }],
      ['meta', { property: 'og:site_name', content: 'X Minecraft Launcher' }],
      ['meta', { property: 'og:locale', content: localeMetadata[locale]?.ogLocale || locale }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:url', content: canonicalUrl }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: imageUrl }],
      ['meta', { name: 'twitter:site', content: '@xmcl' }],
      ['meta', { name: 'application-name', content: 'XMCL' }],
    ]

    if (isArticle && pageData.frontmatter.date) {
      seoHead.push(['meta', { property: 'article:published_time', content: String(pageData.frontmatter.date) }])
    }
    if (structuredData) seoHead.push(getJsonLdScript(structuredData))

    return [...head, ...seoHead]
  },
  vite: {
    publicDir: resolve(__dirname, '../public'),
    plugins: [
      imagetools(),
      Unocss({
        configFile: resolve(__dirname, '../uno.config.ts'),
        safelist: ['text-[rgb(208,208,208)]', 'text-green-400', 'text-yellow-300', 'text-sky-400', 'text-[rgb(61,239,233)]', 'text-[rgb(107,217,104)]', 'text-amber-600', 'text-emerald-700', 'text-red-700', 'i-simple-icons:flathub'],
      }),
      // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        ssr: true,
        strictMessage: false,
        fullInstall: true,
        include: [resolve(__dirname, '../locales/**')],
      }),
    ],
    optimizeDeps: {
      exclude: ['svg'],
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  locales: localeConfig,
})
