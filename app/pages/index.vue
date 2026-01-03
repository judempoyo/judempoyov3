<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const { level } = useLogLevel();

useHead({
  title: "Jude Mpoyo | Full-stack Developer",
  meta: [
    {
      name: "description",
      content:
        "Full-stack developer passionate about building robust web solutions. Laravel, Vue.js, TypeScript, Go, Flutter, Docker. Based in Kolwezi, DRC.",
    },
    // OpenGraph tags
    { property: "og:title", content: "Jude Mpoyo | Full-stack Developer" },
    { property: "og:description", content: "Full-stack developer passionate about building robust web solutions. Laravel, Vue.js, TypeScript, Go, Flutter, Docker." },
    { property: "og:image", content: "/og-image.png" },
    { property: "og:type", content: "website" },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Jude Mpoyo | Full-stack Developer" },
    { name: "twitter:description", content: "Full-stack developer passionate about building robust web solutions. Laravel, Vue.js, TypeScript, Go, Flutter, Docker." },
    { name: "twitter:image", content: "/og-image.png" },
  ],
});
</script>
<template>
  <div class="font-mono">
    <section
      class="relative pt-6 sm:pt-24 pb-16 px-6 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-black shadow-xl">
      <div
        class="absolute -top-12 -right-12 text-[12vw] font-black text-zinc-200 dark:text-zinc-800 opacity-20 select-none pointer-events-none">
        0xJM93
      </div>

      <div class="absolute inset-0 pointer-events-none opacity-10">
        <div
          class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-400 dark:via-zinc-600 to-transparent">
        </div>
        <div
          class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-400 dark:via-zinc-600 to-transparent">
        </div>
      </div>

      <div class="container mx-auto max-w-[1400px] px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-20 items-start lg:items-center">
          <div class="lg:col-span-8 space-y-4 lg:space-y-6 relative z-10">
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

            <div class="space-y-6">
              <h1
                class="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-zinc-900 dark:text-zinc-100">
                <span
                  class="inline-block bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent italic">{{
                    t("hero.role_primary") }}</span>
                <span class="block mt-2"> {{ t("hero.role_secondary") }}. </span>
              </h1>
              <div class="flex items-center gap-4 py-3">
                <div class="h-0.5 w-20 bg-gradient-to-r from-green-600 to-transparent dark:from-green-400"></div>
                <span class="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
                  {{ t("hero.manifesto_ver") }}
                </span>
              </div>
            </div>


            <div class="space-y-4">
              <p class="text-sm md:text-base lg:text-lg leading-relaxed font-medium text-zinc-700 dark:text-zinc-300">
                {{ t("hero.description_1") }} <br />
                {{ t("hero.description_2", { target: "Go & Docker" }) }} <br />
                {{ t("hero.description_3") }}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <NuxtLink :to="localePath('/') + '#projects'"
                class="inline-flex items-center justify-center h-11 px-8 min-w-[160px] bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-xs uppercase tracking-widest rounded-md shadow-sm transform transition-all duration-200 ease-out hover:bg-green-600 hover:text-white dark:hover:text-white hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
                {{ t("hero.cta_services") }}
              </NuxtLink>

              <NuxtLink :to="localePath('/') + '#contact'"
                class="inline-flex items-center justify-center h-11 px-8 min-w-[160px] border-2 border-zinc-300 dark:border-zinc-700 text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-300 rounded-md shadow-sm transform transition-all duration-200 ease-out hover:border-zinc-900 dark:hover:border-green-500 hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
                {{ t("hero.cta_connect") }}
              </NuxtLink>
            </div>
          </div>

          <div class="lg:col-span-4 relative mt-8 lg:mt-0">
            <YAMLStack />

            <div class="absolute -bottom-4 -left-4 bg-green-600 dark:bg-green-400 px-3 py-1.5 shadow-xl rotate-[-2deg]">
              <span class="text-[10px] text-white dark:text-zinc-900 italic uppercase tracking-widest">
                Transition_In_Progress >> Go
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="relative bg-zinc-50 dark:bg-zinc-900">
      <SectionsAbout />
      <SectionsProjects />
      <SectionsContact />
    </div>
  </div>
</template>
