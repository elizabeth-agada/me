import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Branding */}
        <h1 className="text-3xl font-bold">Liz</h1>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links (Visible on Desktop, Hidden on Mobile Initially) */}
        <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'flex' : ''}`}>
          <ul className="flex space-x-4">
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Hidden on Desktop, Visible on Mobile when Button is Clicked) */}
      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} flex flex-col space-y-2 mt-4`}>
        <a href="#About" className="text-white">About</a>
        <a href="#Portfolio" className="text-white">Portfolio</a>
        <a href="#Blog" className="text-white">Blog</a>
        <a href="#Contact" className="text-white">Contact</a>
      </div>
    </header>
  );
}

export default Navbar;
