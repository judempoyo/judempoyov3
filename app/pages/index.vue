<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: 'Jude Mpoyo | Backend Architect & Solution',
  meta: [
    { name: 'description', content: t('hero.subheadline') }
  ]
})
</script>

<template>
  <div class="bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">

    <!-- Hero Section -->
    <section class="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div class="container mx-auto max-w-5xl text-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
          <span class="w-2 h-2 rounded-full bg-green-500"></span>
          Available for freelance projects
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-foreground">
          {{ $t('hero.role') }}
        </h1>

        <p class="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {{ $t('hero.subheadline') }}
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink :to="localePath('/') + '#projects'"
            class="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            {{ $t('hero.cta_projects') }}
          </NuxtLink>

          <NuxtLink :to="localePath('/') + '#contact'"
            class="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-input bg-background hover:bg-muted font-medium transition-colors">
            {{ $t('hero.cta_contact') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Sections -->
    <SectionsAbout />
    <SectionsProjects />
    <SectionsContact />
  </div>
</template>
