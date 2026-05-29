export const useScrollAnimations = () => {
  const prefersReducedMotion = ref(false)
  const observers = ref<IntersectionObserver[]>([])

  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mediaQuery.matches
    mediaQuery.addEventListener('change', (e) => {
      prefersReducedMotion.value = e.matches
    })
  })

  const observe = (
    element: HTMLElement | null,
    animClass: string,
    options: { delay?: number; threshold?: number } = {}
  ) => {
    if (!element || import.meta.server) return
    if (prefersReducedMotion.value) {
      element.style.opacity = '1'
      return
    }

    element.classList.add(animClass, 'scroll-anim')

    if (options.delay) {
      element.style.setProperty('--anim-delay', `${options.delay}ms`)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(element)
    observers.value.push(observer)
  }

  const observeStagger = (
    elements: NodeListOf<HTMLElement> | HTMLElement[],
    animClass: string,
    options: { staggerMs?: number; threshold?: number } = {}
  ) => {
    const stagger = options.staggerMs ?? 100
    Array.from(elements).forEach((el, index) => {
      observe(el, animClass, { delay: index * stagger, threshold: options.threshold })
    })
  }

  const fadeIn = (element: HTMLElement | null, options: { delay?: number; y?: number } = {}) => {
    const cls = options.y && options.y > 20 ? 'anim-fade-up-lg' : 'anim-fade-up'
    observe(element, cls, { delay: options.delay })
  }

  const slideIn = (
    element: HTMLElement | null,
    direction: 'left' | 'right' | 'bottom' | 'top' = 'bottom',
    options: { delay?: number } = {}
  ) => {
    const dirMap = {
      bottom: 'anim-fade-up',
      top: 'anim-fade-down',
      left: 'anim-fade-right',
      right: 'anim-fade-left',
    }
    observe(element, dirMap[direction], { delay: options.delay })
  }

  const staggerIn = (
    elements: NodeListOf<HTMLElement> | HTMLElement[],
    options: { stagger?: number; y?: number; delay?: number } = {}
  ) => {
    const staggerMs = (options.stagger ?? 0.2) * 1000
    const baseDelay = (options.delay ?? 0) * 1000
    const cls = options.y && options.y > 20 ? 'anim-fade-up-lg' : 'anim-fade-up'
    Array.from(elements).forEach((el, index) => {
      observe(el, cls, { delay: baseDelay + index * staggerMs })
    })
  }

  const scaleIn = (element: HTMLElement | null, options: { delay?: number } = {}) => {
    observe(element, 'anim-scale-in', { delay: options.delay })
  }

  const reveal = (element: HTMLElement | null, options: { delay?: number } = {}) => {
    observe(element, 'anim-reveal', { delay: options.delay })
  }

  onUnmounted(() => {
    observers.value.forEach((obs) => obs.disconnect())
    observers.value = []
  })

  return {
    fadeIn,
    slideIn,
    staggerIn,
    scaleIn,
    reveal,
    prefersReducedMotion,
  }
}

export const useParallax = (
  element: Ref<HTMLElement | null>,
  speed: number = 0.3
) => {
  if (import.meta.server) return
  let rafId: number

  const update = () => {
    const el = element.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2 - window.innerHeight / 2
    el.style.transform = `translateY(${centerY * speed}px)`
    rafId = requestAnimationFrame(update)
  }

  onMounted(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!mq.matches) {
      rafId = requestAnimationFrame(update)
    }
  })

  onUnmounted(() => cancelAnimationFrame(rafId))
}

export const useTilt = (
  element: Ref<HTMLElement | null>,
  options: { maxDeg?: number; scale?: number } = {}
) => {
  if (import.meta.server) return
  const maxDeg = options.maxDeg ?? 6
  const scale = options.scale ?? 1.02

  const onMove = (e: MouseEvent) => {
    const el = element.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg) scale(${scale})`
  }

  const onLeave = () => {
    const el = element.value
    if (!el) return
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)'
  }

  onMounted(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return
    const el = element.value
    if (!el) return
    el.style.transition = 'transform 0.15s ease-out'
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
  })

  onUnmounted(() => {
    const el = element.value
    if (!el) return
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', onLeave)
  })
}

export const useSectionFocus = (
  element: Ref<HTMLElement | null>
) => {
  if (import.meta.server) return
  const visibility = ref(0)
  let rafId: number

  const update = () => {
    const el = element.value
    if (el) {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0))
      visibility.value = Math.min(visible / vh, 1)
    }
    rafId = requestAnimationFrame(update)
  }

  onMounted(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!mq.matches) rafId = requestAnimationFrame(update)
  })

  onUnmounted(() => cancelAnimationFrame(rafId))

  return visibility
}
