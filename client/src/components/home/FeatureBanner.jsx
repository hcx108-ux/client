import React from 'react';
import feature_banner_visual_svgAsset from '../../assets/feature_banner_visual.svg';
import feature_banner_visual_mobile_svgAsset from '../../assets/feature_banner_visual_mobile.svg';
import './FeatureBanner.css';

const FeatureBanner = () => {
  return (
    <section className="feature-banner-section">
      <div className="feature-banner-container">
        <picture className="feature-banner-picture">
          <source media="(max-width: 768px)" srcSet={feature_banner_visual_mobile_svgAsset} />
          <img 
            src={feature_banner_visual_svgAsset} 
            alt="100% Private, Curated Experts, Holistic Guidance, For All" 
            className="feature-banner-svg" 
            loading="lazy" 
          />
        </picture>
      </div>
    </section>
  );
};

export default FeatureBanner;
