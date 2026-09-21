import React, { useState } from 'react';
import './MeetTheTeam.css';
import ananyaImg from '../../assets/ananya_rao.png';
import devratImg from '../../assets/journal_card_2.png';
import someshwarImg from '../../assets/journal_card_3.png';
import meeraImg from '../../assets/journal_card_4.png';

const guidanceCategories = [
  {
    id: 1,
    categoryTitle: 'Vedic & Astrological Guidance',
    categorySubtitleLine1: 'For Exploring Charts, Patterns, Compatibility, Tendencies',
    categorySubtitleLine2: 'And Timing.',
    practitioner: {
      name: 'Ananya Rao',
      experienceYears: '12 Yrs',
      experienceSub: 'In Practice',
      image: ananyaImg,
      tags: ['Spirituality', 'Vedic Wisdom'],
      quoteLine1: 'Reads Birth Charts As A Map Of Tendencies,',
      quoteLine2: 'Not A Verdict.',
      bio: 'Specializing in Parashari Vedic astrology, natal chart synthesis, and planetary timing with an empathetic, grounded approach to personal growth.'
    }
  },
  {
    id: 2,
    categoryTitle: 'Relationship Guidance',
    categorySubtitleLine1: 'For Understanding Communication, Dynamics,',
    categorySubtitleLine2: 'Boundaries, Conflict And Connection.',
    practitioner: {
      name: 'Dr. Devrat Joshi',
      experienceYears: '16 Yrs',
      experienceSub: 'In Practice',
      image: devratImg,
      tags: ['Synastry', 'Communication'],
      quoteLine1: 'Understanding relationship patterns without',
      quoteLine2: 'reducing your bond to simple labels.',
      bio: 'Focusing on interpersonal dynamics, karmic relationship bonds, healthy boundary setting, and empathetic conflict resolution.'
    }
  },
  {
    id: 3,
    categoryTitle: 'Spiritual Guidance',
    categorySubtitleLine1: 'For Inner Reflection, Meaning, Purpose And Deeper',
    categorySubtitleLine2: 'Personal Questions.',
    practitioner: {
      name: 'Pt. Someshwar Shastri',
      experienceYears: '20 Yrs',
      experienceSub: 'In Practice',
      image: someshwarImg,
      tags: ['Inner Reflection', 'Dharma'],
      quoteLine1: 'Guiding the soul towards purposeful alignment',
      quoteLine2: 'and spiritual liberation.',
      bio: 'Mentoring seekers through existential dilemmas, life purpose discovery (Dharma), and deep meditative introspection.'
    }
  },
  {
    id: 4,
    categoryTitle: 'Holistic Practices',
    categorySubtitleLine1: 'For Exploring The Relationship Between Mind, Body And',
    categorySubtitleLine2: 'Inner Wellbeing.',
    practitioner: {
      name: 'Meera Devi',
      experienceYears: '14 Yrs',
      experienceSub: 'In Practice',
      image: meeraImg,
      tags: ['Mindfulness', 'Chakra Healing'],
      quoteLine1: 'Harmonizing mind, body, and soul through',
      quoteLine2: 'timeless Vedic contemplative practices.',
      bio: 'Integrating restorative breathwork, mantra vibration therapy, and chakra balancing aligned with personal astrological energy fields.'
    }
  }
];

