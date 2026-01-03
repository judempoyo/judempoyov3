<script setup lang="ts">
const { level, toggleLevel } = useLogLevel()
</script>

<template>
    <div class="flex items-center gap-3 select-none">
        <span class="text-[10px] font-black tracking-widest uppercase italic">Sys_Output:</span>

        <button @click="toggleLevel" class="group relative flex items-center w-28 h-8 p-1 rounded-lg
        bg-zinc-300/40 dark:bg-zinc-800/60 border border-zinc-300 dark:border-zinc-700
        transform transition-all duration-200 ease-out
        hover:scale-[1.02] active:scale-[0.96] overflow-hidden">

            <div class="absolute inset-y-1 flex items-center justify-center text-[9px] font-black uppercase
          rounded-md shadow-sm transition-all duration-150 ease-out
          bg-white dark:bg-green-500 text-zinc-900 dark:text-white
          group-hover:scale-105"
                :class="level === 'INFO' ? 'left-1 w-[46px]' : 'left-[56px] w-[54px] opacity-90 animate-pulse'">
                <span v-if="level === 'DEBUG'" class="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-100 dark:bg-zinc-600 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-zinc-100 dark:bg-zinc-600"></span>
                </span>

                {{ level }}
            </div>

            <div class="flex justify-between w-full px-2 pointer-events-none">
                <span class="text-[8px] font-bold transition-opacity duration-300"
                    :class="level === 'INFO' ? 'opacity-0' : 'opacity-70 text-zinc-700 dark:text-white'">INFO</span>

                <span class="text-[8px] font-bold transition-opacity duration-300"
                    :class="level === 'DEBUG' ? 'opacity-0' : 'opacity-70 text-zinc-700 dark:text-white'">DEBUG</span>
            </div>

            <div v-if="level === 'DEBUG'"
                class="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-[2px] w-full animate-scan pointer-events-none">
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
    animation: scan 3s linear infinite;
}
</style>
