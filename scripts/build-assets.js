const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/f3646b79-59ae-4ade-86a0-34b7384f195f/.user_uploaded/media_1793383481769_31f63b35.png';
const uploadedPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/f3646b79-59ae-4ade-86a0-34b7384f195f/.user_uploaded/media_1793383470441_f254711f.jpg';

const publicDir = path.resolve(__dirname, '../public');
const appDir = path.resolve(__dirname, '../app');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Simple ICO generator for 16x16, 32x32, 48x48 PNGs embedded in standard Windows ICO format
function createIcoFromPngs(pngBuffers) {
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(numImages, 4); // Number of images

  let offset = 6 + numImages * 16;
  const directoryEntries = [];
  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0); // Width
    entry.writeUInt8(height >= 256 ? 0 : height, 1); // Height
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // File offset
    directoryEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...directoryEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function build() {
  console.log('Generating Mariana Madeira assets...');

  // 1. Save full logo (trim extra transparent space and add balanced padding)
  const trimmedLogoBuffer = await sharp(uploadedLogo)
    .trim({ threshold: 10 })
    .toBuffer();

  const trimmedMeta = await sharp(trimmedLogoBuffer).metadata();
  console.log('Trimmed logo size:', trimmedMeta.width, 'x', trimmedMeta.height);

  // Extend with elegant padding for crisp display
  await sharp(trimmedLogoBuffer)
    .extend({
      top: 24,
      bottom: 24,
      left: 32,
      right: 32,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Saved public/logo.png');

  // Also create a logo version with brighter gold / white text for dark backgrounds if desired
  // Let's create an inverted/white-text variant or enhanced gold variant
  // In the logo, pixels with gold color:
  // Let's extract the square emblem:
  // Bounding box of emblem in original: x: 60, y: 95, w: 233, h: 235
  const symbolCropped = await sharp(uploadedLogo)
    .extract({ left: 58, top: 93, width: 237, height: 239 })
    .toBuffer();

  // Square 512x512 emblem with transparent padding
  const symbolSquare = await sharp(symbolCropped)
    .resize(440, 440, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 36,
      bottom: 36,
      left: 36,
      right: 36,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  await sharp(symbolSquare).toFile(path.join(publicDir, 'logo-symbol.png'));
  console.log('Saved public/logo-symbol.png (512x512 transparent)');

  // Emblem on luxury dark obsidian background for tab / app visibility
  const symbolFaviconBase = await sharp(symbolCropped)
    .resize(420, 420, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 46,
      bottom: 46,
      left: 46,
      right: 46,
      background: { r: 14, g: 16, b: 22, alpha: 1 } // Obsidian noir #0e1016
    })
    .png()
    .toBuffer();

  // 2. Favicons
  const icon16 = await sharp(symbolFaviconBase).resize(16, 16).png().toBuffer();
  const icon32 = await sharp(symbolFaviconBase).resize(32, 32).png().toBuffer();
  const icon48 = await sharp(symbolFaviconBase).resize(48, 48).png().toBuffer();

  const icon180 = await sharp(symbolFaviconBase).resize(180, 180).png().toBuffer();
  const icon192 = await sharp(symbolSquare).resize(192, 192).png().toBuffer();
  const icon512 = await sharp(symbolSquare).resize(512, 512).png().toBuffer();

  await fs.promises.writeFile(path.join(publicDir, 'favicon-16x16.png'), icon16);
  await fs.promises.writeFile(path.join(publicDir, 'favicon-32x32.png'), icon32);
  await fs.promises.writeFile(path.join(publicDir, 'apple-icon.png'), icon180);
  await fs.promises.writeFile(path.join(publicDir, 'icon.png'), icon192);
  await fs.promises.writeFile(path.join(publicDir, 'icon-512x512.png'), icon512);

  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 },
  ]);
  await fs.promises.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // Also copy to app/ for Next.js app router metadata icons
  await fs.promises.writeFile(path.join(appDir, 'favicon.ico'), icoBuffer);
  await fs.promises.writeFile(path.join(appDir, 'icon.png'), icon192);
  await fs.promises.writeFile(path.join(appDir, 'apple-icon.png'), icon180);
  console.log('Saved favicon and icons in public/ and app/');

  // 3. Process photo of Dra. Mariana Madeira
  // Full photo
  await sharp(uploadedPhoto)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, 'mariana-madeira.jpg'));
  console.log('Saved public/mariana-madeira.jpg');

  // Portrait crop centered on Mariana (e.g. 800x1000 for bio and hero cards)
  // Dra. Mariana is centered horizontally
  await sharp(uploadedPhoto)
    .extract({
      left: 200,
      top: 0,
      width: 624,
      height: 682,
    })
    .resize(800, 874, { fit: 'cover' })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, 'mariana-madeira-portrait.jpg'));
  console.log('Saved public/mariana-madeira-portrait.jpg');

  // Square avatar crop (500x500)
  await sharp(uploadedPhoto)
    .extract({
      left: 270,
      top: 20,
      width: 480,
      height: 480,
    })
    .resize(500, 500, { fit: 'cover' })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, 'mariana-madeira-avatar.jpg'));
  console.log('Saved public/mariana-madeira-avatar.jpg');

  // 4. Generate OpenGraph Banner (1200x630)
  // Elegant dark obsidian canvas with Mariana's photo on the right and logo + value prop on the left
  const ogCanvas = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 14, g: 16, b: 22, alpha: 1 }
    }
  });

  const photoOg = await sharp(uploadedPhoto)
    .extract({ left: 240, top: 0, width: 620, height: 682 })
    .resize(560, 630, { fit: 'cover' })
    .toBuffer();

  const logoOg = await sharp(trimmedLogoBuffer)
    .resize(480, null, { fit: 'inside' })
    .toBuffer();

  const ogComposite = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 14, g: 16, b: 22, alpha: 1 }
    }
  })
  .composite([
    { input: photoOg, left: 640, top: 0 },
    { input: logoOg, left: 80, top: 220 },
  ])
  .jpeg({ quality: 90 })
  .toFile(path.join(publicDir, 'og-image.jpg'));
  console.log('Saved public/og-image.jpg (1200x630)');

  console.log('All Mariana Madeira assets successfully created!');
}

build().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
