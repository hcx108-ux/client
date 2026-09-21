const fs = require('fs');
const path = require('path');

const currentConvId = 'e0eef690-4c2c-46f4-90c8-ef066c707d3a';
const transcriptPath = `C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\${currentConvId}\\.system_generated\\logs\\transcript_full.jsonl`;

console.log('Checking transcript path:', transcriptPath);
if (fs.existsSync(transcriptPath)) {
  const content = fs.readFileSync(transcriptPath, 'utf8');
  console.log('Transcript file length:', content.length);
  const svgIndex = content.lastIndexOf('<svg width="1440" height="1018"');
  if (svgIndex !== -1) {
    console.log('Found SVG start at index:', svgIndex);
    const svgEndIndex = content.indexOf('</svg>', svgIndex);
    if (svgEndIndex !== -1) {
      const fullSvg = content.substring(svgIndex, svgEndIndex + 6);
      console.log('Full SVG length:', fullSvg.length);
      fs.writeFileSync('scratch/next_section.svg', fullSvg);
      console.log('Saved full SVG to scratch/next_section.svg!');
    } else {
      console.log('SVG end </svg> not found');
    }
  } else {
    console.log('SVG start <svg width="1440" height="1018" not found');
  }
} else {
  console.log('Transcript file does not exist');
}
