<script setup lang="ts">
const progress = ref(0)
let rafId: number

const updateProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
  rafId = requestAnimationFrame(updateProgress)
}

onMounted(() => {
  rafId = requestAnimationFrame(updateProgress)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none"
    aria-hidden="true"
  >
    <div
      class="h-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 origin-left transition-none"
      :style="{ transform: `scaleX(${progress})` }"
    />
  </div>
</template>
