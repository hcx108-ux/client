$curveD = (Get-Content "scratch/curve_path.txt" -Raw).Trim()
$jsxFile = "client/src/components/home/OffersSection.jsx"
$jsxContent = Get-Content $jsxFile -Raw

# Extract icon paths from current OffersSection.jsx
# Node 01 icon
$icon1D = [regex]::Match($jsxContent, '(?s)<g className="node-group node-01">.*?<path d="([^"]+)"').Groups[1].Value
# Node 02 icon
$icon2D = [regex]::Match($jsxContent, '(?s)<g className="node-group node-02">.*?<path d="([^"]+)"').Groups[1].Value
# Node 03 icon
$icon3D = [regex]::Match($jsxContent, '(?s)<g className="node-group node-03">.*?<path d="([^"]+)"').Groups[1].Value
# Node 04 icon
$icon4D = [regex]::Match($jsxContent, '(?s)<g className="node-group node-04">.*?<path d="([^"]+)"').Groups[1].Value

Write-Host "icon1D len: $($icon1D.Length)"
Write-Host "icon2D len: $($icon2D.Length)"
Write-Host "icon3D len: $($icon3D.Length)"
Write-Host "icon4D len: $($icon4D.Length)"

$newJsx = @"
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
            height="860" 
            viewBox="0 0 1440 860" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="offers-master-svg"
          >
            {/* Background Wavy Line */}
            <path 
              d="${curveD}" 
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
              <g transform="translate(0, 0)">
                <path d="${icon1D}" fill="#F5F0EA" />
              </g>
            </g>

            {/* NODE 02 (Top-Right, x: 1020, y: 301) - Understand */}
            <g className="node-group node-02">
              <circle cx="991" cy="244" r="14" fill="#F5F0EA" />
              <text x="991" y="248" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">02</text>
              <circle cx="1020" cy="301" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Speech Bubble Icon */}
              <g transform="translate(0, 0)">
                <path d="${icon2D}" fill="#F5F0EA" />
              </g>
            </g>

            {/* NODE 03 (Bottom-Right, x: 1020, y: 655) - Connect */}
            <g className="node-group node-03">
              <circle cx="991" cy="598" r="14" fill="#F5F0EA" />
              <text x="991" y="602" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">03</text>
              <circle cx="1020" cy="655" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Connect / Speech Bubble Variant Icon */}
              <g transform="translate(144, 354)">
                <path d="${icon3D}" fill="#F5F0EA" />
              </g>
            </g>

            {/* NODE 04 (Bottom-Left, x: 420, y: 655) - Go Deeper */}
            <g className="node-group node-04">
              <circle cx="391" cy="598" r="14" fill="#F5F0EA" />
              <text x="391" y="602" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">04</text>
              <circle cx="420" cy="655" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Figure / Meditation Icon */}
              <g transform="translate(0, 0)">
                <path d="${icon4D}" fill="#F5F0EA" />
              </g>
            </g>
          </svg>

          {/* HTML Overlay Text Nodes for Crisp Typography & Responsive Alignment */}
          <div className="node-text-overlay node-text-01" style={{ left: '29.1%', top: '375px' }}>
            <h3 className="node-title">Tell Us</h3>
            <p className="node-description">Share what you're navigating.</p>
          </div>

          <div className="node-text-overlay node-text-02" style={{ left: '70.8%', top: '375px' }}>
            <h3 className="node-title">Understand</h3>
            <p className="node-description">Explore your situation through your story and formulate your personal chart</p>
          </div>

          <div className="node-text-overlay node-text-03" style={{ left: '70.8%', top: '730px' }}>
            <h3 className="node-title">Connect</h3>
            <p className="node-description">Meet an expert suited to what you're looking for.</p>
          </div>

          <div className="node-text-overlay node-text-04" style={{ left: '29.1%', top: '730px' }}>
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

[System.IO.File]::WriteAllText($jsxFile, $newJsx)
Write-Host "Successfully updated OffersSection.jsx!"
