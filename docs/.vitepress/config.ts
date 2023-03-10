import { resolve } from 'path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "X Minecraft Launcher",
  vite: {
    publicDir: resolve(__dirname, '../../public')
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
    en: {
      label: 'English',
      lang: 'en-US',
      head: [
        [
          'description',
          {
            name: 'description',
            content: 'X Minecraft Launcher official document.'
          },
        ],
        [
          'keywords',
          {
            name: 'keywords',
            content: 'X Minecraft Launcher document,xmcl,docs'
          }
        ]
      ],
      themeConfig: {
        socialLinks: [
          { icon: 'github', link: 'https://github.com/voxelum/x-minecraft-launcher' },
          { icon: 'discord', link: 'https://discord.gg/W5XVwYY7GQ' }
        ],
        nav: [
          { text: 'Official Site', link: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://xmcl.app' },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Installation Guide', link: '/en/guide/install' },
              { text: 'Upgrade Guide', link: '/en/guide/update' },
              { text: 'Data Managment', link: '/en/guide/manage' },
              { text: 'Appearance Guide', link: '/en/guide/appearance' },
              { text: 'Multiplayer Guide', link: '/en/guide/p2p' },
              { text: 'FAQ', link: '/en/faq/' },
            ]
          },
          {
            text: 'Protocol',
            items: [
              { text: 'P2P Protocol', link: '/en/protocol/p2p' },
              { text: 'Instance Data Schema', link: '/en/protocol/instance' },
              { text: 'Global Setting Schema', link: '/en/protocol/setting' },
              { text: 'User Data Schema', link: '/en/protocol/user' },
            ]
          }
        ],
        footer: {
          message: '本文档遵循 MIT 协议.',
          copyright: 'Copyright © 2022-present CI010'
        },
        editLink: {
          pattern: 'https://github.com/voxelum/xmcl-page/edit/main/docs/:path'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      head: [
        [
          'description',
          {
            name: 'description',
            content: 'X Minecraft Launcher 官方文档'
          },
        ],
        [
          'keywords',
          {
            name: 'keywords',
            content: 'X Minecraft Launcher 文档,xmcl,文档'
          }
        ]
      ],
      themeConfig: {
        socialLinks: [
          { icon: 'github', link: 'https://github.com/voxelum/x-minecraft-launcher' },
          { icon: 'discord', link: 'https://discord.gg/W5XVwYY7GQ' }
        ],
        nav: [
          { text: '官方网站', link: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://xmcl.app' },
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '安装指南', link: '/zh/guide/install' },
              { text: '更新指南', link: '/zh/guide/update' },
              { text: '数据管理指南', link: '/zh/guide/manage' },
              { text: '外观指南', link: '/zh/guide/appearance' },
              { text: '联机指南', link: '/zh/guide/p2p' },
              { text: '常见问题', link: '/zh/faq/' },
            ]
          },
          {
            text: '协议',
            items: [
              { text: 'P2P 联机协议', link: '/zh/protocol/p2p' },
              { text: '实例数据格式', link: '/zh/protocol/instance' },
              { text: '全局设置数据格式', link: '/zh/protocol/setting' },
              { text: '用户数据格式', link: '/zh/protocol/user' },
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
})
