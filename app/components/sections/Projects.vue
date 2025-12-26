<script setup lang="ts">
const projects = [
    {
        id: 'uzaraka',
        tags: ['Nuxt 3', 'Tailwind', 'Marketplace'],
    },
    {
        id: 'jumpmanagement',
        tags: ['Laravel', 'Filament', 'ERP'],
    },
    {
        id: 'jumpdatatable',
        tags: ['PHP', 'Open Source', 'Package'],
    },
    {
        id: 'learn2code',
        tags: ['Flutter', 'Mobile', 'Education'],
    }
]
</script>

<template>
    <section id="projects" class="py-24 bg-muted/30 border-y border-border">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div class="max-w-2xl">
                    <span class="text-primary font-mono text-sm font-bold tracking-wider uppercase mb-2 block">System
                        Casestudies</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {{ $t('projects.title') }}
                    </h2>
                    <p class="text-muted-foreground text-lg leading-relaxed">
                        {{ $t('projects.subtitle') }}
                    </p>
                </div>

                <NuxtLink to="https://github.com/judempoyo" target="_blank"
                    class="hidden md:inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4">
                    View all repositories <span>→</span>
                </NuxtLink>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="project in projects" :key="project.id"
                    class="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <!-- Header / Status Bar -->
                    <div class="flex items-center justify-between px-6 py-3 border-b border-border bg-muted/20">
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span class="text-xs font-mono text-muted-foreground">v1.0.0</span>
                        </div>
                        <div class="flex gap-1.5">
                            <div class="w-1.5 h-1.5 rounded-full bg-border"></div>
                            <div class="w-1.5 h-1.5 rounded-full bg-border"></div>
                        </div>
                    </div>

                    <div class="p-8">
                        <h3 class="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {{ $t(`projects.items.${project.id}.title`) }}
                        </h3>

                        <p class="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                            {{ $t(`projects.items.${project.id}.description`) }}
                        </p>

                        <div class="p-4 bg-muted/50 rounded-lg border border-border mb-6">
                            <span
                                class="text-[10px] text-primary font-mono font-bold uppercase tracking-wider block mb-1">Architecture</span>
                            <p class="text-sm text-foreground">
                                {{ $t(`projects.items.${project.id}.solution`) }}
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span v-for="tag in project.tags" :key="tag"
                                class="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12 text-center md:hidden">
                <NuxtLink to="https://github.com/judempoyo" target="_blank"
                    class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4">
                    View all repositories <span>→</span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
