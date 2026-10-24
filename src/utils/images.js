// Helpers for responsive images.
// Unsplash URLs get automatic resizing; local files (e.g. "/products/bamboo.jpg") are used as-is.

const isUnsplash = (src) => typeof src === 'string' && src.includes('images.unsplash.com')

export function sized(src, width) {
  if (!isUnsplash(src)) return src
  const joiner = src.includes('?') ? '&' : '?'
  return `${src}${joiner}auto=format&fit=crop&w=${width}&q=72`
}

export function srcSetFor(src, widths = [480, 800, 1200, 1600]) {
  if (!isUnsplash(src)) return undefined
  return widths.map((w) => `${sized(src, w)} ${w}w`).join(', ')
}

export const unsplash = (id) => `https://images.unsplash.com/photo-${id}`
