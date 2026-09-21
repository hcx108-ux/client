const fs = require('fs');
const path = require('path');

const logFile = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\14ae6906-560f-4f89-bfe7-f5e552fdf06c\\.system_generated\\logs\\transcript_full.jsonl';

if (!fs.existsSync(logFile)) {
  console.log('Log file not found:', logFile);
  process.exit(1);
}

const content = fs.readFileSync(logFile, 'utf8');
console.log('Transcript file loaded, size:', content.length);

const matches = content.match(/data:image\/jpeg;base64,[^\s"'\\]+/g);

if (matches && matches.length > 0) {
  let longest = '';
  for (const m of matches) {
    if (m.length > longest.length) {
      longest = m;
    }
  }
  console.log('Found longest base64 image length:', longest.length);
  fs.writeFileSync('scratch/full_base64_image.txt', longest);
  console.log('Saved to scratch/full_base64_image.txt');
} else {
  console.log('No base64 image match found in transcript');
}
