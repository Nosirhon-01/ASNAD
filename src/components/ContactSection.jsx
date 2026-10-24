import { ArrowUpRight, Info, Instagram, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../context/LanguageContext'
import { contact, mapEmbedUrl, mapOpenUrl } from '../data/contact'
import { whatsappLink, whatsappProps } from '../utils/whatsapp'

const external = { target: '_blank', rel: 'noopener noreferrer' }

function Row({ icon: Icon, label, children }) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-navy/10 py-6 sm:grid-cols-[3rem_9rem_1fr] sm:items-baseline">
      <Icon className="mt-1 h-5 w-5 text-steel sm:mt-0" aria-hidden="true" />
      <p className="text-[11px] uppercase tracking-[0.2em] text-steel">{label}</p>
      <div className="col-start-2 mt-2 sm:col-start-3 sm:mt-0">{children}</div>
    </div>
  )
}

export default function ContactSection() {
  const { t, lang } = useLanguage()

  return (
    <section id="contact" className="bg-ivory py-20 sm:py-28 lg:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <SectionTitle className="mt-5">{t.contact.title}</SectionTitle>
          <p className="mt-6 max-w-md text-base leading-relaxed text-steel">{t.contact.intro}</p>

          <div className="mt-8 flex max-w-md gap-3 rounded-md border border-navy/10 bg-white p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-navy/80">{t.contact.note}</p>
          </div>

          <a {...whatsappProps(t.messages.general)} className="btn-primary mt-8">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t.contact.cta}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <Row icon={Phone} label={t.contact.phones}>
            <ul className="space-y-1">
              {contact.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="link-line text-2xl tracking-tight text-navy sm:text-3xl">
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </Row>
          <Row icon={MessageCircle} label={t.contact.whatsapp}>
            <a href={whatsappLink(t.messages.general)} {...external} className="link-line text-lg text-navy">
              {contact.phones[0].display}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Row>
          <Row icon={Send} label={t.contact.telegram}>
            <a href={contact.telegram.url} {...external} className="link-line text-lg text-navy">
              {contact.telegram.display}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Row>
          <Row icon={Instagram} label={t.contact.instagram}>
            <a href={contact.instagram.url} {...external} className="link-line text-lg text-navy">
              {contact.instagram.handle}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Row>
          <Row icon={MapPin} label={t.contact.address}>
            <address className="not-italic text-lg leading-snug text-navy">{contact.address[lang]}</address>
            <a href={mapOpenUrl} {...external} className="link-line mt-3 text-sm font-medium text-navy">
              {t.contact.openMap}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Row>

          {/* Map — keyless Google Maps embed. The text underneath shows if it fails to load. */}
          <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-md border border-navy/10 bg-mist sm:aspect-[16/9]">
            <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-steel">
              {t.contact.mapFallback}
            </p>
            <iframe
              title={t.contact.mapTitle}
              src={mapEmbedUrl(lang)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative h-full w-full border-0 grayscale-[0.6] contrast-[1.05]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
