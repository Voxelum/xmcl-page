<template>
    <a class="download-btn-arch-chip" :href="href"
        @click="$emit('click', $event)">
        <span>{{ text }}</span>
    </a>
</template>
<script setup lang="ts">
defineProps<{
    href: string
    text: string
}>()

defineEmits<{
    (event: 'click', ...args: any[]): void
}>()
</script>