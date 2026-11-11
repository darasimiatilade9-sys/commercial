import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

import Landing from './Landing'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Faq from './Pages/Faq'
import Blog from './Pages/Blog'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Appointment from './Pages/Appointment'
import NotFound from './Pages/NotFound'

/** Reset scroll position whenever the route changes. */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/make-an-appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App
