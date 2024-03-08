import { existsSync, readFileSync, readdirSync } from "fs";
import { join } from "path";
import { DefaultTheme, LocaleConfig } from "vitepress";
import { parse } from 'yaml';

export function loadSidebarSection(location: string, locale: string, type: string) {
    try {
        const files = readdirSync(join(location, type))
        const items = files.map(f => {
            const content = readFileSync(join(location, type, f), 'utf-8').trim()
            const lines = content.split('\n').filter(v => !!v)
            const title = lines[0].startsWith('#') ? lines[0].slice(1).trim() : ''
            if (title) {
                return {
                    text: title,
                    link: `/${locale}/${type}/${f}`,
                }
            }
        }).filter((v): v is { text: string; link: string } => !!v)
        return items
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

    const guideSection = loadSidebarSection(location, locale, 'guide')
    const protocolSection = loadSidebarSection(location, locale, 'protocol')
    const changelogFiles = getChangelogsFiles(location)

    const commonSidebar: DefaultTheme.SidebarItem[] = []
    if (guideSection.length > 0) {
        commonSidebar.push({
            text: '🧭 ' + localeMessages.guide,
            items: guideSection
        })
        sidebar[`/${locale}/guide/`] = commonSidebar
    }
    if (protocolSection.length > 0) {
        commonSidebar.push({
            text: '🤝 ' + localeMessages.protocol,
            items: protocolSection
        })
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
    if (locale === 'en') {
        nav.push(
            { text: '🪁 Blogs', link: '/en/blog/', activeMatch: '/en/blog/(.+)?' },
        )
    }
    const theme: LocaleConfig<DefaultTheme.Config>[string] = {
        label: localeMessages.label,
        lang: locale,
        head: [
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
                pattern: 'https://github.com/voxelum/xmcl-page/edit/main/docs/:path'
            }
        }
    }
    return theme
}
