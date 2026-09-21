import React from 'react';
import './ThereIsAlways.css';
import thereIsAlwaysSvg from '../../assets/there_is_always.svg?raw';

export default function ThereIsAlways() {
  return (
    <section 
      className="there-is-always-section"
      dangerouslySetInnerHTML={{ __html: thereIsAlwaysSvg }}
    />
  );
}
