import React from 'react';
import './JourneyBanner.css';
import journeySvg from '../../assets/journey_text.svg';
import journeyMobileSvg from '../../assets/journey_text_mobile.svg';
import AnimatedSection from '../common/AnimatedSection';

const JourneyBanner = () => {
  return (
    <section className="journey-banner-section">
      <AnimatedSection delay={0.1} className="journey-banner-anim">
        <div className="journey-banner-container">
          <picture className="journey-banner-picture">
            <source media="(max-width: 768px)" srcSet={journeyMobileSvg} />
            <img 
              src={journeySvg} 
              alt="One question can Be The Beginning of a much deeper understanding" 
              className="journey-banner-svg"
            />
          </picture>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default JourneyBanner;

