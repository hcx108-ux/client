const fs = require('fs');
const path = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\79daec34-2b78-43e5-b276-e085f0a9ea21\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(path, 'utf-8').split('\n');

[155, 221, 250, 402, 404].forEach(idx => {
  if (lines[idx]) {
    const l = lines[idx];
    console.log(`Line ${idx}: len=${l.length}, hasSvg=${l.includes('<svg')}, hasDefs=${l.includes('<defs>').toString()}, hasSvgClose=${l.includes('</svg>')}`);
  }
});
