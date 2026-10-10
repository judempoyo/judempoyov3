import type { Ref } from 'vue'

export const usePageMotion = (root: Ref<HTMLElement | null>) => {
  let media: MediaQueryList | undefined
  let dispose: (() => void) | undefined
  let disposed = false
  let loading = false
  let idle: number | undefined
  let timer: ReturnType<typeof setTimeout> | undefined

  const start = async () => {
    if (disposed || media?.matches || !root.value || loading || dispose) return
    loading = true
    try {
      const { startProductionMotion } = await import('~/utils/productionMotion')
      if (!disposed && !media?.matches && root.value) dispose = startProductionMotion(root.value)
    } catch {
    } finally {
      loading = false
    }
  }
  const schedule = () => {
    if ('requestIdleCallback' in window) idle = window.requestIdleCallback(() => { void start() }, { timeout: 1800 })
    else timer = setTimeout(() => { void start() }, 250)
  }
  const update = () => {
    if (media?.matches) { dispose?.(); dispose = undefined }
    else schedule()
  }
  onMounted(() => {
    media = window.matchMedia('(prefers-reduced-motion: reduce)')
    media.addEventListener('change', update)
    if (media.matches) return
    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })
  })
  onBeforeUnmount(() => {
    disposed = true
    dispose?.()
    if (idle !== undefined && 'cancelIdleCallback' in window) window.cancelIdleCallback(idle)
    clearTimeout(timer)
    media?.removeEventListener('change', update)
    window.removeEventListener('load', schedule)
  })
}
