import DefaultTheme from 'vitepress/theme'
// @ts-expect-error
import Doc from 'vitepress/dist/client/theme-default/components/VPDoc.vue'
import 'uno.css'
import './common.css'
import type { App } from 'vue'
import Posts from './components/BlogPosts.vue'
import Post from './components/BlogPost.vue'
import PostDetail from './components/BlogPostDetail.vue'
import PostIcon from './components/BlogPostIcon.vue'
import PostAuthor from './components/BlogPostAuthor.vue'
import AuthorDetail from './components/BlogAuthorDetail.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Posts', Posts)
    app.component('Post', Post)
    app.component('PostDetail', PostDetail)
    app.component('PostIcon', PostIcon)
    app.component('PostAuthor', PostAuthor)
    app.component('AuthorDetail', AuthorDetail)
    app.component('changelog', Doc)
  },
}