import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './CNav.css'; // Ensure this CSS file is included

function CNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    // Show navbar when scrolling up or at the top
    if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
      setIsVisible(true); // Show navbar when scrolling up or at the top
    } else {
      setIsVisible(false); // Hide navbar when scrolling down
    }

    setLastScrollY(currentScrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className={`container mx-auto flex justify-between items-center sticky top-0 z-30 nav-bar rounded-xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Logo */}
        <div className='text-2xl md:text-3xl lg:text-4xl font-roboto font-bold text-purple-700 logo'>
          Ceven
        </div>
        
        {/* Nav Links */}
        <div className='flex space-x-4 items-center nav-links'>
          <ScrollLink to='services' smooth={true} duration={500} className="hidden text-black text-xl transition-colors duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:text-purple-700 hover:-translate-y-0.5 transition-transform duration-150 ease-linear nav-item">
            Services
          </ScrollLink>
          <ScrollLink to='teams' smooth={true} duration={500} className="hidden text-black text-xl transition-colors duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:text-purple-700 hover:-translate-y-0.5 transition-transform duration-150 ease-linear nav-item">
            Teams
          </ScrollLink>
          <ScrollLink to='contact' smooth={true} duration={500} className="hidden text-black text-xl transition-colors duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:text-purple-700 hover:-translate-y-0.5 transition-transform duration-150 ease-linear nav-item">
            Contact Us
          </ScrollLink>
          <div className="text-xl border-2 border-purple-700 px-5 py-2 hover:bg-purple-700 border-purple-700 hover:text-white rounded-3xl text-purple-700 transition-all duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:-translate-y-0.5 items-center nav-item">
            <Link to="/eleven">Eleven</Link>
          </div>
          <div className="lg:hidden justify-center items-center" onClick={toggleMobileMenu}>
            <svg className='text-black text-2xl font-bold size-6 mt-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </div>
        </div>

        {/* Animated Shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-white flex flex-col items-center justify-center space-y-4 mobile-menu">
          <div className="absolute top-6 right-6 p-2 text-purple-700 border-2 border-purple-700 rounded-full cursor-pointer close-menu" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <ScrollLink to='contact' smooth={true} duration={500} className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-purple-700 mobile-nav-item" onClick={toggleMobileMenu}>
            Contact Us
          </ScrollLink>
          <ScrollLink to='featured' smooth={true} duration={500} className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-purple-700 mobile-nav-item" onClick={toggleMobileMenu}>
            Featured
          </ScrollLink>
          <ScrollLink to='technologies' smooth={true} duration={500} className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-purple-700 mobile-nav-item" onClick={toggleMobileMenu}>
            Technologies
          </ScrollLink>
        </div>
      )}
    </>
  );
}

export default CNav;