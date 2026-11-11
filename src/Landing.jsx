import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import GhostTitle from './components/GhostTitle'
import Reveal from './components/Reveal'
import Lightbox from './components/Lightbox'

import { ADDRESS, GALLERY, SALON_COPY, SERVICES } from './data'

/* ------------------------------------------------------------------ */
/* Hero slider                                                         */
/* ------------------------------------------------------------------ */

const SLIDES = [
  {
    image: '/images/slide4.jpg',
    script: 'Be Different',
    line: 'Discover the art of looking your very best.',
  },
  {
    image: '/images/slide2.jpg',
    script: 'Special Color for You',
    line: 'Hair, skin and makeup treatments tailored to you.',
  },
]

const Hero = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[640px] w-full overflow-hidden bg-dark lg:h-[760px]">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          aria-hidden={i !== active}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[1170px] flex-col justify-center px-5 pt-[92px] lg:px-8">
        <div key={active} className="max-w-[620px] animate-[fadeInUp_.9s_ease]">
          <p className="mb-1 font-ui text-[15px] tracking-[0.3em] text-white/80 uppercase">
            Welcome to Xtra Beauty
          </p>
          <h1 className="text-[62px] leading-[1.05] text-white drop-shadow-sm sm:text-[82px] lg:text-[104px]">
            {SLIDES[active].script}
          </h1>
          <p className="mt-3 max-w-[430px] font-ui text-[16px] leading-[1.9] text-white/85">
            {SLIDES[active].line}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/gallery" className="btn">
              View Our Gallery
            </Link>
            <Link
              to="/make-an-appointment"
              className="btn-outline border-white/70 text-white hover:border-gold hover:text-dark"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-[3px] transition-all duration-500 ${
              i === active ? 'w-10 bg-gold' : 'w-5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Triangle image straddling the hero / about boundary                 */
/* ------------------------------------------------------------------ */

const TriangleImage = () => (
  <div className="relative z-10 -mt-16 flex justify-center lg:-mt-24">
    <div
      className="h-[190px] w-[300px] bg-cover bg-center sm:h-[240px] sm:w-[380px] lg:h-[290px] lg:w-[470px]"
      style={{
        backgroundImage: 'url(/images/img3.png)',
        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
      }}
      aria-hidden="true"
    />
  </div>
)

/* ------------------------------------------------------------------ */
/* Parallax band                                                       */
/* ------------------------------------------------------------------ */

const ParallaxBand = () => {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      setOffset((rect.top - window.innerHeight / 2) * -0.12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={ref} className="relative h-[340px] overflow-hidden bg-dark lg:h-[420px]">
      <div
        className="absolute inset-[-60px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/parallax-1.jpg)', transform: `translateY(${offset}px)` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="font-ui text-[14px] tracking-[0.3em] text-gold uppercase">Lovely Beauty Luxury</p>
        <h2 className="mt-2 text-[44px] leading-tight text-white sm:text-[54px]">Our Beauty Center</h2>
        <Link to="/gallery" className="btn-outline mt-7 border-white/70 text-white hover:border-gold hover:text-dark">
          View Gallery
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

const Services = () => (
  <section className="bg-white px-5 py-20 lg:py-28">
    <div className="mx-auto max-w-[1170px]">
      <Reveal>
        <GhostTitle ghost="SERVICES" title="Our Services" />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <article
              className="group relative h-[300px] overflow-hidden bg-cover bg-center lg:h-[330px]"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              {/* dark scrim that lifts on hover */}
              <div className="absolute inset-0 bg-black/70 transition-colors duration-500 group-hover:bg-black/45" />

              <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                <h3 className="text-[42px] leading-tight text-gold-light lg:text-[48px]">{s.title}</h3>
                <p className="mt-1 font-ui text-[15px] text-white/85">{s.price}</p>

                <Link
                  to="/make-an-appointment"
                  className="mt-5 border border-gold px-7 py-2.5 font-ui text-[14px] font-semibold tracking-wide text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-3"
                >
                  Reserve
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

/* ------------------------------------------------------------------ */
/* Split rows                                                          */
/* ------------------------------------------------------------------ */

const SOCIAL_ROWS = [
  { label: 'Facebook', path: 'M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V14h2.3v7h3z' },
  { label: 'Twitter', path: 'M21 6.3c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4.9a3.8 3.8 0 0 0-6.6 3.5A10.9 10.9 0 0 1 3.6 5a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.4 3.1 3.8-.6.2-1.1.2-1.7.1a3.8 3.8 0 0 0 3.6 2.6A7.7 7.7 0 0 1 2 17.6a10.9 10.9 0 0 0 5.9 1.7c7 0 10.9-5.9 10.9-11v-.5c.8-.5 1.4-1.2 2.2-1.5z' },
  { label: 'Instagram', path: 'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21 8.9c-.1-1.5-.4-2.8-1.5-3.8-1-1-2.3-1.4-3.8-1.5C14.3 3.5 9.7 3.5 8.3 3.6c-1.5.1-2.8.4-3.8 1.5-1 1-1.4 2.3-1.5 3.8-.1 1.4-.1 6 0 7.4.1 1.5.4 2.8 1.5 3.8 1 1 2.3 1.4 3.8 1.5 1.4.1 6 .1 7.4 0 1.5-.1 2.8-.4 3.8-1.5 1-1 1.4-2.3 1.5-3.8.1-1.4.1-6 0-7.4zm-1.9 8.9c-.3.8-1 1.5-1.8 1.8-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4c-.8-.3-1.5-1-1.8-1.8-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7c.3-.8 1-1.5 1.8-1.8 1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4c.8.3 1.5 1 1.8 1.8.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z' },
  { label: 'Skype', path: 'M12.1 4c-4.1 0-6.9 2.5-6.9 5.6 0 1.2.5 2.3 1.4 3.1-.2.6-.5 1.5-.6 2 0 .3.1.5.4.4.4-.1 1.4-.5 2-.7h.3c-.6-.7-1-1.7-1-2.8 0-2.6 2.4-4.6 5.7-4.6.3 0 .6 0 .9.1-.6-1.7-2.5-3-4.9-3zm5.6 4.2c-.3 0-.5.2-.5.4 0 .1.1.3.2.4l.4.4c.1.1.1.2.3.2.1 0 .3-.1.4-.2l.4-.4c.1-.1.4-.1.5 0 .1.1.1.4 0 .5l-.4.4c-.1.1-.1.4 0 .5.1.1.4.1.5 0l.4-.4c.1-.1.4-.1.5 0 .1.1.1.4 0 .5l-.4.4c-.5.5-1.3.7-2 .5-.7-.2-1.2-.8-1.3-1.5-.1-.9.4-1.8 1.2-2.2.2-.1.4-.2.4-.4 0-.3-.2-.5-.5-.5zm-5.1 1c-2.6 0-4.7 1.7-4.7 3.8s2.1 3.8 4.7 3.8c.5 0 1-.1 1.4-.2 1.1.6 2.7.9 4 .6l.6-1.4c.1-.2 0-.4-.2-.5-.2-.1-.4 0-.5.2l-.5 1.2c-.9.2-1.9.1-2.7-.2.8-.7 1.3-1.7 1.3-2.7 0-2.1-2.1-3.8-4.7-3.8zm0 5.7c-1.5 0-2.7-1-2.7-2.2s1.2-2.2 2.7-2.2 2.7 1 2.7 2.2-1.2 2.2-2.7 2.2z' },
]

const SplitCenter = () => (
  <section className="grid lg:grid-cols-2">
    <div
      className="h-[320px] bg-cover bg-center lg:h-auto lg:min-h-[440px]"
      style={{ backgroundImage: 'url(/images/img4.jpg)' }}
      role="img"
      aria-label="Beauty treatment close-up"
    />

    <div className="flex items-center bg-cream px-6 py-16 sm:px-12 lg:px-16">
      <div>
        <GhostTitle ghost="CLUB" title="Our Beauty Center" align="left" />
        <p className="mt-9 max-w-[460px] font-ui text-[15px] leading-[2] text-ink">{SALON_COPY}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {SOCIAL_ROWS.map((s) => (
            <a
              key={s.label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2.5 border border-gold px-5 py-3 font-ui text-[13px] tracking-[0.15em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-dark"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={s.path} />
              </svg>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const Countdown = () => {
  const target = useRef(Date.now() + 6 * 864e5 + 20 * 36e5 + 7 * 6e4 + 56e3)
  const [left, setLeft] = useState(() => target.current - Date.now())

  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(0, target.current - Date.now())), 1000)
    return () => clearInterval(id)
  }, [])

  const s = Math.floor(left / 1000)
  const parts = [
    { v: Math.floor(s / 86400), label: 'Days' },
    { v: Math.floor((s % 86400) / 3600), label: 'Hours' },
    { v: Math.floor((s % 3600) / 60), label: 'Minutes' },
    { v: s % 60, label: 'Seconds' },
  ]

  return (
    <div className="mt-9 flex flex-wrap gap-3">
      {parts.map((p) => (
        <div
          key={p.label}
          className="flex h-[68px] w-[76px] flex-col items-center justify-center border border-gold"
        >
          <span className="font-ui text-[21px] leading-none font-medium text-dark">
            {String(p.v).padStart(2, '0')}
          </span>
          <span className="mt-1.5 font-ui text-[12px] text-ink-soft">{p.label}</span>
        </div>
      ))}
    </div>
  )
}

const SplitOffer = () => (
  <section className="grid lg:grid-cols-2">
    <div className="flex items-center bg-cream px-6 py-16 sm:px-12 lg:px-16 lg:order-1">
      <div>
        <GhostTitle ghost="DISCOUNT" title="Special Offer" align="left" />
        <p className="mt-9 max-w-[460px] font-ui text-[15px] leading-[2] text-ink">
          20% Off on all beauty services, or sometimes beauty shop, is an establishment dealing with
          cosmetic treatments for men and women.
        </p>

        <Countdown />

        <Link to="/make-an-appointment" className="btn mt-9">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm12 8v9H5v-9h14z" />
          </svg>
          Book Now
        </Link>
      </div>
    </div>

    <div
      className="h-[320px] bg-cover bg-center lg:h-auto lg:min-h-[520px] lg:order-2"
      style={{ backgroundImage: 'url(/images/img8.jpg)' }}
      role="img"
      aria-label="Model with beauty sponge"
    />
  </section>
)

const SplitGalleryCta = () => (
  <section className="grid lg:grid-cols-2">
    <div
      className="h-[320px] bg-cover bg-center lg:h-auto lg:min-h-[440px]"
      style={{ backgroundImage: 'url(/images/img9-1.jpg)' }}
      role="img"
      aria-label="Portrait with red lipstick"
    />
    <div className="flex items-center bg-cream px-6 py-16 sm:px-12 lg:px-16">
      <div>
        <GhostTitle ghost="BEAUTY" title="Our Gallery" align="left" />
        <p className="mt-9 max-w-[460px] font-ui text-[15px] leading-[2] text-ink">{SALON_COPY}</p>
        <Link to="/gallery" className="btn mt-8">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3 5h7v7H3V5zm0 9h7v5H3v-5zm9-9h9v7h-9V5zm0 9h9v5h-9v-5z" />
          </svg>
          View Gallery
        </Link>
      </div>
    </div>
  </section>
)

/* ------------------------------------------------------------------ */
/* Masonry gallery                                                     */
/* ------------------------------------------------------------------ */

const GallerySection = ({ onOpen }) => (
  <section className="bg-white px-5 py-20 lg:py-28">
    <div className="mx-auto max-w-[1170px]">
      <Reveal>
        <GhostTitle ghost="BEAUTY" title="Gallery" />
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          {[GALLERY[0], GALLERY[3]].map((g, i) => (
            <GalleryTile key={g.src + i} item={g} index={i} onOpen={onOpen} ratio="aspect-[4/3]" />
          ))}
        </div>

        <div className="hidden flex-col gap-4 lg:flex">
          <GalleryTile item={GALLERY[1]} index={1} onOpen={onOpen} ratio="aspect-[3/5]" />
          <GalleryTile item={GALLERY[4]} index={4} onOpen={onOpen} ratio="aspect-[4/3]" />
        </div>

        <div className="flex flex-col gap-4">
          {[GALLERY[2], GALLERY[5]].map((g, i) => (
            <GalleryTile key={g.src + i} item={g} index={i + 2} onOpen={onOpen} ratio="aspect-[4/3]" />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/make-an-appointment" className="btn">
          Make an Appointment
        </Link>
      </div>
    </div>
  </section>
)

const GalleryTile = ({ item, index, onOpen, ratio }) => (
  <button
    type="button"
    onClick={() => onOpen(index)}
    className={`group relative w-full overflow-hidden bg-neutral-200 ${ratio}`}
    aria-label={`Open image: ${item.alt}`}
  >
    <img
      src={item.src}
      alt={item.alt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <span className="absolute inset-0 flex items-center justify-center bg-dark/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <span className="flex h-11 w-11 items-center justify-center border border-gold text-gold">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    </span>
  </button>
)

/* ------------------------------------------------------------------ */
/* Contact block                                                       */
/* ------------------------------------------------------------------ */

const ContactBlock = () => {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="grid lg:grid-cols-2">
      {/* Map */}
      <div className="relative min-h-[340px] bg-dark">
        <img src="/images/map.png" alt="Salon location map" className="h-full w-full object-cover opacity-90" />
        <div className="absolute bottom-7 left-1/2 w-[86%] max-w-[420px] -translate-x-1/2 bg-gold-light px-6 py-4 text-center font-ui text-[15px] text-dark sm:left-8 sm:translate-x-0 sm:text-left">
          {ADDRESS}
        </div>
      </div>

      {/* Form */}
      <div className="bg-cream px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <GhostTitle ghost="CONTACT" title="Get in Touch" align="left" />

        <form onSubmit={submit} className="mt-10 grid gap-4 sm:grid-cols-2">
          <input required className="field" placeholder="Your Name (*)" aria-label="Your name" />
          <input required type="email" className="field" placeholder="Your Email (*)" aria-label="Your email" />
          <input className="field" placeholder="Subject" aria-label="Subject" />
          <select className="field appearance-none" defaultValue="" aria-label="Department">
            <option value="" disabled>
              Business Department
            </option>
            <option>Reception</option>
            <option>Hair Styling</option>
            <option>Skin Care</option>
            <option>Makeup</option>
          </select>

          <textarea
            rows={5}
            className="field sm:col-span-2"
            placeholder="Your Message"
            aria-label="Your message"
          />

          <div className="sm:col-span-2">
            <button type="submit" className="btn">
              Send Message
            </button>
            {sent && <span className="ml-4 font-ui text-[14px] text-[#3a7d2c]">Message sent!</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const Landing = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <Hero />
      <TriangleImage />
      <ParallaxBand />

      {/* About */}
      <section className="bg-white px-5 pt-14 pb-20 lg:pt-16 lg:pb-28">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <GhostTitle ghost="ABOUT US" title="Our History" />
            <p className="mt-9 font-ui text-[15px] leading-[2] text-ink">{SALON_COPY}</p>
            <Link to="/about" className="btn mt-8">
              About Us
            </Link>
          </Reveal>
        </div>
      </section>

      <Services />
      <SplitCenter />
      <SplitOffer />
      <SplitGalleryCta />
      <GallerySection onOpen={setLightbox} />
      <ContactBlock />

      <Lightbox
        images={GALLERY}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onPrev={() => setLightbox((i) => (i - 1 + GALLERY.length) % GALLERY.length)}
        onNext={() => setLightbox((i) => (i + 1) % GALLERY.length)}
      />
    </>
  )
}

export default Landing
