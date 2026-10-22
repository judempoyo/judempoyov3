<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav class="language-switch" aria-label="Language / Langue">
    <NuxtLink v-for="code in (['en', 'fr'] as const)" :key="code" :to="switchLocalePath(code)" :lang="code" :aria-label="code === 'en' ? 'English' : 'Français'" :aria-current="locale === code ? 'page' : undefined">{{ code.toUpperCase() }}</NuxtLink>
  </nav>
</template>
