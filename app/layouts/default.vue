<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
    <div class="min-h-screen flex flex-col selection:bg-primary/30 transition-colors duration-500">
        <Header />

        <main class="flex-grow pt-24">
            <slot />
        </main>

        <Footer />
    </div>
</template>
