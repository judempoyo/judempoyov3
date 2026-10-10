<script setup lang="ts">
const { t } = useI18n()
const { openTerminal } = useTerminal()
</script>

<template>
  <footer class="site-footer shell">
    <span class="footer-signature">Jude Mpoyo<span class="accent">.</span></span>
    <span class="annotation">Kolwezi, {{ t('design.country') }} · UTC+2</span>
    <button type="button" class="text-link" @click="openTerminal"><span aria-hidden="true">&gt;_</span> {{
      t('terminal.open') }}</button>
    <a href="https://github.com/judempoyo" target="_blank" rel="noopener noreferrer" class="text-link">GitHub ↗</a>
  </footer>
</template>
