import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { readdirSync } from 'fs'
import { join, resolve } from 'path'
import Unocss from 'unocss/vite'
import { LocaleConfig, defineConfigWithTheme } from 'vitepress'
import { DefaultTheme } from 'vitepress/theme'
import { loadTheme } from './themeHelper'

const src = resolve(__dirname, '../src')
const files = readdirSync(src)
const locales = files.filter(f => f !== 'assets' && !f.endsWith('.md'))
const localeConfig: LocaleConfig<DefaultTheme.Config> = {}
for (const locale of locales) {
  localeConfig[locale] = loadTheme(resolve(src, locale), locale)
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
  vite: {
    publicDir: resolve(__dirname, '../public'),
    plugins: [
      Unocss({
        configFile: resolve(__dirname, '../unocss.config.ts'),
        safelist: ['text-[rgb(208,208,208)]', 'text-green-400', 'text-yellow-300', 'text-sky-400', 'text-[rgb(61,239,233)]', 'text-[rgb(107,217,104)]', 'text-amber-600', 'text-emerald-700', 'text-red-700'],
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
  // shared properties and other top-level stuff...
  locales: localeConfig,
})
