import { ArrowUpRight, Building2, Home } from 'lucide-react'
import SmartImage from './SmartImage'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'
import { ctaImage } from '../data/media'
import { whatsappProps } from '../utils/whatsapp'

export default function BusinessCTA() {
  const { t, lang } = useLanguage()

  const options = [
    { icon: Home, title: t.business.retail, note: t.business.retailNote, message: t.messages.retail },
    { icon: Building2, title: t.business.wholesale, note: t.business.wholesaleNote, message: t.messages.wholesale },
  ]

  return (
    <section aria-labelledby="business-title" className="on-dark relative overflow-hidden bg-navy text-ivory">
      <SmartImage
        src={ctaImage.src}
        alt=""
        aria-hidden="true"
        width={1800}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/60" aria-hidden="true" />

      <div className="container-site relative grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-ivory/60">{t.business.eyebrow}</p>
          <h2
            id="business-title"
            className="text-balance mt-6 text-[2.2rem] font-medium uppercase leading-[0.95] tracking-tightest sm:text-6xl lg:text-[4.6rem]"
          >
            {t.business.title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70 sm:text-lg">{t.business.text}</p>
        </Reveal>

        <div className="flex flex-col gap-3 self-end lg:col-span-5">
          {options.map(({ icon: Icon, title, note, message }, i) => (
            <Reveal key={title} delay={0.1 + i * 0.1}>
              <a
                {...whatsappProps(message)}
                lang={lang}
                className="group flex items-center gap-5 rounded-md border border-ivory/20 bg-navy-deep/40 p-5 backdrop-blur-sm transition-colors duration-500 hover:border-ivory hover:bg-ivory hover:text-navy sm:p-6"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-current/30">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-medium tracking-tight sm:text-xl">{title}</span>
                  <span className="mt-1 block text-sm opacity-70">{note}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
