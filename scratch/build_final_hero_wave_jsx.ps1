$raw = Get-Content "scratch/user_input_578_raw.txt" -Raw

# Unescape JSON
$raw = $raw.Replace('\"', '"').Replace('\n', "`n").Replace('\r', '')

# Match all <svg ...> ... </svg>
$svgMatches = [regex]::Matches($raw, '(?s)<svg[^>]*>.*?</svg>')
Write-Host "Total SVGs found: $($svgMatches.Count)"

$jsxContent = @"
import React from 'react';
import './WavyBackground.css';

const WavyBackground = () => {
  return (
    <div className="wavy-background-container" aria-hidden="true">
"@

for ($i = 0; $i -lt $svgMatches.Count; $i++) {
    $svg = $svgMatches[$i].Value
    
    # Format attribute names for JSX
    $svg = $svg -replace 'fill-opacity=', 'fillOpacity='
    $svg = $svg -replace 'fill-rule=', 'fillRule='
    $svg = $svg -replace 'clip-rule=', 'clipRule='
    $svg = $svg -replace 'stroke-width=', 'strokeWidth='
    $svg = $svg -replace 'stroke-linecap=', 'strokeLinecap='
    $svg = $svg -replace 'stroke-linejoin=', 'strokeLinejoin='
    
    # Increase visibility of wave lines on light background:
    # Use #031633 with 0.12 opacity (or keep fill="white" with fillOpacity="0.45")
    # Let's use fill="#031633" fillOpacity="0.12" so they are clearly visible subtle wave lines
    $svg = $svg -replace 'fill="white"', 'fill="#031633"'
    $svg = $svg -replace 'fillOpacity="0\.25"', 'fillOpacity="0.12"'
    
    # Add className
    $svg = $svg -replace '<svg ', '<svg className="wavy-background-svg" preserveAspectRatio="xMidYMin slice" '
    
    $jsxContent += "`n      $svg"
}

$jsxContent += @"

    </div>
  );
};

export default WavyBackground;
"@

Set-Content -Path "client/src/components/home/WavyBackground.jsx" -Value $jsxContent
Write-Host "WavyBackground.jsx successfully built!"
