<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')

let timer: any

onMounted(() => {
    const updateTime = () => {
        const now = new Date()
        currentTime.value = now.toLocaleTimeString('en-GB', { hour12: false })
    }
    updateTime()
    timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
    clearInterval(timer)
})
</script>

<template>
    <div class="fixed top-0 w-full z-50 h-8
      bg-zinc-50/70 dark:bg-black/80
      text-zinc-800 dark:text-zinc-300
      backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800
      flex items-center justify-between px-6 font-bold text-[10px] transition-colors">

        <div class="flex items-center gap-6 text-[9px] sm:text-[10px]">
            <div class="flex items-center gap-2">
                <span
                    class="w-2 h-2 rounded-full bg-green-500/70 dark:bg-green-400/80 animate-pulse transition-opacity"></span>
                <span class="text-zinc-900 dark:text-white">{{ $t('system_status.online') }}</span>
            </div>

            <div class="hidden sm:flex gap-4 uppercase opacity-70">
                <span>{{ $t('system_status.location') }}</span>
                <span>{{ $t('system_status.tz') }}</span>
                <span class="text-zinc-400 dark:text-zinc-600">|</span>
                <span>{{ $t('system_status.learning') }}</span>
            </div>
        </div>

        <div class="flex items-center gap-4">
            <span class="font-mono text-zinc-900 dark:text-white">{{ currentTime }}</span>
            <span class="hidden sm:inline opacity-50 uppercase">{{ $t('system_status.uptime') }}</span>
        </div>
    </div>
</template>
