const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../static/img/cog-logo.svg');
const faviconPath = path.join(__dirname, '../static/img/favicon.png');

// Read the SVG file
const svgBuffer = fs.readFileSync(svgPath);

// Convert SVG to PNG
sharp(svgBuffer)
  .resize(32, 32) // Favicon size
  .toFormat('png')
  .toFile(faviconPath)
  .then(() => {
    console.log('Favicon created successfully!');
  })
  .catch((err) => {
    console.error('Error processing SVG:', err);
  }); 