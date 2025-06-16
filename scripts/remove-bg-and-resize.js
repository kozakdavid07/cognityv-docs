const sharp = require('sharp');

const inputPath = 'static/img/logo.png';
const outputPath = 'static/img/log-logo-32.png';

sharp(inputPath)
  .resize(32, 32)
  .png()
  .toBuffer()
  .then(async (buffer) => {
    // Remove white background (make white pixels transparent)
    const { data, info } = await sharp(buffer)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // If pixel is close to white, make it transparent
      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0;
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .png()
      .toFile(outputPath);
    console.log('Transparent favicon generated at', outputPath);
  })
  .catch(console.error); 