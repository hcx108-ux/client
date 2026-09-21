const fs = require('fs');
const path = require('path');

const soulPngPath = path.join(__dirname, '../client/src/assets/hero-girl.jpg');
const svgPath = path.join(__dirname, '../client/src/assets/three_cards_section.svg');

if (fs.existsSync(soulPngPath)) {
  const soulBuffer = fs.readFileSync(soulPngPath);
  const soulBase64 = soulBuffer.toString('base64');
  const dataUrl = `data:image/jpeg;base64,${soulBase64}`;

  let svg = fs.readFileSync(svgPath, 'utf8');

  const newImageTag = `<image id="image2_134_3977" width="1200" height="1600" preserveAspectRatio="none" xlink:href="${dataUrl}"/>`;

  const image2Regex = /<image id="image2_134_3977"[^>]*\/>/;
  if (image2Regex.test(svg)) {
    svg = svg.replace(image2Regex, newImageTag);
    console.log('Replaced existing image2_134_3977');
  } else {
    svg = svg.replace('</defs>', `${newImageTag}\n</defs>`);
    console.log('Added new image2_134_3977 to <defs>');
  }

  fs.writeFileSync(svgPath, svg, 'utf8');
  console.log('Updated image2_134_3977 in three_cards_section.svg!');
} else {
  console.log('hero-girl.jpg not found');
}
