import React from 'react';
import './OffersSection.css';
import servicesProcessVisual from '../../assets/services_process_visual.svg';
import mobileOffersBg from '../../assets/offers_mobile_bg.svg';
import AnimatedSection from '../common/AnimatedSection';

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="offers-container">
        {/* Desktop Wavy Line & Nodes (Complete Figma Asset) */}
        <AnimatedSection className="offers-desktop-wrapper">
          <img
            src={servicesProcessVisual}
            alt="What Akashvani Offers - Journey Steps"
            className="offers-desktop-img"
          />
        </AnimatedSection>

        {/* Mobile HTML Layout (Responsive) */}
        <div className="offers-mobile-layout">
          <img src={mobileOffersBg} className="offers-mobile-bg-img" alt="Background graphic" />

          <div className="offers-mobile-main-header">
            <h2 className="offers-mobile-title">What Akashvani<br />Offers</h2>
            <p className="offers-mobile-subtitle">Start with what's on your mind.</p>
          </div>

          {/* Node 01 */}
          <AnimatedSection delay={0.1} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <div className="offers-mobile-node-num" style={{ top: '19.4%', pointerEvents: 'auto' }}>01</div>
            <div className="offers-mobile-node-text" style={{ top: '27.7%', pointerEvents: 'auto' }}>
              <h3 className="mobile-node-title">Tell Us</h3>
              <p className="mobile-node-desc">Share what you're navigating.</p>
            </div>
          </AnimatedSection>

          {/* Node 02 */}
          <AnimatedSection delay={0.2} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <div className="offers-mobile-node-num" style={{ top: '37.9%', pointerEvents: 'auto' }}>02</div>
            <div className="offers-mobile-node-text" style={{ top: '46.2%', pointerEvents: 'auto' }}>
              <h3 className="mobile-node-title">Understand</h3>
              <p className="mobile-node-desc">Explore your situation through your story<br />and formulate your personal chart</p>
            </div>
          </AnimatedSection>

          {/* Node 04 (Yes, 04 is third in mobile layout) */}
          <AnimatedSection delay={0.3} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <div className="offers-mobile-node-num" style={{ top: '58.38%', pointerEvents: 'auto' }}>04</div>
            <div className="offers-mobile-node-text" style={{ top: '66.8%', pointerEvents: 'auto' }}>
              <h3 className="mobile-node-title">Go Deeper</h3>
              <p className="mobile-node-desc">Continue with guidance and practices when you need them.</p>
            </div>
          </AnimatedSection>

          {/* Node 03 (Yes, 03 is fourth in mobile layout) */}
          <AnimatedSection delay={0.4} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <div className="offers-mobile-node-num" style={{ top: '78.87%', pointerEvents: 'auto' }}>03</div>
            <div className="offers-mobile-node-text" style={{ top: '87.5%', pointerEvents: 'auto' }}>
              <h3 className="mobile-node-title">Connect</h3>
              <p className="mobile-node-desc">Meet an expert suited to what you're looking for.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
