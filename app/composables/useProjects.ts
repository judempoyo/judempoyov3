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
    archKey?: string
    isLive: boolean
    liveUrl?: string
    docsUrl?: string
}

export const useProjects = () => {
    const projects = computed<Project[]>(() => [
        {
            id: 'uzaraka',
            titleKey: 'projects.uzaraka.title',
            descriptionKey: 'projects.uzaraka.description',
            stack: ['Nuxt', 'TailwindCSS', 'TypeScript'],
            metrics: {
                loadTime: '< 300ms (local render)',
                infraKey: 'projects.uzaraka.infra'
            },
            archDiagram: 'UI_ONLY (Front built with Nuxt 3)',
            archKey: 'projects.uzaraka.arch',
            isLive: true,
            liveUrl: 'https://uzaraka.com',
            docsUrl: undefined
        },
        {
            id: 'jumpdatatable',
            titleKey: 'projects.jumpdatatable.title',
            descriptionKey: 'projects.jumpdatatable.description',
            stack: ['PHP 8.x', 'TailwindCSS', 'Bootstrap'],
            metrics: {
                loadTime: 'Latency Optimized',
                infraKey: 'projects.jumpdatatable.infra'
            },
            isLive: false,
            docsUrl: 'https://github.com/judempoyo/jumpDatatable'
        },
        {
            id: 'laraapistarter',
            titleKey: 'projects.laraapistarter.title',
            descriptionKey: 'projects.laraapistarter.description',
            stack: ['Laravel 12', 'Actions', 'DTOs', 'REST API'],
            metrics: {
                infraKey: 'projects.laraapistarter.infra'
            },
            archDiagram: 'Laravel 12 --> Actions/DTOs --> REST API',
            isLive: false,
            docsUrl: 'https://github.com/judempoyo/laraApiStarter'
        }
    ])

    return { projects }
}
