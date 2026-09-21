const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, '../client/src/components/home/AboutAkashvani.jsx');
const soulSvgPath = path.join(__dirname, 'soul_exact_icon.svg');

let jsx = fs.readFileSync(jsxPath, 'utf8');
const soulSvg = fs.readFileSync(soulSvgPath, 'utf8');

// The soul SVG content inside svg tags
const innerPathsMatch = soulSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
if (!innerPathsMatch) {
  console.error('Failed to extract paths from soul_exact_icon.svg');
  process.exit(1);
}

const innerPaths = innerPathsMatch[1].trim();

// Replace the soul icon SVG in AboutAkashvani.jsx
const soulSvgRegex = /<div className="dimension-icon-wrapper" aria-hidden="true">\s*<svg viewBox="904[^"]*" width="[^"]*" height="[^"]*" fill="none" xmlns="http:\/\/www.w3.org\/2000\/svg">[\s\S]*?<\/svg>\s*<\/div>\s*<h3 className="dimension-title">Soul<\/h3>/;

const replacement = `<div className="dimension-icon-wrapper" aria-hidden="true">
                <svg viewBox="904 1362 44 48" width="38" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  ${innerPaths}
                </svg>
              </div>

              <h3 className="dimension-title">Soul</h3>`;

if (!soulSvgRegex.test(jsx)) {
  console.error('Could not match soulSvgRegex in AboutAkashvani.jsx');
  process.exit(1);
}

jsx = jsx.replace(soulSvgRegex, replacement);
fs.writeFileSync(jsxPath, jsx, 'utf8');
console.log('Successfully replaced Soul icon in AboutAkashvani.jsx with complete exact SVG paths!');
