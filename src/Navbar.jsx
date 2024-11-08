import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#features" className="nav-link">Features</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About Us</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
