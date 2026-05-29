<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const { level } = useLogLevel();

const { staggerIn, fadeIn } = useScrollAnimations()
const badgesRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const heroBgRef = ref<HTMLElement | null>(null)
const yamlWrapRef = ref<HTMLElement | null>(null)

useParallax(heroBgRef, 0.25)
useTilt(yamlWrapRef, { maxDeg: 5, scale: 1.02 })

onMounted(() => {

  if (badgesRef.value) {
    const badges = badgesRef.value.querySelectorAll('span')
    staggerIn(badges as any, { stagger: 0.1, y: 20 })
  }

  if (titleRef.value) {
    fadeIn(titleRef.value, { y: 40 })
  }

  if (descriptionRef.value) {
    fadeIn(descriptionRef.value, { y: 30, delay: 0.1 })
  }

  if (ctaRef.value) {
    const buttons = ctaRef.value.querySelectorAll('a')
    staggerIn(buttons as any, { stagger: 0.15, y: 20, delay: 0.2 })
  }
})

useSeoMeta({
  title: 'Jude Mpoyo | Full-stack Developer',
  description: 'Full-stack developer specialized in Laravel, Nuxt, Go and Docker. Building robust backend systems. Based in Kolwezi, DRC.',
  ogUrl: 'https://jude.jkantech.net/jude/',
})
</script>
<template>
  <div class="font-mono">
    <section
      aria-label="Hero – Jude Mpoyo, Full-stack Developer"
      class="relative min-h-screen pt-6 sm:pt-24 pb-16 px-6 border-b border-zinc-200 dark:border-zinc-800 bg-linear-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-black shadow-xl sm:justify-center place-content-center">
      <div ref="heroBgRef" class="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div
          class="absolute -top-12 -right-12 text-[12vw] font-black text-zinc-200 dark:text-zinc-800 opacity-20 animate-float-slow">
          DEVELOPER
        </div>
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-zinc-400 dark:via-zinc-600 to-transparent">
          </div>
          <div
            class="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-zinc-400 dark:via-zinc-600 to-transparent">
          </div>
        </div>
      </div>

      <div class="container mx-auto max-w-350 px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-20 items-start lg:items-center">
          <div class="lg:col-span-8 space-y-4 lg:space-y-6 relative z-10">
            <div ref="badgesRef" class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-2 py-0.5 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-[9px] font-bold uppercase tracking-wider">
                Vue & Nuxt
              </span>
              <span
                class="px-2 py-0.5 border border-green-500 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 text-[9px] font-bold uppercase tracking-wider">
                Laravel & PHP
              </span>
              <span
                class="px-2 py-0.5 border border-zinc-300 bg-transparent text-zinc-500 dark:text-zinc-400 text-[9px] font-bold uppercase tracking-wider">
                Go & Docker
              </span>
            </div>

            <div ref="titleRef" class="space-y-6">
              <h1
                class="text-2xl sm:text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-compact text-zinc-900 dark:text-zinc-100">
                <span
                  class="inline-block animate-shimmer-text">{{ t("hero.role_primary") }}</span>
                <span class="block mt-2 text-zinc-900 dark:text-zinc-100"> {{ t("hero.role_secondary") }}. </span>
              </h1>
              <div class="flex items-center gap-4 py-3">
                <div class="h-0.5 w-20 bg-linear-to-r from-green-600 to-transparent dark:from-green-400"></div>
                <span class="text-xs font-black uppercase tracking-widest-3xl text-zinc-500 dark:text-zinc-400">
                  {{ t("hero.manifesto_ver") }}
                </span>
              </div>
            </div>

            <div ref="descriptionRef" class="space-y-4">
              <p class="text-sm md:text-base lg:text-lg leading-relaxed font-medium text-zinc-700 dark:text-zinc-300">
                {{ t("hero.description_1") }} <br />
                {{ t("hero.description_2", { target: "Go & Docker" }) }} <br />
                {{ t("hero.description_3") }}
              </p>
            </div>

            <div ref="ctaRef" class="flex flex-col sm:flex-row gap-4 pt-4">
              <NuxtLink :to="localePath('/') + '#projects'"
                class="inline-flex items-center justify-center h-11 px-8 min-w-40 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-xs uppercase tracking-widest rounded-md shadow-sm transform transition-all duration-200 ease-out hover:bg-green-600 hover:dark:bg-green-600  hover:text-white dark:hover:text-white hover:scale-103 active:scale-97 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
                {{ t("hero.cta_services") }}
              </NuxtLink>

              <NuxtLink :to="localePath('/') + '#contact'"
                class="inline-flex items-center justify-center h-11 px-8 min-w-40 border-2 border-zinc-300 dark:border-zinc-700 text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-300 rounded-md shadow-sm transform transition-all duration-200 ease-out hover:border-zinc-900 dark:hover:border-green-500 hover:scale-103 active:scale-97 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
                {{ t("hero.cta_connect") }}
              </NuxtLink>
            </div>
          </div>

          <div ref="yamlWrapRef" class="lg:col-span-4 relative mt-8 lg:mt-0 min-w-0">
            <YAMLStack />

            <div class="absolute -bottom-4 -left-4 bg-green-700 dark:bg-green-400 px-3 py-1.5 shadow-xl -rotate-2">

              <span class="text-[10px] text-white dark:text-zinc-950 font-black uppercase tracking-widest">
                Focus : Go & Docker
              </span>

            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="relative bg-zinc-50 dark:bg-zinc-900">
      <SectionsAbout />
      <LazySectionsProjects />
      <LazySectionsContact />
    </div>
  </div>
</template>
