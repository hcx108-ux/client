const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../client/src/assets/three_cards_section.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

const patternRegex = /<pattern id="([^"]+)"[^>]*>([\s\S]*?)<\/pattern>/g;
let match;
while ((match = patternRegex.exec(svg)) !== null) {
  console.log(`=== Pattern ID: ${match[1]} ===`);
  console.log(match[2]);
}
