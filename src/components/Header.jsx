import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Our History', to: '/about' },
      { label: 'Our Team', to: '/about#team' },
      { label: 'Make an Appointment', to: '/make-an-appointment' },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog', to: '/blog' },
  { label: 'Shop', to: '/shop' },
  { label: 'Contact', to: '/contact' },
]

const Header = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDropdown(false)
  }, [pathname])

  // Transparent over the hero on the homepage, solid dark everywhere else.
  const solid = !isHome || scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-dark shadow-[0_2px_20px_rgba(0,0,0,0.25)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[92px] max-w-[1170px] items-center justify-between px-5 lg:px-8">
        <Link to="/" className="shrink-0" aria-label="XTRA Beauty — Home">
          <img
            src="/images/logo5.png"
            alt="XTRA Beauty"
            className={`w-[150px] transition-all duration-500 lg:w-[170px] ${
              solid ? 'brightness-0 invert' : ''
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1.5 py-2 font-ui text-[15px] font-medium tracking-wide transition-colors ${
                      isActive ? 'text-gold' : 'text-white hover:text-gold'
                    }`
                  }
                >
                  {item.label}
                  <svg width="9" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </NavLink>

                {dropdown && (
                  <ul className="absolute left-0 top-full w-56 border-t-2 border-gold bg-dark py-2 shadow-xl">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          className="block px-5 py-2.5 font-ui text-[14px] text-white/80 transition hover:bg-white/5 hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `relative py-2 font-ui text-[15px] font-medium tracking-wide transition-colors ${
                    isActive ? 'text-gold' : 'text-white hover:text-gold'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}

          <Link
            to="/make-an-appointment"
            className="ml-1 border border-gold px-6 py-2.5 font-ui text-[14px] font-semibold tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-dark"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile: phone button + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+10000000000"
            aria-label="Call us"
            className="flex h-10 w-10 items-center justify-center border border-gold/60 text-gold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] bg-gold"
          >
            <span
              className={`h-[2px] w-5 bg-dark transition-transform duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span className={`h-[2px] w-5 bg-dark transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-[2px] w-5 bg-dark transition-transform duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-dark transition-[max-height] duration-500 lg:hidden ${
          open ? 'max-h-[520px]' : 'max-h-0'
        }`}
      >
        <ul className="px-5 py-3">
          {NAV.map((item) => (
            <li key={item.label} className="border-b border-white/10 last:border-0">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block py-3.5 font-ui text-[15px] font-medium ${
                    isActive ? 'text-gold' : 'text-white/85'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <ul className="mb-2 pl-4">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        to={child.to}
                        className="block py-2 font-ui text-[14px] text-white/55 hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="px-5 pb-5">
          <Link
            to="/make-an-appointment"
            className="block bg-gold py-3 text-center font-ui text-[15px] font-semibold text-dark"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
