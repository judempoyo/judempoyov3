<script setup lang="ts">
const { t } = useI18n()

const showNotification = ref(false)
const showPhoto = ref(false)
const { onTimeReached } = useTimeTracker()

onMounted(() => {
    // Trigger notification after 90 seconds
    onTimeReached(() => {
        showNotification.value = true

        // Auto-dismiss after 10 seconds if not clicked
        setTimeout(() => {
            if (showNotification.value) {
                showNotification.value = false
            }
        }, 10000)
    }, 90)
})

const handleClick = () => {
    showNotification.value = false
    showPhoto.value = true
}

const dismiss = () => {
    showNotification.value = false
}
</script>

<template>
    <PhotoModal v-model:show="showPhoto" />

    <Teleport to="body">
        <Transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="translate-y-full opacity-0" enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition-all duration-200 ease-in" leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-full opacity-0">
            <div v-if="showNotification" class="fixed bottom-6 right-6 z-50 max-w-sm">
                <div class="bg-white dark:bg-zinc-900 border-2 border-green-500 dark:border-green-400 rounded-xl shadow-2xl overflow-hidden cursor-pointer"
                    @click="handleClick">
                    <!-- Header -->
                    <div class="px-4 py-3 bg-green-500 dark:bg-green-400 flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            <span class="text-xs font-black uppercase tracking-wider text-white dark:text-zinc-900">
                                Easter Egg Unlocked
                            </span>
                        </div>
                        <button @click.stop="dismiss"
                            class="text-white dark:text-zinc-900 hover:opacity-70 transition-opacity">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <!-- Content -->
                    <div class="p-4 space-y-3">
                        <p class="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Merci d'avoir pris le temps d'explorer mon portfolio ! 🎉
                        </p>
                        <p class="text-xs text-zinc-600 dark:text-zinc-400">
                            Cliquez ici pour découvrir qui se cache derrière ce code...
                        </p>

                        <!-- Visual hint -->
                        <div class="flex items-center gap-2 pt-2">
                            <div class="flex-1 h-px bg-zinc-200 dark:bg-zinc-700"></div>
                            <span class="text-[10px] font-mono text-zinc-500 dark:text-zinc-500">
                                Click to reveal
                            </span>
                            <div class="flex-1 h-px bg-zinc-200 dark:bg-zinc-700"></div>
                        </div>
                    </div>

                    <!-- Hover effect indicator -->
                    <div
                        class="h-1 bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-300">
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
