<template>
    <picture>
        <source v-for="[format, images] of Object.entries(value.sources)" :srcset="images" :type="`image/${format}`" />
        <img :src="value.img.src" :alt="alt" :width="value.img.w" :height="value.img.h" :loading="loading"
            :decoding="decoding">
    </picture>
</template>

<script setup lang="ts">
export interface Picture {
    img: {
        src: string
        h: number
        w: number
    }
    sources: {
        [format: string]: Array<{
            src: string
        }>
    }
}
defineProps<{
    value: Picture;
    alt?: string;
    loading?: "eager" | "lazy";
    decoding?: "async" | "auto" | "sync";
}>()
</script>