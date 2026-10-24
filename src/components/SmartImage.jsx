import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { sized, srcSetFor } from '../utils/images'
import { useLanguage } from '../context/LanguageContext'

// <img> with responsive sizes and a graceful fallback if the photo fails to load.
export default function SmartImage({
  src,
  alt,
  width = 1200,
  sizes = '100vw',
  className = '',
  priority = false,
  ...rest
}) {
  const [failed, setFailed] = useState(false)
  const { t } = useLanguage()

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-mist text-steel ${className}`}
      >
        <ImageOff className="h-6 w-6" aria-hidden="true" />
        <span className="px-4 text-center text-xs">{t.image.fallback}</span>
      </div>
    )
  }

  return (
    <img
      src={sized(src, width)}
      srcSet={srcSetFor(src)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
