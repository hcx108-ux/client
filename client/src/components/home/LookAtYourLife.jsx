import React from 'react';
import lookAtLifeImg from '../../assets/look_at_your_life_img_0.png';
import './LookAtYourLife.css';

export default function LookAtYourLife() {
  return (
    <section className="look-at-life-section" id="look-at-your-life">
      <div className="look-at-life-container">
        <img 
          src={lookAtLifeImg} 
          alt="A Look at Your Life, Mind, Body and Soul" 
          className="look-at-life-svg" 
          loading="lazy" 
        />
      </div>
    </section>
  );
}