import React from 'react'
import { Link } from 'react-router-dom'

import PageBanner from '../components/PageBanner'
import GhostTitle from '../components/GhostTitle'
import Reveal from '../components/Reveal'
import { SALON_COPY, TEAM, GALLERY } from '../data'

const About = () => (
  <>
    <PageBanner title="About Us" />

    {/* Intro */}
    <section className="bg-white px-5 py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1170px] items-center gap-12 lg:grid-cols-2">
        <Reveal className="grid grid-cols-2 gap-4">
          <img src="/images/img4-600.jpg" alt="Treatment room" className="h-[300px] w-full object-cover" />
          <img src="/images/img8-600.jpg" alt="Makeup session" className="mt-8 h-[300px] w-full object-cover" />
          <img src="/images/img9-1-600.jpg" alt="Studio portrait" className="-mt-4 h-[260px] w-full object-cover" />
          <img src="/images/slide3-600.jpg" alt="Lipstick detail" className="mt-4 h-[260px] w-full object-cover" />
        </Reveal>

        <Reveal delay={120}>
          <GhostTitle ghost="ABOUT" title="About Us" align="left" />
          <p className="mt-8 font-ui text-[15px] leading-[2] text-ink">{SALON_COPY}</p>
          <p className="mt-5 font-ui text-[15px] leading-[2] text-ink">
            Founded over a decade ago, our studio pairs experienced stylists with a calm, welcoming
            space. Every visit begins with a consultation so the result always suits you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/make-an-appointment" className="btn">
              Make an Appointment
            </Link>
            <Link to="/gallery" className="btn-outline !border-dark !text-dark hover:!bg-dark hover:!text-white">
              View Gallery
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-dark px-5 py-16">
      <div className="mx-auto grid max-w-[1170px] gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
        {[
          { n: '12+', l: 'Years Open' },
          { n: '8.5k', l: 'Happy Clients' },
          { n: '24', l: 'Stylists' },
          { n: '60+', l: 'Treatments' },
        ].map((s, i) => (
          <Reveal key={s.l} delay={i * 100}>
            <p className="font-script text-[54px] leading-none font-bold text-gold">{s.n}</p>
            <p className="mt-2 font-ui text-[13px] tracking-[0.25em] text-white/70 uppercase">{s.l}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Gallery preview */}
    <section className="bg-white px-5 py-20 lg:py-24">
      <div className="mx-auto max-w-[1170px]">
        <Reveal>
          <GhostTitle ghost="BEAUTY" title="Our Gallery" />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY.slice(0, 4).map((g, i) => (
            <Reveal key={g.src} delay={i * 90}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-[230px] w-full object-cover" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section id="team" className="bg-cream px-5 py-20 lg:py-24">
      <div className="mx-auto max-w-[1170px]">
        <Reveal>
          <GhostTitle ghost="TEAM" title="Our Team" />
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 110}>
              <article className="group bg-white text-center">
                <div className="relative overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gold/95 py-3 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="font-ui text-[13px] tracking-[0.2em] text-dark uppercase">
                      View Profile
                    </p>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <h3 className="text-[30px] leading-none text-dark">{m.name}</h3>
                  <p className="mt-2 font-ui text-[13px] tracking-[0.18em] text-gold uppercase">
                    {m.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gold-light px-5 py-14 text-center">
      <h2 className="text-[40px] leading-tight text-dark sm:text-[46px]">Ready for your visit?</h2>
      <Link to="/make-an-appointment" className="btn mt-6 !bg-dark !text-white hover:!bg-dark/85">
        Book Now
      </Link>
    </section>
  </>
)

export default About
