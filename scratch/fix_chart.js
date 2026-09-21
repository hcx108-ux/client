const fs = require('fs');
let code = fs.readFileSync('client/src/components/home/YourBirthChart.jsx', 'utf8');

// Replace {formData.name ? ... : 'Your Personal Chart'}
code = code.replace(
  /\{formData\.name \? [^:]+: 'Your Personal Chart'\}/g,
  "{formData.name ? formData.name + \"'s Chart\" : 'Your Personal Chart'}"
);

fs.writeFileSync('client/src/components/home/YourBirthChart.jsx', code, 'utf8');
console.log('Fixed YourBirthChart.jsx successfully!');
