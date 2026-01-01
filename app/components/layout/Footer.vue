<template>
    <footer
        class="py-6 border-t border-border bg-zinc-100 dark:bg-zinc-700 font-bold text-[10px] uppercase tracking-[0.2em] text-center text-zinc-900 dark:text-zinc-300 px-6">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex gap-4">
                <span>VER: 0.0.1_STABLE</span>
                <span>ENV: PRODUCTION</span>
            </div>
            <div>
                DESIGNED_BY: JUDE.MPOYO // BUILD: {{ new Date().getFullYear() }}
            </div>
            <div class="flex gap-4">
                <a href="https://github.com/judempoyo" target="_blank"
                    class="hover:text-zinc-800 hover:dark:text-zinc-400 hover:underline underline-offset-4 transition-colors">GITHUB</a>
                <a href="https://linkedin.com/in/jude-mpoyo" target="_blank"
                    class="hover:text-zinc-800 hover:dark:text-zinc-400 hover:underline underline-offset-4 transition-colors">LINKEDIN</a>
            </div>
        </div>
    </footer>
</template>
