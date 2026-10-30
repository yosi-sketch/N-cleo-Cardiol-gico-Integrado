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
  Briefcase,
  AlertCircle,
  Gavel,
  Coins,
  Award,
  Home as HomeIcon,
  ShieldAlert,
  GraduationCap,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537991373661";
const PHONE_DISPLAY = "(37) 99137-3661";
const EMAIL_CONTACT = "contato@rafaelnascimento.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/advrafaelnascimento/";
const INSTAGRAM_HANDLE = "@advrafaelnascimento";
const LINKTREE_URL = "https://linktr.ee/rafaelnascimentoadv";

const FIRM_NAME = "Rafael Nascimento Advocacia";
const FIRM_SHORT_NAME = "Rafael Nascimento";
const FIRM_SLOGAN =
  "Defesa Criminal Estratégica e Soluções Cíveis de alta precisão técnica. Atendimento presencial em Itapecerica - MG e digital em todo o Brasil.";
const LAWYER_NAME = "Dr. Rafael Nascimento";
const LAWYER_TITLE =
  "Advogado Criminal e Cível · Especialista em Ciências Criminais (PUC Minas)";

const ADDRESS_TEXT =
  "R. Cônego Cesário, 282 - Sl 04 - Centro, Itapecerica - MG, 35550-000";
const REGION_TEXT =
  "Itapecerica · Centro-Oeste Mineiro & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Rafael+Nascimento+%E2%80%94+Advogado%0AItapecerica+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+C%C3%B4nego+Ces%C3%A1rio%2C+282+-+Sl+04+-+Centro%2C+Itapecerica+-+MG%2C+35550-000";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/dr-rafael-nascimento.jpg";
