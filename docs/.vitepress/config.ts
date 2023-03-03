import { resolve } from 'path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "X Minecraft Launcher",
  lang: 'zh-CN',
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
  vite: {
    publicDir: resolve(__dirname, '../../public')
  },
  // shared properties and other top-level stuff...
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '官方网站', link: 'https://xmcl.app' },
          { text: 'Github', link: 'https://github.com/voxelum/x-minecraft-launcher' },
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '安装指南', link: '/zh/guide/install' },
              { text: '更新指南', link: '/zh/guide/update' },
              { text: '数据管理指南', link: '/zh/guide/manage' },
              { text: '外观指南', link: '/zh/guide/appearance' },
              { text: 'XMCL 第三方 app 指南', link: '/zh/guide/app' },
              { text: '常见问题', link: '/zh/faq/' },
            ]
          },
          {
            text: '协议',
            items: [
              { text: 'P2P 联机协议', link: '/zh/protocol/p2p' },
              { text: '实例数据格式', link: '/zh/protocol/instance' },
              { text: '全局设置数据格式', link: '/zh/protocol/instance' },
            ]
          }
        ],
        outline: {
          label: '📚 本页包含了'
        },
        footer: {
          message: '本文档遵循 MIT 协议.',
          copyright: 'Copyright © 2022-present CI010'
        },
        editLink: {
          text: "编辑这个页面",
          pattern: 'https://github.com/voxelum/xmcl-page/edit/main/docs/:path'
        }
      }
    }
  },
  themeConfig: {
    i18nRouting: true,
  },
  transformHead(context) {
    console.log(context.pageData.frontmatter)
    return context.head
  },
})
