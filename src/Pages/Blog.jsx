import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PageBanner from '../components/PageBanner'
import GhostTitle from '../components/GhostTitle'
import Reveal from '../components/Reveal'
import { POSTS } from '../data'

const CATEGORIES = ['All', 'Hair', 'Skin Care', 'Makeup', 'News']

const Blog = () => {
  const [active, setActive] = useState('All')
  const [page, setPage] = useState(1)

  const perPage = 3
  const pages = Math.ceil(POSTS.length / perPage)
  const visible = POSTS.slice((page - 1) * perPage, page * perPage)

  return (
    <>
      <PageBanner title="Blog" image="/images/img7.jpg" />

      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1170px]">
          <Reveal>
            <GhostTitle ghost="JOURNAL" title="Latest News" />
          </Reveal>

          {/* Category filter */}
          <div className="mt-11 flex flex-wrap justify-center gap-2.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`border px-5 py-2.5 font-ui text-[13px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                  active === c
                    ? 'border-gold bg-gold text-dark'
                    : 'border-line bg-white text-ink-soft hover:border-gold hover:text-dark'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="group flex h-full flex-col bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-0 left-0 bg-gold px-4 py-2 font-ui text-[12px] tracking-[0.14em] text-dark uppercase">
                      {p.date}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col border border-t-0 border-line p-7">
                    <h3 className="text-[30px] leading-[1.2] text-dark transition-colors duration-300 group-hover:text-gold">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 font-ui text-[14px] leading-[1.95] text-ink">
                      {p.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 font-ui text-[13px] tracking-[0.16em] text-gold uppercase">
                      Read More
                      <svg width="14" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                        <path d="M1 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Pagination */}
          {pages > 1 && (
            <div className="mt-12 flex justify-center gap-2.5">
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => {
                    setPage(n)
                    window.scrollTo({ top: 300, behavior: 'smooth' })
                  }}
                  aria-label={`Page ${n}`}
                  aria-current={page === n ? 'page' : undefined}
                  className={`h-11 w-11 border font-ui text-[14px] transition-colors duration-300 ${
                    page === n
                      ? 'border-gold bg-gold text-dark'
                      : 'border-line bg-white text-ink-soft hover:border-gold hover:text-dark'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="bg-cream px-5 py-14 text-center">
        <h2 className="text-[38px] leading-tight text-dark sm:text-[44px]">Never miss a post</h2>
        <p className="mx-auto mt-3 max-w-[520px] font-ui text-[15px] text-ink">
          Beauty tips and salon news, straight to your inbox.
        </p>
        <Link to="/contact" className="btn mt-6">
          Subscribe
        </Link>
      </section>
    </>
  )
}

export default Blog
