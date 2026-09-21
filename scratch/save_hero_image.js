const fs = require('fs');
const path = require('path');

const logFile = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\14ae6906-560f-4f89-bfe7-f5e552fdf06c\\.system_generated\\logs\\transcript_full.jsonl';

if (!fs.existsSync(logFile)) {
  console.error('Log file not found:', logFile);
  process.exit(1);
}

const content = fs.readFileSync(logFile, 'utf8');
console.log('Read log file of length:', content.length);

const match = content.match(/data:image\/jpeg;base64,([A-Za-z0-9+/=]+)/);

if (match && match[1]) {
  const base64Str = match[1];
  console.log('Found base64 string of length:', base64Str.length);
  const buffer = Buffer.from(base64Str, 'base64');
  
  const targetDir = path.join(__dirname, '../client/src/assets');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  const targetPath = path.join(targetDir, 'hero-girl.jpg');
  fs.writeFileSync(targetPath, buffer);
  console.log('Saved JPEG image to:', targetPath, 'Size:', buffer.length, 'bytes');
} else {
  console.error('No base64 image match found!');
}
