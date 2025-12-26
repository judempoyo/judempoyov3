<template>
    <section id="about" class="py-24 bg-background border-y border-border transition-colors duration-300">
        <div class="container mx-auto px-6">

            <div class="flex flex-col lg:flex-row gap-16">
                <!-- Bio -->
                <div class="lg:w-1/3">
                    <div
                        class="inline-block px-3 py-1 mb-6 border border-primary/20 bg-primary/10 rounded text-xs font-mono text-primary uppercase tracking-wider font-bold">
                        {{ $t('about.title') }}
                    </div>

                    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                        {{ $t('about.bio_intro') }}
                    </h2>

                    <div class="text-muted-foreground leading-relaxed space-y-4 text-lg">
                        <p>{{ $t('about.bio_text') }}</p>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <div class="p-4 bg-card rounded-xl border border-border shadow-sm">
                            <span class="block text-3xl font-bold text-primary mb-1">3+</span>
                            <span class="text-xs text-muted-foreground uppercase tracking-wider font-bold">{{
                                $t('about.stats.exp') }}</span>
                        </div>
                        <div class="p-4 bg-card rounded-xl border border-border shadow-sm">
                            <span class="block text-3xl font-bold text-secondary mb-1">15+</span>
                            <span class="text-xs text-muted-foreground uppercase tracking-wider font-bold">{{
                                $t('about.stats.projects') }}</span>
                        </div>
                    </div>
                </div>

                <!-- Skills Matrix -->
                <div class="lg:w-2/3">
                    <div class="grid md:grid-cols-2 gap-6">

                        <!-- Backend (Core) -->
                        <div
                            class="p-8 bg-card rounded-xl border border-border shadow-sm hover:ring-1 hover:ring-primary/20 transition-all">
                            <div
                                class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-foreground mb-4">
                                {{ $t('about.skills.backend') }}
                            </h3>
                            <ul class="space-y-3">
                                <li class="flex items-center gap-3 text-muted-foreground">
                                    <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    <span>PHP 8.2+ / Laravel (Expert)</span>
                                </li>
                                <li class="flex items-center gap-3 text-muted-foreground">
                                    <div class="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                    <span>Go (Golang)</span> <span
                                        class="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground ml-auto">Learning</span>
                                </li>
                                <li class="flex items-center gap-3 text-muted-foreground">
                                    <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    <span>SQL / Database Architecture</span>
                                </li>
                            </ul>
                        </div>

                        <!-- DevOps (Growth) -->
                        <div
                            class="p-8 bg-card rounded-xl border border-border shadow-sm hover:ring-1 hover:ring-secondary/20 transition-all">
                            <div
                                class="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-foreground mb-4">
                                {{ $t('about.skills.devops') }}
                            </h3>
                            <ul class="space-y-3">
                                <li class="flex items-center gap-3 text-muted-foreground">
                                    <div class="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                    <span>Docker / Containers</span>
                                </li>
                                <li class="flex items-center gap-3 text-muted-foreground">
                                    <div class="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                    <span>Git / CI/CD Pipelines</span>
                                </li>
                                <li class="flex items-center gap-3 text-muted-foreground">
                                    <div class="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                    <span>Linux Systems</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Frontend (Visual) -->
                        <div
                            class="p-8 bg-card rounded-xl border border-border shadow-sm hover:ring-1 hover:ring-blue-400/20 transition-all md:col-span-2">
                            <div class="flex items-center gap-4 mb-6">
                                <div
                                    class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-bold text-foreground">
                                    {{ $t('about.skills.frontend') }}
                                </h3>
                            </div>

                            <div class="flex flex-wrap gap-3">
                                <span
                                    class="px-4 py-2 bg-muted text-foreground font-medium rounded-lg border border-border">Vue.js
                                    3</span>
                                <span
                                    class="px-4 py-2 bg-muted text-foreground font-medium rounded-lg border border-border">Nuxt
                                    4</span>
                                <span
                                    class="px-4 py-2 bg-muted text-foreground font-medium rounded-lg border border-border">Tailwind
                                    CSS</span>
                                <span
                                    class="px-4 py-2 bg-muted text-foreground font-medium rounded-lg border border-border">TypeScript</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
