import { DefaultTheme, LocaleConfig } from 'vitepress'

const theme: LocaleConfig<DefaultTheme.Config>[string] = {
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
            label: '📚 本页包含了',
            level: [2, 3],
        },
        docFooter: {
            prev: "上一篇",
            next: "下一篇"
        },
        lastUpdatedText: "上次更新",
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

export default theme;
