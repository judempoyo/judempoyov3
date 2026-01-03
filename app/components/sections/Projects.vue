<script setup lang="ts">
const { projects } = useProjects()
const { t } = useI18n()
</script>

<template>
    <section id="projects" class="py-24 px-6 bg-background dark:bg-zinc-900 text-foreground">
        <div class="container mx-auto max-w-[1400px]">

            <!-- Section Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="text-xs font-black text-primary dark:text-green-500 uppercase tracking-[0.3em]">
                            {{ t('projects.section_id') }}
                        </span>
                        <div class="h-[1px] w-12 bg-primary dark:bg-green-500"></div>
                    </div>
                    <h2 class="text-2xl md:text-4xl font-black tracking-tighter text-foreground dark:text-zinc-100">
                        {{ t('projects.title') }}
                    </h2>
                    <p class="text-sm text-muted-foreground dark:text-zinc-400 uppercase tracking-widest font-bold">
                        {{ t('projects.listing', { count: projects.length }) }}
                    </p>
                </div>

                <div class="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 max-w-xs text-right hidden lg:block">
                    {{ t('projects.debug_note') }}
                </div>
            </div>

            <!-- Project List -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ProjectSheet v-for="project in projects" :key="project.id" :project="project"
                    class="bg-muted/10 dark:bg-zinc-800 border border-border dark:border-zinc-700 rounded-md p-6 transition-colors" />
            </div>

            <!-- Footer CTA -->
            <div
                class="mt-16 p-8 bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 border-dashed flex flex-col items-center gap-4 text-center rounded-lg hover:border-green-500 dark:hover:border-green-400 transition-all duration-300">
                <span class="text-sm font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                    {{ t('projects.cta_footer') }}
                </span>
                <a href="https://github.com/judempoyo" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-sm font-black uppercase rounded-md hover:bg-green-600 dark:hover:bg-green-500 hover:text-white dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {{ t('projects.cta_github') }}
                </a>
            </div>

        </div>
    </section>
</template>
