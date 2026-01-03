<script setup lang="ts">
const colorMode = useColorMode()

onMounted(() => {
  if (!colorMode.preference) colorMode.preference = 'system'
})

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly>
    <button @click="toggleTheme" class="group relative flex items-center w-20 h-8 p-1 rounded-lg
        bg-zinc-200 dark:bg-zinc-800/60
        transition-all duration-200 ease-out
        hover:bg-zinc-400/80 dark:hover:bg-zinc-700
        active:scale-95 overflow-hidden"
      :title="colorMode.value === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">

      <div class="absolute inset-y-1 w-[36px] bg-white dark:bg-green-400
          rounded-md flex items-center justify-center shadow-md
          transition-all duration-200 ease-out
          group-hover:scale-105 active:scale-95"
        :class="colorMode.value === 'dark' ? 'left-1' : 'left-[calc(100%-40px)]'">

        <div class="relative w-4 h-4 text-zinc-900 dark:text-black">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
            class="absolute inset-0 transition-all duration-300"
            :class="colorMode.value === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
            class="absolute inset-0 transition-all duration-300"
            :class="colorMode.value === 'light' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
            <path d="m4.93 4.93 1.41 1.41m11.32 11.32 1.41 1.41m-1.41-11.32 1.41-1.41m-11.32 11.32-1.41 1.41" />
          </svg>
        </div>
      </div>

      <div
        class="flex justify-between w-full px-2.5 font-black text-[8px] tracking-tighter text-zinc-900 dark:text-zinc-300 pointer-events-none">
        <span>DARK</span>
        <span>LIGHT</span>
      </div>
    </button>
  </ClientOnly>
</template>
