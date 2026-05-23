<script setup lang="ts">
useSeoSchema()

useSeoMeta({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | Jude Mpoyo` : 'Jude Mpoyo | Full-stack Developer',
  ogTitle: 'Jude Mpoyo | Full-stack Developer',
  description: 'Full-stack developer specialized in Laravel, Vue.js, TypeScript, Go and Docker. Building robust backend systems and production-ready web applications. Based in Kolwezi, DRC.',
  ogDescription: 'Full-stack developer specialized in Laravel, Vue.js, TypeScript, Go and Docker. Building robust backend systems and production-ready web applications.',
  ogImage: 'https://jude.jkantech.net/jude/og-image.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogType: 'website',
  ogUrl: 'https://jude.jkantech.net/jude/',
  ogSiteName: 'Jude Mpoyo Portfolio',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jude Mpoyo | Full-stack Developer',
  twitterDescription: 'Full-stack developer specialized in Laravel, Vue.js, Go and Docker.',
  twitterImage: 'https://jude.jkantech.net/jude/og-image.png',
})

if (import.meta.client && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/jude/sw.js', { scope: '/jude/' })
}
</script>

<template>
  <TimeEasterEgg />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
