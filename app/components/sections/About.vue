<template>
    <section id="about" class="py-24 px-6 md:px-12 border-b border-border bg-secondary/30">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12">

            <div class="md:col-span-4">
                <span class="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">
                    ( {{ $t('about.title') }} )
                </span>
                <div
                    class="text-8xl font-black text-foreground/5 dark:text-foreground/10 leading-[0.8] select-none -ml-1">
                    BIO
                </div>
            </div>

            <div class="md:col-span-8">
                <h3 class="text-3xl md:text-5xl font-bold leading-tight mb-12">
                    {{ $t('about.bio_intro') }}
                </h3>

                <div class="grid md:grid-cols-2 gap-12">
                    <div class="text-lg text-muted-foreground leading-relaxed">
                        <p class="mb-6">{{ $t('about.bio_text') }}</p>
                    </div>

                    <div class="space-y-8">
                        <div>
                            <h4 class="text-sm font-bold uppercase tracking-widest mb-4 border-b border-border pb-2">{{
                                $t('about.skills.backend') }}</h4>
                            <ul class="space-y-2 text-sm font-mono">
                                <li>Laravel / PHP 8.2</li>
                                <li>Go (Golang)</li>
                                <li>PostgreSQL / MySQL</li>
                                <li>System Architecture</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold uppercase tracking-widest mb-4 border-b border-border pb-2">{{
                                $t('about.skills.devops') }}</h4>
                            <ul class="space-y-2 text-sm font-mono">
                                <li>Docker / Podman</li>
                                <li>CI/CD Pipelines</li>
                                <li>Linux Administration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
