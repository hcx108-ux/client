import fs from 'fs';
import path from 'path';

function extractAndSavePng(sourceJsxPath, targetPngName) {
  const content = fs.readFileSync(sourceJsxPath, 'utf8');
  const b64Match = content.match(/data:image\/[a-zA-Z]+;base64,([A-Za-z0-9+/=]+)/);
  if (b64Match) {
    const buffer = Buffer.from(b64Match[1], 'base64');
    const targetPath = path.join('client/src/assets', targetPngName);
    fs.writeFileSync(targetPath, buffer);
    console.log(`Successfully extracted ${targetPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
  } else {
    console.log(`No base64 found in ${sourceJsxPath}`);
  }
}

extractAndSavePng('scratch/beb_birth.jsx', 'your_birth_chart_bg.png');
extractAndSavePng('scratch/beb_life.jsx', 'look_at_your_life_bg.png');
extractAndSavePng('scratch/beb_journey.jsx', 'personal_journey_beginning_bg.png');
