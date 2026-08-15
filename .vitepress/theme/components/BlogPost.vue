<script setup lang='ts'>
import { useData } from 'vitepress'
import type { Post } from '../composables/posts.data'
import useAuthors from '../composables/useAuthors'
import BlogPostIcon from './BlogPostIcon.vue'
import logo from '../../../public/logo.png'
import { computed } from 'vue'

const props = defineProps<{
  post: Post
  featured?: boolean
}>()

const { site } = useData()
const { findByName } = useAuthors()
const href = computed(() => `${site.value.base}${props.post.locale}/blog${props.post.href}`)

const author = computed(() => findByName(props.post.author))

const hasCi010 = computed(() => {
  const isDirect = (props.post.author || '').toLowerCase().includes('ci010')
  const coAuthors = props.post.data?.coAuthors || []
  const isCo = coAuthors.some((ca: any) => (typeof ca === 'string' ? ca : ca.name || '').toLowerCase().includes('ci010'))
  return isDirect || isCo
})

const authorName = computed(() => {
  if (hasCi010.value && !(props.post.author || '').toLowerCase().includes('ci010')) {
    return `CI010 & ${props.post.author}`
  }
  return props.post.author || 'XMCL Core Team'
})

const avatar = computed(() => {
  if (hasCi010.value) {
    return 'https://github.com/ci010.png'
  }
  return author.value?.data?.avatar || (authorName.value.toLowerCase().includes('bansafan') ? 'https://github.com/BANSAFAn.png' : logo)
})
</script>

<template>
  <a :href="href" class="blog-card" :class="{ 'is-featured': featured }">
    <div class="blog-card-topline">
      <BlogPostIcon :post="post" />
      <div class="blog-card-meta">
        <span class="meta-time">{{ post.readingTime || '3 min read' }}</span>
        <span class="meta-dot">·</span>
        <span class="meta-date">{{ post.date.since || post.date.string }}</span>
      </div>
    </div>

    <h2 class="blog-card-title">{{ post.title }}</h2>

    <p class="blog-card-excerpt" v-html="post.excerpt || post.description" />

    <div class="blog-card-footer">
      <div class="blog-card-author">
        <img :src="avatar" :alt="authorName" class="author-pic" width="24" height="24" />
        <span>{{ authorName }}</span>
      </div>
      <span class="blog-card-link">
        Read Story <span class="arrow-icon" aria-hidden="true">→</span>
      </span>
    </div>
  </a>
</template>

<style scoped>
.blog-card {
  --card-ink: var(--xmcl-ink, #17211f);
  --card-muted: var(--xmcl-muted, #64706c);
  --card-panel: var(--xmcl-panel, #ffffff);
  --card-soft: var(--xmcl-soft, #e9ece4);
  --card-line: var(--xmcl-line, #d8ded7);
  --card-orange: var(--xmcl-orange, #e45e42);
  --card-lime: var(--xmcl-lime, #c9f85a);
  background: var(--card-panel);
  border: 1px solid var(--card-line);
  border-radius: 12px;
  color: var(--card-ink);
  display: flex;
  flex-direction: column;
  min-height: 290px;
  padding: 28px 30px 24px;
  position: relative;
  text-decoration: none;
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease, background 200ms ease;
}

.blog-card:hover {
  background: color-mix(in srgb, var(--card-panel) 95%, var(--card-orange));
  border-color: var(--card-ink);
  box-shadow: 0 12px 28px -10px color-mix(in srgb, var(--card-ink) 12%, transparent);
  transform: translateY(-4px);
}

.blog-card.is-featured {
  background: color-mix(in srgb, var(--card-panel) 98%, var(--card-orange));
  border-color: color-mix(in srgb, var(--card-orange) 45%, var(--card-line));
  grid-column: 1 / -1;
  padding: 38px 40px 32px;
}

.blog-card-topline {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  margin-bottom: 18px;
}

.blog-card-meta {
  align-items: center;
  color: var(--card-muted);
  display: flex;
  font-size: 12px;
  font-weight: 600;
  gap: 6px;
}

.meta-dot {
  color: var(--card-line);
}

.blog-card-title {
  color: var(--card-ink);
  font-size: clamp(20px, 2.5vw, 26px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.25;
  margin: 0 0 14px;
  transition: color 150ms ease;
}

.is-featured .blog-card-title {
  font-size: clamp(26px, 3.5vw, 36px);
  letter-spacing: -0.04em;
  line-height: 1.15;
}

.blog-card:hover .blog-card-title {
  color: var(--card-orange);
}

.blog-card-excerpt {
  color: var(--card-muted);
  display: -webkit-box;
  font-size: 14.5px;
  line-height: 1.65;
  margin: 0 0 24px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.is-featured .blog-card-excerpt {
  font-size: 16px;
  -webkit-line-clamp: 4;
}

.blog-card-excerpt :deep(p) {
  margin: 0;
}

.blog-card-footer {
  align-items: center;
  border-top: 1px solid var(--card-line);
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 18px;
}

.blog-card-author {
  align-items: center;
  color: var(--card-muted);
  display: flex;
  font-weight: 600;
  gap: 8px;
}

.author-pic {
  background: var(--card-soft);
  border: 1px solid var(--card-line);
  border-radius: 50%;
  height: 24px;
  object-fit: contain;
  padding: 1px;
  width: 24px;
}

.blog-card-link {
  align-items: center;
  color: var(--card-ink);
  display: inline-flex;
  font-weight: 700;
  gap: 6px;
  transition: color 150ms ease;
}

.arrow-icon {
  font-size: 15px;
  line-height: 1;
  transition: transform 180ms ease;
}

.blog-card:hover .arrow-icon {
  transform: translateX(4px);
}

.blog-card:hover .blog-card-link {
  color: var(--card-orange);
}

/* Dark Mode Overrides */
html.dark .blog-card {
  --card-ink: #edf3ed;
  --card-muted: #9aa9a1;
  --card-panel: #1b241f;
  --card-soft: #151d18;
  --card-line: #334139;
  --card-orange: #ff8060;
  --card-lime: #c9f85a;
}

html.dark .blog-card:hover {
  background: color-mix(in srgb, #1b241f 92%, #2d3e33);
  border-color: var(--card-lime);
}

html.dark .blog-card:hover .blog-card-title,
html.dark .blog-card:hover .blog-card-link {
  color: var(--card-lime);
}
</style>

