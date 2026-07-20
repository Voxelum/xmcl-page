<template>
    <a class="download-btn-base"
        :class="{ disabled: disabled, 'w-full': organized }"
        :href="href" @click="$emit('click', $event)">
        <span v-if="icon" class="btn-icon">
            <div :class="icon" />
        </span>
        <span class="btn-text">{{ text }}</span>
    </a>
</template>
<script setup lang="ts">
defineProps<{
    disabled?: boolean
    organized?: boolean
    icon?: string
    href: string
    text: string
}>()

defineEmits<{
    (event: 'click', ...args: any[]): void
}>()
</script>