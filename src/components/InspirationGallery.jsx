import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import SmartImage from './SmartImage'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../context/LanguageContext'
import { useDialog } from '../hooks/useDialog'
import { gallery } from '../data/media'

const shapes = {
  wide: 'col-span-2 row-span-1',
  tall: 'col-span-1 row-span-2',
  square: 'col-span-1 row-span-1',
}

export default function InspirationGallery() {
  const { t, lang } = useLanguage()
  const [index, setIndex] = useState(null)

  return (
    <section id="gallery" className="bg-mist py-20 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">{t.gallery.eyebrow}</p>
            <SectionTitle className="mt-5">{t.gallery.title}</SectionTitle>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-steel lg:ml-auto">{t.gallery.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-2 grid-flow-dense sm:auto-rows-[200px] sm:gap-3 md:grid-cols-4 lg:mt-16 lg:auto-rows-[230px]">
          {gallery.map((img, i) => (
            <motion.li
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -5% 0px' }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={shapes[img.shape]}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${t.gallery.open}: ${img.alt[lang]}`}
                className="group relative block h-full w-full overflow-hidden rounded-sm bg-ivory"
              >
                <SmartImage
                  src={img.src}
                  alt={img.alt[lang]}
                  width={img.shape === 'wide' ? 1000 : 600}
                  sizes={img.shape === 'wide' ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-navy-deep/0 transition-colors duration-500 group-hover:bg-navy-deep/25" />
                <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <Lightbox index={index} onChange={setIndex} />
    </section>
  )
}

function Lightbox({ index, onChange }) {
  const { t, lang } = useLanguage()
  const isOpen = index !== null
  const close = useCallback(() => onChange(null), [onChange])
  const dialogRef = useDialog(isOpen, close)
  const total = gallery.length

  const go = useCallback(
    (step) => onChange((current) => (current === null ? current : (current + step + total) % total)),
    [onChange, total]
  )

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, go])

  const img = isOpen ? gallery[index] : null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={img.alt[lang]}
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="on-dark fixed inset-0 z-50 flex flex-col bg-navy-deep/95 text-ivory outline-none"
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <span className="font-serif text-lg italic text-ivory/70" aria-live="polite">
              {t.gallery.counter(index + 1, total)}
            </span>
            <button
              type="button"
              data-autofocus
              onClick={close}
              aria-label={t.gallery.close}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 transition-colors hover:bg-ivory hover:text-navy"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-20" onClick={close}>
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex max-h-full flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <SmartImage
                  src={img.src}
                  alt={img.alt[lang]}
                  width={1800}
                  sizes="90vw"
                  priority
                  className="max-h-[calc(100svh-150px)] w-auto max-w-full rounded-sm object-contain"
                />
                <figcaption className="mt-3 max-w-xl text-center text-sm text-ivory/70">{img.alt[lang]}</figcaption>
              </motion.figure>
            </AnimatePresence>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(-1) }}
              aria-label={t.gallery.prev}
              className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep/60 transition-colors hover:bg-ivory hover:text-navy sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(1) }}
              aria-label={t.gallery.next}
              className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep/60 transition-colors hover:bg-ivory hover:text-navy sm:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
