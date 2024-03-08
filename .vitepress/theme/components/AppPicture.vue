<template>
    <picture>
        <source v-for="[format, images] of Object.entries(value.sources)" :srcset="images"
            :type="`image/${format}`" />
        <img :src="value.img.src" :alt="alt" :width="value.img.w" :height="value.img.h" >
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
        [format: string]: string
    }
}
defineProps<{ value: Picture; alt?: string }>()
</script>