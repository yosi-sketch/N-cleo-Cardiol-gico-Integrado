import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0c10",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tharinmiranda.adv.br"),
  title:
    "Tharin Miranda Advocacia | Advogada em Matozinhos - MG · Imobiliário, Trabalhista e Previdenciário",
  description:
    "⚖️ Tharin Miranda Advocacia — Atuação jurídica combativa, ética e de alta precisão em Matozinhos - MG e em todo o Brasil. Dra. Tharin Miranda, Especialista em Direito Imobiliário, Trabalhista e Previdenciário. Secretária Geral da OAB de Matozinhos/MG. Nota máxima 5,0 ★ no Google (12 avaliações). Sede na Travessa da Esmeralda, 45 A - São Sebastião, Matozinhos - MG.",
  keywords: [
    "Tharin Miranda Advocacia",
    "Dra. Tharin Miranda",
    "Tharin Miranda Advogada",
    "Advogada Matozinhos MG",
    "Advocacia Matozinhos Minas Gerais",
    "Advogada Imobiliária Matozinhos",
    "Direito Imobiliário Matozinhos MG",
    "Advogada Trabalhista Matozinhos MG",
    "Causas Trabalhistas Matozinhos",
    "Direito Previdenciário Matozinhos",
    "Aposentadoria INSS Matozinhos MG",
    "Usucapião Matozinhos MG",
    "Regularização de Imóveis Matozinhos",
    "Secretária Geral OAB Matozinhos",
    "Advogada OAB Matozinhos",
    "Escritório de Advocacia Matozinhos",
    "tharin_miranda",
  ],
  authors: [
    { name: "Dra. Tharin Miranda" },
    { name: "Tharin Miranda Advocacia" },
  ],
  creator: "Tharin Miranda Advocacia",
  publisher: "Tharin Miranda Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=tm1", sizes: "any" },
      { url: "/favicon-32x32.png?v=tm1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=tm1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=tm1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=tm1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=tm1",
    apple: [{ url: "/apple-icon.png?v=tm1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tharinmiranda.adv.br",
    title:
      "Tharin Miranda Advocacia | Advogada em Matozinhos - MG · Imobiliário, Trabalhista e Previdenciário",
    description:
      "⚖️ Advocacia de excelência conduzida pela Dra. Tharin Miranda. Especialista em Direito Imobiliário, Trabalho e Previdenciário. Secretária Geral da OAB de Matozinhos/MG. Nota máxima 5,0 ★ no Google (12 avaliações).",
    siteName: "Tharin Miranda Advocacia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tharin Miranda Advocacia - Dra. Tharin Miranda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tharin Miranda Advocacia | Advogada em Matozinhos - MG",
    description:
      "⚖️ Advocacia combativa e estratégica com rigor técnico e acolhimento. Nota máxima 5,0 ★ no Google. Dra. Tharin Miranda.",
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
    "@type": "LegalService",
    name: "Tharin Miranda Advocacia",
    alternateName: "Dra. Tharin Miranda Advocacia | Matozinhos - MG",
    legalName: "Tharin Miranda Advocacia",
    telephone: "+55-31-98838-5001",
    email: "contato@tharinmiranda.adv.br",
    url: "https://tharinmiranda.adv.br",
    image: "/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Travessa da Esmeralda, 45 A - São Sebastião",
      addressLocality: "Matozinhos",
      addressRegion: "MG",
      postalCode: "35720-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-19.5583",
      longitude: "-44.0817",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "12",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Matozinhos",
      "Sete Lagoas",
      "Capim Branco",
      "Prudente de Morais",
      "Pedro Leopoldo",
      "Vespasiano",
      "Confins",
      "Belo Horizonte",
      "Região Metropolitana de Belo Horizonte",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/tharin_miranda/",
      "https://wa.me/5531988385001",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=tm1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=tm1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=tm1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=tm1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=tm1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=tm1" />
        <link rel="shortcut icon" href="/favicon.ico?v=tm1" />
        <meta name="theme-color" content="#0b0c10" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#d4a34b] selection:text-[#0b0c10]">
        {children}
      </body>
    </html>
  );
}
