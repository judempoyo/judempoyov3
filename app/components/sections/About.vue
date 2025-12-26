<template>
    <section id="about" class="py-24 bg-background">
        <div class="container mx-auto px-6 max-w-5xl">

            <div class="grid md:grid-cols-2 gap-16 items-start">

                <!-- Bio Column -->
                <div>
                    <span class="inline-block text-sm font-bold tracking-wider text-primary uppercase mb-4">{{
                        $t('about.title') }}</span>
                    <h3 class="text-3xl font-bold leading-tight mb-6">
                        {{ $t('about.bio_intro') }}
                    </h3>
                    <p class="text-muted-foreground leading-relaxed text-lg">
                        {{ $t('about.bio_text') }}
                    </p>
                </div>

                <!-- Skills Column -->
                <div class="bg-secondary/30 rounded-2xl p-8 border border-border">
                    <h4 class="font-bold text-lg mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="text-primary">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                        Technical Stack
                    </h4>

                    <div class="space-y-6">
                        <div>
                            <p class="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">{{
                                $t('about.skills.backend') }}</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">Laravel</span>
                                <span
                                    class="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">PHP
                                    8.2</span>
                                <span
                                    class="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">Go</span>
                                <span
                                    class="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">PostgreSQL</span>
                            </div>
                        </div>

                        <div class="w-full h-px bg-border/50"></div>

                        <div>
                            <p class="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">{{
                                $t('about.skills.devops') }}</p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">Docker</span>
                                <span
                                    class="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">CI/CD</span>
                                <span
                                    class="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">Linux</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>
