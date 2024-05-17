import React from 'react'
import Navbar from '../component/navbar'
import Hero from './hero'
import About from './about'

function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />    
    </div>
  )
}

export default home