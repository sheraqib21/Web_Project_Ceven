// src/components/Eleven/ParallaxSection.jsx
import React from 'react';
import './parallax.css';  // Ensure this path is correct

const ParallaxSection = ({ backgroundImage, heading, text }) => {
  return (
    <div className="parallax-container">
      <div 
        className="parallax-background" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="parallax-content">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ParallaxSection;
