import fs from 'fs';
import path from 'path';

const files = [
  'client/src/components/home/YourBirthChart.jsx',
  'client/src/components/home/LookAtYourLife.jsx',
  'client/src/components/home/PersonalJourneyBeginning.jsx',
  'client/src/components/home/AboutAkashvani.jsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const b64 = content.match(/data:image\/[a-zA-Z]+;base64,[^"'\s)]+/g);
    console.log(f, 'Size:', (content.length / 1024 / 1024).toFixed(2), 'MB | Base64 count:', b64 ? b64.length : 0);
    if (b64) {
      b64.forEach((b, idx) => {
        console.log(`  [${idx}] size: ${(b.length / 1024 / 1024).toFixed(2)} MB`);
      });
    }
  }
});
