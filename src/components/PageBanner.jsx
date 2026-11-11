import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Banner shared by every inner page: dark image with a script title
 * and a breadcrumb trail underneath.
 */
const PageBanner = ({ title, breadcrumb, image = '/images/slide3.jpg' }) => (
  <section className="relative flex h-[340px] items-center justify-center overflow-hidden bg-dark pt-[92px] lg:h-[400px]">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})`, filter: 'brightness(0.45)' }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-dark/35" aria-hidden="true" />

    <div className="relative px-5 text-center">
      <h1 className="text-[46px] leading-tight text-white sm:text-[56px] lg:text-[64px]">
        {title}
      </h1>
      <nav className="mt-2 flex items-center justify-center gap-2 font-ui text-[14px] text-white/75">
        <Link to="/" className="transition hover:text-gold">
          Home
        </Link>
        <span className="text-gold">/</span>
        <span className="text-gold">{breadcrumb ?? title}</span>
      </nav>
    </div>
  </section>
)

export default PageBanner
