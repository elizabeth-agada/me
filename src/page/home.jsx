import React from 'react';
import Navbar from '../component/navbar';
import Hero from './hero';
import About from './about';

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    </>
  );
}

export default Home;