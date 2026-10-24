import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import SmartImage from './SmartImage'
import { useLanguage } from '../context/LanguageContext'
import { categories } from '../data/products'
import { heroImages } from '../data/media'
import { contact } from '../data/contact'
import { whatsappProps } from '../utils/whatsapp'
import { useFitText } from '../hooks/useFitText'

const ease = [0.22, 1, 0.36, 1]

// One headline line that slides up from behind a mask.
function MaskLine({ children, delay, className = '', lineRef }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        ref={lineRef}
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease }}
        className={`inline-block whitespace-nowrap ${className}`}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero({ onSelectCategory }) {
  const { t, lang } = useLanguage()
  const fitRef = useFitText(t.hero.titleTop)

  return (
    <section id="home" className="relative overflow-hidden bg-ivory">
      <div className="container-site pb-14 pt-6 sm:pt-8 lg:pb-20 lg:pt-7">
        {/* Top meta row */}
        <div className="flex items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="eyebrow"
          >
            {t.hero.eyebrow}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-steel md:flex"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {t.hero.location}
          </motion.p>
        </div>

        {/* Headline: the sans line is measured to fill the full width; the serif line interlocks on the right */}
        <h1 key={lang} className="mt-6 text-navy sm:mt-8 lg:mt-6">
          <MaskLine
            lineRef={fitRef}
            delay={0.1}
            className="text-[length:var(--fit,12vw)] font-medium uppercase leading-[0.86] tracking-tightest"
          >
            {t.hero.titleTop}
          </MaskLine>
          <MaskLine
            delay={0.25}
            className="w-full text-right font-serif text-[length:calc(var(--fit,12vw)*0.8)] font-normal italic leading-[0.95]"
          >
            {t.hero.titleBottom}
          </MaskLine>
        </h1>

        <div className="mt-6 grid gap-8 sm:mt-10 lg:mt-6 lg:grid-cols-12 lg:gap-8">
          {/* Image */}
          <div className="relative min-w-0 lg:order-2 lg:col-span-8 lg:col-start-5">
            <motion.div
              initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.4, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
              className="relative -mx-4 h-[min(118vw,62svh)] overflow-hidden sm:mx-0 sm:h-auto sm:rounded-sm sm:aspect-[16/10]"
            >
              <motion.div
                initial={{ scale: 1.18 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, delay: 0.35, ease }}
                className="h-full w-full"
              >
                <SmartImage
                  src={heroImages.main.src}
                  alt={heroImages.main.alt[lang]}
                  width={1600}
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  priority
                  className="h-full w-full object-cover object-[50%_40%]"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep/50 to-transparent" />
              <p className="absolute bottom-4 left-4 rounded-full border border-ivory/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-ivory sm:bottom-5 sm:left-5 sm:text-[11px]">
                {t.hero.trade}
              </p>
            </motion.div>

            {/* Material detail, pinned to the image corner (large screens) */}
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease }}
              className="absolute -bottom-10 right-8 hidden w-40 bg-ivory p-2 shadow-[0_30px_60px_-30px_rgba(11,31,51,0.5)] lg:block xl:w-48"
            >
              <SmartImage
                src={heroImages.detail.src}
                alt={heroImages.detail.alt[lang]}
                width={400}
                sizes="192px"
                priority
                className="aspect-square w-full object-cover"
              />
              <figcaption className="px-1 pb-1 pt-2 font-serif text-[15px] italic text-navy">
                {t.hero.detailCaption}
              </figcaption>
            </motion.figure>
          </div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="flex min-w-0 flex-col lg:order-1 lg:col-span-4 lg:pr-4"
          >
            <p className="max-w-md text-[17px] leading-relaxed text-navy/80 lg:text-lg">{t.hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-7 lg:flex-col lg:items-start">
              <a href="#products" className="btn-primary">
                {t.hero.primary}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a {...whatsappProps(t.messages.general)} className="btn-outline">
                {t.hero.secondary}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Direct line — anchors the bottom of the column on large screens */}
            <div className="mt-auto hidden border-t border-navy/15 pt-5 lg:block">
              <p className="text-[11px] uppercase tracking-[0.2em] text-steel">{t.contact.phones}</p>
              <a href={contact.phones[0].href} className="link-line mt-2 text-2xl tracking-tight text-navy">
                {contact.phones[0].display}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Category index — each item opens the catalog filtered to that category */}
        <motion.nav
          aria-label={t.hero.categoriesLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="-mx-4 mt-10 sm:mx-0 lg:mt-20"
        >
          <ul className="no-scrollbar flex gap-2 overflow-x-auto px-4 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-0 lg:overflow-visible lg:border-t lg:border-navy/15">
            {categories.map((cat, i) => (
              <li key={cat.id} className="shrink-0 lg:pl-5 lg:first:pl-0 lg:[&:last-child>a]:border-r-0">
                <a
                  href="#products"
                  onClick={() => onSelectCategory(cat.id)}
                  className="group flex min-h-[44px] items-center gap-2 rounded-full border border-navy/15 px-4 text-sm text-navy transition-colors hover:border-navy lg:h-full lg:flex-col lg:items-start lg:gap-6 lg:rounded-none lg:border-0 lg:border-r lg:border-navy/10 lg:px-0 lg:py-5 lg:pr-5"
                >
                  <span className="flex w-full items-center justify-between">
                    <span className="font-serif italic text-steel lg:text-base">0{i + 1}</span>
                    <ArrowUpRight className="hidden h-4 w-4 -translate-x-1 text-steel opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block" aria-hidden="true" />
                  </span>
                  <span className="whitespace-nowrap lg:whitespace-normal lg:text-[15px] lg:leading-snug">{cat.label[lang]}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  )
}
