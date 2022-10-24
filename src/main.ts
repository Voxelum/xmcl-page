import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

const routes = setupLayouts(generatedRoutes)


export const createApp = ViteSSG(App, {
    routes,
    scrollBehavior(to, from, savedPos) {
        if (savedPos) {
            return savedPos
        }
        if (to.hash) {
            return {
                top: 80,
                el: `a[href='${to.hash}']`,
                behavior: 'smooth',
            }
        }
        return { x: 0, y: 0 }
    }
}, (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
})
