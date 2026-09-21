const fs = require('fs');

const fileContent = fs.readFileSync('c:/react project/figma-akashvani/scratch/latest_user_input.txt', 'utf-8');

console.log("File length:", fileContent.length);

// Extract all <path ...> and <text ...> or <g ...> tags or filter info
const paths = fileContent.match(/<path[^>]+>/g) || [];
console.log("Total paths found in SVG:", paths.length);

paths.forEach((p, idx) => {
  console.log(`--- PATH ${idx} ---`);
  console.log(p.slice(0, 150));
});

const textMatch = fileContent.match(/<text[^>]*>([\s\S]*?)<\/text>/g) || [];
console.log("Total text nodes:", textMatch.length);
textMatch.forEach((t, i) => console.log(`TEXT ${i}:`, t));

const fillColors = fileContent.match(/fill="[^"]+"/g) || [];
console.log("Fill colors:", [...new Set(fillColors)]);
