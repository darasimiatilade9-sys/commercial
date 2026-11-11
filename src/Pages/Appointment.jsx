import React, { useState } from 'react'

import PageBanner from '../components/PageBanner'
import GhostTitle from '../components/GhostTitle'
import Reveal from '../components/Reveal'
import { ADDRESS, SERVICES } from '../data'

const SLOTS = ['09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM']

const Appointment = () => {
  const [sent, setSent] = useState(false)
  const [slot, setSlot] = useState(SLOTS[1])

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <>
      <PageBanner
        title="Make an Appointment"
        breadcrumb="Reservation"
        image="/images/slide2.jpg"
      />

      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1170px]">
          <Reveal>
            <GhostTitle ghost="RESERVATION" title="Book Your Visit" />
            <p className="mx-auto mt-7 max-w-[640px] text-center font-ui text-[15px] leading-[2] text-ink">
              Pick a service and a time that suits you. We will confirm your appointment by email
              within one business hour.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px]">
            {/* Form */}
            <Reveal className="bg-cream px-6 py-10 sm:px-10">
              <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
                <input required className="field" placeholder="Your Name (*)" aria-label="Your name" />
                <input required type="email" className="field" placeholder="Your Email (*)" aria-label="Your email" />
                <input type="tel" className="field" placeholder="Phone Number" aria-label="Phone number" />

                <select required className="field appearance-none" defaultValue="" aria-label="Service">
                  <option value="" disabled>
                    Select a Service (*)
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.title}>
                      {s.title} — {s.price}
                    </option>
                  ))}
                  <option>Manicure — From $25</option>
                  <option>Pedicure — From $30</option>
                </select>

                <input required type="date" className="field" aria-label="Preferred date" />

                <select className="field appearance-none" defaultValue="" aria-label="Stylist">
                  <option value="" disabled>
                    Preferred Stylist
                  </option>
                  <option>No preference</option>
                  <option>Jenni West</option>
                  <option>Linda Someone</option>
                  <option>Amanda Carston</option>
                  <option>Clara Carston</option>
                </select>

                {/* Time slots */}
                <div className="sm:col-span-2">
                  <p className="mb-3 font-ui text-[13px] tracking-[0.18em] text-ink-soft uppercase">
                    Available times
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSlot(t)}
                        className={`border px-4 py-2 font-ui text-[13px] transition-colors duration-300 ${
                          slot === t
                            ? 'border-gold bg-gold text-dark'
                            : 'border-line bg-white text-ink hover:border-gold'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows={5}
                  className="field sm:col-span-2"
                  placeholder="Additional notes"
                  aria-label="Additional notes"
                />

                <div className="sm:col-span-2">
                  <button type="submit" className="btn">
                    Submit Reservation
                  </button>
                  {sent && (
                    <span className="ml-4 font-ui text-[14px] text-[#3a7d2c]">
                      Request received — see you at {slot}!
                    </span>
                  )}
                </div>
              </form>
            </Reveal>

            {/* Aside */}
            <Reveal delay={140} className="space-y-6">
              <div className="border border-line p-7">
                <h3 className="text-[32px] leading-none text-dark">Salon Hours</h3>
                <ul className="mt-5 space-y-2.5 font-ui text-[14px] text-ink">
                  {[
                    ['Mon — Fri', '09:00 — 19:00'],
                    ['Saturday', '10:00 — 18:00'],
                    ['Sunday', 'Closed'],
                  ].map(([d, h]) => (
                    <li key={d} className="flex justify-between border-b border-line pb-2.5 last:border-0">
                      <span>{d}</span>
                      <span className="text-ink-soft">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark p-7">
                <h3 className="text-[32px] leading-none text-gold">Need Help?</h3>
                <p className="mt-3 font-ui text-[14px] leading-[1.9] text-white/70">
                  Call us directly and we will book you in over the phone.
                </p>
                <a
                  href="tel:+10000000000"
                  className="mt-4 inline-block font-ui text-[17px] text-white transition hover:text-gold"
                >
                  +1 (000) 000-0000
                </a>
                <p className="mt-4 font-ui text-[14px] text-white/70">{ADDRESS}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default Appointment
