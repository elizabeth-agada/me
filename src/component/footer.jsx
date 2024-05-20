import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaGithub, FaMedium } from 'react-icons/fa'; //Example icons
//Import your social icons

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">

        {/* Copyright Information */}
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {currentYear} Elizabeth. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 justify-center md:justify-end">
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/elizabethagada" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6 hover:text-blue-400"/>
          </a>
          {/* Twitter Icon */}
          <a href="https://twitter.com/Lizian_" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare className="h-6 w-6 hover:text-blue-400"/>
          </a>
          {/* GitHub Icon */}
          <a href="https://github.com/elizabeth-agada" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 hover:text-white"/>
          </a>
          {/* Medium Icon */}
          <a href="https://medium.com/@elizabethagada" target="_blank" rel="noopener noreferrer">
            <FaMedium className="h-6 w-6 hover:text-white"/>
          </a>
          {/* Your other social media icons */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
