<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface LocaleObject {
    code: string
    name?: string
    [key: string]: any
}

const { locale, locales, setLocale } = useI18n()

const localeList = computed(() => locales.value as LocaleObject[])
const isDropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const selectLocale = (code: string) => {
    setLocale(code as any)
    isDropdownOpen.value = false
}

const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        isDropdownOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div class="relative inline-block text-left" ref="dropdownRef">
        <!-- Technical Terminal Trigger -->
        <button @click="toggleDropdown"
            class="flex items-center gap-3 px-3 py-1.5  bg-zinc-100 dark:bg-zinc-950/50 hover:bg-zinc-50 dark:hover:bg-zinc-950/40 rounded-md transition-all duration-300 group overflow-hidden relative">

            <div class="flex flex-col items-start leading-none">
                <span
                    class="text-[7px] hidden sm:block font-black text-muted-foreground uppercase tracking-tighter mb-0.5">Locale_ID</span>
                <span
                    class="text-[11px] font-black uppercase text-foreground group-hover:text-primary transition-colors">
                    {{ locale }}
                </span>
            </div>

            <div class="h-4 w-[1px] bg-border/50"></div>

            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter"
                class="transition-transform duration-500 text-zinc-500 group-hover:text-primary"
                :class="{ 'rotate-180': isDropdownOpen }">
                <path d="m6 9 6 6 6-6" />
            </svg>

            <!-- Decorative Scanning Line -->
            <div
                class="absolute bottom-0 left-0 h-[1px] bg-primary/20 w-0 group-hover:w-full transition-all duration-700">
            </div>
        </button>

        <!-- Terminal Dropdown Container -->
        <Transition enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform -translate-y-2 opacity-0 scale-95 blur-sm"
            enter-to-class="transform translate-y-0 opacity-100 scale-100 blur-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-y-0 opacity-100 scale-100 blur-0"
            leave-to-class="transform -translate-y-2 opacity-0 scale-95 blur-sm">
            <div v-if="isDropdownOpen"
                class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-zinc-100 dark:bg-zinc-700/95  shadow-md dark:shadow-sm z-100 overflow-hidden">

                <!-- Terminal Header Decor -->
                <div
                    class="flex items-center justify-between px-3 py-1.5 bg-zinc-200/50 dark:bg-zinc-700/85">
                    <div class="flex items-center gap-1.5">
                        <div class="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-700"></div>
                        <span
                            class="text-[8px] dark:text-zinc-400 uppercase tracking-widest">Input_Selector</span>
                    </div>
                    <div class="flex gap-1">
                        <div class="w-1.5 h-[1px] bg-zinc-400 dark:bg-zinc-700"></div>
                        <div class="w-1.5 h-1.5 border border-zinc-400 dark:border-zinc-700"></div>
                    </div>
                </div>

                <!-- Dropdown List -->
                <div class="p-1 font-mono">
                    <button v-for="l in localeList" :key="l.code" @click="selectLocale(l.code)"
                        class="w-full text-left px-3 py-2.5 text-[10px] font-bold uppercase transition-all flex items-center justify-between relative group/item overflow-hidden"
                        :class="locale === l.code ? 'bg-zinc-300  dark:bg-zinc-600' : 'hover:bg-zinc-200/30 dark:hover:bg-zinc-800/30 dark:text-zinc-400'">

                        <div class="flex items-center gap-3 relative z-10">
                            <span class="text-[8px] opacity-30 group-hover/item:opacity-100 transition-opacity">[{{
                                l.code }}]</span>
                            <span class="tracking-tight">{{ l.name || l.code }}</span>
                        </div>

                        <div v-if="locale === l.code" class="relative z-10 flex items-center gap-1">
                            <span class="text-[8px] font-black tracking-tighter uppercase">Selected</span>
                            <div
                                class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-md">
                            </div>
                        </div>

                        <!-- Hover Background Effect -->
                        <div
                            class="absolute inset-0 bg-primary/5 translate-x-[-101%] group-hover/item:translate-x-0 transition-transform duration-300 ease-out">
                        </div>
                    </button>
                </div>

                <!-- Terminal Footer -->
                <div
                    class="px-3 py-1 bg-zinc-200/50 dark:bg-zinc-700/50 border-t border-border dark:border-zinc-800 text-right">
                    <span
                        class="text-[7px] font-bold text-muted-foreground dark:text-zinc-400 uppercase">Buffer_Ready</span>
                </div>
            </div>
        </Transition>
    </div>
</template>
