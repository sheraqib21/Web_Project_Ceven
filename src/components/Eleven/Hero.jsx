import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import './hero.css'
function Hero() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center space-y-6 md:space-y-8 mt-12 md:mt-20 lg:mt-24 xl:mt-28">
      <div className="text-4xl md:text-6xl lg:text-7xl font-roboto font-bold uppercase text-center animate-fadeIn">
        An App that helps you live life better
      </div>

      {/* Description */}
      <div className="text-center px-4 font-medium text-lg md:text-xl lg:text-2xl animate-slideUp">
        A pioneering startup based in Pakistan, recognized by{" "}
        <span className="text-blue-500 tracking-wider">Microsoft</span>,{" "}
        <span className="text-blue-500 tracking-wider">Siberkoza</span>, and{" "}
        <span className="text-blue-500 tracking-wider">NASTP</span> for our
        innovative software solutions.
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center space-x-4 space-y-0">
        <button className="bg-blue-500 rounded-full py-2 px-8 text-white border-2 border-white hover:border-blue-500 hover:bg-white hover:text-blue-500 transition-all ease-linear duration-200 shadow-lg tracking-wider animate-buttonHover">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </button>

        <button className="bg-white rounded-full py-2 px-8 text-blue-500 border-2 border-blue-500 hover:border-white hover:bg-blue-500 hover:text-white transition-all ease-linear duration-200 shadow-lg tracking-wider animate-buttonHover">
          <Link to="/">Ceven</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
