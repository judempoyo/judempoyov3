export interface Project {
    id: string
    titleKey: string
    descriptionKey: string
    stack: string[]
    metrics: {
        loadTime?: string
        dockerSize?: string
        infraKey: string
    }
    archDiagram?: string
    isLive: boolean
    liveUrl?: string
    docsUrl?: string
}

export const useProjects = () => {
    const { t } = useI18n()

    const projects = computed<Project[]>(() => [
        {
            id: 'uzaraka',
            titleKey: 'projects.uzaraka.title',
            descriptionKey: 'projects.uzaraka.description',
            stack: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
            metrics: {
                loadTime: '< 250ms',
                dockerSize: '142MB (Compressed)',
                infraKey: 'projects.uzaraka.infra'
            },
            archDiagram: 'CLIENT --> NGINX --> LARAVEL_CONTAINER --> MYSQL',
            isLive: true,
            liveUrl: 'https://uzaraka.com',
            docsUrl: undefined
        },
        {
            id: 'jumpmanagement',
            titleKey: 'projects.jumpmanagement.title',
            descriptionKey: 'projects.jumpmanagement.description',
            stack: ['Laravel', 'Filament', 'Alpine.js', 'Docker'],
            metrics: {
                loadTime: '~180ms',
                dockerSize: '128MB',
                infraKey: 'projects.jumpmanagement.infra'
            },
            archDiagram: 'ERP_CORE (PHP) --> WORK_QUEUE (REDIS) --> PHP_WORKER (AUDIT_LOGS)',
            isLive: false,
            liveUrl: undefined,
            docsUrl: 'https://github.com/judempoyo/jump-management'
        },
        {
            id: 'jumpdatatable',
            titleKey: 'projects.jumpdatatable.title',
            descriptionKey: 'projects.jumpdatatable.description',
            stack: ['PHP 8.x', 'TypeScript', 'Benchmarks'],
            metrics: {
                loadTime: 'Latency_Optimized',
                infraKey: 'projects.jumpdatatable.infra'
            },
            isLive: false,
            liveUrl: undefined,
            docsUrl: 'https://github.com/judempoyo/jump-datatable'
        }
    ])

    return {
        projects
    }
}
