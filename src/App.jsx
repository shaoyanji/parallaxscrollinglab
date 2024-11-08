import React, { useState, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css';
import Navbar from './Navbar.jsx';
import ParallaxContent from './Parrallax.jsx';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="App">
      <ParallaxProvider>
        {showNavbar && <Navbar />}
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <ParallaxContent />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default App;
