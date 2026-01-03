<script setup lang="ts">
import type { Project } from '~/composables/useProjects'

const { t } = useI18n()
const { isDebug } = useLogLevel()

const props = defineProps<{
  project: Project
}>()

const linkText = computed(() => {
  if (props.project.isLive) {
    return t('projects.cta_live')
  }
  return t('projects.cta_docs')
})

const linkUrl = computed(() => {
  return props.project.isLive ? props.project.liveUrl : props.project.docsUrl
})
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
        {{ t(project.titleKey) }}
      </h3>
     <div class="flex flex-wrap gap-2 justify-end max-w-full">
  <span
    v-for="tag in project.stack"
    :key="tag"
    class="text-[9px] sm:text-[8px] md:text-[9px]
      font-bold px-2 sm:px-1.5 md:px-2
      py-1 sm:py-0.5 md:py-1
      border border-zinc-300 dark:border-zinc-700
      text-zinc-700 dark:text-zinc-300
      uppercase rounded-md whitespace-nowrap">
    {{ tag }}
  </span>
</div>

    </div>

    <!-- Body -->
    <div class="p-6 space-y-5">
      <p class="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {{ t(project.descriptionKey) }}
      </p>

      <!-- Debug Meta -->
      <div v-if="isDebug" class="space-y-4 border-t border-dashed
    border-zinc-300 dark:border-zinc-700
    md:pt-4 pt-3 md:gap-6 gap-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div class="space-y-1">
            <span class="text-[9px] font-black uppercase text-green-600 dark:text-green-400">INFRA:</span>
            <p class="text-[10px] font-mono text-zinc-800 dark:text-zinc-400 whitespace-pre-line break-words">
              {{ t(project.metrics.infraKey) }}
            </p>
          </div>

          <div class="space-y-2">
            <div v-if="project.metrics.dockerSize" class="space-y-1">
              <span class="text-[9px] font-black uppercase text-green-600 dark:text-green-400">DOCKER SIZE:</span>
              <p class="text-[10px] font-mono text-zinc-800 dark:text-zinc-400 break-words">
                {{ project.metrics.dockerSize }}
              </p>
            </div>
            <div v-if="project.metrics.loadTime" class="space-y-1">
              <span class="text-[9px] font-black uppercase text-green-600 dark:text-green-400">LATENCY:</span>
              <p class="text-[10px] font-mono text-zinc-800 dark:text-zinc-400 break-words">
                {{ project.metrics.loadTime }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="project.archDiagram" class="pt-2">
          <span class="text-[9px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-600">
            BLUEPRINT:
          </span>

          <pre class="mt-2 p-3 bg-zinc-100 dark:bg-zinc-950
        text-green-700 dark:text-green-500/90
        text-[9px] overflow-x-auto border
        border-zinc-300 dark:border-zinc-800 rounded-lg
        max-w-full whitespace-pre-wrap">
      <code>{{ project.archDiagram }}</code>
    </pre>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div class="px-6 py-3 border-t border-zinc-200 dark:border-zinc-800
      flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/30 rounded-b-2xl
      group-hover:bg-green-50 dark:group-hover:bg-green-900/10 transition-colors duration-200">

      <div class="flex items-center gap-2">
        <span class="text-[10px] font-bold text-zinc-500 dark:text-zinc-600">
          STATUS:
        </span>
        <span v-if="project.isLive"
          class="flex items-center gap-1.5 text-[10px] font-black uppercase text-green-600 dark:text-green-400">
          <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          LIVE
        </span>
        <span v-else class="text-[10px] font-black uppercase text-zinc-500 dark:text-zinc-600">
          DOCS_ONLY
        </span>
      </div>

      <a v-if="linkUrl" :href="linkUrl" target="_blank" rel="noopener noreferrer" class="text-[10px] font-black uppercase tracking-widest
        text-green-600 dark:text-green-400
        flex items-center gap-2
        transition-transform duration-150 ease-out
        hover:translate-x-0.5 active:translate-x-1">

        {{ linkText }}

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          class="opacity-70 group-hover:opacity-100 transition-opacity">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>

      </a>

    </div>
  </div>

</template>
