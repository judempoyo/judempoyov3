<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const asset = usePublicAsset()
const origin = computed(() => String(config.public.siteUrl).replace(/\/+$/, ''))
const imageUrl = computed(() => `${origin.value}${asset('og-image.png')}`)
const homeUrl = computed(() => `${origin.value}${config.app.baseURL}`)
const pageUrl = computed(() => `${homeUrl.value}${locale.value === 'fr' ? 'fr/' : ''}`)
const { projects } = useProjects()
useHead({ htmlAttrs: { lang: () => locale.value } })
useSeoMeta({
  titleTemplate: title => title ? `${title} | Jude Mpoyo` : 'Jude Mpoyo',
  ogTitle: () => `Jude Mpoyo | ${t('design.seo_title')}`,
  description: () => t('design.seo_description'),
  ogDescription: () => t('design.seo_description'),
  ogSiteName: 'Jude Mpoyo',
  ogImage: () => imageUrl.value,
  ogImageAlt: () => t('design.social_image_alt'),
  twitterImageAlt: () => t('design.social_image_alt'),
  twitterImage: () => imageUrl.value,
  twitterCard: 'summary_large_image',
  ogType: 'website',
})
useHead(() => ({
  script: [{
    key: 'person-schema',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${homeUrl.value}#person`,
          name: 'Jude Mpoyo',
          url: homeUrl.value,
          image: `${origin.value}${asset('judepic.jpeg')}`,
          jobTitle: locale.value === 'fr' ? 'Développeur full-stack' : 'Full-stack developer',
          address: { '@type': 'PostalAddress', addressLocality: 'Kolwezi', addressCountry: 'CD' },
          sameAs: ['https://github.com/judempoyo', 'https://www.linkedin.com/in/judempoyo'],
        },
        {
          '@type': 'ProfilePage',
          '@id': `${pageUrl.value}#profile`,
          url: pageUrl.value,
          name: `Jude Mpoyo | ${t('design.seo_title')}`,
          description: t('design.seo_description'),
          inLanguage: locale.value,
          mainEntity: { '@id': `${homeUrl.value}#person` },
          hasPart: projects.value.map(project => ({
            '@type': 'CreativeWork',
            name: t(project.titleKey),
            description: `${t(project.descriptionKey)} ${t(project.roleKey)}`,
            url: project.liveUrl || project.docsUrl,
          })),
        },
      ],
    }).replace(/</g, '\\u003c'),
  }],
}))
</script>



<template>
  <TimeEasterEgg />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
