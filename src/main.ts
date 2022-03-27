import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

export const createApp = ViteSSG(App, {
    routes,
    scrollBehavior(to, from, savedPos) {
        if (to.hash) {
            return {
                el: `[href="${to.hash}"]`,
                behavior: 'auto'
            }
        }
    }
}, (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
})
