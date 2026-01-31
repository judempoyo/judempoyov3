export const useTimeTracker = () => {
    const totalTime = ref(0)
    const isActive = ref(true)
    const hasTriggered = ref(false)
    let intervalId: ReturnType<typeof setInterval> | null = null
    let startTime = Date.now()

    const STORAGE_KEY = 'portfolio_easter_egg_triggered'
    const TRIGGER_TIME = 5 // seconds

    onMounted(() => {
        // Check if already triggered in this session
        const triggered = sessionStorage.getItem(STORAGE_KEY)
        if (triggered === 'true') {
            hasTriggered.value = true
            return
        }

        // Track visibility changes
        const handleVisibilityChange = () => {
            if (document.hidden) {
                isActive.value = false
            } else {
                isActive.value = true
                startTime = Date.now()
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange)

        // Start tracking time
        intervalId = setInterval(() => {
            if (isActive.value && !hasTriggered.value) {
                totalTime.value += 1
            }
        }, 1000)

        onUnmounted(() => {
            if (intervalId) clearInterval(intervalId)
            document.removeEventListener('visibilitychange', handleVisibilityChange)
        })
    })

    const onTimeReached = (callback: () => void, seconds: number = TRIGGER_TIME) => {
        watch(totalTime, (newTime) => {
            if (newTime >= seconds && !hasTriggered.value) {
                hasTriggered.value = true
                sessionStorage.setItem(STORAGE_KEY, 'true')
                callback()
            }
        })
    }

    const reset = () => {
        totalTime.value = 0
        hasTriggered.value = false
        sessionStorage.removeItem(STORAGE_KEY)
    }

    return {
        totalTime,
        isActive,
        hasTriggered,
        onTimeReached,
        reset,
    }
}
