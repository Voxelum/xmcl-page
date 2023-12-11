import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-vue-markdown'
import WindiCSS from 'vite-plugin-windicss'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import generateSitemap from 'vite-ssg-sitemap'
// @ts-ignore
import LinkAttributes from 'markdown-it-link-attributes'

const markdownWrapperClasses = 'markdown-body'

export default defineConfig({
    resolve: {
        alias: {
            '~/': `${resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        Layouts({
            extensions: ['vue', 'md'],
        }),
        {
            name: 'latest-release',
            resolveId(id) {
                if (id === 'virtual:latest-release') {
                    return id
                }
            },
            async load(id) {
                if (id === 'virtual:latest-release') {
                    const resp = await fetch('https://api.github.com/repos/voxelum/x-minecraft-launcher/releases?per_page=5')
                    const releases = await resp.json().then(v => v instanceof Array ? v : [])

                    const filteredReleases = JSON.stringify((releases as any[]).map((r: any) => ({
                        assets: r.assets.map((a: any) => ({ name: a.name, browser_download_url: a.browser_download_url })),
                        prerelease: r.prerelease,
                        tag_name: r.tag_name
                    })))
                    return `export default ${filteredReleases}`
                }
            }
        },
        {
            name: 'prebuilds',
            resolveId(id) {
                if (id === 'virtual:prebuilds') {
                    return id
                }
            },
            async load(id) {
                if (id === 'virtual:prebuilds') {
                    try {
                        const resp = await fetch('https://api.github.com/repos/voxelum/x-minecraft-launcher/actions/workflows/1220495/runs', {
                            headers: {
                                Authorization: `token ${process.env.VITE_GITHUB_TOKEN}`,
                            },
                        })
                        const releases = await resp.text()
                        return `export default ${releases}`
                    } catch {
                        return `export default undefined`
                    }
                }
            }
        },
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages({
            extensions: ['vue', 'md'],
        }),

        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'vue-i18n',
                '@vueuse/head',
                '@vueuse/core',
            ],
            dts: 'src/auto-imports.d.ts',
        }),

        // https://github.com/antfu/unplugin-vue-components
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],

            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

            dirs: ['src/components'],

            // // custom resolvers
            // resolvers: [
            //     // auto import icons
            //     // https://github.com/antfu/unplugin-icons
            //     IconsResolver({
            //         componentPrefix: '',
            //         // enabledCollections: ['carbon']
            //     }),
            // ],

            dts: 'src/components.d.ts',
        }),

        // // https://github.com/antfu/unplugin-icons
        // Icons({
        //     autoInstall: true,
        // }),

        // https://github.com/antfu/vite-plugin-windicss
        WindiCSS({
            safelist: [...markdownWrapperClasses, 'text-[rgb(61,239,233)]', 'text-[rgb(107,217,104)]', 'text-amber-600', 'text-emerald-700', 'text-red-700'],
        }),

        // https://github.com/antfu/vite-plugin-md
        // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
        Markdown({
            wrapperClasses: markdownWrapperClasses,
            markdownItOptions: {
                html: true,
                linkify: true,
                typographer: true,
            },
            headEnabled: true,
        }),

        // https://github.com/antfu/vite-plugin-pwa
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'robots.txt'],
            workbox: {
                globIgnores: ["**\/node_modules\/**\/*", "zh.html", "en.html", "ru.html", "index.html", "**\/changelogs\/**"],
                globPatterns: ["**\/*.{js,css,html}"]
            },
            manifest: false,
        }),

        // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            strictMessage: false,
            fullInstall: true,
            include: [resolve(__dirname, 'locales/**')],
        }),

        // https://github.com/antfu/vite-plugin-inspect
        // Inspect({
        //     // change this to enable inspect for debugging
        //     enabled: false,
        // }),
    ],

    server: {
        fs: {
            strict: true,
        },
    },

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
        onPageRendered(route, html, context) {
            if (context.initialState.locale) {
                html = html.replace(`lang="en"`, `lang="${context.initialState.locale}"`)
            }
            return html
        },
        onFinished() {
            generateSitemap({
                hostname: 'https://xmcl.app'
            })
        },
    },

    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core',
            '@vueuse/head',
        ],
        exclude: [
            'vue-demi',
        ],
    },

    ssr: {
        // TODO: workaround until they support native ESM
        noExternal: [
            'workbox-window',
            /vue-i18n/,
        ],
    },
})
