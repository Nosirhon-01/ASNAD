import SmartImage from './SmartImage'
import Reveal, { ImageReveal } from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../context/LanguageContext'
import { showcase } from '../data/media'

// Editorial placement for each of the 6 showcase images (desktop grid of 12 columns).
const placement = [
  { cell: 'col-span-2 lg:col-span-7 lg:row-span-2', ratio: 'aspect-[4/5] lg:aspect-auto lg:min-h-[520px] lg:flex-1' },
  { cell: 'col-span-1 lg:col-span-5', ratio: 'aspect-[3/4] lg:aspect-[16/11]' },
  { cell: 'col-span-1 lg:col-span-4 lg:col-start-8', ratio: 'aspect-[3/4] lg:aspect-[4/3]' },
  { cell: 'col-span-1 lg:col-span-4 lg:mt-24', ratio: 'aspect-[3/4] lg:aspect-[4/5]' },
  { cell: 'col-span-1 lg:col-span-5', ratio: 'aspect-[3/4] lg:aspect-[4/5]' },
  { cell: 'col-span-2 lg:col-span-3 lg:mt-40', ratio: 'aspect-[16/10] lg:aspect-[3/4]' },
]

export default function InteriorShowcase() {
  const { t, lang } = useLanguage()

  return (
    <section id="about" className="bg-ivory py-20 sm:py-28 lg:py-36">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">{t.showcase.eyebrow}</p>
            <SectionTitle className="mt-5">{t.showcase.title}</SectionTitle>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:pt-14">
            <p className="text-xl leading-snug tracking-tight text-navy sm:text-2xl">{t.showcase.lead}</p>
            <p className="mt-6 text-base leading-relaxed text-steel">{t.showcase.body}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:mt-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8">
          {showcase.map((item, i) => (
            <figure key={item.id} className={`group flex flex-col ${placement[i].cell}`}>
              <ImageReveal delay={(i % 3) * 0.08} className={`overflow-hidden rounded-sm bg-mist ${placement[i].ratio}`}>
                <SmartImage
                  src={item.src}
                  alt={item.alt[lang]}
                  width={i === 0 ? 1400 : 900}
                  sizes={i === 0 ? '(min-width: 1024px) 58vw, 100vw' : '(min-width: 1024px) 35vw, 50vw'}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
              </ImageReveal>
              <figcaption className="mt-3 flex items-baseline gap-3 text-navy">
                <span className="font-serif text-sm italic text-steel">0{i + 1}</span>
                <span className="text-sm tracking-tight sm:text-[15px]">{item.title[lang]}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-xs text-steel">{t.showcase.note}</p>
      </div>
    </section>
  )
}
