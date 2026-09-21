const fs = require('fs');
const logPath = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\79daec34-2b78-43e5-b276-e085f0a9ea21\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf-8').split('\n');

const line252 = lines[252];
const parsed = JSON.parse(line252);
const content = parsed.content;
const start = content.indexOf('<svg');
const end = content.lastIndexOf('</svg>');
console.log('start:', start, 'end:', end);
if (start !== -1 && end !== -1) {
  const svg = content.substring(start, end + 6);
  fs.writeFileSync('client/src/assets/mind_card_single.svg', svg);
  console.log('Successfully saved mind_card_single.svg! Length:', svg.length);
  console.log('Starts with:', svg.slice(0, 60));
  console.log('Ends with:', svg.slice(-40));
}
