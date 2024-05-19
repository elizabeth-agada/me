import React from 'react';

function About() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img 
              src='./liz3.png' 
              alt="Liz" 
              className="rounded-full w-64 h-64 mx-auto md:mx-32" 
            />
          </div>
          <div className="md:w-1/2 md:ml-16 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-white mb-4">
              As a frontend engineer, I'm driven by my passion for building exceptional web experiences. 
              I specialize in crafting intuitive, accessible, and visually appealing user interfaces using modern technologies like React and Tailwind CSS.
            </p>
            <p className="text-white mb-4">
              My commitment to user-centric design and collaboration extends beyond code. 
              I thrive as a community manager, fostering vibrant online spaces where developers can connect, learn, and grow.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
