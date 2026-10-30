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
  themeColor: "#090a0d",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://marianamadeira.adv.br"),
  title:
    "Mariana Madeira | Registro de Marcas & Advocacia Empresarial | Itapecerica - MG",
  description:
    "⚖️ Mariana Madeira Registro de Marcas e Advocacia Empresarial — Proteção jurídica para quem empreende. Especialista em Registro de Marcas no INPI, Contratos e Negócios Digitais. +500 marcas protegidas. Nota máxima 5,0 ★ no Google (10 avaliações). Sede: Av. Severo Augusto Ribeiro, 179 - Centro, Itapecerica - MG.",
  keywords: [
    "Mariana Madeira",
    "Mariana Madeira Marcas",
    "Mariana Madeira Advocacia Empresarial",
    "Registro de Marcas Itapecerica MG",
    "Advogada Empresarial Itapecerica",
    "Registro de Marca INPI",
    "Pesquisa de Viabilidade Marca INPI",
    "Advogada Negócios Digitais",
    "Contratos para Negócios Digitais",
    "Blindagem Jurídica de Empresas",
    "Combate à Pirataria e Concorrência Desleal",
    "Monitoramento de Marcas INPI",
    "Advogada Itapecerica Minas Gerais",
    "Oposição de Marca INPI",
    "marianamadeira.adv",
  ],
  authors: [
    { name: "Mariana Madeira" },
    { name: "Mariana Madeira Registro de Marcas e Advocacia Empresarial" },
  ],
  creator: "Mariana Madeira Registro de Marcas e Advocacia Empresarial",
  publisher: "Mariana Madeira Registro de Marcas e Advocacia Empresarial",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=mm1", sizes: "any" },
      { url: "/favicon-32x32.png?v=mm1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=mm1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=mm1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=mm1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=mm1",
    apple: [{ url: "/apple-icon.png?v=mm1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marianamadeira.adv.br",
    title:
      "Mariana Madeira | Registro de Marcas & Advocacia Empresarial | Itapecerica - MG",
    description:
      "⚖️ Proteção jurídica para quem empreende. Especialista em Registro de Marcas no INPI, Contratos e Negócios Digitais. +500 marcas protegidas. Nota máxima 5,0 ★ no Google (10 avaliações).",
    siteName: "Mariana Madeira Registro de Marcas e Advocacia Empresarial",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mariana Madeira Registro de Marcas e Advocacia Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mariana Madeira | Registro de Marcas & Advocacia Empresarial | Itapecerica - MG",
    description:
      "⚖️ Registro de marcas no INPI, contratos estratégicos e assessoria para negócios digitais. +500 marcas protegidas. Nota máxima 5,0 ★ no Google.",
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
    name: "Mariana Madeira Registro de Marcas e Advocacia Empresarial",
    alternateName: "Mariana Madeira Marcas",
    legalName: "Mariana Madeira Registro de Marcas e Advocacia Empresarial",
    telephone: "+55-37-99809-0441",
    email: "contato@marianamadeira.adv.br",
    url: "https://marianamadeira.adv.br",
    image: "/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Severo Augusto Ribeiro, 179 - Centro",
      addressLocality: "Itapecerica",
      addressRegion: "MG",
      postalCode: "35550-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.4716",
      longitude: "-45.1278",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Itapecerica",
      "Divinópolis",
      "Formiga",
      "Oliveira",
      "Cláudio",
      "Belo Horizonte",
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
        opens: "08:30",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/marianamadeira.adv/",
      "https://wa.me/5537998090441",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=mm1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=mm1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=mm1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=mm1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=mm1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=mm1" />
        <link rel="shortcut icon" href="/favicon.ico?v=mm1" />
        <meta name="theme-color" content="#090a0d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased selection:bg-[#b8874d] selection:text-white">
        {children}
      </body>
    </html>
  );
}
