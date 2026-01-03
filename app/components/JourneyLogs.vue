<script setup lang="ts">
const { logs } = useJourneyLogs()
const { t } = useI18n()
</script>

<template>
  <div class="space-y-6">
    <div v-for="(log, index) in logs" :key="index"
      class="group relative pl-6 pb-6 border-l-2 border-zinc-300 dark:border-zinc-700 last:border-transparent hover:border-green-500 dark:hover:border-green-400 transition-colors">

      <div
        class="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 group-hover:border-green-500 dark:group-hover:border-green-400 group-hover:bg-green-500 dark:group-hover:bg-green-400 transition-all">
      </div>

      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="text-xs font-black text-green-600 dark:text-green-400 uppercase tracking-widest">{{ log.date
            }}</span>
          <span class="text-xs font-bold text-zinc-500 dark:text-zinc-600 uppercase">{{ t(log.eventKey) }}</span>
        </div>
        <p class="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
          {{ t(log.detailKey) }}
        </p>
      </div>
    </div>
  </div>
</template>
