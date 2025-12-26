<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const colorMode = useColorMode()
const isMenuOpen = ref(false)

const switchLanguage = () => {
    setLocale(locale.value === 'en' ? 'fr' : 'en')
}

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

// Close menu on route change
watch(() => useRoute().path, () => {
    isMenuOpen.value = false
})
</script>

<template>
    <div
        class="min-h-screen flex flex-col font-mono selection:bg-primary selection:text-primary-foreground bg-background text-foreground transition-colors duration-300">

        <!-- Top Bar / System Status -->
        <header
            class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
            <div class="container mx-auto px-6 h-16 flex justify-between items-center">

                <!-- Logo -->
                <div class="flex items-center gap-2">
                    <NuxtLink :to="localePath('/')"
                        class="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                        Jude Mpoyo<span class="text-primary">.</span>
                    </NuxtLink>
                </div>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
                    <NuxtLink :to="localePath('/')"
                        class="text-muted-foreground hover:text-foreground transition-colors">
                        {{ $t('nav.home') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#about'"
                        class="text-muted-foreground hover:text-foreground transition-colors">
                        {{ $t('nav.about') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#projects'"
                        class="text-muted-foreground hover:text-foreground transition-colors">
                        {{ $t('nav.projects') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#contact'"
                        class="text-muted-foreground hover:text-foreground transition-colors">
                        {{ $t('nav.contact') }}
                    </NuxtLink>

                    <div class="h-4 w-px bg-border mx-2"></div>

                    <button @click="toggleTheme" class="p-2 rounded-full hover:bg-muted transition-colors"
                        :title="colorMode.value === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
                        <!-- Sun -->
                        <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                        <!-- Moon -->
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-moon">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                    </button>

                    <button @click="switchLanguage"
                        class="px-2 py-1 rounded text-xs font-bold bg-muted hover:bg-muted/80 transition-colors">
                        {{ locale.toUpperCase() }}
                    </button>
                </nav>

                <!-- Mobile Menu Toggle -->
                <button @click="toggleMenu"
                    class="md:hidden p-2 text-foreground hover:bg-muted transition-colors rounded">
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div v-show="isMenuOpen"
                class="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg p-6 flex flex-col gap-4">
                <NuxtLink :to="localePath('/')" class="text-lg font-medium py-2 border-b border-border">
                    {{ $t('nav.home') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#about'" class="text-lg font-medium py-2 border-b border-border">
                    {{ $t('nav.about') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#projects'" class="text-lg font-medium py-2 border-b border-border">
                    {{ $t('nav.projects') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#contact'" class="text-lg font-medium py-2 border-b border-border">
                    {{ $t('nav.contact') }}
                </NuxtLink>

                <div class="flex items-center justify-between mt-4">
                    <span class="text-muted-foreground text-sm">Appearance</span>
                    <button @click="toggleTheme" class="p-2 rounded hover:bg-muted">
                        {{ colorMode.value === 'dark' ? 'Dark Mode' : 'Light Mode' }}
                    </button>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-muted-foreground text-sm">Language</span>
                    <button @click="switchLanguage" class="p-2 rounded hover:bg-muted font-bold">
                        {{ locale === 'en' ? 'English' : 'Français' }}
                    </button>
                </div>
            </div>
        </header>

        <main class="flex-grow pt-16">
            <slot />
        </main>

        <footer
            class="py-12 border-t border-border bg-background text-center text-muted-foreground text-xs uppercase tracking-widest">
            <div class="container hover:text-primary transition-colors cursor-default">
                &copy; {{ new Date().getFullYear() }} Jude Mpoyo. System Architect.
            </div>
        </footer>
    </div>
</template>
