import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { Post } from './posts.data'
import { data } from './posts.data'

export default () => {
  const { site } = useData()

  const allPosts: Ref<Post[]> = ref(data)

  const route = useRoute()

  const path = route.path

  const pathWithoutBase = route.path.replace(site.value.base, "")
  const segments = pathWithoutBase.split('/').filter(Boolean)
  const currentLocale = segments[0]

  const localePosts = computed(() => allPosts.value.filter(p => p.locale === currentLocale))

  function findCurrentIndex() {
    const blogRelative = pathWithoutBase.replace(/^([^/]+)\/(blog\/.*)$/, "$2")
    return localePosts.value.findIndex(p => `blog${p.href}` === blogRelative)
  }

  const currentPost = computed(() => localePosts.value[findCurrentIndex()])
  const nextPost = computed(() => localePosts.value[findCurrentIndex() - 1])
  const prevPost = computed(() => localePosts.value[findCurrentIndex() + 1])

  return { allPosts: localePosts as unknown as Ref<Post[]>, currentPost, nextPost, prevPost, path }
}