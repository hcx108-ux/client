import look_at_your_life_visual_svgAsset from '../../assets/look_at_your_life_visual.svg';
import look_at_your_life_bg_pngImg from '../../assets/look_at_your_life_bg.png';
﻿import React from 'react';
import './LookAtYourLife.css';

export default function LookAtYourLife() {
  return (
    <section className="look-at-life-section" id="look-at-your-life">
      <div className="look-at-life-container">
        <img src={look_at_your_life_visual_svgAsset} alt="Visual Graphic" className="look-at-life-svg" loading="lazy" />
      </div>
    </section>
  );
}