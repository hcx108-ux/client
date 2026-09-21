$svg = [System.IO.File]::ReadAllText("client/src/assets/your_birth_chart.svg", [System.Text.Encoding]::UTF8)

# CamelCase JSX attributes
$svg = $svg -replace 'clip-path="', 'clipPath="'
$svg = $svg -replace 'shape-rendering="', 'shapeRendering="'
$svg = $svg -replace 'color-interpolation-filters="', 'colorInterpolationFilters="'
$svg = $svg -replace 'xlink:href="', 'xlinkHref="'
$svg = $svg -replace 'xmlns:xlink="', 'xmlnsXlink="'
$svg = $svg -replace 'fill-opacity="', 'fillOpacity="'
$svg = $svg -replace 'stop-color="', 'stopColor="'
$svg = $svg -replace 'stop-opacity="', 'stopOpacity="'
$svg = $svg -replace 'flood-opacity="', 'floodOpacity="'
$svg = $svg -replace 'style="mix-blend-mode:overlay"', 'style={{ mixBlendMode: ''overlay'' }}'

# Wrap the button <g filter="url(#filter1_d_134_4286)"> with interactive wrapper
$oldBtnPattern = '(?s)<g filter="url\(#filter1_d_134_4286\)">\s*<path d="M752 580C752 563.984 764.984 551 781 551H939C955.016 551 968 563.984 968 580C968 596.016 955.016 609 939 609H781C764.984 609 752 596.016 752 580Z" fill="#BD5B3B"/>\s*<path d="M796.422 574.508.*?</g>'

$newBtn = @'
<g 
  filter="url(#filter1_d_134_4286)" 
  className="make-my-chart-btn"
  onClick={() => setShowChartModal(true)}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setShowChartModal(true);
    }
  }}
  role="button"
  tabIndex={0}
  aria-label="Make My Chart - Generate your personalized Vedic birth chart"
>
  <path d="M752 580C752 563.984 764.984 551 781 551H939C955.016 551 968 563.984 968 580C968 596.016 955.016 609 939 609H781C764.984 609 752 596.016 752 580Z" fill="#BD5B3B" className="make-my-chart-btn-bg"/>
  <path d="M796.422 574.508H798.562L801.219 582.523L803.914 574.508H806.023L807.961 586H805.852L804.617 578.742L802.172 586H800.242L797.828 574.508ZM813.883 586V574.508H815.758V586H813.883ZM820.734 574.508H822.875L825.531 582.523L828.227 574.508H830.336L832.273 586H830.164L828.93 578.742L826.484 586H824.555L822.141 574.508ZM840.188 586H838.312V574.508H840.188V586ZM849.539 586L846.883 580.852H844.75V586H842.875V574.508H847.43C848.883 574.508 849.992 574.836 850.758 575.492C851.523 576.148 851.906 577.062 851.906 578.234C851.906 579.188 851.586 579.984 850.945 580.625C850.312 581.258 849.461 581.602 848.391 581.656L851.344 586H849.539ZM844.75 579.234H847.078C847.859 579.234 848.453 579.086 848.859 578.789C849.273 578.484 849.48 578.023 849.48 577.406C849.48 576.844 849.273 576.414 848.859 576.117C848.453 575.812 847.859 575.66 847.078 575.66H844.75V579.234ZM859.602 586L856.945 580.852H844.812V586H852.938V574.508H857.492C858.945 574.508 860.055 574.836 860.82 575.492C861.586 576.148 861.969 577.062 861.969 578.234C861.969 579.188 861.648 579.984 861.008 580.625C860.375 581.258 859.523 581.602 858.453 581.656L861.406 586H859.602ZM854.812 579.234H857.141C857.922 579.234 858.516 579.086 858.922 578.789C859.336 578.484 859.543 578.023 859.543 577.406C859.543 576.844 859.336 576.414 858.922 576.117C858.516 575.812 857.922 575.66 857.141 575.66H854.812V579.234ZM869.039 586V574.508H870.914V586H869.039ZM876.539 586V576.148H872.68V574.508H882.273V576.148H878.414V586H876.539Z" fill="#F5F0EA" className="make-my-chart-btn-text"/>
</g>
'@

# Replace button in SVG
$svgWithBtn = [regex]::Replace($svg, $oldBtnPattern, $newBtn)

# Also ensure svg has className="your-birth-chart-svg"
$svgWithBtn = $svgWithBtn -replace '<svg width="1440" height="890" viewBox="0 0 1440 890"', '<svg width="100%" height="auto" viewBox="0 0 1440 890" className="your-birth-chart-svg"'

Write-Host "Generated SVG block with interactive button"

# Now write complete React component file
$componentCode = @"
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
    
    // Simulate Vedic calculation
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
    }, 1400);
  };

  const handleClose = () => {
    setShowChartModal(false);
    setChartState('form');
  };

  return (
    <section className="your-birth-chart-section" id="your-personal-chart">
      <div className="your-birth-chart-container">
        $svgWithBtn
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
                <span className="birth-chart-badge">AKASHVANI VEDIC COMPUTATION</span>
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
                <span className="birth-chart-badge">BIRTH CHART CALCULATED</span>
                <h3 className="birth-chart-modal-title">
                  {formData.name ? `${formData.name}'s Chart` : 'Your Personal Chart'}
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

[System.IO.File]::WriteAllText("client/src/components/home/YourBirthChart.jsx", $componentCode, [System.Text.Encoding]::UTF8)
Write-Host "Successfully generated interactive YourBirthChart.jsx"
