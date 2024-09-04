import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import SvgAnimation from './SvgAnimation';
function Hero() {
  
  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-24 md:mt-32 lg:mt-40 xl:mt-24">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-white text-3xl md:text-5xl lg:text-6xl font-roboto font-bold uppercase text-center mb-10"
      >
        Transforming Ideas into Innovative Software
        <span className="text-purple-700"> Across All Platforms</span>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        className="text-white text-center px-7 font-normal text-lg md:text-xl lg:text-2xl leading-relaxed mb-6"
      >
        Our development doesn't stop until our <span className="text-purple-700">clients are completely satisfied</span>.
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
        className="flex items-center justify-center mt-6 space-x-4"
      >
        <button className="bg-purple-700 rounded-full py-2 px-8 text-white border-2 border-white hover:border-purple-400 hover:bg-black hover:text-white-300 transition-all ease-linear duration-200 shadow-lg tracking-wider">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </button>

        <button className="bg-transparent rounded-full py-2 px-8 text-white border-2 border-purple-400 hover:border-white hover:bg-purple-700 hover:text-white transition-all ease-linear duration-200 shadow-lg tracking-wider">
          <Link to="/eleven">Eleven</Link>
        </button>
      </motion.div>
      
      {/* SVG Animation */}
      <div className="svg-animation-container ">
          <div className="svg-element svg-animation">
            <SvgAnimation />
          </div>
        </div>
    </div>
  );
}

export default Hero;
