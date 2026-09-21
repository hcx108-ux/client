const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../client/src/assets/three_cards_section.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

const imageRegex = /<image id="image2_[^"]*"[^>]*\/>/g;
let match;
while ((match = imageRegex.exec(svg)) !== null) {
  console.log(`Image2 tag found, length: ${match[0].length}, preview: ${match[0].substring(0, 100)}`);
}
