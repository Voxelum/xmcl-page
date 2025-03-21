<script setup lang="ts">
import AppPicture from './AppPicture.vue';
import neoforgedPicture from "../assets/neoforged.png?w=60&format=avif;webp;jpg&as=picture";
</script>

<template>
    <a href="https://neoforged.net/" target="_blank" class="relative">
        <AppPicture decoding="async" :value="neoforgedPicture" class="h-15 w-15" alt="neoforged" />
    </a>
</template>