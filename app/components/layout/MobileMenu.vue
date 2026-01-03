<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>()
const localePath = useLocalePath()

const closeMenu = () => {
    const event = new CustomEvent('close-mobile-menu')
    window.dispatchEvent(event)
}
const emitClose = () => {
  window.dispatchEvent(new CustomEvent('close-mobile-menu'))
}

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emitClose()
}

let ignoreClick = false
watch(() => props.isOpen, (open) => {
  if (open) {
    ignoreClick = true
    nextTick(() => {
      setTimeout(() => { ignoreClick = false }, 150)
    })
  }
})

const onClick = (e: MouseEvent) => {
  if (ignoreClick) return
  const menu = document.getElementById('mobile-debug-menu')
  if (menu && !menu.contains(e.target as Node)) emitClose()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  window.addEventListener('click', onClick)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('click', onClick)
})
</script>


<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="transform -translate-y-8 opacity-0 blur-lg"
    enter-to-class="transform translate-y-0 opacity-100 blur-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="transform translate-y-0 opacity-100 blur-0"
    leave-to-class="transform -translate-y-8 opacity-0 blur-lg"
  >
    <div
      id="mobile-debug-menu"
      v-show="isOpen"
      class="md:hidden absolute top-14 left-0 w-full min-h-[50vh]
      bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl
      border-b border-zinc-200 dark:border-zinc-700
      p-4 sm:p-6 flex flex-col gap-5 sm:gap-6 overflow-hidden
      rounded-b-2xl text-zinc-800 dark:text-zinc-200"
    >

            <div class="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                <pre class="text-[8px] leading-tight font-mono uppercase text-zinc-500 dark:text-zinc-600">{{ $t('mobile_menu.layout_init') }}
{{ $t('mobile_menu.module_nav') }}
{{ $t('mobile_menu.state') }}</pre>
            </div>

            <div class="flex flex-col gap-1 font-black uppercase text-sm">
                <NuxtLink :to="localePath('/')" @click="closeMenu"
                    class="py-3 px-4 border-b border-zinc-200/30 dark:border-zinc-700/30 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-all duration-200 flex items-center justify-between group">
                    <span>01/{{ $t('nav.home') }}</span>
                    <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#about'" @click="closeMenu"
                    class="py-3 px-4 border-b border-zinc-200/30 dark:border-zinc-700/30 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-all duration-200 flex items-center justify-between group">
                    <span>02/{{ $t('nav.about') }}</span>
                    <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#projects'" @click="closeMenu"
                    class="py-3 px-4 border-b border-zinc-200/30 dark:border-zinc-700/30 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-all duration-200 flex items-center justify-between group">
                    <span>03/{{ $t('nav.projects') }}</span>
                    <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#contact'" @click="closeMenu"
                    class="py-3 px-4 border-b border-zinc-200/30 dark:border-zinc-700/30 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-all duration-200 flex items-center justify-between group">
                    <span>04/{{ $t('nav.contact') }}</span>
                    <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </NuxtLink>
            </div>
            <div class="mt-auto space-y-5 pt-6 border-t border-zinc-200 dark:border-zinc-700">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                        <span
                            class="text-[10px] font-black uppercase text-zinc-500 dark:text-zinc-400 tracking-widest border-l-2 border-green-500 dark:border-green-400 pl-2">
                            {{ $t('mobile_menu.system_config') }}
                        </span>
                    </div>

                    <div class="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
                        <span class="text-xs font-bold text-zinc-600 dark:text-zinc-400">Debug Mode</span>
                        <LogLevelToggle />
                    </div>

                    <div class="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
                        <span class="text-xs font-bold text-zinc-600 dark:text-zinc-400">Theme</span>
                        <ToggleTheme />
                    </div>
                </div>
            </div>

        </div>
    </Transition>
</template>

<style scoped>
::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgb(161 161 170 / 0.3);
    border-radius: 4px;
}
</style>
