const fs = require('fs');

const archComponent = `import React from 'react';
import heroGirl from '../../assets/hero-girl.jpg';

const ArchIllustration = ({ className = "" }) => {
  return (
    <div className={\`arch-illustration-container \${className}\`}>
      <svg 
        width="499" 
        height="359" 
        viewBox="0 0 499 359" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="master-arch-svg"
      >
        {/* Mask for Arch Doorway Photo */}
        <mask id="masterArchMask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="82" y="0" width="330" height="359">
          <path d="M274.201 0C350.274 4.38323e-05 411.943 50.883 411.943 113.65V358.3H82.3594V113.65C82.3594 50.883 144.029 6.35484e-05 220.101 0H274.201Z" fill="#FFFFFF"/>
        </mask>

        {/* Center Arch Doorway Content */}
        <g mask="url(#masterArchMask)">
          <image 
            href={heroGirl}
            xlinkHref={heroGirl}
            x="82"
            y="-40"
            width="330"
            height="438"
            preserveAspectRatio="xMidYMid slice"
          />
          {/* Bottom fade gradient over image to blend into background */}
          <path d="M274.201 0C350.274 2.06014e-05 411.943 50.8834 411.943 113.65V358.3H82.3594V113.649C82.3596 50.8826 144.029 2.52334e-05 220.102 0H274.201Z" fill="url(#archFadeGradient)"/>
        </g>

        {/* Left Branch Stem */}
        <path d="M81.4994 335.203L81.1485 335.2C81.3597 326.89 79.3184 317.026 76.3522 305.377C73.3901 293.744 69.5071 280.337 66.0697 265.004C59.1909 234.321 54.0792 195.864 61.583 148.055L61.9297 148.104L62.2764 148.152C54.7904 195.847 59.8885 234.211 66.7546 264.837C70.1896 280.159 74.0628 293.528 77.0325 305.191C79.998 316.837 82.0641 326.787 81.8502 335.205L81.4994 335.203Z" fill="#031633"/>

        {/* Left Branch Leaves */}
        <path d="M59.0272 207.85C62.0022 192.54 74.208 162.701 99.2311 165.826C97.237 179.384 86.4044 206.769 59.0272 207.85Z" fill="url(#leafGradient)"/>
        <path d="M61.4071 162.253C52.9228 149.824 40.5181 120.089 58.7739 100.583C66.6999 111.039 78.3229 138.011 61.4071 162.253Z" fill="url(#leafGradient)"/>
        <path d="M57.3718 188.789C43.4754 187.709 15.4576 178.473 14.5579 150.165C26.7702 150.409 52.4303 158.474 57.3718 188.789Z" fill="url(#leafGradient)"/>
        <path d="M59.9102 241.083C46.0034 241.976 17.1761 236.775 13.1217 208.819C25.2644 207.333 51.6219 211.707 59.9102 241.083Z" fill="url(#leafGradient)"/>
        <path d="M64.4435 252.321C67.9634 237.158 81.2261 207.896 106.117 212.15C103.64 225.607 91.8372 252.48 64.4435 252.321Z" fill="url(#leafGradient)"/>
        <path d="M72.119 285.376C76.2151 277.935 87.5726 264.774 100.234 271.652C96.9443 278.375 86.7153 290.532 72.119 285.376Z" fill="url(#leafGradient)"/>
        <path d="M73.956 301.105C66.1771 301.172 50.2253 297.375 48.6498 281.656C55.4592 281.204 70.0537 284.463 73.956 301.105Z" fill="url(#leafGradient)"/>

        {/* Right Branch Stem */}
        <path d="M407.661 339.591L408.011 339.607C408.151 331.295 410.607 321.552 414.063 310.075C417.514 298.614 421.959 285.429 426.041 270.298C434.21 240.018 440.943 201.878 435.469 153.721L435.121 153.751L434.773 153.782C440.234 201.823 433.519 239.87 425.365 270.094C421.286 285.215 416.852 298.362 413.392 309.852C409.938 321.326 407.453 331.154 407.311 339.575L407.661 339.591Z" fill="#031633"/>

        {/* Right Branch Leaves */}
        <path d="M435.495 213.586C433.171 198.134 422.241 167.675 397.114 169.457C398.532 183.106 408.194 211.04 435.495 213.586Z" fill="url(#leafGradient)"/>
        <path d="M435.045 167.913C444.046 155.952 457.694 126.915 440.284 106.453C431.925 116.473 419.174 142.792 435.045 167.913Z" fill="url(#leafGradient)"/>
        <path d="M437.953 194.634C451.88 194.3 480.256 186.574 482.352 158.347C470.144 157.936 444.171 164.619 437.953 194.634Z" fill="url(#leafGradient)"/>
        <path d="M433.204 246.731C447.058 248.369 476.074 244.717 481.306 217.011C469.239 214.877 442.726 217.834 433.204 246.731Z" fill="url(#leafGradient)"/>
        <path d="M428.203 257.716C425.329 242.382 413.319 212.442 388.276 215.36C390.181 228.933 400.834 256.408 428.203 257.716Z" fill="url(#leafGradient)"/>
        <path d="M419.138 290.323C415.361 282.671 404.573 268.916 391.635 275.109C394.637 282 404.34 294.691 419.138 290.323Z" fill="url(#leafGradient)"/>
        <path d="M416.638 305.936C424.405 306.419 440.499 303.48 442.738 287.863C435.955 287.048 421.24 289.521 416.638 305.936Z" fill="url(#leafGradient)"/>

        {/* Gradients */}
        <defs>
          <linearGradient id="archFadeGradient" x1="247.15" y1="225.228" x2="247.15" y2="358.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5F0EA" stopOpacity="0"/>
            <stop offset="1" stopColor="#F5F0EA"/>
          </linearGradient>
          <linearGradient id="leafGradient" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop stopColor="#BD5B3B"/>
            <stop offset="1" stopColor="#E0C58E"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Avatar Badge on Right */}
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

fs.writeFileSync('client/src/components/home/ArchIllustration.jsx', archComponent);
console.log('Master ArchIllustration.jsx built successfully!');
