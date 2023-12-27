import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import en from '../en/theme'
import zh from '../zh/theme'
import Unocss from 'unocss/vite'

export default defineConfig({
  title: "X Minecraft Launcher",
  lastUpdated: true,
  cleanUrls: true,
  description: 'X Minecraft Launcher official document.',
  head: [
    [
      'keywords',
      {
        name: 'keywords',
        content: 'minecraft,launcher,xmcl,docs,document'
      }
    ],
  ],
  vite: {
    publicDir: resolve(__dirname, '../../public'),
    plugins: [
      Unocss({
        configFile: '../unocss.config.ts',
      }),
    ],
    optimizeDeps: {
      exclude: ['svg'],
    },
  },
  head: [
    [
      'link',
      {
        rel: "stylesheet",
        crossorigin: "anonymous",
        href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.6/dist/components/list.min.css",
      }
    ],
    [
      'link',
      {
        rel: "stylesheet",
        crossorigin: "anonymous",
        href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.6/dist/components/table.min.css",
      }
    ],
    [
      "link",
      {
        ref: "stylesheet",
        crossorigin: "anonymous",
        href: "/menu.min.css"
      }
    ],
    [
      "link",
      {
        ref: "stylesheet",
        crossorigin: "anonymous",
        href: "/container.min.css"
      }
    ],
    [
      "link",
      {
        ref: "stylesheet",
        crossorigin: "anonymous",
        href: "/icon.min.css"
      }
    ],
    [
      "link",
      {
        ref: "stylesheet",
        crossorigin: "anonymous",
        href: "/label.min.css"
      }
    ],
    [
      "link",
      {
        ref: "stylesheet",
        crossorigin: "anonymous",
        href: "/button.min.css"
      }
    ],
    [
      "link",
      {
        ref: "stylesheet",
        crossorigin: "anonymous",
        href: "/loader.min.css"
      }
    ],
    [
      "link",
      {
        ref: "stylesheet",
        crossorigin: "anonymous",
        href: "/transition.min.css"
      }
    ],
  ],
  // shared properties and other top-level stuff...
  locales: {
    en,
    zh,
  },
  themeConfig: {
    i18nRouting: true,
    search: {
      provider: 'local'
    },
  },
})
