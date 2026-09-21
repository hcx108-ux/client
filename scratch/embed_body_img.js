const fs = require('fs');
const path = require('path');

const bodyPngPath = path.join(__dirname, '../client/src/assets/body.png');
const svgPath = path.join(__dirname, '../client/src/assets/three_cards_section.svg');

if (!fs.existsSync(bodyPngPath)) {
  console.error('body.png not found at:', bodyPngPath);
  process.exit(1);
}

const bodyBuffer = fs.readFileSync(bodyPngPath);
const bodyBase64 = bodyBuffer.toString('base64');
const dataUrl = `data:image/png;base64,${bodyBase64}`;

let svg = fs.readFileSync(svgPath, 'utf8');

// Check if image1_134_3977 already exists in defs
const image1Regex = /<image id="image1_134_3977"[^>]*\/>/;

const newImageTag = `<image id="image1_134_3977" width="1200" height="1800" preserveAspectRatio="none" xlink:href="${dataUrl}"/>`;

if (image1Regex.test(svg)) {
  svg = svg.replace(image1Regex, newImageTag);
  console.log('Replaced existing image1_134_3977');
} else {
  // Add before </defs>
  svg = svg.replace('</defs>', `${newImageTag}\n</defs>`);
  console.log('Added new image1_134_3977 to <defs>');
}

fs.writeFileSync(svgPath, svg, 'utf8');
console.log('Successfully updated three_cards_section.svg with body.png! Total size:', svg.length);
