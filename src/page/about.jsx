import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function About({ onClose }) { // Receive onClose function as a prop
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    titleRef.current.classList.add('fade-in');
    setTimeout(() => subtitleRef.current.classList.add('fade-in'), 500); // Delay for the subtitle
  }, []); // Run the effect only once on mount

  const handleClose = () => {
    onClose(); // Invoke onClose function passed from parent
  };

  return (
    <div className="bg-gradient-to-r from-[#1E3A8A] to-[#060229e7] md:py-20 relative md:w-2/3">
      {/* Close icon */}
      <button onClick={handleClose} className="absolute top-0 right-0 m-4 text-gray-200 hover:text-white">
        <FaTimes />
      </button>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img 
              src='./liz3.png' 
              alt="Liz"
              className="rounded-full w-64 h-64 mx-auto md:mx-32" 
            />
          </div>
          <div className="text-left md:w-1/2 md:ml-16 mt-8 md:mt-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white" ref={titleRef}>About Me</h2>
            <p ref={subtitleRef} className="text-gray-200 mb-4">
              As a frontend engineer, I'm driven by my passion for building exceptional web experiences. 
              I specialize in crafting intuitive, accessible, and visually appealing user interfaces using modern technologies like React and Tailwind CSS.
            </p>
            <p ref={subtitleRef} className="text-white mb-4">
              My commitment to user-centric design and collaboration extends beyond code.
              I thrive as a community manager, fostering vibrant online spaces where developers can connect, learn, and grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
