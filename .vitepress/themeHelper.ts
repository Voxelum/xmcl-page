import { existsSync, readFileSync, readdirSync } from "fs";
import { join } from "path";
import { DefaultTheme, LocaleConfig } from "vitepress";
import { parse } from 'yaml';

export function loadSidebarSection(location: string, locale: string, type: string) {
    try {
        const files = readdirSync(join(location, type)).filter(f => f.endsWith('.md') && f !== 'index.md')
        const items = files.map(f => {
            const content = readFileSync(join(location, type, f), 'utf-8').trim()
            const lines = content.split('\n').filter(v => !!v)
            const title = lines[0].startsWith('#') ? lines[0].slice(1).trim() : ''
            if (title) {
                return {
                    text: title,
                    link: `/${locale}/${type}/${f.slice(0, -3)}`,
                }
            }
        }).filter((v): v is { text: string; link: string } => !!v)
        return items
    } catch {
        return []
    }
}

const GUIDE_GROUPS = [
    { key: 'guide_getting_started', fallback: 'Getting Started', icon: '🚀 ' },
    { key: 'guide_features_customization', fallback: 'Features & Customization', icon: '🎨 ' },
    { key: 'guide_multiplayer', fallback: 'Multiplayer & Online', icon: '🌐 ' },
    { key: 'guide_advanced', fallback: 'Data & Advanced', icon: '⚙️ ' },
    { key: 'guide_troubleshooting', fallback: 'Troubleshooting & Support', icon: '🔧 ' },
]

const GUIDE_FILE_TO_GROUP: Record<string, string> = {
    'install': 'guide_getting_started',
    'update': 'guide_getting_started',
    'appx-migrate': 'guide_getting_started',
    'demo-minecraft': 'guide_getting_started',
    'appearance': 'guide_features_customization',
    'modloader': 'guide_features_customization',
    'custom-skins': 'guide_features_customization',
    'p2p': 'guide_multiplayer',
    'manage': 'guide_advanced',
    'agnes-ai-setup': 'guide_advanced',
    'i18n': 'guide_advanced',
    'microsoft-login-issues': 'guide_troubleshooting',
    'troubleshooting': 'guide_troubleshooting',
    'contributing': 'guide_troubleshooting',
}

const GUIDE_FILE_ORDER = [
    'install',
    'update',
    'appx-migrate',
    'demo-minecraft',
    'appearance',
    'modloader',
    'custom-skins',
    'p2p',
    'manage',
    'agnes-ai-setup',
    'i18n',
    'microsoft-login-issues',
    'troubleshooting',
    'contributing',
]

export function loadGuideSidebar(location: string, locale: string, localeMessages: any) {
    try {
        const type = 'guide'
        const dirPath = join(location, type)
        if (!existsSync(dirPath)) return []

        const files = readdirSync(dirPath).filter(f => f.endsWith('.md') && f !== 'index.md')
        
        const groups: Record<string, { text: string; items: { text: string; link: string; base: string }[] }> = {}
        for (const g of GUIDE_GROUPS) {
            const title = (localeMessages[g.key] || g.fallback)
            groups[g.key] = {
                text: g.icon + title,
                items: []
            }
        }

        for (const f of files) {
            const content = readFileSync(join(dirPath, f), 'utf-8').trim()
            const lines = content.split('\n').filter(v => !!v)
            const title = lines[0].startsWith('#') ? lines[0].slice(1).trim() : ''
            if (title) {
                const base = f.slice(0, -3)
                const groupKey = GUIDE_FILE_TO_GROUP[base] || 'guide_troubleshooting'
                const link = `/${locale}/${type}/${base}`
                groups[groupKey].items.push({ text: title, link, base })
            }
        }

        const sidebarItems: DefaultTheme.SidebarItem[] = []
        for (const g of GUIDE_GROUPS) {
            const group = groups[g.key]
            if (group.items.length > 0) {
                group.items.sort((a, b) => {
                    const idxA = GUIDE_FILE_ORDER.indexOf(a.base)
                    const idxB = GUIDE_FILE_ORDER.indexOf(b.base)
                    if (idxA === -1 && idxB === -1) return a.base.localeCompare(b.base)
                    if (idxA === -1) return 1
                    if (idxB === -1) return -1
                    return idxA - idxB
                })

                sidebarItems.push({
                    text: group.text,
                    items: group.items.map(item => ({ text: item.text, link: item.link })),
                    collapsed: false
                })
            }
        }

        return sidebarItems
    } catch {
        return []
    }
}

function getChangelogsFiles(location: string) {
    try {
        return readdirSync(join(location, './changelogs')).filter(f => f.endsWith('.md') && !f.startsWith('index')).map(f => f.slice(0, -3)).reverse()
    } catch {
        return []
    }
}

