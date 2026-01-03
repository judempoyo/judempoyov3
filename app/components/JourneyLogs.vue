<script setup lang="ts">
const { tm, rt } = useI18n()
const logs = tm('journey.logs') as any[]
</script>

<template>
  <div class="space-y-5 font-mono">
    <div v-for="(log, i) in logs" :key="i" class="relative pl-6 pb-6 border-l border-zinc-300 dark:border-zinc-700
      group last:pb-0 transition-colors">

      <!-- marker -->
      <div class="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full
        border-2 border-zinc-400 dark:border-zinc-600 bg-white dark:bg-zinc-900
        shadow-[0_0_0_3px_white] dark:shadow-[0_0_0_3px_#09090B]
        group-hover:border-green-500 dark:group-hover:border-green-400
        group-hover:scale-110 transition-all duration-150 ease-out">
      </div>

      <div class="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
        <span class="text-[11px] font-black text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
          {{ rt(log.date) }}
        </span>

        <div class="space-y-1">
          <span class="text-sm font-bold uppercase tracking-tight text-zinc-900 dark:text-zinc-100">
            >> {{ rt(log.event) }}
          </span>
          <p class="text-[12px] leading-relaxed text-zinc-700 dark:text-zinc-400 lowercase">
            {{ rt(log.detail) }}
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
