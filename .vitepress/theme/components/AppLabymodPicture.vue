<script setup lang="ts">
import labymodPicture from "../assets/labymod.webp?w=60&format=avif;webp;jpg&as=picture";
import AppPicture from './AppPicture.vue';
</script>

<template>
    <a href="https://www.labymod.net/" target="_blank">
        <AppPicture decoding="async" :value="labymodPicture" class="h-15 w-15" alt="labymod" />
    </a>
</template>
