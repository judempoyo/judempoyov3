import { animate, inView, scroll, stagger } from 'motion'
import type { AnimationPlaybackControls } from 'motion'

export const startProductionMotion = (root: HTMLElement) => {
  const disposers: Array<() => void> = []
  const running = new Set<AnimationPlaybackControls>()
  const originalStyles = new Map<HTMLElement, string | null>()
  const remember = (element: HTMLElement) => {
    if (!originalStyles.has(element)) originalStyles.set(element, element.getAttribute('style'))
    return element
  }
  const track = (animation: AnimationPlaybackControls) => {
    running.add(animation)
    void Promise.resolve(animation).then(() => running.delete(animation), () => running.delete(animation))
    return animation
  }

  root.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element => {
    if (element.classList.contains('project-row')) return
    disposers.push(inView(element, (_element, entry) => {
      const distance = entry.boundingClientRect.top < 0 ? -20 : 26
      const animation = track(animate(remember(element), {
        opacity: [0.45, 1], transform: [`translateY(${distance}px)`, 'translateY(0px)'],
      }, { duration: 0.7, ease: [0.22, 1, 0.36, 1] }))
      return () => { animation.cancel(); element.style.opacity = '1'; element.style.transform = 'none' }
    }, { amount: 'some' }))
  })

  root.querySelectorAll<HTMLElement>('.project-row').forEach(row => {
    disposers.push(inView(row, (_element, entry) => {
      const distance = entry.boundingClientRect.top < 0 ? -20 : 28
      const pieces = Array.from(row.querySelectorAll<HTMLElement>('.project-number, .project-identity, .project-story'))
      pieces.forEach(remember)
      const animation = track(animate(pieces, {
        opacity: [0.35, 1], transform: [`translateY(${distance}px)`, 'translateY(0px)'],
      }, { duration: 0.75, delay: stagger(0.055), ease: [0.22, 1, 0.36, 1] }))
      const rule = row.querySelector<HTMLElement>('.project-reveal-rule')
      const line = rule ? track(animate(remember(rule), { transform: ['scaleX(0)', 'scaleX(1)'] }, { duration: 1.1, ease: [0.22, 1, 0.36, 1] })) : undefined
      return () => { animation.cancel(); line?.cancel(); pieces.forEach(piece => { piece.style.opacity = '1'; piece.style.transform = 'none' }) }
    }, { amount: 'some' }))
  })

  const plate = root.querySelector<HTMLElement>('.infrastructure-plate')
  const packet = plate?.querySelector<HTMLElement>('.delivery-packet')
  if (plate && packet) {
    const nodes = Array.from(plate.querySelectorAll<HTMLElement>('.node-square'))
    const wires = Array.from(plate.querySelectorAll<HTMLElement>('.route-wire'))
    const labels = Array.from(plate.querySelectorAll<HTMLElement>('.route-node > span:last-child'))
    let sequence: AnimationPlaybackControls | undefined
    let plateVisible = false
    const play = () => {
      sequence?.cancel()
      const base = plate.getBoundingClientRect()
      const points = nodes.map(node => {
        const rect = node.getBoundingClientRect()
        return { x: rect.left - base.left + rect.width / 2 - 4, y: rect.top - base.top + rect.height / 2 - 4 }
      })
      if (points.length !== 3 || wires.length !== 2) return
      const [build, deploy, operate] = points
      const bends = wires.map(wire => wire.getBoundingClientRect().bottom - base.top - 4)
      remember(packet)
      nodes.forEach(remember)
      labels.forEach(remember)
      sequence = animate([
        [packet, {
          x: [build!.x, build!.x, deploy!.x, deploy!.x, deploy!.x, operate!.x, operate!.x],
          y: [build!.y, bends[0]!, bends[0]!, deploy!.y, bends[1]!, bends[1]!, operate!.y],
          opacity: [0, 1, 1, 1, 1, 1, 0],
        }, { duration: 4.8, ease: 'linear', at: 0 }],
        [nodes[0]!, { scale: [1, 1.8, 1] }, { duration: 0.7, at: 0 }],
        [labels[0]!, { x: [0, 5, 0] }, { duration: 0.7, at: 0 }],
        [nodes[1]!, { scale: [1, 1.8, 1] }, { duration: 0.7, at: 2.2 }],
        [labels[1]!, { x: [0, 5, 0] }, { duration: 0.7, at: 2.2 }],
        [nodes[2]!, { scale: [1, 1.8, 1] }, { duration: 0.7, at: 4.2 }],
        [labels[2]!, { x: [0, 5, 0] }, { duration: 0.7, at: 4.2 }],
      ], { repeat: Infinity, repeatDelay: 1.2 })
    }
    const replay = plate.querySelector('.replay-motion')
    replay?.addEventListener('click', play)
    const handleVisibility = () => { if (document.hidden || !plateVisible) sequence?.pause(); else sequence?.play() }
    document.addEventListener('visibilitychange', handleVisibility)
    disposers.push(inView(plate, () => {
      plateVisible = true
      play()
      return () => { plateVisible = false; sequence?.cancel() }
    }, { amount: 0.4 }))
    disposers.push(() => { sequence?.cancel(); replay?.removeEventListener('click', play); document.removeEventListener('visibilitychange', handleVisibility) })
  }

  const operations = root.querySelector<HTMLElement>('.operations-section')
  const progressLine = operations?.querySelector<HTMLElement>('.operations-progress > span')
  if (operations && progressLine) {
    remember(progressLine)
    let previousStage = -1
    disposers.push(scroll(progress => {
      progressLine.style.transform = `scaleX(${progress})`
      const stage = Math.min(2, Math.floor(progress * 3))
      if (stage !== previousStage) {
        operations.dispatchEvent(new CustomEvent('production-stage', { detail: stage }))
        previousStage = stage
      }
    }, { target: operations, offset: ['start 80%', 'end 35%'] }))
    const stamp = operations.querySelector<HTMLElement>('.journal-stamp')
    if (stamp) {
      const movement = track(animate(remember(stamp), { y: [18, -18], rotate: [-6, 0] }, { ease: 'linear' }))
      disposers.push(scroll(movement, { target: operations, offset: ['start end', 'end start'] }))
    }
  }

  const golang = root.querySelector<HTMLElement>('.golang-block')
  if (golang) {
    disposers.push(inView(golang, () => {
      const glyphs = Array.from(golang.querySelectorAll<HTMLElement>('.go-glyph'))
      glyphs.forEach(remember)
      const animation = track(animate(glyphs, {
        transform: ['translateY(28px) rotate(-6deg)', 'translateY(0px) rotate(0deg)'],
        opacity: [0.2, 1],
      }, { duration: 0.85, delay: stagger(0.08), ease: [0.16, 1, 0.3, 1] }))
      return () => { animation.cancel(); glyphs.forEach(glyph => { glyph.style.opacity = '1'; glyph.style.transform = 'none' }) }
    }, { amount: 0.4 }))
  }

  root.querySelectorAll<HTMLElement>('.project-row, .button-primary, .portrait-frame, .go-note').forEach(host => {
    const target = host.querySelector<HTMLElement>('.project-identity h3, img, .go-lettering') || host
    remember(target)
    let effect: AnimationPlaybackControls | undefined
    const enter = () => {
      effect?.stop()
      effect = animate(target, { x: host.classList.contains('project-row') ? 6 : 0, y: -2, scale: host.classList.contains('portrait-frame') ? 1.02 : 1.01 }, { type: 'spring', stiffness: 230, damping: 25 })
    }
    const leave = () => {
      effect?.stop()
      effect = animate(target, { x: 0, y: 0, scale: 1 }, { type: 'spring', stiffness: 230, damping: 25 })
    }
    const blur = (event: FocusEvent) => { if (!host.contains(event.relatedTarget as Node | null)) leave() }
    host.addEventListener('pointerenter', enter)
    host.addEventListener('pointerleave', leave)
    host.addEventListener('focusin', enter)
    host.addEventListener('focusout', blur)
    disposers.push(() => {
      effect?.cancel()
      host.removeEventListener('pointerenter', enter)
      host.removeEventListener('pointerleave', leave)
      host.removeEventListener('focusin', enter)
      host.removeEventListener('focusout', blur)
    })
  })
  
  root.querySelectorAll<HTMLDetailsElement>('details').forEach(details => {
    const reveal = () => {
      if (!details.open) return
      const content = Array.from(details.querySelectorAll<HTMLElement>('li, .incident-caveat, :scope > p'))
      content.forEach(remember)
      track(animate(content, { opacity: [0, 1], y: [12, 0] }, {
        duration: 0.45, delay: stagger(0.06), ease: [0.22, 1, 0.36, 1],
      }))
    }
    details.addEventListener('toggle', reveal)
    disposers.push(() => details.removeEventListener('toggle', reveal))
  })

  return () => {
    disposers.forEach(dispose => dispose())
    running.forEach(animation => animation.cancel())
    originalStyles.forEach((style, element) => {
      if (style === null) element.removeAttribute('style')
      else element.setAttribute('style', style)
    })
  }
}
