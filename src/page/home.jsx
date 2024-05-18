import React from 'react'
import Navbar from '../component/navbar'
import Hero from './hero'
import About from './about'
import Portfolio from './portfolio'

function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
     
    </div>
  )
}

export default home