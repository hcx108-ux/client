const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../client/src/assets/three_cards_section.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

const defsMatch = svg.match(/<defs>([\s\S]*?)<\/defs>/);
if (defsMatch) {
  const images = defsMatch[1].match(/<image[^>]*>/g);
  console.log('Images in <defs>:', images ? images.map(img => img.substring(0, 100)) : 'None');
}
