const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/5c7526bc-4d97-4346-a88d-777f4fb7a14c/.user_uploaded/media_1793375094916_de42da62.png';
const uploadedHero = 'C:/Users/matheus/.gemini/antigravity/brain/5c7526bc-4d97-4346-a88d-777f4fb7a14c/.user_uploaded/media_1793375079191_61ad63fd.jpg';

const publicDir = path.resolve(__dirname, '../public');
const appDir = path.resolve(__dirname, '../app');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Simple ICO generator for 16x16, 32x32, 48x48 PNGs embedded in ICO format
function createIcoFromPngs(pngBuffers) {
  // ICO header: 6 bytes
  // 0-1: Reserved (0)
  // 2-3: Type (1 = ICO)
  // 4-5: Number of images
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);

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
  console.log('Generating assets from uploaded source files...');

  // 1. Save full logo (trim tiny empty edges and save with crystal clarity)
  const logoSharp = sharp(uploadedLogo);
  await logoSharp
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Saved public/logo.png');

  // 2. Extract monogram "T" in gold rounded rectangle:
  // Monogram bounding box: minX: 301, maxX: 720, minY: 14, maxY: 315
  // width: 420, height: 302
  // We can extract this region with extract: { left: 295, top: 10, width: 432, height: 312 }
  const monogramCropped = await sharp(uploadedLogo)
    .extract({ left: 295, top: 10, width: 432, height: 312 })
    .toBuffer();

  // Make a square 512x512 monogram with transparent padding
  const monogramSquare = await sharp(monogramCropped)
    .resize(460, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 26,
      bottom: 26,
      left: 26,
      right: 26,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  await sharp(monogramSquare).toFile(path.join(publicDir, 'logo-symbol.png'));
  console.log('Saved public/logo-symbol.png (512x512)');

  // 3. Generate icon sizes for favicon and apple-touch-icon
  const icon16 = await sharp(monogramSquare).resize(16, 16).png().toBuffer();
  const icon32 = await sharp(monogramSquare).resize(32, 32).png().toBuffer();
  const icon48 = await sharp(monogramSquare).resize(48, 48).png().toBuffer();
  const icon180 = await sharp(monogramSquare)
    .resize(160, 160, { fit: 'contain', background: { r: 11, g: 12, b: 16, alpha: 1 } })
    .extend({
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
      background: { r: 11, g: 12, b: 16, alpha: 1 }
    })
    .png()
    .toBuffer();

  const icon192 = await sharp(monogramSquare).resize(192, 192).png().toBuffer();
  const icon512 = await sharp(monogramSquare).resize(512, 512).png().toBuffer();

  await fs.promises.writeFile(path.join(publicDir, 'favicon-16x16.png'), icon16);
  await fs.promises.writeFile(path.join(publicDir, 'favicon-32x32.png'), icon32);
  await fs.promises.writeFile(path.join(publicDir, 'apple-icon.png'), icon180);
  await fs.promises.writeFile(path.join(publicDir, 'icon.png'), icon192);
  await fs.promises.writeFile(path.join(publicDir, 'icon-512x512.png'), icon512);

  // Also write to app/ for Next.js App Router root icons
  await fs.promises.writeFile(path.join(appDir, 'apple-icon.png'), icon180);
  await fs.promises.writeFile(path.join(appDir, 'icon.png'), icon192);

  // Create valid .ico containing 16, 32, 48 pngs
  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 }
  ]);
  await fs.promises.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);
  await fs.promises.writeFile(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('Saved favicon.ico (multi-res 16, 32, 48) to public/ and app/');

  // 4. Portrait photo of Dra. Tharin Miranda
  const heroBuffer = fs.readFileSync(uploadedHero);
  await sharp(heroBuffer)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, 'hero.jpg'));
  await sharp(heroBuffer)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, 'dra-tharin-miranda.jpg'));
  console.log('Saved public/hero.jpg and public/dra-tharin-miranda.jpg');

  // Also create a dedicated OpenGraph image (1200x630)
  // Let's create an elegant dark composite card with the logo & photo
  const heroCroppedForOg = await sharp(heroBuffer)
    .resize(600, 630, { fit: 'cover', position: 'top' })
    .toBuffer();

  const ogLogoResized = await sharp(uploadedLogo)
    .resize(500, 250, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const ogCanvas = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 11, g: 12, b: 16, alpha: 1 }
    }
  })
  .composite([
    { input: heroCroppedForOg, left: 600, top: 0 },
    { input: ogLogoResized, left: 50, top: 190 }
  ])
  .jpeg({ quality: 90 })
  .toFile(path.join(publicDir, 'og-image.jpg'));

  console.log('Saved public/og-image.jpg (1200x630)');
  console.log('All image assets created successfully!');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
