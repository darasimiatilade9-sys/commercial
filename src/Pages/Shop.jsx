import React, { useMemo, useState } from 'react'

import PageBanner from '../components/PageBanner'
import GhostTitle from '../components/GhostTitle'
import Reveal from '../components/Reveal'
import { PRODUCTS } from '../data'

const CATEGORIES = ['All Products', 'Creams', 'Powder', 'Premium Sets', 'Nail Polish']

const SORTS = [
  { key: 'latest', label: 'Sort by latest' },
  { key: 'price-asc', label: 'Price low to high' },
  { key: 'price-desc', label: 'Price high to low' },
  { key: 'az', label: 'Alphabetically, A-Z' },
]

const toNumber = (p) => Number(String(p).replace(/[^0-9.]/g, '')) || 0

const Shop = () => {
  const [category, setCategory] = useState('All Products')
  const [sort, setSort] = useState('latest')
  const [perPage, setPerPage] = useState(8)
  const [cart, setCart] = useState(0)
  const [toast, setToast] = useState(null)

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    if (category !== 'All Products') {
      const map = {
        Creams: ['Beauty Cream', 'Care Lotion'],
        Powder: ['Face Powder'],
        'Premium Sets': ['Premium Set', 'Spa Package'],
        'Nail Polish': ['Nail Polish Set'],
      }
      const names = map[category] || []
      list = list.filter((p) => names.includes(p.name))
    }

    if (sort === 'price-asc') list.sort((a, b) => toNumber(a.price) - toNumber(b.price))
    if (sort === 'price-desc') list.sort((a, b) => toNumber(b.price) - toNumber(a.price))
    if (sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name))

    return list
  }, [category, sort])

  const shown = filtered.slice(0, perPage)

  const addToCart = (name) => {
    setCart((c) => c + 1)
    setToast(`${name} added to cart`)
    setTimeout(() => setToast(null), 2600)
  }

  return (
    <>
      <PageBanner title="Shop" breadcrumb="Products" image="/images/package6.jpg" />

      {/* Sale marquee */}
      <div className="overflow-hidden bg-gold py-3">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-ui text-[14px] tracking-[0.3em] text-dark uppercase">
              Hot Sale — 20% Off · Free shipping over $50 · Hot Sale — 20% Off · Free shipping over $50 ·
            </span>
          ))}
        </div>
      </div>

      <section className="bg-white px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1170px]">
          <Reveal>
            <GhostTitle ghost="PRODUCTS" title="Our Shop" />
          </Reveal>

          {/* Toolbar */}
          <div className="mt-11 flex flex-col gap-5 border border-line px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCategory(c)
                    setPerPage(8)
                  }}
                  className={`px-4 py-2 font-ui text-[13px] transition-colors duration-300 ${
                    category === c
                      ? 'bg-gold text-dark'
                      : 'bg-cream text-ink-soft hover:bg-gold-light hover:text-dark'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="font-ui text-[13px] text-ink-soft">
                Showing {Math.min(shown.length, filtered.length)} of {filtered.length} results
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort products"
                className="border border-line bg-white px-4 py-2.5 font-ui text-[13px] text-ink outline-none focus:border-gold"
              >
                {SORTS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>

              <span className="relative flex items-center gap-2 font-ui text-[13px] text-ink-soft">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 4h14l-1.6 9H8.2L7 2H2v2h3.3l1 5H19v2H7.4l-.5-2H21" />
                </svg>
                Cart
                <span className="flex h-5 min-w-5 items-center justify-center bg-gold px-1 text-[11px] font-bold text-dark">
                  {cart}
                </span>
              </span>
            </div>
          </div>

          {/* Product grid */}
          {shown.length === 0 ? (
            <p className="mt-14 text-center font-ui text-[15px] text-ink-soft">
              No products found in this category.
            </p>
          ) : (
            <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {shown.map((p, i) => (
                <Reveal key={p.name} delay={(i % 4) * 100}>
                  <article className="group flex h-full flex-col border border-line bg-white">
                    <div className="relative overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-[240px] w-full bg-cream object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {p.badge && (
                        <span className="absolute top-3 left-3 bg-gold px-3 py-1.5 font-ui text-[11px] tracking-[0.14em] text-dark uppercase">
                          {p.badge}
                        </span>
                      )}
                      {p.off && (
                        <span className="absolute top-3 left-3 bg-[#c0392b] px-3 py-1.5 font-ui text-[11px] tracking-[0.1em] text-white uppercase">
                          Sale! -{p.off}
                        </span>
                      )}

                      {/* hover action */}
                      <button
                        type="button"
                        onClick={() => addToCart(p.name)}
                        className="absolute inset-x-0 bottom-0 translate-y-full bg-dark py-3.5 font-ui text-[13px] tracking-[0.18em] text-gold uppercase transition-transform duration-500 group-hover:translate-y-0"
                      >
                        Add to cart
                      </button>
                    </div>

                    <div className="flex flex-1 flex-col items-center px-4 py-5 text-center">
                      <h3 className="text-[26px] leading-tight text-dark transition-colors duration-300 group-hover:text-gold">
                        {p.name}
                      </h3>
                      <p className="mt-2 font-ui text-[15px] text-gold">
                        {p.old && (
                          <span className="mr-2 text-ink-soft line-through">{p.old}</span>
                        )}
                        {p.price}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          {/* Load more */}
          {perPage < filtered.length && (
            <div className="mt-12 text-center">
              <button type="button" onClick={() => setPerPage((n) => n + 8)} className="btn">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Toast */}
      <div
        className={`fixed bottom-24 left-1/2 z-[70] -translate-x-1/2 bg-dark px-6 py-3.5 font-ui text-[14px] text-white shadow-xl transition-all duration-400 ${
          toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </>
  )
}

export default Shop
