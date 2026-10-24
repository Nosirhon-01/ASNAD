import { ArrowUp, ArrowUpRight } from 'lucide-react'
import BrandMark from './BrandMark'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'
import { categories } from '../data/products'
import { contact } from '../data/contact'
import { whatsappProps } from '../utils/whatsapp'

export default function Footer({ onSelectCategory }) {
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()
  const linkClass = 'link-line text-sm text-ivory/75 transition-colors hover:text-ivory'

  return (
    <footer className="on-dark relative overflow-hidden bg-navy-deep text-ivory">
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-12 pb-10 pt-20 lg:grid-cols-12 lg:pt-24">
        <div className="col-span-2 lg:col-span-4">
          <BrandMark light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">{t.footer.about}</p>
          <LanguageSwitcher light className="mt-8" />
        </div>

        <nav aria-label={t.footer.products} className="col-span-2 sm:col-span-1 lg:col-span-3 lg:col-start-6">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-ivory/45">{t.footer.products}</h2>
          <ul className="mt-5 space-y-3">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a href="#products" onClick={() => onSelectCategory(cat.id)} className={linkClass}>
                  {cat.label[lang]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-ivory/45">{t.footer.contact}</h2>
          <ul className="mt-5 space-y-3">
            {contact.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className={linkClass}>{p.display}</a>
              </li>
            ))}
            <li>
              <p className="text-sm leading-relaxed text-ivory/60">{contact.address[lang]}</p>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-ivory/45">{t.footer.follow}</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a {...whatsappProps(t.messages.general)} className={linkClass}>
                WhatsApp <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={contact.telegram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Telegram <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Oversized wordmark */}
      <p
        aria-hidden="true"
        className="select-none overflow-hidden whitespace-nowrap text-center text-[25vw] font-semibold leading-[0.8] tracking-[0.06em] text-ivory/[0.06] lg:text-[21vw]"
      >
        ASNAD
      </p>

      <div className="container-site flex flex-col gap-4 border-t border-ivory/10 py-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer.rights(year)}</p>
        <p>{t.footer.photos}</p>
        <a href="#home" className="link-line self-start text-ivory/70 hover:text-ivory sm:self-auto">
          {t.footer.top}
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
