import React from 'react';
import './OffersSection.css';
import servicesProcessVisual from '../../assets/services_process_visual.svg';
import offersMobileVisual from '../../assets/offers_mobile_bg.svg';

const OffersSection = () => {
  return (
    <section className="offers-section">
      {/* Laptop / Desktop Visual (Hidden on mobile) */}
      <div className="offers-desktop-wrapper">
        <img
          src={servicesProcessVisual}
          alt="What Akashvani Offers - Desktop"
          className="offers-desktop-img"
        />
      </div>

      {/* Mobile Visual (Pure SVG, Hidden on desktop) */}
      <div className="offers-mobile-wrapper">
        <img
          src={offersMobileVisual}
          alt="What Akashvani Offers - Mobile"
          className="offers-mobile-img"
        />
      </div>
    </section>
  );
};

export default OffersSection;
