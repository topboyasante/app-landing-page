import React, { useContext } from 'react'
import Navbar from '../components/reusables/Navbar'
import Features from '../components/sections/Features'
import Hero from '../components/sections/Hero'
import AppContext from '../context/AppContext'

function Homepage() {
  const {isDark} = useContext(AppContext)
  return (
    <main>
      {/* Hero Section */}
      <section className={isDark?'bg-[#001219] bg-no-repeat w-full h-full bg-cover relative ease duration-300 border-b border-b-gray-900':'bg-imgbg bg-no-repeat w-full h-full bg-cover relative ease duration-300'}>
        <Navbar/>
        <Hero/>
      </section>
      {/* Features Section */}
      <section className={isDark?'bg-[#001119]':'bg-[#ffffff]'}>
        <Features/>
      </section>
    </main>
  )
}

export default Homepage