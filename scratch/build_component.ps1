$svgPath = "c:\react project\figma-akashvani\scratch\fixed_next_section.svg"
$svgContent = [System.IO.File]::ReadAllText($svgPath)

# Replace SVG attributes to valid React JSX props
$jsxSvg = $svgContent -replace 'fill-opacity=', 'fillOpacity=' `
                      -replace 'fill-rule=', 'fillRule=' `
                      -replace 'clip-rule=', 'clipRule=' `
                      -replace 'shape-rendering=', 'shapeRendering=' `
                      -replace 'color-interpolation-filters=', 'colorInterpolationFilters=' `
                      -replace 'flood-opacity=', 'floodOpacity=' `
                      -replace 'stroke-width=', 'strokeWidth=' `
                      -replace 'stroke-linecap=', 'strokeLinecap=' `
                      -replace 'stroke-linejoin=', 'strokeLinejoin=' `
                      -replace 'stop-color=', 'stopColor=' `
                      -replace 'stop-opacity=', 'stopOpacity=' `
                      -replace 'class=', 'className='

# Add React component wrapper
$componentContent = @"
import React from 'react';
import './ServicesProcess.css';

const ServicesProcess = () => {
  return (
    <section className="services-process-section">
      <div className="services-process-container">
        $jsxSvg
      </div>
    </section>
  );
};

export default ServicesProcess;
"@

[System.IO.File]::WriteAllText("c:\react project\figma-akashvani\client\src\components\home\ServicesProcess.jsx", $componentContent)
Write-Host "Created ServicesProcess.jsx successfully!"

# Create ServicesProcess.css
$cssContent = @"
.services-process-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  position: relative;
  overflow: hidden;
}

.services-process-container {
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-process-container svg {
  width: 100%;
  height: auto;
  max-width: 1440px;
}
"@

[System.IO.File]::WriteAllText("c:\react project\figma-akashvani\client\src\components\home\ServicesProcess.css", $cssContent)
Write-Host "Created ServicesProcess.css successfully!"

