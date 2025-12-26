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
        <header class="fixed top-0 w-full z-50 bg-background border-b border-border">
            <div class="container mx-auto px-4 h-16 flex justify-between items-center">

                <!-- Logo -->
                <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-primary animate-pulse"></div>
                    <NuxtLink :to="localePath('/')"
                        class="text-lg font-bold tracking-tighter hover:text-primary transition-colors">
                        JUDEMPOYO_V3
                    </NuxtLink>
                </div>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex items-center gap-8 text-sm">
                    <NuxtLink :to="localePath('/')"
                        class="hover:text-primary transition-colors decoration-2 underline-offset-4 hover:underline">
                        [{{ $t('nav.home') }}]
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#about'"
                        class="hover:text-primary transition-colors decoration-2 underline-offset-4 hover:underline">
                        [{{ $t('nav.about') }}]
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#projects'"
                        class="hover:text-primary transition-colors decoration-2 underline-offset-4 hover:underline">
                        [{{ $t('nav.projects') }}]
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#contact'"
                        class="hover:text-primary transition-colors decoration-2 underline-offset-4 hover:underline">
                        [{{ $t('nav.contact') }}]
                    </NuxtLink>

                    <div class="h-4 w-px bg-border mx-2"></div>

                    <button @click="toggleTheme" class="hover:text-primary transition-colors"
                        :title="colorMode.value === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
                        {{ colorMode.value === 'dark' ? 'LGT' : 'DRK' }}
                    </button>

                    <button @click="switchLanguage" class="font-bold hover:text-primary transition-colors">
                        {{ locale === 'en' ? 'FR' : 'EN' }}
                    </button>
                </nav>

                <!-- Mobile Menu Toggle -->
                <button @click="toggleMenu"
                    class="md:hidden p-2 text-foreground hover:bg-muted transition-colors border border-border">
                    <span v-if="!isMenuOpen">MENU</span>
                    <span v-else>CLOSE</span>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div v-if="isMenuOpen"
                class="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 text-center">
                <NuxtLink :to="localePath('/')"
                    class="py-2 hover:bg-muted transition-colors border-b border-border border-dashed">
                    {{ $t('nav.home') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#about'"
                    class="py-2 hover:bg-muted transition-colors border-b border-border border-dashed">
                    {{ $t('nav.about') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#projects'"
                    class="py-2 hover:bg-muted transition-colors border-b border-border border-dashed">
                    {{ $t('nav.projects') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#contact'"
                    class="py-2 hover:bg-muted transition-colors border-b border-border border-dashed">
                    {{ $t('nav.contact') }}
                </NuxtLink>

                <div class="flex justify-center gap-8 mt-4">
                    <button @click="toggleTheme" class="hover:text-primary">
                        THEME: {{ colorMode.value === 'dark' ? 'DARK' : 'LIGHT' }}
                    </button>
                    <button @click="switchLanguage" class="hover:text-primary">
                        LANG: {{ locale.toUpperCase() }}
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
