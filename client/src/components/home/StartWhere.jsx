import React, { useState } from 'react';
import './StartWhere.css';
import startWhereBg from '../../assets/start_where_bg.png';

export default function StartWhere() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedFocus, setSelectedFocus] = useState('blueprint');
  const [selectedFormat, setSelectedFormat] = useState('live');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    birthTime: '',
    birthPlace: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const focusOptions = [
    {
      id: 'blueprint',
      title: 'Natal Blueprint & Life Purpose',
      desc: 'Understand your core planetary alignments, karmic dharma, and innate gifts.'
    },
    {
      id: 'transitions',
      title: 'Navigating Key Decisions & Timing',
      desc: 'Gain clarity on upcoming Dasha cycles, transit influences, and auspicious moments.'
    },
    {
      id: 'relationships',
      title: 'Relationships & Soul Dynamics',
      desc: 'Explore synastry, emotional patterns, and karmic bonds in partnerships.'
    },
    {
      id: 'wellbeing',
      title: 'Mind-Body Health & Vedic Alignment',
      desc: 'Remedial gems, mantras, and daily Ayurvedic rhythms tailored to your chart.'
    }
  ];

  const formatOptions = [
    {
      id: 'live',
      title: '1-on-1 Comprehensive Live Video Session',
      duration: '60 Minutes',
      desc: 'Interactive deep-dive with senior Vedic Astrologer, complete with Q&A and recording.'
    },
    {
      id: 'focused',
      title: 'Focused Inquiry Live Consultation',
      duration: '30 Minutes',
      desc: 'Targeted session addressing 1-2 urgent questions or immediate career/relationship decisions.'
    },
    {
      id: 'written',
      title: 'Handcrafted Written Kundli Blueprint',
      duration: 'PDF & Audio Notes',
      desc: 'Comprehensive 40+ page personalized birth chart manual with customized remedial chart.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setStep(1);
    setIsSubmitted(false);
  };

  return (
    <section className="start-where-section" id="start-where">
      {/* Background Image & Ambient Atmosphere */}
      <div 
        className="start-where-bg" 
        style={{ backgroundImage: `url(${startWhereBg})` }}
      />
      <div className="start-where-overlay" />

      {/* Main Content Container */}
      <div className="start-where-container">
        
        {/* Central Hero Heading */}
        <div className="start-where-header">
          <h2 className="start-where-heading">
            Start Where You Are. Explore What<br />
            You're <span className="start-where-italic">Ready To Understand.</span>
          </h2>
        </div>

        {/* Primary Interactive CTA Button */}
        <div className="start-where-cta-wrap">
          <button 
            type="button" 
            className="start-where-cta-btn"
            onClick={() => setShowModal(true)}
            aria-label="Begin Your Akashvani Journey"
          >
            Begin Your Akashvani Journey
          </button>
        </div>

        {/* Akashvani Arched Logo Emblem */}
        <div className="start-where-logo-wrapper" aria-label="Akashvani Logo">
          <svg 
            viewBox="632 540 174 48" 
            width="174" 
            height="48" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="start-where-logo-svg"
          >
            <path d="M796.051 569.049C796.051 567.32 796.04 565.585 796.051 563.856C796.068 561.525 796.101 559.199 796.123 556.868C796.123 556.383 796.424 556.137 796.843 556.12C797.311 556.098 797.618 556.371 797.64 556.868C797.657 557.325 797.64 557.782 797.64 558.24C797.607 562.166 797.573 566.093 797.529 570.025C797.523 570.532 797.696 571.274 797.049 571.358C796.53 571.425 795.8 571.168 795.426 570.789C793.809 569.149 792.297 567.403 790.736 565.708C788.555 563.343 786.368 560.984 784.182 558.619C784.143 558.574 784.076 558.558 783.948 558.491C783.948 560.276 783.948 561.999 783.948 563.722C783.948 566.076 783.948 568.43 783.948 570.783C783.948 571.246 783.691 571.547 783.24 571.531C782.788 571.514 782.576 571.196 782.57 570.739C782.542 569.389 782.492 568.045 782.481 566.695C782.453 563.611 782.442 560.527 782.414 557.442C782.414 556.873 782.481 556.422 783.134 556.215C783.725 556.031 784.076 556.293 784.433 556.689C787.038 559.534 789.659 562.367 792.269 565.206C793.335 566.366 794.4 567.526 795.465 568.686C795.599 568.831 795.738 568.976 795.872 569.116C795.934 569.093 796.001 569.071 796.062 569.049H796.051Z" fill="#F5F0EA"/>
            <path d="M714.482 571.62C712.122 571.598 709.981 570.973 708.134 569.456C707.872 569.238 707.56 569.082 707.292 568.876C706.969 568.625 706.774 568.246 707.091 567.939C707.303 567.738 707.755 567.638 708.045 567.71C708.424 567.805 708.776 568.078 709.088 568.34C711.592 570.449 714.487 570.41 717.465 569.863C718.129 569.74 718.771 569.467 719.401 569.21C720.176 568.898 720.589 568.268 720.611 567.459C720.639 566.561 720.394 565.73 719.563 565.217C718.486 564.548 717.237 564.62 716.043 564.481C714.448 564.297 712.875 564.068 711.459 563.231C710.533 562.69 709.735 562.01 709.278 561.028C708.553 559.467 709.339 558.212 710.856 557.37C713.204 556.059 715.742 555.747 718.341 556.382C719.178 556.589 719.942 557.113 720.728 557.52C720.873 557.598 721.035 557.788 721.052 557.944C721.08 558.206 721.091 558.585 720.94 558.725C720.784 558.87 720.321 558.909 720.159 558.781C717.912 556.979 715.463 557.202 712.953 558.028C712.418 558.206 711.877 558.435 711.414 558.747C710.271 559.517 710.271 560.381 711.302 561.318C712.624 562.518 714.258 562.863 715.948 563.098C717.248 563.276 718.587 563.382 719.83 563.767C721.403 564.258 722.039 565.624 722.139 567.169C722.234 568.591 721.543 569.64 720.316 570.376C719.122 571.09 717.783 571.246 716.456 571.447C715.803 571.542 715.14 571.558 714.476 571.609L714.482 571.62Z" fill="#F5F0EA"/>
            <path d="M676.806 565.229C675.701 566.501 674.647 567.695 673.632 568.922C673.487 569.094 673.521 569.435 673.521 569.697C673.521 570.015 673.587 570.333 673.587 570.651C673.593 571.119 673.42 571.437 672.874 571.448C672.366 571.459 672.104 571.236 672.076 570.729C672.003 569.451 671.875 568.174 671.87 566.897C671.842 563.562 671.87 560.232 671.875 556.897C671.875 556.467 672.02 556.099 672.511 556.077C672.98 556.06 673.208 556.372 673.225 556.819C673.27 558.14 673.32 559.468 673.331 560.79C673.348 562.792 673.331 564.794 673.331 566.797C673.392 566.819 673.454 566.836 673.515 566.858C674.218 566.016 674.932 565.185 675.623 564.331C676.588 563.149 677.536 561.95 678.507 560.773C679.533 559.518 680.565 558.274 681.613 557.036C681.797 556.819 682.037 556.545 682.288 556.501C682.578 556.451 683.03 556.523 683.186 556.718C683.314 556.88 683.22 557.388 683.047 557.599C681.39 559.635 679.7 561.643 678.01 563.645C677.743 563.963 677.743 564.192 677.994 564.538C679.349 566.373 680.671 568.23 682.015 570.071C682.322 570.489 682.489 570.902 682.009 571.258C681.552 571.599 681.134 571.381 680.838 570.963C679.895 569.619 678.97 568.263 678.033 566.914C677.653 566.373 677.257 565.843 676.8 565.213L676.806 565.229Z" fill="#F5F0EA"/>
            <path d="M736.116 564.443C733.327 564.443 730.656 564.448 727.99 564.437C727.544 564.437 727.46 564.649 727.466 565.034C727.482 566.819 727.466 568.598 727.493 570.382C727.499 570.94 727.449 571.414 726.768 571.464C726.278 571.504 725.965 571.102 725.971 570.41C725.999 566.027 726.043 561.637 726.082 557.253C726.082 556.779 726.211 556.339 726.774 556.344C727.332 556.344 727.46 556.779 727.46 557.259V563.104H735.826C735.826 561.18 735.826 559.334 735.826 557.488C735.826 557.398 735.826 557.303 735.82 557.214C735.793 556.729 735.809 556.244 736.456 556.233C737.126 556.221 737.176 556.718 737.198 557.231C737.271 558.854 737.326 560.471 737.443 562.089C737.605 564.387 737.817 566.679 738.001 568.977C738.035 569.434 738.051 569.892 738.029 570.349C738.007 570.851 737.756 571.158 737.204 571.135C736.663 571.113 736.54 570.778 736.512 570.31C736.395 568.397 736.261 566.489 736.122 564.448L736.116 564.443Z" fill="#F5F0EA"/>
            <path d="M748.76 571.788C747.6 571.766 746.512 570.98 745.62 569.881C744.448 568.436 743.868 566.696 743.244 564.984C742.34 562.508 742.151 559.909 741.872 557.326C741.86 557.215 741.86 557.098 741.855 556.986C741.833 556.501 741.961 556.071 742.513 556.055C743.06 556.043 743.193 556.462 743.238 556.947C743.584 560.388 744.119 563.79 745.631 566.942C746.077 567.873 746.707 568.726 747.349 569.541C748.102 570.5 749.167 570.517 750.227 570.182C751.766 569.686 752.664 568.548 753.11 567.042C753.807 564.683 754.471 562.312 755.151 559.953C755.469 558.86 755.793 557.767 756.127 556.679C756.267 556.222 756.54 555.882 757.081 556.032C757.605 556.177 757.739 556.596 757.605 557.064C757.221 558.403 756.797 559.724 756.401 561.057C755.715 563.372 755.118 565.715 754.337 567.996C753.528 570.349 751.415 571.788 748.749 571.8L748.76 571.788Z" fill="#F5F0EA"/>
            <path d="M770.406 556.16C772.888 556.205 774.511 557.633 775.543 559.68C777.239 563.043 778.315 566.618 778.583 570.405C778.627 571.046 778.321 571.52 777.835 571.509C777.261 571.493 777.099 571.113 777.06 570.589C776.826 567.131 775.833 563.874 774.4 560.739C773.909 559.663 773.24 558.737 772.186 558.112C770.707 557.242 769.213 557.337 767.969 558.514C766.413 559.992 765.415 561.827 764.768 563.852C764.171 565.72 763.619 567.6 763.072 569.479C762.944 569.914 762.894 570.372 762.849 570.823C762.81 571.247 762.637 571.532 762.191 571.543C761.706 571.554 761.482 571.23 761.477 570.795C761.466 570.411 761.527 570.02 761.6 569.641C762.196 566.54 762.966 563.495 764.494 560.695C765.264 559.284 766.156 557.979 767.506 557.03C768.387 556.411 769.335 556.132 770.401 556.149L770.406 556.16Z" fill="#F5F0EA"/>
            <path d="M702.205 571.163C702.088 571.051 701.793 570.878 701.675 570.627C701.413 570.047 701.229 569.434 701.034 568.831C700.069 565.887 699.115 562.942 698.151 560.002C698.072 559.768 697.933 559.551 697.81 559.333C696.656 557.348 694.799 557.18 693.192 558.865C691.915 560.209 691.19 561.86 690.588 563.555C689.924 565.446 689.394 567.376 688.814 569.294C688.669 569.774 688.552 570.265 688.468 570.761C688.39 571.246 688.145 571.542 687.654 571.47C687.091 571.386 686.99 570.951 687.113 570.477C687.654 568.402 688.2 566.333 688.769 564.269C689.299 562.345 690.074 560.521 691.235 558.893C692.579 557.002 694.324 555.959 696.751 556.422C697.671 556.595 698.212 557.236 698.703 557.922C699.74 559.372 700.22 561.079 700.75 562.752C701.53 565.206 702.289 567.66 703.059 570.12C703.248 570.717 702.947 571.185 702.205 571.163Z" fill="#F5F0EA"/>
            <path d="M672.6 584.476C666.967 584.304 663.905 579.825 663.554 574.599C662.238 567.058 661.434 558.826 658.2 551.759C655.69 546.333 648.512 547.292 644.87 551.112C639.275 557.236 638.952 566.395 637.334 574.169C633.642 579.072 637.223 551.893 645.316 548.229C659.058 541.536 661.936 555.072 664.039 565.764C665.244 571.057 664.346 578.157 669.081 581.955C674.006 585.369 678.546 580.689 679.444 575.787C682.679 572.959 680.437 585.112 672.6 584.471V584.476Z" fill="#F5F0EA"/>
            <path d="M652.149 578.541C648.44 578.05 644.987 576.444 642.6 574.218C641.875 573.46 640.832 572.584 640.648 571.497C640.626 570.699 641.384 570.66 641.842 571.206C646.593 576.895 654.095 579.355 659.343 573.125C660.503 572.183 661.535 573.147 660.543 574.28C658.233 576.934 655.333 578.563 652.143 578.546L652.149 578.541Z" fill="#F5F0EA"/>
            <path d="M651.027 573.557C647.641 573.456 644.613 571.716 642.861 568.671C642.354 567.873 642.912 566.529 643.821 567.544C645.226 569.747 647.307 571.582 649.861 571.75C655.896 572.865 657.502 567.226 659.086 568.526C659.047 572.101 654.05 573.495 651.027 573.557Z" fill="#F5F0EA"/>
            <path d="M651.384 569.217C649.816 569.635 643.899 566.15 645.767 564.259C646.314 564.013 646.715 564.772 646.989 565.168C648.11 567.064 651.055 568.676 652.995 566.986C657.284 560.974 657.056 569.412 651.389 569.223L651.384 569.217Z" fill="#F5F0EA"/>
            <path d="M650.648 565.429C649.12 565.641 648.913 563.165 650.235 562.774C652.656 562.038 653.437 565.596 650.648 565.429Z" fill="#F5F0EA"/>
            <path d="M804.004 567.799C804.004 568.781 804.127 569.522 804.121 570.504C804.121 571.134 803.803 571.536 803.329 571.48C802.766 571.413 802.615 571.017 802.604 570.498C802.531 566.137 802.453 561.77 802.381 557.408C802.381 557.297 802.381 557.18 802.392 557.068C802.442 556.6 802.665 556.282 803.167 556.287C803.669 556.287 803.915 556.611 803.926 557.079C803.954 558.2 803.959 559.321 803.965 560.437C803.965 562.813 803.998 565.178 803.998 567.554C804.004 567.637 803.998 567.687 804.009 567.799H804.004Z" fill="#F5F0EA"/>
          </svg>
        </div>

      </div>

      {/* Interactive Modal: Journey Initiation & Booking */}
      {showModal && (
        <div className="start-where-modal-overlay" onClick={handleClose} role="dialog" aria-modal="true">
          <div className="start-where-modal" onClick={e => e.stopPropagation()}>
            <button className="start-where-modal-close" onClick={handleClose} aria-label="Close Modal">
              &times;
            </button>

            {!isSubmitted ? (
              <>
                <div className="start-where-modal-header">
                  <span className="start-where-modal-badge">Begin Your Journey • Step {step} of 3</span>
                  <h3 className="start-where-modal-title">
                    {step === 1 && "What dimension calls for guidance?"}
                    {step === 2 && "Choose your preferred guidance style"}
                    {step === 3 && "Complete your birth details"}
                  </h3>
                  <p className="start-where-modal-subtitle">
                    {step === 1 && "Select the primary area you wish to gain clarity and direction on today."}
                    {step === 2 && "Choose how you would like to receive your personalized Vedic readings."}
                    {step === 3 && "Exact birth timing ensures precision down to the Navamsha (D9) divisional chart."}
                  </p>
                </div>

                <div className="start-where-modal-body">
                  {/* Step 1: Life Area Selection */}
                  {step === 1 && (
                    <div className="start-where-options-grid">
                      {focusOptions.map(opt => (
                        <div 
                          key={opt.id}
                          className={`start-where-option-card ${selectedFocus === opt.id ? 'active' : ''}`}
                          onClick={() => setSelectedFocus(opt.id)}
                          tabIndex={0}
                          role="button"
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedFocus(opt.id); }}
                        >
                          <div className="start-where-option-radio">
                            <span className="radio-dot" />
                          </div>
                          <div className="start-where-option-info">
                            <h4 className="start-where-option-title">{opt.title}</h4>
                            <p className="start-where-option-desc">{opt.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 2: Guidance Style Selection */}
                  {step === 2 && (
                    <div className="start-where-options-grid">
                      {formatOptions.map(opt => (
                        <div 
                          key={opt.id}
                          className={`start-where-option-card ${selectedFormat === opt.id ? 'active' : ''}`}
                          onClick={() => setSelectedFormat(opt.id)}
                          tabIndex={0}
                          role="button"
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedFormat(opt.id); }}
                        >
                          <div className="start-where-option-radio">
                            <span className="radio-dot" />
                          </div>
                          <div className="start-where-option-info">
                            <div className="start-where-option-header-row">
                              <h4 className="start-where-option-title">{opt.title}</h4>
                              <span className="start-where-format-duration">{opt.duration}</span>
                            </div>
                            <p className="start-where-option-desc">{opt.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 3: Form Details */}
                  {step === 3 && (
                    <form className="start-where-form" onSubmit={handleSubmit}>
                      <div className="start-where-form-row">
                        <div className="start-where-form-group">
                          <label htmlFor="sw-name">Full Name *</label>
                          <input 
                            type="text" 
                            id="sw-name" 
                            name="name" 
                            required 
                            placeholder="e.g. Radhika Sharma"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="start-where-form-group">
                          <label htmlFor="sw-email">Email Address *</label>
                          <input 
                            type="email" 
                            id="sw-email" 
                            name="email" 
                            required 
                            placeholder="radhika@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="start-where-form-row">
                        <div className="start-where-form-group">
                          <label htmlFor="sw-dob">Date of Birth *</label>
                          <input 
                            type="date" 
                            id="sw-dob" 
                            name="dob" 
                            required 
                            value={formData.dob}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="start-where-form-group">
                          <label htmlFor="sw-time">Time of Birth (Approx/Exact) *</label>
                          <input 
                            type="time" 
                            id="sw-time" 
                            name="birthTime" 
                            required 
                            value={formData.birthTime}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="start-where-form-group">
                        <label htmlFor="sw-place">Place of Birth (City, State, Country) *</label>
                        <input 
                          type="text" 
                          id="sw-place" 
                          name="birthPlace" 
                          required 
                          placeholder="e.g. Jaipur, Rajasthan, India"
                          value={formData.birthPlace}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="start-where-form-group">
                        <label htmlFor="sw-notes">Primary Inquiry or Life Transition (Optional)</label>
                        <textarea 
                          id="sw-notes" 
                          name="notes" 
                          rows="2"
                          placeholder="Tell us any specific focus area or recent life question..."
                          value={formData.notes}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="start-where-modal-footer">
                        <button 
                          type="button" 
                          className="start-where-btn-secondary" 
                          onClick={() => setStep(2)}
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="start-where-btn-primary"
                        >
                          Confirm & Schedule Reading
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* Footer for Steps 1 and 2 */}
                {step < 3 && (
                  <div className="start-where-modal-footer">
                    {step > 1 ? (
                      <button 
                        type="button" 
                        className="start-where-btn-secondary" 
                        onClick={() => setStep(prev => prev - 1)}
                      >
                        Back
                      </button>
                    ) : (
                      <div />
                    )}
                    <button 
                      type="button" 
                      className="start-where-btn-primary"
                      onClick={() => setStep(prev => prev + 1)}
                    >
                      Continue to Next Step &rarr;
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Success State */
              <div className="start-where-success">
                <div className="start-where-success-icon">✨</div>
                <h3 className="start-where-success-title">Your Akashvani Journey Begins</h3>
                <p className="start-where-success-msg">
                  Thank you, <strong>{formData.name || 'Seeker'}</strong>. We have registered your chart parameters for the <strong>{focusOptions.find(f => f.id === selectedFocus)?.title}</strong> pathway.
                </p>
                <div className="start-where-summary-card">
                  <div className="start-where-summary-row">
                    <span>Consultation Format:</span>
                    <strong>{formatOptions.find(f => f.id === selectedFormat)?.title}</strong>
                  </div>
                  <div className="start-where-summary-row">
                    <span>Birth Details:</span>
                    <strong>{formData.dob} at {formData.birthTime} ({formData.birthPlace})</strong>
                  </div>
                  <div className="start-where-summary-row">
                    <span>Confirmation Sent To:</span>
                    <strong>{formData.email}</strong>
                  </div>
                </div>
                <p className="start-where-success-hint">
                  Our Vedic practitioners are casting your birth chart and divisional vargas. You will receive an email confirmation with calendar link shortly.
                </p>
                <button 
                  type="button" 
                  className="start-where-btn-primary" 
                  onClick={handleClose}
                >
                  Return to Exploration
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
