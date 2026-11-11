import React from 'react'
import { Link } from 'react-router-dom'

import GhostTitle from '../components/GhostTitle'

const NotFound = () => (
  <section className="flex min-h-[70vh] items-center justify-center bg-white px-5 pt-[92px] text-center">
    <div className="max-w-[620px]">
      <GhostTitle ghost="404" title="Page Not Found" />
      <p className="mt-8 font-ui text-[15px] leading-[2] text-ink">
        The page you are looking for doesn't exist or has been moved. Let's get you back to the
        salon.
      </p>
      <Link to="/" className="btn mt-8">
        Back to Home
      </Link>
    </div>
  </section>
)

export default NotFound
