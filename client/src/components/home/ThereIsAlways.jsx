import React from 'react';
import './ThereIsAlways.css';
import thereIsAlwaysImg from '../../assets/there_is_always_img_0.png';

export default function ThereIsAlways() {
  const points = [
    'About yourself.',
    'About the people around you.',
    'About the patterns you carry.',
    "About the life you're creating."
  ];

  return (
    <section className="there-is-always-section" id="there-is-always">
      <div className="there-is-always-container">
        
        <div className="there-is-always-content">
          <h2 className="there-is-always-title">
            There is always more to<br />
            understand.
          </h2>

          <ul className="there-is-always-list">
            {points.map((point, index) => (
              <li key={index} className="there-is-always-item">
                <span className="there-is-always-dash">-</span>
                <span className="there-is-always-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="there-is-always-image-wrapper">
          <img 
            src={thereIsAlwaysImg} 
            alt="Two people having a meaningful conversation in a warm room" 
            className="there-is-always-image"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
