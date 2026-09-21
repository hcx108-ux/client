import fs from 'fs';
import path from 'path';

function processFile(filePath, assetName) {
  let content = fs.readFileSync(filePath, 'utf8');
  const b64Regex = /data:image\/[a-zA-Z]+;base64,[^"'\s)]+/;
  const match = content.match(b64Regex);

  if (match) {
    const b64Str = match[0];
    const dataOnly = b64Str.replace(/^data:image\/[a-zA-Z]+;base64,/, '');
    const buffer = Buffer.from(dataOnly, 'base64');
    const assetPath = path.join('client/src/assets', assetName);

    fs.writeFileSync(assetPath, buffer);
    console.log(`Saved ${assetPath}, size: ${(buffer.length / 1024).toFixed(0)} KB`);

    const varName = assetName.replace(/[^a-zA-Z0-9]/g, '_') + 'Img';
    
    // Add import statement at top
    content = `import ${varName} from '../../assets/${assetName}';\n` + content;
    // Replace the base64 occurrence
    content = content.replace(b64Str, `\${${varName}}`);
    // Also if it was inside href="data:image..." or src="data:image...", handle JSX {varName} or href={varName}
    content = content.replace(new RegExp(`(href|src)=["']\\$\\{${varName}\\}["']`, 'g'), `$1={${varName}}`);
    content = content.replace(new RegExp(`(href|src)="\\$\\{${varName}\\}"`, 'g'), `$1={${varName}}`);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}, new size: ${(content.length / 1024).toFixed(0)} KB`);
  } else {
    console.log(`No base64 found in ${filePath}`);
  }
}

processFile('client/src/components/home/YourBirthChart.jsx', 'your_birth_chart_bg.png');
processFile('client/src/components/home/LookAtYourLife.jsx', 'look_at_your_life_bg.png');
processFile('client/src/components/home/PersonalJourneyBeginning.jsx', 'personal_journey_beginning_bg.png');
