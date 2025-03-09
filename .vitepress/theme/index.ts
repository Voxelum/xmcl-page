import { SpeedInsights } from "@vercel/speed-insights/vue"
import 'uno.css'
import { EnhanceAppContext, useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import Doc from 'vitepress/dist/client/theme-default/components/VPDoc.vue'
import { defineComponent, h, provide, watchEffect } from 'vue'
import AppAuth from './components/AppAuth.vue'
import AppPrebuilds from './components/AppPrebuilds.vue'
import AppWelcome from './components/AppWelcome.vue'
import AuthorDetail from './components/BlogAuthorDetail.vue'
import Post from './components/BlogPost.vue'
import PostAuthor from './components/BlogPostAuthor.vue'
import PostDetail from './components/BlogPostDetail.vue'
import PostIcon from './components/BlogPostIcon.vue'
import Posts from './components/BlogPosts.vue'
import { i18n } from './modules/i18n'
import { MotionPlugin } from '@vueuse/motion'
import './styles/index.css'

export default {
  extends: DefaultTheme,
  Layout: defineComponent((props, { slots }) => {
    if (!import.meta.env.SSR) {
      const router = useRouter()
      const promise = import('@microsoft/applicationinsights-web').then(({ ApplicationInsights }) => {
        const appInsights = new ApplicationInsights({
          config: {
            connectionString: 'InstrumentationKey=7a526b34-c173-43f6-9641-1e4c98863368;IngestionEndpoint=https://eastasia-0.in.applicationinsights.azure.com/'
          }
        })
        appInsights.loadAppInsights()
        router.onAfterRouteChanged = (to) => {
          appInsights.trackPageView({ name: to })
        }
        return appInsights
      })
      const trackDownload = (platform: string, type: string) => {
        promise.then((app) => {
          app.trackEvent({ name: 'download', properties: { platform, type } })
        })
      }
      provide('telemetry', trackDownload)

      const { lang } = useData()
      watchEffect(() => {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
      })
    }

    return () => [h(DefaultTheme.Layout, props), h(SpeedInsights)]
  }),
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(i18n)
    app.use(MotionPlugin)
    app.component('Posts', Posts)
    app.component('Post', Post)
    app.component('PostDetail', PostDetail)
    app.component('PostIcon', PostIcon)
    app.component('PostAuthor', PostAuthor)
    app.component('AuthorDetail', AuthorDetail)
    app.component('welcome', AppWelcome)
    app.component('prebuilds', AppPrebuilds)
    app.component('changelog', Doc)
    app.component('auth', AppAuth)
  },
}