import React, { useEffect, useRef } from 'react';

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    titleRef.current.classList.add('fade-in');
    setTimeout(() => subtitleRef.current.classList.add('fade-in'), 500); // Delay for the subtitle
  }, []); // Run the effect only once on mount

  return (
    <section
      className="relative bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white py-20"
      style={{
        backgroundImage: `url(./liz.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b32a0]"></div>
      <div className="container mx-auto relative flex flex-col md:flex-row p-20">
        <div className="md:w-1/2 md:text-left mb-4 md:mb-0">
          <h1 ref={titleRef} className="text-2xl md:text-6xl font-bold leading-tight opacity-0"> {/* Added ref and opacity-0 */}
            Hi, I'm Elizabeth!
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-3xl mt-4 opacity-0"> {/* Added ref and opacity-0 */}
            Frontend Engineer | Community Manager
          </p>
          <button className="bg-gray-900 text-blue-500 font-bold py-3 px-6 rounded-full mt-8 hover:bg-gray-200">
            <a href="https://wa.link/salvtr" className="">Get in Touch</a> 
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
