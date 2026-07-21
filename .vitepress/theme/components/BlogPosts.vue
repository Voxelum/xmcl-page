<script setup lang="ts">
import { useData } from 'vitepress'
import usePosts from '../composables/usePosts'
import logo from '../../../public/logo.png'

const { allPosts: posts } = usePosts()
const { page } = useData()
</script>

<template>
  <div class="blog-shell">
    <section class="blog-hero">
      <div class="blog-hero-grid" aria-hidden="true"></div>
      <div class="blog-hero-copy">
        <div class="blog-kicker">
          <img :src="logo" alt="" />
          <span>XMCL JOURNAL</span>
        </div>
        <h1>{{ page?.title }}</h1>
        <p>{{ page?.description }}</p>
        <div class="blog-hero-meta">
          <span>{{ posts.length }} dispatches</span>
          <span class="blog-meta-dot"></span>
          <span>From the XMCL team</span>
        </div>
      </div>
      <div class="blog-hero-note">
        <span class="blog-note-label">BUILD / PLAY / SHARE</span>
        <strong>Notes from the launcher, the community, and the worlds we make.</strong>
        <span class="blog-note-mark">+</span>
      </div>
    </section>

    <section class="blog-feed">
      <header class="blog-feed-header">
        <div>
          <span class="blog-section-kicker">LATEST DISPATCHES</span>
          <h2>From the journal</h2>
        </div>
        <p>Development notes, tutorials, and stories from the XMCL ecosystem.</p>
      </header>
      <div class="blog-grid">
        <Post v-for="post of posts" :key="`${post.locale}-${post.href}`" :post="post" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-shell {
  --blog-ink: var(--xmcl-ink, #17211f);
  --blog-muted: var(--xmcl-muted, #64706c);
  --blog-paper: var(--xmcl-paper, #f4f5ef);
  --blog-panel: var(--xmcl-panel, #ffffff);
  --blog-soft: var(--xmcl-soft, #e9ece4);
  --blog-line: var(--xmcl-line, #d8ded7);
  --blog-lime: var(--xmcl-lime, #c9f85a);
  --blog-orange: var(--xmcl-orange, #e45e42);
  background: var(--blog-paper);
  color: var(--blog-ink);
  font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif;
  margin: 0 auto;
  max-width: 1440px;
}

.blog-hero {
  align-items: end;
  background: var(--blog-paper);
  border-bottom: 1px solid var(--blog-line);
  display: grid;
  gap: 48px;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.42fr);
  min-height: 410px;
  overflow: hidden;
  padding: 84px clamp(24px, 7vw, 112px) 64px;
  position: relative;
}

.blog-hero-grid {
  background-image: linear-gradient(to right, color-mix(in srgb, var(--blog-ink) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--blog-ink) 7%, transparent) 1px, transparent 1px);
  background-size: 56px 56px;
  inset: 0;
  mask-image: linear-gradient(to bottom, black, transparent 92%);
  pointer-events: none;
  position: absolute;
}

.blog-hero-copy, .blog-hero-note { position: relative; z-index: 1; }
.blog-hero-copy { max-width: 760px; }
.blog-kicker, .blog-section-kicker, .blog-note-label { align-items: center; color: var(--blog-muted); display: flex; font-size: 11px; font-weight: 700; gap: 9px; letter-spacing: 0.14em; text-transform: uppercase; }
.blog-kicker img { height: 24px; object-fit: contain; width: 24px; }
.blog-hero h1 { font-size: clamp(48px, 7vw, 92px); font-weight: 700; letter-spacing: -0.06em; line-height: 0.95; margin: 28px 0 20px; max-width: 780px; }
.blog-hero-copy > p { color: var(--blog-muted); font-size: clamp(16px, 2vw, 21px); line-height: 1.6; margin: 0; max-width: 650px; }
.blog-hero-meta { align-items: center; color: var(--blog-orange); display: flex; font-size: 12px; font-weight: 700; gap: 12px; margin-top: 28px; text-transform: uppercase; }
.blog-meta-dot { background: var(--blog-orange); border-radius: 50%; height: 6px; width: 6px; }
.blog-hero-note { align-self: end; border-left: 1px solid var(--blog-line); display: flex; flex-direction: column; gap: 18px; padding: 18px 0 4px 28px; }
.blog-note-label { color: var(--blog-orange); font-size: 10px; }
.blog-hero-note strong { font-size: 22px; letter-spacing: -0.03em; line-height: 1.2; max-width: 280px; }
.blog-note-mark { color: var(--blog-orange); font-size: 28px; line-height: 1; }

.blog-feed { padding: 86px clamp(24px, 7vw, 112px) 120px; }
.blog-feed-header { align-items: end; display: flex; gap: 40px; justify-content: space-between; margin-bottom: 42px; }
.blog-section-kicker { color: var(--blog-orange); margin-bottom: 14px; }
.blog-feed-header h2 { font-size: clamp(34px, 4vw, 56px); letter-spacing: -0.05em; line-height: 1; margin: 0; }
.blog-feed-header > p { color: var(--blog-muted); line-height: 1.6; margin: 0 0 2px; max-width: 320px; }
.blog-grid { display: grid; gap: 16px; grid-template-columns: repeat(2, minmax(0, 1fr)); }

@media (max-width: 800px) {
  .blog-hero { align-items: start; grid-template-columns: 1fr; min-height: auto; padding-top: 58px; }
  .blog-hero-note { border-left: 0; border-top: 1px solid var(--blog-line); padding: 24px 0 0; }
  .blog-feed-header { align-items: start; flex-direction: column; gap: 16px; }
}

@media (max-width: 560px) {
  .blog-hero { padding: 46px 20px 48px; }
  .blog-hero h1 { font-size: 54px; }
  .blog-feed { padding: 64px 20px 80px; }
  .blog-grid { grid-template-columns: 1fr; }
}
</style>
