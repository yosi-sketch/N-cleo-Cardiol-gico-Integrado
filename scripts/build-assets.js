const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/394e682d-b4e5-4c7d-b941-2bc031cfd9e4/.user_uploaded/media_1793495436996_e36b2e85.png';
const uploadedRecepcao = 'C:/Users/matheus/.gemini/antigravity/brain/394e682d-b4e5-4c7d-b941-2bc031cfd9e4/.user_uploaded/media_1793495442906_a9264f17.jpg';

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
  console.log('Generating Núcleo Cardiológico Integrado assets...');

  // 1. Process Logo: trim transparent whitespace and add modest 16px padding
  const trimmedLogoBuffer = await sharp(uploadedLogo)
    .trim({ threshold: 10 })
    .toBuffer();

  const logoMeta = await sharp(trimmedLogoBuffer).metadata();
  const padX = 16;
  const padY = 12;

  const finalLogo = await sharp(trimmedLogoBuffer)
    .extend({
      top: padY,
      bottom: padY,
      left: padX,
      right: padX,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'logo.png'), finalLogo);
  console.log('✔ Generated public/logo.png');

  // 2. Extract Heart Symbol from Logo (left 35%)
  const rawMeta = await sharp(uploadedLogo).metadata();
  const extractedBuffer = await sharp(uploadedLogo)
    .extract({
      left: 0,
      top: 0,
      width: Math.floor(rawMeta.width * 0.35),
      height: rawMeta.height
    })
    .toBuffer();

  const symbolLeft = await sharp(extractedBuffer)
    .trim({ threshold: 10 })
    .toBuffer();

  const symMeta = await sharp(symbolLeft).metadata();
  const maxDim = Math.max(symMeta.width, symMeta.height);
  const padTop = Math.floor((maxDim - symMeta.height) / 2) + 12;
  const padBottom = (maxDim - symMeta.height - Math.floor((maxDim - symMeta.height) / 2)) + 12;
  const padLeft = Math.floor((maxDim - symMeta.width) / 2) + 12;
  const padRight = (maxDim - symMeta.width - Math.floor((maxDim - symMeta.width) / 2)) + 12;

  const squareSymbol = await sharp(symbolLeft)
    .extend({
      top: padTop,
      bottom: padBottom,
      left: padLeft,
      right: padRight,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'logo-symbol.png'), squareSymbol);
  console.log('✔ Generated public/logo-symbol.png');

  // 3. Generate Favicons and App Icons with crisp white badge/background for crystal-clear browser tab visibility
  const iconBase = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([
      {
        input: await sharp(squareSymbol).resize(430, 430, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(),
        gravity: 'center'
      }
    ])
    .png()
    .toBuffer();

  // 512x512
  fs.writeFileSync(path.join(publicDir, 'icon-512x512.png'), iconBase);

  // 192x192
  const icon192 = await sharp(iconBase).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'icon.png'), icon192);
  fs.writeFileSync(path.join(appDir, 'icon.png'), icon192);

  // Apple Touch Icon 180x180
  const appleIcon = await sharp(iconBase).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), appleIcon);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), appleIcon);

  // 32x32 & 16x16
  const icon32 = await sharp(iconBase).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(iconBase).resize(16, 16).png().toBuffer();
  const icon48 = await sharp(iconBase).resize(48, 48).png().toBuffer();

  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), icon32);
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), icon16);

  // Multi-size .ico
  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 }
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('✔ Generated all Favicons (.ico, 16x16, 32x32, 192, 512, apple-icon)');

  // 4. Process Clinic Photos (Recepção and Fachada/Estrutura)
  const recepcaoBuffer = await sharp(uploadedRecepcao)
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'recepcao-clinica.jpg'), recepcaoBuffer);
  fs.writeFileSync(path.join(publicDir, 'clinica-interior.jpg'), recepcaoBuffer);
  fs.writeFileSync(path.join(publicDir, 'fachada-clinica.jpg'), recepcaoBuffer);
  console.log('✔ Generated public/recepcao-clinica.jpg, clinica-interior.jpg & fachada-clinica.jpg');

  // 5. Generate high-quality OpenGraph / Social Share Image (1200x630)
  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#071d3d" />
          <stop offset="50%" stop-color="#013b7e" />
          <stop offset="100%" stop-color="#01499a" />
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#f8fafc" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGrad)" />
      
      <!-- Decorative ECG Pulse Line in background -->
      <path d="M 0 480 L 300 480 L 330 450 L 350 510 L 380 340 L 410 560 L 440 460 L 460 490 L 480 480 L 1200 480" 
            fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="4" />

      <!-- Center Card Container -->
      <rect x="70" y="70" width="1060" height="490" rx="28" fill="url(#cardGrad)" stroke="#e2e8f0" stroke-width="2" />
      
      <!-- Top Eyebrow Badge -->
      <rect x="120" y="115" width="370" height="38" rx="19" fill="#fee2e2" />
      <text x="140" y="139" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#b91c1c" letter-spacing="1">
        CARDIOLOGIA &amp; EXAMES DO CORAÇÃO
      </text>

      <!-- Headline -->
      <text x="120" y="210" font-family="Arial, sans-serif" font-size="44" font-weight="900" fill="#0c2b57">
        Núcleo Cardiológico Integrado
      </text>
      
      <!-- Subheadline -->
      <text x="120" y="260" font-family="Arial, sans-serif" font-size="22" font-weight="500" fill="#475569">
        Cuidado cardiovascular de excelência, tecnologia e acolhimento humano.
      </text>

      <!-- Specialty Pills -->
      <g transform="translate(120, 300)">
        <rect x="0" y="0" width="220" height="40" rx="10" fill="#f0f7ff" stroke="#bae6fd" />
        <text x="110" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#01499a">
          Consultas &amp; Check-up
        </text>

        <rect x="235" y="0" width="230" height="40" rx="10" fill="#f0f7ff" stroke="#bae6fd" />
        <text x="350" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#01499a">
          Holter · MAPA · ECG
        </text>

        <rect x="480" y="0" width="220" height="40" rx="10" fill="#f0f7ff" stroke="#bae6fd" />
        <text x="590" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#01499a">
          Ecocardiograma Doppler
        </text>
      </g>

      <!-- Bottom Details & Doctor Reference -->
      <g transform="translate(120, 385)">
        <!-- Location -->
        <text x="0" y="20" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">
          📍 Mateus Leme - MG | R. Dr. Tomás de Andrade, 139, Centro
        </text>
        
        <!-- Doctor Note -->
        <text x="0" y="55" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#dc2626">
          ❤️ Corpo Clínico Cardiológico Especializado · Dr. Cleiterson
        </text>
        
        <!-- WhatsApp CTA info -->
        <text x="0" y="90" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#047857">
          📲 Agendamentos pelo WhatsApp: (31) 98988-5541 | Fixo: (31) 3535-1014
        </text>
      </g>
    </svg>
  `;

  // Composite OG image with real logo in the top right
  const logoResizedForOg = await sharp(finalLogo)
    .resize(320, 110, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const ogBuffer = await sharp(Buffer.from(ogSvg))
    .composite([
      {
        input: logoResizedForOg,
        top: 105,
        left: 770
      }
    ])
    .jpeg({ quality: 92 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), ogBuffer);
  console.log('✔ Generated public/og-image.jpg');

  console.log('✨ All assets created successfully!');
}

build().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
