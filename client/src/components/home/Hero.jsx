import React from 'react';
import ArchIllustration from './ArchIllustration';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Central Arch Doorway Illustration with Photo and Leaves */}
        <div className="hero-illustration-wrapper">
          <ArchIllustration className="hero-arch-svg" />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line-sans">A MORE CONSCIOUS WAY</span>
            <span className="title-line-serif">To Navigate Life And Relationships</span>
          </h1>

          <p className="hero-subtitle">
            A PRIVATE SPACE FOR GUIDANCE, WISDOM AND DEEPER PERSPECTIVE.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a href="#get-started" className="btn-primary-cta">
              Get to Know Yourself
            </a>
            <a href="#explore" className="btn-secondary-cta">
              Explore Akashvani <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
