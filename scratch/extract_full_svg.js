const fs = require('fs');
const path = require('path');

const logFile = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\79daec34-2b78-43e5-b276-e085f0a9ea21\\.system_generated\\logs\\transcript_full.jsonl';
const content = fs.readFileSync(logFile, 'utf8');

const targetStr = 'viewBox=\\"0 0 1440 1022\\"';
const idx = content.lastIndexOf(targetStr);

console.log('Found index:', idx);
if (idx !== -1) {
  const svgStart = content.lastIndexOf('<svg', idx);
  const svgEnd = content.indexOf('</svg>', idx) + 6;
  let svg = content.substring(svgStart, svgEnd);

  // Unescape backslashes if present from JSON stringifying
  svg = svg.replace(/\\"/g, '"').replace(/\\\\/g, '\\');

  const destPath = path.join(__dirname, '../client/src/assets/mind_body_soul.svg');
  fs.writeFileSync(destPath, svg, 'utf8');
  console.log('Successfully written SVG to:', destPath, 'Length:', svg.length);
} else {
  console.error('Target string not found in transcript!');
}
