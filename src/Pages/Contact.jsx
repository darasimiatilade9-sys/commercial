import React, { useState } from 'react'

import PageBanner from '../components/PageBanner'
import GhostTitle from '../components/GhostTitle'
import Reveal from '../components/Reveal'
import { ADDRESS } from '../data'

const DETAILS = [
  {
    label: 'Email Us',
    value: 'hello@xtrabeauty.com',
    href: 'mailto:hello@xtrabeauty.com',
    path: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    label: 'Call Us',
    value: '+1 (000) 000-0000',
    href: 'tel:+10000000000',
    path: 'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z',
  },
  {
    label: 'Visit Us',
    value: ADDRESS,
    href: null,
    path: 'M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z',
  },
]

const HOURS = [
  ['Monday — Friday', '09:00 — 19:00'],
  ['Saturday', '10:00 — 18:00'],
  ['Sunday', 'Closed'],
]

const Contact = () => {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <>
      <PageBanner title="Contact" image="/images/img4.jpg" />

      {/* Detail cards */}
      <section className="bg-white px-5 py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1170px] gap-6 md:grid-cols-3">
          {DETAILS.map((d, i) => (
            <Reveal key={d.label} delay={i * 120}>
              <div className="flex h-full flex-col items-center border border-line px-6 py-9 text-center transition-colors duration-300 hover:border-gold">
                <span className="flex h-14 w-14 items-center justify-center bg-gold text-dark">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={d.path} />
                  </svg>
                </span>
                <h3 className="mt-5 text-[30px] leading-none text-dark">{d.label}</h3>
                {d.href ? (
                  <a
                    href={d.href}
                    className="mt-3 font-ui text-[14px] break-words text-ink transition hover:text-gold"
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-3 font-ui text-[14px] text-ink">{d.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-cream px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          <GhostTitle ghost="MESSAGE" title="Send a Message" align="left" />

          <form onSubmit={submit} className="mt-9 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required className="field" placeholder="Your Name (*)" aria-label="Your name" />
              <input required type="email" className="field" placeholder="Your Email (*)" aria-label="Your email" />
            </div>

            <input className="field" placeholder="Subject" aria-label="Subject" />

            <select className="field appearance-none" defaultValue="" aria-label="Department">
              <option value="" disabled>
                Business Department
              </option>
              <option>Reception</option>
              <option>Hair Styling</option>
              <option>Skin Care</option>
              <option>Makeup</option>
              <option>Billing</option>
            </select>

            <textarea rows={6} className="field" placeholder="Your Message (*)" aria-label="Your message" />

            <div>
              <button type="submit" className="btn">
                Send Message
              </button>
              {sent && (
                <span className="ml-4 font-ui text-[14px] text-[#3a7d2c]">
                  Thanks — we'll be in touch shortly.
                </span>
              )}
            </div>
          </form>
        </div>

        <div className="relative min-h-[360px] bg-dark">
          <img src="/images/map.png" alt="Salon location map" className="h-full w-full object-cover opacity-90" />

          <div className="absolute top-1/2 left-1/2 w-[86%] max-w-[430px] -translate-x-1/2 -translate-y-1/2 bg-gold-light px-7 py-6 text-center shadow-lg">
            <p className="font-ui text-[15px] text-dark">{ADDRESS}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-ui text-[13px] tracking-[0.16em] text-dark uppercase underline underline-offset-4 transition hover:text-ink-soft"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-white px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[760px] text-center">
          <GhostTitle ghost="HOURS" title="Opening Times" />
          <ul className="mt-10 border border-line">
            {HOURS.map(([d, h]) => (
              <li
                key={d}
                className="flex items-center justify-between border-b border-line px-6 py-4 font-ui text-[15px] last:border-b-0"
              >
                <span className="text-dark">{d}</span>
                <span className="text-gold">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Contact
