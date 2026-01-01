<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>()
const localePath = useLocalePath()

const closeMenu = () => {
    const event = new CustomEvent('close-mobile-menu')
    window.dispatchEvent(event)
}
</script>

<template>
    <Transition enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform -translate-y-8 opacity-0 blur-lg"
        enter-to-class="transform translate-y-0 opacity-100 blur-0" leave-active-class="transition duration-300 ease-in"
        leave-from-class="transform translate-y-0 opacity-100 blur-0"
        leave-to-class="transform -translate-y-8 opacity-0 blur-lg">
        <div v-show="isOpen" class="md:hidden absolute top-14 left-0 w-full min-h-[50vh]
        bg-zinc-100 dark:bg-zinc-900
        shadow-[0_6px_28px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_28px_rgba(0,0,0,0.55)]
        p-4 flex flex-col gap-4 overflow-hidden
        rounded-b-xl text-zinc-800 dark:text-zinc-200">

            <div class="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                <pre class="text-[8px] leading-tight font-mono uppercase text-zinc-500 dark:text-zinc-600">
Layout_Init: OK
Module_Nav: LOADED
State: ACTIVE
        </pre>
            </div>

            <div class="flex flex-col gap-1 font-black uppercase">
                <NuxtLink :to="localePath('/')" @click="closeMenu"
                    class="group py-1.5 border-b border-zinc-300/30 dark:border-zinc-700/40 flex justify-between items-end hover:text-zinc-950 dark:hover:text-white transition-all">
                    <div class="flex flex-col">
                        <span class="text-[10px] text-zinc-600 dark:text-zinc-400 font-bold mb-[-4px]">01/INDEX</span>
                        <span>{{ $t('nav.home') }}</span>
                    </div>
                    <span
                        class="text-xs font-bold text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">#ROOT_DIR</span>
                </NuxtLink>

                <NuxtLink :to="localePath('/') + '#about'" @click="closeMenu"
                    class="group py-1.5 border-b border-zinc-300/30 dark:border-zinc-700/40 flex justify-between items-end hover:text-zinc-950 dark:hover:text-white transition-all">
                    <div class="flex flex-col">
                        <span
                            class="text-[10px] text-zinc-600 dark:text-zinc-400 font-bold mb-[-4px]">02/IDENTITY</span>
                        <span>{{ $t('nav.about') }}</span>
                    </div>
                    <span
                        class="text-xs font-bold text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">#BIO_DATA</span>
                </NuxtLink>

                <NuxtLink :to="localePath('/') + '#projects'" @click="closeMenu"
                    class="group py-1.5 border-b border-zinc-300/30 dark:border-zinc-700/40 flex justify-between items-end hover:text-zinc-950 dark:hover:text-white transition-all">
                    <div class="flex flex-col">
                        <span
                            class="text-[10px] text-zinc-600 dark:text-zinc-400 font-bold mb-[-4px]">03/PRODUCTION</span>
                        <span>{{ $t('nav.projects') }}</span>
                    </div>
                    <span
                        class="text-xs font-bold text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">#WORK_LOGS</span>
                </NuxtLink>

                <NuxtLink :to="localePath('/') + '#contact'" @click="closeMenu"
                    class="group py-1.5 border-b border-zinc-300/30 dark:border-zinc-700/40 flex justify-between items-end hover:text-zinc-950 dark:hover:text-white transition-all">
                    <div class="flex flex-col">
                        <span
                            class="text-[10px] text-zinc-600 dark:text-zinc-400 font-bold mb-[-4px]">04/COMMUNICATION</span>
                        <span>{{ $t('nav.contact') }}</span>
                    </div>
                    <span
                        class="text-xs font-bold text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">#PING_SYS</span>
                </NuxtLink>
            </div>

            <div class="mt-auto space-y-4">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                        <span
                            class="text-[10px] font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest border-l-2 border-zinc-400 dark:border-zinc-700 pl-2">
                            System_Configuration
                        </span>
                    </div>

                    <div class="bg-zinc-200/40 dark:bg-zinc-950/50 p-4 rounded-lg flex flex-col gap-6">

                        <div class="flex items-center justify-between">
                            <span
                                class="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                                Engine_Output
                            </span>
                            <LogLevelToggle />
                        </div>

                        <div
                            class="flex items-center justify-end pt-4 border-t border-zinc-300/30 dark:border-zinc-700/30">
                            <div class="flex flex-col gap-1 items-end">
                                <span
                                    class="text-[8px] font-bold text-zinc-500 dark:text-zinc-600 uppercase tracking-widest">
                                    Power_Switch
                                </span>
                                <ToggleTheme />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </Transition>
</template>

<style scoped>
::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgb(161 161 170 / 0.3);
    border-radius: 4px;
}
</style>
