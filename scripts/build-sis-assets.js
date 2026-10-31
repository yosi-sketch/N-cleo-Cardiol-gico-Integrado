const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/53053ab8-d497-46ef-bd07-ab131d635c84/.user_uploaded/media_1793458020631_ef3a24b1.png';
const uploadedRecepcao = 'C:/Users/matheus/.gemini/antigravity/brain/53053ab8-d497-46ef-bd07-ab131d635c84/.user_uploaded/media_1793457859866_ba761a47.jpg';
const uploadedFachada = 'C:/Users/matheus/.gemini/antigravity/brain/53053ab8-d497-46ef-bd07-ab131d635c84/.user_uploaded/media_1793458226534_7e6cae00.jpg';

const publicDir = path.resolve(__dirname, '../public');
const appDir = path.resolve(__dirname, '../app');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

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
  console.log('Generating SIS Saúde Integrada Sarzedo assets...');

  // 1. Process Logo: trim transparent whitespace and add modest padding
  const trimmedLogoBuffer = await sharp(uploadedLogo)
    .trim({ threshold: 10 })
    .toBuffer();

  const trimmedMeta = await sharp(trimmedLogoBuffer).metadata();
  console.log('Trimmed logo size:', trimmedMeta.width, 'x', trimmedMeta.height);

  await sharp(trimmedLogoBuffer)
    .extend({
      top: 16,
      bottom: 16,
      left: 24,
      right: 24,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Saved public/logo.png');

  // 2. Extract Medical Cross & Green Dot Symbol (Bounding box x: 54, top: 12, w: 326, h: 276)
  const symbolCropped = await sharp(uploadedLogo)
    .extract({ left: 54, top: 12, width: 326, height: 276 })
    .trim()
    .toBuffer();

  // Create square 512x512 transparent symbol
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
  console.log('Saved public/logo-symbol.png');

  // 3. Crisp Favicon Base with high-contrast clean background (pure white circular background with subtle royal blue border so it pops in both dark and light browser tabs)
  // Let's create a white circular badge with the symbol inside
  const badgeSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="90%" stop-color="#f0f7ff"/>
          <stop offset="100%" stop-color="#e0eefe"/>
        </radialGradient>
      </defs>
      <rect width="512" height="512" rx="110" fill="url(#bgGrad)"/>
      <rect width="506" height="506" x="3" y="3" rx="107" fill="none" stroke="#0078d8" stroke-width="6" opacity="0.35"/>
    </svg>
  `;

  const badgeBaseBuffer = await sharp(Buffer.from(badgeSvg)).png().toBuffer();
  const symbolOnBadge = await sharp(symbolCropped)
    .resize(380, 380, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const finalFavicon512 = await sharp(badgeBaseBuffer)
    .composite([{ input: symbolOnBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  await sharp(finalFavicon512).toFile(path.join(publicDir, 'icon-512x512.png'));
  console.log('Saved public/icon-512x512.png');

  // Favicon sizes: 16x16, 32x32, 48x48
  const p16 = await sharp(finalFavicon512).resize(16, 16).png().toBuffer();
  const p32 = await sharp(finalFavicon512).resize(32, 32).png().toBuffer();
  const p48 = await sharp(finalFavicon512).resize(48, 48).png().toBuffer();
  const p180 = await sharp(finalFavicon512).resize(180, 180).png().toBuffer();
  const p192 = await sharp(finalFavicon512).resize(192, 192).png().toBuffer();

  await sharp(p16).toFile(path.join(publicDir, 'favicon-16x16.png'));
  await sharp(p32).toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(p180).toFile(path.join(publicDir, 'apple-icon.png'));
  await sharp(p192).toFile(path.join(publicDir, 'icon.png'));

  // Also save in app/ directory for Next.js App Router metadata conventions
  await sharp(p180).toFile(path.join(appDir, 'apple-icon.png'));
  await sharp(p192).toFile(path.join(appDir, 'icon.png'));

  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 },
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('Saved favicon.ico in public/ and app/');

  // 4. Save and optimize Clinic Facade image
  await sharp(uploadedFachada)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, 'fachada-clinica.jpg'));
  console.log('Saved public/fachada-clinica.jpg');

  // 5. Save and optimize Clinic Reception interior
  await sharp(uploadedRecepcao)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, 'recepcao-clinica.jpg'));
  console.log('Saved public/recepcao-clinica.jpg');

  // 6. Build OpenGraph Banner (1200x630) for social sharing & WhatsApp previews
  const ogWidth = 1200;
  const ogHeight = 630;

  // Composite background with subtle gradient and modern healthcare graphics
  const ogSvg = `
    <svg width="${ogWidth}" height="${ogHeight}" viewBox="0 0 ${ogWidth} ${ogHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="45%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
        <linearGradient id="blueBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0078d8"/>
          <stop offset="100%" stop-color="#88d830"/>
        </linearGradient>
      </defs>
      <rect width="${ogWidth}" height="${ogHeight}" fill="url(#ogBg)"/>
      <rect y="${ogHeight - 12}" width="${ogWidth}" height="12" fill="url(#blueBar)"/>
      <circle cx="1080" cy="120" r="280" fill="#0078d8" opacity="0.04"/>
      <circle cx="1140" cy="480" r="220" fill="#88d830" opacity="0.05"/>
    </svg>
  `;

  const ogBase = await sharp(Buffer.from(ogSvg)).png().toBuffer();

  // Overlay clinic facade on the right side with rounded card style
  const facadeCard = await sharp(uploadedFachada)
    .resize(520, 480, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(`
          <svg width="520" height="480">
            <rect width="520" height="480" rx="24" fill="none" stroke="#0078d8" stroke-width="4" opacity="0.4"/>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .png()
    .toBuffer();

  // Logo for OG card
  const ogLogo = await sharp(trimmedLogoBuffer)
    .resize(480, null, { fit: 'contain' })
    .png()
    .toBuffer();

  // Text overlay SVG for left side of OG
  const ogTextSvg = `
    <svg width="600" height="420" viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
      <style>
        .badge { font-family: sans-serif; font-size: 14px; font-weight: 700; fill: #0078d8; letter-spacing: 1.5px; text-transform: uppercase; }
        .h1 { font-family: sans-serif; font-size: 32px; font-weight: 800; fill: #0f172a; }
        .desc { font-family: sans-serif; font-size: 18px; font-weight: 500; fill: #475569; }
        .rating { font-family: sans-serif; font-size: 18px; font-weight: 700; fill: #0f172a; }
        .ratingSub { font-family: sans-serif; font-size: 14px; font-weight: 500; fill: #64748b; }
        .contact { font-family: sans-serif; font-size: 15px; font-weight: 600; fill: #0078d8; }
      </style>
      
      <!-- Badge -->
      <rect x="0" y="0" width="310" height="34" rx="17" fill="#e0f2fe"/>
      <text x="16" y="22" class="badge">CLÍNICA MÉDICA &amp; ODONTOLÓGICA</text>

      <!-- Headline -->
      <text x="0" y="78" class="h1">Cuidado Completo &amp; Humanizado</text>
      <text x="0" y="116" class="h1">no Coração de Sarzedo</text>

      <!-- Description -->
      <text x="0" y="160" class="desc">Oftalmologia • Odontologia • Pilates • Nutrição • Psicologia</text>
      <text x="0" y="188" class="desc">Estrutura moderna, equipe acolhedora e fácil estacionamento.</text>

      <!-- Google Rating Card -->
      <rect x="0" y="222" width="460" height="60" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <circle cx="28" cy="252" r="14" fill="#4285F4"/>
      <text x="23" y="258" font-family="sans-serif" font-size="16" font-weight="800" fill="#ffffff">G</text>
      <text x="52" y="248" class="rating">4,8 ★★★★★</text>
      <text x="160" y="248" class="ratingSub">(+340 avaliações no Google)</text>
      <text x="52" y="268" class="ratingSub">Reconhecida pelo acolhimento e excelência médica</text>

      <!-- Address & Phone -->
      <text x="0" y="324" class="contact">📍 Rod. MG 040, 122 Marginal - Sarzedo / MG</text>
      <text x="0" y="352" class="contact">📞 (31) 3136-3808  •  📲 WhatsApp: (31) 99684-3808</text>
    </svg>
  `;

  const ogTextBuf = await sharp(Buffer.from(ogTextSvg)).png().toBuffer();

  await sharp(ogBase)
    .composite([
      { input: ogLogo, top: 50, left: 60 },
      { input: ogTextBuf, top: 210, left: 60 },
      { input: facadeCard, top: 75, left: 620 }
    ])
    .jpeg({ quality: 95 })
    .toFile(path.join(publicDir, 'og-image.jpg'));
  console.log('Saved public/og-image.jpg');

  console.log('All SIS assets generated successfully!');
}

build().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
