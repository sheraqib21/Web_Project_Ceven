import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import Eleven from './components/Eleven/Eleven';
import Ceven from './components/Ceven/Ceven';
import NotFound from './components/NotFound';
// import SvgAnimation from './components/Ceven/SvgAnimation'; // Add this import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Ceven />} />
          <Route path="/eleven" element={<Eleven />} />
          {/* <Route path="/svg-animation" element={<SvgAnimation />} /> Add this route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  </React.StrictMode>
);
