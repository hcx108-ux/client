import React, { useState } from 'react';
import lookAtLifeImg from '../../assets/look_at_your_life_img_0.png';
import { HumanIcon, VedicIcon, SpiritualIcon, HolisticIcon } from './LookAtYourLifeIcons';
import './LookAtYourLife.css';

const perspectivesDetail = {
  human: {
    id: 'human',
    title: 'Human',
    tagline: 'Your lived experience, emotions, relationships and choices.',
    fullDesc: 'The Human lens honors your subjective lived reality—how you feel, communicate, make choices, and navigate relationships in everyday life with empathy and emotional intelligence.',
    keyPoints: [
      'Emotional awareness and authentic self-expression',
      'Interpersonal relationship dynamics and healthy boundaries',
      'Practical decision-making grounded in personal values',
      'Navigating life transitions with resilience and clarity'
    ]
  },
  vedic: {
    id: 'vedic',
    title: 'Vedic',
    tagline: 'Ancient systems of knowledge that offer perspectives on',
    fullDesc: 'The Vedic lens draws upon millennia of cosmic wisdom—synthesizing Jyotish astrology, planetary archetype maps, karmic timing (Dashas), and natural rhythms to reveal hidden life patterns.',
    keyPoints: [
      'Birth chart synthesis as a map of tendencies, not fixed verdicts',
      'Planetary cycles, Dashas, and cosmic timing patterns',
      'Understanding karmic connections and synastry in relationships',
      'Remedial measures, mantras, and gemstones tailored to your chart'
    ]
  },
  spiritual: {
    id: 'spiritual',
    title: 'Spiritual',
    tagline: 'Practices and perspectives that invite reflection, inner connection and awareness.',
    fullDesc: 'The Spiritual lens invites deeper self-inquiry, mindfulness, and alignment with your higher Dharma—fostering stillness, inner connection, and transcendent clarity beyond surface reactions.',
    keyPoints: [
      'Self-inquiry and discovering life purpose (Dharma)',
      'Mindful contemplation and deepening conscious awareness',
      'Cultivating inner peace amidst external uncertainties',
      'Reconnecting with transcendent meaning and spiritual liberation'
    ]
  },
  holistic: {
    id: 'holistic',
    title: 'Holistic',
    tagline: 'Ways of caring for the relationship between mind, body and soul.',
    fullDesc: 'The Holistic lens integrates mind, body, and subtle energy systems—restoring equilibrium through breathwork, elemental balance, restorative rituals, and nervous system harmony.',
    keyPoints: [
      'Balancing somatic mind-body wellness',
      'Restorative breathwork and nervous system regulation',
      'Chakra balancing and elemental alignment',
      'Integrative daily rituals for vitality and calm'
    ]
  }
};

export default function LookAtYourLife() {
  const [selectedPerspective, setSelectedPerspective] = useState(null);

  const handleCardClick = (id) => {
    setSelectedPerspective(perspectivesDetail[id]);
  };

  const closeModal = () => {
    setSelectedPerspective(null);
  };

  return (
    <section className="look-at-life-section" id="look-at-your-life">
      <div className="look-at-life-outer">
        {/* Main Hero Container with Photo Background */}
        <div 
          className="look-at-life-card-main"
          style={{ backgroundImage: `url(${lookAtLifeImg})` }}
        >
          {/* Subtle dark gradient overlay for optimal readability */}
          <div className="look-at-life-overlay" />

          <div className="look-at-life-inner-content">
            {/* Top Header */}
            <div className="look-at-life-header">
              <h2 className="look-at-life-main-title">
                Look at your life from more than one perspective.
              </h2>
              <p className="look-at-life-subtitle">
                We Don't Believe There Is One Universal Way To Understand A Person Or A Situation.
              </p>
            </div>

            {/* 4 Glassmorphic Perspective Cards */}
            <div className="look-at-life-grid">
              {/* Card 1: Human */}
              <div 
                className="perspective-card"
                onClick={() => handleCardClick('human')}
                tabIndex={0}
                role="button"
                aria-label="Human Perspective"
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick('human')}
              >
                <div className="perspective-icon-wrapper">
                  <HumanIcon className="perspective-vector-icon" />
                </div>
                <div className="perspective-card-bottom">
                  <h3 className="perspective-card-title">Human</h3>
                  <p className="perspective-card-desc">
                    Your lived experience, emotions, relationships and choices.
                  </p>
                </div>
              </div>

              {/* Card 2: Vedic */}
              <div 
                className="perspective-card"
                onClick={() => handleCardClick('vedic')}
                tabIndex={0}
                role="button"
                aria-label="Vedic Perspective"
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick('vedic')}
              >
                <div className="perspective-icon-wrapper">
                  <VedicIcon className="perspective-vector-icon" />
                </div>
                <div className="perspective-card-bottom">
                  <h3 className="perspective-card-title">Vedic</h3>
                  <p className="perspective-card-desc">
                    Ancient systems of knowledge that offer perspectives on
                  </p>
                </div>
              </div>

              {/* Card 3: Spiritual */}
              <div 
                className="perspective-card"
                onClick={() => handleCardClick('spiritual')}
                tabIndex={0}
                role="button"
                aria-label="Spiritual Perspective"
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick('spiritual')}
              >
                <div className="perspective-icon-wrapper">
                  <SpiritualIcon className="perspective-vector-icon" />
                </div>
                <div className="perspective-card-bottom">
                  <h3 className="perspective-card-title">Spiritual</h3>
                  <p className="perspective-card-desc">
                    Practices and perspectives that invite reflection, inner connection and awareness.
                  </p>
                </div>
              </div>

              {/* Card 4: Holistic */}
              <div 
                className="perspective-card"
                onClick={() => handleCardClick('holistic')}
                tabIndex={0}
                role="button"
                aria-label="Holistic Perspective"
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick('holistic')}
              >
                <div className="perspective-icon-wrapper">
                  <HolisticIcon className="perspective-vector-icon" />
                </div>
                <div className="perspective-card-bottom">
                  <h3 className="perspective-card-title">Holistic</h3>
                  <p className="perspective-card-desc">
                    Ways of caring for the relationship between mind, body and soul.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Centered Title */}
            <div className="look-at-life-footer">
              <p className="look-at-life-footer-text">
                We bring the perspectives together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Perspective Detail Modal */}
      {selectedPerspective && (
        <div className="perspective-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="perspective-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="perspective-modal-close" onClick={closeModal} aria-label="Close dialog">
              ✕
            </button>
            <div className="perspective-modal-header">
              <span className="perspective-modal-badge">{selectedPerspective.title} Lens</span>
              <h3 className="perspective-modal-title">{selectedPerspective.title} Perspective</h3>
              <p className="perspective-modal-tagline">{selectedPerspective.tagline}</p>
            </div>
            <div className="perspective-modal-body">
              <p className="perspective-modal-desc">{selectedPerspective.fullDesc}</p>
              
              <div className="perspective-modal-focus">
                <h4>Core Focus & Methodology:</h4>
                <ul>
                  {selectedPerspective.keyPoints.map((point, index) => (
                    <li key={index}>
                      <span className="point-bullet">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="perspective-modal-footer">
              <button 
                className="perspective-modal-cta" 
                onClick={() => {
                  closeModal();
                  const target = document.getElementById('personal-journey');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore {selectedPerspective.title} Guidance
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}