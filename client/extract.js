const fs = require('fs');
const readline = require('readline');

const logPath = 'C:\\Users\\Vikas\\.gemini\\antigravity-ide\\brain\\6ec93dcb-4c99-4b7b-9d0d-ec77af087e00\\.system_generated\\logs\\transcript_full.jsonl';
const outPath = 'C:\\react project\\figmversion3\\client\\src\\assets\\journey_steps.svg';

async function processLineByLine() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    try {
      const data = JSON.parse(line);
      const content = data.content;
      if (content && typeof content === 'string' && content.includes('<svg width="1440" height="2315"')) {
        const start = content.indexOf('<svg width="1440"');
        const end = content.indexOf('</svg>', start);
        if (start >= 0 && end > start) {
          const svgContent = content.substring(start, end + 6);
          fs.writeFileSync(outPath, svgContent);
          console.log(Success! Extracted  characters.);
          return;
        }
      }
    } catch (e) {
      // ignore JSON parse error
    }
  }
}

processLineByLine();
