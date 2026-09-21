import React from 'react';
import './JourneyBanner.css';
import journeySvg from '../../assets/journey_text.svg';

const JourneyBanner = () => {
  return (
    <section className="journey-banner-section">
      <div className="journey-banner-container">
        <img 
          src={journeySvg} 
          alt="One question can Be The Beginning of a much deeper understanding" 
          className="journey-banner-svg"
        />
      </div>
    </section>
  );
};

export default JourneyBanner;
