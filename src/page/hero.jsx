import React from 'react';

function Hero() {
  return (
    <section 
      className="relative bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white py-20 mt-16"
      style={{ 
        backgroundImage: `url(./liz.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent  to-[#0b32a0]"></div>
      <div className="container mx-auto relative flex flex-col md:flex-row px-4">
        {/* content goes here */}
        <div className="md:w-1/2 md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm Elizabeth!
          </h1>
          <p className="text-2xl md:text-3xl mt-4">
            Frontend Engineer | Community Manager
          </p>
          <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full mt-8 hover:bg-gray-200">
            Get in Touch
          </button>
        </div>
      </div> 
    </section>
  );
}

export default Hero;