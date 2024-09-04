import React from 'react';
import CNav from './CNav';
import CHero from './CHero';
import CApproach from './CApproach';
import Services from './Services';
import CTeam from './CTeam';
import CEleven from './CEleven';
import CFooter from './CFooter';
// import './ceven.css'; // Import CSS for ceven page

function Ceven() {
  return (
    <>  
      <div className='min-h-screen bg-black'>
        <CNav/>
        <CHero/>
        <CApproach/>
        <Services/>
        <CTeam/>
        <CEleven/>
        <CFooter/>
      </div>
    </>
  );
}

export default Ceven;
