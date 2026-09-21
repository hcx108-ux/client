const fs = require('fs');
const path = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\79daec34-2b78-43e5-b276-e085f0a9ea21\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(path, 'utf-8').split('\n');

const line250 = lines[250];
const defsStart = line250.indexOf('<defs>');
console.log('defsStart:', defsStart);
if (defsStart !== -1) {
  console.log('Defs snippet:', line250.substring(defsStart, defsStart + 500));
}
