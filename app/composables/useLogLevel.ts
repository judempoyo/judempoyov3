export const useLogLevel = () => {
    const level = useState<'INFO' | 'DEBUG'>('log-level', () => 'INFO')

    const toggleLevel = () => {
        level.value = level.value === 'INFO' ? 'DEBUG' : 'INFO'
    }

    return {
        level,
        toggleLevel,
        isInfo: computed(() => level.value === 'INFO'),
        isDebug: computed(() => level.value === 'DEBUG')
    }
}
