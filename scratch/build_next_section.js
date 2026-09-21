const fs = require('fs');
const path = require('path');

// Read current transcript to get as much SVG text as was delivered in the prompt
const logFile = "C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\e0eef690-4c2c-46f4-90c8-ef066c707d3a\\.system_generated\\logs\\transcript_full.jsonl";

if (!fs.existsSync(logFile)) {
    console.error("Transcript file not found.");
    process.exit(1);
}

const lines = fs.readFileSync(logFile, 'utf8').split('\n');
let svgContent = '';

for (const line of lines) {
    if (line.includes('"step_index":34') || line.includes('"step_index": 34')) {
        const start = line.indexOf('<svg');
        if (start !== -1) {
            let chunk = line.substring(start);
            // find where truncation message starts if any
            const truncIdx = chunk.indexOf('\\n<truncated');
            if (truncIdx !== -1) {
                chunk = chunk.substring(0, truncIdx);
            }
            // unescape json
            chunk = chunk.replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\\//g, '/');
            svgContent = chunk;
            break;
        }
    }
}

console.log("Extracted SVG raw length:", svgContent.length);
fs.writeFileSync('scratch/raw_extracted.svg', svgContent);

