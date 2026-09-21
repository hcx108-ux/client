const fs = require('fs');
let svg = fs.readFileSync('client/src/assets/card_image_3979.svg', 'utf-8');

// Truncate at the end of the base64 string
const base64Index = svg.indexOf('data:image/jpeg;base64,');
if (base64Index !== -1) {
  const quoteEnd = svg.indexOf('"', base64Index + 23);
  if (quoteEnd !== -1) {
    const cleanSvg = svg.substring(0, quoteEnd) + '"/>\n</defs>\n</svg>';
    fs.writeFileSync('client/src/assets/card_image_3979.svg', cleanSvg);
    console.log('Fixed card_image_3979.svg! Length:', cleanSvg.length);
    console.log('Ends with:\n', cleanSvg.slice(-60));
  } else {
    // If the base64 string was truncated mid-stream, close the quotes and SVG
    const truncatedEnd = svg.indexOf('<truncated');
    if (truncatedEnd !== -1) {
      const cleanSvg = svg.substring(0, truncatedEnd).trim() + '" />\n</pattern>\n</defs>\n</svg>';
      fs.writeFileSync('client/src/assets/card_image_3979.svg', cleanSvg);
      console.log('Repaired truncated base64 SVG! Length:', cleanSvg.length);
      console.log('Ends with:\n', cleanSvg.slice(-60));
    }
  }
}
