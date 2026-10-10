<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
const { t } = useI18n()
</script>

<template>
  <div class="site-frame">
    <a class="skip-link" href="#main-content">{{ t('design.skip') }}</a>
    <Header />
    <main id="main-content"><slot /></main>
    <Footer />
  </div>
</template>
