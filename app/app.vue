<script setup lang="ts">
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
  <TimeEasterEgg />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
