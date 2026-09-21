import React from 'react';
import mindBodySoulHeaderSvg from '../../assets/mind_body_soul_header.svg';
import threeCardsSectionSvg from '../../assets/three_cards_section.svg';
import './MindBodySoul.css';

const MindBodySoul = () => {
  return (
    <section className="mind-body-soul-section" id="wellbeing">
      <div className="mind-body-soul-container">
        {/* Section Header */}
        <div className="mind-body-soul-header-wrapper">
          <img
            src={mindBodySoulHeaderSvg}
            alt="Explore Your Wellbeing As a Whole"
            className="mind-body-soul-header-svg"
          />
        </div>

        {/* Section Cards SVG */}
        <div className="mind-body-soul-content-wrapper">
          <img
            src={threeCardsSectionSvg}
            alt="Mind Body Soul Cards Section"
            className="mind-body-soul-svg"
          />
        </div>
      </div>
    </section>
  );
};

export default MindBodySoul;
