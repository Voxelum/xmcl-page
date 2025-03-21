<script setup lang="ts">
import AppPicture from './AppPicture.vue';
import forgePicture from "../assets/forge.png?w=60&format=avif;webp;jpg&as=picture";
</script>

<template>
    <a href="https://files.minecraftforge.net/net/minecraftforge/forge/" target="_blank" class="relative">
        <AppPicture decoding="async" :value="forgePicture" class="h-15 w-15" alt="forge" />
    </a>
</template>