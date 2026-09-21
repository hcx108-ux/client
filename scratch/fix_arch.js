const fs = require('fs');

const existingCode = fs.readFileSync('client/src/components/home/ArchIllustration.jsx', 'utf8');
const match = existingCode.match(/data:image\/jpeg;base64,[^"]+/);
const base64Data = match ? match[0] : '';

console.log('Extracted base64 length:', base64Data.length);

const archJsx = `import React from 'react';

const ArchIllustration = ({ className = "" }) => {
  return (
    <div className="arch-illustration-container">
      <svg width="330" height="359" viewBox="0 0 330 359" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <mask id="mask0_164_238" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="330" height="359">
          <path d="M191.842 0C267.915 4.38323e-05 329.584 50.883 329.584 113.65V358.3H0V113.65C0 50.883 61.6692 6.35484e-05 137.742 0H191.842Z" fill="url(#paint0_linear_164_238)"/>
        </mask>
        <g mask="url(#mask0_164_238)">
          <path d="M191.842 0C267.915 2.06014e-05 329.584 50.8834 329.584 113.65V358.3H0V113.649C0.000257154 50.8826 61.6694 2.52334e-05 137.742 0H191.842Z" fill="url(#pattern0_164_238)"/>
          <path d="M191.842 0C267.915 2.06014e-05 329.584 50.8834 329.584 113.65V358.3H0V113.649C0.000257154 50.8826 61.6694 2.52334e-05 137.742 0H191.842Z" fill="url(#paint1_linear_164_238)"/>
        </g>
        <defs>
          <pattern id="pattern0_164_238" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_164_238" transform="matrix(0.000833333 0 0 0.000766546 0 -0.110554)"/>
          </pattern>
          <linearGradient id="paint0_linear_164_238" x1="164.792" y1="277.611" x2="164.792" y2="358.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#031633"/>
            <stop offset="1" stopColor="#031633" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_164_238" x1="164.792" y1="225.228" x2="164.792" y2="358.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5F0EA" stopOpacity="0"/>
            <stop offset="1" stopColor="#F5F0EA"/>
          </linearGradient>
          <image id="image0_164_238" width="1200" height="1593" preserveAspectRatio="none" xlinkHref="${base64Data}"/>
        </defs>
      </svg>
      <div className="arch-floating-badge">
        <div className="badge-avatar-inner">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5F0EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 4 0 0 0-4-4H8a4 4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ArchIllustration;
`;

fs.writeFileSync('client/src/components/home/ArchIllustration.jsx', archJsx);
console.log('Successfully written ArchIllustration.jsx!');
