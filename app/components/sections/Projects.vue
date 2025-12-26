<script setup lang="ts">
const projects = [
    {
        id: 'uzaraka',
        category: 'Marketplace',
        year: '2024',
        tech: 'Nuxt / Tailwind'
    },
    {
        id: 'jumpmanagement',
        category: 'ERP System',
        year: '2023',
        tech: 'Laravel / Filament'
    },
    {
        id: 'jumpdatatable',
        category: 'Open Source',
        year: '2023',
        tech: 'PHP / Package'
    },
    {
        id: 'learn2code',
        category: 'EdTech',
        year: '2022',
        tech: 'Flutter / API'
    }
]
</script>

<template>
    <section id="projects" class="py-24 px-6 md:px-12 border-b border-border">
        <div class="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 class="text-6xl md:text-8xl font-bold tracking-tighter">
                WORK
            </h2>
            <p class="text-lg text-muted-foreground max-w-sm text-right">
                {{ $t('projects.subtitle') }}
            </p>
        </div>

        <div class="flex flex-col">
            <!-- Headers -->
            <div
                class="grid grid-cols-12 pb-4 border-b border-foreground/10 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                <div class="col-span-1">No.</div>
                <div class="col-span-11 md:col-span-5">Project</div>
                <div class="hidden md:block col-span-2">Category</div>
                <div class="hidden md:block col-span-2">Stack</div>
                <div class="hidden md:block col-span-2 text-right">Year</div>
            </div>

            <!-- List -->
            <div v-for="(project, index) in projects" :key="project.id"
                class="group grid grid-cols-12 py-8 border-b border-border hover:border-foreground transition-colors items-baseline">
                <div class="col-span-1 text-sm font-mono text-muted-foreground group-hover:text-foreground">
                    {{ (index + 1).toString().padStart(2, '0') }}
                </div>

                <div class="col-span-11 md:col-span-5">
                    <h3 class="text-3xl font-bold mb-2 group-hover:pl-4 transition-all duration-300">
                        {{ $t(`projects.items.${project.id}.title`) }}
                    </h3>
                    <p class="text-muted-foreground md:hidden mb-4">
                        {{ $t(`projects.items.${project.id}.description`) }}
                    </p>
                    <p
                        class="hidden md:block text-muted-foreground max-w-md text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 delay-75">
                        {{ $t(`projects.items.${project.id}.description`) }}
                    </p>
                </div>

                <div class="hidden md:block col-span-2 text-sm font-medium pt-2">
                    {{ project.category }}
                </div>

                <div class="hidden md:block col-span-2 text-sm font-medium pt-2 text-muted-foreground">
                    {{ project.tech }}
                </div>

                <div class="hidden md:block col-span-2 text-right text-sm font-mono pt-2">
                    {{ project.year }}
                </div>
            </div>

        </div>
    </section>
</template>
