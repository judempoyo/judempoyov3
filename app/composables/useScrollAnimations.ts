import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useScrollAnimations = () => {
    const prefersReducedMotion = ref(false)

    onMounted(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        prefersReducedMotion.value = mediaQuery.matches

        // Register GSAP plugin
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger)
        }

        // Listen for changes
        mediaQuery.addEventListener('change', (e) => {
            prefersReducedMotion.value = e.matches
        })
    })

    /**
     * Fade in element on scroll
     */
    const fadeIn = (element: HTMLElement | string, options: any = {}) => {
        if (prefersReducedMotion.value) return

        const defaults = {
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        }

        const mergedOptions = { ...defaults, ...options }

        gsap.fromTo(
            element,
            { opacity: 0, y: options.y || 30 },
            { opacity: 1, y: 0, ...mergedOptions }
        )
    }

    /**
     * Slide in from direction
     */
    const slideIn = (
        element: HTMLElement | string,
        direction: 'left' | 'right' | 'bottom' | 'top' = 'bottom',
        options: any = {}
    ) => {
        if (prefersReducedMotion.value) return

        const directionMap = {
            left: { x: -50, y: 0 },
            right: { x: 50, y: 0 },
            bottom: { x: 0, y: 50 },
            top: { x: 0, y: -50 },
        }

        const defaults = {
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        }

        const mergedOptions = { ...defaults, ...options }
        const from = { opacity: 0, ...directionMap[direction] }
        const to = { opacity: 1, x: 0, y: 0, ...mergedOptions }

        gsap.fromTo(element, from, to)
    }

    /**
     * Stagger animation for multiple elements
     */
    const staggerIn = (elements: HTMLElement[] | string, options: any = {}) => {
        if (prefersReducedMotion.value) return

        const defaults = {
            duration: 0.9,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: elements,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        }

        const mergedOptions = { ...defaults, ...options }

        gsap.fromTo(
            elements,
            { opacity: 0, y: options.y || 30 },
            { opacity: 1, y: 0, ...mergedOptions }
        )
    }

    /**
     * Scale in animation
     */
    const scaleIn = (element: HTMLElement | string, options: any = {}) => {
        if (prefersReducedMotion.value) return

        const defaults = {
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        }

        const mergedOptions = { ...defaults, ...options }

        gsap.fromTo(
            element,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, ...mergedOptions }
        )
    }

    /**
     * Reveal animation (clip-path)
     */
    const reveal = (element: HTMLElement | string, options: any = {}) => {
        if (prefersReducedMotion.value) return

        const defaults = {
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        }

        const mergedOptions = { ...defaults, ...options }

        gsap.fromTo(
            element,
            { clipPath: 'inset(0 0 100% 0)' },
            { clipPath: 'inset(0 0 0% 0)', ...mergedOptions }
        )
    }

    /**
     * Cleanup all ScrollTriggers
     */
    const cleanup = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }

    onUnmounted(() => {
        cleanup()
    })

    return {
        fadeIn,
        slideIn,
        staggerIn,
        scaleIn,
        reveal,
        cleanup,
        prefersReducedMotion,
    }
}
