<script setup lang="ts">
import { useData } from 'vitepress'
import usePosts from '../composables/usePosts'
import logo from '../../../public/logo.png'

const { allPosts: posts } = usePosts()
const { theme, page } = useData()
</script>

<template>
  <div class="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <div class="flex items-center justify-center mb-3">
        <img class="max-h-50" :src="logo" />
      </div>
      <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]">
        {{ page?.title }}
      </h2>
      <p class="font-light sm:text-xl text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)]">
        {{ page?.description }}
      </p>
    </div>
    <div class="p-2 grid gap-6 lg:grid-cols-2">
      <div v-for="post of posts">
        <Post :post="post" />
      </div>
    </div>
  </div>
</template>
