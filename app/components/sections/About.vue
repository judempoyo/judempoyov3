<script setup lang="ts">
const { t } = useI18n()
const { isDebug } = useLogLevel()
</script>

<template>
  <section id="about" class="py-24 px-6 relative overflow-hidden bg-background dark:bg-zinc-900 text-foreground">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <!-- Left Side: Narrative -->
        <div class="lg:col-span-12 xl:col-span-7 space-y-10">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="text-xs font-black text-primary dark:text-primary-light uppercase tracking-[0.3em]">
                {{ t('about.section_id') }}
              </span>
              <div class="h-[1px] w-12 bg-primary dark:bg-primary-light"></div>
            </div>
            <h2 class="text-4xl md:text-5xl font-black tracking-tighter max-w-xl text-foreground dark:text-zinc-100">
              {{ t('about.title') }}
            </h2>
          </div>

          <div
            class="space-y-6 text-sm md:text-base leading-relaxed font-medium max-w-2xl text-muted-foreground dark:text-zinc-400">
            <p>{{ t('about.bio_1') }}</p>
            <p>{{ t('about.bio_2') }}</p>
          </div>

          <!-- Technical Specs (DEBUG view) -->
          <Transition enter-active-class="transition duration-500 delay-200" enter-from-class="opacity-0 translate-x-4"
            enter-to-class="opacity-100 translate-x-0">
            <div v-if="isDebug"
              class="p-6 border border-border dark:border-zinc-700 bg-muted/20 dark:bg-zinc-800/30 space-y-4 rounded-md">
              <span class="text-[10px] font-black uppercase text-muted-foreground/60 dark:text-zinc-500">
                {{ t('about.specs.title') }}
              </span>
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="space-y-1">
                  <span
                    class="block text-[9px] font-bold text-muted-foreground dark:text-zinc-400 uppercase">OS_ENV</span>
                  <span class="block text-xs font-black uppercase tracking-widest text-foreground dark:text-zinc-100">{{
                    t('about.specs.os') }}</span>
                </div>
                <div class="space-y-1">
                  <span
                    class="block text-[9px] font-bold text-muted-foreground dark:text-zinc-400 uppercase">ENGINE_PHASE</span>
                  <span class="block text-xs font-black uppercase tracking-widest text-foreground dark:text-zinc-100">{{
                    t('about.specs.phase') }}</span>
                </div>
                <div class="space-y-1">
                  <span
                    class="block text-[9px] font-bold text-muted-foreground dark:text-zinc-400 uppercase">ARCH_PREF</span>
                  <span class="block text-xs font-black uppercase tracking-widest text-foreground dark:text-zinc-100">{{
                    t('about.specs.arch') }}</span>
                </div>
                <div class="space-y-1">
                  <span
                    class="block text-[9px] font-bold text-muted-foreground dark:text-zinc-400 uppercase">REG_CODE</span>
                  <span class="block text-xs font-black uppercase tracking-widest text-foreground dark:text-zinc-100">{{
                    t('about.specs.reg') }}</span>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Right Side: Technical Journey Logs -->
        <div class="lg:col-span-12 xl:col-span-5 space-y-8">
          <div
            class="p-8 border border-border dark:border-zinc-700 bg-background dark:bg-zinc-900 shadow-technical rounded-md">
            <div class="flex items-center justify-between mb-8 pb-4 border-b border-border/50 dark:border-zinc-700">
              <span class="text-[10px] font-black uppercase tracking-widest text-muted-foreground dark:text-zinc-400">
                {{ t('journey.title') }}
              </span>
              <span class="text-[10px] font-mono text-muted-foreground/60 dark:text-zinc-400">
                {{ t('journey.mode') }}
              </span>
            </div>

            <JourneyLogs />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div
              class="p-4 border border-border dark:border-zinc-700 text-center rounded-md bg-background dark:bg-zinc-900">
              <span class="block text-2xl font-black italic text-foreground dark:text-zinc-100">04+</span>
              <span class="text-[9px] font-bold uppercase text-muted-foreground dark:text-zinc-400 tracking-widest">
                {{ t('about.stats.exp') }}
              </span>
            </div>
            <div
              class="p-4 border border-border dark:border-zinc-700 text-center rounded-md bg-background dark:bg-zinc-900">
              <span class="block text-2xl font-black italic text-foreground dark:text-zinc-100">15+</span>
              <span class="text-[9px] font-bold uppercase text-muted-foreground dark:text-zinc-400 tracking-widest">
                {{ t('about.stats.services') }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-technical {
  box-shadow: 10px 10px 0px 0px rgba(0, 85, 255, 0.05);
}
</style>
