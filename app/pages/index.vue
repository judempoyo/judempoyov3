<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { level } = useLogLevel()

useHead({
  title: 'Jude Mpoyo | Backend Systems Engineer',
  meta: [
    { name: 'description', content: 'Full-stack PHP developer (Expert) transitioning to Go, Docker and Cloud/DevOps.' }
  ]
})
</script>
<template>
  <div class="font-mono">

    <!-- Hero Section / Manifest -->
    <section
      class="pt-24 pb-16 px-6 border-b border-zinc-300 dark:border-zinc-700 relative overflow-hidden bg-zinc-50  dark:bg-zinc-800">

      <!-- Background ID Watermark -->
      <div
        class="absolute -top-12 -right-12 text-[12vw] text-zinc-300 dark:text-zinc-700 opacity-10 select-none pointer-events-none">
        0xJM93
      </div>

      <div class="container mx-auto max-w-9xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          <div class="lg:col-span-8 space-y-8 relative z-10 ">

            <!-- Badge Registry -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-2 py-0.5 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-[9px] font-bold uppercase tracking-wider">
                Object: Developer_Profile
              </span>
              <span
                class="px-2 py-0.5 border border-green-500 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 text-[9px] font-bold uppercase tracking-wider">
                Priority: High_Availability
              </span>
              <span
                class="px-2 py-0.5 border border-zinc-300 bg-transparent text-zinc-500 dark:text-zinc-400 text-[9px] font-bold uppercase tracking-wider">
                Ver: 2026.01_STABLE
              </span>
            </div>

            <!-- Hero Titles -->
            <div class="space-y-4">
              <h1
                class="text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.85] text-zinc-900 dark:text-zinc-100">
                <span class="text-green-600 dark:text-green-400 italic">{{ t('hero.role_primary') }}</span>
                <span class="block">
                {{ t('hero.role_secondary') }}.
                </span>
              </h1>
              <div class="flex items-center gap-4 py-2">
                <div class="h-[2px] w-24 bg-zinc-900 dark:bg-zinc-100"></div>
                <span class="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
                  {{ t('hero.manifesto_ver') }}
                </span>
              </div>
            </div>

            <!-- Description -->
            <div class="space-y-6">
              <p
                class="text-sm md:text-base leading-relaxed font-medium uppercase tracking-tight text-zinc-600 dark:text-zinc-400">
                {{ t('hero.description_1') }} <br />
                {{ t('hero.description_2', { target: 'Go & Docker' }) }} <br />
                {{ t('hero.description_3') }}
              </p>
            </div>

            <!-- Call to Actions -->
            <div class="flex flex-col sm:flex-row gap-4 pt-4">

              <NuxtLink :to="localePath('/') + '#projects'" class="inline-flex items-center justify-center h-11 px-8 min-w-[160px]
      bg-zinc-900 dark:bg-zinc-100
      text-zinc-100 dark:text-zinc-900
      text-xs uppercase tracking-widest
      rounded-md shadow-sm
      transform transition-all duration-200 ease-out
      hover:bg-green-600 hover:text-white dark:hover:text-white
      hover:scale-[1.03] active:scale-[0.97]
      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
                {{ t('hero.cta_services') }}
              </NuxtLink>

              <NuxtLink :to="localePath('/') + '#contact'" class="inline-flex items-center justify-center h-11 px-8 min-w-[160px]
      border-2 border-zinc-300 dark:border-zinc-700
      text-xs uppercase tracking-widest
      text-zinc-900 dark:text-zinc-300
      rounded-md shadow-sm
      transform transition-all duration-200 ease-out
      hover:border-zinc-900 dark:hover:border-green-500
      hover:scale-[1.03] active:scale-[0.97]
      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
                {{ t('hero.cta_connect') }}
              </NuxtLink>

            </div>

          </div>

          <!-- Configuration / Stack Visual -->
          <div class="lg:col-span-4 relative scale-95 lg:scale-100 origin-center">
            <YAMLStack />

            <!-- Floating Badge -->
            <div class="absolute -bottom-4 -left-4 bg-green-600 dark:bg-green-400 px-3 py-1.5 shadow-xl rotate-[-2deg]">
              <span class="text-[10px] text-white dark:text-zinc-900 italic uppercase tracking-widest">
                Transition_In_Progress >> Go
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Content Registry -->
    <div class="relative bg-zinc-50 dark:bg-zinc-900">
      <SectionsAbout />
      <SectionsProjects />
      <SectionsContact />
    </div>

  </div>
</template>
