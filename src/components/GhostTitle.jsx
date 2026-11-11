import React from 'react'

/**
 * The signature heading device used across the whole site:
 * a huge pale "ghost" word sitting behind a Dancing Script heading,
 * with a short gold rule on either side.
 *
 * <GhostTitle ghost="ABOUT US" title="Our History" />
 */
const GhostTitle = ({ ghost, title, align = 'center', className = '' }) => {
  const justify =
    align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center'
  const text =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <div className={`relative ${text} ${className}`}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-2 select-none font-sans text-[62px] leading-none font-bold tracking-[0.08em] text-gold-ghost uppercase sm:text-[80px] lg:text-[104px]"
      >
        {ghost}
      </span>

      <div className={`relative flex items-center gap-4 ${justify}`}>
        <span className="hidden h-px w-12 bg-gold sm:block" />
        <h2 className="relative whitespace-nowrap text-[38px] leading-tight text-dark sm:text-[46px] lg:text-[54px]">
          {title}
        </h2>
        <span className="hidden h-px w-12 bg-gold sm:block" />
      </div>
    </div>
  )
}

export default GhostTitle
