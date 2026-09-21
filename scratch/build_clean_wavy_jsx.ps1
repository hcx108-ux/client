$content = Get-Content "scratch/hero_wave_svgs.txt" -Raw

# Replace escaped quotes if any
$content = $content.Replace('\"', '"').Replace('\n', "`n")

# Find <svg> ... </svg> blocks
$matches = [regex]::Matches($content, '(?s)<svg[^>]*>.*?</svg>')
Write-Host "Found $($matches.Count) SVG blocks"

$jsxHeader = @"
import React from 'react';
import './WavyBackground.css';

const WavyBackground = () => {
  return (
    <div className="wavy-background-container" aria-hidden="true">
"@

$jsxBody = ""
for ($i = 0; $i -lt $matches.Count; $i++) {
    $svg = $matches[$i].Value
    # Convert JSX attributes
    $svg = $svg -replace 'fill-opacity=', 'fillOpacity='
    $svg = $svg -replace 'fill-rule=', 'fillRule='
    $svg = $svg -replace 'clip-rule=', 'clipRule='
    $svg = $svg -replace 'stroke-width=', 'strokeWidth='
    $svg = $svg -replace 'stroke-linecap=', 'strokeLinecap='
    $svg = $svg -replace 'stroke-linejoin=', 'strokeLinejoin='
    
    # Change fill="white" fillOpacity="0.25" to fill="#031633" fillOpacity="0.14" for visibility on light cream background (#F5F0EA)
    $svg = $svg -replace 'fill="white"', 'fill="#031633"'
    $svg = $svg -replace 'fillOpacity="0\.25"', 'fillOpacity="0.14"'

    # Add class name to svg
    if ($svg -notmatch 'className=') {
        $svg = $svg -replace '<svg ', '<svg className="wavy-background-svg" preserveAspectRatio="xMidYMin slice" '
    }
    
    $jsxBody += "      $svg`n"
}

$jsxFooter = @"
    </div>
  );
};

export default WavyBackground;
"@

$fullJSX = $jsxHeader + "`n" + $jsxBody + $jsxFooter
Set-Content -Path "client/src/components/home/WavyBackground.jsx" -Value $fullJSX
Write-Host "WavyBackground.jsx successfully updated!"
