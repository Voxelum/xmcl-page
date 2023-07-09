import { DefaultTheme, LocaleConfig } from 'vitepress'
import svg from '../../public/globe.txt'

const theme: LocaleConfig<DefaultTheme.Config>[string] = {
    label: 'Français',
    lang: 'fr-FR',
    head: [
        [
            'description',
            {
                name: 'description',
                content: 'Documentation officielle de X Minecraft Launcher'
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
            { text: 'Guide', link: '/fr/' },
            { text: 'Documentation Core API', link: '/en/core/' },
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Guide d\'Installation', link: '/fr/guide/install' },
                    { text: 'Guide de Mise à Jour', link: '/fr/guide/update' },
                    { text: 'Gestion des Données', link: '/fr/guide/manage' },
                    { text: 'Guide d\'Apparence', link: '/fr/guide/appearance' },
                    { text: 'Guide Multijoueur', link: '/fr/guide/p2p' },
                    { text: 'FAQ', link: '/fr/faq/' },
                ]
            },
            {
                text: 'Protocole',
                items: [
                    { text: 'Protocole P2P', link: '/fr/protocol/p2p' },
                    { text: 'Données d\'Instances', link: '/fr/protocol/instance' },
                    { text: 'Paramètres Globaux', link: '/fr/protocol/setting' },
                    { text: 'Données d\'Utilisateur', link: '/fr/protocol/user' },
                ]
            }
        ],
        outline: {
            label: '📚 Dans cette page',
            level: [2, 3],
        },
        docFooter: {
            prev: "Précédent",
            next: "Suivant"
        },
        lastUpdatedText: "上次更新",
        footer: {
            message: 'Publié sous la licence MIT.',
            copyright: 'Copyright © 2022-present CI010'
        },
        editLink: {
            text: "Modifier la page",
            pattern: 'https://github.com/voxelum/xmcl-page/edit/main/docs/:path'
        }
    }
}

export default theme;
