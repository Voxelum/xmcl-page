<template>
    <a class="ui left pointing label" :href="href"
        @click="$emit('click', $event)">
        {{ text }}
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