<template>
    <a class="ui huge download labeled button w-full duration-350!"
        :class="{ disabled: disabled, '2xl:w-[45%]': organized, 'md:w-auto': !organized, icon: !!icon }"
        :href="href" @click="$emit('click', $event)">
        <i v-if="icon" class="icon">
            <div :class="icon" />
        </i>
        <span>{{ text }}</span>
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