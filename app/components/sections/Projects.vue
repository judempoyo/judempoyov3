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
    <section id="projects" class="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors">

        <div class="container mx-auto max-w-[1400px]">

            <!-- Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="text-xs font-black text-green-600 dark:text-green-400 uppercase tracking-[0.25em]">
                            {{ t('projects.section_id') }}
                        </span>
                        <div class="h-[2px] w-14 bg-green-600 dark:bg-green-400 opacity-70"></div>
                    </div>

                    <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
                        {{ t('projects.title') }}
                    </h2>

                    <p class="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-widest font-bold">
                        {{ t('projects.listing', { count: projects.length }) }}
                    </p>
                </div>

                <div class="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 max-w-xs text-right hidden lg:block">
                    {{ t('projects.debug_note') }}
                </div>
            </div>

            <!-- List -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ProjectSheet v-for="p in projects" :key="p.title" :project="p" class="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
          rounded-xl p-6 shadow-sm dark:shadow-[0_2px_16px_rgba(0,255,120,0.06)]
          hover:border-green-500 dark:hover:border-green-400 hover:shadow-md
          transition-all duration-200 ease-out" />
            </div>

            <!-- Footer CTA -->
            <div class="mt-16 p-8 border border-zinc-300 dark:border-zinc-800 border-dashed
        flex flex-col items-center gap-4 text-center rounded-xl transition-colors">

                <span class="text-xs font-bold text-zinc-600 dark:text-zinc-500 uppercase tracking-wide">
                    {{ t('projects.cta_footer') }}
                </span>

                <a :href="$localePath('/')" class="text-sm font-black uppercase underline decoration-green-500 decoration-4 underline-offset-4
          hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    {{ t('projects.cta_pdf') }}
                </a>

            </div>

        </div>
    </section>

</template>
