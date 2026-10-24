import { useState } from 'react'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../context/LanguageContext'
import { categories, products } from '../data/products'

const sequence = ['a', 'b', 'c', 'd', 'e']

function placementFor(index, total) {
  if (total === 1) return 'feature'
  return sequence[index % sequence.length]
}

// `filter` is owned by App so the hero and footer can open a category directly.
export default function ProductCatalog({ filter, onFilterChange }) {
  const { t, lang } = useLanguage()
  const [selected, setSelected] = useState(null)

  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter)
  const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]))
  const numberOf = (product) => String(products.indexOf(product) + 1).padStart(2, '0')

  const filters = [{ id: 'all', label: { uz: t.catalog.all, ru: t.catalog.all } }, ...categories]

  return (
    <section id="products" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">{t.catalog.eyebrow}</p>
            <SectionTitle className="mt-5">{t.catalog.title}</SectionTitle>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-steel lg:ml-auto">{t.catalog.intro}</p>
          </Reveal>
        </div>

        {/* Filters */}
        <div
          role="group"
          aria-label={t.catalog.filterLabel}
          className="no-scrollbar -mx-4 mt-12 flex gap-2 overflow-x-auto border-b border-navy/10 px-4 pb-px sm:mx-0 sm:flex-wrap sm:px-0 lg:mt-16"
        >
          {filters.map((f) => {
            const active = filter === f.id
            const count = f.id === 'all' ? products.length : products.filter((p) => p.category === f.id).length
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => onFilterChange(f.id)}
                className={`relative -mb-px flex min-h-[48px] shrink-0 items-center gap-2 border-b-2 px-3 text-sm transition-colors sm:px-4 ${
                  active ? 'border-navy text-navy' : 'border-transparent text-steel hover:text-navy'
                }`}
              >
                {f.label[lang]}
                <sup className="text-[10px] text-steel">{count}</sup>
              </button>
            )
          })}
        </div>

        <LayoutGroup>
          <div className="mt-10 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-24">
            <AnimatePresence mode="popLayout">
              {visible.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  category={categoryById[product.category]}
                  number={numberOf(product)}
                  placement={placementFor(i, visible.length)}
                  onOpen={setSelected}
                />
              ))}
            </AnimatePresence>
            {visible.length === 0 && <p className="text-steel">{t.catalog.empty}</p>}
          </div>
        </LayoutGroup>
      </div>

      <ProductModal
        product={selected}
        category={selected ? categoryById[selected.category] : null}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
