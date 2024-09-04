import React, { useEffect, useRef } from 'react';
import './Slider.css';

// Import images directly from the assets folder

import Aqib from '../../assets/teamsImages/Aqib.png';
import Arfat from '../../assets/teamsImages/Arfat.png';
import hammad from '../../assets/teamsImages/hammad.png';
import nimra from '../../assets/teamsImages/nimra.png';
import Haseeb from '../../assets/teamsImages/Haseeb.png';
import Hassan from '../../assets/teamsImages/Hassan.png';
import Jihad from '../../assets/teamsImages/Jihad.png';
import malaika from '../../assets/teamsImages/malaika.png';
import AbdulMoiz from '../../assets/teamsImages/AbdulMoiz.png';


const images = [nimra,Aqib, Arfat, hammad, Haseeb, Hassan, Jihad, malaika,AbdulMoiz ];

const Slider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = containerRef.current.offsetTop;

      const images = containerRef.current.querySelectorAll('.image-custom');
      images.forEach((image, index) => {
        const imageOffset = index * 200; // Adjust spacing between images if needed
        const imagePosition = containerTop + imageOffset;
        const scrollEffect = scrollTop - imagePosition;

        if (scrollEffect > 0) {
          image.style.transform = `translateY(${Math.min(scrollEffect, 500)}px)`; // Limit effect
        } else {
          image.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="slider-container-custom">
       <h1 className="section-title">OUR</h1>
      {images.map((image, index) => (
        <div key={index} className="image-container-custom">
          <img src={image} alt={`Slide ${index}`} className="image-custom" />
        </div>
      ))}
    </div>
  );
};

export default Slider;
