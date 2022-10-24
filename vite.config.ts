import { defineConfig } from 'vite'
// import fetch from 'node-fetch'
// import 'vite-ssg'
import Layouts from 'vite-plugin-vue-layouts'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import WindiCSS from 'vite-plugin-windicss'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'
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
                    const fetch = await import('node-fetch')
                    const resp = await fetch.default('https://api.github.com/repos/voxelum/x-minecraft-launcher/releases?per_page=5')
                    const releases = await resp.json()

                    const filteredReleases = JSON.stringify((releases as any[]).map((r: any) => ({
                        assets: r.assets.map((a: any) => ({ name: a.name, browser_download_url: a.browser_download_url })),
                        prerelease: r.prerelease,
                        tag_name: r.tag_name
                    })))
                    return `export default ${filteredReleases}`
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
            },
            headEnabled: true,
            markdownItSetup(md) {
                md.renderer.rules.table = (token, idx, options, env, self) => {
                    console.log(`render table`)
                    console.log(token)
                    return 'hllo'
                }
                // https://prismjs.com/
                // md.use(Prism)
                // md.use(LinkAttributes, {
                //     pattern: /^https?:\/\//,
                //     attrs: {
                //         target: '_blank',
                //         rel: 'noopener',
                //     },
                // })
            },
        }),

        // https://github.com/antfu/vite-plugin-pwa
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'robots.txt'],
            workbox: {
                globIgnores: ["**\/node_modules\/**\/*", "zh.html", "en.html", "ru.html", "index.html"],
                globPatterns: ["**\/*.{js,css,html}"]
            },
            manifest: false,
        }),

        // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
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
        }
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
})
