import fs from 'fs';
import path from 'path';

function extractSvgFromComponent(jsxPath, assetSvgName, imgClassName) {
  let content = fs.readFileSync(jsxPath, 'utf8');
  const svgRegex = /<svg[\s\S]*?<\/svg>/;
  const match = content.match(svgRegex);

  if (match) {
    let svgContent = match[0];
    
    // Fix JSX style objects back to standard SVG attributes if any
    svgContent = svgContent.replace(/style=\{\{\s*mixBlendMode:\s*'([^']+)'\s*\}\}/g, 'style="mix-blend-mode: $1;"');
    svgContent = svgContent.replace(/xmlnsXlink=/g, 'xmlns:xlink=');
    svgContent = svgContent.replace(/xlinkHref=/g, 'xlink:href=');
    svgContent = svgContent.replace(/className="[^"]*"/g, '');

    const svgPath = path.join('client/src/assets', assetSvgName);
    fs.writeFileSync(svgPath, svgContent, 'utf8');
    console.log(`Saved SVG to ${svgPath} (${(svgContent.length / 1024).toFixed(0)} KB)`);

    const importName = assetSvgName.replace(/[^a-zA-Z0-9]/g, '_') + 'Asset';
    const importStatement = `import ${importName} from '../../assets/${assetSvgName}';\n`;

    content = importStatement + content;
    const replacement = `<img src={${importName}} alt="Visual Graphic" className="${imgClassName}" loading="lazy" />`;
    content = content.replace(svgRegex, replacement);

    fs.writeFileSync(jsxPath, content, 'utf8');
    console.log(`Updated ${jsxPath} (${(content.length / 1024).toFixed(0)} KB)`);
  } else {
    console.log(`No SVG found in ${jsxPath}`);
  }
}

extractSvgFromComponent('client/src/components/home/YourBirthChart.jsx', 'birth_chart_mockup.svg', 'birth-chart-phone-svg');
extractSvgFromComponent('client/src/components/home/LookAtYourLife.jsx', 'look_at_your_life_visual.svg', 'look-at-life-svg');
extractSvgFromComponent('client/src/components/home/ServicesProcess.jsx', 'services_process_visual.svg', 'services-process-svg');
extractSvgFromComponent('client/src/components/home/FeatureBanner.jsx', 'feature_banner_visual.svg', 'feature-banner-svg');
