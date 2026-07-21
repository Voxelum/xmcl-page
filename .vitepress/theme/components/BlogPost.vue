<script setup lang='ts'>
import { useData } from 'vitepress'
import type { Post } from '../composables/posts.data'
import useAuthors from '../composables/useAuthors'
import PostIcon from './BlogPostIcon.vue'
import { computed } from 'vue';

const props = defineProps<{
  post: Post
}>()
const { site } = useData()
const { findByName } = useAuthors()
const href = computed(() => `${site.value.base}${props.post.locale}/blog${props.post.href}`)
const author = findByName(props.post.author)
</script>

<template>
  <a :href="href" class="blog-card">
    <div class="blog-card-topline">
      <span class="blog-card-category"><PostIcon :post="post" /></span>
      <span>{{ post.date.since }}</span>
    </div>
    <h2>{{ post.title }}</h2>
    <p class="blog-card-excerpt" v-html="post.excerpt" />
    <div class="blog-card-footer">
      <span class="blog-card-author">{{ author?.name || post.author }}</span>
      <span class="blog-card-link">Read more <span aria-hidden="true">+</span></span>
    </div>
  </a>
</template>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  min-height: 290px;
  padding: 26px 28px 24px;
  position: relative;
  text-decoration: none;
  transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
}

.blog-card {
  --post-ink: var(--xmcl-ink, #17211f);
  --post-muted: var(--xmcl-muted, #64706c);
  --post-panel: var(--xmcl-panel, #ffffff);
  --post-soft: var(--xmcl-soft, #e9ece4);
  --post-line: var(--xmcl-line, #d8ded7);
  background: var(--post-panel);
  border: 1px solid var(--post-line);
  color: var(--post-ink);
}

.blog-card:nth-child(3n) { background: var(--post-soft); }
.blog-card:hover { border-color: var(--post-ink); transform: translateY(-3px); }
.blog-card:hover .blog-card-link { color: var(--xmcl-orange, #e45e42); }
.blog-card-topline { align-items: center; color: var(--post-muted); display: flex; font-size: 11px; font-weight: 700; justify-content: space-between; letter-spacing: 0.08em; text-transform: uppercase; }
.blog-card-category { color: var(--xmcl-orange, #e45e42); }
.blog-card-category :deep(div) { align-items: center; display: inline-flex; gap: 7px; }
.blog-card h2 { font-size: clamp(22px, 3vw, 32px); letter-spacing: -0.04em; line-height: 1.05; margin: 44px 0 14px; max-width: 520px; }
.blog-card-excerpt { color: var(--post-muted); font-size: 14px; line-height: 1.7; margin: 0; max-width: 620px; }
.blog-card-excerpt :deep(p) { margin: 0; }
.blog-card-footer { align-items: center; border-top: 1px solid var(--post-line); display: flex; font-size: 12px; justify-content: space-between; margin-top: auto; padding-top: 18px; }
.blog-card-author { color: var(--post-muted); }
.blog-card-link { color: var(--post-ink); font-weight: 700; }
.blog-card-link span { font-size: 18px; margin-left: 5px; }

/* Keep the card stable for older pages that still reference these hooks. */
.Blog {
  display: block;
  height: 100%;
}
</style>

