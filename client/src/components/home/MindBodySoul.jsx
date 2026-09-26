import React from 'react';
import mindBodySoulHeaderSvg from '../../assets/mind_body_soul_header.svg';
import mindBodySoulHeaderMobileSvg from '../../assets/mind_body_soul_header_mobile.svg';
import threeCardsSectionSvg from '../../assets/three_cards_section.svg';
import mindCardMobileSvg from '../../assets/mind_card_mobile.svg';
import bodyCardMobileSvg from '../../assets/body_card_mobile.svg';
import soulCardMobileSvg from '../../assets/soul_card_mobile.svg';
import AnimatedSection from '../common/AnimatedSection';
import './MindBodySoul.css';

const MindBodySoul = () => {
  return (
    <section className="mind-body-soul-section" id="wellbeing">
      <div className="mind-body-soul-container">
        {/* Section Header */}
        <AnimatedSection delay={0.1}>
          <div className="mind-body-soul-header-wrapper">
            <picture className="mind-body-soul-picture">
              <source media="(max-width: 768px)" srcSet={mindBodySoulHeaderMobileSvg} />
              <img
                src={mindBodySoulHeaderSvg}
                alt="Explore Your Wellbeing As a Whole"
                className="mind-body-soul-header-svg"
              />
            </picture>
          </div>
        </AnimatedSection>

        {/* Section Cards SVG */}
        <div className="mind-body-soul-desktop-cards">
          <AnimatedSection delay={0.25}>
            <div className="mind-body-soul-content-wrapper">
              <img
                src={threeCardsSectionSvg}
                alt="Mind Body Soul Cards Section"
                className="mind-body-soul-svg"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="mind-body-soul-mobile-cards">
          <AnimatedSection delay={0.2}>
            <img src={mindCardMobileSvg} alt="Mind Card" className="mind-body-soul-card-mobile-svg" />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <img src={soulCardMobileSvg} alt="Soul Card" className="mind-body-soul-card-mobile-svg" />
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <img src={bodyCardMobileSvg} alt="Body Card" className="mind-body-soul-card-mobile-svg" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MindBodySoul;



