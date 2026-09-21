import fs from 'fs';

const logPath = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\79daec34-2b78-43e5-b276-e085f0a9ea21\\.system_generated\\logs\\transcript_full.jsonl';
const fileContent = fs.readFileSync(logPath, 'utf8');

const targetStr = '1291';
let pos = fileContent.lastIndexOf(targetStr);
console.log('Position of 1291:', pos);

while (pos !== -1) {
  const svgStart = fileContent.lastIndexOf('<svg', pos);
  const svgEnd = fileContent.indexOf('</svg>', pos);
  console.log('Testing pos:', pos, 'svgStart:', svgStart, 'svgEnd:', svgEnd);
  
  if (svgStart !== -1 && svgEnd !== -1 && svgEnd > svgStart) {
    let svg = fileContent.substring(svgStart, svgEnd + 6);
    svg = svg.replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\"/g, '"');
    fs.writeFileSync('C:\\react project\\figma-akashvani\\client\\src\\assets\\three_cards_section.svg', svg, 'utf8');
    console.log('Successfully saved SVG! Length:', svg.length);
    break;
  }
  pos = fileContent.lastIndexOf(targetStr, pos - 1);
}
