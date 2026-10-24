import { useLayoutEffect, useRef } from 'react'

// Sizes a single line of text so it fills its parent's width exactly.
// The result is written to the CSS variable --fit on the parent, so
// sibling lines can scale relative to it (e.g. calc(var(--fit) * 0.8)).
export function useFitText(text) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    const parent = el?.parentElement?.parentElement // line → mask wrapper → h1
    if (!el || !parent) return undefined

    const fit = () => {
      const previous = el.style.fontSize
      el.style.fontSize = '100px'
      const natural = el.scrollWidth
      el.style.fontSize = previous
      if (!natural) return
      const size = (parent.clientWidth / natural) * 100 * 0.995
      parent.style.setProperty('--fit', `${size}px`)
    }

    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(parent)
    document.fonts?.ready.then(fit)
    return () => observer.disconnect()
  }, [text])

  return ref
}
