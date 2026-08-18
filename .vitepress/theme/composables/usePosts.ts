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

  const pathWithoutBase = route.path.replace(site.value.base, '')
  const segments = pathWithoutBase.split('/').filter(Boolean)
  const currentLocale = segments[0] || 'en'

  // Show all blog dispatches across the entire site on all language versions:
  // Prioritize the current locale version if it exists; otherwise fallback to 'en', otherwise any available version.
  const localePosts = computed(() => {
    const slugMap = new Map<string, Post>()

    for (const p of allPosts.value) {
      const slug = p.slug || p.href.replace(/^\/posts\//, '')
      if (!slugMap.has(slug)) {
        slugMap.set(slug, p)
      }
    }

    const result: Post[] = []
    for (const slug of slugMap.keys()) {
      const candidates = allPosts.value.filter(p => (p.slug || p.href.replace(/^\/posts\//, '')) === slug)
      const currentLocaleMatch = candidates.find(p => p.locale === currentLocale)
      const enMatch = candidates.find(p => p.locale === 'en')
      const chosen = currentLocaleMatch || enMatch || candidates[0]
      if (chosen) {
        result.push(chosen)
      }
    }

    return result.sort((a, b) => b.date.time - a.date.time)
  })

  function findCurrentIndex() {
    const currentSlug = segments[segments.length - 1]?.replace(/\.html$/, '')
    const blogRelative = pathWithoutBase.replace(/^([^/]+)\/(blog\/.*)$/, '$2')
    return localePosts.value.findIndex(p =>
      `blog${p.href}` === blogRelative
      || p.slug === currentSlug
      || p.href.replace(/^\/posts\//, '') === currentSlug,
    )
  }

  const currentPost = computed(() => localePosts.value[findCurrentIndex()])
  const nextPost = computed(() => localePosts.value[findCurrentIndex() - 1])
  const prevPost = computed(() => localePosts.value[findCurrentIndex() + 1])

  return { allPosts: localePosts as unknown as Ref<Post[]>, currentPost, nextPost, prevPost, path }
}