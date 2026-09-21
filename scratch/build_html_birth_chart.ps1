$svg = [System.IO.File]::ReadAllText("client/src/assets/your_birth_chart.svg", [System.Text.Encoding]::UTF8)

# Extract defs content from your_birth_chart.svg
$defsMatch = [regex]::Match($svg, '(?s)<defs>.*?</defs>')
$defsContent = $defsMatch.Value

# Clean JSX attributes in defs
$defsContent = $defsContent -replace 'color-interpolation-filters="', 'colorInterpolationFilters="'
$defsContent = $defsContent -replace 'shape-rendering="', 'shapeRendering="'
$defsContent = $defsContent -replace 'xlink:href="', 'xlinkHref="'
$defsContent = $defsContent -replace 'xmlns:xlink="', 'xmlnsXlink="'
$defsContent = $defsContent -replace 'fill-opacity="', 'fillOpacity="'
$defsContent = $defsContent -replace 'flood-opacity="', 'floodOpacity="'

# Extract all wavy paths and phone rect inside clip1_134_4286
$leftMatch = [regex]::Match($svg, '(?s)<g clip-path="url\(#clip1_134_4286\)">(.*?)</g>\s*<path d="M752')
$leftInner = $leftMatch.Groups[1].Value

# Clean JSX in leftInner
$leftInner = $leftInner -replace 'clip-path="', 'clipPath="'
$leftInner = $leftInner -replace 'shape-rendering="', 'shapeRendering="'
$leftInner = $leftInner -replace 'style="mix-blend-mode:overlay"', 'style={{ mixBlendMode: ''overlay'' }}'

# Create the Left SVG component
$leftSvg = @"
<svg width="100%" height="auto" viewBox="0 0 688 890" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="birth-chart-phone-svg">
  $leftInner
  $defsContent
</svg>
"@

# Now construct the complete YourBirthChart.jsx component with real selectable HTML text & real HTML button
$newComponent = @"
import React, { useState } from 'react';
import './YourBirthChart.css';

