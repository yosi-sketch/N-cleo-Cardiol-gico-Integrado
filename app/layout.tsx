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
  themeColor: "#08090d",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelnascimento.adv.br"),
  title:
    "Rafael Nascimento Advocacia | Advogado Criminal e Cível em Itapecerica - MG",
  description:
    "⚖️ Rafael Nascimento Advocacia — Defesa Criminal Estratégica e Soluções Cíveis de alta precisão técnica em Itapecerica - MG e em todo o Brasil. Dr. Rafael Nascimento, Especialista em Ciências Criminais pela PUC Minas. Nota máxima 5,0 ★ no Google (11 avaliações). Sede: R. Cônego Cesário, 282 - Sl 04 - Centro, Itapecerica - MG.",
  keywords: [
    "Rafael Nascimento Advogado",
    "Rafael Nascimento Advocacia",
    "Dr. Rafael Nascimento",
    "Advogado Itapecerica MG",
    "Advocacia Itapecerica Minas Gerais",
    "Advogado Criminal Itapecerica",
    "Advogado Criminalista Itapecerica MG",
    "Advogado Criminalista Minas Gerais",
    "Especialista em Ciências Criminais PUC Minas",
    "Advogado Cível Itapecerica MG",
    "Direito Criminal Itapecerica",
    "Audiência de Custódia Itapecerica MG",
    "Flagrante Delito Itapecerica",
    "Habeas Corpus Minas Gerais",
    "Inventário Itapecerica MG",
    "Contratos e Indenizações Itapecerica",
    "Escritório de Advocacia Itapecerica",
    "advrafaelnascimento",
  ],
  authors: [
    { name: "Dr. Rafael Nascimento" },
    { name: "Rafael Nascimento Advocacia" },
  ],
  creator: "Rafael Nascimento Advocacia",
  publisher: "Rafael Nascimento Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=rn2", sizes: "any" },
      { url: "/favicon-32x32.png?v=rn2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=rn2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=rn2", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=rn2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=rn2",
    apple: [{ url: "/apple-icon.png?v=rn2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rafaelnascimento.adv.br",
    title:
      "Rafael Nascimento Advocacia | Advogado Criminal e Cível em Itapecerica - MG",
    description:
      "⚖️ Advocacia de excelência conduzida pelo Dr. Rafael Nascimento. Especialista em Ciências Criminais pela PUC Minas · Atuação criminal e cível com nota máxima 5,0 ★ no Google (11 avaliações).",
    siteName: "Rafael Nascimento Advocacia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rafael Nascimento Advocacia - Dr. Rafael Nascimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rafael Nascimento Advocacia | Advogado Criminal e Cível em Itapecerica - MG",
    description:
      "⚖️ Defesa criminal estratégica e soluções cíveis de alta precisão. Dr. Rafael Nascimento — Especialista em Ciências Criminais pela PUC Minas. Nota máxima 5,0 ★ no Google.",
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
    name: "Rafael Nascimento Advocacia",
    alternateName: "Dr. Rafael Nascimento Advocacia | Itapecerica - MG",
    legalName: "Rafael Nascimento Advocacia",
    telephone: "+55-37-99137-3661",
    email: "contato@rafaelnascimento.adv.br",
    url: "https://rafaelnascimento.adv.br",
    image: "/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Cônego Cesário, 282 - Sl 04 - Centro",
      addressLocality: "Itapecerica",
      addressRegion: "MG",
      postalCode: "35550-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.4736",
      longitude: "-45.1244",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "11",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Itapecerica",
      "Divinópolis",
      "Formiga",
      "Oliveira",
      "Cláudio",
      "Camacho",
      "São Sebastião do Oeste",
      "Centro-Oeste de Minas Gerais",
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
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/advrafaelnascimento/",
      "https://linktr.ee/rafaelnascimentoadv",
      "https://wa.me/5537991373661",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=rn2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=rn2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=rn2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=rn2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=rn2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=rn2" />
        <link rel="shortcut icon" href="/favicon.ico?v=rn2" />
        <meta name="theme-color" content="#08090d" />
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
