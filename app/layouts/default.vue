<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const colorMode = useColorMode()

const switchLanguage = () => {
    setLocale(locale.value === 'en' ? 'fr' : 'en')
}

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <div class="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
        <header
            class="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-white/5 transition-colors duration-300">
            <div class="container mx-auto flex justify-between items-center py-4 px-6">
                <div class="text-2xl font-bold tracking-tight text-text-main">
                    JM<span class="text-primary">.</span>
                </div>

                <nav class="hidden md:flex items-center gap-8">
                    <NuxtLink :to="localePath('/')"
                        class="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                        {{ $t('nav.home') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#about'"
                        class="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                        {{ $t('nav.about') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#projects'"
                        class="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                        {{ $t('nav.projects') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#contact'"
                        class="text-sm font-medium text-text-muted hover:text-primary transition-colors">
                        {{ $t('nav.contact') }}
                    </NuxtLink>

                    <div class="h-6 w-px bg-white/10 mx-2"></div>

                    <button @click="toggleTheme"
                        class="p-2 text-text-muted hover:text-primary transition-colors rounded-full hover:bg-white/5"
                        :title="colorMode.value === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
                        <!-- Sun Icon -->
                        <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <!-- Moon Icon -->
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>

                    <button @click="switchLanguage"
                        class="px-3 py-1 text-xs font-bold border border-white/10 rounded hover:bg-white/5 transition-colors text-text-main">
                        {{ locale === 'en' ? 'FR' : 'EN' }}
                    </button>
                </nav>
            </div>
        </header>

        <main class="flex-grow pt-20">
            <slot />
        </main>

        <footer
            class="py-8 border-t border-white/5 text-center text-text-muted text-sm bg-background transition-colors duration-300">
            <div class="container">
                <p>&copy; {{ new Date().getFullYear() }} Jude Mpoyo. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>
