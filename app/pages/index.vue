<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: 'Jude Mpoyo | Architect',
  meta: [
    { name: 'description', content: t('hero.subheadline') }
  ]
})
</script>

<template>
  <div
    class="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">

    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 border-b border-border">
      <div>
        <h1 class="text-[12vw] leading-[0.8] font-bold tracking-tighter mb-8">
          JUDE<br>MPOYO
        </h1>
        <div class="max-w-xl">
          <p class="text-xl md:text-2xl font-medium leading-tight mb-8">
            {{ $t('hero.role') }}
          </p>
          <p class="text-muted-foreground text-lg leading-relaxed mb-8">
            {{ $t('hero.subheadline') }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-6">
        <NuxtLink :to="localePath('/') + '#projects'"
          class="text-sm font-bold tracking-widest uppercase hover:underline underline-offset-4">
          ( {{ $t('hero.cta_projects') }} )
        </NuxtLink>
        <NuxtLink :to="localePath('/') + '#contact'"
          class="text-sm font-bold tracking-widest uppercase hover:underline underline-offset-4">
          ( {{ $t('hero.cta_contact') }} )
        </NuxtLink>
      </div>
    </section>

    <!-- Sections -->
    <SectionsAbout />
    <SectionsProjects />
    <SectionsContact />
  </div>
</template>
