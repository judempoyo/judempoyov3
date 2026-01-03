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
            stack: ['Nuxt 3', 'Vue.js', 'TailwindCSS', 'TypeScript'],
            metrics: {
                loadTime: '< 300ms (local render)',
                infraKey: 'projects.uzaraka.infra'
            },
            archDiagram: 'UI_ONLY (Front built with Nuxt 3)',
            archKey: 'projects.uzaraka.arch',
            isLive: true,
            liveUrl: 'https://jude.jkantech.net/jude',
            docsUrl: undefined
        },
        {
            id: 'jumpdatatable',
            titleKey: 'projects.jumpdatatable.title',
            descriptionKey: 'projects.jumpdatatable.description',
            stack: ['PHP 8.x', 'TypeScript', 'TailwindCSS', 'Bootstrap'],
            metrics: {
                loadTime: 'Latency Optimized',
                infraKey: 'projects.jumpdatatable.infra'
            },
            isLive: false,
            docsUrl: 'https://github.com/judempoyo/jumpDatatable'
        },
        {
            id: 'jumpapi',
            titleKey: 'projects.jumpapi.title',
            descriptionKey: 'projects.jumpapi.description',
            stack: ['PHP', 'MySQL', 'PDO', 'REST API'],
            metrics: {
                loadTime: 'Low latency',
                infraKey: 'projects.jumpapi.infra'
            },
            archDiagram: 'PHP --> MySQL --> PDO --> JSON API',
            isLive: false,
            docsUrl: 'https://github.com/judempoyo/JumpApi'
        }
    ])

    return { projects }
}