export default function YourBirthChart() {
  const [showChartModal, setShowChartModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    time: '',
    city: '',
    focusArea: 'General Life Path'
  });
  const [chartState, setChartState] = useState('form'); // 'form', 'generating', 'result'
  const [generatedChart, setGeneratedChart] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setChartState('generating');
    
    // Simulate Vedic sidereal calculation
    setTimeout(() => {
      setGeneratedChart({
        ascendant: 'Taurus (Vrishabha)',
        moonSign: 'Scorpio (Vrishchika)',
        sunSign: 'Leo (Simha)',
        nakshatra: 'Anuradha (Pada 2)',
        currentDasha: 'Jupiter - Saturn (Guru-Shani)',
        keyInsight: 'Your chart indicates a strong capacity for intuitive perception balanced with deliberate, grounded action. Key transitions ahead favor relationship clarity and purposeful creative endeavors.'
      });
      setChartState('result');
    }, 1200);
  };

  const handleClose = () => {
    setShowChartModal(false);
    setChartState('form');
  };

  return (
    <section className="your-birth-chart-section" id="your-personal-chart">
      <div className="your-birth-chart-container">
        
        {/* Left Column: Phone Mockup & Cosmos Visual */}
        <div className="birth-chart-visual-col">
          $leftSvg
        </div>

        {/* Right Column: Real Selectable Text & Clickable Button */}
        <div className="birth-chart-content-col">
          <div className="birth-chart-content-inner">
            <span className="birth-chart-subhead">YOUR PERSONAL CHART</span>
            
            <h2 className="birth-chart-heading">
              Your birth chart is a map.<br />
              <span className="birth-chart-serif-highlight">Your life gives it meaning.</span>
            </h2>

            <p className="birth-chart-body">
              Your birth details can offer a deeper perspective on your patterns, tendencies, energies and ways of moving through life.
            </p>

            <button 
              type="button" 
              className="birth-chart-cta-btn"
              onClick={() => setShowChartModal(true)}
              aria-label="Make My Chart"
            >
              Make My Chart
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Birth Chart Generation Modal */}
      {showChartModal && (
        <div className="birth-chart-modal-backdrop" onClick={handleClose}>
          <div className="birth-chart-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="birth-chart-modal-close" 
              onClick={handleClose}
              aria-label="Close modal"
            >
              ✕
            </button>

            {chartState === 'form' && (
              <div className="birth-chart-modal-body">
                <span className="birth-chart-modal-badge">AKASHVANI VEDIC COMPUTATION</span>
                <h3 className="birth-chart-modal-title">Generate Your Birth Chart</h3>
                <p className="birth-chart-modal-subtitle">
                  Enter your birth coordinates to reveal your planetary placements, ascendant, and current astrological periods.
                </p>

                <form onSubmit={handleGenerate} className="birth-chart-form">
                  <div className="birth-chart-field-group">
                    <label className="birth-chart-label">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="e.g. Maya Sharma" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="birth-chart-input"
                    />
                  </div>

                  <div className="birth-chart-row">
                    <div className="birth-chart-field-group">
                      <label className="birth-chart-label">Date of Birth</label>
                      <input 
                        type="date" 
                        name="dob" 
                        value={formData.dob} 
                        onChange={handleInputChange} 
                        required 
                        className="birth-chart-input"
                      />
                    </div>
                    <div className="birth-chart-field-group">
                      <label className="birth-chart-label">Time of Birth</label>
                      <input 
                        type="time" 
                        name="time" 
                        value={formData.time} 
                        onChange={handleInputChange} 
                        required 
                        className="birth-chart-input"
                      />
                    </div>
                  </div>

                  <div className="birth-chart-row">
                    <div className="birth-chart-field-group">
                      <label className="birth-chart-label">Place of Birth (City, Country)</label>
                      <input 
                        type="text" 
                        name="city" 
                        placeholder="e.g. Mumbai, India" 
                        value={formData.city} 
                        onChange={handleInputChange} 
                        required 
                        className="birth-chart-input"
                      />
                    </div>
                    <div className="birth-chart-field-group">
                      <label className="birth-chart-label">Primary Exploration Focus</label>
                      <select 
                        name="focusArea" 
                        value={formData.focusArea} 
                        onChange={handleInputChange} 
                        className="birth-chart-select"
                      >
                        <option value="General Life Path">General Life Path</option>
                        <option value="Relationships & Compatibility">Relationships & Dynamics</option>
                        <option value="Career & Purpose">Career, Purpose & Timing</option>
                        <option value="Health & Inner Wellbeing">Inner Wellbeing & Balance</option>
                      </select>
                    </div>
                  </div>

                  <div className="birth-chart-actions">
                    <button type="submit" className="birth-chart-submit-cta">
                      Calculate My Planetary Map ➔
                    </button>
                  </div>
                </form>
              </div>
            )}

            {chartState === 'generating' && (
              <div className="birth-chart-loading-state">
                <div className="birth-chart-spinner"></div>
                <h4 className="birth-chart-loading-title">Calculating Ephemeris & Nakshatra Placements...</h4>
                <p className="birth-chart-loading-desc">Mapping planetary degrees based on sidereal Vedic coordinates.</p>
              </div>
            )}

            {chartState === 'result' && generatedChart && (
              <div className="birth-chart-result-state">
                <span className="birth-chart-modal-badge">BIRTH CHART CALCULATED</span>
                <h3 className="birth-chart-modal-title">
                  {formData.name ? (formData.name + "'s Chart") : "Your Personal Chart"}
                </h3>
                <p className="birth-chart-modal-subtitle">
                  Calculated using Vedic Sidereal Astrological Coordinates for {formData.city || 'your birth location'}.
                </p>

                <div className="birth-chart-grid-cards">
                  <div className="birth-chart-stat-card">
                    <span className="stat-label">ASCENDANT (LAGNA)</span>
                    <span className="stat-value">{generatedChart.ascendant}</span>
                  </div>
                  <div className="birth-chart-stat-card">
                    <span className="stat-label">MOON SIGN (RASHI)</span>
                    <span className="stat-value">{generatedChart.moonSign}</span>
                  </div>
                  <div className="birth-chart-stat-card">
                    <span className="stat-label">SUN SIGN</span>
                    <span className="stat-value">{generatedChart.sunSign}</span>
                  </div>
                  <div className="birth-chart-stat-card">
                    <span className="stat-label">BIRTH NAKSHATRA</span>
                    <span className="stat-value">{generatedChart.nakshatra}</span>
                  </div>
                </div>

                <div className="birth-chart-insight-box">
                  <h4 className="insight-title">Vedic Chart Synthesis:</h4>
                  <p className="insight-text">{generatedChart.keyInsight}</p>
                </div>

                <div className="birth-chart-modal-footer">
                  <button 
                    type="button" 
                    className="birth-chart-consult-cta"
                    onClick={() => {
                      handleClose();
                      const meetSec = document.getElementById('meet-the-team');
                      if (meetSec) meetSec.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Consult With a Vedic Practitioner ➔
                  </button>
                  <button 
                    type="button" 
                    className="birth-chart-reset-btn"
                    onClick={() => setChartState('form')}
                  >
                    Recalculate
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
"@

[System.IO.File]::WriteAllText("client/src/components/home/YourBirthChart.jsx", $newComponent, [System.Text.Encoding]::UTF8)
Write-Host "Created fully interactive & selectable YourBirthChart.jsx"
