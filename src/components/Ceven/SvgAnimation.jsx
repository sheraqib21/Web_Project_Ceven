import React, { useEffect } from 'react';
import './SvgAnimation.css';

const SvgAnimation = () => {
  useEffect(() => {
    // Ensure GSAP and ScrollTrigger are available globally
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const svgPaths = gsap.utils.toArray('#firstI, #secondI');
    
    gsap.fromTo(svgPaths, 
      { strokeDasharray: 200, strokeDashoffset: 200 }, 
      {
        strokeDashoffset: 0,
        ease: "power1.inOut", // Adding easing for smooth animation
        duration: 1, // Adjust duration for faster animation
        scrollTrigger: {
          trigger: '#root',
          start: 'top top',
          end: '+=100%',
          scrub: 0.5, // Adjust scrub for smoothness
          markers: true
        },
      }
    );
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(206, 75%, 49%)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(331, 90%, 56%)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <g transform="translate(140, 40)">
        {/* First "I" */}
        <path
          id="firstI"
          d="M0 0 L0 120 M0 0 L40 0 L40 120 L0 120"
          stroke="url(#lineGradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset="200"
        />
        {/* Second "I" */}
        <path
          id="secondI"
          d="M80 0 L80 120 M80 0 L120 0 L120 120 L80 120"
          stroke="url(#lineGradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset="200"
        />
      </g>
    </svg>
  );
};

export default SvgAnimation;
