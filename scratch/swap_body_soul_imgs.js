const fs = require('fs');
const path = require('path');

const bodyPngPath = path.join(__dirname, '../client/src/assets/body.png');
const soulPngPath = path.join(__dirname, '../client/src/assets/soul.png');
const svgPath = path.join(__dirname, '../client/src/assets/three_cards_section.svg');

if (!fs.existsSync(bodyPngPath) || !fs.existsSync(soulPngPath)) {
  console.error('Missing body.png or soul.png');
  process.exit(1);
}

const bodyBase64 = fs.readFileSync(bodyPngPath).toString('base64');
const soulBase64 = fs.readFileSync(soulPngPath).toString('base64');

const bodyDataUrl = `data:image/png;base64,${bodyBase64}`;
const soulDataUrl = `data:image/png;base64,${soulBase64}`;

let svg = fs.readFileSync(svgPath, 'utf8');

// Body card (image1_134_3977) gets soul.png dataUrl
const image1Tag = `<image id="image1_134_3977" width="1200" height="1800" preserveAspectRatio="none" xlink:href="${soulDataUrl}"/>`;

// Soul card (image2_134_3977) gets body.png dataUrl
const image2Tag = `<image id="image2_134_3977" width="1200" height="1800" preserveAspectRatio="none" xlink:href="${bodyDataUrl}"/>`;

// Replace image1
svg = svg.replace(/<image id="image1_134_3977"[^>]*\/>/, image1Tag);

// Replace image2
svg = svg.replace(/<image id="image2_134_3977"[^>]*\/>/, image2Tag);

fs.writeFileSync(svgPath, svg, 'utf8');
console.log('Successfully swapped body and soul images in three_cards_section.svg!');
