import { existsSync, readFileSync, readdirSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { DefaultTheme, LocaleConfig } from "vitepress";
import { parse } from 'yaml';
import { ensureGuideFallbacks } from "./guideFallbacks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

export function loadSidebarSection(location: string, locale: string, type: string) {
    try {
        const files = readdirSync(join(location, type))
        const items = files.filter(f => f.endsWith('.md') && f !== 'index.md').map(f => {
            const content = readFileSync(join(location, type, f), 'utf-8').trim()
            const lines = content.split(/\r?\n/).filter(v => !!v)
            let title = ''
            let inFrontmatter = false
            for (const line of lines) {
                const trimmed = line.trim()
                if (trimmed === '---') {
                    inFrontmatter = !inFrontmatter
                    continue
                }
                if (!inFrontmatter && trimmed.startsWith('#')) {
                    title = trimmed.replace(/^#+\s*/, '')
                    break
                }
            }
            if (title) {
                return {
                    file: f,
                    text: title,
                    link: `/${locale}/${type}/${f}`,
                }
            }
        }).filter((v): v is { file: string; text: string; link: string } => !!v)
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

function loadCorePackages(): DefaultTheme.SidebarItem[] {
    const coreSidebarPath = resolve(projectRoot, 'src', 'en', 'core', 'sidebar.json')
    if (!existsSync(coreSidebarPath)) {
        return []
    }
    try {
        const coreSidebar = JSON.parse(readFileSync(coreSidebarPath, 'utf-8')) as DefaultTheme.SidebarItem[]
        if (coreSidebar && Array.isArray(coreSidebar)) {
            return coreSidebar.map(bar => {
                const barLink = bar.link ? (bar.link.startsWith('/') ? bar.link : '/en/core/' + bar.link) : undefined
                const items = (bar.items || []).map(i => ({
                    text: i.text,
                    link: i.link ? (i.link.startsWith('/') ? i.link : '/en/core/' + i.link) : undefined
                }))
                return {
                    text: bar.text,
                    link: barLink,
                    collapsed: true,
                    items
                }
            })
        }
    } catch {
        return []
    }
    return []
}

export function loadTheme(location: string, locale: string) {
    ensureGuideFallbacks();
    const localeFile = resolve(projectRoot, 'locales', locale + '.yml')
    const localeMessages = parse(readFileSync(localeFile, 'utf-8'))
    const sidebar: DefaultTheme.SidebarMulti = {}

    const nav: DefaultTheme.NavItem[] = [
        {
            text: localeMessages.documentation || 'Documentation',
            link: `/${locale}/guide/`,
            activeMatch: '^/(?:[a-zA-Z-]+/)?(?:guide|core|protocol)/'
        },
    ]
    nav.splice(1, 0, { text: localeMessages.features?.label || 'Features', link: `/${locale}/features/`, activeMatch: `/${locale}/features/(.+)?` })

    const guideSection = loadSidebarSection(location, locale, 'guide')
    const protocolSection = loadSidebarSection(location, locale, 'protocol')
    const changelogFiles = getChangelogsFiles(location)
    const corePackages = loadCorePackages()

    const gettingStartedFiles = [
        'install.md',
        'update.md',
        'offline-mode.md',
        'microsoft-login-issues.md',
        'change-drive.md',
        'appx-migrate.md',
    ]

    const gameAndModsFiles = [
        'manage.md',
        'modloader.md',
        'appearance.md',
        'big-picture.md',
        'custom-skins.md',
        'agnes-ai-setup.md',
        'bedrock.md',
    ]

    const multiplayerFiles = [
        'together.md',
        'p2p.md',
        'troubleshooting.md',
    ]

    const coreAndDevFiles = [
        'contributing.md',
    ]

    const guideShortTitles: Record<string, Record<string, string>> = {
        uk: {
            'install.md': 'Встановлення',
            'update.md': 'Оновлення',
            'offline-mode.md': 'Офлайн-режим',
            'microsoft-login-issues.md': 'Вхід Microsoft',
            'change-drive.md': 'Зміна диска',
            'appx-migrate.md': 'Міграція AppX',
            'manage.md': 'Керування сховищем',
            'modloader.md': 'Завантажувачі модів',
            'appearance.md': 'Оформлення та CSS',
            'big-picture.md': 'Режим Big Picture та геймпади',
            'custom-skins.md': 'Кастомні скіни',
            'agnes-ai-setup.md': 'Штучний інтелект (AI Agent)',
            'bedrock.md': 'Bedrock Edition',
            'together.md': 'XMCL Together',
            'p2p.md': 'Мережа P2P (LAN)',
            'troubleshooting.md': 'Діагностика та збої',
            'crash-logs.md': 'Аналіз краш-логів та коди помилок',
            'diagnostic-report.md': 'Діагностичний звіт (.zip) та приватність',
            'contributing.md': 'Участь у розробці',
        },
        en: {
            'install.md': 'Installation',
            'update.md': 'Updates',
            'offline-mode.md': 'Offline Mode',
            'microsoft-login-issues.md': 'Microsoft Login',
            'change-drive.md': 'Change Drive',
            'appx-migrate.md': 'AppX Migration',
            'manage.md': 'Storage & Instances',
            'modloader.md': 'Modloaders',
            'appearance.md': 'Appearance & CSS',
            'big-picture.md': 'Big Picture & Gamepads',
            'custom-skins.md': 'Custom Skins',
            'agnes-ai-setup.md': 'AI Assistant Setup',
            'bedrock.md': 'Bedrock Edition',
            'together.md': 'XMCL Together',
            'p2p.md': 'P2P LAN Multiplayer',
            'troubleshooting.md': 'Crash Diagnostics & Logs',
            'crash-logs.md': 'Crash Logs & Exit Codes',
            'diagnostic-report.md': 'Diagnostic Report (.zip) & Privacy',
            'contributing.md': 'Contributing Guide',
        },
        ru: {
            'install.md': 'Установка',
            'update.md': 'Обновления',
            'offline-mode.md': 'Офлайн-режим',
            'microsoft-login-issues.md': 'Вход Microsoft',
            'change-drive.md': 'Смена диска',
            'appx-migrate.md': 'Миграция AppX',
            'manage.md': 'Управление хранилищем',
            'modloader.md': 'Загрузчики модов',
            'appearance.md': 'Оформление и CSS',
            'big-picture.md': 'Режим Big Picture и геймпады',
            'custom-skins.md': 'Кастомные скины',
            'agnes-ai-setup.md': 'Искусственный интеллект (AI Agent)',
            'bedrock.md': 'Bedrock Edition',
            'together.md': 'XMCL Together',
            'p2p.md': 'Сеть P2P (LAN)',
            'troubleshooting.md': 'Диагностика и сбои',
            'crash-logs.md': 'Анализ краш-логов и коды ошибок',
            'diagnostic-report.md': 'Диагностический отчет (.zip) и приватность',
            'contributing.md': 'Участие в разработке',
        },
    }

    const guideMap = new Map(guideSection.map(item => [item.file, item]))

    const resolveItemTitle = (file: string) => {
        if (guideShortTitles[locale]?.[file]) {
            return guideShortTitles[locale][file]
        }
        const item = guideMap.get(file)
        if (item && item.text) {
            return item.text
        }
        if (locale === 'ru' && guideShortTitles.uk?.[file]) {
            return guideShortTitles.uk[file]
        }
        return guideShortTitles.en?.[file] || file.replace(/\.md$/, '')
    }

    const gettingStartedItems: DefaultTheme.SidebarItem[] = gettingStartedFiles.map(f => ({
        text: resolveItemTitle(f),
        link: `/${locale}/guide/${f}`
    }))

    const gameAndModsItems: DefaultTheme.SidebarItem[] = []
    for (const f of gameAndModsFiles) {
        if (f === 'agnes-ai-setup.md') {
            const aiText = locale === 'uk' ? 'Штучний інтелект (AI)' : (locale === 'ru' ? 'Искусственный интеллект (AI)' : 'AI Assistant (Models)')
            const agnesText = locale === 'uk' ? 'Agnes AI (Вбудована)' : (locale === 'ru' ? 'Agnes AI (Встроенная)' : 'Agnes AI (Built-in)')
            const cloudText = locale === 'uk' ? 'Хмарні моделі (Gemini, GPT)' : (locale === 'ru' ? 'Облачные модели (Gemini, GPT)' : 'Cloud Models (Gemini, GPT)')
            const localText = locale === 'uk' ? 'Локальні моделі (Ollama, LM)' : (locale === 'ru' ? 'Локальные модели (Ollama, LM)' : 'Local Models (Ollama, LM)')

            gameAndModsItems.push({
                text: aiText,
                collapsed: false,
                items: [
                    {
                        text: agnesText,
                        link: `/${locale}/guide/agnes-ai-setup`
                    },
                    {
                        text: cloudText,
                        link: `/${locale}/guide/ai-cloud-models`
                    },
                    {
                        text: localText,
                        link: `/${locale}/guide/ai-local-models`
                    },
                ]
            })
        } else {
            gameAndModsItems.push({
                text: resolveItemTitle(f),
                link: `/${locale}/guide/${f}`
            })
        }
    }

    const multiplayerItems: DefaultTheme.SidebarItem[] = []
    for (const f of multiplayerFiles) {
        if (f === 'troubleshooting.md') {
            const diagGroupTitle = locale === 'uk' ? 'Діагностика збоїв' : (locale === 'ru' ? 'Диагностика сбоев' : 'Crash Diagnostics')
            const fixTitle = locale === 'uk' ? 'Вирішення збоїв запуску' : (locale === 'ru' ? 'Устранение сбоев запуска' : 'Crash Troubleshooting')
            const logsTitle = locale === 'uk' ? 'Журнали та коди виходу' : (locale === 'ru' ? 'Журналы и коды ошибок' : 'Logs & Exit Codes')
            const reportTitle = locale === 'uk' ? 'Звіт (.zip) та приватність' : (locale === 'ru' ? 'Отчет (.zip) и приватность' : 'Diagnostic Report (.zip)')

            multiplayerItems.push({
                text: diagGroupTitle,
                collapsed: false,
                items: [
                    {
                        text: fixTitle,
                        link: `/${locale}/guide/troubleshooting`
                    },
                    {
                        text: logsTitle,
                        link: `/${locale}/guide/crash-logs`
                    },
                    {
                        text: reportTitle,
                        link: `/${locale}/guide/diagnostic-report`
                    },
                ]
            })
        } else {
            multiplayerItems.push({
                text: resolveItemTitle(f),
                link: `/${locale}/guide/${f}`
            })
        }
    }

    const coreAndDevItems: DefaultTheme.SidebarItem[] = [
        { text: (localeMessages.coreDocument || 'Core Document') + ' (Overview)', link: '/en/core/' }
    ]
    if (protocolSection.length > 0) {
        coreAndDevItems.push({ text: localeMessages.protocol || 'Protocol (P2P)', link: `/${locale}/protocol/p2p` })
    }
    for (const f of coreAndDevFiles) {
        coreAndDevItems.push({
            text: resolveItemTitle(f),
            link: `/${locale}/guide/${f}`
        })
    }

    if (corePackages.length > 0) {
        coreAndDevItems.push({
            text: locale === 'uk' ? 'Модулі ядра (@xmcl/*)' : (locale === 'ru' ? 'Модули ядра (@xmcl/*)' : 'Core Packages (@xmcl/*)'),
            collapsed: true,
            items: corePackages
        })
    }

    const docGroups = localeMessages.docGroups || {}
    const hubLabel = locale === 'uk' ? 'Центр документації' : (locale === 'ru' ? 'Центр документации' : (localeMessages.documentation || 'Documentation Hub'))
    const commonSidebar: DefaultTheme.SidebarItem[] = [
        {
            text: hubLabel,
            link: `/${locale}/guide/`
        }
    ]

    if (gettingStartedItems.length > 0) {
        commonSidebar.push({
            text: docGroups.gettingStarted || '01 / Getting Started',
            collapsed: false,
            items: gettingStartedItems
        })
    }
    if (gameAndModsItems.length > 0) {
        commonSidebar.push({
            text: docGroups.gameAndMods || '02 / Game & Mods',
            collapsed: false,
            items: gameAndModsItems
        })
    }
    if (multiplayerItems.length > 0) {
        commonSidebar.push({
            text: docGroups.multiplayerAndTroubleshooting || '03 / Multiplayer & Diagnostics',
            collapsed: false,
            items: multiplayerItems
        })
    }
    if (coreAndDevItems.length > 0) {
        commonSidebar.push({
            text: docGroups.coreAndDev || '04 / Architecture & Core',
            collapsed: false,
            items: coreAndDevItems
        })
    }

    if (commonSidebar.length > 0) {
        sidebar[`/${locale}/guide/`] = commonSidebar
        sidebar[`/${locale}/protocol/`] = commonSidebar
        sidebar[`/en/core/`] = commonSidebar
    }

    if (changelogFiles.length > 0) {
        const changelogsSidebar = [
            {
                text: localeMessages.changelogs,
                items: changelogFiles.map(f => ({ text: f, link: `/${locale}/changelogs/${f}` }))
            }
        ]
        sidebar[`/${locale}/changelogs/`] = changelogsSidebar
        nav.push({ text: localeMessages.changelogs, link: `/${locale}/changelogs/${changelogFiles[0]}`, activeMatch: `/${locale}/changelogs/(.+)?` })
    }
    if (existsSync(join(location, 'blog'))) {
        nav.push(
            { text: (localeMessages.blogs || 'Blogs'), link: `/${locale}/blog/`, activeMatch: `/${locale}/blog/(.+)?` },
        )
    }
    const theme: LocaleConfig<DefaultTheme.Config>[string] = {
        label: localeMessages.label,
        lang: locale,
        dir: locale === 'ar' ? 'rtl' : 'ltr',
        themeConfig: {
            logo: { src: '/logo.svg', alt: 'XMCL', width: '24', height: '24' },
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
                {
                    icon: {
                        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.3-4.14 4.15.9c.02.94.78 1.7 1.74 1.7 1.02 0 1.85-.83 1.85-1.85S20.5 3 19.48 3c-.76 0-1.42.47-1.7 1.12l-4.58-1c-.2-.04-.42.06-.49.26l-1.5 4.77C8.75 8.24 6.5 8.87 4.83 9.87 4.25 9.1 3.32 8.6 2.25 8.6c-1.65 0-3 1.35-3 3 0 1.12.63 2.1 1.56 2.6-.08.4-.12.82-.12 1.25 0 3.6 4.38 6.5 9.75 6.5s9.75-2.9 9.75-6.5c0-.43-.04-.85-.12-1.25.93-.5 1.56-1.48 1.56-2.6zm-18.66 3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm11.3 4.5c-1.68 1.68-4.88 1.68-6.56 0-.08-.08-.08-.22 0-.3l.45-.45c.08-.08.22-.08.3 0 1.2 1.2 3.86 1.2 5.06 0 .08-.08.22-.08.3 0l.45.45c.08.08.08.22 0 .3zm.44-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>'
                    },
                    link: 'https://www.reddit.com/r/XMCL/'
                },
            ],
            nav,
            sidebar,
            outline: {
                label: localeMessages.outline,
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
        }
    }
    return theme
}
