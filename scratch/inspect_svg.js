const fs = require('fs');
const svg = fs.readFileSync('client/src/assets/look_at_your_life.svg', 'utf8');

// Find all foreignObject and rects and icons
console.log('SVG Length:', svg.length);
const rects = svg.match(/<rect[^>]+>/g) || [];
console.log('Rects:', rects);

const foreign = svg.match(/<foreignObject[^>]+>/g) || [];
console.log('ForeignObjects:', foreign);
