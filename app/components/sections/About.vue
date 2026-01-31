<script setup lang="ts">
const { t } = useI18n();

// Scroll animations
const { fadeIn, staggerIn, slideIn } = useScrollAnimations()
const sectionHeaderRef = ref<HTMLElement | null>(null)
const bioRef = ref<HTMLElement | null>(null)
const specsRef = ref<HTMLElement | null>(null)
const journeyRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Section header animation
  if (sectionHeaderRef.value) {
    fadeIn(sectionHeaderRef.value, { y: 30, duration: 0.8 })
  }

  // Bio paragraphs stagger
  if (bioRef.value) {
    const paragraphs = bioRef.value.querySelectorAll('p')
    staggerIn(paragraphs as any, { stagger: 0.2, y: 20 })
  }

  // Specs box slide in
  if (specsRef.value) {
    slideIn(specsRef.value, 'bottom', { y: 40, duration: 0.8 })
  }

  // Journey box slide in
  if (journeyRef.value) {
    const isMobile = window.innerWidth < 1024
    if (isMobile) {
      slideIn(journeyRef.value, 'bottom', { y: 40, duration: 0.8 })
    } else {
      slideIn(journeyRef.value, 'right', { x: 40, duration: 0.8 })
    }
  }
})

// Easter egg state
const showPhoto = ref(false);
const clickCount = ref(0);
let clickTimer: ReturnType<typeof setTimeout> | null = null;

// Triple-click easter egg on name
const handleNameClick = () => {
  clickCount.value++;

  if (clickTimer) clearTimeout(clickTimer);

  if (clickCount.value === 3) {
    showPhoto.value = true;
    clickCount.value = 0;
  }

  clickTimer = setTimeout(() => {
    clickCount.value = 0;
  }, 500);
};

// Keyboard shortcut: Ctrl+Shift+J
onMounted(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      showPhoto.value = !showPhoto.value;
    }
  };
  window.addEventListener("keydown", handleKeyPress);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress);
  });
});
</script>

<template>
  <PhotoModal v-model:show="showPhoto" />

  <section id="about"
    class="py-24 px-6 bg-white dark:bg-black border-b border-zinc-300 dark:border-zinc-700 min-h-screen">
    <div class="container mx-auto max-w-[1400px]">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
        <div class="lg:col-span-8 space-y-8">
          <div ref="sectionHeaderRef" class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="text-xs font-extrabold text-green-600 dark:text-green-400 uppercase tracking-widest-xl">
                {{ t("about.section_id") }}
              </span>
              <div class="h-[2px] w-14 bg-green-600 dark:bg-green-400 opacity-70"></div>
            </div>
            <h2 class="text-lg md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 cursor-help"
              @click="handleNameClick">
              {{ t("about.title") }}
            </h2>
          </div>

          <div ref="bioRef" class="space-y-4 text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-400">
            <p>{{ t("about.bio_1") }}</p>
            <p>{{ t("about.bio_2") }}</p>
            <p>{{ t("about.bio_3") }}</p>
          </div>

          <div ref="specsRef"
            class="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl">
            <h3 class="text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-600 mb-4">
              {{ t("about.specs.title") }}
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[11px] md:text-xs font-mono">
              <div class="break-words">
                <span class="text-green-600 dark:text-green-400">OS_ENV:</span>
                <span class="ml-2 text-zinc-800 dark:text-zinc-300">{{
                  t("about.specs.os")
                }}</span>
              </div>

              <div class="break-words">
                <span class="text-green-600 dark:text-green-400">ENGINE_PHASE:</span>
                <span class="ml-2 text-zinc-800 dark:text-zinc-300">{{
                  t("about.specs.phase")
                }}</span>
              </div>

              <div class="break-words">
                <span class="text-green-600 dark:text-green-400">ARCH_PREF:</span>
                <span class="ml-2 text-zinc-800 dark:text-zinc-300">{{
                  t("about.specs.arch")
                }}</span>
              </div>

              <div class="break-words">
                <span class="text-green-600 dark:text-green-400">REG_CODE:</span>
                <span class="ml-2 text-zinc-800 dark:text-zinc-300">{{
                  t("about.specs.reg")
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4">
          <div ref="journeyRef" class="sticky top-24">
            <div
              class="p-4 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl w-full max-w-full">
              <div class="flex items-center justify-between mb-4">
                <h3
                  class="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-600">
                  {{ t("journey.title") }}
                </h3>
                <span
                  class="text-[8px] sm:text-[9px] font-bold px-2 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">
                  {{ t("journey.mode") }}
                </span>
              </div>

              <div class="overflow-y-auto pr-2 pl-4 custom-scrollbar max-h-[300px] sm:max-h-none">
                <JourneyLogs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgb(161 161 170 / 0.3);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgb(161 161 170 / 0.5);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgb(113 113 122 / 0.3);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgb(113 113 122 / 0.5);
}
</style>