export default function MeetTheTeam() {
  const [selectedId, setSelectedId] = useState(1);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const currentCategory = guidanceCategories.find((c) => c.id === selectedId) || guidanceCategories[0];
  const currentIndex = guidanceCategories.findIndex((c) => c.id === selectedId);
  const currentPractitioner = currentCategory.practitioner;

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + guidanceCategories.length) % guidanceCategories.length;
    setSelectedId(guidanceCategories[prevIdx].id);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % guidanceCategories.length;
    setSelectedId(guidanceCategories[nextIdx].id);
  };

  return (
    <section className="meet-people-section" id="meet-the-team">
      {/* Background Decorative Wavy Lines */}
      <div className="meet-people-bg-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 952" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-35 150 C300 130, 600 180, 1000 120 C1200 80, 1400 110, 1475 90" stroke="rgba(255,255,255,0.035)" strokeWidth="1.5" fill="none"/>
          <path d="M-35 250 C350 220, 700 280, 1050 200 C1250 160, 1400 200, 1475 180" stroke="rgba(255,255,255,0.035)" strokeWidth="1.5" fill="none"/>
          <path d="M-35 380 C300 350, 650 420, 1020 340 C1220 300, 1380 340, 1475 320" stroke="rgba(255,255,255,0.035)" strokeWidth="1.5" fill="none"/>
          <path d="M-35 520 C320 490, 680 560, 1050 470 C1260 420, 1410 470, 1475 440" stroke="rgba(255,255,255,0.035)" strokeWidth="1.5" fill="none"/>
          <path d="M-35 680 C310 640, 660 710, 1030 620 C1240 570, 1390 620, 1475 590" stroke="rgba(255,255,255,0.035)" strokeWidth="1.5" fill="none"/>
          <path d="M-35 840 C330 800, 690 870, 1060 780 C1270 730, 1420 780, 1475 750" stroke="rgba(255,255,255,0.035)" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="meet-people-container">
        {/* Left Column: Heading + 4 Guidance Category Cards */}
        <div className="meet-people-left">
          <div className="meet-people-header">
            <h2 className="meet-people-main-title">Meet The People Behind</h2>
            <span className="meet-people-serif-title">The Perspectives.</span>
            <p className="meet-people-description">
              Akashvani Brings Together Practitioners Who Bring<br />
              Different Forms Of Knowledge, Experience And Practice.
            </p>
          </div>

          <div className="guidance-cards-list" role="tablist" aria-label="Guidance Categories">
            {guidanceCategories.map((item) => {
              const isActive = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  className={`guidance-card-item ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedId(item.id)}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedId(item.id);
                    }
                  }}
                >
                  {/* Left Circle Indicator */}
                  <div className={`guidance-circle-icon ${isActive ? 'filled-cream' : 'translucent'}`} />

                  {/* Category Title and Subtitle */}
                  <div className="guidance-card-content">
                    <h3 className="guidance-card-title">{item.categoryTitle}</h3>
                    <p className="guidance-card-subtitle">
                      {item.categorySubtitleLine1}
                      <br />
                      {item.categorySubtitleLine2}
                    </p>
                  </div>

                  {/* Right Radio Check / Indicator */}
                  <div className={`guidance-radio-wrapper ${isActive ? 'active-radio' : ''}`}>
                    {isActive ? (
                      <div className="guidance-radio-checked-dot" />
                    ) : (
                      <div className="guidance-radio-hollow-ring" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Practitioner Portrait & Bio Details */}
        <div className="meet-people-right">
          {/* Oval Portrait Stage with Carousel Arrows */}
          <div className="portrait-carousel-stage">
            <button
              type="button"
              className="carousel-arrow-btn prev-arrow"
              onClick={handlePrev}
              aria-label="Previous practitioner"
            >
              ←
            </button>

            {/* Iconic Oval / Pill Portrait Frame */}
            <div
              className="practitioner-oval-frame"
              onClick={() => setShowBookingModal(true)}
              role="button"
              tabIndex={0}
              aria-label={`View profile of ${currentPractitioner.name}`}
            >
              <img
                src={currentPractitioner.image}
                alt={currentPractitioner.name}
                className="practitioner-oval-img"
                key={currentCategory.id}
              />
            </div>

            <button
              type="button"
              className="carousel-arrow-btn next-arrow"
              onClick={handleNext}
              aria-label="Next practitioner"
            >
              →
            </button>
          </div>

          {/* Practitioner Meta Information (Below Oval) */}
          <div className="practitioner-meta-section" key={`practitioner-${currentCategory.id}`}>
            <div className="practitioner-name-row">
              <h3 className="practitioner-name">{currentPractitioner.name}</h3>
              <div className="practitioner-experience-badge">
                <span className="exp-gold-dot">●</span>
                <span className="exp-text">
                  <strong>{currentPractitioner.experienceYears}</strong>
                  <small>{currentPractitioner.experienceSub}</small>
                </span>
              </div>
            </div>

            <div className="practitioner-tags-row">
              {currentPractitioner.tags.map((tag, idx) => (
                <span key={idx} className="practitioner-pill-tag">
                  {tag}
                </span>
              ))}
            </div>

            <p className="practitioner-quote">
              {currentPractitioner.quoteLine1}
              <br />
              {currentPractitioner.quoteLine2}
            </p>

            <div className="practitioner-book-action">
              <button
                type="button"
                className="book-session-link-btn"
                onClick={() => setShowBookingModal(true)}
              >
                BOOK A SESSION <span className="book-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking / Consultation Modal */}
      {showBookingModal && (
        <div className="team-modal-backdrop" onClick={() => setShowBookingModal(false)}>
          <div
            className="team-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="team-modal-close"
              onClick={() => setShowBookingModal(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="team-modal-body">
              <div className="team-modal-left">
                <div className="team-modal-photo-wrapper">
                  <img
                    src={currentPractitioner.image}
                    alt={currentPractitioner.name}
                    className="team-modal-photo"
                  />
                </div>
                <div className="team-modal-badges">
                  {currentPractitioner.tags.map((tag, idx) => (
                    <span key={idx} className="practitioner-pill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="team-modal-right">
                <span className="team-modal-badge">{currentCategory.categoryTitle}</span>
                <h2 className="team-modal-name">{currentPractitioner.name}</h2>
                <p className="team-modal-role">{currentPractitioner.experienceYears} {currentPractitioner.experienceSub}</p>

                <hr className="team-modal-divider" />

                <p className="team-modal-bio-quote">"{currentPractitioner.quoteLine1} {currentPractitioner.quoteLine2}"</p>
                <p className="team-modal-bio-text">{currentPractitioner.bio}</p>

                <div className="team-modal-actions">
                  <button
                    type="button"
                    className="team-modal-book-btn"
                    onClick={() => {
                      alert(`Session request sent for ${currentPractitioner.name}! Our team will connect with you via WhatsApp/Email.`);
                      setShowBookingModal(false);
                    }}
                  >
                    Confirm Booking with {currentPractitioner.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
