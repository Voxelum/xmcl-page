<script setup lang='ts'>
import { useData } from 'vitepress'
import type { Post } from '../composables/posts.data'
import useAuthors from '../composables/useAuthors'
import PostIcon from './BlogPostIcon.vue'
import { computed } from 'vue';
// import PostAuthor from './BlogPostAuthor.vue'

const props = defineProps<{
  post: Post
}>()
const { site } = useData()
const { findByName } = useAuthors()
const href = computed(() => `${site.value.base}en/blog${props.post.href}`)
const author = findByName(props.post.author)
</script>

<template>
  <a :href="href" class="Blog p-6 rounded-lg border shadow-md cursor-pointer">
    <div class="flex justify-between items-center mb-5 text-gray-500">
      <span
        class="bg-primary-100 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] text-sm font-medium inline-flex items-center rounded">
        <PostIcon :post="post">
          <span class="text-sm">{{ post.date.since }}</span>
        </PostIcon>
      </span>
    </div>
    <h2
      class="mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]">
      {{ post.title }}
    </h2>
    <p class="mb-5 text-[color:var(--vp-c-text-2)] " v-html="post.excerpt" />
    <div class="flex justify-between items-center">
      <!-- <PostAuthor v-if="author" :author="author" /> -->
      <span class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]">
        Read more
        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </div>
  </a>
</template>

<style scoped>
.Blog {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.Blog:hover {
  border-color: var(--vp-c-brand-1);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.box> :deep(.VPImage) {
  margin-bottom: 20px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.link-text-icon {
  display: inline-block;
  margin-left: 6px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}
</style>

