import React, { useState, useEffect } from 'react';
import './App.css';

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="parallax-container">
        <div
          className="parallax-bg"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="parallax-content">
          <h1>Welcome to Parallax Scrolling</h1>
          <p>This is a simple parallax scrolling effect in React.</p>
        </div>
      </div>

      <section className="feature-section">
        <div className="feature-container">
          <h2>Features</h2>
          <div className="feature-item">
            <i className="fas fa-check-circle"></i>
            <p>Modern Design</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-check-circle"></i>
            <p>Responsive Layout</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-check-circle"></i>
            <p>Easy to Use</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <h2>About Us</h2>
          <p>We are a team of passionate developers creating awesome websites with React.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Parallax;
