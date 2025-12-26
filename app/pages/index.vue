<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: 'Jude Mpoyo_ [SYSTEM ARCHITECT]',
  meta: [
    { name: 'description', content: t('hero.subheadline') }
  ]
})
</script>

<template>
  <div
    class="relative min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-primary-foreground">
    <!-- Grid Overlay -->
    <div class="fixed inset-0 pointer-events-none z-0"
      style="background-image: linear-gradient(to right, oklch(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, oklch(var(--border)) 1px, transparent 1px); background-size: 80px 80px; opacity: 0.1;">
    </div>

    <!-- Hero Section -->
    <section class="relative z-10 min-h-screen flex flex-col justify-center pt-20 border-b border-border">
      <div class="container mx-auto px-4">

        <div class="max-w-5xl border-l border-border pl-8 ml-4 md:ml-0">
          <div class="text-xs md:text-sm text-muted-foreground mb-4 tracking-widest uppercas flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 animate-pulse"></span>
            {{ $t('hero.greeting') }}
          </div>

          <h1 class="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-foreground">
            BACKEND<br>
            <span class="text-stroke text-transparent"
              style="-webkit-text-stroke: 2px currentColor; opacity: 0.5">ARCHITECT</span><br>
            & DEV_
          </h1>

          <p class="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-light">
            {{ $t('hero.subheadline') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-0 border border-border w-fit">
            <NuxtLink :to="localePath('/') + '#projects'"
              class="inline-flex items-center justify-center h-16 px-10 bg-primary text-primary-foreground text-lg font-bold hover:bg-primary/90 transition-colors border-b sm:border-b-0 sm:border-r border-border">
              {{ $t('hero.cta_projects') }}
              <span class="ml-2">-></span>
            </NuxtLink>

            <NuxtLink :to="localePath('/') + '#contact'"
              class="inline-flex items-center justify-center h-16 px-10 bg-background text-foreground text-lg font-bold hover:bg-muted transition-colors">
              {{ $t('hero.cta_contact') }}
            </NuxtLink>
          </div>
        </div>

      </div>

      <!-- Scrolling Ticker -->
      <div class="mt-auto w-full overflow-hidden border-t border-border py-4 bg-muted/20">
        <div class="whitespace-nowrap animate-marquee text-xs font-bold tracking-[0.2em] text-muted-foreground">
          LARAVEL // SYSTEM DESIGN // GOLANG // DOCKER // KUBERNETES // POSTGRESQL // VUE.JS // NUXT // API ARCHITECTURE
          // CI/CD // LINUX //
          LARAVEL // SYSTEM DESIGN // GOLANG // DOCKER // KUBERNETES // POSTGRESQL // VUE.JS // NUXT // API ARCHITECTURE
          // CI/CD // LINUX //
        </div>
      </div>
    </section>

    <!-- Sections -->
    <SectionsAbout />
    <SectionsProjects />
    <SectionsContact />
  </div>
</template>

<style scoped>
.animate-marquee {
  display: inline-block;
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
