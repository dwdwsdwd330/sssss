import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default App