import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Plus } from 'lucide-react'
import SmartImage from './SmartImage'
import { useLanguage } from '../context/LanguageContext'
import { whatsappProps } from '../utils/whatsapp'

// Editorial placements on the 12-column desktop grid. Cards are staggered
// (different widths, ratios and vertical offsets) instead of a uniform grid.
const placements = {
  feature: { wrap: 'md:col-span-2 lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-10', image: 'aspect-[4/3] lg:col-span-7 lg:aspect-[16/10]', body: 'lg:col-span-4 lg:col-start-9 lg:self-end' },
  a: { wrap: 'md:col-span-2 lg:col-span-7', image: 'aspect-[4/3]' },
  b: { wrap: 'lg:col-span-4 lg:col-start-9 lg:mt-36', image: 'aspect-[4/5]' },
  c: { wrap: 'lg:col-span-5 lg:-mt-8', image: 'aspect-[4/5]' },
  d: { wrap: 'lg:col-span-6 lg:col-start-7 lg:mt-28', image: 'aspect-[4/3]' },
  e: { wrap: 'md:col-span-2 lg:col-span-8 lg:col-start-3', image: 'aspect-[4/3] md:aspect-[16/9]' },
}

const ProductCard = forwardRef(function ProductCard({ product, category, number, placement = 'a', onOpen }, ref) {
  const { t, lang } = useLanguage()
  const p = placements[placement]
  const name = product.name[lang]

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${p.wrap}`}
    >
      <button
        type="button"
        onClick={() => onOpen(product)}
        aria-label={`${t.catalog.details}: ${name}`}
        className={`relative block w-full overflow-hidden rounded-sm bg-mist ${p.image}`}
      >
        <SmartImage
          src={product.image}
          alt={product.imageAlt[lang]}
          width={placement === 'b' || placement === 'c' ? 900 : 1400}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/45 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 font-serif text-6xl italic leading-none text-ivory sm:bottom-4 sm:left-5 sm:text-7xl">
          {number}
        </span>
        <span className="absolute bottom-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-navy transition-transform duration-500 group-hover:rotate-90">
          <Plus className="h-5 w-5" aria-hidden="true" />
        </span>
      </button>

      <div className={`pt-6 ${p.body || ''}`}>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.18em] text-steel">
          <span>{category.label[lang]}</span>
          <span className="normal-case tracking-normal text-navy/60">{t.catalog.price}</span>
        </div>
        <h3 className="mt-3 text-[1.9rem] leading-[1.05] tracking-tight text-navy sm:text-4xl">{name}</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-steel">{product.short[lang]}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
          <a {...whatsappProps(t.messages.product(name))} className="btn-primary min-h-[44px] px-5">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t.catalog.inquiry}
          </a>
          <button
            type="button"
            onClick={() => onOpen(product)}
            className="link-line min-h-[44px] text-sm font-medium text-navy"
          >
            {t.catalog.details}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  )
})

export default ProductCard
