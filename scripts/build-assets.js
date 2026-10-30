const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/5c4749d0-737e-4e26-9ae2-43270fda7776/.user_uploaded/media_1793377865506_bbb4ac15.png';
const uploadedHero = 'C:/Users/matheus/.gemini/antigravity/brain/5c4749d0-737e-4e26-9ae2-43270fda7776/.user_uploaded/media_1793377873701_2d5f8d03.jpg';

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
  console.log('Generating Rafael Nascimento Advocacia assets from uploaded source files...');

  // 1. Save full logo (crystal clear PNG)
  await sharp(uploadedLogo)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Saved public/logo.png (1024x373)');

  // 2. Extract emblem symbol "R" (left: 32, top: 38, width: 293, height: 323)
  const symbolCropped = await sharp(uploadedLogo)
    .extract({ left: 32, top: 38, width: 293, height: 323 })
    .toBuffer();

  // Make a square 512x512 emblem with transparent padding
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
  console.log('Saved public/logo-symbol.png (512x512)');

  // Also create a high-contrast square symbol with elegant dark background for tab visibility
  const symbolFaviconBase = await sharp(symbolCropped)
    .resize(430, 430, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 41,
      bottom: 41,
      left: 41,
      right: 41,
      background: { r: 12, g: 14, b: 20, alpha: 1 }
    })
    .png()
    .toBuffer();

  // 3. Generate icon sizes for favicon and apple-touch-icon
  // Transparent variant
  const icon16 = await sharp(symbolSquare).resize(16, 16).png().toBuffer();
  const icon32 = await sharp(symbolSquare).resize(32, 32).png().toBuffer();
  const icon48 = await sharp(symbolSquare).resize(48, 48).png().toBuffer();

  // Dark-framed variant (for crisp rendering on browser tabs and bookmarks)
  const icon32Tile = await sharp(symbolFaviconBase).resize(32, 32).png().toBuffer();
  const icon16Tile = await sharp(symbolFaviconBase).resize(16, 16).png().toBuffer();
  const icon48Tile = await sharp(symbolFaviconBase).resize(48, 48).png().toBuffer();

  const icon180 = await sharp(symbolFaviconBase).resize(180, 180).png().toBuffer();
  const icon192 = await sharp(symbolSquare).resize(192, 192).png().toBuffer();
  const icon512 = await sharp(symbolSquare).resize(512, 512).png().toBuffer();

  await fs.promises.writeFile(path.join(publicDir, 'favicon-16x16.png'), icon16);
  await fs.promises.writeFile(path.join(publicDir, 'favicon-32x32.png'), icon32);
  await fs.promises.writeFile(path.join(publicDir, 'apple-icon.png'), icon180);
  await fs.promises.writeFile(path.join(publicDir, 'icon.png'), icon192);
  await fs.promises.writeFile(path.join(publicDir, 'icon-512x512.png'), icon512);

  // App router icons
  await fs.promises.writeFile(path.join(appDir, 'apple-icon.png'), icon180);
  await fs.promises.writeFile(path.join(appDir, 'icon.png'), icon192);

  // Multi-resolution favicon.ico containing 16, 32, 48
  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: icon16Tile },
    { width: 32, height: 32, buffer: icon32Tile },
    { width: 48, height: 48, buffer: icon48Tile }
  ]);
  await fs.promises.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);
  await fs.promises.writeFile(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('Saved favicon.ico (multi-res 16, 32, 48) to public/ and app/');

  // 4. Portrait photo of Dr. Rafael Nascimento
  const heroBuffer = fs.readFileSync(uploadedHero);
  await sharp(heroBuffer)
    .jpeg({ quality: 94, mozjpeg: true })
    .toFile(path.join(publicDir, 'hero.jpg'));
  await sharp(heroBuffer)
    .jpeg({ quality: 94, mozjpeg: true })
    .toFile(path.join(publicDir, 'rafael-nascimento.jpg'));
  console.log('Saved public/hero.jpg and public/rafael-nascimento.jpg');

  // 5. OpenGraph Image (1200x630)
  // Premium dark obsidian layout with portrait on the right and logo on the left
  const heroCroppedForOg = await sharp(heroBuffer)
    .resize(580, 630, { fit: 'cover', position: 'top' })
    .toBuffer();

  const ogLogoResized = await sharp(uploadedLogo)
    .resize(520, 220, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Create an SVG overlay with credentials
  const svgOverlay = Buffer.from(`
    <svg width="600" height="630" viewBox="0 0 600 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f5d77f" />
          <stop offset="50%" stop-color="#d4a34b" />
          <stop offset="100%" stop-color="#c88a2c" />
        </linearGradient>
      </defs>
      <rect x="50" y="370" width="120" height="2" fill="url(#goldGrad)" />
      <text x="50" y="415" font-family="sans-serif" font-size="22" font-weight="bold" fill="#ffffff" letter-spacing="1">ADVOGADO CRIMINAL E CÍVEL</text>
      <text x="50" y="450" font-family="sans-serif" font-size="16" fill="#e7cc99" letter-spacing="0.5">Especialista em Ciências Criminais — PUC Minas</text>
      <text x="50" y="495" font-family="sans-serif" font-size="14" font-weight="600" fill="#94a3b8">Itapecerica - MG • Atendimento em Todo o Brasil</text>
      <text x="50" y="535" font-family="sans-serif" font-size="16" font-weight="bold" fill="#f5d77f">★ 5,0 no Google • (37) 99137-3661</text>
    </svg>
  `);

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 8, g: 9, b: 13, alpha: 1 }
    }
  })
  .composite([
    { input: heroCroppedForOg, left: 620, top: 0 },
    { input: ogLogoResized, left: 45, top: 120 },
    { input: svgOverlay, left: 0, top: 0 }
  ])
  .jpeg({ quality: 92 })
  .toFile(path.join(publicDir, 'og-image.jpg'));

  console.log('Saved public/og-image.jpg (1200x630)');
  console.log('All image assets created successfully!');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
