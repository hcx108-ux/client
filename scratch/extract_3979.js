const fs = require('fs');
const logPath = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\79daec34-2b78-43e5-b276-e085f0a9ea21\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf-8').split('\n');

const line333 = lines[333];
const parsed = JSON.parse(line333);
let content = parsed.content;

const svgStart = content.indexOf('<svg');
console.log('svgStart:', svgStart);
if (svgStart !== -1) {
  let sub = content.substring(svgStart);
  // Find where base64 image data or path ends
  const lastDef = sub.lastIndexOf('</defs>');
  const lastRect = sub.lastIndexOf('</rect>');
  console.log('lastDef:', lastDef, 'lastRect:', lastRect);
  
  // Construct a valid closing XML structure for this image SVG
  let cleanSvg = sub;
  if (!cleanSvg.endsWith('</svg>')) {
    cleanSvg += '</defs>\n</svg>';
  }
  fs.writeFileSync('client/src/assets/card_image_3979.svg', cleanSvg);
  console.log('Successfully saved card_image_3979.svg! Length:', cleanSvg.length);
  console.log('Ends with:\n', cleanSvg.slice(-60));
}
