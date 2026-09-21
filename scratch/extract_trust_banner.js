const fs = require('fs');
const path = require('path');

const logFile = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\14ae6906-560f-4f89-bfe7-f5e552fdf06c\\.system_generated\\logs\\transcript_full.jsonl';

const content = fs.readFileSync(logFile, 'utf8');
const lines = content.split('\n');

let userLine = '';
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('"type":"USER_INPUT"') && lines[i].includes('next section <svg')) {
    userLine = lines[i];
    break;
  }
}

if (userLine) {
  let startPos = userLine.indexOf('<svg');
  let endPos = userLine.lastIndexOf('</svg>');
  if (endPos < 0) {
      endPos = userLine.lastIndexOf('<\\/svg>') + 7;
  } else {
      endPos = endPos + 6;
  }
  
  let svg = userLine.substring(startPos, endPos);
  
  // JSON unescape
  svg = svg.replace(/\\"/g, '"').replace(/\\\//g, '/').replace(/\\n/g, '\n').replace(/\\r/g, '');
  
  fs.writeFileSync('scratch/trust_banner.svg', svg);
  console.log('Saved to scratch/trust_banner.svg, length:', svg.length);
} else {
  console.log('User line not found');
}
