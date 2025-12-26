<script setup lang="ts">
const projects = [
    {
        id: 'uzaraka',
        tags: ['Nuxt', 'Tailwind', 'Marketplace'],
        image: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
        id: 'jumpmanagement',
        tags: ['Laravel', 'Filament', 'ERP'],
        image: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
    },
    {
        id: 'jumpdatatable',
        tags: ['PHP', 'Package', 'Open Source'],
        image: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    {
        id: 'learn2code',
        tags: ['Flutter', 'Mobile', 'Education'],
        image: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    }
]
</script>

<template>
    <section id="projects" class="py-24 bg-muted/30">
        <div class="container mx-auto px-6 max-w-6xl">

            <div class="mb-16">
                <h2 class="text-3xl font-bold tracking-tight mb-4">
                    {{ $t('projects.title') }}
                </h2>
                <p class="text-lg text-muted-foreground w-full max-w-2xl">
                    {{ $t('projects.subtitle') }}
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="project in projects" :key="project.id"
                    class="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                    <!-- Image Area (Abstract Gradient for now) -->
                    <div class="h-48 w-full relative overflow-hidden" :style="{ background: project.image }">
                        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    <div class="p-6">
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-xl font-bold text-foreground">
                                {{ $t(`projects.items.${project.id}.title`) }}
                            </h3>
                            <span
                                class="text-xs font-semibold px-2 py-1 rounded bg-secondary text-secondary-foreground">
                                {{ project.tags[0] }}
                            </span>
                        </div>

                        <p class="text-muted-foreground mb-6 line-clamp-2">
                            {{ $t(`projects.items.${project.id}.description`) }}
                        </p>

                        <div class="mb-6 p-4 bg-muted rounded-lg border border-border/50">
                            <span class="text-xs font-bold text-primary uppercase mb-1 block">Solution</span>
                            <p class="text-sm text-foreground">
                                {{ $t(`projects.items.${project.id}.solution`) }}
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span v-for="tag in project.tags" :key="tag"
                                class="px-2 py-1 rounded text-xs font-medium text-muted-foreground bg-muted hover:bg-muted/80">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
