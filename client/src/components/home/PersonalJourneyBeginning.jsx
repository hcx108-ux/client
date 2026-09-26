import React, { useState } from 'react';
import personalJourneyImg from '../../assets/personal_journey_beginning_img_0.png';
import './PersonalJourneyBeginning.css';

export default function PersonalJourneyBeginning() {
  const [showJourneyModal, setShowJourneyModal] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState('life-patterns');
  const [journeyStep, setJourneyStep] = useState(1);

  const focusOptions = [
    { id: 'life-patterns', title: 'Understanding Life Patterns & Cycles', desc: 'Explore astrological periods, tendencies, and timing for key decisions.' },
    { id: 'relationships', title: 'Relationship Dynamics & Connection', desc: 'Gain clarity on interpersonal bonds, compatibility, and conflict resolution.' },
    { id: 'purpose', title: 'Life Purpose, Vocation & Dharma', desc: 'Align your career and daily work with your deeper innate gifts.' },
    { id: 'wellbeing', title: 'Mind-Body-Soul Harmony', desc: 'Holistic practices to restore emotional balance and somatic groundedness.' }
  ];

  const handleClose = () => {
    setShowJourneyModal(false);
    setJourneyStep(1);
  };

  return (
    <section className="personal-journey-section" id="personal-journey">
      <div className="personal-journey-container">
        
        {/* Left Column: Real Selectable Text & Clickable Button */}
        <div className="personal-journey-content-col">
          <div className="personal-journey-content-inner">
            <h2 className="personal-journey-heading">
              A personal journey,<br />
              beginning<br />
              with a simple question.
            </h2>

            <button 
              type="button" 
              className="personal-journey-cta-btn"
              onClick={() => setShowJourneyModal(true)}
              aria-label="Begin My Journey"
            >
              Begin My Journey
            </button>
          </div>
        </div>

        {/* Right Column: Original Balcony / Ocean Photo */}
        <div className="personal-journey-photo-col">
          <img 
            src={personalJourneyImg} 
            alt="A personal journey beginning with a simple question" 
            className="personal-journey-photo-svg" 
            loading="lazy" 
          />
        </div>

      </div>

      {/* Interactive Personal Journey Questionnaire Modal */}
      {showJourneyModal && (
        <div className="journey-modal-backdrop" onClick={handleClose}>
          <div className="journey-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="journey-modal-close" 
              onClick={handleClose}
              aria-label="Close modal"
            >
              ✕
            </button>

            {journeyStep === 1 && (
              <div className="journey-modal-body">
                <span className="journey-modal-badge">STEP 1 OF 2: YOUR INQUIRY</span>
                <h3 className="journey-modal-title">What simple question brings you here?</h3>
                <p className="journey-modal-subtitle">
                  Every transformative journey starts with an honest inquiry. Choose the focus area that resonates most with your current moment:
                </p>

                <div className="journey-options-list">
                  {focusOptions.map((opt) => (
                    <div 
                      key={opt.id}
                      className={"journey-option-card " + (selectedFocus === opt.id ? "active" : "")}
                      onClick={() => setSelectedFocus(opt.id)}
                    >
                      <div className="journey-option-radio">
                        {selectedFocus === opt.id && <span className="radio-dot"></span>}
                      </div>
                      <div className="journey-option-text">
                        <h4 className="journey-option-title">{opt.title}</h4>
                        <p className="journey-option-desc">{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="journey-modal-actions">
                  <button 
                    type="button" 
                    className="journey-modal-next-btn"
                    onClick={() => setJourneyStep(2)}
                  >
                    Continue to Recommendations ➔
                  </button>
                </div>
              </div>
            )}

            {journeyStep === 2 && (
              <div className="journey-modal-body">
                <span className="journey-modal-badge">STEP 2 OF 2: RECOMMENDED PATH</span>
                <h3 className="journey-modal-title">Your Tailored Starting Point</h3>
                <p className="journey-modal-subtitle">
                  Based on your focus on <strong>{focusOptions.find(f => f.id === selectedFocus)?.title}</strong>, we recommend beginning with:
                </p>

                <div className="journey-recommendation-box">
                  <div className="recommendation-badge">RECOMMENDED APPROACH</div>
                  <h4 className="recommendation-title">
                    {selectedFocus === 'life-patterns' && '1-on-1 Vedic Astrological Consultation'}
                    {selectedFocus === 'relationships' && 'Relational Compatibility & Dynamics Exploration'}
                    {selectedFocus === 'purpose' && 'Dharma & Career Timing Session'}
                    {selectedFocus === 'wellbeing' && 'Integrated Mind-Body-Soul Consultation'}
                  </h4>
                  <p className="recommendation-desc">
                    Connect with an experienced Akashvani practitioner who specializes in this domain to review your chart, patterns, and current timing.
                  </p>
                </div>

                <div className="journey-modal-footer">
                  <button 
                    type="button" 
                    className="journey-modal-primary-cta"
                    onClick={() => {
                      handleClose();
                      const meetSection = document.getElementById('meet-the-team');
                      if (meetSection) {
                        meetSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Meet Matched Practitioners ➔
                  </button>
                  <button 
                    type="button" 
                    className="journey-modal-secondary-btn"
                    onClick={() => setJourneyStep(1)}
                  >
                    Back
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}