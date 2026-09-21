$raw = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\true_user_input.txt")

# Fix escaped JSON quotes and newlines
$raw = $raw.Replace('\"', '"').Replace('\n', "`n").Replace('\r', '')

# Extract all <svg ...> ... </svg>
$matches = [regex]::Matches($raw, '(?s)<svg[^>]*>.*?</svg>')
Write-Host "Total SVG blocks found in true user input: $($matches.Count)"

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

    # Replace SVG attribute names for React JSX
    $svg = $svg -replace 'fill-opacity=', 'fillOpacity='
    $svg = $svg -replace 'fill-rule=', 'fillRule='
    $svg = $svg -replace 'clip-rule=', 'clipRule='
    $svg = $svg -replace 'stroke-width=', 'strokeWidth='
    $svg = $svg -replace 'stroke-linecap=', 'strokeLinecap='
    $svg = $svg -replace 'stroke-linejoin=', 'strokeLinejoin='
    
    # Improve visibility of wave lines on light background (#F5F0EA)
    # Using navy blue (#031633) with opacity 0.12 so the wavy contour lines are subtle yet clearly visible
    $svg = $svg -replace 'fill="white"', 'fill="#031633"'
    $svg = $svg -replace 'fillOpacity="0\.25"', 'fillOpacity="0.12"'
    
    # Add class name to svg
    $svg = $svg -replace '<svg ', '<svg className="wavy-background-svg" preserveAspectRatio="xMidYMin slice" '

    $jsxBody += "      $svg`n"
}

$jsxFooter = @"
    </div>
  );
};

export default WavyBackground;
"@

$fullJSX = $jsxHeader + "`n" + $jsxBody + $jsxFooter
[System.IO.File]::WriteAllText("c:\react project\figma-akashvani\client\src\components\home\WavyBackground.jsx", $fullJSX)
Write-Host "SUCCESS! WavyBackground.jsx has been updated with $($matches.Count) SVG blocks."
