const fs = require('fs');

let svg = fs.readFileSync('client/src/assets/three_cards_section.svg', 'utf-8');

// Find the last complete closing tag or element in the SVG
const lastCompletePath = svg.lastIndexOf('</g>');
if (lastCompletePath !== -1) {
  // Cut at last valid group end
  let validSvg = svg.substring(0, lastCompletePath + 4);
  // Ensure defs is closed if present
  if (validSvg.includes('<defs>') && !validSvg.includes('</defs>')) {
    validSvg += '\n</defs>';
  }
  validSvg += '\n</svg>';
  
  fs.writeFileSync('client/src/assets/three_cards_section.svg', validSvg);
  console.log('Repaired three_cards_section.svg successfully!');
  console.log('New length:', validSvg.length);
  console.log('Ends with:\n', validSvg.slice(-100));
}
