import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar({ aboutRef, portfolioRef, blogRef, contactRef }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setIsVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleLinkClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' }); 
    setIsMobileMenuOpen(false); 
  };

  // Corrected function for handling menu click
  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 -translate-y-full'} 
                 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white p-4 fixed top-0 left-0 right-0 z-10 
                 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Branding */}
        <Link to="/" onClick={() => handleLinkClick(aboutRef)}>
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

        {/* Navigation Links (Visible on Desktop, Hidden on Mobile Initially) */}
        <nav className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'flex' : ''}`}>
          <ul className="flex space-x-4">
            <li onClick={() => handleLinkClick(aboutRef)}>
              <button className="text-white">About</button>
            </li>
            <li onClick={() => handleLinkClick(portfolioRef)}>
              <button className="text-white">Portfolio</button>
            </li>
            <li onClick={() => handleLinkClick(blogRef)}>
              <button className="text-white">Blog</button>
            </li>
            <li onClick={() => handleLinkClick(contactRef)}>
              <button className="text-white">Contact</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Hidden on Desktop, Visible on Mobile when Button is Clicked) */}
      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} flex flex-col space-y-2 mt-4`}>
        <button onClick={() => handleLinkClick(aboutRef)} className="text-white text-left">About</button>
        <button onClick={() => handleLinkClick(portfolioRef)} className="text-white text-left">Portfolio</button>
        <button onClick={() => handleLinkClick(blogRef)} className="text-white text-left">Blog</button>
        <button onClick={() => handleLinkClick(contactRef)} className="text-white text-left">Contact</button>
      </div>
    </header>
  );
}

export default Navbar;