export function loadTheme(location: string, locale: string) {
    const localeFile = join(__dirname, '..', 'locales', locale + '.yml')
    const localeMessages = parse(readFileSync(localeFile, 'utf-8'))

    const sidebar: DefaultTheme.SidebarMulti = {
    }

    const coreSidebarPath = join(location, 'core', 'sidebar.json')
    if (existsSync(coreSidebarPath)) {
        const coreSidebar = JSON.parse(readFileSync(coreSidebarPath, 'utf-8')) as DefaultTheme.SidebarItem[]
        if (coreSidebar) {
            for (const bar of coreSidebar) {
                bar.link = '/en/core/' + bar.link
                for (let i of bar.items!) {
                    i.link = '/en/core/' + i.link
                }
            }
            sidebar[`/en/core/`] = coreSidebar
        }
    }

    const nav: DefaultTheme.NavItem[] = [
        { text: '🧭 ' + localeMessages.guide, link: `/${locale}/guide/install`, activeMatch: `/${locale}/guide/(.+)?` },
        { text: '📖 ' + localeMessages.coreDocument, link: '/en/core/' },
    ]

    const guideSection = loadGuideSidebar(location, locale, localeMessages)
    const protocolSection = loadSidebarSection(location, locale, 'protocol')
    const changelogFiles = getChangelogsFiles(location)

    const commonSidebar: DefaultTheme.SidebarItem[] = []
    if (guideSection.length > 0) {
        commonSidebar.push(...guideSection)
    }
    if (protocolSection.length > 0) {
        commonSidebar.push({
            text: '🤝 ' + localeMessages.protocol,
            items: protocolSection,
            collapsed: false
        })
    }
    
    if (commonSidebar.length > 0) {
        sidebar[`/${locale}/guide/`] = commonSidebar
        sidebar[`/${locale}/protocol/`] = commonSidebar
    }
    if (changelogFiles.length > 0) {
        const changelogsSidebar = [
            {
                text: '📜 ' + localeMessages.changelogs,
                items: changelogFiles.map(f => ({ text: f, link: `/${locale}/changelogs/${f}` }))
            }
        ]
        sidebar[`/${locale}/changelogs/`] = changelogsSidebar
        nav.push({ text: '📜 ' + localeMessages.changelogs, link: `/${locale}/changelogs/${changelogFiles[0]}`, activeMatch: `/${locale}/changelogs/(.+)?` })
    }
    if (existsSync(join(location, 'blog'))) {
        nav.push(
            { text: '🪁 ' + (localeMessages.blogs || 'Blogs'), link: `/${locale}/blog/`, activeMatch: `/${locale}/blog/(.+)?` },
        )
    }
    const theme: LocaleConfig<DefaultTheme.Config>[string] = {
        label: localeMessages.label,
        lang: locale,
        dir: locale === 'ar' ? 'rtl' : 'ltr',
        head: [
            ['meta', { property: 'og:type', content: 'website' }],
            ['meta', { property: 'og:site_name', content: 'X Minecraft Launcher' }],
            ['meta', { property: 'og:locale', content: locale }],
            ['meta', { property: 'og:image', content: 'https://xmcl.app/favicon.svg' }],
            ['meta', { property: 'og:url', content: 'https://xmcl.app/' + locale + '/' }],
        ],
        themeConfig: {
            logo: { src: '/logo.svg', alt: 'X Minecraft Launcher', width: '24', height: '24' },
            logoLink: `/${locale}/`,
            search: {
                provider: 'local',
                options: {
                    translations: localeMessages.search,
                }
            },
            socialLinks: [
                { icon: 'github', link: 'https://github.com/voxelum/x-minecraft-launcher' },
                { icon: 'discord', link: 'https://discord.gg/W5XVwYY7GQ' },
            ],
            nav,
            sidebar,
            outline: {
                label: '📚 ' + localeMessages.outline,
                level: [2, 3],
            },
            darkModeSwitchLabel: localeMessages.darkModeSwitchLabel,
            darkModeSwitchTitle: localeMessages.darkModeSwitchTitle,
            lightModeSwitchTitle: localeMessages.lightModeSwitchTitle,
            sidebarMenuLabel: localeMessages.sidebarMenuLabel,
            returnToTopLabel: localeMessages.returnToTopLabel,
            langMenuLabel: localeMessages.langMenuLabel,
            docFooter: localeMessages.docFooter,
            lastUpdatedText: localeMessages.lastUpdatedText,
            footer: {
                message: localeMessages.footer,
                copyright: `Copyright © 2022-${new Date().getFullYear()} CI010`
            },
            editLink: {
                text: localeMessages.editLink,
                pattern: 'https://github.com/voxelum/xmcl-page/edit/master/src/:path'
            }
        }
    }
    return theme
}
