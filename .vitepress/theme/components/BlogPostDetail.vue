<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import usePosts from '../composables/usePosts'
import useAuthors from '../composables/useAuthors'
import BlogPostIcon from './BlogPostIcon.vue'
import BlogPostAuthor from './BlogPostAuthor.vue'
import logo from '../../../public/logo.png'

const { site, frontmatter } = useData()
const { currentPost: post, prevPost, nextPost } = usePosts()
const { findByName } = useAuthors()

const postAuthor = computed(() => {
  const authorName = post.value?.author || frontmatter.value?.author || 'XMCL Core Team'
  return findByName(authorName)
})

const authorName = computed(() => {
  return post.value?.author || frontmatter.value?.author || 'XMCL Core Team'
})

const coAuthorsList = computed(() => {
  const list = frontmatter.value?.coAuthors || post.value?.data?.coAuthors || []
  return list.map((item: any) => {
    if (typeof item === 'string') {
      const found = findByName(item)
      return {
        name: item,
        role: found?.data?.role || 'Contributor',
        author: found,
        github: found?.data?.github,
        gitlab: found?.data?.gitlab,
        reddit: found?.data?.reddit,
        avatar: found?.data?.avatar,
      }
    }
    const found = findByName(item.name)
    return {
      name: item.name,
      role: item.role || found?.data?.role || 'Contributor',
      author: found,
      github: item.github || found?.data?.github,
      gitlab: item.gitlab || found?.data?.gitlab,
      reddit: item.reddit || found?.data?.reddit,
      avatar: item.avatar || found?.data?.avatar || (item.name.toLowerCase().includes('ci010') ? 'https://github.com/ci010.png' : (item.name.toLowerCase().includes('bansafan') ? 'https://github.com/BANSAFAn.png' : undefined)),
    }
  })
})

const allAuthorsList = computed(() => {
  const primary = {
    name: authorName.value,
    role: frontmatter.value?.authorRole || postAuthor.value?.data?.role || 'Author & Technical Writer',
    author: postAuthor.value,
    github: postAuthor.value?.data?.github || (authorName.value.toLowerCase().includes('bansafan') ? 'https://github.com/BANSAFAn' : undefined),
    reddit: postAuthor.value?.data?.reddit || (authorName.value.toLowerCase().includes('bansafan') ? 'https://www.reddit.com/r/XMCL/' : undefined),
    gitlab: postAuthor.value?.data?.gitlab,
    avatar: postAuthor.value?.data?.avatar || (authorName.value.toLowerCase().includes('bansafan') ? 'https://github.com/BANSAFAn.png' : logo),
    bio: postAuthor.value?.data?.bio || 'Technical writer, open-source contributor, and community advocate for XMCL.',
  }

  const result = [primary]
  for (const ca of coAuthorsList.value) {
    if (ca.name !== primary.name) {
      result.push({
        ...ca,
        avatar: ca.avatar || (ca.name.toLowerCase().includes('ci010') ? 'https://github.com/ci010.png' : logo),
        bio: ca.author?.data?.bio || (ca.name.toLowerCase().includes('ci010') ? 'Creator and lead developer of XMCL launcher, P2P multiplayer architecture, and open-source tooling.' : (ca.name.toLowerCase().includes('volodiakraplich') ? 'Linux package maintainer and contributor for Flathub and Flatpak distribution.' : 'Open-source contributor to XMCL ecosystem.')),
      })
    }
  }

  // Prioritize CI010 first if present in the post
  return result.sort((a, b) => {
    const isCiA = a.name.toLowerCase().includes('ci010') ? -1 : 0
    const isCiB = b.name.toLowerCase().includes('ci010') ? -1 : 0
    return isCiA - isCiB
  })
})

const title = computed(() => {
  return post.value?.title || frontmatter.value?.title || 'Article'
})

const description = computed(() => {
  return post.value?.description || frontmatter.value?.description || ''
})

