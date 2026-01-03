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

            <div class="flex flex-col gap-2 font-black uppercase text-xs">
                <NuxtLink :to="localePath('/')" @click="closeMenu" class="py-2 border-b border-zinc-300/20">01/{{
                    $t('nav.home') }}</NuxtLink>
                <NuxtLink :to="localePath('/') + '#about'" @click="closeMenu" class="py-2 border-b border-zinc-300/20">
                    02/{{ $t('nav.about') }}</NuxtLink>
                <NuxtLink :to="localePath('/') + '#projects'" @click="closeMenu"
                    class="py-2 border-b border-zinc-300/20">03/{{ $t('nav.projects') }}</NuxtLink>
                <NuxtLink :to="localePath('/') + '#contact'" @click="closeMenu"
                    class="py-2 border-b border-zinc-300/20">04/{{ $t('nav.contact') }}</NuxtLink>
            </div>
            <div class="mt-auto space-y-4">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                        <span
                            class="text-[10px] font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest border-l-2 border-zinc-400 dark:border-zinc-700 pl-2">
                            System_Configuration
                        </span>
                    </div>

                    <div
                        class="mt-auto pt-4 border-t border-dashed border-zinc-300/30 dark:border-zinc-800 flex justify-end">
                        <LogLevelToggle />
                    </div>

                    <div class="pt-4 flex justify-end">
                        <ToggleTheme />
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
