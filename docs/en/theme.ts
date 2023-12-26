import { DefaultTheme, LocaleConfig } from 'vitepress'
import coreSidebar from './core/sidebar.json'
import svg from '../../public/globe.txt'

for (const bar of coreSidebar) {
    bar.link = '/en/core/' + bar.link
    for (let i of bar.items) {
        i.link = '/en/core/' + i.link
    }
}

const theme: LocaleConfig<DefaultTheme.Config>[string] = {
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
            { icon: 'discord', link: 'https://discord.gg/W5XVwYY7GQ' },
            { icon: { svg }, link: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://xmcl.app' }
        ],
        outline: {
            label: '📚 On this page',
            level: [2, 3],
        },
        nav: [
            { text: 'Guide', link: '/en/' },
            { text: 'Core API Document', link: '/en/core/' },
            { text: 'Blogs', link: '/en/blog/' },
        ],
        sidebar: {
            '/en/core/': coreSidebar,
            '/en/blog/': [],
            '/en/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Installation Guide', link: '/en/guide/install' },
                        { text: 'Upgrade Guide', link: '/en/guide/update' },
                        { text: 'Data Managment', link: '/en/guide/manage' },
                        { text: 'Appearance Guide', link: '/en/guide/appearance' },
                        { text: 'Multiplayer Guide', link: '/en/guide/p2p' },
                        { text: 'I18n Guide', link: '/en/guide/i18n' },
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
            ]
        },
        blog: {
            title: 'The Blogs',
            description: 'Write something about the X Minecraft Launcher journey.',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present CI010'
        },
        editLink: {
            pattern: 'https://github.com/voxelum/xmcl-page/edit/main/docs/:path'
        },
        search: {
            provider: 'local'
        },
    },
}

export default theme;
