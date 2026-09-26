import React from 'react';
import ArchIllustration from './ArchIllustration';
import HeroTextVisual from './HeroTextVisual';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Central Arch Doorway Illustration with Photo and Leaves */}
        <div className="hero-illustration-wrapper">
          <ArchIllustration className="hero-arch-svg" />
        </div>

        {/* Desktop Hero Visual Graphic (Exact 1133px Figma SVG) */}
        <div className="hero-content hero-desktop-content">
          <HeroTextVisual className="hero-visual-graphic" />
        </div>

        {/* Mobile Hero Content (Exact Figma Mobile Layout) */}
        <div className="hero-mobile-content">
          <h1 className="hero-mobile-heading">
            <span className="hero-mobile-title">A More Conscious Way</span>
            <span className="hero-mobile-subtitle">To Navigate Life And Relationships</span>
          </h1>

          <p className="hero-mobile-desc">
            A Private Space For Guidance,<br />
            Wisdom And Deeper Perspective.
          </p>

          <div className="hero-mobile-cta-group">
            <a href="#get-to-know" className="hero-mobile-btn hero-btn-navy">
              Get to Know Yourself
            </a>
            <a href="#explore" className="hero-mobile-btn hero-btn-terracotta">
              <span>Explore Akashvani</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-btn-arrow">
                <path d="M1 7H16M11 2L16 7L11 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

