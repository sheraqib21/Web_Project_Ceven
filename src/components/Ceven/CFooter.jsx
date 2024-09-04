import React from 'react';
import './CFooter.css'; // Make sure to create and style this CSS file

const CFooter = () => {
  return (
    <footer className='footer footer-bottom'>
      
      <div className='footer-container'>
        <div className='footer-section address-section'>
          <h2 className='section-heading'>Our Address</h2>
          <div className='section-content'>
            Siber Koza, NASTP Alpha,<br />
            Old Airport Rd, Old Chaklala Cantt,<br />
            Rawalpindi, Pakistan
          </div>
        </div>

        <div className='footer-section contact-section'>
          <h2 className='section-heading'>Our Contact</h2>
          <div className='section-content'>
            <a href="tel:+923280565583" className='contact-link'>+92-3280565583</a>
          </div>
          <div className='section-content'>
            <a href="mailto:eleven@ceventech.com" className='contact-link'>eleven@ceventech.com</a>
          </div>
        </div>
      </div>
      
      
        <div className='footer-text'>
          &copy; {new Date().getFullYear()} Ceven. All rights reserved.
        </div>
      
    </footer>
  );
};

export default CFooter;
