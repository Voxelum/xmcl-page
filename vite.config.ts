import { defineConfig } from 'vite'
// import 'vite-ssg'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import { resolve } from 'path'
import Prism from 'markdown-it-prism'
// @ts-ignore
import LinkAttributes from 'markdown-it-link-attributes'

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

export default defineConfig({
    resolve: {
        alias: {
            '~/': `${resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
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
            safelist: markdownWrapperClasses,
        }),

        // https://github.com/antfu/vite-plugin-md
        // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
        Markdown({
            wrapperClasses: markdownWrapperClasses,
            headEnabled: true,
            markdownItSetup(md) {
                // https://prismjs.com/
                md.use(Prism)
                md.use(LinkAttributes, {
                    pattern: /^https?:\/\//,
                    attrs: {
                        target: '_blank',
                        rel: 'noopener',
                    },
                })
            },
        }),

        // https://github.com/antfu/vite-plugin-pwa
        // VitePWA({
        //     registerType: 'autoUpdate',
        //     includeAssets: ['favicon.svg', 'robots.txt'],
        //     manifest: {
        //         name: 'xmcl',
        //         short_name: 'xmcl',
        //         theme_color: '#ffffff',
        //         icons: [
        //             {
        //                 src: '/apple-touch-icon.png',
        //                 sizes: '180x180',
        //                 type: 'image/png',
        //             },
        //         ],
        //     },
        // }),

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
