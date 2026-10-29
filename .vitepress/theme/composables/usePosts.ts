import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { Post } from './posts.data'
import { data } from './posts.data'

export default () => {
  const { site, lang } = useData()

  const allPosts: Ref<Post[]> = ref(data)

  const route = useRoute()

  const path = route.path

  const pathWithoutBase = route.path.replace(site.value.base, '')
  const segments = pathWithoutBase.split('/').filter(Boolean)
  const activeLocale = computed(() => {
    const seg = segments[0]
    if (seg && seg !== 'blog' && seg !== 'posts') return seg
    return lang.value || 'en'
  })

  // Show all blog dispatches across the entire site on all language versions:
  // For Russian ('ru') and Ukrainian ('uk'): prioritize Ukrainian ('uk') posts, fallback to 'en'.
  // For all other locales: prioritize English ('en') posts, fallback to 'uk'.
  const localePosts = computed(() => {
    const currentLoc = activeLocale.value
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
      let chosen: Post | undefined
      if (currentLoc === 'ru' || currentLoc === 'uk') {
        chosen = candidates.find(p => p.locale === 'uk') || candidates.find(p => p.locale === 'en') || candidates[0]
      } else {
        chosen = candidates.find(p => p.locale === 'en') || candidates.find(p => p.locale === 'uk') || candidates[0]
      }
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

  return { allPosts: localePosts as unknown as Ref<Post[]>, currentPost, nextPost, prevPost, path, currentLocale: activeLocale }
}
