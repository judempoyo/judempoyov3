<script setup lang="ts">
const { t } = useI18n()
const methods = [
    { label: 'ENDPOINT_SMTP', val: 'jude@mpoyo.dev', action: 'mailto:jude@mpoyo.dev' },
    { label: 'ENDPOINT_GH', val: 'github.com/judempoyo', action: 'https://github.com/judempoyo' },
    { label: 'ENDPOINT_LI', val: 'linkedin.com/in/jude-mpoyo', action: 'https://linkedin.com/in/jude-mpoyo' }
]
</script>

<template>
    <section id="contact" class="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors">
        <div class="container mx-auto max-w-[1400px]">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

                <!-- Colonne gauche : méthodes -->
                <div class="space-y-8">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <span
                                class="text-xs font-extrabold text-green-600 dark:text-green-400 uppercase tracking-[0.25em]">
                                {{ t('contact.section_id') }}
                            </span>
                            <div class="h-[2px] w-14 bg-green-600 dark:bg-green-400 opacity-70"></div>
                        </div>
                        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
                            {{ t('contact.title') }}
                        </h2>
                    </div>

                    <p class="text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-400 max-w-md">
                        {{ t('contact.description') }}
                    </p>

                    <div class="space-y-4 pt-4">
                        <a v-for="m in methods" :key="m.label" :href="m.action" target="_blank" class="flex items-center justify-between p-4 border
              border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900
              rounded-xl shadow-sm
              transform transition-all duration-150 ease-out
              hover:scale-[1.03] active:scale-[0.97]
              hover:border-green-500 dark:hover:border-green-400
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-black">
                            <div class="space-y-1">
                                <span class="text-[10px] font-black uppercase text-zinc-500 dark:text-zinc-600">
                                    {{ m.label }}
                                </span>
                                <p class="text-xs font-bold text-zinc-900 dark:text-zinc-200">{{ m.val }}</p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="opacity-60 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Colonne droite : shell -->
                <div class="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
          rounded-2xl p-8 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]
          relative overflow-hidden">
                    <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.02] pointer-events-none"
                        style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 18px 18px;">
                    </div>

                    <div class="relative space-y-5">
                        <div
                            class="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
                            <span
                                class="text-[11px] font-black uppercase tracking-widest text-green-600 dark:text-green-400">
                                {{ t('contact.shell_id') }}
                            </span>
                        </div>

                        <div
                            class="font-mono text-[12px] space-y-3 h-60 overflow-y-auto text-zinc-800 dark:text-zinc-400">
                            <div class="flex gap-2">
                                <span class="opacity-60">jude@system:~$</span>
                                <span>curl -X POST /api/v1/contact</span>
                            </div>

                            <div class="text-green-600 dark:text-green-400/90">
                                HTTP/1.1 200 OK <br />
                                Content-Type: application/json <br /><br />
                                {<br />
                                &nbsp;&nbsp;"status": "READY",<br />
                                &nbsp;&nbsp;"message": "{{ t('contact.shell_msg') }}",<br />
                                &nbsp;&nbsp;"nuxt": "MID"<br />
                                }
                            </div>

                            <div class="flex gap-2">
                                <span class="opacity-60">jude@system:~$</span>
                                <span class="text-green-500 dark:text-green-400 animate-pulse">_</span>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                            <p class="text-[10px] font-bold uppercase tracking-wide text-center opacity-60">
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
