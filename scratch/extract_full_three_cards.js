const fs = require('fs');
const path = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\79daec34-2b78-43e5-b276-e085f0a9ea21\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(path, 'utf-8').split('\n');

const line250 = lines[250];
const svgStart = line250.indexOf('<svg');
const truncIndex = line250.indexOf('<truncated');

if (svgStart !== -1) {
  let sub = truncIndex !== -1 ? line250.substring(svgStart, truncIndex) : line250.substring(svgStart);
  // Unescape backslashes for quotes and newlines
  sub = sub.replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\r/g, '').trim();
  
  // Clean up trailing truncated string if ends mid-attribute
  if (!sub.endsWith('>')) {
    const lastTagEnd = sub.lastIndexOf('>');
    if (lastTagEnd !== -1) {
      sub = sub.substring(0, lastTagEnd + 1);
    }
  }
  
  // Append necessary closing tags
  if (!sub.includes('</defs>')) {
    sub += '\n</defs>';
  }
  if (!sub.endsWith('</svg>')) {
    sub += '\n</svg>';
  }
  
  fs.writeFileSync('client/src/assets/three_cards_section.svg', sub);
  console.log('Successfully saved full three_cards_section.svg! Length:', sub.length);
  console.log('Starts with:\n', sub.slice(0, 100));
  console.log('Ends with:\n', sub.slice(-100));
}
