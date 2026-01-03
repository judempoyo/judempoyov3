<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface LocaleObject {
    code: string
    name?: string
    [key: string]: any
}

const { locale, locales, setLocale } = useI18n()

const localeList = computed(() => locales.value as LocaleObject[])
const isOpen = ref(false)
const root = ref<HTMLElement | null>(null)

const toggle = () => { isOpen.value = !isOpen.value }

const select = (code: string) => {
    setLocale(code as any)
    isOpen.value = false
}

const clickOutside = (e: MouseEvent) => {
    if (root.value && !root.value.contains(e.target as Node)) {
        isOpen.value = false
    }
}

onMounted(() => window.addEventListener('click', clickOutside))
onUnmounted(() => window.removeEventListener('click', clickOutside))
</script>

<template>
    <div ref="root" class="relative inline-block text-left">
        <button @click="toggle" class="flex items-center gap-3 px-3 py-1.5 bg-zinc-200 dark:bg-zinc-700
        rounded-lg border border-zinc-300 dark:border-zinc-800
        transition-all duration-200 ease-out
        hover:bg-zinc-300/80 dark:hover:bg-zinc-800
        hover:scale-[1.02] active:scale-[0.97] overflow-hidden relative">

            <div class="flex flex-col items-start leading-none">
                <span class="text-[7px] hidden sm:block font-black opacity-50 uppercase mb-0.5">Locale_ID</span>
                <span class="text-[11px] font-black uppercase text-zinc-900 dark:text-white">
                    {{ locale }}
                </span>
            </div>

            <div class="h-4 w-[1px] bg-zinc-400/40"></div>

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"
                class="w-2.5 h-2.5 text-zinc-500 transition-transform duration-300"
                :class="isOpen ? 'rotate-180' : 'rotate-0'">
                <path d="m6 9 6 6 6-6" />
            </svg>

            <div
                class="absolute bottom-0 left-0 h-[1px] bg-green-500/20 w-0 group-hover:w-full transition-all duration-500">
            </div>
        </button>

        <div v-if="isOpen" class="absolute right-0 mt-2 w-32 origin-top-right rounded-xl
        bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
        shadow-lg dark:shadow-[0_6px_28px_rgba(0,0,0,0.6)]
        overflow-hidden transition-colors">

            <div class="p-1 font-mono">
                <button v-for="l in localeList" :key="l.code" @click="select(l.code)" class="w-full flex justify-between items-center px-3 py-2 text-[10px] font-bold uppercase
            transition-all duration-150 ease-out
            hover:bg-green-50 dark:hover:bg-green-500/10
            hover:translate-x-0.5 active:translate-x-1"
                    :class="locale === l.code ? 'bg-zinc-300 dark:bg-zinc-800 text-white' : 'text-zinc-800 dark:text-zinc-400'">

                    <span>[{{ l.code }}]</span>

                    <div v-if="locale === l.code" class="flex items-center gap-1">
                        <span class="text-[7px] opacity-60">SELECTED</span>
                        <span
                            class="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full animate-pulse shadow-md"></span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
