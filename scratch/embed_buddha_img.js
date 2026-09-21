const fs = require('fs');

// Read mind image.png as base64
const imgBuf = fs.readFileSync('client/src/assets/mind image.png');
const base64Img = 'data:image/png;base64,' + imgBuf.toString('base64');

// Read three_cards_section.svg
let svg = fs.readFileSync('client/src/assets/three_cards_section.svg', 'utf-8');

// Construct the <image id="image0_134_3977" ... /> tag
const imageElement = `<image id="image0_134_3977" width="1200" height="1800" preserveAspectRatio="none" xlink:href="${base64Img}"/>\n`;

// Insert into <defs> if not already present
if (!svg.includes('id="image0_134_3977"')) {
  const defsIndex = svg.indexOf('<defs>');
  if (defsIndex !== -1) {
    const newSvg = svg.slice(0, defsIndex + 6) + '\n' + imageElement + svg.slice(defsIndex + 6);
    fs.writeFileSync('client/src/assets/three_cards_section.svg', newSvg);
    console.log('Successfully embedded Buddha face image into three_cards_section.svg!');
    console.log('New SVG length:', newSvg.length);
  } else {
    console.log('<defs> not found!');
  }
} else {
  console.log('image0_134_3977 already exists in SVG.');
}
