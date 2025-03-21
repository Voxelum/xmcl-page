<script setup lang="ts">
import fabricPicture from "../assets/fabric.png?w=60&format=avif;webp;jpg&as=picture";
import AppPicture from './AppPicture.vue';
</script>

<template>
    <a href="https://fabricmc.net/" target="_blank">
        <AppPicture decoding="async" :value="fabricPicture" class="h-15 w-15" alt="fabric" />
    </a>
</template>