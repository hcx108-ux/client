import React, { useEffect, useState, useRef } from 'react';
import './JourneySteps.css';
import journeyStepsImg from '../../assets/journey_steps_full.svg';
import AnimatedSection from '../common/AnimatedSection';

import journeyStepsMobileNew from '../../assets/journey_steps_mobile_new.svg';

export default function JourneySteps() {
  const [svgContent, setSvgContent] = useState('');
  const [scrollProgress, setScrollProgress] = useState(20);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const target = e.target;
    const maxScrollLeft = target.scrollWidth - target.clientWidth;
    if (maxScrollLeft > 0) {
      const progress = (target.scrollLeft / maxScrollLeft) * 100;
      setScrollProgress(20 + (progress * 0.8));
    }
  };

  // Fetch the raw SVG so we can manipulate its inner paths on desktop
  useEffect(() => {
    fetch(journeyStepsImg)
      .then(res => res.text())
      .then(text => setSvgContent(text));
  }, []);

  // Set up the winding line drawing animation & ivory dome scroll animation on desktop
  useEffect(() => {
    if (!svgContent || !containerRef.current) return;
    if (window.innerWidth <= 768) return;

    const svgEl = containerRef.current.querySelector('.journey-steps-desktop-wrapper svg');
    if (!svgEl) return;

    // 1. Find the main winding line path
    const windingLine = svgEl.querySelector('path[stroke="#BD5B3B"][stroke-width="2"]');

    // 2. Find the ivory curved dome background
    const ivoryDome = svgEl.querySelector('path[fill="#F5F0EA"]');

    // 3. Find the top heading paths (dark & terracotta lines)
    const topHeadingDark = svgEl.querySelector('path[d^="M434.355"]');
    const topHeadingTerra = svgEl.querySelector('path[d^="M610.773"]');

    let handleScroll;

    try {
      let windingLength = 0;
      if (windingLine) {
        windingLine.classList.add('winding-line');
        windingLength = windingLine.getTotalLength();
        windingLine.style.strokeDasharray = windingLength;
        windingLine.style.strokeDashoffset = windingLength;
      }

      if (ivoryDome) {
        ivoryDome.style.willChange = 'd, transform';
      }

      if (topHeadingDark) {
        topHeadingDark.style.willChange = 'transform, opacity';
        topHeadingDark.style.transition = 'transform 0.15s ease-out, opacity 0.15s ease-out';
      }

      if (topHeadingTerra) {
        topHeadingTerra.style.willChange = 'transform, opacity';
        topHeadingTerra.style.transition = 'transform 0.15s ease-out, opacity 0.15s ease-out';
      }

      handleScroll = () => {
        const rect = svgEl.getBoundingClientRect();
        const vh = window.innerHeight;

        const archProgress = Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.85)));

        if (ivoryDome) {
          const p = archProgress;
          const curveY = 220 * (1 - p);
          const sideY = 400 * p + 480 * (1 - p);
          const cpY1 = 179.086 * p + 360 * (1 - p);
          const cpY2 = curveY;

          ivoryDome.setAttribute(
            'd',
            `M0 ${sideY.toFixed(2)} C0 ${cpY1.toFixed(2)} 179.086 ${cpY2.toFixed(2)} 400 ${curveY.toFixed(2)} H1040 C1260.91 ${cpY2.toFixed(2)} 1440 ${cpY1.toFixed(2)} 1440 ${sideY.toFixed(2)} V2315 H0 V${sideY.toFixed(2)}Z`
          );
        }

        if (topHeadingDark) {
          const darkY = (1 - archProgress) * 50;
          const darkOpacity = Math.max(0, Math.min(1, (archProgress - 0.1) / 0.65));
          topHeadingDark.style.transform = `translateY(${darkY.toFixed(1)}px)`;
          topHeadingDark.style.opacity = darkOpacity.toFixed(2);
        }

        if (topHeadingTerra) {
          const terraY = (1 - archProgress) * 50;
          const terraOpacity = Math.max(0, Math.min(1, (archProgress - 0.2) / 0.65));
          topHeadingTerra.style.transform = `translateY(${terraY.toFixed(1)}px)`;
          topHeadingTerra.style.opacity = terraOpacity.toFixed(2);
        }

        if (windingLine && windingLength > 0) {
          const lineProgress = (vh - rect.top) / (rect.height);
          const clamped = Math.max(0, Math.min(1, lineProgress));
          windingLine.style.strokeDashoffset = windingLength - (windingLength * clamped);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    } catch (e) {
      // Fallback
    }

    return () => {
      if (handleScroll) window.removeEventListener('scroll', handleScroll);
    };
  }, [svgContent]);

  // Set up intersection observers on desktop
  useEffect(() => {
    if (!svgContent || !containerRef.current) return;
    if (window.innerWidth <= 768) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0
    });

    const items = containerRef.current.querySelectorAll('.journey-steps-desktop-wrapper svg path, .journey-steps-desktop-wrapper svg circle, .journey-steps-desktop-wrapper svg text, .journey-steps-desktop-wrapper svg rect');
    items.forEach(el => {
      const fill = el.getAttribute('fill');
      const stroke = el.getAttribute('stroke');
      const d = el.getAttribute('d') || '';

      if (fill === '#F5F0EA') return;
      if (stroke === '#BD5B3B' && el.getAttribute('stroke-width') === '2') return;
      if (d.startsWith('M434.355') || d.startsWith('M610.773')) return;

      el.classList.add('fade-in-item');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [svgContent]);

  return (
    <section className="journey-steps-section" ref={containerRef}>
      {/* Desktop Version */}
      <div className="journey-steps-desktop-wrapper">
        {svgContent ? (
          <div
            className="journey-steps-svg-wrapper"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <img
            src={journeyStepsImg}
            alt="Journey Steps"
            className="journey-steps-svg"
          />
        )}
      </div>

      {/* Mobile Version using Exact Provided SVG, sliced to keep header/footer fixed and cards scrollable */}
      <div className="journey-steps-mobile-wrapper" style={{ backgroundColor: '#F5F0EA' }}>
        <AnimatedSection delay={0.1}>
          
          {/* 1. Header (Fixed) */}
          <div style={{ width: '100%', height: '204px', overflow: 'hidden', position: 'relative' }}>
            <img 
              src={journeyStepsMobileNew} 
              alt="Journey Steps Header" 
              style={{ width: '600px', maxWidth: 'none', position: 'absolute', top: 0, left: 0 }}
            />
          </div>

          {/* 2. Cards (Scrollable) */}
          <div 
            className="journey-mobile-scroll-container" 
            onScroll={handleScroll}
            style={{ width: '100%', height: '250px', overflowX: 'auto', overflowY: 'hidden', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            <div style={{ position: 'relative', width: '1391px', height: '250px' }}>
              <img 
                src={journeyStepsMobileNew} 
                alt="Journey Steps Cards" 
                style={{ width: '600px', maxWidth: 'none', position: 'absolute', top: '-204px', left: 0 }}
              />
              
              {/* Card 3: When something has shifted */}
              <div style={{
                position: 'absolute',
                left: '566px',
                top: '0px',
                width: '251px',
                height: '228px',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '110px 16px 16px 16px',
                boxSizing: 'border-box',
                fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)',
                color: '#031633',
                textAlign: 'left',
                boxShadow: '0 4px 16px rgba(3, 22, 51, 0.04)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  width: '77px',
                  height: '77px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#E0C58E',
                  boxSizing: 'border-box'
                }}>
                  <img 
                    src={journeyStepsImg} 
                    alt="Icon" 
                    style={{ position: 'absolute', width: '652.24px', maxWidth: 'none', height: 'auto', left: '-408.1px', top: '-554.3px' }} 
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', border: '3.5px solid #F5F0EA', boxSizing: 'border-box', pointerEvents: 'none' }} />
                </div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: '500', letterSpacing: '0.05em', lineHeight: '1.4', textTransform: 'uppercase' }}>
                  When Something Has Shifted
                </h4>
                <p style={{ margin: 0, fontSize: '12px', fontWeight: '400', lineHeight: '1.6', opacity: 0.8 }}>
                  Conflict &middot; Betrayal &middot; Emotional distance &middot; Different futures &middot; Family tensions
                </p>
              </div>

              {/* Card 4: When you're at a turning point */}
              <div style={{
                position: 'absolute',
                left: '841px',
                top: '0px',
                width: '251px',
                height: '228px',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '110px 16px 16px 16px',
                boxSizing: 'border-box',
                fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)',
                color: '#031633',
                textAlign: 'left',
                boxShadow: '0 4px 16px rgba(3, 22, 51, 0.04)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  width: '77px',
                  height: '77px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#E0C58E',
                  boxSizing: 'border-box'
                }}>
                  <img 
                    src={journeyStepsImg} 
                    alt="Icon" 
                    style={{ position: 'absolute', width: '652.24px', maxWidth: 'none', height: 'auto', left: '-130.9px', top: '-683.8px' }} 
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', border: '3.5px solid #F5F0EA', boxSizing: 'border-box', pointerEvents: 'none' }} />
                </div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: '500', letterSpacing: '0.05em', lineHeight: '1.4', textTransform: 'uppercase' }}>
                  When You're At A Turning Point
                </h4>
                <p style={{ margin: 0, fontSize: '12px', fontWeight: '400', lineHeight: '1.6', opacity: 0.8 }}>
                  Reconciliation &middot; Separation &middot; Divorce &middot; Co-parenting &middot; Moving forward
                </p>
              </div>

              {/* Card 5: When you want to understand yourself */}
              <div style={{
                position: 'absolute',
                left: '1116px',
                top: '0px',
                width: '251px',
                height: '228px',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '110px 16px 16px 16px',
                boxSizing: 'border-box',
                fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)',
                color: '#031633',
                textAlign: 'left',
                boxShadow: '0 4px 16px rgba(3, 22, 51, 0.04)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  width: '77px',
                  height: '77px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#E0C58E',
                  boxSizing: 'border-box'
                }}>
                  <img 
                    src={journeyStepsImg} 
                    alt="Icon" 
                    style={{ position: 'absolute', width: '652.24px', maxWidth: 'none', height: 'auto', left: '-433.9px', top: '-843.2px' }} 
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', border: '3.5px solid #F5F0EA', boxSizing: 'border-box', pointerEvents: 'none' }} />
                </div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: '500', letterSpacing: '0.05em', lineHeight: '1.4', textTransform: 'uppercase' }}>
                  When You Want To Understand Yourself
                </h4>
                <p style={{ margin: 0, fontSize: '12px', fontWeight: '400', lineHeight: '1.6', opacity: 0.8 }}>
                  Attachment &middot; Patterns &middot; Boundaries &middot; Emotional needs &middot; Repeated relationship dynamic
                </p>
              </div>
            </div>
          </div>

          {/* 3. Footer (Fixed) */}
          <div style={{ width: '100%', height: '191px', overflow: 'hidden', position: 'relative' }}>
            <img 
              src={journeyStepsMobileNew} 
              alt="Journey Steps Footer" 
              style={{ width: '600px', maxWidth: 'none', position: 'absolute', top: '-454px', left: 0 }}
            />
            
            {/* Dynamic Progress Bar Overlay */}
            <div style={{ position: 'absolute', top: '5px', left: 0, width: '375px', height: '65px', backgroundColor: '#F5F0EA' }}>
              <div style={{ padding: '0 16px', color: '#BD5B3B', fontSize: '13px', fontWeight: '400', fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)', marginTop: '8px' }}>
                Swipe &rarr;
              </div>
              <div style={{ margin: '12px 16px 0 16px', height: '12px', backgroundColor: 'rgba(189, 91, 59, 0.15)', borderRadius: '6px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  height: '100%', 
                  width: `${scrollProgress}%`, 
                  backgroundColor: '#BD5B3B', 
                  borderRadius: '6px',
                  transition: 'width 0.1s ease-out'
                }} />
              </div>
            </div>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}
