<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="site-footer shell">
    <span class="footer-signature">Jude Mpoyo<span class="accent">.</span></span>
    <span class="annotation">Kolwezi, {{ t('design.country') }} · UTC+2</span>
   
    <a href="https://github.com/judempoyo" target="_blank" rel="noopener noreferrer" class="text-link">GitHub ↗</a>
  </footer>
</template>
