<script setup lang="ts">
import SystemNavBar from './SystemNavBar.vue'
import MobileMenu from './MobileMenu.vue'

const localePath = useLocalePath()
const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

watch(() => useRoute().path, () => {
    isMenuOpen.value = false
})
onMounted(() => {
    window.addEventListener('close-mobile-menu', () => {
        isMenuOpen.value = false
    })
})

const closeMenu = (() => {
    if (isMenuOpen)  isMenuOpen.value = false 
})
</script>

<template>
    <header>
        <SystemNavBar />

        <div
            class="fixed top-8 w-full z-50 bg-zinc-100/80 dark:bg-zinc-800/90 backdrop-blur-sm shadow-md transition-all duration-300 text-zinc-900 dark:text-zinc-300">
            <div class="container mx-auto px-6 h-14 flex justify-between items-center">
                <div class="flex items-center gap-6">
                    <NuxtLink :to="localePath('/')"
                        class="text-sm  tracking-tighter hover:text-primary transition-all flex items-center gap-2">
                        <span class="bg-foreground text-background px-1.5 py-0.5 select-none">JM</span>
                        <span class="hidden sm:inline">JUDE_MPOYO</span>
                    </NuxtLink>

                    <div class="hidden md:block scale-90 origin-left">
                        <LogLevelToggle />
                    </div>
                </div>
               
                <nav class="hidden md:flex items-center gap-1 text-[11px] font-bold uppercase">
                    <NuxtLink :to="localePath('/')"
                        class="px-3 py-1.5 hover:bg-muted border border-transparent hover:border-border transition-all">
                        01/{{ $t('nav.home') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#about'"
                        class="px-3 py-1.5 hover:bg-muted border border-transparent hover:border-border transition-all">
                        02/{{ $t('nav.about') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#projects'"
                        class="px-3 py-1.5 hover:bg-muted border border-transparent hover:border-border transition-all">
                        03/{{ $t('nav.projects') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#contact'"
                        class="px-3 py-1.5 hover:bg-muted border border-transparent hover:border-border transition-all">
                        04/{{ $t('nav.contact') }}
                    </NuxtLink>

                    <div class="h-4 w-[1px] bg-border mx-3"></div>

                    <div class="flex items-center gap-2">
                        <ToggleTheme />
                        <LanguageSelector />
                    </div>
                </nav>

                <div class="md:hidden flex items-center gap-2 scale-90 origin-right">
                    <LanguageSelector class="z-50" @click="closeMenu"/>
                    <!-- <ToggleTheme /> -->
                <button @click="toggleMenu"
                    class="md:hidden flex items-center gap-2 px-2 py-1 text-xs font-black uppercase  bg-muted/50 rounded-xs">
                    <span>Menu</span>
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="4" x2="20" y1="9" y2="9" />
                        <line x1="4" x2="20" y1="15" y2="15" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
            </div>

            <MobileMenu :is-open="isMenuOpen" />
        </div>
    </header>
</template>
