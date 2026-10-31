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
  themeColor: "#0078d8",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sissarzedo.com.br"),
  title:
    "SIS — Saúde Integrada Sarzedo | Clínica Médica, Odontologia & Oftalmologia em Sarzedo - MG",
  description:
    "🏥 SIS Saúde Integrada Sarzedo — Cuidando da sua saúde e bem-estar. Clínica médica e odontológica completa: Oftalmologia (SAME), Odontologia e Ortodontia, Studio de Pilates, Psicologia e Nutrição. Mais de 340 avaliações com nota 4,8 ★ no Google. Atendimento acolhedor na Rod. MG 040, 122 Marginal - Santa Rosa de Lima, Sarzedo - MG. Agende sua consulta pelo WhatsApp: (31) 99684-3808.",
  keywords: [
    "SIS Sarzedo",
    "SIS Saúde Integrada Sarzedo",
    "Clínica Médica Sarzedo",
    "Dentista em Sarzedo MG",
    "Oftalmologista Sarzedo SAME",
    "Exame de Vista Sarzedo",
    "Pilates Sarzedo MG",
    "Studio de Pilates Sarzedo",
    "Fisioterapia Sarzedo",
    "Psicologia Sarzedo",
    "Nutricionista Sarzedo",
    "Odontopediatria Sarzedo",
    "Clínica Odontológica Sarzedo MG",
    "SAME Oftalmologia Sarzedo",
    "Dra Larissa Ferreira Oftalmologista",
    "Dra Laura Dentista Sarzedo",
    "Fisioterapeuta Emilly Pilates",
    "sissarzedo",
  ],
  authors: [
    { name: "SIS — Saúde Integrada Sarzedo" },
    { name: "Grupo SIS Saúde Sarzedo" },
  ],
  creator: "SIS — Saúde Integrada Sarzedo",
  publisher: "SIS — Saúde Integrada Sarzedo",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=sis2", sizes: "any" },
      { url: "/favicon-32x32.png?v=sis2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=sis2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=sis2", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=sis2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=sis2",
    apple: [{ url: "/apple-icon.png?v=sis2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sissarzedo.com.br",
    title:
      "SIS — Saúde Integrada Sarzedo | Clínica Médica, Odontológica & Oftalmologia",
    description:
      "🏥 Cuidado completo e humanizado no coração de Sarzedo. Oftalmologia (SAME), Odontologia, Pilates, Psicologia e Nutrição. Avaliação 4,8 ★ no Google (+340 reviews). Agende via WhatsApp: (31) 99684-3808.",
    siteName: "SIS — Saúde Integrada Sarzedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SIS — Saúde Integrada Sarzedo - Clínica Médica e Odontológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SIS — Saúde Integrada Sarzedo | Clínica Médica & Odontológica em Sarzedo - MG",
    description:
      "🏥 Oftalmologia, Odontologia, Studio de Pilates, Nutrição e Psicologia. Atendimento humanizado e estrutura moderna. 4,8 ★ no Google.",
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
    name: "SIS — Saúde Integrada Sarzedo",
    alternateName: "SIS Saúde Integrada",
    legalName: "SIS - Saúde Integrada Sarzedo (Clínica médica e odontológica)",
    telephone: "+55-31-99684-3808",
    email: "contato@sissarzedo.com.br",
    url: "https://sissarzedo.com.br",
    logo: "https://sissarzedo.com.br/logo.png",
    image: "https://sissarzedo.com.br/fachada-clinica.jpg",
    description:
      "Clínica multidisciplinar com médicos especialistas, oftalmologia SAME, odontologia completa, studio de pilates, fisioterapia, nutrição e psicologia em Sarzedo, MG.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rod. MG 040, 122 MARGINAL - Santa Rosa de Lima",
      addressLocality: "Sarzedo",
      addressRegion: "MG",
      postalCode: "32450-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.0354",
      longitude: "-44.1432",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "344",
      bestRating: "5",
      worstRating: "1",
    },
    medicalSpecialty: [
      "Ophthalmology",
      "Dentistry",
      "Physiotherapy",
      "DietNutrition",
      "ClinicalPsychology",
      "GeneralPractice",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
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
      "https://www.instagram.com/sissarzedo/",
      "https://wa.me/5531996843808",
      "https://linktr.ee/sissarzedoo",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${outfitFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=sis2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=sis2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=sis2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=sis2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=sis2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=sis2" />
        <link rel="shortcut icon" href="/favicon.ico?v=sis2" />
        <meta name="theme-color" content="#0078d8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-800 antialiased selection:bg-[#0078d8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
