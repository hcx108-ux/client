const fs = require('fs');
const path = require('path');

const logFile = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\79daec34-2b78-43e5-b276-e085f0a9ea21\\.system_generated\\logs\\transcript_full.jsonl';

if (!fs.existsSync(logFile)) {
  console.error('Log file not found:', logFile);
  process.exit(1);
}

const content = fs.readFileSync(logFile, 'utf8');
const lines = content.trim().split('\n');
const lastLine = lines[lines.length - 1];

let data;
try {
  data = JSON.parse(lastLine);
} catch (e) {
  console.error('Error parsing JSON:', e);
  process.exit(1);
}

const userText = data.content || '';
const svgMatch = userText.match(/<svg[\s\S]*?<\/svg>/);

if (svgMatch) {
  const svgContent = svgMatch[0];
  const targetPath = path.join(__dirname, '../client/src/assets/mind_body_soul.svg');
  fs.writeFileSync(targetPath, svgContent, 'utf8');
  console.log('Saved SVG to:', targetPath, 'Size:', svgContent.length, 'bytes');
} else {
  console.error('No SVG found in user message.');
}
