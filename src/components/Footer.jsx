import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SOCIALS = [
  {
    label: 'Facebook',
    path: 'M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V14h2.3v7h3z',
  },
  {
    label: 'Twitter',
    path: 'M21 6.3c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4.9a3.8 3.8 0 0 0-6.6 3.5A10.9 10.9 0 0 1 3.6 5a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.4 3.1 3.8-.6.2-1.1.2-1.7.1a3.8 3.8 0 0 0 3.6 2.6A7.7 7.7 0 0 1 2 17.6a10.9 10.9 0 0 0 5.9 1.7c7 0 10.9-5.9 10.9-11v-.5c.8-.5 1.4-1.2 2.2-1.5z',
  },
  {
    label: 'Instagram',
    path: 'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21 8.9c-.1-1.5-.4-2.8-1.5-3.8-1-1-2.3-1.4-3.8-1.5C14.3 3.5 9.7 3.5 8.3 3.6c-1.5.1-2.8.4-3.8 1.5-1 1-1.4 2.3-1.5 3.8-.1 1.4-.1 6 0 7.4.1 1.5.4 2.8 1.5 3.8 1 1 2.3 1.4 3.8 1.5 1.4.1 6 .1 7.4 0 1.5-.1 2.8-.4 3.8-1.5 1-1 1.4-2.3 1.5-3.8.1-1.4.1-6 0-7.4zm-1.9 8.9c-.3.8-1 1.5-1.8 1.8-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4c-.8-.3-1.5-1-1.8-1.8-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7c.3-.8 1-1.5 1.8-1.8 1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4c.8.3 1.5 1 1.8 1.8.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z',
  },
  {
    label: 'Pinterest',
    path: 'M12 4a8 8 0 0 0-2.9 15.4c-.1-.6-.1-1.5 0-2.2l1-4.1s-.2-.5-.2-1.3c0-1.2.7-2.1 1.6-2.1.7 0 1.1.6 1.1 1.2 0 .8-.5 1.9-.7 3-.2.9.4 1.6 1.3 1.6 1.6 0 2.7-2 2.7-4.4 0-1.8-1.2-3.2-3.4-3.2-2.5 0-4 1.8-4 3.9 0 .7.2 1.3.5 1.6.1.1.1.2.1.4l-.2.7c0 .2-.2.3-.4.2-1.1-.5-1.7-1.9-1.7-3.2 0-2.6 1.9-5 5.5-5 2.9 0 5.1 2 5.1 4.8 0 2.9-1.8 5.2-4.3 5.2-.8 0-1.6-.4-1.9-1l-.5 2c-.2.7-.7 1.6-1 2.1A8 8 0 1 0 12 4z',
  },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setJoined(true)
    setEmail('')
    setTimeout(() => setJoined(false), 3500)
  }

  return (
    <footer>
      <div className="bg-gold px-5 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-[1170px]">
          <Link to="/" className="inline-block">
            <img
              src="/images/logo-dark.png"
              alt="XTRA Beauty"
              className="mx-auto w-[165px] lg:w-[185px]"
            />
          </Link>

          <p className="mx-auto mt-7 max-w-[860px] font-ui text-[15px] leading-[1.9] text-dark/80">
            Contact us today and we'll help you get started. Most people start with an About page
            that introduces them to potential site visitors.
          </p>

          <form onSubmit={submit} className="mx-auto mt-10 flex max-w-[540px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email ..."
              aria-label="Email address"
              className="min-w-0 flex-1 border border-dark/45 bg-transparent px-5 py-3.5 font-ui text-[15px] text-dark outline-none transition placeholder:text-dark/55 focus:border-dark"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 border border-l-0 border-dark/45 px-6 py-3.5 font-ui text-[15px] font-medium text-dark transition hover:bg-dark hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
              Join Now
            </button>
          </form>

          {joined && (
            <p className="mt-3 font-ui text-[13px] text-dark">
              Thanks — you're on the list!
            </p>
          )}

          <div className="mt-11 flex justify-center gap-3.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                onClick={(e) => e.preventDefault()}
                className="flex h-[46px] w-[46px] items-center justify-center border border-dark/45 text-dark transition-all duration-300 hover:bg-dark hover:text-gold"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1f1f1f] px-5 py-5 text-center">
        <p className="font-ui text-[14px] text-white/65">
          Copyright © {new Date().getFullYear()} Xtro Theme. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
