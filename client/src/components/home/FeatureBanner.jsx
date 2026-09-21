import feature_banner_visual_svgAsset from '../../assets/feature_banner_visual.svg';
import React from 'react';
import './FeatureBanner.css';

const FeatureBanner = () => {
  return (
    <section className="feature-banner-section">
      <div className="feature-banner-container">
        <img src={feature_banner_visual_svgAsset} alt="Visual Graphic" className="feature-banner-svg" loading="lazy" />

      </div>
    </section>
  );
};

export default FeatureBanner;
