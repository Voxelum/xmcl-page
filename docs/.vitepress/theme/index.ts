import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import { EnhanceAppContext } from 'vitepress/dist/client'
// @ts-expect-error
import Doc from 'vitepress/dist/client/theme-default/components/VPDoc.vue'
import './common.css'
import AuthorDetail from './components/BlogAuthorDetail.vue'
import Post from './components/BlogPost.vue'
import PostAuthor from './components/BlogPostAuthor.vue'
import PostDetail from './components/BlogPostDetail.vue'
import PostIcon from './components/BlogPostIcon.vue'
import Posts from './components/BlogPosts.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component('Posts', Posts)
    app.component('Post', Post)
    app.component('PostDetail', PostDetail)
    app.component('PostIcon', PostIcon)
    app.component('PostAuthor', PostAuthor)
    app.component('AuthorDetail', AuthorDetail)
    app.component('changelog', Doc)

    import('@microsoft/applicationinsights-web').then(({ ApplicationInsights }) => {
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
  },
}