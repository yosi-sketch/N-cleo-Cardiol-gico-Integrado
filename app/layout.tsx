import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#01499a",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nucleocardiologico.com.br"),
  title:
    "Núcleo Cardiológico Integrado | Cardiologia & Exames do Coração em Mateus Leme - MG",
  description:
    "❤️ Núcleo Cardiológico Integrado — Clínica de cardiologia de referência em Mateus Leme - MG. Consultas cardiológicas especializadas, exames do coração (Holter 24h, MAPA, Eletrocardiograma, Ecocardiograma Doppler) e check-up preventivo. Corpo clínico de excelência com o Dr. Cleiterson. Agende pelo WhatsApp: (31) 98988-5541 ou Telefone: (31) 3535-1014.",
  keywords: [
    "Núcleo Cardiológico Integrado",
    "Cardiologista Mateus Leme",
    "Cardiologia Mateus Leme MG",
    "Dr Cleiterson",
    "Dr Cleiterson Cardiologista",
    "Exame de Coração Mateus Leme",
    "Holter 24 horas Mateus Leme",
    "MAPA 24 horas Mateus Leme",
    "Eletrocardiograma Mateus Leme",
    "ECG Mateus Leme",
    "Ecocardiograma Doppler Mateus Leme",
    "Check-up do Coração Mateus Leme",
    "Hipertensão Arterial Mateus Leme",
    "Clínica Cardiológica Mateus Leme",
    "Risco Cirúrgico Mateus Leme",
    "nucleocardiologico",
  ],
  authors: [
    { name: "Núcleo Cardiológico Integrado" },
    { name: "Corpo Clínico Núcleo Cardiológico" },
  ],
  creator: "Núcleo Cardiológico Integrado",
  publisher: "Núcleo Cardiológico Integrado",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=nci1", sizes: "any" },
      { url: "/favicon-32x32.png?v=nci1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=nci1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=nci1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=nci1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=nci1",
    apple: [{ url: "/apple-icon.png?v=nci1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nucleocardiologico.com.br",
    title:
      "Núcleo Cardiológico Integrado | Cardiologia & Exames do Coração em Mateus Leme - MG",
    description:
      "❤️ Cuidado cardiovascular completo, exames diagnósticos de alta precisão e acolhimento humano com o Dr. Cleiterson e equipe em Mateus Leme - MG. WhatsApp: (31) 98988-5541.",
    siteName: "Núcleo Cardiológico Integrado",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Núcleo Cardiológico Integrado - Clínica Cardiológica em Mateus Leme - MG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Núcleo Cardiológico Integrado | Cardiologia em Mateus Leme - MG",
    description:
      "❤️ Consultas cardiológicas, Holter 24h, MAPA, ECG, Ecocardiograma e Check-up. Referência com Dr. Cleiterson em Mateus Leme.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Núcleo Cardiológico Integrado",
    alternateName: "Núcleo Cardiológico",
    legalName: "Núcleo Cardiológico Integrado Ltda",
    telephone: "+55-31-3535-1014",
    email: "contato@nucleocardiologico.com.br",
    url: "https://nucleocardiologico.com.br",
    logo: "https://nucleocardiologico.com.br/logo.png",
    image: "https://nucleocardiologico.com.br/recepcao-clinica.jpg",
    description:
      "Clínica cardiológica de referência em Mateus Leme - MG. Consultas médicas especializadas, exames do coração (Holter 24h, MAPA, Eletrocardiograma, Ecocardiograma Doppler) e acompanhamento cardiovascular com Dr. Cleiterson e equipe.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Dr. Tomás de Andrade, 139, Centro",
      addressLocality: "Mateus Leme",
      addressRegion: "MG",
      postalCode: "35670-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-19.9882",
      longitude: "-44.4286",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
    medicalSpecialty: [
      "Cardiovascular",
      "Cardiology",
      "InternalMedicine",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/nucleocardiologico/",
      "https://api.whatsapp.com/send?phone=5531989885541",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${outfitFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=nci1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=nci1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=nci1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=nci1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=nci1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=nci1" />
        <link rel="shortcut icon" href="/favicon.ico?v=nci1" />
        <meta name="theme-color" content="#01499a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-800 antialiased selection:bg-[#01499a] selection:text-white">
        {children}
      </body>
    </html>
  );
}
