import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CEleven.css'
// Generate some random text options
const textOptionsLTR = [
  "Discover the future with Eleven.",
  "Pioneering innovation in technology.",
  "Elevate your digital experience.",
  "Transforming tech with cutting-edge solutions.",
  "Empowering you with smart, responsive technology.",
  "Crafting the ultimate digital companion.",
  "Simplify your life with our innovative app.",
  "Where technology meets seamless integration.",
  "Your gateway to a smarter, more intuitive future.",
  "Revolutionizing digital experiences, one app at a time."
];

const textOptionsRTL = [
  "Revolutionizing digital experiences, one app at a time.",
  "Your gateway to a smarter, more intuitive future.",
  "Where technology meets seamless integration.",
  "Simplify your life with our innovative app.",
  "Crafting the ultimate digital companion.",
  "Empowering you with smart, responsive technology.",
  "Transforming tech with cutting-edge solutions.",
  "Elevate your digital experience.",
  "Pioneering innovation in technology.",
  "Discover the future with Eleven."
];

function CEleven() {
  const [isVisible, setIsVisible] = useState(false);

  // Detect visibility for scroll-triggered animation
  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById('celeven-container').getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="celeven-container"
      className="relative w-full mx-auto p-4 border-t-2 text-purple-700 flex flex-col items-center justify-center pt-8 pb-14 md:pt-14 md:pb-20 lg:pt-20 lg:pb-28 bg-black overflow-hidden"
    >
      {/* Background flowing text - Left to Right */}
      {isVisible && (
        <>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {textOptionsLTR.map((text, index) => (
              <motion.div
                key={index}
                className="absolute text-gray-500 text-xl lg:text-2xl font-medium whitespace-nowrap"
                style={{
                  top: `${(index % 5) * 20}vh`, // Random start position vertically
                  left: `-${Math.random() * 100}vw`, // Random start position horizontally off-screen
                  opacity: 0.3 // Increased opacity for better visibility
                }}
                animate={{
                  x: [`-${Math.random() * 100}vw`, `100vw`], // Move from off-screen to right edge
                  y: [`${Math.random() * 20}vh`, `${Math.random() * 20}vh`], // Restricted vertical movement
                  transition: { duration: 20 + Math.random() * 20, repeat: Infinity, ease: 'linear' }
                }}
              >
                {text}
              </motion.div>
            ))}
          </div>

          {/* Background flowing text - Right to Left */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {textOptionsRTL.map((text, index) => (
              <motion.div
                key={index}
                className="absolute text-gray-500 text-xl lg:text-2xl font-medium whitespace-nowrap"
                style={{
                  top: `${(index % 5) * 20}vh`, // Random start position vertically
                  left: `calc(100vw + ${Math.random() * 100}vw)`, // Random start position horizontally off-screen
                  opacity: 0.3 // Increased opacity for better visibility
                }}
                animate={{
                  x: [`calc(100vw + ${Math.random() * 100}vw)`, `-${Math.random() * 100}vw`], // Move from off-screen to left edge
                  y: [`${Math.random() * 20}vh`, `${Math.random() * 20}vh`], // Restricted vertical movement
                  transition: { duration: 20 + Math.random() * 20, repeat: Infinity, ease: 'linear' }
                }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Foreground content */}
      <motion.div
        className="text-center text-2xl lg:text-3xl font-bold mb-2 text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Discover Our Flagship Product:
      </motion.div>
      <motion.div
        className="text-center text-5xl lg:text-5xl xl:text-7xl text-purple-700 font-extrabold mb-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Eleven
      </motion.div>
      <motion.div
        className="text-center text-lg lg:text-xl font-semibold mb-4 text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Revolutionizing technology in one powerful application.
      </motion.div>
      <Link
        to="/eleven"
        className="text-purple-700 hover:text-purple-900 flex items-center mt-4"
      >
        <motion.span
          className="mr-1"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          &rarr;
        </motion.span>
        Learn More
      </Link>
      
    </div>
    
  );
}

export default CEleven;
