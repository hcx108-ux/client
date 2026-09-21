$svgContent = (Get-Content "scratch/raw_figma_1018.svg" -Raw).Trim()

# Ensure class attributes or clean SVG format if needed for JSX
# Replace fill-opacity with fillOpacity if present
$jsxSvg = $svgContent -replace 'fill-opacity=', 'fillOpacity=' -replace 'shape-rendering=', 'shapeRendering='

$jsxCode = @"
import React from 'react';
import './OffersSection.css';

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="offers-container">
        <div className="offers-svg-wrapper">
          ${jsxSvg}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
"@

[System.IO.File]::WriteAllText("client/src/components/home/OffersSection.jsx", $jsxCode)
Write-Host "Updated OffersSection.jsx with complete Figma SVG! Length: $($jsxCode.Length)"
