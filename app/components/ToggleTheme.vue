<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()
const toggle = () => { colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark' }
</script>

<template>
  <button type="button" class="theme-switch" :aria-label="t('design.toggle_theme')" @click="toggle">
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" />
    </svg>
  </button>
</template>
