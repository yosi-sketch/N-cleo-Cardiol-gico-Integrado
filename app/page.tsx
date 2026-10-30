"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Sparkles,
  Star,
  Shield,
  FileText,
  X,
  ChevronDown,
  Users,
  Building2,
  Briefcase,
  AlertCircle,
  Gavel,
  Coins,
  BadgeCheck,
  Award,
  Home as HomeIcon,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531988385001";
const PHONE_DISPLAY = "(31) 98838-5001";
const EMAIL_CONTACT = "contato@tharinmiranda.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/tharin_miranda/";
const INSTAGRAM_HANDLE = "@tharin_miranda";

const FIRM_NAME = "Tharin Miranda Advocacia";
const FIRM_SHORT_NAME = "Tharin Miranda";
const FIRM_SLOGAN =
  "Atuação jurídica especializada, ética e resolutiva em Direito Imobiliário, Trabalhista e Previdenciário em Matozinhos - MG e em todo o Brasil.";
const LAWYER_NAME = "Dra. Tharin Miranda";
const LAWYER_TITLE =
  "Especialista em Direito Imobiliário, Trabalho e Previdenciário · Secretária Geral da OAB de Matozinhos/MG";

const ADDRESS_TEXT =
  "Travessa da Esmeralda, 45 A - São Sebastião, Matozinhos - MG, 35720-000";
const REGION_TEXT =
  "Matozinhos · Região Metropolitana de BH & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Tharin+Miranda+Advocacia%0AMatozinhos+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Travessa+da+Esmeralda%2C+45+A+-+S%C3%A3o+Sebastiao%2C+Matozinhos+-+MG%2C+35720-000";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero.jpg";
