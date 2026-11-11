import React, { useEffect } from 'react'

/** Fullscreen gallery overlay with prev / next / close. */
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (index === null) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [index, onClose, onPrev, onNext])

  if (index === null) return null

  const current = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image"
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/92 p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center border border-white/35 text-white transition hover:border-gold hover:text-gold sm:top-8 sm:right-8"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center border border-white/35 text-white transition hover:border-gold hover:text-gold sm:left-8"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center border border-white/35 text-white transition hover:border-gold hover:text-gold sm:right-8"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <figure
        className="max-h-full w-full max-w-[1000px]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
        />
        <figcaption className="mt-5 text-center font-ui text-[14px] text-white/70">
          {current.alt}
          <span className="ml-3 text-gold">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}

export default Lightbox
