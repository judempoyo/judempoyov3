<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <div class="bg-zinc-900 dark:bg-black p-6 border border-zinc-800 rounded-2xl
    shadow-[0_8px_32px_rgba(0,0,0,0.4)] dark:shadow-[0_8px_32px_rgba(0,255,120,0.08)]
    relative overflow-hidden group transition-all duration-200 ease-out">

    <div
      class="absolute top-3 left-3 flex gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none">
      <div class="w-2.5 h-2.5 rounded-full bg-red-500/90"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-amber-500/90"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-green-500/90"></div>
    </div>

    <div
      class="absolute top-3 right-3 text-[8px] font-extrabold uppercase tracking-widest text-zinc-600 dark:text-zinc-800 pointer-events-none">
      stack.yml
    </div>

    <pre class="mt-8 text-[12px] leading-relaxed"><code class="font-mono text-zinc-300/90 dark:text-zinc-400">
<span class="text-green-400 dark:text-green-500 font-bold">stack</span>:
  <span class="text-green-400">{{ t('tech_stack.languages') }}</span>: <span class="text-zinc-500">{{ t('tech_stack.proficiency') }}</span>
    <span class="text-zinc-400/80">- PHP [PRO]</span>
    <span class="text-green-500">- GO [{{ t('tech_stack.learning') }}]</span>
    <span class="text-zinc-400/80">- TS [BASIC]</span>

  <span class="text-green-400">{{ t('tech_stack.frameworks') }}</span>:
    <span class="text-zinc-300/90">- Laravel</span>
    <span class="text-green-400/90">- Nuxt [MID]</span>
    <span class="text-zinc-300/90">- Tailwind</span>

  <span class="text-green-400">{{ t('tech_stack.infrastructure') }}</span>:
    <span class="text-green-500">- Docker</span>
    <span class="text-zinc-300/90">- Nginx</span>
    <span class="text-zinc-300/80">- MySQL/MariaDB</span>
    <span class="text-zinc-400/70">- GitHub Actions</span>

<span class="text-zinc-700 italic">{{ t('tech_stack.end_config') }}</span>
  </code></pre>

  </div>

</template>
