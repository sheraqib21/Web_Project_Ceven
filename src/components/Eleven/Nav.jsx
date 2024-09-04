import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Nav.css'; // Ensure this line is included

function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const controlNavbar = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        setLastScrollY(currentScrollY);
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
                <div className='text-2xl md:text-3xl lg:text-4xl font-roboto font-bold text-blue-500'>
                    Eleven
                </div>
                
                {/* Nav Links */}
                <div className='flex space-x-4 items-center'>
                    <ScrollLink to='teams' smooth={true} duration={500} className="hidden text-black text-xl transition-colors duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:text-blue-500 hover:-translate-y-0.5 transition-transform duration-150 ease-linear nav-item">
                        Teams
                    </ScrollLink>
                    <ScrollLink to='partners' smooth={true} duration={500} className="hidden text-black text-xl transition-colors duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:text-blue-500 hover:-translate-y-0.5 transition-transform duration-150 ease-linear nav-item">
                        Partners
                    </ScrollLink>
                    <ScrollLink to='contact' smooth={true} duration={500} className="hidden text-black text-xl transition-colors duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:text-blue-500 hover:-translate-y-0.5 transition-transform duration-150 ease-linear nav-item">
                        Contact Us
                    </ScrollLink>
                    <div className="text-xl border-2 border-blue-500 px-5 py-2 hover:bg-blue-500 border-blue-500 hover:text-white rounded-3xl text-blue-500 transition-all duration-150 ease-linear font-semibold lg:flex hover:cursor-pointer hover:-translate-y-0.5 items-center nav-item">
                        <Link to="/">Ceven</Link>
                    </div>
                    <div className="lg:hidden justify-center items-center" onClick={toggleMobileMenu}>
                        <svg className='text-2xl font-bold' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </div>
                </div>

                {/* Animated Shapes */}
                <div className="shape shape2"></div>
                <div className="shape shape1"></div>
                <div className="shape shape3"></div>
                <div className="shape shape4"></div>
            </div>

            {/* Full-Screen Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-20 bg-white flex flex-col items-center justify-center space-y-4">
                    <div className="absolute top-6 right-6 p-2 text-purple-700 border-2 border-purple-700 rounded-full cursor-pointer" onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <ScrollLink to='contact' smooth={true} duration={500} className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-purple-700" onClick={toggleMobileMenu}>
                        Contact Us
                    </ScrollLink>
                    <div className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-purple-700" onClick={toggleMobileMenu}>
                        Featured
                    </div>
                    <div className="text-xl transition-colors duration-150 ease-linear font-semibold hover:cursor-pointer hover:text-purple-700" onClick={toggleMobileMenu}>
                        Technologies
                    </div>
                </div>
            )}
        </>
    );
}

export default Nav;
