import React, { useState } from 'react';
import Logo, { LogoEmblem } from '../common/Logo';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo - Responsive */}
        <a href="/" className="navbar-brand" aria-label="Akashvani Home">
          <span className="brand-desktop">
            <Logo />
          </span>
          <span className="brand-mobile">
            <LogoEmblem width={46} height={42} />
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links">
          <a href="#start-where" className="nav-link">Start Here</a>
          <a href="#services-process" className="nav-link">How it Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">Support</a>
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="navbar-actions">
          <a href="#login" className="btn-login">Login</a>
          <a href="#signup" className="btn-signup">
            Sign Up <span className="arrow">→</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="hamburger-svg">
            <line x1="1" y1="3" x2="31" y2="3" stroke="#031633" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="1" y1="17" x2="31" y2="17" stroke="#031633" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Mobile Navigation Drawer / Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-drawer">
            {/* Top Bar with Logo & Close Icon */}
            <div className="mobile-menu-top">
              <span className="mobile-menu-brand">
                <LogoEmblem width={44} height={40} />
              </span>
              <button 
                type="button" 
                className="mobile-menu-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#031633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Menu Items with separator lines */}
            <nav className="mobile-menu-links">
              <a href="#start-where" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Start Here
              </a>
              <a href="#services-process" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                How it Works
              </a>
              <a href="#pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#faq" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Support
              </a>
            </nav>

            {/* Bottom Login & Sign Up Actions */}
            <div className="mobile-menu-actions">
              <a href="#login" className="btn-mobile-login" onClick={() => setMobileMenuOpen(false)}>
                Login
              </a>
              <a href="#signup" className="btn-mobile-signup" onClick={() => setMobileMenuOpen(false)}>
                Sign Up <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
