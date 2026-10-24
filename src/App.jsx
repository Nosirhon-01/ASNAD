import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCatalog from './components/ProductCatalog'
import InteriorShowcase from './components/InteriorShowcase'
import WhyAsnad from './components/WhyAsnad'
import InspirationGallery from './components/InspirationGallery'
import BusinessCTA from './components/BusinessCTA'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { useLanguage } from './context/LanguageContext'

export default function App() {
  const { t } = useLanguage()
  // Catalog filter lives here so the hero and footer category links can set it.
  const [filter, setFilter] = useState('all')

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-ivory"
      >
        {t.skip}
      </a>
      <Navbar />
      <main id="main">
        <Hero onSelectCategory={setFilter} />
        <ProductCatalog filter={filter} onFilterChange={setFilter} />
        <InteriorShowcase />
        <WhyAsnad />
        <InspirationGallery />
        <BusinessCTA />
        <ContactSection />
      </main>
      <Footer onSelectCategory={setFilter} />
    </MotionConfig>
  )
}
