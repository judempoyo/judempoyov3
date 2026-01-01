<script setup lang="ts">
const { level, toggleLevel } = useLogLevel()
</script>

<template>
    <div class="flex items-center gap-3 select-none">
        <span
            class="text-[10px] font-black tracking-widest text-muted-foreground/50 uppercase italic">Sys_Output:</span>
        <button @click="toggleLevel"
            class="group relative flex items-center bg-zinc-200/50 dark:bg-zinc-800/60 p-1 rounded-md w-28 h-8 transition-all duration-300 hover:border-primary/50 overflow-hidden">

            <div class="absolute inset-y-1 transition-all duration-500 ease-in-out flex items-center justify-center text-[9px] font-black tracking-widest uppercase rounded-xs shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"
                :class="level === 'INFO'
                    ? 'left-1 w-[46px] bg-zinc-300 dark:bg-zinc-600 text-dark dark:text-white'
                    : 'left-[56px] w-[54px] bg-zinc-400 dark:bg-zinc-700 dark:text-white animate-pulse border border-primary/20'">

                <span v-if="level === 'DEBUG'" class="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>

                {{ level }}
            </div>

            <div class="flex justify-between w-full px-2 pointer-events-none">
                <span class="text-[8px] font-bold transition-opacity duration-300"
                    :class="level === 'INFO' ? 'opacity-0' : 'opacity-40 dark:opacity-20 text-foreground dark:text-white'">INFO</span>
                <span class="text-[8px] font-bold transition-opacity duration-300"
                    :class="level === 'DEBUG' ? 'opacity-0' : 'opacity-40 dark:opacity-20 text-foreground dark:text-white'">DEBUG</span>
            </div>

            <div v-if="level === 'DEBUG'"
                class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[2px] w-full animate-scan pointer-events-none">
            </div>
        </button>
    </div>
</template>

<style scoped>
@keyframes scan {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(400%);
    }
}

.animate-scan {
    animation: scan 2s linear infinite;
}
</style>