const dateString = computed(() => {
  return post.value?.date?.string || (frontmatter.value?.date ? new Date(frontmatter.value.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '')
})

const sinceString = computed(() => {
  return post.value?.date?.since || ''
})

const readingTime = computed(() => {
  return post.value?.readingTime || '4 min read'
})

const category = computed(() => {
  return post.value?.category || frontmatter.value?.category || 'Article'
})

const copied = ref(false)
function copyLink() {
  if (typeof window !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  }
}

const currentUrl = computed(() => {
  return typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''
})

const encodedTitle = computed(() => {
  return encodeURIComponent(title.value)
})

const showCommunityThanks = computed(() => {
  if (frontmatter.value?.hideCommunityThanks || frontmatter.value?.hideContributors) return false
  const path = post.value?.href || ''
  const t = title.value.toLowerCase()
  if (path.includes('telemetry-sourcemap') || t.includes('sourcemap') || t.includes('azure')) return false
  return true
})
</script>

<template>
  <article class="blog-article-wrapper">
    <!-- Top Breadcrumb & Return Bar -->
    <header class="article-header">
      <div class="article-breadcrumb">
        <a :href="`${site.base}${post?.locale || 'en'}/blog/`" class="back-link">
          <span class="back-arrow" aria-hidden="true">←</span>
          <span>Journal Dispatches</span>
        </a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">{{ category }}</span>
      </div>

      <!-- Meta Badges -->
      <div class="article-meta-badges">
        <BlogPostIcon v-if="post" :post="post" />
        <span class="meta-item">
          <span class="meta-icon">📅</span>
          <span>{{ dateString }}</span>
          <span v-if="sinceString" class="meta-sub">({{ sinceString }})</span>
        </span>
        <span class="meta-dot">·</span>
        <span class="meta-item">
          <span class="meta-icon">⏱️</span>
          <span>{{ readingTime }}</span>
        </span>
      </div>

      <!-- Title Headline -->
      <h1 class="article-title">{{ title }}</h1>

      <!-- Description / Lead Paragraph -->
      <p v-if="description" class="article-lead">
        {{ description }}
      </p>

      <!-- Author & Social Share Row -->
      <div class="article-author-bar">
        <div class="authors-group">
          <BlogPostAuthor
            v-for="person in allAuthorsList"
            :key="person.name"
            :author="person.author"
            :author-name="person.name"
            :role-override="person.role"
          />
        </div>

        <div class="article-share-actions" aria-label="Article actions">
          <!-- Copy Link -->
          <button
            type="button"
            class="share-icon-btn copy-btn"
            :class="{ active: copied }"
            :title="copied ? 'Copied to clipboard!' : 'Copy article link'"
            :aria-label="copied ? 'Copied' : 'Copy link'"
            @click="copyLink"
          >
            <svg v-if="copied" class="btn-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <svg v-else class="btn-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span class="icon-label">{{ copied ? 'Copied' : 'Copy' }}</span>
          </button>

          <!-- Share on X / Twitter -->
          <a
            :href="`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-icon-btn twitter-btn"
            title="Share on X (Twitter)"
            aria-label="Share on X"
          >
            <svg class="btn-svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          <!-- Share on Reddit -->
          <a
            :href="`https://www.reddit.com/submit?title=${encodedTitle}&url=${currentUrl}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-icon-btn reddit-btn"
            title="Share on Reddit"
            aria-label="Share on Reddit"
          >
            <svg class="btn-svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z"/>
            </svg>
          </a>

          <!-- Discord -->
          <a
            href="https://discord.gg/W5XVwYY7GQ"
            target="_blank"
            rel="noopener noreferrer"
            class="share-icon-btn discord-btn"
            title="Discuss in Discord"
            aria-label="Discuss in Discord"
          >
            <svg class="btn-svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content Stream -->
    <div class="article-body">
      <slot />
    </div>

    <!-- Article Footer / Author Bio & Navigation -->
    <footer class="article-footer">
      <!-- Author Bio Cards -->
      <div class="author-bios-section">
        <div
          v-for="person in allAuthorsList"
          :key="person.name"
          class="author-bio-card"
        >
          <img :src="person.avatar" :alt="person.name" class="bio-avatar" width="48" height="48" />
          <div class="bio-content">
            <div class="bio-header-row">
              <span class="bio-title">{{ person.name }}</span>
              <span class="bio-role-badge">{{ person.role }}</span>
            </div>
            <p class="bio-description">
              {{ person.bio }}
            </p>
            <div class="bio-links">
              <a v-if="person.github" :href="person.github" target="_blank" rel="noopener noreferrer" class="bio-social-link github-link">
                GitHub ↗
              </a>
              <a v-if="person.reddit" :href="person.reddit" target="_blank" rel="noopener noreferrer" class="bio-social-link reddit-link">
                Reddit ↗
              </a>
              <a v-if="person.gitlab" :href="person.gitlab" target="_blank" rel="noopener noreferrer" class="bio-social-link gitlab-link">
                GitLab ↗
              </a>
              <a href="https://discord.gg/W5XVwYY7GQ" target="_blank" rel="noopener noreferrer" class="bio-social-link discord-link">
                Discord ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Community & Contributors Acknowledgement Card -->
      <div v-if="showCommunityThanks" class="community-thanks-card">
        <img :src="logo" alt="XMCL Launcher" class="community-logo" width="52" height="52" />
        <div class="community-content">
          <div class="community-header">
            <span class="community-kicker">COMMUNITY & OPEN SOURCE</span>
            <h3 class="community-title">Special Thanks to All Contributors!</h3>
          </div>
          <p class="community-desc">
            XMCL is built with love by open-source contributors, modders, and players worldwide. Every pull request, translation, bug report, and test run powers our community forward.
          </p>
          <div class="community-actions">
            <a
              href="https://github.com/Voxelum/x-minecraft-launcher"
              target="_blank"
              rel="noopener noreferrer"
              class="community-btn repo-btn"
            >
              <span>⭐ XMCL Repository & Code</span>
              <span class="arrow-ext">↗</span>
            </a>
            <a
              href="https://github.com/Voxelum/x-minecraft-launcher/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
              class="community-btn list-btn"
            >
              <span>Contributors Graph</span>
              <span class="arrow-ext">↗</span>
            </a>
            <a
              href="https://discord.gg/W5XVwYY7GQ"
              target="_blank"
              rel="noopener noreferrer"
              class="community-btn discord-sub-btn"
            >
              <span>Join Discord</span>
              <span class="arrow-ext">↗</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Next & Previous Post Navigation Cards -->
      <nav class="post-navigation-grid" aria-label="Article navigation">
        <a
          v-if="prevPost"
          :href="`${site.base}${prevPost.locale}/blog${prevPost.href}`"
          class="nav-post-card prev-card"
        >
          <span class="nav-label">← PREVIOUS DISPATCH</span>
          <strong class="nav-title">{{ prevPost.title }}</strong>
          <span class="nav-meta">{{ prevPost.date.string }} · {{ prevPost.readingTime }}</span>
        </a>
        <div v-else class="nav-post-card-placeholder" />

        <a
          v-if="nextPost"
          :href="`${site.base}${nextPost.locale}/blog${nextPost.href}`"
          class="nav-post-card next-card"
        >
          <span class="nav-label">NEXT DISPATCH →</span>
          <strong class="nav-title">{{ nextPost.title }}</strong>
          <span class="nav-meta">{{ nextPost.date.string }} · {{ nextPost.readingTime }}</span>
        </a>
      </nav>

      <!-- Back to all articles button -->
      <div class="return-all-wrap">
        <a :href="`${site.base}${post?.locale || 'en'}/blog/`" class="return-all-btn">
          View All Journal Dispatches
        </a>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.blog-article-wrapper {
  --article-ink: var(--xmcl-ink, #17211f);
  --article-muted: var(--xmcl-muted, #64706c);
  --article-panel: var(--xmcl-panel, #ffffff);
  --article-soft: var(--xmcl-soft, #e9ece4);
  --article-line: var(--xmcl-line, #d8ded7);
  --article-orange: var(--xmcl-orange, #e45e42);
  --article-lime: var(--xmcl-lime, #c9f85a);
  color: var(--article-ink);
  font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif;
  margin: 0 auto;
  max-width: 860px;
  padding: 24px 0 64px;
}

/* Header Section */
.article-header {
  border-bottom: 1px solid var(--article-line);
  margin-bottom: 36px;
  padding-bottom: 32px;
}

.article-breadcrumb {
  align-items: center;
  color: var(--article-muted);
  display: flex;
  font-size: 12px;
  font-weight: 700;
  gap: 8px;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.back-link {
  align-items: center;
  color: var(--article-muted);
  display: inline-flex;
  gap: 6px;
  text-decoration: none;
  transition: color 150ms ease;
}

.back-link:hover {
  color: var(--article-orange);
}

.back-arrow {
  font-size: 16px;
  line-height: 1;
  transition: transform 150ms ease;
}

.back-link:hover .back-arrow {
  transform: translateX(-3px);
}

.breadcrumb-separator {
  color: var(--article-line);
}

.breadcrumb-current {
  color: var(--article-orange);
}

/* Meta Badges */
.article-meta-badges {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
}

.meta-item {
  align-items: center;
  color: var(--article-muted);
  display: inline-flex;
  font-size: 13px;
  gap: 5px;
}

.meta-sub {
  color: var(--article-muted);
  opacity: 0.8;
}

.meta-dot {
  color: var(--article-line);
}

/* Title & Lead */
.article-title {
  color: var(--article-ink);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.12;
  margin: 12px 0 16px;
}

.article-lead {
  color: var(--article-muted);
  font-size: clamp(16px, 2.2vw, 19px);
  line-height: 1.65;
  margin: 0 0 28px;
}

/* Author & Share Bar */
.article-author-bar {
  align-items: center;
  border-top: 1px solid var(--article-line);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  padding-top: 20px;
}

.authors-group {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.article-share-actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.share-icon-btn {
  align-items: center;
  background: var(--article-panel);
  border: 1px solid var(--article-line);
  border-radius: 8px;
  color: var(--article-ink);
  cursor: pointer;
  display: inline-flex;
  height: 36px;
  justify-content: center;
  padding: 0 10px;
  text-decoration: none;
  transition: all 180ms ease;
}

.share-icon-btn.copy-btn {
  gap: 6px;
  padding: 0 12px;
}

.icon-label {
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
}

.btn-svg {
  flex-shrink: 0;
  transition: transform 180ms ease;
}

.share-icon-btn:hover {
  background: var(--article-soft);
  border-color: var(--article-ink);
  transform: translateY(-2px);
}

.share-icon-btn:hover .btn-svg {
  transform: scale(1.1);
}

.twitter-btn:hover {
  border-color: #1d9bf0;
  color: #1d9bf0;
}

.reddit-btn:hover {
  border-color: #ff4500;
  color: #ff4500;
}

.discord-btn:hover {
  border-color: #5865f2;
  color: #5865f2;
}

.copy-btn.active {
  background: var(--article-lime);
  border-color: var(--article-ink);
  color: #17211f;
}

/* Article Body */
.article-body {
  font-size: 17px;
  line-height: 1.8;
}

.article-body :deep(h2) {
  border-bottom: 1px solid var(--article-line);
  border-top: 0;
  color: var(--article-ink);
  font-size: clamp(24px, 3.5vw, 32px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin: 44px 0 18px;
  padding-bottom: 12px;
}

.article-body :deep(h3) {
  color: var(--article-ink);
  font-size: clamp(19px, 2.5vw, 24px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 32px 0 14px;
}

.article-body :deep(p),
.article-body :deep(li) {
  color: var(--article-muted);
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 16px;
}

.article-body :deep(strong) {
  color: var(--article-ink);
}

.article-body :deep(a) {
  color: var(--article-orange);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.article-body :deep(a:hover) {
  color: var(--article-ink);
}

.article-body :deep(code) {
  background: var(--article-soft);
  border: 1px solid var(--article-line);
  border-radius: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.9em;
  padding: 2px 6px;
}

.article-body :deep(pre) {
  background: #111815 !important;
  border: 1px solid var(--article-line);
  border-radius: 8px;
  margin: 24px 0;
  padding: 18px 20px;
}

.article-body :deep(pre code) {
  background: transparent !important;
  border: 0 !important;
  color: #e5ede7 !important;
  padding: 0 !important;
}

.article-body :deep(blockquote) {
  background: var(--article-soft);
  border-left: 4px solid var(--article-orange);
  border-radius: 0 8px 8px 0;
  color: var(--article-ink);
  font-style: italic;
  margin: 28px 0;
  padding: 16px 20px;
}

.article-body :deep(.custom-block) {
  border-radius: 8px;
  margin: 24px 0;
  padding: 16px 20px;
}

/* Footer Section */
.article-footer {
  border-top: 1px solid var(--article-line);
  margin-top: 56px;
  padding-top: 36px;
}

.author-bios-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 36px;
}

.author-bio-card {
  align-items: flex-start;
  background: var(--article-panel);
  border: 1px solid var(--article-line);
  border-radius: 10px;
  display: flex;
  gap: 18px;
  padding: 22px 24px;
}

.bio-avatar {
  background: var(--article-soft);
  border: 1px solid var(--article-line);
  border-radius: 50%;
  flex-shrink: 0;
  height: 52px;
  padding: 3px;
  width: 52px;
}

.bio-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.bio-header-row {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.bio-title {
  color: var(--article-ink);
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.bio-role-badge {
  background: var(--article-soft);
  border: 1px solid var(--article-line);
  border-radius: 4px;
  color: var(--article-orange);
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  text-transform: uppercase;
}

html.dark .bio-role-badge {
  color: var(--article-lime);
}

.bio-description {
  color: var(--article-muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.bio-links {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 12.5px;
  font-weight: 700;
  gap: 12px;
  margin-top: 6px;
}

.bio-social-link {
  align-items: center;
  color: var(--article-ink);
  display: inline-flex;
  gap: 4px;
  text-decoration: none;
  transition: color 150ms ease;
}

.bio-social-link:hover {
  color: var(--article-orange);
  text-decoration: underline;
}

.bio-links a:hover {
  text-decoration: underline;
}

.bio-dot {
  color: var(--article-line);
}

/* Community & Contributors Thanks Card */
.community-thanks-card {
  align-items: flex-start;
  background: color-mix(in srgb, var(--article-panel) 92%, var(--article-orange));
  border: 1px solid color-mix(in srgb, var(--article-orange) 30%, var(--article-line));
  border-radius: 12px;
  display: flex;
  gap: 20px;
  margin-bottom: 36px;
  padding: 26px 28px;
  position: relative;
}

.community-logo {
  background: var(--article-panel);
  border: 1px solid var(--article-line);
  border-radius: 12px;
  flex-shrink: 0;
  height: 52px;
  object-fit: contain;
  padding: 5px;
  width: 52px;
}

.community-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.community-header {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.community-kicker {
  color: var(--article-orange);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.community-title {
  color: var(--article-ink);
  font-size: clamp(17px, 2.2vw, 20px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0;
}

.community-desc {
  color: var(--article-muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 6px;
}

.community-actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.community-btn {
  align-items: center;
  background: var(--article-panel);
  border: 1px solid var(--article-line);
  border-radius: 6px;
  color: var(--article-ink);
  display: inline-flex;
  font-size: 12.5px;
  font-weight: 700;
  gap: 6px;
  padding: 8px 14px;
  text-decoration: none;
  transition: all 150ms ease;
}

.community-btn:hover {
  background: var(--article-soft);
  border-color: var(--article-ink);
}

.community-btn.repo-btn {
  background: var(--article-ink);
  border-color: var(--article-ink);
  color: var(--article-panel);
}

.community-btn.repo-btn:hover {
  background: var(--article-orange);
  border-color: var(--article-orange);
  color: #ffffff;
}

.arrow-ext {
  font-size: 11px;
  opacity: 0.7;
}

/* Dark Mode Overrides for Community Card */
html.dark .community-thanks-card {
  background: color-mix(in srgb, #1b241f 92%, #c9f85a);
  border-color: color-mix(in srgb, #c9f85a 25%, #334139);
}

html.dark .community-kicker {
  color: var(--article-lime);
}

html.dark .community-btn.repo-btn {
  background: var(--article-lime);
  border-color: var(--article-lime);
  color: #17211f;
}

html.dark .community-btn.repo-btn:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #17211f;
}

/* Post Navigation Cards */
.post-navigation-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 36px;
}

.nav-post-card {
  background: var(--article-panel);
  border: 1px solid var(--article-line);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  text-decoration: none;
  transition: all 180ms ease;
}

.nav-post-card:hover {
  border-color: var(--article-ink);
  transform: translateY(-2px);
}

.nav-label {
  color: var(--article-orange);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav-title {
  color: var(--article-ink);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
}

.nav-meta {
  color: var(--article-muted);
  font-size: 12px;
  margin-top: auto;
}

.nav-post-card-placeholder {
  display: block;
}

.return-all-wrap {
  display: flex;
  justify-content: center;
}

.return-all-btn {
  align-items: center;
  background: var(--article-panel);
  border: 1px solid var(--article-line);
  border-radius: 6px;
  color: var(--article-ink);
  display: inline-flex;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 24px;
  text-decoration: none;
  transition: all 150ms ease;
}

.return-all-btn:hover {
  background: var(--article-lime);
  border-color: var(--article-ink);
  color: #17211f;
}

/* Dark Mode Overrides */
html.dark .blog-article-wrapper {
  --article-ink: #edf3ed;
  --article-muted: #9aa9a1;
  --article-panel: #1b241f;
  --article-soft: #151d18;
  --article-line: #334139;
  --article-orange: #ff8060;
  --article-lime: #c9f85a;
}

html.dark .breadcrumb-current {
  color: var(--article-lime);
}

html.dark .nav-label {
  color: var(--article-lime);
}

@media (max-width: 640px) {
  .article-author-bar {
    align-items: flex-start;
    flex-direction: column;
  }
  .post-navigation-grid {
    grid-template-columns: 1fr;
  }
  .author-bio-card {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>