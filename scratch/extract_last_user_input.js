const fs = require('fs');

const fullLogPath = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\e0eef690-4c2c-46f4-90c8-ef066c707d3a\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(fullLogPath, 'utf-8').trim().split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.type === 'USER_INPUT') {
      console.log('--- USER INPUT STEP INDEX:', obj.step_index);
      const text = typeof obj.content === 'string' ? obj.content : JSON.stringify(obj.content);
      console.log('LENGTH:', text.length);
      console.log('PREVIEW:', text.slice(0, 500));
      console.log('TAIL:', text.slice(-500));
      fs.writeFileSync('c:/react project/figma-akashvani/scratch/latest_user_input.txt', text);
      break;
    }
  } catch(e) {}
}
