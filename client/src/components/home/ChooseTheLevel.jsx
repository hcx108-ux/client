import React, { useState } from 'react';
import './ChooseTheLevel.css';

export default function ChooseTheLevel() {
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'
  const [activeModal, setActiveModal] = useState(null); // 'clarity' | 'guidance' | null
  
  // Booking state for Clarity Session
  const [bookingStep, setBookingStep] = useState(1);
  const [clarityData, setClarityData] = useState({
    focus: 'Relationship & Life Direction',
    practitioner: 'Matched by Akashvani',
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM IST)',
    notes: ''
  });

  // Enquiry state for Private Guidance
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    intention: '',
    preferredCadence: 'Monthly Retainer'
  });

  const handleClaritySubmit = (e) => {
    e.preventDefault();
    setBookingStep(3); // success step
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySubmitted(true);
  };

  const closeModal = () => {
    setActiveModal(null);
    setBookingStep(1);
    setEnquirySubmitted(false);
  };

  return (
    <section className="choose-guidance-section" id="guidance-levels">
      <div className="choose-guidance-container">
        
        {/* Section Header with Title & Currency Toggle */}
        <div className="choose-guidance-header">
          <div className="choose-guidance-title-wrapper">
            <h2 className="choose-guidance-heading">
              Choose The Level Of<br />
              Guidance That<br />
              <span className="choose-serif-highlight">Feels Right For You.</span>
            </h2>
          </div>

          <div className="choose-currency-toggle-wrapper">
            <div className="choose-currency-pill" role="group" aria-label="Currency Selector">
              <button
                type="button"
                className={`currency-toggle-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
                aria-pressed={currency === 'INR'}
              >
                India · INR
              </button>
              <button
                type="button"
                className={`currency-toggle-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
                aria-pressed={currency === 'USD'}
              >
                Outside India · USD
              </button>
            </div>
          </div>
        </div>

        {/* Cards Stack */}
        <div className="guidance-cards-stack">
          
          {/* Card 1: Clarity Session */}
          <div className="guidance-card guidance-card-primary">
            <div className="guidance-card-left">
              
              {/* Col 1: Overview */}
              <div className="guidance-card-overview">
                <span className="guidance-badge">25 MINUTES · ONE FOCUSED CONVERSATION</span>
                <h3 className="guidance-card-title">Clarity Session</h3>
                <p className="guidance-card-desc">
                  A focused session for when you have something specific on your mind and want to talk it through with the right practitioner.
                </p>
              </div>

              {/* Col 2: What You Receive */}
              <div className="guidance-card-receive">
                <h4 className="receive-heading">WHAT YOU RECEIVE</h4>
                <ul className="receive-list">
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>A short Relationship Pulse</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Practitioner review before the call</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>Three matched practitioner choices</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>One 40–45 minute live session</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>One practical communication or emotional-reset exercise</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>One-page Relationship Loop Map</span>
                  </li>
                  <li>
                    <span className="bullet-dot">•</span>
                    <span>A seven-day follow-up</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Col 3: Pricing Panel */}
            <div className="guidance-card-right">
              <div className="card-right-bg-waves" aria-hidden="true">
                <svg width="240" height="398" viewBox="0 0 240 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M120 0C180 80 260 140 180 240C100 340 160 398 220 398" stroke="#BD5B3B" strokeWidth="1.5" strokeOpacity="0.18" fill="none" />
                  <path d="M160 0C220 90 290 150 210 250C130 350 190 398 250 398" stroke="#BD5B3B" strokeWidth="1.5" strokeOpacity="0.12" fill="none" />
                  <path d="M80 0C140 70 230 130 150 230C70 330 130 398 190 398" stroke="#BD5B3B" strokeWidth="1.5" strokeOpacity="0.1" fill="none" />
                </svg>
              </div>

              <div className="pricing-content">
                <span className="pricing-currency-label">{currency}</span>
                <div className="pricing-amount">
                  {currency === 'INR' ? '₹7,500' : '$95'}
                </div>
                
                <button
                  type="button"
                  className="guidance-action-btn"
                  onClick={() => setActiveModal('clarity')}
                  aria-label="Book Clarity Session"
                >
                  Book <span className="btn-arrow">→</span>
                </button>

                <p className="pricing-note">
                  Your session fee can be credited toward a longer programme.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Private Guidance */}
          <div className="guidance-card guidance-card-secondary">
            <div className="guidance-card-left guidance-card-left-single">
              <div className="guidance-card-overview">
                <span className="guidance-badge">ONGOING · BY ARRANGEMENT</span>
                <h3 className="guidance-card-title">Private Guidance</h3>
                <p className="guidance-card-desc">
                  A more personal, ongoing relationship with Akashvani for those who want continued access to guidance, reflection and support as life evolves.
                </p>
              </div>
            </div>

            {/* Col 3: Pricing Panel */}
            <div className="guidance-card-right guidance-card-right-wide">
              <div className="card-right-bg-waves" aria-hidden="true">
                <svg width="240" height="310" viewBox="0 0 240 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 0C170 60 240 120 170 200C100 280 150 310 200 310" stroke="#BD5B3B" strokeWidth="1.5" strokeOpacity="0.18" fill="none" />
                  <path d="M140 0C210 70 270 130 200 210C130 290 180 310 230 310" stroke="#BD5B3B" strokeWidth="1.5" strokeOpacity="0.12" fill="none" />
                </svg>
              </div>

              <div className="pricing-content">
                <span className="pricing-currency-label">{currency}</span>
                <div className="pricing-amount pricing-amount-text">
                  On Request
                </div>

                <button
                  type="button"
                  className="guidance-action-btn"
                  onClick={() => setActiveModal('guidance')}
                  aria-label="Enquire about Private Guidance"
                >
                  Enquire <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Modal: Clarity Session Booking */}
      {activeModal === 'clarity' && (
        <div className="guidance-modal-backdrop" onClick={closeModal}>
          <div 
            className="guidance-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="clarity-modal-title"
          >
            <button 
              type="button" 
              className="guidance-modal-close"
              onClick={closeModal}
              aria-label="Close dialog"
            >
              ✕
            </button>

            {bookingStep === 1 && (
              <div className="guidance-modal-body">
                <span className="modal-top-tag">CLARITY SESSION RESERVATION</span>
                <h3 id="clarity-modal-title" className="guidance-modal-title">
                  Select Your Consultation Focus
                </h3>
                <p className="guidance-modal-subtitle">
                  We match you with the practitioner best suited to your immediate inquiry.
                </p>

                <div className="guidance-modal-options">
                  {[
                    { id: 'Relationship & Life Direction', desc: 'Navigating active transitions, relationship dynamics, or partnership decisions.' },
                    { id: 'Career Timing & Vocation', desc: 'Understanding professional crossroads, financial timing, and dharma alignment.' },
                    { id: 'Emotional Reset & Clarity', desc: 'Clearing recurring stress, mental fog, and energetic exhaustion.' },
                    { id: 'Astrological Birth Chart Reading', desc: 'In-depth overview of your planetary dashas and life houses.' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`modal-select-card ${clarityData.focus === item.id ? 'selected' : ''}`}
                      onClick={() => setClarityData({ ...clarityData, focus: item.id })}
                    >
                      <div className="select-card-radio">
                        <span className="radio-circle"></span>
                      </div>
                      <div className="select-card-info">
                        <h4 className="select-card-title">{item.id}</h4>
                        <p className="select-card-desc">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="guidance-modal-actions">
                  <button
                    type="button"
                    className="modal-primary-btn"
                    onClick={() => setBookingStep(2)}
                  >
                    Continue to Schedule →
                  </button>
                </div>
              </div>
            )}

            {bookingStep === 2 && (
              <form className="guidance-modal-body" onSubmit={handleClaritySubmit}>
                <span className="modal-top-tag">STEP 2 OF 2 · SCHEDULE & DETAILS</span>
                <h3 className="guidance-modal-title">
                  Confirm Your Session
                </h3>
                <p className="guidance-modal-subtitle">
                  Fee: <strong style={{ color: '#BD5B3B' }}>{currency === 'INR' ? '₹7,500' : '$95'}</strong> · Creditable toward longer programmes.
                </p>

                <div className="guidance-form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="client-name">Full Name *</label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Priya Sharma"
                      value={clarityData.name}
                      onChange={(e) => setClarityData({ ...clarityData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="client-email">Email Address *</label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="e.g. priya@example.com"
                      value={clarityData.email}
                      onChange={(e) => setClarityData({ ...clarityData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="client-phone">Phone / WhatsApp *</label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={clarityData.phone}
                      onChange={(e) => setClarityData({ ...clarityData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="client-date">Preferred Date *</label>
                    <input
                      id="client-date"
                      type="date"
                      required
                      className="form-input"
                      value={clarityData.date}
                      onChange={(e) => setClarityData({ ...clarityData, date: e.target.value })}
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label" htmlFor="client-slot">Preferred Time Window</label>
                    <select
                      id="client-slot"
                      className="form-input"
                      value={clarityData.timeSlot}
                      onChange={(e) => setClarityData({ ...clarityData, timeSlot: e.target.value })}
                    >
                      <option>Morning (10:00 AM - 1:00 PM IST)</option>
                      <option>Afternoon (2:00 PM - 5:00 PM IST)</option>
                      <option>Evening (6:00 PM - 9:00 PM IST)</option>
                      <option>Flexible / Match Practitioner Availability</option>
                    </select>
                  </div>
                </div>

                <div className="guidance-modal-actions modal-action-split">
                  <button
                    type="button"
                    className="modal-secondary-btn"
                    onClick={() => setBookingStep(1)}
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="modal-primary-btn"
                  >
                    Complete Reservation ({currency === 'INR' ? '₹7,500' : '$95'}) →
                  </button>
                </div>
              </form>
            )}

            {bookingStep === 3 && (
              <div className="guidance-modal-body modal-success-body">
                <div className="success-icon-badge">✓</div>
                <h3 className="guidance-modal-title">Clarity Session Confirmed</h3>
                <p className="guidance-modal-subtitle">
                  Thank you, <strong>{clarityData.name || 'Friend'}</strong>. Your consultation details have been registered.
                </p>

                <div className="success-details-card">
                  <div className="detail-row">
                    <span className="detail-label">Focus:</span>
                    <span className="detail-val">{clarityData.focus}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Investment:</span>
                    <span className="detail-val">{currency === 'INR' ? '₹7,500' : '$95'}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Schedule Window:</span>
                    <span className="detail-val">{clarityData.date || 'Earliest available'} ({clarityData.timeSlot})</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Email Confirmation:</span>
                    <span className="detail-val">{clarityData.email || 'Sent to registered email'}</span>
                  </div>
                </div>

                <p className="success-footer-note">
                  A member of the Akashvani concierge will reach out within 2 hours with your practitioner profile and video link.
                </p>

                <div className="guidance-modal-actions">
                  <button
                    type="button"
                    className="modal-primary-btn"
                    onClick={closeModal}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Interactive Modal: Private Guidance Enquiry */}
      {activeModal === 'guidance' && (
        <div className="guidance-modal-backdrop" onClick={closeModal}>
          <div 
            className="guidance-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="guidance-modal-title"
          >
            <button 
              type="button" 
              className="guidance-modal-close"
              onClick={closeModal}
              aria-label="Close dialog"
            >
              ✕
            </button>

            {!enquirySubmitted ? (
              <form className="guidance-modal-body" onSubmit={handleEnquirySubmit}>
                <span className="modal-top-tag">BESPOKE ENGAGEMENT</span>
                <h3 id="guidance-modal-title" className="guidance-modal-title">
                  Private Guidance Inquiry
                </h3>
                <p className="guidance-modal-subtitle">
                  An ongoing relationship for sustained personal synthesis, quarterly milestone forecasting, and direct access.
                </p>

                <div className="guidance-form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="enq-name">Your Name *</label>
                    <input
                      id="enq-name"
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Siddharth Verma"
                      value={enquiryData.name}
                      onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="enq-email">Email Address *</label>
                    <input
                      id="enq-email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="e.g. siddharth@example.com"
                      value={enquiryData.email}
                      onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="enq-location">City & Country</label>
                    <input
                      id="enq-location"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Mumbai, India or London, UK"
                      value={enquiryData.location}
                      onChange={(e) => setEnquiryData({ ...enquiryData, location: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="enq-cadence">Preferred Cadence</label>
                    <select
                      id="enq-cadence"
                      className="form-input"
                      value={enquiryData.preferredCadence}
                      onChange={(e) => setEnquiryData({ ...enquiryData, preferredCadence: e.target.value })}
                    >
                      <option>Monthly Guidance (Bi-weekly 60m sessions)</option>
                      <option>Quarterly Synthesis & Transit Mapping</option>
                      <option>Annual Retainer & Direct Messaging</option>
                    </select>
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label" htmlFor="enq-intention">What areas of life are you seeking ongoing guidance in?</label>
                    <textarea
                      id="enq-intention"
                      rows={3}
                      className="form-input form-textarea"
                      placeholder="Describe your current phase, leadership transitions, or family/life questions..."
                      value={enquiryData.intention}
                      onChange={(e) => setEnquiryData({ ...enquiryData, intention: e.target.value })}
                    />
                  </div>
                </div>

                <div className="guidance-modal-actions">
                  <button
                    type="submit"
                    className="modal-primary-btn"
                  >
                    Submit Private Inquiry →
                  </button>
                </div>
              </form>
            ) : (
              <div className="guidance-modal-body modal-success-body">
                <div className="success-icon-badge">✓</div>
                <h3 className="guidance-modal-title">Inquiry Received</h3>
                <p className="guidance-modal-subtitle">
                  Thank you for your interest in Private Guidance, <strong>{enquiryData.name || 'Friend'}</strong>.
                </p>
                <p className="success-footer-note" style={{ marginTop: '16px' }}>
                  Our senior advisory team will review your submission and contact you within 24 hours to arrange an exploratory conversation.
                </p>
                <div className="guidance-modal-actions" style={{ marginTop: '24px' }}>
                  <button
                    type="button"
                    className="modal-primary-btn"
                    onClick={closeModal}
                  >
                    Close
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
