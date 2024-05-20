import React from 'react'
import Navbar from '../component/navbar'
import Hero from './hero'
import About from './about'
import Portfolio from './portfolio'
import Blog from './blog'
import Contact from './contact'
import Footer from '../component/footer'

function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
     
    </div>
  )
}

export default home