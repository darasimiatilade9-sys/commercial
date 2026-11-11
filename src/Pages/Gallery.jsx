import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PageBanner from '../components/PageBanner'
import GhostTitle from '../components/GhostTitle'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { GALLERY } from '../data'

/** Extra tiles so the page fills out like the original gallery route. */
const TILES = [
  ...GALLERY,
  { src: '/images/img4-360.jpg', alt: 'Bridal makeup look' },
  { src: '/images/img9-1-360.jpg', alt: 'Evening glamour portrait' },
  { src: '/images/img6.jpg', alt: 'Salon styling session' },
  { src: '/images/img7.jpg', alt: 'Skincare consultation' },
]

const Gallery = () => {
  const [active, setActive] = useState(null)

  return (
    <>
      <PageBanner title="Gallery" image="/images/img9-1.jpg" />

      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1170px]">
          <Reveal>
            <GhostTitle ghost="BEAUTY" title="Our Gallery" />
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TILES.map((t, i) => (
              <Reveal key={t.src + i} delay={(i % 3) * 100}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Open image: ${t.alt}`}
                  className={`group relative block w-full overflow-hidden bg-neutral-200 ${
                    i % 5 === 1 ? 'lg:row-span-2 lg:h-full' : ''
                  }`}
                >
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      i % 5 === 1 ? 'h-[320px] lg:h-[664px]' : 'h-[320px]'
                    }`}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-dark/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="flex h-11 w-11 items-center justify-center border border-gold text-gold">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/make-an-appointment" className="btn">
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        images={TILES}
        index={active}
        onClose={() => setActive(null)}
        onPrev={() => setActive((i) => (i - 1 + TILES.length) % TILES.length)}
        onNext={() => setActive((i) => (i + 1) % TILES.length)}
      />
    </>
  )
}

export default Gallery
