import { languages } from '../data/translations'
import { useLanguage } from '../context/LanguageContext'

// Segmented UZ / RU control. Switching updates the whole page immediately.
export default function LanguageSwitcher({ light = false, className = '' }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`inline-flex rounded-full border p-0.5 ${light ? 'border-ivory/25' : 'border-navy/15'} ${className}`}
    >
      {languages.map((item) => {
        const active = item.code === lang
        return (
          <button
            key={item.code}
            type="button"
            lang={item.code}
            aria-pressed={active}
            aria-label={item.name}
            onClick={() => setLang(item.code)}
            className={`min-h-[34px] min-w-[40px] rounded-full px-2.5 text-[11px] font-semibold tracking-[0.14em] transition-colors duration-300 ${
              active
                ? light
                  ? 'bg-ivory text-navy'
                  : 'bg-navy text-ivory'
                : light
                  ? 'text-ivory/70 hover:text-ivory'
                  : 'text-steel hover:text-navy'
            }`}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
