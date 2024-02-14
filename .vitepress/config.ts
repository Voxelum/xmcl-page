import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { defineConfigWithTheme } from 'vitepress'
import { DefaultTheme } from 'vitepress/theme'
import en from '../src/en/theme'
import fr from '../src/fr/theme'
import zh from '../src/zh/theme'
import de from '../src/de/theme'
import ru from '../src/ru/theme'
import uk from '../src/uk/theme'

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
  ],
  // shared properties and other top-level stuff...
  locales: {
    en,
    zh,
    fr,
    de,
    ru,
    uk,
  },
})
