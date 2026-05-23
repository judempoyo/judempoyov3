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
    })
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
        <Transition enter-active-class="transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)"
            enter-from-class="translate-y-24 opacity-0 scale-95" enter-to-class="translate-y-0 opacity-100 scale-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="translate-y-0 opacity-100 scale-100" leave-to-class="translate-y-24 opacity-0 scale-95">
            <div v-if="showNotification"
                class="fixed bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-6 z-50 w-full max-w-sm px-4 sm:px-0">
                <div class="group relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl dark:shadow-green-900/20 overflow-hidden cursor-pointer hover:scale-102 transition-transform duration-300"
                    @click="handleClick">

                    <!-- Progress Bar -->
                    <div
                        class="absolute top-0 left-0 h-1 bg-linear-to-r from-green-500 to-emerald-400 w-full animate-[shrink_10s_linear_forwards] origin-left">
                    </div>

                    <div class="p-5 flex items-start gap-4">
                        <!-- Icon Box -->
                        <div
                            class="shrink-0 w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <!-- Timer Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 animate-pulse" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM13 6V11H17V13H11V6H13Z">
                                </path>
                            </svg>
                        </div>

                        <div class="flex-1 min-w-0 space-y-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-black uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                                    Time Traveler
                                </h3>
                                <button @click.stop="dismiss"
                                    class="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Merci de prendre le temps d'explorer ! Une surprise vous attend...
                            </p>

                            <div class="pt-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                                <span class="text-[10px] font-black uppercase tracking-widest">Click to reveal</span>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-3 h-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
@keyframes shrink {
    from {
        transform: scaleX(1);
    }

    to {
        transform: scaleX(0);
    }
}
</style>
