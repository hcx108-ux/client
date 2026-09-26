import React, { useRef, useState } from 'react';
import './DistinctGuidance.css';
import distinctGuidanceSvg from '../../assets/distinct_guidance.svg';
import distinctGuidanceMobileSvg from '../../assets/distinct_guidance_mobile.svg';

export default function DistinctGuidance() {
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
      }
    }
  };

  const tableData = [
    {
      matter: 'Starts with your actual relationship question',
      general: 'Sometimes',
      typical: 'Limited',
      akashvani: 'Yes'
    },

    {
      matter: 'Uses relevant relationship expertise',
      general: 'Inconsistent',
      typical: 'Inconsistent',
      akashvani: 'Yes'
    },
    {
      matter: 'Offers a Vedic perspective',
      general: 'No',
      typical: 'No',
      akashvani: 'Optional'
    },
    {
      matter: 'Provides a written next step',
      general: 'Rarely',
      typical: 'Rarely',
      akashvani: 'Yes'
    },
    {
      matter: 'Keeps the final decision with you',
      general: 'Varies',
      typical: 'Varies',
      akashvani: 'Varies'
    }
  ];

  return (
    <section className="distinct-guidance-section">
      {/* Desktop version */}
      <img
        src={distinctGuidanceSvg}
        alt="Distinct Guidance"
        className="distinct-guidance-svg desktop-only"
        loading="lazy"
      />

      {/* Mobile version */}
      <div className="distinct-guidance-mobile-container mobile-only">
        <div className="distinct-guidance-header-wrap">
          <img
            src={distinctGuidanceMobileSvg}
            alt="Distinct Guidance Mobile Header"
            className="distinct-guidance-mobile-header"
            loading="lazy"
          />
        </div>

        {/* Horizontally Scrollable Comparison Table */}
        <div
          className="what-matters-scroll-wrapper"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          <div className="what-matters-card">
            <div className="what-matters-row what-matters-header-row">
              <div className="what-matters-col col-matters">WHAT MATTERS</div>
              <div className="what-matters-col col-general">GENERAL ONLINE ADVICE</div>
              <div className="what-matters-col col-typical">TYPICAL ASTROLOGY APP</div>
              <div className="what-matters-col col-akashvani">AKASHVANI</div>
            </div>

            {tableData.map((row, idx) => (
              <div key={idx} className="what-matters-row">
                <div className="what-matters-col col-matters">{row.matter}</div>
                <div className="what-matters-col col-general">{row.general}</div>
                <div className="what-matters-col col-typical">{row.typical}</div>
                <div className="what-matters-col col-akashvani">{row.akashvani}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe Hint & Scroll Progress Bar */}
        <div className="distinct-swipe-hint-container">
          <span className="distinct-swipe-text">Swipe the table sideways to compare &rarr;</span>
          <div className="distinct-progress-track">
            <div
              className="distinct-progress-thumb"
              style={{
                left: `${scrollPercent * 0.7}%`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}



