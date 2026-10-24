import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../data/translations'

const STORAGE_KEY = 'asnad-lang'
const LanguageContext = createContext(null)

function readStoredLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved && translations[saved] ? saved : 'uz'
  } catch {
    return 'uz'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLanguage)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Storage can be blocked (private mode); the site still works.
    }
    const t = translations[lang]
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// Usage: const { t, lang, setLang } = useLanguage()
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
