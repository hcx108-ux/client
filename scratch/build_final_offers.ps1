$p8 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_8.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'
$p16 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_16.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'
$p24 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_24.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'
$p25 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_25.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'
$p26 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_26.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'

$wavy = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_0.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'

$jsx = @"
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
              d="${wavy}" 
              fill="#F5F0EA" 
              fillOpacity="0.4"
            />

            {/* Drop Shadow Filters */}
            <defs>
              <filter id="badgeShadow" x="0" y="0" width="120%" height="120%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.25"/>
              </filter>
            </defs>

            {/* NODE 01 (Top-Left, x: 420, y: 301) - Tell Us */}
            <g className="node-group node-01">
              <circle cx="391" cy="244" r="14" fill="#F5F0EA" />
              <text x="391" y="248" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">01</text>
              <circle cx="420" cy="301" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Snake / S Icon */}
              <path d="${p8}" fill="#F5F0EA" />
            </g>

            {/* NODE 02 (Top-Right, x: 1020, y: 301) - Understand */}
            <g className="node-group node-02">
              <circle cx="991" cy="244" r="14" fill="#F5F0EA" />
              <text x="991" y="248" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">02</text>
              <circle cx="1020" cy="301" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Speech Bubble Icon */}
              <path d="${p16}" fill="#F5F0EA" />
            </g>

            {/* NODE 03 (Bottom-Right, x: 1020, y: 655) - Connect */}
            <g className="node-group node-03">
              <circle cx="991" cy="598" r="14" fill="#F5F0EA" />
              <text x="991" y="602" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">03</text>
              <circle cx="1020" cy="655" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Star / Asterisk Flower Icon */}
              <g transform="translate(1020, 655)">
                <path d="M0 -22 L4 -6 L20 -20 L10 -2 L22 8 L6 8 L10 24 L0 14 L-10 24 L-6 8 L-22 8 L-10 -2 L-20 -20 L-4 -6 Z" fill="#F5F0EA" />
                <circle cx="0" cy="0" r="6" fill="#BD5B3B" stroke="#F5F0EA" strokeWidth="2" />
              </g>
            </g>

            {/* NODE 04 (Bottom-Left, x: 420, y: 655) - Go Deeper */}
            <g className="node-group node-04">
              <circle cx="391" cy="598" r="14" fill="#F5F0EA" />
              <text x="391" y="602" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">04</text>
              <circle cx="420" cy="655" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Figure / Meditation Icon */}
              <path d="${p24}" fill="#F5F0EA" />
              <path d="${p25}" fill="#F5F0EA" />
              <path d="${p26}" fill="#F5F0EA" />
            </g>
          </svg>

          {/* HTML Overlay Text Nodes for Crisp Typography & Responsive Alignment */}
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

$jsx | Out-File "c:\react project\figma-akashvani\client\src\components\home\OffersSection.jsx" -Encoding utf8
Write-Host "OffersSection.jsx updated successfully! Length: $($jsx.Length)"