const FOTO_PERFIL_SRC = "/dra-tharin-miranda.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Tharin Miranda! Gostaria de agendar uma consulta jurídica e conversar sobre o meu caso.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
      />
      <path
        fill="#FBBC05"
        d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.5.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12s.7 2.3 1.9 4.7l3.7-2.9z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
      />
    </svg>
  );
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalArea, setModalArea] = useState<string>("Consulta Jurídica Especializada");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openConsultModal = (areaName = "Consulta Jurídica Especializada") => {
    setModalArea(areaName);
    setModalOpen(true);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Pilares Oficiais de Atuação de Tharin Miranda Advocacia
  const areasAtuacao = [
    {
      id: "direito-imobiliario",
      icon: HomeIcon,
      title: "Direito Imobiliário & Regularização",
      shortDesc:
        "Especialização de referência em Matozinhos e região. Segurança jurídica e patrimonial na regularização de imóveis, usucapião e contratos de alto valor.",
      bullets: [
        "Usucapião extrajudicial em cartório (rápido e econômico) e judicial",
        "Regularização fundiária de terrenos, lotes urbanos e rurais sem escritura",
        "Elaboração, análise e blindagem de contratos de compra, venda e locação",
        "Assessoria em distratos imobiliários, condomínios e posse de imóveis",
      ],
      tag: "Imobiliário",
      badge: "Especialidade Principal",
      whatsappMsg:
        "Olá, Dra. Tharin Miranda! Gostaria de uma consultoria jurídica sobre Direito Imobiliário / Regularização de Imóvel / Usucapião.",
    },
    {
      id: "direito-do-trabalho",
      icon: Briefcase,
      title: "Direito do Trabalho",
      shortDesc:
        "Atuação combativa e estratégica em causas trabalhistas. Defesa rigorosa dos direitos do trabalhador com exatidão em cálculos e máxima agilidade.",
      bullets: [
        "Rescisão indireta do contrato e reversão de justa causa indevida",
        "Cálculo e cobrança de horas extras, intervalos e adicional noturno",
        "Adicionais de insalubridade, periculosidade e desvio de função",
        "Indenizações por acidente de trabalho, doenças ocupacionais e assédio moral",
      ],
      tag: "Trabalhista",
      badge: "Defesa Combativa",
      whatsappMsg:
        "Olá, Dra. Tharin Miranda! Preciso de orientação jurídica especializada sobre causa trabalhista e meus direitos.",
    },
    {
      id: "direito-previdenciario",
      icon: FileText,
      title: "Direito Previdenciário (INSS)",
      shortDesc:
        "Planejamento previdenciário e atuação resolutiva contra indeferimentos do INSS, assegurando a concessão do melhor benefício possível.",
      bullets: [
        "Planejamento previdenciário completo para aposentadoria no valor máximo",
        "Aposentadoria por idade, tempo de contribuição e aposentadoria especial",
        "Benefício de Prestação Continuada (BPC / LOAS) para idosos e PCDs",
        "Auxílio por incapacidade temporária (auxílio-doença) e pensão por morte",
      ],
      tag: "Previdenciário",
      badge: "Benefícios do INSS",
      whatsappMsg:
        "Olá, Dra. Tharin Miranda! Gostaria de consultoria sobre Benefício do INSS / Aposentadoria / BPC LOAS.",
    },
    {
      id: "direito-civel",
      icon: Scale,
      title: "Direito Cível & Contratos",
      shortDesc:
        "Solidez na redação de instrumentos contratuais, reparações de danos materiais e morais, execuções e resolução estratégica de litígios.",
      bullets: [
        "Elaboração, revisão minuciosa e execução de contratos cíveis e comerciais",
        "Ações indenizatórias por danos morais, materiais e descumprimento de acordos",
        "Cobrança judicial e extrajudicial de títulos e créditos em aberto",
        "Resolução de conflitos patrimoniais com foco na preservação de bens",
      ],
      tag: "Cível",
      badge: "Segurança Jurídica",
      whatsappMsg:
        "Olá, Dra. Tharin Miranda! Gostaria de orientação jurídica sobre Direito Cível / Contratos / Indenização.",
    },
    {
      id: "familia-sucessoes",
      icon: Users,
      title: "Família & Sucessões",
      shortDesc:
        "Condução técnica, acolhedora e segura em inventários em cartório, partilha de herança, divórcios consensuais e ações de alimentos.",
      bullets: [
        "Inventário extrajudicial em cartório rápido, econômico e sem desgaste",
        "Inventários judiciais e partilha transparente e justa de bens familiares",
        "Divórcio consensual e litigioso com proteção patrimonial equilibrada",
        "Fixação, revisão e execução de pensão alimentícia e regulamentação de guarda",
      ],
      tag: "Família",
      badge: "Inventários & Partilhas",
      whatsappMsg:
        "Olá, Dra. Tharin Miranda! Preciso de orientação sobre Inventário / Partilha de Bens / Família.",
    },
    {
      id: "consultoria-estrategica",
      icon: Gavel,
      title: "Consultoria Jurídica Estratégica",
      shortDesc:
        "Atendimento personalizado na sede física em Matozinhos ou 100% digital em todo o Brasil. Diagnóstico honesto e plano de ação transparente.",
      bullets: [
        "Diagnóstico jurídico realista com avaliação prévia de viabilidade",
        "Atendimento acolhedor na Travessa da Esmeralda, 45 A ou por videochamada",
        "Negociação qualificada para acordos extrajudiciais rápidos e vantajosos",
        "Acompanhamento direto pela Dra. Tharin Miranda em todas as fases",
      ],
      tag: "Consultoria",
      badge: "Atendimento Exclusivo",
      whatsappMsg:
        "Olá, Dra. Tharin Miranda! Gostaria de agendar uma consulta para avaliar minha situação jurídica.",
    },
  ];

  // Avaliações Reais do Google Meu Negócio de Tharin Miranda Advocacia (Nota Máxima 5,0 ★)
  const depoimentosGoogle = [
    {
      author: "Marcela Dias",
      detail: "8 avaliações · 3 fotos no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Uma excelente profissional e muito competente em seu trabalho! Super indico o trabalho dela como advogada e tenham certeza na boa escolha em contrata-la.",
      highlight: "Excelente profissional e muito competente em seu trabalho",
    },
    {
      author: "Angélica Cupertino ODONTO",
      detail: "6 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "A Dra. Tharin é uma profissional atenciosa, comprometida, competente e, sobretudo, ética. Recomendo o eficiente trabalho dela!",
      highlight: "Atenciosa, comprometida, competente e ética",
    },
    {
      author: "Júlia Azevedo",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Profissional excelente! Ela é muito atenciosa, clara nas explicações e passa muita segurança durante todo o processo. Recomendo muito!",
      highlight: "Muito atenciosa, clara nas explicações e passa muita segurança",
    },
    {
      author: "Felipe Miranda",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "A melhor advogada da região!!",
      highlight: "A melhor advogada da região",
    },
    {
      author: "Leonardo Rodrigues",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Excelente profissional.",
      highlight: "Excelente profissional",
    },
    {
      author: "Lucia Andrade",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Ótima advogada, atendimento com muito respeito e dedicação.",
      highlight: "Ótima advocacia com respeito e dedicação",
    },
  ];

  // Diferenciais Competitivos de Tharin Miranda Advocacia
  const diferenciais = [
    {
      icon: Award,
      title: "Liderança Institucional na OAB",
      description:
        "A Dra. Tharin Miranda exerce a função de Secretária Geral da Subseção da OAB de Matozinhos/MG, assegurando rigor ético inegociável, prestígio institucional e credibilidade comprovada.",
    },
    {
      icon: HomeIcon,
      title: "Tríplice Especialização Estratégica",
      description:
        "Conhecimento técnico aprofundado em Direito Imobiliário, Direito do Trabalho e Direito Previdenciário, oferecendo soluções jurídicas completas e integradas para cada cliente.",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado & Seguro",
      description:
        "Atenção minuciosa, clareza didática nas explicações e constante tranquilidade repassada ao cliente em cada fase do processo, elogiada de forma unânime nas avaliações do Google.",
    },
    {
      icon: Star,
      title: "Nota Máxima 5,0 ★ Unânime no Google",
      description:
        "Reconhecimento espontâneo de clientes com nota máxima de 5 estrelas no Google Meu Negócio, atestando a competência, a eficiência e a excelência de nossa advocacia.",
    },
    {
      icon: MapPin,
      title: "Sede Acolhedora & Atendimento Nacional",
      description:
        "Escritório estruturado na Travessa da Esmeralda, 45 A - São Sebastião em Matozinhos - MG, aliado a uma moderna advocacia digital conectada aos Tribunais de todo o Brasil.",
    },
    {
      icon: Coins,
      title: "Honorários Claros & Total Transparência",
      description:
        "Contratos redigidos com absoluta transparência e ética, estritamente alinhados ao Código de Ética e Disciplina da OAB, sem letras miúdas ou custos inesperados.",
    },
  ];

  // Situações comuns (Diagnóstico Rápido)
  const situacoesDiagnostico = [
    {
      pergunta: "Possui imóvel sem escritura, terreno irregular ou precisa de usucapião?",
      orientacao:
        "A Dra. Tharin Miranda é especialista em regularização fundiária e imobiliária, conduzindo usucapião extrajudicial diretamente em cartório ou judicialmente para conferir segurança total ao seu patrimônio.",
      cta: "Regularizar Meu Imóvel",
      area: "Direito Imobiliário",
    },
    {
      pergunta: "Teve seus direitos desrespeitados na empresa ou sofreu demissão irregular?",
      orientacao:
        "Análise rigorosa do seu contrato de trabalho, cálculo minucioso de verbas rescisórias, horas extras, adicionais de insalubridade/periculosidade e reversão de justas causas arbitrárias.",
      cta: "Analisar Meu Caso Trabalhista",
      area: "Direito do Trabalho",
    },
    {
      pergunta: "Teve aposentadoria ou auxílio negado pelo INSS ou deseja planejar o benefício?",
      orientacao:
        "Realizamos o planejamento previdenciário minucioso e ingressamos com ações contra o INSS para concessão e restabelecimento de aposentadorias, auxílio-doença e BPC/LOAS com rapidez.",
      cta: "Consultar Benefício do INSS",
      area: "Direito Previdenciário",
    },
    {
      pergunta: "Precisa realizar inventário de bens da família ou formalizar um divórcio?",
      orientacao:
        "Condução sensível e ágil de inventários em cartório (rápidos e menos onerosos) e partilhas judiciais, além de divórcios consensuais e ações de pensão alimentícia com proteção patrimonial justa.",
      cta: "Orientação em Inventário & Família",
      area: "Família & Sucessões",
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "Como funciona a primeira consulta com a Dra. Tharin Miranda?",
      answer:
        "O primeiro atendimento é privativo, detalhado e humanizado. Pode ser realizado presencialmente em nosso escritório na Travessa da Esmeralda, 45 A em Matozinhos - MG ou de forma 100% digital por videochamada ou WhatsApp para qualquer cidade do Brasil. Analisamos sua documentação e explicamos de maneira clara as chances e os melhores caminhos para o seu caso.",
    },
    {
      question: "O escritório atende apenas em Matozinhos ou em outras regiões?",
      answer:
        "Atendemos presencialmente toda a região de Matozinhos, Sete Lagoas, Capim Branco, Prudente de Morais, Pedro Leopoldo, Vespasiano e Grande BH. Além disso, através do processo eletrônico (PJe), atuamos de forma digital com plena agilidade e segurança jurídica perante Tribunais em todo o território nacional.",
    },
    {
      question: "Como funciona o processo de usucapião para regularizar um imóvel?",
      answer:
        "O usucapião permite obter a escritura definitiva de posse pacífica e prolongada de um imóvel urbano ou rural. Sempre que os requisitos legais forem preenchidos, podemos ingressar com o Usucapião Extrajudicial diretamente no Cartório de Registro de Imóveis, o que reduz consideravelmente o tempo e os custos em relação à via judicial.",
    },
    {
      question: "O que fazer se o INSS negou meu pedido de aposentadoria ou auxílio?",
      answer:
        "Não se desespere, pois o indeferimento administrativo é muito comum. A Dra. Tharin Miranda analisa a carta de indeferimento, reúne os laudos médicos ou documentos de tempo de contribuição faltantes e ingressa com recurso administrativo ou ação judicial na Justiça Federal para garantir o benefício com retroativos desde a data do primeiro pedido.",
    },
    {
      question: "Quais documentos devo separar para uma análise de causa trabalhista?",
      answer:
        "Recomenda-se reunir: Carteira de Trabalho (física ou app CTPS Digital), últimos holerites ou extratos bancários de pagamento, extrato analítico do FGTS, termo de rescisão contratual (se já houver sido desligado) e eventuais conversas, e-mails ou atestados médicos pertinentes.",
    },
    {
      question: "Como são definidos os honorários da advocacia?",
      answer:
        "Trabalhamos com total clareza e previsibilidade. Nossos contratos de honorários seguem rigorosamente a tabela e o Código de Ética e Disciplina da OAB/MG. Em diversas demandas (como causas trabalhistas e previdenciárias), viabilizamos condições alinhadas ao êxito da causa, sem surpresas para o cliente.",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#d4a34b] selection:text-[#0b0c10]">
        {/* ========================================================================= */}
        {/* 1. TOP NOTICE / PRE-HEADER                                               */}
        {/* ========================================================================= */}
        <div className="border-b border-[#262118] bg-gradient-to-r from-[#08090d] via-[#10121a] to-[#151821] px-4 py-2 text-white">
          <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-2 px-4 sm:px-6 lg:px-8 xl:px-12 text-xs">
            <div className="flex items-center gap-2 font-medium">
              <span className="flex size-2 rounded-full bg-[#f5d77f] animate-pulse" />
              <span className="text-[#fbf3d1] font-semibold">
                Tharin Miranda Advocacia &bull; Matozinhos - MG
              </span>
              <span className="hidden sm:inline text-amber-500/60">|</span>
              <span className="hidden sm:inline text-slate-300">
                ⚖️ Imobiliário &bull; Trabalhista &bull; Previdenciário &bull; Secretária Geral OAB Matozinhos
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-amber-300 transition-colors hover:text-white"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-white">5,0 ★</span>
                <span className="text-amber-200/80">(12 avaliações no Google)</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 font-semibold text-[#f5d77f] hover:text-white transition-colors"
              >
                <WhatsAppIcon size={13} className="text-[#25D366]" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. NAVBAR                                                                 */}
        {/* ========================================================================= */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            isScrolled
              ? "border-b border-[#e7e0d3] bg-white/95 shadow-md shadow-black/5 backdrop-blur-md"
              : "border-b border-[#f0ebe1] bg-white/90 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8 xl:px-12">
            {/* Left: Logo */}
            <div className="flex flex-1 items-center justify-start min-w-0">
              <a
                href="#inicio"
                aria-label="Tharin Miranda Advocacia - Início"
                onClick={closeMenu}
                className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-95"
              >
                <div className="relative size-10 sm:size-11 lg:size-12 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Tharin Miranda Advocacia Monograma"
                    fill
                    priority
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-cinzel text-sm sm:text-base lg:text-lg font-extrabold tracking-[0.14em] text-[#0e1017] leading-tight whitespace-nowrap">
                    THARIN MIRANDA
                  </span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold tracking-[0.22em] text-[#c88a2c] uppercase mt-0.5 whitespace-nowrap">
                    ADVOCACIA &bull; MATOZINHOS - MG
                  </span>
                </div>
              </a>
            </div>

            {/* Center: Navigation Links */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex flex-none items-center justify-center gap-4 xl:gap-6 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-xs font-semibold tracking-[0.08em] px-4"
            >
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#sobre">
                Dra. Tharin Miranda
              </a>
              <a className="nav-link hidden xl:inline-block" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5.0 ★)
              </a>
              <a className="nav-link hidden 2xl:inline-block" href="#faq">
                Dúvidas
              </a>
              <a className="nav-link" href="#contato">
                Contato &amp; Sede
              </a>
            </nav>

            {/* Right: CTA Button & Mobile Toggle */}
            <div className="flex flex-1 items-center justify-end">
              <div className="hidden lg:flex items-center shrink-0">
                <GlowingButton
                  variant="gold"
                  size="sm"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  className="shadow-sm whitespace-nowrap"
                >
                  <WhatsAppIcon size={14} className="text-[#1a0e03]" />
                  <span>Consulta no WhatsApp</span>
                </GlowingButton>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
                aria-label="Abrir menu de navegação"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-slate-200 bg-white px-5 py-5 lg:hidden shadow-xl"
              >
                <div className="flex flex-col gap-3.5 text-sm font-semibold tracking-wide">
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#c88a2c]"
                    href="#inicio"
                    onClick={closeMenu}
                  >
                    Início
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#c88a2c]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#c88a2c]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    Sobre a Dra. Tharin Miranda
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#c88a2c]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Nossos Diferenciais
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#c88a2c]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (5.0 ★)
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#c88a2c]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#c88a2c]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Sede em Matozinhos &amp; Contato
                  </a>

                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                    <GlowingButton
                      variant="gold"
                      size="md"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} className="text-[#1a0e03]" />
                      <span>Falar no WhatsApp</span>
                    </GlowingButton>
                    <a
                      href={`tel:${WHATSAPP_NUMBER}`}
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      <Phone size={14} className="text-[#c88a2c]" />
                      <span>Ligar: {PHONE_DISPLAY}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ========================================================================= */}
        {/* 3. HERO SECTION                                                          */}
        {/* ========================================================================= */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-gradient-to-b from-[#08090d] via-[#10131b] to-[#0c0e14] text-white py-14 sm:py-20 lg:py-24"
        >
          {/* Luminous Ambient Warm Gold Glow */}
          <div className="pointer-events-none absolute -top-24 left-0 size-[650px] rounded-full bg-[#d4a34b]/15 blur-[140px]" />
          <div className="pointer-events-none absolute top-1/3 -left-20 size-[500px] rounded-full bg-[#9d5b16]/15 blur-[130px]" />
          <div className="pointer-events-none absolute top-1/2 -right-40 size-96 rounded-full bg-[#c88a2c]/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Copy & CTAs */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="lg:col-span-7"
              >
                {/* Eyebrow Badge */}
                <motion.div variants={fadeInUp} className="mb-4">
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-300/40 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase text-[#fbf3d1] shadow-lg backdrop-blur-md">
                    <Scale size={14} className="text-[#f5d77f]" />
                    <span>Tharin Miranda Advocacia &bull; Matozinhos - MG</span>
                  </div>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-cinzel text-3xl font-extrabold leading-[1.18] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                >
                  Advocacia combativa, estratégica e de{" "}
                  <span className="text-gradient-gold font-black drop-shadow-[0_2px_16px_rgba(212,163,75,0.4)]">
                    alta precisão
                  </span>{" "}
                  para seus direitos.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-base text-slate-100 sm:text-lg sm:leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                >
                  Defesa especializada e resolutiva em{" "}
                  <strong className="text-white font-bold underline decoration-[#d4a34b]/60 underline-offset-4">
                    Direito Imobiliário, Trabalhista e Previdenciário
                  </strong>
                  . Conduzido pela{" "}
                  <strong className="text-white font-bold">
                    Dra. Tharin Miranda
                  </strong>
                  , Secretária Geral da OAB de Matozinhos/MG, com atendimento humanizado, sede física em Matozinhos e alcance digital de excelência em todo o Brasil.
                </motion.p>

                {/* Authority Badges Checklist */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs sm:text-sm text-white"
                >
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#f5d77f] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Nota máxima 5,0 ★ no Google (12 avaliações)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#f5d77f] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Secretária Geral da OAB de Matozinhos/MG
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#f5d77f] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Especialista em Regularização de Imóveis &amp; Usucapião
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#f5d77f] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Sede: Travessa da Esmeralda, 45 A - Matozinhos
                    </span>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    variant="gold"
                    size="lg"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    className="shadow-2xl shadow-black/50"
                  >
                    <WhatsAppIcon size={18} className="text-[#1a0e03]" />
                    <span>Falar no WhatsApp com a Dra. Tharin</span>
                  </GlowingButton>

                  <a
                    href="#atuacao"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-amber-400/40 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#fbf3d1] backdrop-blur-md transition-all hover:border-[#f5d77f] hover:bg-[#d4a34b] hover:text-[#0b0c10] shadow-lg"
                  >
                    <span>Conhecer Áreas de Atuação</span>
                    <ArrowRight size={14} />
                  </a>
                </motion.div>

                {/* Micro Proof Footer */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-slate-100"
                >
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 border border-amber-400/30 px-3 py-1.5 backdrop-blur-xs">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="font-bold text-white text-sm">5,0 de 5,0</span>
                  </div>
                  <span className="text-white/40">&bull;</span>
                  <span className="font-medium text-white">12 avaliações no Google Meu Negócio</span>
                  <span className="text-white/40">&bull;</span>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#f5d77f] hover:text-white underline flex items-center gap-1 transition-colors"
                  >
                    <span>Ver no Google</span>
                    <ArrowUpRight size={13} />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Column: Dra. Tharin Miranda Portrait Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Decorative Glowing Frame */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#d4a34b]/40 via-[#f5d77f]/20 to-transparent blur-md" />

                  {/* Main Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300/60 bg-[#0e1017] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Tharin Miranda - Tharin Miranda Advocacia em Matozinhos MG"
                        fill
                        priority
                        className="object-cover object-top filter contrast-[1.03]"
                      />

                      {/* Gradient Overlay for bottom text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/25 to-transparent" />

                      {/* Card Lower Badge */}
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-amber-300/40 bg-[#08090d]/90 p-3.5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                              Dra. Tharin Miranda
                            </p>
                            <p className="text-[10px] sm:text-xs font-semibold text-[#f5d77f] uppercase tracking-wider mt-0.5">
                              Secretária Geral da OAB Matozinhos/MG
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={11}
                                  className="fill-amber-400 text-amber-400"
                                />
                              ))}
                            </div>
                            <span className="text-[10px] font-bold text-white mt-0.5">
                              5,0 ★ no Google (12)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Top-Right */}
                  <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 rounded-xl border border-amber-300/60 bg-[#08090d]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-amber-400/15 text-[#f5d77f]">
                      <Scale size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#e7cc99]">
                        Institucional
                      </p>
                      <p className="text-xs font-bold text-white">
                        OAB Matozinhos/MG
                      </p>
                    </div>
                  </div>

                  {/* Floating Trust Card Bottom-Left */}
                  <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2.5 rounded-xl border border-amber-400/30 bg-[#0e1017]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                        Atendimento Ágil
                      </p>
                      <p className="text-xs font-bold text-white">
                        Presencial &amp; Digital
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. TRUST & AUTHORITY NUMBERS BAR                                         */}
        {/* ========================================================================= */}
        <section className="border-y border-[#e7e0d3] bg-[#faf8f5] py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-[#0e1017]">
                  <span>5,0</span>
                  <div className="flex text-amber-500">
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c88a2c] mt-1">
                  Nota Máxima Google
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  12 avaliações 100% 5 estrelas
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0e1017]">
                  OAB/MG
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c88a2c] mt-1">
                  Secretária Geral
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  Subseção de Matozinhos/MG
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0e1017]">
                  Matozinhos - MG
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c88a2c] mt-1">
                  Sede Própria Acolhedora
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  Travessa da Esmeralda, 45 A
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0e1017]">
                  Nacional
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c88a2c] mt-1">
                  Atendimento Digital
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  Atuação em todo o Brasil (PJe)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. DIAGNÓSTICO JURÍDICO RÁPIDO ("VOCÊ SE IDENTIFICA?")                    */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="eyebrow-gold justify-center mb-3">
                Diagnóstico Jurídico Especializado
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e1017]">
                Você se identifica com alguma dessas situações jurídicas?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Não deixe seus direitos imobiliários, trabalhistas ou previdenciários desprotegidos.
                Conte com orientação técnica e acolhedora desde o primeiro momento:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {situacoesDiagnostico.map((sit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#e7e0d3] bg-[#faf8f5] p-6 sm:p-8 transition-all hover:border-[#c88a2c] hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-[#c88a2c]">
                        <AlertCircle size={20} />
                      </div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#0e1017] leading-snug">
                        {sit.pergunta}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-12">
                      {sit.orientacao}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#e7e0d3] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openConsultModal(sit.area)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c88a2c] hover:text-[#9d5b16] transition-colors cursor-pointer"
                    >
                      <span>{sit.cta}</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Olá, Dra. Tharin Miranda! ${sit.pergunta}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg bg-[#25D366] text-white hover:brightness-110 transition-all shadow-xs"
                      aria-label="Falar no WhatsApp sobre esta dúvida jurídica"
                    >
                      <WhatsAppIcon size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PILARES DE ATUAÇÃO / ÁREAS ESPECIALIZADAS                             */}
        {/* ========================================================================= */}
        <section
          id="atuacao"
          className="relative bg-gradient-to-b from-[#08090d] via-[#10131b] to-[#151821] text-white py-16 sm:py-24"
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Pilares de Atuação &bull; Advocacia de Excelência
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                Como atuamos na defesa dos seus direitos
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Atuação consultiva preventiva e contenciosa combativa em instâncias judiciais
                e cartoriais com rigor técnico, clareza e dedicação absoluta.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {areasAtuacao.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-amber-400/20 bg-[#161a22]/90 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/10"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-500/5 border border-amber-400/30 text-[#f5d77f] group-hover:scale-105 transition-transform">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full border border-amber-300/40 bg-amber-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#fbf3d1]">
                          {area.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#f5d77f] transition-colors">
                        {area.title}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {area.shortDesc}
                      </p>

                      {/* Bullets */}
                      <div className="mt-5 space-y-2 border-t border-slate-700/60 pt-5">
                        {area.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-[#f5d77f] shrink-0 mt-0.5"
                            />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-8 pt-5 border-t border-slate-700/60">
                      <a
                        href={getWhatsAppUrl(area.whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-amber-400/40 bg-white/5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#fbf3d1] transition-all hover:bg-[#d4a34b] hover:text-[#0b0c10] hover:border-[#f5d77f]"
                      >
                        <WhatsAppIcon size={14} />
                        <span>Consultar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Consultation Banner */}
            <div className="mt-14 rounded-2xl border-2 border-amber-300/40 bg-gradient-to-r from-[#08090d] via-[#10131b] to-[#161a22] p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                <div>
                  <div className="eyebrow-light mb-2">
                    Precisa de Orientação Imediata?
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Fale diretamente com a Dra. Tharin Miranda
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-2xl">
                    Envie uma mensagem resumindo sua necessidade. Analisamos seu caso com total sigilo
                    e atenção para indicar a estratégia jurídica mais segura e eficaz.
                  </p>
                </div>

                <GlowingButton
                  variant="gold"
                  size="lg"
                  href={getWhatsAppUrl(
                    "Olá, Dra. Tharin Miranda! Gostaria de uma avaliação jurídica para entender o caminho mais adequado para o meu caso."
                  )}
                  target="_blank"
                  className="shrink-0"
                >
                  <WhatsAppIcon size={17} className="text-[#1a0e03]" />
                  <span>Tirar Dúvida Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. SOBRE A ADVOGADA & ESTRUTURA                                           */}
        {/* ========================================================================= */}
        <section id="sobre" className="py-16 sm:py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Photo of Dra. Tharin Miranda on Left */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Subtle Accent Glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#d4a34b]/20 to-transparent blur-lg" />

                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#e7e0d3] bg-[#08090d] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={FOTO_PERFIL_SRC}
                        alt="Dra. Tharin Miranda - Especialista em Direito Imobiliário, Trabalho e Previdenciário"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/85 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-amber-300/30 bg-black/60 p-3.5 backdrop-blur-md text-white text-center">
                        <p className="font-cinzel text-base font-bold text-white">
                          Dra. Tharin Miranda
                        </p>
                        <p className="text-[11px] text-[#f5d77f] mt-0.5">
                          Secretária Geral da OAB de Matozinhos/MG &bull; Especialista
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Details on Right */}
              <div className="lg:col-span-7">
                <div className="eyebrow-gold mb-3">Sobre a Advogada &amp; Atuação</div>

                <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1017] leading-tight">
                  Advocacia ética, acolhedora e com dedicação profunda a cada cliente em Matozinhos e em todo o Brasil.
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    A advocacia liderada pela <strong className="text-[#0e1017]">Dra. Tharin Miranda</strong> é
                    pautada na união entre o rigor técnico aprofundado e um atendimento verdadeiramente humanizado,
                    acolhendo quem busca resguardar seu patrimônio, seu trabalho ou seu benefício.
                  </p>
                  <p>
                    Com expressiva atuação e credibilidade na comunidade jurídica, a Dra. Tharin Miranda exerce
                    o cargo institucional de <strong className="text-[#0e1017]">Secretária Geral da Subseção da OAB de Matozinhos/MG</strong>,
                    reforçando seu compromisso intransigente com a ética, a transparência e as prerrogativas da classe.
                  </p>
                  <p>
                    Com sede física estabelecida na <strong className="text-[#0e1017]">Travessa da Esmeralda, 45 A - São Sebastião, Matozinhos - MG</strong>,
                    o escritório oferece um ambiente privativo, acolhedor e seguro para consultas presenciais, ao mesmo tempo em que disponibiliza
                    uma moderna infraestrutura digital para atender clientes de qualquer região do Brasil com nota máxima 5,0 ★ no Google.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="mt-6 rounded-xl border-l-4 border-[#c88a2c] bg-[#faf8f5] p-4 sm:p-5">
                  <p className="italic text-sm text-slate-800">
                    &ldquo;A Dra. Tharin é uma profissional atenciosa, comprometida, competente e, sobretudo, ética... Ela é muito clara nas explicações e passa muita segurança durante todo o processo. Recomendo muito!&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#c88a2c] uppercase tracking-wider">
                    — Síntese das avaliações verificadas de clientes no Google Meu Negócio (Nota Máxima 5,0 ★)
                  </p>
                </div>

                {/* Social & Contact Strip */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl()}
                    target="_blank"
                  >
                    <WhatsAppIcon size={16} className="text-[#1a0e03]" />
                    <span>Falar Diretamente com a Dra. Tharin</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#c88a2c] hover:text-[#c88a2c]"
                  >
                    <InstagramIcon size={16} className="text-[#E1306C]" />
                    <span>Instagram {INSTAGRAM_HANDLE}</span>
                  </a>

                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#c88a2c] hover:text-[#c88a2c]"
                  >
                    <GoogleIcon size={16} />
                    <span>Google Meu Negócio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. DIFERENCIAIS                                                           */}
        {/* ========================================================================= */}
        <section id="diferenciais" className="py-16 sm:py-24 bg-[#faf8f5] border-t border-[#e7e0d3]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-gold justify-center mb-3">
                Por Que Escolher Tharin Miranda Advocacia
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1017]">
                Diferenciais que asseguram a satisfação absoluta de nossos clientes
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Uma experiência jurídica com seriedade, clareza didática e dedicação autêntica.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {diferenciais.map((dif, idx) => {
                const IconComp = dif.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#e7e0d3] bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-[#c88a2c] hover:shadow-md"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500/10 text-[#c88a2c] mb-5">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-[#0e1017]">
                      {dif.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {dif.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. PASSO A PASSO (COMO FUNCIONA O ATENDIMENTO)                           */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
              <div className="eyebrow-gold justify-center mb-3">
                Processo Transparente e Seguro
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1017]">
                Como funciona o seu atendimento jurídico
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Do primeiro contato até a resolução satisfatória da sua demanda:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="relative rounded-2xl border border-[#e7e0d3] bg-[#faf8f5] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#08090d] text-[#f5d77f] font-bold text-lg mb-4 border border-amber-400/40">
                  1
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0e1017]">
                  Primeiro Contato
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Você nos envia uma mensagem no WhatsApp ou nos liga, resume sua situação e agendamos
                  sua consulta presencial em Matozinhos ou online.
                </p>
              </div>

              <div className="relative rounded-2xl border border-[#e7e0d3] bg-[#faf8f5] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#08090d] text-[#f5d77f] font-bold text-lg mb-4 border border-amber-400/40">
                  2
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0e1017]">
                  Análise Técnica
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  A Dra. Tharin Miranda avalia minuciosamente contratos, escrituras, laudos ou documentos
                  para estruturar a melhor estratégia jurídica.
                </p>
              </div>

              <div className="relative rounded-2xl border border-[#e7e0d3] bg-[#faf8f5] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#08090d] text-[#f5d77f] font-bold text-lg mb-4 border border-amber-400/40">
                  3
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0e1017]">
                  Definição Estratégica
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Apresentamos o plano com total clareza quanto a prazos, honorários justos e as etapas
                  necessárias para defender seu direito com eficácia.
                </p>
              </div>

              <div className="relative rounded-2xl border border-[#e7e0d3] bg-[#faf8f5] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#08090d] text-[#f5d77f] font-bold text-lg mb-4 border border-amber-400/40">
                  4
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0e1017]">
                  Atuação &amp; Acompanhamento
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Execução diligente em cartórios, instâncias judiciais ou administrativas, com atualizações
                  periódicas diretamente com você.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                variant="gold"
                size="lg"
                href={getWhatsAppUrl()}
                target="_blank"
              >
                <WhatsAppIcon size={17} className="text-[#1a0e03]" />
                <span>Iniciar Minha Consulta no WhatsApp</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. AVALIAÇÕES REAIS DO GOOGLE (PROVA SOCIAL)                             */}
        {/* ========================================================================= */}
        <section
          id="avaliacoes"
          className="py-16 sm:py-24 bg-gradient-to-b from-[#08090d] via-[#10131b] to-[#151821] text-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Prova Social &bull; Google Meu Negócio
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                O que dizem os clientes no Google
              </h2>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xl font-bold text-white">5,0 de 5,0 estrelas</span>
                <span className="text-sm text-[#e7cc99]">
                  (12 avaliações verificadas no Google)
                </span>
              </div>
            </div>

            {/* Grid of Reviews */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {depoimentosGoogle.map((dep, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-amber-400/20 bg-[#161a22]/80 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-amber-300 transition-all"
                >
                  <div>
                    {/* Stars and Google Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(dep.stars)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <GoogleIcon size={14} />
                        <span>Google Review</span>
                      </div>
                    </div>

                    {/* Highlight */}
                    <p className="text-xs font-bold text-[#f5d77f] mb-2 uppercase tracking-wider">
                      {dep.highlight}
                    </p>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      &ldquo;{dep.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-[#f5d77f] border border-amber-400/30">
                      {dep.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-white">
                        {dep.author}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {dep.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to view on Google */}
            <div className="mt-12 text-center">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-400/40 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:border-[#f5d77f] hover:bg-white/10 transition-colors"
              >
                <GoogleIcon size={16} />
                <span>Ver Avaliações no Google Meu Negócio</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. FAQ                                                                   */}
        {/* ========================================================================= */}
        <section id="faq" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="eyebrow-gold justify-center mb-3">
                Dúvidas Frequentes
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1017]">
                Perguntas Frequentes sobre Atuação &amp; Serviços
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Respostas diretas e orientações claras sobre como conduzimos as demandas de nossos clientes.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-[#e7e0d3] bg-[#faf8f5] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#0e1017] hover:text-[#c88a2c] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#c88a2c] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-[#e7e0d3] px-5 pb-5 pt-3"
                        >
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 rounded-2xl border border-[#e7e0d3] bg-[#faf8f5] p-6 text-center">
              <p className="font-cinzel text-base font-bold text-[#0e1017]">
                Ainda tem alguma dúvida sobre a sua situação específica?
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                A Dra. Tharin Miranda está à disposição para esclarecer seu caso com ética, sigilo e rapidez.
              </p>
              <div className="mt-4">
                <GlowingButton
                  variant="gold"
                  size="md"
                  href={getWhatsAppUrl("Olá, Dra. Tharin Miranda! Tenho uma dúvida sobre o meu caso e gostaria de orientação jurídica.")}
                  target="_blank"
                >
                  <WhatsAppIcon size={15} className="text-[#1a0e03]" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. CONTATO & SEDE EM MATOZINHOS - MG                                     */}
        {/* ========================================================================= */}
        <section id="contato" className="py-16 sm:py-24 bg-[#faf8f5] border-t border-[#e7e0d3]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Contact Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-gold mb-3">Atendimento &amp; Sede</div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1017]">
                    Entre em contato e agende sua consulta
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Atendimento presencial em nossa sede em Matozinhos - MG ou 100% digital
                    com atendimento ágil para clientes de todo o Brasil. Escolha o canal de sua preferência.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#c88a2c]">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1017] uppercase tracking-wider">
                          Endereço da Sede
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          {ADDRESS_TEXT}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Matozinhos - Minas Gerais &bull; CEP 35720-000
                        </p>
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#c88a2c] hover:underline"
                        >
                          <span>Como chegar no Google Maps</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#c88a2c]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1017] uppercase tracking-wider">
                          Telefone &amp; WhatsApp
                        </p>
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#c88a2c] mt-0.5 block"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#c88a2c]">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1017] uppercase tracking-wider">
                          E-mail de Contato
                        </p>
                        <a
                          href={`mailto:${EMAIL_CONTACT}`}
                          className="text-sm font-semibold text-slate-800 hover:text-[#c88a2c] mt-0.5 block"
                        >
                          {EMAIL_CONTACT}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#c88a2c]">
                        <InstagramIcon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1017] uppercase tracking-wider">
                          Instagram Oficial
                        </p>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#c88a2c] mt-0.5 block"
                        >
                          {INSTAGRAM_HANDLE}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#c88a2c]">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1017] uppercase tracking-wider">
                          Horário de Funcionamento
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          Segunda a Sexta das 08:00 às 16:00
                        </p>
                        <p className="text-xs text-slate-500">
                          Atendimento presencial e digital com agendamento prévio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e7e0d3]">
                  <GlowingButton
                    variant="gold"
                    size="lg"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={18} className="text-[#1a0e03]" />
                    <span>Falar no WhatsApp Agora</span>
                  </GlowingButton>
                </div>
              </div>

              {/* Map & Office Card Column */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[#e7e0d3] bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="relative size-8 shrink-0">
                        <Image
                          src={LOGO_SYMBOL_SRC}
                          alt="Tharin Miranda Advocacia Monograma"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-cinzel text-sm font-bold text-[#0e1017]">
                          Tharin Miranda Advocacia
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Matozinhos - MG
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 border border-amber-200">
                      <Star size={12} className="fill-amber-400 text-amber-500" />
                      <span>5,0 ★ Google (12)</span>
                    </div>
                  </div>

                  {/* Interactive Map Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <iframe
                      title="Localização de Tharin Miranda Advocacia em Matozinhos - MG"
                      src="https://maps.google.com/maps?q=Travessa+da+Esmeralda,+45+A+-+S%C3%A3o+Sebastiao,+Matozinhos+-+MG,+35720-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="size-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                    <span>Travessa da Esmeralda, 45 A - Matozinhos - MG</span>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#c88a2c] hover:underline flex items-center gap-1"
                    >
                      <span>Abrir Rotas no GPS</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 13. FOOTER                                                                */}
        {/* ========================================================================= */}
        <footer className="border-t border-[#262118] bg-gradient-to-b from-[#08090d] to-[#040507] text-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 pb-12 border-b border-slate-800">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <a
                  href="#inicio"
                  className="flex items-center gap-3.5 transition-opacity hover:opacity-95"
                >
                  <div className="relative size-13 sm:size-14 shrink-0">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Tharin Miranda Advocacia Monograma"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-cinzel text-lg sm:text-xl font-extrabold tracking-[0.14em] text-white leading-tight">
                      THARIN MIRANDA
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#f5d77f] uppercase mt-0.5">
                      ADVOCACIA &bull; MATOZINHOS - MG
                    </span>
                  </div>
                </a>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                  {FIRM_SLOGAN}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#f5d77f] hover:text-[#f5d77f]"
                    aria-label="Instagram de Tharin Miranda Advocacia"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                    aria-label="WhatsApp de Tharin Miranda Advocacia"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-amber-400 hover:text-amber-400"
                    aria-label="Perfil no Google Meu Negócio"
                  >
                    <GoogleIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-3">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#f5d77f] mb-4">
                  Áreas de Atuação
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Imobiliário &amp; Usucapião
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito do Trabalho
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Previdenciário (INSS)
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Cível &amp; Contratos
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Família &amp; Sucessões (Inventários)
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Consultoria Jurídica Estratégica
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Office */}
              <div className="lg:col-span-4">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#f5d77f] mb-4">
                  Sede &amp; Contato
                </p>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#f5d77f] shrink-0 mt-0.5" />
                    <span>{ADDRESS_TEXT}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-[#f5d77f] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                    Atendimento de Segunda a Sexta das 08:00 às 16:00.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright & OAB Ethics Notice */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Tharin Miranda Advocacia.
                Todos os direitos reservados.
              </p>
              <p className="max-w-xl text-[10px] leading-relaxed">
                Este site possui finalidade informativa e institucional, em estrita observância
                às normas do Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB).
              </p>
            </div>
          </div>
        </footer>

        {/* ========================================================================= */}
        {/* 14. FLOATING WHATSAPP BUTTON                                              */}
        {/* ========================================================================= */}
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 rounded-full border-2 border-white/80 bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d]"
            aria-label="Falar com a Dra. Tharin Miranda no WhatsApp"
          >
            <span className="absolute -top-1 -right-1 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-white" />
            </span>
            <WhatsAppIcon size={22} className="text-white" />
            <span className="hidden sm:inline text-xs font-bold tracking-wide uppercase">
              Falar no WhatsApp
            </span>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 15. MODAL DE CONSULTA RÁPIDA                                              */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalOpen(false)}
                className="fixed inset-0 bg-black/75 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                className="relative z-10 w-full max-w-lg rounded-2xl border-2 border-amber-300/60 bg-gradient-to-b from-[#08090d] to-[#151821] p-6 sm:p-8 text-white shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
                  aria-label="Fechar janela"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="relative size-10 shrink-0">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Tharin Miranda Advocacia Monograma"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      Análise Jurídica Especializada
                    </h3>
                    <p className="text-xs text-[#f5d77f] font-semibold">
                      {modalArea}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Para analisar sua demanda com sigilo, agilidade e rigor técnico, você será
                  redirecionado ao atendimento oficial da{" "}
                  <strong className="text-white">Dra. Tharin Miranda</strong>.
                </p>

                <div className="mt-5 space-y-2 rounded-xl border border-amber-400/20 bg-white/5 p-4 text-xs text-slate-300">
                  <p className="font-bold text-white uppercase tracking-wider text-[11px] text-[#f5d77f]">
                    O que ter em mãos (se aplicável):
                  </p>
                  <ul className="space-y-1 pl-1">
                    <li>&bull; Nome completo e cidade onde reside</li>
                    <li>&bull; Breve resumo da situação ou questão jurídica</li>
                    <li>&bull; Documentos, contratos, certidões ou comprovantes do caso</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl(
                      `Olá, Dra. Tharin Miranda! Gostaria de uma avaliação jurídica sobre: ${modalArea}.`
                    )}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} className="text-[#1a0e03]" />
                    <span>Prosseguir para o WhatsApp</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="rounded-lg py-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Voltar ao site
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
