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
                class="mt-16 p-8 border border-border border-dashed dark:border-zinc-700 flex flex-col items-center gap-4 text-center rounded-md">
                <span class="text-xs font-bold text-muted-foreground dark:text-zinc-400 uppercase">
                    {{ t('projects.cta_footer') }}
                </span>
                <a href="/portfolio-jude-mpoyo.pdf" download="Portfolio-Jude-Mpoyo.pdf"
                    class="text-sm font-black uppercase underline decoration-primary dark:decoration-green-500 decoration-4 underline-offset-4 hover:text-primary dark:hover:text-green-500 transition-colors flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {{ t('projects.cta_pdf') }}
                </a>
            </div>

        </div>
    </section>
</template>
