<script setup lang="ts">
defineProps<{
  show: boolean
}>()

const emit = defineEmits(['update:show'])

const close = () => {
  emit('update:show', false)
}


onMounted(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }
  window.addEventListener('keydown', handleEsc)
  onUnmounted(() => window.removeEventListener('keydown', handleEsc))
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="show" @click="close"
        class="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 backdrop-blur-md p-4">
        <div class="relative w-full max-w-sm transform transition-all" @click.stop>

          <!-- Card Container -->
          <div
            class="relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl dark:shadow-green-900/20 border border-zinc-200 dark:border-zinc-800">

            <!-- Glow Effect -->
            <div
              class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent">
            </div>

            <!-- Image Section -->
            <div class="relative h-64 sm:h-72 w-full overflow-hidden group">
              <img src="/judepic.jpeg" alt="Jude Mpoyo"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-90">
              </div>

              <!-- Floating Badge -->
              <div class="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div
                  class="px-3 py-1.5 rounded-full bg-zinc-950/30 backdrop-blur-md border border-white/10 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span class="text-[10px] font-black uppercase tracking-widest text-white/90">Identity_Revealed</span>
                </div>

                <button @click="close"
                  class="p-2 rounded-full bg-zinc-950/30 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Name & Title -->
              <div class="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                <h3 class="text-2xl font-black text-white tracking-tight">Jude Mpoyo</h3>
                <p class="text-sm font-medium text-green-400 font-mono">Full-stack Developer</p>
              </div>
            </div>

            <!-- Details Section -->
            <div class="p-6 bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="p-3 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-center space-y-1">
                  <span class="block text-[10px] uppercase font-bold text-zinc-400">Level</span>
                  <span class="block text-sm font-black text-zinc-700 dark:text-zinc-200">2026.1</span>
                </div>
                <div
                  class="p-3 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-center space-y-1">
                  <span class="block text-[10px] uppercase font-bold text-zinc-400">Class</span>
                  <span class="block text-sm font-black text-zinc-700 dark:text-zinc-200">Builder</span>
                </div>
              </div>

              <p class="text-xs text-center text-zinc-500 dark:text-zinc-500 font-medium pt-2">
                Easter egg unlocked. Press ESC to close.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
