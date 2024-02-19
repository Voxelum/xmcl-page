import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import { EnhanceAppContext, useData } from 'vitepress'
// @ts-expect-error
import Doc from 'vitepress/dist/client/theme-default/components/VPDoc.vue'
import './styles/index.css'
import AuthorDetail from './components/BlogAuthorDetail.vue'
import Post from './components/BlogPost.vue'
import PostAuthor from './components/BlogPostAuthor.vue'
import PostDetail from './components/BlogPostDetail.vue'
import PostIcon from './components/BlogPostIcon.vue'
import Posts from './components/BlogPosts.vue'
import AppWelcome from './components/AppWelcome.vue'
import AppPrebuilds from './components/AppPrebuilds.vue'
import AppAuth from './components/AppAuth.vue'
import { i18n } from './modules/i18n'
import { computed, provide, watch } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    app.use(i18n)
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

    if (!import.meta.env.SSR) {
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
    }
  },
}