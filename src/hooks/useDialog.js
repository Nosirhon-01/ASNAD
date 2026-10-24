import { useEffect, useRef } from 'react'

// Shared behaviour for modals and the lightbox:
// Escape closes, page scroll is locked, focus moves inside and is restored on close,
// and Tab stays inside the dialog.
export function useDialog(isOpen, onClose) {
  const dialogRef = useRef(null)
  // Keep the latest onClose without re-running the effect on every render.
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!isOpen) return undefined

    const previouslyFocused = document.activeElement
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarGap}px`

    const focusFirst = () => {
      const el = dialogRef.current?.querySelector('[data-autofocus]') || dialogRef.current
      el?.focus({ preventScroll: true })
    }
    const frame = requestAnimationFrame(focusFirst)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      previouslyFocused?.focus?.({ preventScroll: true })
    }
  }, [isOpen])

  return dialogRef
}
