const fs = require('fs');
const logPath = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\79daec34-2b78-43e5-b276-e085f0a9ea21\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf-8').split('\n');

const line250 = lines[250];
console.log('Line 250 starts with:', line250.slice(0, 200));
console.log('Line 250 ends with:', line250.slice(-200));
