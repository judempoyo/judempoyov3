<template>
    <footer class="py-6 border-t border-zinc-200 dark:border-zinc-800
    bg-white dark:bg-zinc-900
    font-bold text-[11px] uppercase tracking-wide text-center
    text-zinc-600 dark:text-zinc-500 px-6 transition-colors">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

            <div class="flex gap-4 opacity-70">
                <span>VER: 0.0.1_STABLE</span>
                <span>ENV: PRODUCTION</span>
            </div>

            <div class="opacity-80 text-zinc-700 dark:text-zinc-400">
                DESIGNED_BY: JUDE.MPOYO // BUILD: {{ new Date().getFullYear() }}
            </div>

            <div class="flex gap-4">
                <a class="text-green-600 dark:text-green-400 transition-all duration-150
          hover:scale-105 active:scale-95 hover:underline underline-offset-4" href="github.com/judempoyo"
                    target="_blank">GITHUB</a>

                <a class="text-green-600 dark:text-green-400 transition-all duration-150
          hover:scale-105 active:scale-95 hover:underline underline-offset-4" href="linkedin.com/in/jude-mpoyo"
                    target="_blank">LINKEDIN</a>
            </div>

        </div>
    </footer>

</template>
