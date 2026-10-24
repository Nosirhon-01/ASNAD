import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import BrandMark from './BrandMark'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'
import { contact } from '../data/contact'
import { whatsappProps } from '../utils/whatsapp'
import { useDialog } from '../hooks/useDialog'

const links = [
  { id: 'home', key: 'home' },
  { id: 'products', key: 'products' },
  { id: 'why', key: 'why' },
  { id: 'about', key: 'about' },
  { id: 'contact', key: 'contact' },
]

// Highlights the nav item of the section currently in view.
function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return active
}

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const close = () => setOpen(false)
  const menuRef = useDialog(open, close)

  // Mobile menu links: close the menu first (which unlocks page scroll),
  // then scroll to the section.
  const goTo = (event, id) => {
    event.preventDefault()
    setOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
      history.replaceState(null, '', `#${id}`)
    }, 30)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu if the screen grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <>
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? 'border-b border-navy/10 bg-ivory/90 backdrop-blur-md' : 'border-b border-transparent bg-ivory'
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between gap-6 lg:h-[72px]" aria-label="Main">
        <a href="#home" className="shrink-0" aria-label="ASNAD Uzbekistan">
          <BrandMark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`link-line text-[13px] tracking-wide transition-colors ${
                  active === link.id ? 'text-navy after:scale-x-100' : 'text-steel hover:text-navy'
                }`}
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a href="#contact" className="btn-primary hidden min-h-[42px] px-5 lg:inline-flex">
            {t.nav.cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t.nav.open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap position:fixed */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.open}
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="on-dark fixed inset-0 z-50 flex flex-col bg-navy-deep text-ivory lg:hidden"
          >
            <div className="container-site flex h-16 items-center justify-between">
              <a href="#home" onClick={(event) => goTo(event, 'home')} aria-label="ASNAD Uzbekistan">
                <BrandMark light />
              </a>
              <button
                type="button"
                data-autofocus
                onClick={close}
                aria-label={t.nav.close}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <ul className="container-site mt-6 flex-1 overflow-y-auto">
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-ivory/10"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => goTo(event, link.id)}
                    className="flex items-baseline gap-4 py-4 text-[2rem] leading-none tracking-tight"
                  >
                    <span className="w-6 font-serif text-base italic text-ivory/40">0{i + 1}</span>
                    {t.nav[link.key]}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="container-site space-y-4 pb-8 pt-6">
              <p className="max-w-xs text-sm text-ivory/60">{t.nav.mobileNote}</p>
              <div className="flex flex-wrap items-center gap-3">
                <a {...whatsappProps(t.messages.general)} className="btn-light">
                  WhatsApp
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={contact.phones[0].href} className="btn-outline-light">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {contact.phones[0].display}
                </a>
              </div>
              <LanguageSwitcher light />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
