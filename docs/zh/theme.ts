import { DefaultTheme, LocaleConfig } from 'vitepress'
import svg from '../../public/globe.txt'
import { readdirSync } from 'fs';
import { join } from 'path';

const files = readdirSync(join(__dirname, './changelogs')).filter(f => f.endsWith('.md') && !f.startsWith('index')).map(f => f.slice(0, -3)).reverse()

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
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/voxelum/x-minecraft-launcher' },
            { icon: 'discord', link: 'https://discord.gg/W5XVwYY7GQ' },
            { icon: { svg }, link: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://xmcl.app' }
        ],
        nav: [
            { text: '指南', link: '/zh/guide/install', activeMatch: '/zh/guide/(.+)?' },
            { text: '核心 API 文档 (英文)', link: '/en/core/' },
            { text: '更新日志', link: `/zh/changelogs/${files[0]}`, activeMatch: '/zh/changelogs/(.+)?' },
        ],
        sidebar: {
            '/zh/changelogs/': [{
                text: '更新日志',
                items: files.map(f => ({ text: f, link: `/zh/changelogs/${f}` }))
            }],
            '/zh/': [
                {
                    text: '指南',
                    items: [
                        { text: '安装指南', link: '/zh/guide/install' },
                        { text: '更新指南', link: '/zh/guide/update' },
                        { text: '数据管理指南', link: '/zh/guide/manage' },
                        { text: '外观指南', link: '/zh/guide/appearance' },
                        { text: '联机指南', link: '/zh/guide/p2p' },
                        { text: 'AppX 迁移指南', link: '/zh/guide/appx-migrate' },
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
                },
            ],
        },
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
