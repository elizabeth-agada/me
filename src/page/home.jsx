import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaFolderOpen, FaBlog, FaEnvelope, FaLinkedin, FaTwitterSquare, FaGithub, FaMedium } from 'react-icons/fa';
import About from './about';
import Portfolio from './portfolio';
import Blog from './blog';
import Contact from './contact';
import { Link } from 'react-router-dom';

function HomePage({ isHomePage }) {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    // Apply overflow hidden to body when component mounts
    document.body.style.overflow = 'hidden';

    // Clean up and remove overflow hidden from body when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      {isHomePage && ( // Render loading animation only on the home page
        <Link to="/" className="loading-animation h-full md:h-screen p-6 md:p-32 text-white flex flex-col justify-center items-center">
          {/* Loading animation content */}
        </Link>
      )}
      <div className="fixed top-0 left-0 w-full h-full bg-cover" style={{ backgroundImage: `url(./bg.jpg)` }} />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="mt-28 md:mt-60 flex items-center mb-4 md:text-3xl rounded-lg border-gray-200 py-2 px-10 md:px-32 text-white fade-in-up">
          <h1>Frontend Engineer</h1>
        </div>
        <div className="px-5 md:px-0 p-4 rounded-md shadow-md max-w-md w-full mx-auto mb-8 md:bg-black md:bg-opacity-50 md:backdrop-blur-lg">
          <div className="space-y-5 md:space-y-0 md:grid grid-cols-5 gap-4 mt-4">
            {/* Home Icon */}
            <div className="md:flex md:flex-col flex justify-start items-center gap-3 md:gap-0 text-white cursor-pointer menu-item" onClick={() => openPopup('home')}>
              <FaHome className="text-4xl" />
              <span className="text-sm mt-1">Home</span>
            </div>
            {/* About Icon */}
            <div className="md:flex md:flex-col flex justify-start items-center gap-3 md:gap-0 text-white cursor-pointer menu-item" onClick={() => openPopup('about')}>
              <FaInfoCircle className="text-4xl" />
              <span className="text-sm mt-1">About</span>
            </div>
            {/* Portfolio Icon */}
            <div className="text-white md:flex md:flex-col flex justify-start items-center gap-3 md:gap-0 cursor-pointer menu-item" onClick={() => openPopup('portfolio')}>
              <FaFolderOpen className="text-4xl" />
              <span className="text-sm mt-1">Portfolio</span>
            </div>
            {/* Blog Icon */}
            <div className="md:flex md:flex-col flex justify-start items-center gap-3 md:gap-0 text-white cursor-pointer menu-item" onClick={() => openPopup('blog')}>
              <FaBlog className="text-4xl" />
              <span className="text-sm mt-1">Community</span>
            </div>
            {/* Contact Icon */}
            <div className="md:flex md:flex-col flex justify-start items-center gap-3 md:gap-0 text-white cursor-pointer menu-item" onClick={() => openPopup('contact')}>
              <FaEnvelope className="text-4xl" />
              <span className="text-sm mt-1">Contact</span>
            </div>
          </div>
        </div>

        {/* Render pop-up content based on activePopup */}
        {activePopup === 'about' && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
            <About onClose={closePopup} /> {/* Pass onClose function to About component */}
          </div>
        )}
        {activePopup === 'portfolio' && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
            <Portfolio onClose={closePopup} /> {/* Pass onClose function to Portfolio component */}
          </div>
        )}
        {activePopup === 'blog' && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
            <Blog onClose={closePopup} /> {/* Pass onClose function to Blog component */}
          </div>
        )}
        {activePopup === 'contact' && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
            <Contact onClose={closePopup} /> {/* Pass onClose function to Contact component */}
          </div>
        )}
        
        {/* Footer */}
        <footer className="text-white container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center mt-auto text-sm md:text-base">
          {/* Copyright Information */}
          <p className="text-center mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Elizabeth Agada. All rights reserved.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center md:justify-end md:mb-4 mb-10">
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/elizabethagada" target="_blank" rel="noopener noreferrer" className="social-media-icon">
              <FaLinkedin className="h-6 w-6 hover:text-blue-400" />
            </a>
            {/* Twitter Icon */}
            <a href="https://twitter.com/Lizian_" target="_blank" rel="noopener noreferrer" className="social-media-icon">
              <FaTwitterSquare className="h-6 w-6 hover:text-blue-400" />
            </a>
            {/* GitHub Icon */}
            <a href="https://github.com/elizabeth-agada" target="_blank" rel="noopener noreferrer" className="social-media-icon">
              <FaGithub className="h-6 w-6 hover:text-blue-400" />
            </a>
            {/* Medium Icon */}
            <a href="https://medium.com/@elizabethagada" target="_blank" rel="noopener noreferrer" className="social-media-icon">
              <FaMedium className="h-6 w-6 hover:text-blue-400" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
