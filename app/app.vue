<script setup lang="ts">
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap' }
  ]
})

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Jude Mpoyo` : 'Jude Mpoyo | Backend Systems Engineer'
  },
  ogTitle: 'Jude Mpoyo | Backend Systems Engineer',
  description: 'Full-stack PHP developer (Expert) transitioning to Go, Docker and Cloud/DevOps. Specialized in backend systems and performance.',
  ogDescription: 'Full-stack PHP developer (Expert) transitioning to Go, Docker and Cloud/DevOps. Specialized in backend systems and performance.',
  ogImage: 'https://jude.jkantech.net/jude/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>



<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
