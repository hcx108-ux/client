import services_process_visual_svgAsset from '../../assets/services_process_visual.svg';
import React, { useEffect, useRef, useState } from 'react';
import './ServicesProcess.css';

const ServicesProcess = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={`services-process-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="services-process-container">
        {/* Desktop View */}
        <div className="services-process-desktop">
          <img
            src={services_process_visual_svgAsset}
            alt="What Akashvani Offers Desktop"
            className="services-process-svg process-svg"
            loading="lazy"
          />
        </div>
        {/* Mobile View will be handled by OffersSection component instead */}
      </div>
    </section>
  );
};

export default ServicesProcess;