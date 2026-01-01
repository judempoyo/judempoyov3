<script setup lang="ts">
const { t } = useI18n()
const methods = [
    { label: 'ENDPOINT_SMTP', val: 'jude@mpoyo.dev', action: 'mailto:jude@mpoyo.dev' },
    { label: 'ENDPOINT_GH', val: 'github.com/judempoyo', action: 'https://github.com/judempoyo' },
    { label: 'ENDPOINT_LI', val: 'linkedin.com/in/jude-mpoyo', action: 'https://linkedin.com/in/jude-mpoyo' }
]
</script>

<template>
    <section id="contact" class="py-24 px-6 border-b-0 bg-background dark:bg-zinc-900 text-foreground">
        <div class="container mx-auto max-w-6xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

                <!-- Left Column: Contact Methods -->
                <div class="space-y-8">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <span
                                class="text-xs font-black text-primary dark:text-green-500 uppercase tracking-[0.3em]">
                                {{ t('contact.section_id') }}
                            </span>
                            <div class="h-[1px] w-12 bg-primary dark:bg-green-500"></div>
                        </div>
                        <h2 class="text-4xl md:text-5xl font-black tracking-tighter text-foreground dark:text-zinc-100">
                            {{ t('contact.title') }}
                        </h2>
                    </div>

                    <p class="text-muted-foreground dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                        {{ t('contact.description') }}
                    </p>

                    <div class="space-y-4 pt-4">
                        <div v-for="method in methods" :key="method.label" class="group">
                            <a :href="method.action" target="_blank"
                                class="flex items-center justify-between p-4 border border-border dark:border-zinc-700 hover:border-primary dark:hover:border-green-500 transition-all bg-muted/20 dark:bg-zinc-800 rounded-md">
                                <div class="space-y-1">
                                    <span
                                        class="text-[9px] font-black uppercase text-muted-foreground dark:text-zinc-500 group-hover:text-primary dark:group-hover:text-green-500 transition-colors">
                                        {{ method.label }}
                                    </span>
                                    <p class="text-xs font-bold text-foreground dark:text-zinc-100">{{ method.val }}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-muted-foreground dark:text-zinc-400 group-hover:text-primary dark:group-hover:text-green-500 transition-all translate-x-0 group-hover:translate-x-1">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Technical Shell -->
                <div
                    class="bg-zinc-100 dark:bg-zinc-950 p-8 border border-border dark:border-zinc-800 relative overflow-hidden rounded-md">
                    <!-- Background Pattern -->
                    <div
                        class="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none text-foreground dark:text-white">
                        <div class="h-full w-full"
                            style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 20px 20px;">
                        </div>
                    </div>

                    <div class="relative space-y-6">
                        <!-- Shell Header -->
                        <div
                            class="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
                            <span
                                class="text-[10px] font-black uppercase tracking-widest text-primary dark:text-green-500">
                                {{ t('contact.shell_id') }}
                            </span>
                            <div class="flex gap-1.5">
                                <div class="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                                <div class="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                            </div>
                        </div>

                        <!-- Shell Body -->
                        <div class="font-mono text-xs space-y-4 h-64 overflow-y-auto custom-scrollbar">
                            <div class="flex gap-2">
                                <span class="text-muted-foreground/60 dark:text-zinc-500">jude@system:~$</span>
                                <span class="text-foreground dark:text-zinc-300">curl -X POST /api/v1/contact</span>
                            </div>
                            <div class="text-primary dark:text-green-500/80">
                                > HTTP/1.1 200 OK <br />
                                > Content-Type: application/json <br />
                                <br />
                                { <br />
                                &nbsp;&nbsp;"status": "READY", <br />
                                &nbsp;&nbsp;"message": "{{ t('contact.shell_msg') }}", <br />
                                &nbsp;&nbsp;"availability": "H1_2025" <br />
                                }
                            </div>
                            <div class="flex gap-2">
                                <span class="text-muted-foreground/60 dark:text-zinc-500">jude@system:~$</span>
                                <span class="text-primary animate-pulse dark:text-green-500">_</span>
                            </div>
                        </div>

                        <!-- Privacy -->
                        <div class="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                            <p
                                class="text-[9px] font-bold text-muted-foreground dark:text-zinc-500 uppercase tracking-[0.2em] text-center">
                                {{ t('contact.privacy') }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    @apply bg-zinc-300 dark:bg-zinc-800;
}
</style>
