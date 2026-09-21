import React from 'react';
import './ThereIsAlways.css';
import thereIsAlwaysSvg from '../../assets/there_is_always.svg';

export default function ThereIsAlways() {
  return (
    <section className="there-is-always-section">
      <img 
        src={thereIsAlwaysSvg} 
        alt="There is always a way forward" 
        className="there-is-always-svg" 
        loading="lazy" 
      />
    </section>
  );
}
