const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../client/src/assets/three_cards_section.svg');
let svg = fs.readFileSync(svgPath, 'utf8');

// Target pattern1_134_3977 transform matrix
// Old: matrix(0.000833333 0 0 0.000617284 0 -0.158333)
// New: matrix(0.000833333 0 0 0.000555555 0 0) (unzoomed, full vertical fit)

const oldPatternTag = '<use xlink:href="#image1_134_3977" transform="matrix(0.000833333 0 0 0.000617284 0 -0.158333)"/>';
const newPatternTag = '<use xlink:href="#image1_134_3977" transform="matrix(0.000833333 0 0 0.000555555 0 0)"/>';

if (svg.includes(oldPatternTag)) {
  svg = svg.replace(oldPatternTag, newPatternTag);
  console.log('Replaced pattern1_134_3977 transform matrix to 1:1 unzoomed scale!');
} else {
  // Regex replace pattern1 use tag
  const regex = /(<pattern id="pattern1_134_3977"[^>]*>\s*<use xlink:href="#image1_134_3977" transform=")[^"]*(")/;
  if (regex.test(svg)) {
    svg = svg.replace(regex, '$1matrix(0.000833333 0 0 0.000555555 0 0)$2');
    console.log('Regex replaced pattern1_134_3977 transform matrix');
  } else {
    console.log('pattern1_134_3977 use tag not matched');
  }
}

fs.writeFileSync(svgPath, svg, 'utf8');
console.log('Updated three_cards_section.svg!');
