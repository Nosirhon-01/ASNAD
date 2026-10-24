import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../context/LanguageContext'

export default function WhyAsnad() {
  const { t } = useLanguage()

  return (
    <section id="why" className="on-dark relative overflow-hidden bg-navy-deep py-20 text-ivory sm:py-28 lg:py-36">
      {/* Slat motif */}
      <div className="slats pointer-events-none absolute inset-y-0 right-0 w-1/2 text-ivory opacity-[0.05]" aria-hidden="true" />

      <div className="container-site relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="eyebrow text-ivory/60">{t.why.eyebrow}</p>
              <SectionTitle className="mt-5 text-ivory">{t.why.title}</SectionTitle>
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {t.why.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-ivory/15 py-8 last:border-b sm:grid-cols-[6rem_1fr] sm:py-10"
            >
              <span className="font-serif text-4xl italic leading-none text-ivory/35 transition-colors duration-500 group-hover:text-ivory sm:text-6xl">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-2xl tracking-tight sm:text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-ivory/65">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
