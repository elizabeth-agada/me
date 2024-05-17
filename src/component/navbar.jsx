import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Branding */}
        <Link to="/">
          <h1 className="text-3xl font-bold">Liz</h1>
        </Link>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button
          className="text-white md:hidden focus:outline-none transition-transform duration-300"
          onClick={handleMenuClick}
        >
          <svg
            className={`h-6 w-6 ${isMobileMenuOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'flex' : ''}`}>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white">About</Link> 
            </li>
            <li>
              <Link to="/portfolio" className="text-white">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog" className="text-white">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Hidden on Desktop, Visible on Mobile when Button is Clicked) */}
      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} flex flex-col space-y-2 mt-4`}>
        <Link to="/" className="text-white text-left">Home</Link>
        <Link to="/about" className="text-white text-left">About</Link>
        <Link to="/portfolio" className="text-white text-left">Portfolio</Link>
        <Link to="/blog" className="text-white text-left">Blog</Link>
        <Link to="/contact" className="text-white text-left">Contact</Link>
      </div>
    </header>
  );
}

export default Navbar;
