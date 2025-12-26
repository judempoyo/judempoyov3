<script setup lang="ts">
const projects = [
    {
        id: 'uzaraka',
        tags: ['NUXT', 'TAILWIND', 'MARKETPLACE'],
        year: '2024'
    },
    {
        id: 'jumpmanagement',
        tags: ['LARAVEL', 'FILAMENT', 'ERP'],
        year: '2023'
    },
    {
        id: 'jumpdatatable',
        tags: ['PHP', 'PACKAGE', 'OPEN-SOURCE'],
        year: '2023'
    },
    {
        id: 'learn2code',
        tags: ['FLUTTER', 'MOBILE', 'LMS'],
        year: '2022'
    }
]
</script>

<template>
    <section id="projects" class="py-0 border-b border-border">
        <div class="container mx-auto px-4 py-24">

            <div class="flex items-end justify-between mb-16 border-b border-border pb-8">
                <div>
                    <span class="text-xs font-bold tracking-widest text-primary mb-2 block">// SELECTED WORKS</span>
                    <h2 class="text-4xl md:text-6xl font-black text-foreground">
                        {{ $t('projects.title') }}
                    </h2>
                </div>
                <div class="hidden md:block text-right mb-2">
                    <span class="text-xs text-muted-foreground">INDEX: PROJECTS_DB</span>
                    <div class="text-xl font-bold">04 ITEMS</div>
                </div>
            </div>

            <div class="flex flex-col border-t border-border">
                <div v-for="(project, index) in projects" :key="project.id"
                    class="group relative grid md:grid-cols-12 border-b border-border transition-colors hover:bg-muted/30">
                    <!-- Index -->
                    <div
                        class="md:col-span-1 py-8 px-4 text-xs font-bold text-muted-foreground border-r border-border flex items-start">
                        {{ (index + 1).toString().padStart(2, '0') }}
                    </div>

                    <!-- Content -->
                    <div class="md:col-span-7 py-8 px-4 md:px-8 border-r border-border">
                        <div class="flex items-center gap-4 mb-4">
                            <h3
                                class="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {{ $t(`projects.items.${project.id}.title`) }}
                            </h3>
                            <span class="text-xs border border-border px-2 py-0.5 rounded-full">{{ project.year
                                }}</span>
                        </div>

                        <p class="text-muted-foreground mb-6 max-w-xl text-lg">
                            {{ $t(`projects.items.${project.id}.description`) }}
                        </p>

                        <div class="bg-background border border-border p-4 mb-4 inline-block">
                            <span
                                class="block text-[10px] font-bold text-primary uppercase tracking-wider mb-1">ARCHITECTURAL
                                SOLUTION:</span>
                            <p class="text-sm font-medium">
                                {{ $t(`projects.items.${project.id}.solution`) }}
                            </p>
                        </div>

                        <div class="flex gap-2">
                            <span v-for="tag in project.tags" :key="tag" class="text-xs font-bold bg-muted px-2 py-1">
                                {{ tag }}
                            </span>
                        </div>
                    </div>

                    <!-- Link / Action -->
                    <div class="md:col-span-4 py-8 px-4 md:px-8 flex items-center justify-center md:justify-end">
                        <button
                            class="w-full md:w-auto px-8 py-4 border border-foreground hover:bg-foreground hover:text-background transition-all font-bold tracking-widest text-sm uppercase">
                            {{ $t('projects.view_project') }}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
