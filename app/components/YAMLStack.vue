<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <div class="bg-zinc-900 dark:bg-black p-4 sm:p-6 border border-zinc-800 rounded-2xl
    shadow-dark-xl dark:shadow-green-glow
    relative overflow-hidden group transition-all duration-200 ease-out w-full max-w-full">

    <div
      class="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none">
      <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/90"></div>
      <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/90"></div>
      <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/90"></div>
    </div>

    <div
      class="absolute top-2 sm:top-3 right-2 sm:right-3 text-[7px] sm:text-[8px] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 pointer-events-none">
      stack.yml
    </div>

    <pre class="mt-6 sm:mt-8 text-[10px] sm:text-[12px] leading-relaxed overflow-x-auto"><code class="font-mono text-zinc-300 dark:text-zinc-300">
<span class="text-green-400 dark:text-green-400 font-bold">stack</span>:
  <span class="text-green-400 dark:text-green-400">{{ t('tech_stack.languages') }}</span>: <span class="text-zinc-400 dark:text-zinc-400">{{ t('tech_stack.proficiency') }}</span>
    <span class="text-zinc-300 dark:text-zinc-300">- PHP [PRO]</span>
    <span class="text-green-400 dark:text-green-400">- GO [{{ t('tech_stack.learning') }}]</span>
    <span class="text-zinc-300 dark:text-zinc-300">- TS [BASIC]</span>

  <span class="text-green-400 dark:text-green-400">{{ t('tech_stack.frameworks') }}</span>:
    <span class="text-zinc-200 dark:text-zinc-200">- Laravel</span>
    <span class="text-green-400 dark:text-green-400">- Nuxt [MID]</span>
    <span class="text-zinc-200 dark:text-zinc-200">- Tailwind</span>

  <span class="text-green-400 dark:text-green-400">{{ t('tech_stack.infrastructure') }}</span>:
    <span class="text-green-400 dark:text-green-400">- Docker</span>
    <span class="text-zinc-200 dark:text-zinc-200">- Nginx</span>
    <span class="text-zinc-200 dark:text-zinc-200">- MySQL/MariaDB</span>
    <span class="text-zinc-300 dark:text-zinc-300">- GitHub Actions</span>

<span class="text-zinc-400 dark:text-zinc-500 italic">{{ t('tech_stack.end_config') }}</span>
  </code></pre>

  </div>
</template>