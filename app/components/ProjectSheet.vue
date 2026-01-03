<script setup lang="ts">
const { t } = useI18n()
const { isDebug } = useLogLevel()

defineProps<{
  project: {
    title: string
    description: string
    stack: string[]
    metrics?: {
      loadTime?: string
      dockerSize?: string
      infra: string
    }
    archDiagram?: string
  }
}>()
</script>

<template>
  <div class="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900
    rounded-2xl shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
    group hover:border-green-500 dark:hover:border-green-400
    transition-all duration-200 ease-out">

    <!-- Header -->
    <div class="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800
      flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/40 rounded-t-2xl">
      <h3 class="text-lg font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
        {{ project.title }}
      </h3>
      <div class="flex gap-2">
        <span v-for="tag in project.stack.slice(0, 3)" :key="tag" class="text-[9px] font-bold px-2 py-1 border border-zinc-300 dark:border-zinc-700
          text-zinc-700 dark:text-zinc-300 uppercase rounded-md">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Body -->
    <div class="p-6 space-y-5">
      <p class="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {{ project.description }}
      </p>

      <!-- Debug Meta -->
      <div v-if="isDebug" class="space-y-4 pt-4 border-t border-zinc-300 dark:border-zinc-700 border-dashed">
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-1">
            <span class="text-[9px] font-black uppercase text-green-600 dark:text-green-400">INFRA:</span>
            <p class="text-[10px] font-mono text-zinc-800 dark:text-zinc-400 whitespace-pre-line">
              {{ project.metrics?.infra }}
            </p>
          </div>

          <div class="space-y-2">
            <div v-if="project.metrics?.dockerSize" class="space-y-1">
              <span class="text-[9px] font-black uppercase text-green-600 dark:text-green-400">DOCKER SIZE:</span>
              <p class="text-[10px] font-mono text-zinc-800 dark:text-zinc-400">
                {{ project.metrics.dockerSize }}
              </p>
            </div>
            <div v-if="project.metrics?.loadTime" class="space-y-1">
              <span class="text-[9px] font-black uppercase text-green-600 dark:text-green-400">LATENCY:</span>
              <p class="text-[10px] font-mono text-zinc-800 dark:text-zinc-400">
                {{ project.metrics.loadTime }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="project.archDiagram" class="pt-2">
          <span class="text-[9px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-600">
            BLUEPRINT:
          </span>
          <pre class="mt-2 p-3 bg-zinc-100 dark:bg-zinc-950 text-green-700 dark:text-green-500/90
            text-[9px] overflow-x-auto border border-zinc-300 dark:border-zinc-800 rounded-lg">
          <code>{{ project.archDiagram }}</code>
        </pre>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="px-6 py-3 border-t border-zinc-200 dark:border-zinc-800
      flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/30 rounded-b-2xl
      group-hover:bg-green-50 dark:group-hover:bg-green-900/10 transition-colors duration-200">

      <span class="text-[10px] font-bold text-zinc-500 dark:text-zinc-600">
        STATUS: PRODUCTION
      </span>

      <button class="text-[10px] font-black uppercase tracking-widest
        text-green-600 dark:text-green-400
        flex items-center gap-2
        transition-transform duration-150 ease-out
        hover:translate-x-0.5 active:translate-x-1">

        {{ t('projects.cta_doc') }}

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          class="opacity-70 group-hover:opacity-100 transition-opacity">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>

      </button>

    </div>
  </div>

</template>
