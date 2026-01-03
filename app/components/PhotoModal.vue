<script setup lang="ts">
defineProps<{
  show: boolean
}>()

const emit = defineEmits(['update:show'])

const close = () => {
  emit('update:show', false)
}

// Close on ESC
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
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer">
        <div class="relative max-w-md w-full mx-4" @click.stop>
          <div class="bg-zinc-900 border-2 border-green-500 rounded-2xl p-6 shadow-2xl">
            <!-- Header -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span class="text-xs font-black uppercase tracking-wider text-green-400">IDENTITY_REVEALED</span>
              </div>
              <button @click="close"
                class="text-zinc-400 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <!-- Photo -->
            <div class="relative overflow-hidden rounded-xl border border-zinc-700">
              <img src="/judepic.jpeg" alt="Jude Mpoyo" 
                class="w-full h-auto object-cover" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p class="text-white font-bold text-lg">Jude Mpoyo</p>
                <p class="text-green-400 text-sm font-mono">Full-stack Developer</p>
              </div>
            </div>
            
            <!-- Footer -->
            <div class="mt-4 text-center">
              <p class="text-xs text-zinc-500 font-mono">
                Easter egg activated! Press ESC or click outside to close.
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
