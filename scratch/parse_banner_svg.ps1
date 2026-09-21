$svgContent = Get-Content -Raw -Path 'scratch/feature_banner.svg'

# Convert SVG string for JSX
$jsxSvg = $svgContent -replace 'xmlns:xlink=', 'xmlnsXlink='
$jsxSvg = $jsxSvg -replace 'xml:space=', 'xmlSpace='
$jsxSvg = $jsxSvg -replace 'stroke-width=', 'strokeWidth='
$jsxSvg = $jsxSvg -replace 'stroke-linecap=', 'strokeLinecap='
$jsxSvg = $jsxSvg -replace 'stroke-linejoin=', 'strokeLinejoin='
$jsxSvg = $jsxSvg -replace 'stroke-miterlimit=', 'strokeMiterlimit='
$jsxSvg = $jsxSvg -replace 'fill-rule=', 'fillRule='
$jsxSvg = $jsxSvg -replace 'clip-rule=', 'clipRule='
$jsxSvg = $jsxSvg -replace 'fill-opacity=', 'fillOpacity='
$jsxSvg = $jsxSvg -replace 'stroke-opacity=', 'strokeOpacity='
$jsxSvg = $jsxSvg -replace 'stop-color=', 'stopColor='
$jsxSvg = $jsxSvg -replace 'stop-opacity=', 'stopOpacity='
$jsxSvg = $jsxSvg -replace 'mask-type=', 'maskType='

# Replace root <svg attributes
$jsxSvg = $jsxSvg -replace '<svg width="1440" height="247"', '<svg viewBox="0 0 1440 247" className="feature-banner-svg"'

$componentCode = @"
import React from 'react';
import './FeatureBanner.css';

const FeatureBanner = () => {
  return (
    <section className="feature-banner-section">
      <div className="feature-banner-container">
        $jsxSvg
      </div>
    </section>
  );
};

export default FeatureBanner;
"@

$componentCode | Out-File -FilePath 'client/src/components/home/FeatureBanner.jsx' -Encoding utf8
Write-Host "FeatureBanner.jsx re-generated successfully!"