const FOTO_PERFIL_SRC = "/dr-rafael-nascimento.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Rafael Nascimento! Gostaria de agendar uma consulta jurídica e conversar sobre o meu caso.";
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

  // Pilares Oficiais de Atuação de Rafael Nascimento Advocacia
  const areasAtuacao = [
    {
      id: "direito-criminal",
      icon: ShieldAlert,
      title: "Direito Criminal & Defesa Penal Estratégica",
      shortDesc:
        "Especialização central conduzida pelo Dr. Rafael Nascimento (PUC Minas). Atuação combativa e técnica em flagrantes, inquéritos e ações penais com urgência e sigilo absoluto.",
      bullets: [
        "Audiências de custódia e flagrantes com atendimento imediato 24 horas",
        "Acompanhamento em inquéritos policiais, delegacias e oitivas",
        "Habeas Corpus, revogação de prisão preventiva e liberdade provisória",
        "Defesa perante o Tribunal do Júri e sustentações em Tribunais (TJMG, STJ e STF)",
        "Execução Penal: progressão de regime, livramento condicional e remição de pena",
      ],
      tag: "Penal",
      badge: "Especialidade Principal",
      whatsappMsg:
        "Olá, Dr. Rafael Nascimento! Preciso de orientação jurídica com urgência sobre causa Criminal / Flagrante / Inquérito.",
    },
    {
      id: "direito-civel",
      icon: Scale,
      title: "Direito Cível & Reparação de Danos",
      shortDesc:
        "Atuação resolutiva e estratégica em ações indenizatórias, cobranças judiciais e defesa patrimonial, garantindo a recomposição justa dos seus direitos.",
      bullets: [
        "Ações de indenização por danos materiais, morais e lucros cessantes",
        "Cobrança judicial e extrajudicial de títulos, dívidas e contratos inadimplidos",
        "Ações de execução, embargos à execução e defesa técnica de patrimônio",
        "Resolução contenciosa e preventiva de litígios civis e obrigações de fazer",
      ],
      tag: "Cível",
      badge: "Defesa Patrimonial",
      whatsappMsg:
        "Olá, Dr. Rafael Nascimento! Gostaria de consultoria jurídica sobre Direito Cível / Indenização / Cobrança.",
    },
    {
      id: "contratos-negocios",
      icon: FileText,
      title: "Contratos & Segurança Jurídica",
      shortDesc:
        "Elaboração, análise e blindagem técnica de instrumentos contratuais para pessoas físicas e empresas, prevenindo riscos financeiros e litígios futuros.",
      bullets: [
        "Redação minuciosa e revisão de contratos civis, comerciais e de serviços",
        "Blindagem de cláusulas rescisórias, multas e garantias contratuais",
        "Assessoria em distratos amigáveis e renegociação extrajudicial de acordos",
        "Notificações extrajudiciais formais para resguardo legal imediato",
      ],
      tag: "Contratos",
      badge: "Prevenção de Litígios",
      whatsappMsg:
        "Olá, Dr. Rafael Nascimento! Gostaria de orientações para elaboração / revisão de um contrato.",
    },
    {
      id: "familia-sucessoes",
      icon: Users,
      title: "Família & Planejamento Sucessório",
      shortDesc:
        "Condução técnica, ética e humanizada em inventários em cartório, partilha de herança, divórcios e questões patrimoniais de família.",
      bullets: [
        "Inventário extrajudicial em cartório: solução rápida, econômica e sem desgaste",
        "Inventários judiciais e partilha equilibrada e transparente de bens",
        "Divórcio consensual e litigioso com proteção ao patrimônio familiar",
        "Ações de alimentos (fixação, revisão e execução de pensão) e guarda de filhos",
      ],
      tag: "Família",
      badge: "Inventários & Partilhas",
      whatsappMsg:
        "Olá, Dr. Rafael Nascimento! Gostaria de informações sobre Inventário / Partilha de Bens / Família.",
    },
    {
      id: "direito-imobiliario",
      icon: HomeIcon,
      title: "Direito Imobiliário & Possessório",
      shortDesc:
        "Segurança jurídica na proteção de terrenos, posse e patrimônio imobiliário em Itapecerica e em toda a região de Minas Gerais.",
      bullets: [
        "Ações possessórias: reintegração de posse, manutenção e interdito proibitório",
        "Ações de usucapião judicial e extrajudicial diretamente em cartório",
        "Regularização fundiária de terrenos, glebas urbanas e rurais sem escritura",
        "Assessoria em litígios de vizinhança, locações comerciais e contratos de compra e venda",
      ],
      tag: "Imobiliário",
      badge: "Regularização & Posse",
      whatsappMsg:
        "Olá, Dr. Rafael Nascimento! Preciso de orientação jurídica sobre Usucapião / Posse / Regularização de Imóvel.",
    },
    {
      id: "consultoria-estrategica",
      icon: Gavel,
      title: "Consultoria Jurídica Estratégica & Digital",
      shortDesc:
        "Atendimento personalizado na sede física no Centro de Itapecerica - MG ou 100% digital com alcance nacional. Diagnóstico transparente e plano de ação claro.",
      bullets: [
        "Consulta privativa com sigilo absoluto e avaliação realista de viabilidade",
        "Atendimento presencial na R. Cônego Cesário, 282 - Sala 04 ou por videochamada",
        "Acompanhamento direto e contínuo pelo Dr. Rafael Nascimento em todas as fases",
        "Atuação ágil via processo eletrônico (PJe) nos Tribunais de todo o Brasil",
      ],
      tag: "Consultoria",
      badge: "Atendimento Direto",
      whatsappMsg:
        "Olá, Dr. Rafael Nascimento! Gostaria de agendar uma consulta jurídica para avaliar minha situação.",
    },
  ];

  // Avaliações Reais do Google Meu Negócio de Rafael Nascimento Advocacia (Nota Máxima 5,0 ★ unânime)
  const depoimentosGoogle = [
    {
      author: "Sidney Neves",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote: "Ótimo profissional. Recomendo a todos.",
      highlight: "Ótimo profissional, recomendo a todos",
    },
    {
      author: "INDÚSTRIA BRASILEIRA DE BECAS",
      detail: "3 avaliações · 1 foto no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote: "Excelente profissional! Recomendamos!",
      highlight: "Excelente profissional! Recomendamos!",
    },
    {
      author: "Denize Camargos",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote: "Excelente! Resolução rápida. Super recomendo.",
      highlight: "Excelente! Resolução rápida",
    },
    {
      author: "Renata Bueno",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote: "Rafael é um excelente advogado meus parabéns 👏 jesus te abençoe 🙏",
      highlight: "Excelente advogado, parabéns pelo trabalho",
    },
    {
      author: "Professor Wilson Diniz",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote: "Excelente profissional!!! Sério, comprometido e competente! 🙏",
      highlight: "Sério, comprometido e competente!",
    },
    {
      author: "Milena Santos",
      detail: "3 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote: "Super recomendo. Muito atencioso!",
      highlight: "Super recomendo, muito atencioso!",
    },
    {
      author: "Julia Cunha",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote: "Ótimo profissional!",
      highlight: "Ótimo profissional, dedicação exemplar",
    },
  ];

  // Diferenciais Competitivos de Rafael Nascimento Advocacia
  const diferenciais = [
    {
      icon: GraduationCap,
      title: "Especialista em Ciências Criminais (PUC Minas)",
      description:
        "O Dr. Rafael Nascimento possui especialização de excelência em Ciências Criminais pela PUC Minas, garantindo fundamentação dogmática rigorosa, técnica processual apurada e estratégia penal defensiva de vanguarda.",
    },
    {
      icon: Shield,
      title: "Atuação Criminal Combativa & Plantão Urgente",
      description:
        "Prontidão para atuar em flagrantes, audiências de custódia e medidas urgentes de liberdade (Habeas Corpus), resguardando com firmeza as garantias constitucionais do cidadão.",
    },
    {
      icon: Star,
      title: "Nota Máxima 5,0 ★ Unânime no Google",
      description:
        "Reconhecimento espontâneo de clientes com 100% de avaliações 5 estrelas no Google Meu Negócio, atestando a competência, a seriedade e a rapidez nas resoluções jurídicas.",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado, Direto & Sigiloso",
      description:
        "O cliente conversa e traça a estratégia diretamente com o Dr. Rafael Nascimento. Atendimento com sigilo profissional inviolável, empatia e clareza didática sem juridiquês desnecessário.",
    },
    {
      icon: MapPin,
      title: "Sede Central em Itapecerica & Alcance Nacional",
      description:
        "Escritório estruturado na R. Cônego Cesário, 282 - Sala 04 - Centro, em Itapecerica - MG, aliado a uma advocacia digital conectada aos Tribunais de Minas Gerais e de todo o Brasil.",
    },
    {
      icon: Coins,
      title: "Honorários Transparentes & Rigor Ético",
      description:
        "Contratos claros, transparentes e alinhados às diretrizes do Código de Ética e Disciplina da OAB, proporcionando segurança, previsibilidade e confiança mútua.",
    },
  ];

  // Situações comuns (Diagnóstico Rápido)
  const situacoesDiagnostico = [
    {
      pergunta: "Está diante de uma urgência criminal, flagrante, custódia ou intimação?",
      orientacao:
        "O Dr. Rafael Nascimento atua de forma imediata e técnica para assegurar seus direitos constitucionais, acompanhar depoimentos em delegacia, formular pedidos de liberdade provisória ou impetrar Habeas Corpus.",
      cta: "Buscar Defesa Criminal Urgente",
      area: "Direito Criminal",
    },
    {
      pergunta: "Possui valores a receber, títulos inadimplidos ou disputas contratuais?",
      orientacao:
        "Atuação ágil na cobrança judicial e extrajudicial de créditos, cheques, notas promissórias e contratos, além de ações indenizatórias por descumprimento de obrigações e danos patrimoniais.",
      cta: "Analisar Meu Caso Cível",
      area: "Direito Cível",
    },
    {
      pergunta: "Precisa redigir, revisar ou blindar um contrato comercial ou de prestação?",
      orientacao:
        "Construção de instrumentos contratuais sólidos com cláusulas preventivas de salvaguarda, mitigando passivos e assegurando que sua vontade seja integralmente respeitada perante a Justiça.",
      cta: "Revisar / Blindar Contrato",
      area: "Contratos & Negócios",
    },
    {
      pergunta: "Precisa realizar inventário de bens da família ou resolver partilha de herança?",
      orientacao:
        "Condução sensível e célere de inventários em cartório (extrajudiciais, muito mais rápidos e com menor custo) ou judiciais, divórcios e fixação/execução de pensão alimentícia.",
      cta: "Consultar Inventário & Família",
      area: "Família & Sucessões",
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "Como funciona o primeiro atendimento com o Dr. Rafael Nascimento?",
      answer:
        "O primeiro atendimento é privativo, seguro e detalhado. Pode ser realizado presencialmente em nosso escritório na R. Cônego Cesário, 282 - Sala 04 - Centro, em Itapecerica - MG, ou de forma 100% digital por WhatsApp ou videochamada para qualquer localidade. Analisamos detalhadamente a documentação e os fatos, indicando com honestidade e clareza os melhores caminhos jurídicos.",
    },
    {
      question: "O que fazer em caso de prisão em flagrante ou intimação para comparecer à delegacia?",
      answer:
        "O cidadão tem o direito constitucional de ser assistido por um advogado antes e durante qualquer declaração à autoridade policial. Entre em contato imediatamente com o Dr. Rafael Nascimento para que a defesa técnica acompanhe o procedimento desde o primeiro instante, evitando abusos e viabilizando o pedido de liberdade na audiência de custódia.",
    },
    {
      question: "O escritório atende apenas em Itapecerica ou em outras comarcas?",
      answer:
        "Atendemos presencialmente toda a comarca de Itapecerica e cidades do Centro-Oeste de Minas (como Divinópolis, Formiga, Oliveira, Cláudio, Camacho e região). Além disso, graças à digitalização integral dos processos (PJe, Projudi e e-Proc), atuamos com a mesma presteza e eficiência perante os Tribunais de todo o Brasil.",
    },
    {
      question: "Como funciona o inventário extrajudicial em cartório?",
      answer:
        "Quando todos os herdeiros forem maiores, capazes e houver consenso na partilha dos bens (e na ausência de testamento com exigência judicial), o inventário pode ser realizado diretamente em Cartório de Notas por meio de escritura pública. É um procedimento muito mais rápido, econômico e sem o desgaste de uma ação judicial prolongada.",
    },
    {
      question: "Como o escritório atua em cobranças judiciais e disputas cíveis?",
      answer:
        "Iniciamos com uma abordagem estratégica de notificação e negociação extrajudicial para viabilizar acordos rápidos. Caso não haja composição amigável, ingressamos imediatamente com a ação judicial cabível (execução de título, ação monitória ou cobrança), utilizando ferramentas modernas de localização de bens para assegurar a efetividade do crédito.",
    },
    {
      question: "Como são estabelecidos os honorários da advocacia?",
      answer:
        "Trabalhamos com absoluta transparência contratual, em conformidade com as diretrizes da Ordem dos Advogados do Brasil (OAB/MG). Cada contrato detalha claramente o escopo de atuação, prazos e condições de pagamento, assegurando que o cliente tenha previsibilidade financeira total desde o início.",
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
                Rafael Nascimento Advocacia &bull; Itapecerica - MG
              </span>
              <span className="hidden sm:inline text-amber-500/60">|</span>
              <span className="hidden sm:inline text-slate-300">
                ⚖️ Advogado Criminal e Cível &bull; Especialista em Ciências Criminais (PUC Minas)
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
                <span className="text-amber-200/80">(11 avaliações no Google)</span>
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
              ? "border-b border-amber-400/20 bg-[#08090d]/98 shadow-xl shadow-black/40 backdrop-blur-md"
              : "border-b border-[#262118] bg-[#08090d]/92 backdrop-blur-md"
          }`}
        >
          <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8 xl:px-12">
            {/* Left: Official Logo */}
            <a
              href="#inicio"
              aria-label="Rafael Nascimento Advocacia - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-90"
            >
              <div className="relative h-10 sm:h-12 w-44 sm:w-56 shrink-0">
                <Image
                  src={LOGO_SRC}
                  alt="Rafael Nascimento Advocacia"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
            </a>

            {/* Center: Navigation Links */}
            <nav
              aria-label="Navegação principal"
              className="hidden xl:flex items-center gap-6 2xl:gap-8 whitespace-nowrap text-xs font-semibold tracking-wider text-slate-300"
            >
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#sobre">
                Dr. Rafael Nascimento
              </a>
              <a className="nav-link" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5.0 ★)
              </a>
              <a className="nav-link" href="#faq">
                Dúvidas
              </a>
              <a className="nav-link" href="#contato">
                Contato &amp; Sede
              </a>
            </nav>

            {/* Right: CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:flex items-center shrink-0">
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
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-white/10 xl:hidden cursor-pointer"
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
                className="border-b border-[#262118] bg-[#0c0e14] px-5 py-5 xl:hidden shadow-2xl text-white"
              >
                <div className="flex flex-col gap-3.5 text-sm font-semibold tracking-wide">
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#f5d77f]"
                    href="#inicio"
                    onClick={closeMenu}
                  >
                    Início
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#f5d77f]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#f5d77f]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    Sobre o Dr. Rafael Nascimento
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#f5d77f]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Nossos Diferenciais
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#f5d77f]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (5.0 ★)
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#f5d77f]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#f5d77f]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Sede em Itapecerica &amp; Contato
                  </a>

                  <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
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
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 py-3 text-xs font-bold text-slate-200 hover:bg-white/5"
                    >
                      <Phone size={14} className="text-[#f5d77f]" />
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
                    <span>Rafael Nascimento Advocacia &bull; Itapecerica - MG</span>
                  </div>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-cinzel text-3xl font-extrabold leading-[1.18] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                >
                  Defesa Criminal Estratégica e Soluções Cíveis de{" "}
                  <span className="text-gradient-gold font-black drop-shadow-[0_2px_16px_rgba(212,163,75,0.4)]">
                    alta precisão técnica
                  </span>
                  .
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-base text-slate-100 sm:text-lg sm:leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                >
                  Atuação jurídica combativa, ética e resolutiva conduzida pelo{" "}
                  <strong className="text-white font-bold underline decoration-[#d4a34b]/60 underline-offset-4">
                    Dr. Rafael Nascimento
                  </strong>
                  , Especialista em Ciências Criminais pela PUC Minas. Atendimento presencial na sede própria em Itapecerica - MG e digital com máxima agilidade para clientes de todo o Brasil.
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
                      Nota máxima 5,0 ★ no Google (11 avaliações)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#f5d77f] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Especialista em Ciências Criminais (PUC Minas)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#f5d77f] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Advogado Criminal e Cível de Alta Performance
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#f5d77f] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Sede: R. Cônego Cesário, 282 - Centro, Itapecerica
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
                    <span>Falar no WhatsApp com o Dr. Rafael</span>
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
                  <span className="font-medium text-white">11 avaliações no Google Meu Negócio</span>
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

              {/* Right Column: Dr. Rafael Nascimento Portrait Card */}
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
                        alt="Dr. Rafael Nascimento - Rafael Nascimento Advocacia em Itapecerica MG"
                        fill
                        priority
                        unoptimized
                        className="object-cover object-top filter contrast-[1.03]"
                      />

                      {/* Gradient Overlay for bottom text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/25 to-transparent" />

                      {/* Card Lower Badge */}
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-amber-300/40 bg-[#08090d]/90 p-3.5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                              Dr. Rafael Nascimento
                            </p>
                            <p className="text-[10px] sm:text-xs font-semibold text-[#f5d77f] uppercase tracking-wider mt-0.5">
                              Especialista em Ciências Criminais &bull; PUC Minas
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
                              5,0 ★ no Google (11)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Top-Right */}
                  <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 rounded-xl border border-amber-300/60 bg-[#08090d]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-amber-400/15 text-[#f5d77f]">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#e7cc99]">
                        Pós-Graduação
                      </p>
                      <p className="text-xs font-bold text-white">
                        PUC Minas &bull; Penal
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
                  11 avaliações 100% 5 estrelas
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0e1017]">
                  PUC Minas
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c88a2c] mt-1">
                  Ciências Criminais
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  Especialização e rigor técnico
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0e1017]">
                  Itapecerica - MG
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c88a2c] mt-1">
                  Sede Central Própria
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  R. Cônego Cesário, 282 - Sl 04
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
                Não enfrente acusações, riscos à sua liberdade ou prejuízos patrimoniais sem o respaldo de um especialista.
                Conte com assessoria combativa e técnica desde o primeiro momento:
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
                      href={getWhatsAppUrl(`Olá, Dr. Rafael Nascimento! ${sit.pergunta}`)}
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
                Pilares de Atuação &bull; Advocacia de Alta Performance
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                Como atuamos na defesa intransigente dos seus direitos
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Atuação criminal especializada e soluções cíveis estratégicas em instâncias judiciais
                e administrativas com fundamentação jurídica de excelência, sigilo e combatividade.
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
                    Fale diretamente com o Dr. Rafael Nascimento
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-2xl">
                    Envie uma mensagem resumindo sua necessidade. Analisamos seu caso com total sigilo
                    e presteza técnica para indicar a estratégia jurídica mais adequada e segura.
                  </p>
                </div>

                <GlowingButton
                  variant="gold"
                  size="lg"
                  href={getWhatsAppUrl(
                    "Olá, Dr. Rafael Nascimento! Gostaria de uma avaliação jurídica para entender o caminho mais adequado para o meu caso."
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
        {/* 7. SOBRE O ADVOGADO & ESTRUTURA                                           */}
        {/* ========================================================================= */}
        <section id="sobre" className="py-16 sm:py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Photo of Dr. Rafael Nascimento on Left */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Subtle Accent Glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#d4a34b]/20 to-transparent blur-lg" />

                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#e7e0d3] bg-[#08090d] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={FOTO_PERFIL_SRC}
                        alt="Dr. Rafael Nascimento - Advogado Criminal e Cível em Itapecerica MG"
                        fill
                        unoptimized
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/85 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-amber-300/30 bg-black/60 p-3.5 backdrop-blur-md text-white text-center">
                        <p className="font-cinzel text-base font-bold text-white">
                          Dr. Rafael Nascimento
                        </p>
                        <p className="text-[11px] text-[#f5d77f] mt-0.5">
                          Especialista em Ciências Criminais &bull; PUC Minas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Details on Right */}
              <div className="lg:col-span-7">
                <div className="eyebrow-gold mb-3">Sobre o Advogado &amp; Atuação</div>

                <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1017] leading-tight">
                  Advocacia ética, combativa e com dedicação incansável a cada cliente em Itapecerica e em todo o Brasil.
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    A advocacia liderada pelo <strong className="text-[#0e1017]">Dr. Rafael Nascimento</strong> é
                    fundamentada na união entre o profundo rigor dogmático, a combatividade processual e o compromisso
                    intransigente com os direitos de cada pessoa que nos confia sua causa.
                  </p>
                  <p>
                    Pós-graduado e <strong className="text-[#0e1017]">Especialista em Ciências Criminais pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas)</strong>,
                    o Dr. Rafael Nascimento une sólido embasamento acadêmico à experiência prática nas esferas Criminal e Cível,
                    atuando com maestria em flagrantes, audiências de custódia, tribunal do júri, execuções e litígios cíveis complexos.
                  </p>
                  <p>
                    Com sede física estruturada na <strong className="text-[#0e1017]">R. Cônego Cesário, 282 - Sala 04 - Centro, Itapecerica - MG</strong>,
                    o escritório oferece um ambiente moderno, privativo e seguro para consultas presenciais, ao mesmo tempo em que disponibiliza
                    uma eficiente infraestrutura digital para atender clientes em qualquer comarca de Minas Gerais e do território nacional com nota máxima 5,0 ★ no Google.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="mt-6 rounded-xl border-l-4 border-[#c88a2c] bg-[#faf8f5] p-4 sm:p-5">
                  <p className="italic text-sm text-slate-800">
                    &ldquo;Excelente profissional!!! Sério, comprometido e competente! Resolução rápida e dedicação absoluta em cada etapa... Super recomendo a todos!&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#c88a2c] uppercase tracking-wider">
                    — Síntese das avaliações verificadas de clientes no Google Meu Negócio (Nota Máxima 5,0 ★ unânime)
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
                    <span>Falar Diretamente com o Dr. Rafael</span>
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
                Por Que Escolher Rafael Nascimento Advocacia
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1017]">
                Diferenciais que asseguram a satisfação absoluta de nossos clientes
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Uma experiência jurídica com seriedade inegociável, clareza didática e dedicação autêntica.
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
                  Você nos envia uma mensagem no WhatsApp ou liga, resume sua situação e agendamos
                  sua consulta presencial em Itapecerica ou online.
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
                  O Dr. Rafael Nascimento avalia minuciosamente o inquérito, intimação, contratos ou provas
                  para estruturar a melhor estratégia defensiva.
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
                  necessárias para defender seus direitos com máxima eficácia.
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
                  Execução diligente perante delegacias, fóruns, tribunais ou cartórios, com atualizações
                  periódicas e contato direto com você.
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
                  (11 avaliações verificadas no Google)
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
                O Dr. Rafael Nascimento está à disposição para esclarecer seu caso com ética, sigilo e rapidez.
              </p>
              <div className="mt-4">
                <GlowingButton
                  variant="gold"
                  size="md"
                  href={getWhatsAppUrl("Olá, Dr. Rafael Nascimento! Tenho uma dúvida sobre o meu caso e gostaria de orientação jurídica.")}
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
        {/* 12. CONTATO & SEDE EM ITAPECERICA - MG                                     */}
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
                    Atendimento presencial em nossa sede no Centro de Itapecerica - MG ou 100% digital
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
                          Itapecerica - Minas Gerais &bull; CEP 35550-000
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
                          {INSTAGRAM_HANDLE} (Rafael Nascimento)
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
                          Segunda a Sexta das 08:00 às 17:00
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
                          alt="Rafael Nascimento Advocacia Emblema"
                          fill
                          unoptimized
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-cinzel text-sm font-bold text-[#0e1017]">
                          Rafael Nascimento Advocacia
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Itapecerica - MG &bull; Centro
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 border border-amber-200">
                      <Star size={12} className="fill-amber-400 text-amber-500" />
                      <span>5,0 ★ Google (11)</span>
                    </div>
                  </div>

                  {/* Interactive Map Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <iframe
                      title="Localização de Rafael Nascimento Advocacia em Itapecerica - MG"
                      src="https://maps.google.com/maps?q=R.+C%C3%B4nego+Ces%C3%A1rio,+282+-+Sl+04+-+Centro,+Itapecerica+-+MG,+35550-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="size-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                    <span>R. Cônego Cesário, 282 - Sl 04 - Centro, Itapecerica - MG</span>
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
                  className="flex items-center transition-opacity hover:opacity-95"
                >
                  <div className="relative h-14 sm:h-16 w-56 sm:w-64 shrink-0">
                    <Image
                      src={LOGO_SRC}
                      alt="Rafael Nascimento Advocacia"
                      fill
                      unoptimized
                      className="object-contain object-left"
                    />
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
                    aria-label="Instagram de Rafael Nascimento Advocacia"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                    aria-label="WhatsApp de Rafael Nascimento Advocacia"
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
                      Direito Criminal &amp; Defesa Penal
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Cível &amp; Indenizações
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Contratos &amp; Blindagem Jurídica
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Família &amp; Sucessões (Inventários)
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Imobiliário &amp; Posse
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
                    Atendimento de Segunda a Sexta das 08:00 às 17:00.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright & OAB Ethics Notice */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Rafael Nascimento Advocacia.
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
            aria-label="Falar com o Dr. Rafael Nascimento no WhatsApp"
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
                      alt="Rafael Nascimento Advocacia Emblema"
                      fill
                      unoptimized
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
                  redirecionado ao atendimento oficial do{" "}
                  <strong className="text-white">Dr. Rafael Nascimento</strong>.
                </p>

                <div className="mt-5 space-y-2 rounded-xl border border-amber-400/20 bg-white/5 p-4 text-xs text-slate-300">
                  <p className="font-bold text-white uppercase tracking-wider text-[11px] text-[#f5d77f]">
                    O que ter em mãos (se aplicável):
                  </p>
                  <ul className="space-y-1 pl-1">
                    <li>&bull; Nome completo e cidade onde reside</li>
                    <li>&bull; Breve resumo da situação ou questão jurídica</li>
                    <li>&bull; Documentos, intimações, certidões ou comprovantes do caso</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl(
                      `Olá, Dr. Rafael Nascimento! Gostaria de uma avaliação jurídica sobre: ${modalArea}.`
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
