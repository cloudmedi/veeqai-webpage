import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Demo from '../sections/Demo'

const Landing: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
      </main>
      <Footer />
    </div>
  )
}

export default Landing