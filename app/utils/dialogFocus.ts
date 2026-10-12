/** Wrap keyboard focus inside a modal; floating non-modal windows intentionally do not trap it. */
export const trapDialogFocus = (event: KeyboardEvent) => {
  if (event.key !== 'Tab') return
  const dialog = event.currentTarget as HTMLDialogElement
  const elements = Array.from(dialog.querySelectorAll<HTMLElement>(
    'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )).filter(element => element.getClientRects().length > 0)
  const first = elements[0]
  const last = elements[elements.length - 1]
  if (!first || !last) { event.preventDefault(); dialog.focus(); return }
  if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}
