import React from 'react';
import './DistinctGuidance.css';
import distinctGuidanceSvg from '../../assets/distinct_guidance.svg';

export default function DistinctGuidance() {
  return (
    <section className="distinct-guidance-section">
      <img
        src={distinctGuidanceSvg}
        alt="Distinct Guidance"
        className="distinct-guidance-svg"
        loading="lazy"
      />
    </section>
  );
}
