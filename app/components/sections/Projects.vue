<script setup lang="ts">
const { t } = useI18n()
const projects = [
    {
        title: t('projects.uzaraka.title'),
        description: t('projects.uzaraka.description'),
        stack: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
        metrics: {
            loadTime: '< 250ms',
            dockerSize: '142MB (Compressed)',
            infra: t('projects.uzaraka.infra')
        },
        archDiagram: 'CLIENT --> NGINX --> LARAVEL_CONTAINER --> MYSQL'
    },
    {
        title: t('projects.jumpmanagement.title'),
        description: t('projects.jumpmanagement.description'),
        stack: ['Laravel', 'Filament', 'Alpine.js', 'Docker'],
        metrics: {
            loadTime: '~180ms',
            dockerSize: '128MB',
            infra: t('projects.jumpmanagement.infra')
        },
        archDiagram: 'ERP_CORE (PHP) --> WORK_QUEUE (REDIS) --> PHP_WORKER (AUDIT_LOGS)'
    },
    {
        title: t('projects.jumpdatatable.title'),
        description: t('projects.jumpdatatable.description'),
        stack: ['PHP 8.x', 'TypeScript', 'Benchmarks'],
        metrics: {
            loadTime: 'Latency_Optimized',
            infra: t('projects.jumpdatatable.infra')
        }
    }
]
</script>

<template>
    <section id="projects" class="py-24 px-6 bg-background dark:bg-zinc-900 text-foreground">
        <div class="container mx-auto max-w-6xl">

            <!-- Section Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="text-xs font-black text-primary dark:text-green-500 uppercase tracking-[0.3em]">
                            {{ t('projects.section_id') }}
                        </span>
                        <div class="h-[1px] w-12 bg-primary dark:bg-green-500"></div>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black tracking-tighter text-foreground dark:text-zinc-100">
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
                <ProjectSheet v-for="project in projects" :key="project.title" :project="project"
                    class="bg-muted/10 dark:bg-zinc-800 border border-border dark:border-zinc-700 rounded-md p-6 transition-colors" />
            </div>

            <!-- Footer CTA -->
            <div
                class="mt-16 p-8 border border-border border-dashed dark:border-zinc-700 flex flex-col items-center gap-4 text-center rounded-md">
                <span class="text-xs font-bold text-muted-foreground dark:text-zinc-400 uppercase">
                    {{ t('projects.cta_footer') }}
                </span>
                <a href="#"
                    class="text-sm font-black uppercase underline decoration-primary dark:decoration-green-500 decoration-4 underline-offset-4 hover:text-primary dark:hover:text-green-500 transition-colors">
                    {{ t('projects.cta_pdf') }}
                </a>
            </div>

        </div>
    </section>
</template>
