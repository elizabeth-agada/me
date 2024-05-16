import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
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
        <div className="md:w-1/2">
          <img src='./liz.jpg' 
            alt="Your Name" 
            className="rounded-full w-64 h-64 mx-auto md:mx-0" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
