import React, { useEffect, useState, useRef } from 'react';
import './JourneySteps.css';
import journeyStepsImg from '../../assets/journey_steps_full.svg';

export default function JourneySteps() {
  const [svgContent, setSvgContent] = useState('');
  const containerRef = useRef(null);

  // Fetch the raw SVG so we can manipulate its inner paths
  useEffect(() => {
    fetch(journeyStepsImg)
      .then(res => res.text())
      .then(text => setSvgContent(text));
  }, []);

  // Set up the winding line drawing animation
  useEffect(() => {
    if (!svgContent || !containerRef.current) return;

    const svgEl = containerRef.current.querySelector('svg');
    if (!svgEl) return;

    // Find the main winding line path
    const windingLine = svgEl.querySelector('path[stroke="#BD5B3B"][stroke-width="2"]');

    let handleScroll;

    if (windingLine) {
      windingLine.classList.add('winding-line');

      try {
        const length = windingLine.getTotalLength();
        windingLine.style.strokeDasharray = length;
        windingLine.style.strokeDashoffset = length;

        handleScroll = () => {
          const rect = svgEl.getBoundingClientRect();
          // Calculate progress from when the top of the SVG hits the bottom of the viewport
          const progress = (window.innerHeight - rect.top) / (rect.height);
          const clamped = Math.max(0, Math.min(1, progress));
          windingLine.style.strokeDashoffset = length - (length * clamped);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Run once on load to set initial state
        handleScroll();
      } catch (e) {
        // Fallback for browsers that might not have getTotalLength ready immediately
      }
    }

    return () => {
      if (handleScroll) window.removeEventListener('scroll', handleScroll);
    };
  }, [svgContent]);

  // Set up intersection observers to fade in elements as they scroll into view
  useEffect(() => {
    if (!svgContent || !containerRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after it appears so it doesn't fade out and in again
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -15% 0px', // Trigger slightly before the item reaches the bottom edge
      threshold: 0
    });

    const items = containerRef.current.querySelectorAll('svg path, svg circle, svg text, svg rect');
    items.forEach(el => {
      const fill = el.getAttribute('fill');
      const stroke = el.getAttribute('stroke');

      // Skip the beige background dome
      if (fill === '#F5F0EA') return;
      // Skip the main winding line
      if (stroke === '#BD5B3B') return;

      // Apply the fade-in class and start observing
      el.classList.add('fade-in-item');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [svgContent]);

  return (
    <section className="journey-steps-section" ref={containerRef}>
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
    </section>
  );
}
