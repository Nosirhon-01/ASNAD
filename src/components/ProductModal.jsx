import { AnimatePresence, motion } from 'framer-motion'
import { Check, MessageCircle, Phone, X } from 'lucide-react'
import SmartImage from './SmartImage'
import { useLanguage } from '../context/LanguageContext'
import { useDialog } from '../hooks/useDialog'
import { contact } from '../data/contact'
import { whatsappProps } from '../utils/whatsapp'

export default function ProductModal({ product, category, onClose }) {
  const isOpen = Boolean(product)
  const handleClose = onClose
  const dialogRef = useDialog(isOpen, onClose)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-navy-deep/70 backdrop-blur-[2px]" onClick={handleClose} aria-hidden="true" />
          <ModalBody product={product} category={category} onClose={handleClose} dialogRef={dialogRef} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ModalBody({ product, category, onClose, dialogRef }) {
  const { t, lang } = useLanguage()
  const name = product.name[lang]
  const titleId = `product-title-${product.id}`

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-t-2xl bg-ivory outline-none sm:rounded-md md:grid-cols-2 md:overflow-hidden"
    >
      <button
        type="button"
        data-autofocus
        onClick={onClose}
        aria-label={t.modal.close}
        className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory/95 text-navy shadow-sm transition-colors hover:bg-navy hover:text-ivory"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <figure className="relative bg-mist md:h-full">
        <SmartImage
          src={product.image}
          alt={product.imageAlt[lang]}
          width={1200}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[560px]"
        />
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep/60 to-transparent px-5 pb-4 pt-10 text-xs text-ivory/85">
          {t.modal.imageNote}
        </figcaption>
      </figure>

      <div className="flex flex-col p-6 sm:p-8 md:max-h-[92svh] md:overflow-y-auto lg:p-10">
        <p className="eyebrow">{category.label[lang]}</p>
        <h2 id={titleId} className="mt-4 text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
          {name}
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-steel">{product.description[lang]}</p>

        <h3 className="mt-8 text-[11px] font-medium uppercase tracking-[0.2em] text-navy">{t.modal.applications}</h3>
        <ul className="mt-3 space-y-2">
          {product.applications[lang].map((item) => (
            <li key={item} className="flex items-center gap-3 text-[15px] text-navy/85">
              <Check className="h-4 w-4 text-steel" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-md border border-navy/10 bg-white p-5">
          <p className="text-sm font-medium text-navy">{t.modal.priceTitle}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-steel">{t.modal.priceNote}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-auto md:pt-8">
          <a {...whatsappProps(t.messages.product(name))} className="btn-primary flex-1">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t.modal.whatsapp}
          </a>
          <a href={contact.phones[0].href} className="btn-outline flex-1">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {t.modal.call}
          </a>
        </div>
      </div>
    </motion.div>
  )
}
