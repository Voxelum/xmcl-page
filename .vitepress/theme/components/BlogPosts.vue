<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import usePosts from '../composables/usePosts'
import BlogPost from './BlogPost.vue'
import logo from '../../../public/logo.png'

const { allPosts: posts } = usePosts()
const { page, site } = useData()

const activeCategory = ref('All')

const categories = computed(() => {
  const cats = new Set<string>()
  cats.add('All')
  posts.value.forEach(p => {
    if (p.category) cats.add(p.category)
    else if (p.data?.category) cats.add(p.data.category)
  })
  return Array.from(cats)
})

const filteredPosts = computed(() => {
  if (activeCategory.value === 'All') {
    return posts.value
  }
  return posts.value.filter(p => {
    const cat = p.category || p.data?.category || 'Article'
    return cat.toLowerCase() === activeCategory.value.toLowerCase()
  })
})

const featuredPost = computed(() => {
  return filteredPosts.value[0]
})

const remainingPosts = computed(() => {
  return filteredPosts.value.slice(1)
})
</script>

<template>
  <div class="blog-shell">
    <!-- Hero Banner -->
    <section class="blog-hero">
      <div class="blog-hero-grid" aria-hidden="true"></div>
      <div class="blog-hero-copy">
        <div class="blog-kicker">
          <img :src="logo" alt="" width="24" height="24" />
          <span>XMCL Engineering & Community Journal</span>
        </div>
        <h1>{{ page?.title || 'XMCL Journal' }}</h1>
        <p>{{ page?.description || 'Deep dives into launcher architecture, P2P networking, security updates, and community guides.' }}</p>
        <div class="blog-hero-meta">
          <span>{{ posts.length }} Dispatches</span>
          <span class="blog-meta-dot"></span>
          <span>By XMCL Core Team</span>
          <span class="blog-meta-dot"></span>
          <span>Open Source</span>
        </div>
      </div>
      <div class="blog-hero-note">
        <span class="blog-note-label">BUILD · PLAY · CONNECT</span>
        <strong>Engineering notes, release deep-dives, and multiplayer infrastructure.</strong>
        <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener" class="blog-hero-cta">
          Star on GitHub ↗
        </a>
      </div>
    </section>

    <!-- Blog Feed Section -->
    <section class="blog-feed">
      <!-- Category Filter Bar -->
      <div class="filter-bar">
        <div class="filter-tabs" role="tablist">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="filter-pill"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
            <span v-if="cat === 'All'" class="filter-count">{{ posts.length }}</span>
          </button>
        </div>
      </div>

      <!-- Feed Grid -->
      <div v-if="filteredPosts.length > 0" class="blog-grid">
        <!-- Spotlight Featured Post if on All -->
        <BlogPost
          v-if="featuredPost"
          :post="featuredPost"
          :featured="activeCategory === 'All' && remainingPosts.length > 0"
        />

        <!-- Remaining Posts -->
        <BlogPost
          v-for="post in remainingPosts"
          :key="`${post.locale}-${post.href}`"
          :post="post"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="empty-feed">
        <p>No dispatches found under "{{ activeCategory }}".</p>
        <button type="button" class="reset-filter-btn" @click="activeCategory = 'All'">
          View all dispatches
        </button>
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
  min-height: 380px;
  overflow: hidden;
  padding: 72px clamp(24px, 7vw, 112px) 56px;
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
.blog-kicker { align-items: center; color: var(--blog-muted); display: flex; font-size: 11px; font-weight: 700; gap: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
.blog-kicker img { height: 24px; object-fit: contain; width: 24px; }
.blog-hero h1 { font-size: clamp(44px, 6vw, 82px); font-weight: 800; letter-spacing: -0.05em; line-height: 0.98; margin: 20px 0 16px; max-width: 780px; }
.blog-hero-copy > p { color: var(--blog-muted); font-size: clamp(16px, 2vw, 19px); line-height: 1.6; margin: 0; max-width: 650px; }
.blog-hero-meta { align-items: center; color: var(--blog-orange); display: flex; font-size: 12px; font-weight: 700; gap: 12px; margin-top: 24px; text-transform: uppercase; }
.blog-meta-dot { background: var(--blog-orange); border-radius: 50%; height: 5px; width: 5px; }

.blog-hero-note { align-self: end; border-left: 1px solid var(--blog-line); display: flex; flex-direction: column; gap: 14px; padding: 12px 0 4px 28px; }
.blog-note-label { color: var(--blog-orange); font-size: 10px; font-weight: 700; letter-spacing: 0.1em; }
.blog-hero-note strong { font-size: 19px; letter-spacing: -0.02em; line-height: 1.3; max-width: 280px; }
.blog-hero-cta {
  align-items: center;
  color: var(--blog-ink);
  display: inline-flex;
  font-size: 13px;
  font-weight: 700;
  gap: 4px;
  margin-top: 4px;
  text-decoration: none;
}
.blog-hero-cta:hover { color: var(--blog-orange); }

/* Feed Section */
.blog-feed { padding: 48px clamp(24px, 7vw, 112px) 120px; }

.filter-bar {
  border-bottom: 1px solid var(--blog-line);
  margin-bottom: 36px;
  padding-bottom: 20px;
}

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-pill {
  align-items: center;
  background: var(--blog-panel);
  border: 1px solid var(--blog-line);
  border-radius: 999px;
  color: var(--blog-muted);
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  gap: 8px;
  padding: 8px 18px;
  transition: all 150ms ease;
}

.filter-pill:hover {
  border-color: var(--blog-ink);
  color: var(--blog-ink);
}

.filter-pill.active {
  background: var(--blog-ink);
  border-color: var(--blog-ink);
  color: var(--blog-paper);
}

.filter-count {
  background: color-mix(in srgb, var(--blog-paper) 20%, transparent);
  border-radius: 999px;
  font-size: 11px;
  padding: 1px 6px;
}

.blog-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.empty-feed {
  align-items: center;
  background: var(--blog-panel);
  border: 1px dashed var(--blog-line);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px 20px;
  text-align: center;
}

.reset-filter-btn {
  background: var(--blog-ink);
  border: 0;
  border-radius: 6px;
  color: var(--blog-paper);
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 18px;
}

/* Dark Mode Overrides */
html.dark .blog-shell {
  --blog-ink: #edf3ed;
  --blog-muted: #9aa9a1;
  --blog-paper: #101612;
  --blog-panel: #1b241f;
  --blog-soft: #151d18;
  --blog-line: #334139;
  --blog-lime: #c9f85a;
  --blog-orange: #ff8060;
}

html.dark .blog-hero-meta,
html.dark .blog-note-label {
  color: var(--blog-lime);
}

html.dark .blog-meta-dot {
  background: var(--blog-lime);
}

html.dark .filter-pill.active {
  background: var(--blog-lime);
  border-color: var(--blog-lime);
  color: #17211f;
}

@media (max-width: 800px) {
  .blog-hero { align-items: start; grid-template-columns: 1fr; min-height: auto; padding-top: 52px; }
  .blog-hero-note { border-left: 0; border-top: 1px solid var(--blog-line); padding: 20px 0 0; }
  .blog-grid { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .blog-hero { padding: 40px 20px 40px; }
  .blog-hero h1 { font-size: 46px; }
  .blog-feed { padding: 36px 20px 60px; }
}
</style>
