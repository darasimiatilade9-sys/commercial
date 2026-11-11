import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PageBanner from '../components/PageBanner'
import GhostTitle from '../components/GhostTitle'
import Reveal from '../components/Reveal'
import { FAQS_MAIN, FAQS_OTHER } from '../data'

const Accordion = ({ items, startOpen = 0 }) => {
  const [open, setOpen] = useState(startOpen)

  return (
    <ul className="border border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={item.q} className="border-b border-line last:border-b-0">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 ${
                isOpen ? 'bg-cream' : 'bg-white hover:bg-cream/60'
              }`}
            >
              <span className="font-ui text-[15px] font-semibold text-dark">{item.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-300 ${
                  isOpen ? 'rotate-45 border-gold bg-gold text-dark' : 'border-gold text-gold'
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 font-ui text-[15px] leading-[2] text-ink">{item.a}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const Faq = () => (
  <>
    <PageBanner title="FAQ" image="/images/img8.jpg" />

    <section className="bg-white px-5 py-20 lg:py-24">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <GhostTitle ghost="QUESTIONS" title="F.A.Qs" />
          <p className="mx-auto mt-6 max-w-[620px] text-center font-ui text-[15px] leading-[2] text-ink">
            Everything you might want to know before your first visit. Can't find an answer? Get in
            touch and we'll reply the same day.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <Accordion items={FAQS_MAIN} />
        </Reveal>
      </div>
    </section>

    <section className="bg-cream px-5 py-20 lg:py-24">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <GhostTitle ghost="MORE" title="Other Questions" />
        </Reveal>

        <Reveal className="mt-12">
          <Accordion items={FAQS_OTHER} startOpen={-1} />
        </Reveal>
      </div>
    </section>

    {/* CTA panel */}
    <section className="bg-white px-5 py-20 text-center">
      <Reveal className="mx-auto max-w-[640px]">
        <GhostTitle ghost="CONTACT" title="Do you have a Question?" />
        <p className="mx-auto mt-7 font-ui text-[15px] leading-[2] text-ink">
          Our team is happy to help with bookings, treatments, products or anything else.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
          <Link to="/make-an-appointment" className="btn-outline !border-dark !text-dark hover:!bg-dark hover:!text-white">
            Book Now
          </Link>
        </div>
      </Reveal>
    </section>
  </>
)

export default Faq
