import React, { useState } from 'react';
import Logo from '../common/Logo';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="/" className="navbar-brand" aria-label="Akashvani Home">
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#start-here" className="nav-link">Start Here</a>
          <a href="#how-it-works" className="nav-link">How it Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#support" className="nav-link">Support</a>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <a href="#login" className="btn-login">Login</a>
          <a href="#signup" className="btn-signup">
            Sign Up <span className="arrow">→</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
