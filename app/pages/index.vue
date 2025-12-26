<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: 'Jude Mpoyo | Backend Architect & Dev',
  meta: [
    { name: 'description', content: t('hero.subheadline') }
  ]
})
</script>

<template>
  <div
    class="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
    <!-- Grid Pattern Background -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
      style="background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); background-size: 40px 40px;">
    </div>

    <!-- Hero Section -->
    <section class="relative z-10 min-h-screen flex items-center pt-20">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <!-- Content Left -->
          <div class="max-w-3xl">
            <!-- Terminal Badge -->
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted text-primary border border-border font-mono text-xs font-bold tracking-wide mb-8">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {{ $t('hero.greeting') }}
            </div>

            <h1 class="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-foreground">
              {{ $t('hero.role') }}
            </h1>

            <p class="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl border-l-4 border-primary pl-6 py-2">
              {{ $t('hero.subheadline') }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink :to="localePath('/') + '#projects'"
                class="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                {{ $t('hero.cta_projects') }}
              </NuxtLink>

              <NuxtLink :to="localePath('/') + '#contact'"
                class="inline-flex items-center justify-center h-12 px-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                {{ $t('hero.cta_contact') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Technical Visual Right (Abstract System Architecture) -->
          <div class="hidden lg:block relative">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl dark:opacity-40">
            </div>

            <div class="relative bg-card border border-border rounded-xl p-8 shadow-2xl font-mono text-sm">
              <!-- Header -->
              <div class="flex justify-between items-center mb-8 pb-4 border-b border-border">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-destructive"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span class="text-muted-foreground">system_monitor.sh</span>
              </div>

              <!-- Metrics -->
              <div class="space-y-6">
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-muted-foreground">CLUSTER_STATUS</span>
                    <span class="text-green-500 font-bold">HEALTHY</span>
                  </div>
                  <div class="h-2 bg-muted rounded-full overflow-hidden">
                    <div class="h-full bg-green-500 w-full animate-pulse"></div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="p-4 bg-muted/50 rounded-lg border border-border">
                    <span class="block text-xs text-muted-foreground mb-1">UPTIME</span>
                    <span class="text-xl font-bold text-foreground">99.99%</span>
                  </div>
                  <div class="p-4 bg-muted/50 rounded-lg border border-border">
                    <span class="block text-xs text-muted-foreground mb-1">REQ/SEC</span>
                    <span class="text-xl font-bold text-foreground">14.5K</span>
                  </div>
                </div>

                <div class="pt-4 border-t border-border">
                  <div class="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span class="text-primary">➜</span>
                    <span>detecting_stack...</span>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">Laravel</span>
                    <span class="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">Go</span>
                    <span class="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">Docker</span>
                    <span class="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">Nuxt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Sections -->
    <SectionsAbout />
    <SectionsProjects />
    <SectionsContact />
  </div>
</template>
