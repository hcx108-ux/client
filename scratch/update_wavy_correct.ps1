$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath

$wavyD = ""
for ($i = $lines.Count - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match 'M-30\.3149 1\.21785') {
        $json = $lines[$i] | ConvertFrom-Json
        $txt = $json.content
        $wavyD = [regex]::Match($txt, 'd="([^"]+)"').Groups[1].Value
        Write-Host "Found wavy line at step $($json.step_index)! Length: $($wavyD.Length)"
        break
    }
}

if ($wavyD.Length -gt 100) {
    $p8 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_8.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'
    $p16 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_16.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'
    $p24 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_24.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'
    $p25 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_25.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'
    $p26 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_26.txt" -Raw) -replace '.*d="([^"]+)".*', '$1'

    $jsxFile = "c:\react project\figma-akashvani\client\src\components\home\OffersSection.jsx"

    $jsxRebuilt = @"
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
            height="730" 
            viewBox="0 0 1440 730" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="offers-master-svg"
          >
            {/* Background Wavy Line */}
            <path 
              d="${wavyD}" 
              fill="#F5F0EA" 
              fillOpacity="0.5"
            />

            {/* Drop Shadow Filters */}
            <defs>
              <filter id="badgeShadow" x="0" y="0" width="120%" height="120%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.25"/>
              </filter>
            </defs>

            {/* NODE 01 (Top-Left, x: 420, y: 103) - Tell Us */}
            <g className="node-group node-01">
              <circle cx="391" cy="46" r="14" fill="#F5F0EA" />
              <text x="391" y="50" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">01</text>
              <circle cx="420" cy="103" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Snake / S Icon */}
              <g transform="translate(144, 0)">
                <path d="${p8}" fill="#F5F0EA" />
              </g>
            </g>

            {/* NODE 02 (Top-Right, x: 1020, y: 103) - Understand */}
            <g className="node-group node-02">
              <circle cx="991" cy="46" r="14" fill="#F5F0EA" />
              <text x="991" y="50" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">02</text>
              <circle cx="1020" cy="103" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Speech Bubble Icon */}
              <g transform="translate(144, 0)">
                <path d="${p16}" fill="#F5F0EA" />
              </g>
            </g>

            {/* NODE 03 (Bottom-Right, x: 1020, y: 457) - Connect */}
            <g className="node-group node-03">
              <circle cx="991" cy="400" r="14" fill="#F5F0EA" />
              <text x="991" y="404" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">03</text>
              <circle cx="1020" cy="457" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Star / Asterisk Flower Icon */}
              <g transform="translate(1020, 457)">
                <path d="M0 -22 L4 -6 L20 -20 L10 -2 L22 8 L6 8 L10 24 L0 14 L-10 24 L-6 8 L-22 8 L-10 -2 L-20 -20 L-4 -6 Z" fill="#F5F0EA" />
                <circle cx="0" cy="0" r="6" fill="#BD5B3B" stroke="#F5F0EA" strokeWidth="2" />
              </g>
            </g>

            {/* NODE 04 (Bottom-Left, x: 420, y: 457) - Go Deeper */}
            <g className="node-group node-04">
              <circle cx="391" cy="400" r="14" fill="#F5F0EA" />
              <text x="391" y="404" fill="#031633" fontSize="12" fontWeight="700" textAnchor="middle">04</text>
              <circle cx="420" cy="457" r="43" fill="#BD5B3B" stroke="#D0C6B6" strokeWidth="2" filter="url(#badgeShadow)" />
              {/* Figure / Meditation Icon */}
              <g transform="translate(0, -198)">
                <path d="${p24}" fill="#F5F0EA" />
                <path d="${p25}" fill="#F5F0EA" />
                <path d="${p26}" fill="#F5F0EA" />
              </g>
            </g>
          </svg>

          {/* HTML Overlay Text Nodes for Crisp Typography & Responsive Alignment */}
          <div className="node-text-overlay node-text-01" style={{ left: '29.1%', top: '185px' }}>
            <h3 className="node-title">Tell Us</h3>
            <p className="node-description">Share what you're navigating.</p>
          </div>

          <div className="node-text-overlay node-text-02" style={{ left: '70.8%', top: '185px' }}>
            <h3 className="node-title">Understand</h3>
            <p className="node-description">Explore your situation through your story and formulate your personal chart</p>
          </div>

          <div className="node-text-overlay node-text-03" style={{ left: '70.8%', top: '538px' }}>
            <h3 className="node-title">Connect</h3>
            <p className="node-description">Meet an expert suited to what you're looking for.</p>
          </div>

          <div className="node-text-overlay node-text-04" style={{ left: '29.1%', top: '538px' }}>
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

    $jsxRebuilt | Out-File $jsxFile -Encoding utf8
    Write-Host "Successfully rebuilt OffersSection.jsx with exact new wavy line path! Length: $($jsxRebuilt.Length)"
} else {
    Write-Host "ERR: Could not extract wavy line d string!"
}
