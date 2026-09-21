$curveD = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\path_0.txt")
$icon1D = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\path_5.txt")
$icon2D = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\path_10.txt")
$icon3D = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\path_16.txt")
$icon4D = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\path_15.txt")

$jsxComponent = @"
import React from 'react';
import './OffersSection.css';

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="offers-container">
        {/* Top Header */}
        <div className="offers-header">
          <h2 className="offers-title">What Akashvani Offers</h2>
          <p className="offers-subtitle">Start with what's on your mind.</p>
        </div>

        {/* Master SVG Canvas for Wavy Line & Nodes */}
        <div className="offers-svg-wrapper">
          <svg 
            width="1440" 
            height="922" 
            viewBox="0 0 1440 922" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="offers-master-svg"
          >
            {/* Background Wavy Line */}
            <path 
              d="$curveD" 
              fill="#F5F0EA" 
              fillOpacity="0.4"
            />

            {/* Drop Shadow Filters */}
            <defs>
              <filter id="badgeShadow" x="0" y="0" width="120%" height="120%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.25"/>
              </filter>
            </defs>

            {/* NODE 01 (Top-Left, x: 420, y: 301) */}
            <g className="node-group node-01" transform="translate(0, 0)">
              {/* Number Tag Badge */}
              <circle cx="420" cy="244" r="14" fill="#F5F0EA" />
              <text x="420" y="248" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">01</text>
              
              {/* Main Icon Badge Circle */}
              <circle cx="420" cy="301" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              
              {/* Icon Vector */}
              <g transform="translate(0, 0)">
                <path d="$icon1D" fill="#F5F0EA" />
              </g>
            </g>

            {/* NODE 02 (Top-Right, x: 1020, y: 301) */}
            <g className="node-group node-02" transform="translate(0, 0)">
              {/* Number Tag Badge */}
              <circle cx="1020" cy="244" r="14" fill="#F5F0EA" />
              <text x="1020" y="248" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">02</text>
              
              {/* Main Icon Badge Circle */}
              <circle cx="1020" cy="301" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              
              {/* Icon Vector */}
              <g transform="translate(0, 0)">
                <path d="$icon2D" fill="#F5F0EA" />
              </g>
            </g>

            {/* NODE 03 (Bottom-Right, x: 1020, y: 655) */}
            <g className="node-group node-03" transform="translate(0, 0)">
              {/* Number Tag Badge */}
              <circle cx="1020" cy="598" r="14" fill="#F5F0EA" />
              <text x="1020" y="602" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">03</text>
              
              {/* Main Icon Badge Circle */}
              <circle cx="1020" cy="655" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              
              {/* Icon Vector */}
              <g transform="translate(0, 0)">
                <path d="$icon3D" fill="#F5F0EA" />
              </g>
            </g>

            {/* NODE 04 (Bottom-Left, x: 420, y: 655) */}
            <g className="node-group node-04" transform="translate(0, 0)">
              {/* Number Tag Badge */}
              <circle cx="420" cy="598" r="14" fill="#F5F0EA" />
              <text x="420" y="602" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">04</text>
              
              {/* Main Icon Badge Circle */}
              <circle cx="420" cy="655" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              
              {/* Icon Vector */}
              <g transform="translate(0, 0)">
                <path d="$icon4D" fill="#F5F0EA" />
              </g>
            </g>
          </svg>

          {/* HTML Overlay Text Nodes for Crisp Typography & Responsive Align */}
          <div className="node-text-overlay node-text-01" style={{ left: '29.1%', top: '385px' }}>
            <h3 className="node-title">Tell Us</h3>
            <p className="node-description">Share what you're navigating.</p>
          </div>

          <div className="node-text-overlay node-text-02" style={{ left: '70.8%', top: '385px' }}>
            <h3 className="node-title">Understand</h3>
            <p className="node-description">Explore your situation through your story and formulate your personal chart</p>
          </div>

          <div className="node-text-overlay node-text-03" style={{ left: '70.8%', top: '738px' }}>
            <h3 className="node-title">Connect</h3>
            <p className="node-description">Meet an expert suited to what you're looking for.</p>
          </div>

          <div className="node-text-overlay node-text-04" style={{ left: '29.1%', top: '738px' }}>
            <h3 className="node-title">Go Deeper</h3>
            <p className="node-description">Continue with guidance and practices when you need them.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
"@

[System.IO.File]::WriteAllText("c:\react project\figma-akashvani\client\src\components\home\OffersSection.jsx", $jsxComponent)
Write-Host "Wrote OffersSection.jsx successfully!"

# Write OffersSection.css
$cssContent = @"
.offers-section {
  width: 100%;
  background-color: #031633;
  color: #F5F0EA;
  padding: 80px 0 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: inherit;
}

.offers-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.offers-header {
  width: 100%;
  padding-left: 120px;
  text-align: left;
  margin-bottom: 20px;
  z-index: 5;
}

.offers-title {
  font-size: 38px;
  font-weight: 500;
  color: #F5F0EA;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
}

.offers-subtitle {
  font-size: 16px;
  color: #F5F0EA;
  opacity: 0.8;
  margin: 0;
  font-weight: 300;
}

.offers-svg-wrapper {
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 922px;
  display: flex;
  justify-content: center;
}

.offers-master-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.node-text-overlay {
  position: absolute;
  transform: translateX(-50%);
  text-align: center;
  width: 320px;
  z-index: 10;
  pointer-events: none;
}

.node-title {
  font-size: 22px;
  font-weight: 500;
  color: #F5F0EA;
  margin: 0 0 8px 0;
}

.node-description {
  font-size: 14px;
  color: #F5F0EA;
  opacity: 0.8;
  line-height: 1.4;
  margin: 0;
  font-weight: 300;
}

/* Responsive Scaling */
@media (max-width: 1200px) {
  .offers-header {
    padding-left: 40px;
    text-align: center;
  }
}
"@

[System.IO.File]::WriteAllText("c:\react project\figma-akashvani\client\src\components\home\OffersSection.css", $cssContent)
Write-Host "Wrote OffersSection.css successfully!"

