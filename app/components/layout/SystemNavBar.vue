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
      bg-zinc-50/90 dark:bg-zinc-950/90
      text-zinc-800 dark:text-zinc-200
      backdrop-blur-lg border-b border-zinc-200/50 dark:border-zinc-800/50
      flex items-center justify-between px-6 font-bold text-[10px] transition-colors">

        <div class="flex items-center gap-6 text-[9px] sm:text-[10px]">
            <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400 animate-pulse"></span>
                <span class="text-zinc-900 dark:text-zinc-100">{{ $t('system_status.online') }}</span>
            </div>

            <div class="hidden sm:flex gap-4 uppercase text-zinc-600 dark:text-zinc-400">
                <span>{{ $t('system_status.location') }}</span>
                <span>{{ $t('system_status.tz') }}</span>
                <span class="text-zinc-400 dark:text-zinc-700">|</span>
                <span>{{ $t('system_status.learning') }}</span>
            </div>
        </div>

        <div class="flex items-center gap-4">
            <span class="font-mono text-zinc-900 dark:text-zinc-100">{{ currentTime }}</span>
            <span class="hidden sm:inline text-zinc-500 dark:text-zinc-400 uppercase">{{ $t('system_status.uptime')
                }}</span>
        </div>
    </div>
</template>