<template>
    <picture>
        <source v-for="[format, images] of Object.entries(value.sources)" :srcset="images"
            :type="`image/${format}`" />
        <img :src="value.img.src">
    </picture>
</template>

<script setup lang="ts">
export interface Picture {
    img: {
        src: string
    }
    sources: {
        [format: string]: Array<{
            src: string
        }>
    }
}
defineProps<{ value: Picture }>()
</script>