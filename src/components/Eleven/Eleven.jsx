// src/components/Eleven/Eleven.jsx
import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Mockup from './Mockup';
import Teams from './Teams';
import Footer from './Footer';
import Sponsors from './Sponsors';
import ParallaxSection from './parallexsection';
// import './Eleven.css';

function Eleven() {
  return (
    <>
      <div className="fixed inset-0 -z-10 min-h-full w-full bg-slate-300  bg-[size:6rem_4rem]"></div>      
      <Nav />
      <Hero />
  
      <Mockup />
      
      <Teams />
      
      
      <Sponsors />
      <Footer />
    </>
  );
}

export default Eleven;
