<script setup lang="ts">
const currentTime = ref('')

onMounted(() => {
    const updateTime = () => {
        const now = new Date()
        currentTime.value = now.toLocaleTimeString('en-GB', { hour12: false })
    }
    updateTime()
    setInterval(updateTime, 1000)
})
</script>

<template>
    <div
        class="fixed top-0 w-full z-[60] h-8 bg-zinc-100/80 dark:bg-zinc-950/90 text-muted-foreground dark:text-zinc-400 backdrop-blur-md text-[10px] px-6 flex items-center justify-between font-bold border-b border-border dark:border-zinc-800">
        <div class="flex items-center gap-6 text-[9px] sm:text-[10px]">
            <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-foreground dark:text-zinc-300">{{ $t('system_status.online') }}</span>
            </div>
            <div class="hidden sm:flex gap-4 uppercase">
                <span>{{ $t('system_status.location') }}</span>
                <span>{{ $t('system_status.tz') }}</span>
                <span class="text-border dark:text-zinc-600">|</span>
                <span>{{ $t('system_status.learning') }}</span>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <span class="font-mono text-foreground dark:text-zinc-300">{{ currentTime }}</span>
            <span class="hidden sm:inline text-muted-foreground/60 dark:text-zinc-400 uppercase">{{
                $t('system_status.uptime') }}</span>
        </div>
    </div>
</template>
