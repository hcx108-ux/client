import React from 'react';
import './DistinctGuidance.css';
import distinctGuidanceSvg from '../../assets/distinct_guidance.svg?raw';

export default function DistinctGuidance() {
  return (
    <section
      className="distinct-guidance-section"
      dangerouslySetInnerHTML={{ __html: distinctGuidanceSvg }}
    />
  );
}
