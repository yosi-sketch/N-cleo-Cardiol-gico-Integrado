"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Eye,
  HeartHandshake,
  MapPin,
  Menu,
  Phone,
  Smile,
  Sparkles,
  Star,
  Activity,
  UserCheck,
  X,
  ChevronDown,
  Car,
  Award,
  Stethoscope,
  Apple,
  Brain,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Contatos & Dados Cadastrais Oficiais da Clínica SIS
const WHATSAPP_NUMBER = "5531996843808";
const PHONE_DISPLAY = "(31) 99684-3808";
const PHONE_FIXO_DISPLAY = "(31) 3136-3808";
const EMAIL_CONTACT = "contato@sissarzedo.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/sissarzedo/";
const INSTAGRAM_HANDLE = "@sissarzedo";

const CLINIC_NAME = "SIS — Saúde Integrada Sarzedo";

const ADDRESS_TEXT =
  "Rod. MG 040, 122 MARGINAL - Santa Rosa de Lima, Sarzedo - MG, 32450-000";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=a259f6be7e763dcd&q=sis+sarzedo+avalia%C3%A7%C3%B5es&ludocid=15239446991974706534";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rod.+MG+040%2C+122+MARGINAL+-+Santa+Rosa+de+Lima%2C+Sarzedo+-+MG%2C+32450-000";

const LOGO_SRC = "/logo.png";
const FACHADA_SRC = "/fachada-clinica.jpg";
const RECEPCAO_SRC = "/recepcao-clinica.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta na clínica SIS — Saúde Integrada Sarzedo.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
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
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
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
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSpecialty, setModalSpecialty] = useState<string>("Oftalmologia (SAME)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openConsultModal = (specialtyName = "Oftalmologia (SAME)") => {
    setModalSpecialty(specialtyName);
    setModalOpen(true);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Especialidades e Tratamentos Oficiais
  const especialidades = [
    {
      id: "oftalmologia",
      tag: "Saúde Ocular & SAME",
      name: "Oftalmologia Avançada",
      icon: Eye,
      color: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50 border-sky-200 text-sky-700",
      description:
        "Consultas oftalmológicas detalhadas, exames de refração computadorizada para óculos e lentes, tonometria e mapeamento preventivo.",
      professionals: "Corpo Clínico SAME: Dra. Larissa Ferreira e Dra. Érica",
      highlights: [
        "Exame de vista completo e computadorizado",
        "Medição de pressão intraocular (glaucoma)",
        "Mapeamento de retina e fundo de olho",
        "Atendimento com tempo de dedicação de 40 a 50min",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta oftalmológica / exame de vista na clínica SIS.",
    },
    {
      id: "odontologia",
      tag: "Sorriso & Família",
      name: "Odontologia & Ortodontia",
      icon: Smile,
      color: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-50 border-blue-200 text-blue-700",
      description:
        "Atendimento odontológico humanizado e multidisciplinar para adultos e crianças, com carinho especial para transformar a ida ao dentista em um momento leve.",
      professionals: "Dra. Laura (Odontopediatria e Clínica) & Dr. Leandro",
      highlights: [
        "Odontopediatria acolhedora sem traumas infantis",
        "Aparelhos ortodônticos modernos e alinhadores",
        "Clareamento dental, próteses e estética do sorriso",
        "Limpeza profunda (profilaxia), restaurações e canal",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar uma avaliação odontológica na clínica SIS Sarzedo.",
    },
    {
      id: "pilates",
      tag: "Movimento & Coluna",
      name: "Studio de Pilates & Fisioterapia",
      icon: Activity,
      color: "from-lime-500 to-emerald-600",
      accentBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
      description:
        "Aulas de Pilates em aparelhos com acompanhamento individualizado e fisioterapêutico para alívio de dores, postura e fortalecimento do corpo.",
      professionals: "Fisioterapeuta Emilly",
      highlights: [
        "Aparelhos de Pilates completos e higienizados",
        "Tratamento e prevenção de dores na coluna e hérnias",
        "Aumento de flexibilidade, força e equilíbrio",
        "Aulas motivadoras com atenção paciente a cada movimento",
      ],
      whatsappMsg:
        "Olá! Gostaria de informações e agendamento para aulas de Pilates na SIS com a Fisioterapeuta Emilly.",
    },
    {
      id: "psicologia",
      tag: "Saúde Mental & Acolhimento",
      name: "Psicologia Clínica",
      icon: Brain,
      color: "from-teal-500 to-cyan-600",
      accentBg: "bg-teal-50 border-teal-200 text-teal-800",
      description:
        "Espaço seguro, sigiloso e acolhedor para você cuidar das suas emoções, com acompanhamento terapêutico para crianças, jovens e adultos.",
      professionals: "Psicólogas especialistas com acompanhamento contínuo",
      highlights: [
        "Manejo de ansiedade, estresse e depressão",
        "Psicoterapia infantil e orientação familiar",
        "Desenvolvimento pessoal e inteligência emocional",
        "Consultas com escuta atenta e respeito ao seu tempo",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar uma sessão com a equipe de Psicologia da clínica SIS.",
    },
    {
      id: "nutricao",
      tag: "Alimentação & Vida Saudável",
      name: "Nutrição Clínica & Metabólica",
      icon: Apple,
      color: "from-emerald-500 to-green-600",
      accentBg: "bg-green-50 border-green-200 text-green-800",
      description:
        "Planos alimentares adaptados à sua rotina real, promovendo emagrecimento saudável, disposição e prevenção de doenças crônicas.",
      professionals: "Nutricionistas clínicas dedicadas",
      highlights: [
        "Avaliação de composição corporal e histórico de hábitos",
        "Estratégias nutricionais sustentáveis sem radicalismos",
        "Acompanhamento para controle de diabetes e colesterol",
        "Reeducação alimentar para todas as fases da vida",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta nutricional na clínica SIS Sarzedo.",
    },
    {
      id: "clinica-medica",
      tag: "Check-up & Prevenção",
      name: "Clínica Geral & Especialidades",
      icon: Stethoscope,
      color: "from-sky-600 to-blue-700",
      accentBg: "bg-sky-50 border-sky-200 text-sky-800",
      description:
        "Consultas médicas de rotina, avaliação de exames diagnósticos e acompanhamento integrado de saúde no mesmo lugar.",
      professionals: "Corpo Clínico Integrado SIS Sarzedo",
      highlights: [
        "Check-up preventivo para toda a família",
        "Eletrocardiograma e encaminhamentos especializados",
        "Atendimento ágil com preço justo e acessível",
        "Encaminhamento interno rápido entre as especialidades",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta com clínico geral / exames na SIS Sarzedo.",
    },
  ];

  // Depoimentos Reais retirados diretamente das avaliações do Google Meu Negócio da SIS Sarzedo
  const depoimentosGoogle = [
    {
      name: "Mirielly Samire",
      rating: 5,
      date: "4 meses atrás",
      text: "Amei o atendimento que recebi hoje! Desde a chegada na recepção até a consulta médica (com oftalmologista) todos foram muito educados, simpáticos e atenciosos. O ambiente é limpo, agradável e acolhedor, o que faz toda a diferença. Parabéns a todos! ❤️🙏",
      detail: "Consulta Oftalmológica & Recepção",
    },
    {
      name: "Elida Luciana",
      rating: 5,
      date: "4 meses atrás",
      text: "Deixo aqui meu agradecimento à Dra. Laura, pelo excelente trabalho como dentista. Sempre tão gentil, educada e carinhosa com as crianças. A clínica está de parabéns! Desde a recepção, quanto aos atendimentos. Dr. Leandro também é um ótimo profissional.",
      detail: "Odontopediatria com Dra. Laura & Dr. Leandro",
    },
    {
      name: "Michele Beatriz (Bia)",
      rating: 5,
      date: "11 meses atrás",
      text: "Gostaria de expressar minha profunda gratidão à clínica SIS e a todos os profissionais incríveis. Desde o primeiro atendimento, fui recebida com carinho, atenção e profissionalismo. Um agradecimento especial às aulas de Pilates, que têm sido fundamentais para meu bem-estar físico e emocional, e à fisioterapeuta Emilly, que é um verdadeiro amor de pessoa! Dedicação, paciência e alegria tornam cada aula leve e acolhedora.",
      detail: "Pilates com Fisioterapeuta Emilly",
    },
    {
      name: "Bianca Galgani",
      rating: 5,
      date: "1 ano atrás",
      text: "Gostaria de registrar meu agradecimento e elogio pelo excelente atendimento recebido na clínica. Fui tratada com atenção, respeito e cordialidade. Quero destacar o profissionalismo e o cuidado da médica Larissa Ferreira, oftalmologista, que foi extremamente atenciosa, clara nas explicações e acolhedora. Parabéns a toda a equipe pelo trabalho humanizado e eficiente!",
      detail: "Oftalmologia com Dra. Larissa Ferreira",
    },
    {
      name: "Rosilene Vieira",
      rating: 5,
      date: "1 mês atrás",
      text: "Recepção super atenciosa e acolhedora! Dra. Érica (oftalmologista) é um amor e uma excelente profissional. Adorei o atendimento!",
      detail: "Oftalmologia com Dra. Érica",
    },
    {
      name: "Flavia Moreira",
      rating: 5,
      date: "1 ano atrás",
      text: "Eu e minha família fizemos um tratamento odontológico e ficamos super satisfeitos, sempre fomos muito bem recebidos pela equipe. Um elogio especial à secretária Juliana, que sempre esteve disposta a nos ajudar, e ela é uma pessoa muito simpática e gentil com todos os pacientes.",
      detail: "Tratamento Odontológico Familiar",
    },
    {
      name: "Anderson Alves Teixeira",
      rating: 5,
      date: "7 meses atrás",
      badge: "Local Guide",
      text: "Além do preço justo, o atendimento desde a recepção até o consultório é excepcional.",
      detail: "Atendimento Geral & Custo-benefício",
    },
    {
      name: "Lua Pow",
      rating: 5,
      date: "1 ano atrás",
      text: "Ótimo atendimento! Profissionais maravilhosos, sempre muito receptivos e atenciosos com os clientes. Faço acompanhamento com a psicóloga há meses e sempre fui muito bem atendida. As consultas são excelentes e a equipe é extremamente prestativa. Recomendo muito!",
      detail: "Acompanhamento em Psicologia",
    },
    {
      name: "Sara Patrícia",
      rating: 5,
      date: "10 meses atrás",
      text: "Minha experiência tem sido a melhor possível. Sempre muito bem recebida, desde a recepção até o atendimento. Iara e Laura estão de parabéns, excelente atendimento. Faço tratamento meu e dos meus filhos. Gratidão a todos vocês!",
      detail: "Atendimento da Família",
    },
  ];

  // Diferenciais da SIS Saúde Integrada Sarzedo
  const diferenciais = [
    {
      icon: HeartHandshake,
      title: "Atendimento Verdadeiramente Humano",
      desc: "Você não é apenas uma ficha. Nossa equipe escuta com atenção, esclarece todas as dúvidas com paciência e trata você e seus filhos com genuíno carinho e respeito.",
    },
    {
      icon: Activity,
      title: "Saúde Integrada em um Só Lugar",
      desc: "Oftalmologia SAME, Odontologia, Studio de Pilates, Psicologia e Nutrição sob o mesmo teto, facilitando a rotina e o cuidado preventivo de toda a família.",
    },
    {
      icon: Car,
      title: "Fácil Acesso & Estacionamento Próprio",
      desc: "Localizada às margens da Marginal da MG-040 em Sarzedo, com vagas confortáveis bem na porta da clínica para gestantes, idosos e motoristas.",
    },
    {
      icon: Award,
      title: "Excelência Reconhecida no Google (4,8 ★)",
      desc: "Mais de 340 avaliações de pacientes de Sarzedo e cidades vizinhas confirmando a qualidade dos especialistas, a limpeza impecável e a recepção acolhedora.",
    },
    {
      icon: Clock,
      title: "Horários Amplos & Pontualidade",
      desc: "Atendimento de segunda a sexta das 08h às 18h e aos sábados das 08h às 12h, com agendamento organizado para valorizar o seu tempo.",
    },
    {
      icon: UserCheck,
      title: "Preço Justo & Acessibilidade",
      desc: "Medicina e odontologia de alto nível ao alcance da população de Sarzedo, com planos de pagamento facilitados e transparência total.",
    },
  ];

  // Perguntas Frequentes Reais da Clínica SIS Sarzedo
  const faqs = [
    {
      q: "Onde a clínica SIS está localizada e qual é o ponto de referência?",
      a: "A clínica está situada na Rodovia MG 040, 122 MARGINAL - Santa Rosa de Lima, Sarzedo - MG (CEP 32450-000). Ficamos exatamente às margens da pista marginal da MG-040, em ponto de fácil visualização e acesso rápido para quem vem de Sarzedo centro, Ibirité, Brumadinho ou Mário Campos. Contamos com estacionamento próprio na porta.",
    },
    {
      q: "Como faço para agendar uma consulta médica, odontológica ou aula de Pilates?",
      a: "O agendamento é rápido e prático diretamente pelo nosso WhatsApp oficial (31) 99684-3808 ou pelo telefone fixo (31) 3136-3808. Nossa equipe da recepção atende com agilidade e tira todas as suas dúvidas sobre horários e preparos.",
    },
    {
      q: "Quais especialidades médicas e de saúde a clínica SIS oferece?",
      a: "Oferecemos Oftalmologia completa (SAME), Odontologia e Odontopediatria, Ortodontia, Studio de Pilates com aparelhos, Fisioterapia, Psicologia clínica, Nutrição e Clínica Médica geral.",
    },
    {
      q: "Como funciona o atendimento de oftalmologia (SAME) na SIS Sarzedo?",
      a: "Nosso núcleo oftalmológico conta com médicas conceituadas (como Dra. Larissa Ferreira e Dra. Érica). Realizamos exames de vista computadorizados completos para óculos e lentes de contato, aferição da pressão dos olhos e exames preventivos com dedicação e explicação clara.",
    },
    {
      q: "A clínica atende crianças na odontologia (odontopediatria)?",
      a: "Sim! Somos muito elogiados pelo carinho com os pequenos. A Dra. Laura é especialista em odontopediatria e transforma a consulta em uma experiência divertida, sem medo e sem traumas, orientando pais e crianças desde cedo.",
    },
    {
      q: "Como são estruturadas as aulas no Studio de Pilates?",
      a: "As aulas são ministradas pela fisioterapeuta Emilly em equipamentos modernos e completos de Pilates. As turmas são reduzidas para garantir acompanhamento personalizado a cada movimento, sendo ideais para alívio de dores nas costas, melhora da postura e flexibilidade.",
    },
    {
      q: "Quais são os dias e horários de funcionamento da clínica?",
      a: "Funcionamos de segunda a sexta-feira, das 08:00 às 18:00, e aos sábados, das 08:00 às 12:00.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0078d8] selection:text-white">
      {/* 1. TOP BAR INSTITUCIONAL DE CONTATO RÁPIDO */}
      <div className="border-b border-sky-100 bg-gradient-to-r from-sky-900 via-[#0055a5] to-[#0078d8] text-white text-[11px] sm:text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-1.5 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sky-100">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="h-3.5 w-3.5 text-lime-400" />
              <span>Rod. MG 040, 122 Marginal - Sarzedo / MG</span>
            </span>
            <span className="hidden md:inline-block text-sky-300">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
              <Clock className="h-3.5 w-3.5 text-lime-400" />
              <span>Seg a Sex: 08h às 18h | Sáb: 08h às 12h</span>
            </span>
          </div>

          <div className="flex items-center gap-4 font-semibold">
            <a
              href="tel:3131363808"
              className="hidden sm:inline-flex items-center gap-1 text-white hover:text-lime-300 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{PHONE_FIXO_DISPLAY}</span>
            </a>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com a recepção da SIS Sarzedo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white hover:text-lime-300 transition-colors font-bold"
            >
              <WhatsAppIcon size={14} className="text-lime-400" />
              <span>WhatsApp: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER & NAVBAR */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/90 bg-white/95 shadow-md backdrop-blur-md"
            : "border-b border-slate-100 bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo SIS */}
          <a href="#inicio" className="group flex items-center gap-3">
            <div className="relative h-11 w-40 sm:h-12 sm:w-48 transition-transform group-hover:scale-[1.02]">
              <Image
                src={LOGO_SRC}
                alt="SIS — Saúde Integrada Sarzedo"
                fill
                priority
                sizes="(max-width: 640px) 160px, 192px"
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Navigation Links Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#especialidades" className="nav-link">
              Especialidades
            </a>
            <a href="#sobre" className="nav-link">
              A Clínica
            </a>
            <a href="#diferenciais" className="nav-link">
              Diferenciais
            </a>
            <a href="#avaliacoes" className="nav-link">
              Avaliações Google
            </a>
            <a href="#faq" className="nav-link">
              Dúvidas
            </a>
            <a href="#contato" className="nav-link">
              Localização
            </a>
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da SIS Sarzedo"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:border-sky-300 hover:bg-sky-50 hover:text-[#0078d8] transition-all"
            >
              <InstagramIcon size={18} />
            </a>

            <GlowingButton
              onClick={() => openConsultModal("Geral")}
              variant="blue"
              size="sm"
              className="shadow-sm font-semibold"
            >
              <Calendar className="h-4 w-4" />
              <span>Agendar Consulta</span>
            </GlowingButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3"
            >
              <a
                href="#especialidades"
                onClick={closeMenu}
                className="block py-2 text-slate-700 font-medium hover:text-[#0078d8]"
              >
                Especialidades
              </a>
              <a
                href="#sobre"
                onClick={closeMenu}
                className="block py-2 text-slate-700 font-medium hover:text-[#0078d8]"
              >
                A Clínica SIS
              </a>
              <a
                href="#diferenciais"
                onClick={closeMenu}
                className="block py-2 text-slate-700 font-medium hover:text-[#0078d8]"
              >
                Diferenciais
              </a>
              <a
                href="#avaliacoes"
                onClick={closeMenu}
                className="block py-2 text-slate-700 font-medium hover:text-[#0078d8]"
              >
                Avaliações de Pacientes
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="block py-2 text-slate-700 font-medium hover:text-[#0078d8]"
              >
                Perguntas Frequentes
              </a>
              <a
                href="#contato"
                onClick={closeMenu}
                className="block py-2 text-slate-700 font-medium hover:text-[#0078d8]"
              >
                Localização & Contato
              </a>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na SIS Sarzedo.")}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                >
                  <WhatsAppIcon size={18} />
                  <span>WhatsApp de Agendamento</span>
                </GlowingButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* 3. HERO SECTION */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16"
        >
          {/* Decorative glowing blobs */}
          <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-lime-100/40 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headlines & CTA */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="lg:col-span-7 space-y-6 text-center lg:text-left"
              >
                {/* Badge de Credibilidade Médica */}
                <motion.div variants={fadeInUp} className="inline-flex">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-[#88d830]" />
                    <span className="text-[#0066cc] font-bold">Clínica Multidisciplinar</span>
                    <span className="text-slate-400">•</span>
                    <span>Sarzedo / MG</span>
                  </div>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] leading-[1.12]"
                >
                  Cuidado completo,{" "}
                  <span className="bg-gradient-to-r from-[#0066cc] via-[#0078d8] to-[#0098f0] bg-clip-text text-transparent">
                    acolhedor e humanizado
                  </span>{" "}
                  para você e sua família.
                </motion.h1>

                {/* Proposta de Valor / Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
                >
                  Atendimento médico especializado, <strong>Oftalmologia (SAME)</strong>,{" "}
                  <strong>Odontologia Completa</strong>, <strong>Studio de Pilates</strong>,{" "}
                  <strong>Psicologia</strong> e <strong>Nutrição</strong>. Um espaço moderno,
                  confortável e de fácil estacionamento às margens da MG-040 em Sarzedo.
                </motion.p>

                {/* Trust Points Badges */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left"
                >
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-[#0078d8]">
                      <GoogleIcon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-xs font-bold text-slate-900">
                        <span>4,8</span>
                        <div className="flex text-amber-400">
                          {"★★★★★".slice(0, 5)}
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">
                        +340 avaliações no Google
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <HeartHandshake className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Atendimento Acolhedor
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        Da recepção ao consultório
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#0066cc]">
                      <Car className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Fácil Estacionamento
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        Marginal da Rod. MG-040
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CTAs Principais */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
                >
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de agendar uma consulta na clínica SIS Saúde Integrada Sarzedo."
                    )}
                    target="_blank"
                    variant="whatsapp"
                    size="lg"
                    className="w-full sm:w-auto shadow-md"
                  >
                    <WhatsAppIcon size={20} />
                    <span>Agendar pelo WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#especialidades"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Ver Especialidades</span>
                    <ArrowRight className="h-4 w-4" />
                  </GlowingButton>
                </motion.div>

                {/* Mini Aviso de Apoio */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-1.5 pt-1"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>
                    Agendamento simples e sem burocracia. Resposta rápida da nossa equipe.
                  </span>
                </motion.p>
              </motion.div>

              {/* Right Column: Hero Real Visual Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-5 relative"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Card Principal: Fachada da Clínica */}
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-2xl transition-all duration-300 hover:shadow-sky-100/60">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={FACHADA_SRC}
                        alt="Fachada moderna da Clínica SIS Saúde Integrada em Sarzedo MG"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                      {/* Pill sobre a imagem */}
                      <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md flex items-center gap-1.5">
                        <span className="flex h-2 w-2 rounded-full bg-[#0078d8]" />
                        <span>Sede Própria em Sarzedo</span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-xs font-medium text-slate-200">
                          Rodovia MG-040, 122 Marginal
                        </p>
                        <p className="text-sm font-bold text-white">
                          Santa Rosa de Lima · Sarzedo / MG
                        </p>
                      </div>
                    </div>

                    {/* Mini Card Sobreposto: Interior / Recepção Acolhedora */}
                    <div className="mt-3 flex items-center gap-3.5 rounded-xl border border-slate-100 bg-sky-50/70 p-3">
                      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                        <Image
                          src={RECEPCAO_SRC}
                          alt="Recepção acolhedora e climatizada da Clínica SIS"
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          Recepção Ampla e Climatizada
                        </p>
                        <p className="text-[11px] text-slate-600 line-clamp-1">
                          Ambiente limpo, seguro e planejado para o conforto da sua família.
                        </p>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0066cc] mt-0.5">
                          <span>Ambiente 100% humanizado</span>
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge Google 4,8 */}
                  <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 font-extrabold text-slate-900 text-sm">
                          <span>4,8 no Google</span>
                          <span className="text-amber-500">★★★★★</span>
                        </div>
                        <p className="text-[11px] font-medium text-slate-500">
                          Reconhecida pelo carinho e atenção
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. STATS & CONFIANÇA BANNER */}
        <section className="border-y border-slate-200 bg-slate-50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              <div className="pt-4 lg:pt-0">
                <p className="font-heading text-3xl sm:text-4xl font-black text-[#0066cc]">
                  4,8 ★
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  Nota no Google Maps
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Mais de 340 avaliações de pacientes
                </p>
              </div>

              <div className="pt-4 lg:pt-0">
                <p className="font-heading text-3xl sm:text-4xl font-black text-emerald-600">
                  6+
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  Áreas Integradas
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Oftalmo, Odonto, Pilates, Psico, Nutrição e Médicos
                </p>
              </div>

              <div className="pt-4 lg:pt-0">
                <p className="font-heading text-3xl sm:text-4xl font-black text-[#0078d8]">
                  SAME
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  Núcleo de Oftalmologia
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Exames de vista computadorizados completos
                </p>
              </div>

              <div className="pt-4 lg:pt-0">
                <p className="font-heading text-3xl sm:text-4xl font-black text-slate-900">
                  100%
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  Foco no Paciente
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pontualidade, carinho e respeito ao seu tempo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ESPECIALIDADES / TRATAMENTOS / EXAMES */}
        <section id="especialidades" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="eyebrow-blue justify-center">
                Especialidades &amp; Tratamentos
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Tudo o que a sua saúde precisa em um só lugar.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Esqueça a necessidade de ir a várias clínicas ou cidades diferentes. Na SIS
                você conta com acompanhamento preventivo, diagnóstico e reabilitação integrados.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {especialidades.map((esp) => {
                const IconComponent = esp.icon;
                return (
                  <motion.div
                    key={esp.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-sky-300 hover:shadow-md transition-all"
                  >
                    <div>
                      {/* Badge / Tag */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${esp.accentBg}`}
                        >
                          {esp.tag}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#0078d8]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Nome da Especialidade */}
                      <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                        {esp.name}
                      </h3>

                      {/* Descrição */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {esp.description}
                      </p>

                      {/* Profissionais citados com carinho */}
                      <div className="mb-4 rounded-lg bg-slate-50 p-2.5 text-xs text-slate-700 font-medium">
                        <span className="font-bold text-slate-900 block mb-0.5">
                          Corpo Clínico &amp; Especialistas:
                        </span>
                        {esp.professionals}
                      </div>

                      {/* Lista de Procedimentos */}
                      <ul className="space-y-2 mb-6">
                        {esp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-600"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botão de Agendamento da Especialidade */}
                    <div className="pt-2 border-t border-slate-100">
                      <a
                        href={getWhatsAppUrl(esp.whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sky-200 bg-sky-50/60 py-2.5 text-xs font-bold text-[#0066cc] hover:bg-[#0078d8] hover:text-white transition-colors"
                      >
                        <WhatsAppIcon size={15} />
                        <span>Agendar {esp.name}</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Banner de Consulta Integrada */}
            <div className="mt-12 rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  Dúvida sobre qual especialista consultar?
                </h4>
                <p className="text-sm text-slate-600 max-w-xl">
                  Converse diretamente com a nossa recepção via WhatsApp. Nós orientamos você
                  sobre o melhor atendimento para o seu sintoma ou necessidade.
                </p>
              </div>
              <GlowingButton
                href={getWhatsAppUrl("Olá! Gostaria de uma orientação sobre qual especialista agendar na clínica SIS.")}
                target="_blank"
                variant="whatsapp"
                size="md"
                className="shrink-0"
              >
                <WhatsAppIcon size={18} />
                <span>Falar com a Recepção</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* 6. SOBRE A CLÍNICA & ESTRUTURA FÍSICA */}
        <section id="sobre" className="py-16 sm:py-24 bg-slate-50 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Imagens Reais da Estrutura */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                  <Image
                    src={RECEPCAO_SRC}
                    alt="Recepção moderna e aconchegante da Clínica SIS Sarzedo"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    Recepção &amp; Sala de Espera Climatizada
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={FACHADA_SRC}
                      alt="Fachada na Marginal MG 040 em Sarzedo"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 rounded bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                      Fachada &amp; Estacionamento
                    </div>
                  </div>

                  <div className="flex flex-col justify-center rounded-xl border border-sky-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0066cc] mb-1">
                      <Sparkles className="h-4 w-4 text-lime-500" />
                      <span>Estrutura Moderna</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Ambiente planejado com acessibilidade, consultórios equipados e
                      assepsia rigorosa para o seu conforto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Textos Sobre a SIS Saúde Integrada */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="eyebrow-blue">Sobre a Clínica SIS</span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    Nascida com um propósito: cuidar da sua saúde com respeito, ciência e afeto.
                  </h2>
                </div>

                <p className="text-base text-slate-600 leading-relaxed">
                  A <strong>SIS — Saúde Integrada Sarzedo</strong> foi concebida para oferecer
                  aos moradores de Sarzedo e de toda a região metropolitana uma experiência de
                  saúde acolhedora e resolutiva. Acreditamos que a ida ao médico ou ao dentista
                  não deve ser fria ou estressante.
                </p>

                <p className="text-base text-slate-600 leading-relaxed">
                  Aqui, cada paciente é acolhido com atenção desde o primeiro “bom dia” na
                  recepção. Nossos consultórios reúnem médicos oftalmologistas conceituados
                  (núcleo SAME), dentistas carinhosos dedicados à odontopediatria e ortodontia,
                  fisioterapeuta experiente no studio de Pilates e psicólogos preparados para
                  ouvir.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Atendimento Sem Pressa
                      </p>
                      <p className="text-xs text-slate-500">
                        Tempo de consulta dedicado para esclarecer suas dúvidas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Para Toda a Família
                      </p>
                      <p className="text-xs text-slate-500">
                        Cuidado dos bebês e crianças aos avós e gestantes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <GlowingButton
                    onClick={() => openConsultModal("Geral")}
                    variant="blue"
                    size="md"
                  >
                    <span>Conheça Nossos Serviços</span>
                    <ArrowRight className="h-4 w-4" />
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. DIFERENCIAIS DA CLÍNICA */}
        <section id="diferenciais" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="eyebrow-green justify-center">Por Que Escolher a SIS</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Diferenciais que você sente desde a recepção ao consultório.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Combinamos técnica médica de ponta, infraestrutura moderna e um acolhimento
                verdadeiramente humano.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {diferenciais.map((dif, idx) => {
                const IconComp = dif.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-7 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-[#0066cc] mb-5">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                      {dif.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {dif.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. PROVA SOCIAL & DEPOIMENTOS GOOGLE (4,8 ★) */}
        <section id="avaliacoes" className="py-16 sm:py-24 bg-sky-50/60 border-y border-sky-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header da Prova Social */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-sky-200/80">
              <div className="space-y-2 text-center md:text-left">
                <span className="eyebrow-blue">Avaliações Reais no Google</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  O que os nossos pacientes dizem sobre a SIS.
                </h2>
                <p className="text-slate-600 text-base max-w-xl">
                  Mais de 340 avaliações de famílias de Sarzedo e região confirmando nosso
                  compromisso com a saúde e o atendimento carinhoso.
                </p>
              </div>

              {/* Big Google Score Badge */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm shrink-0">
                <GoogleIcon size={36} />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading text-2xl font-black text-slate-900">
                      4,8
                    </span>
                    <div className="flex text-amber-400 text-base">
                      {"★★★★★"}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-500">
                    +340 avaliações no Google Maps
                  </p>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0066cc] hover:underline mt-1"
                  >
                    <span>Conferir no Google</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Grid com Depoimentos Reais */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {depoimentosGoogle.map((dep, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Estrelas & Data */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-amber-400 text-sm">
                        {"★★★★★".slice(0, dep.rating)}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {dep.date}
                      </span>
                    </div>

                    {/* Texto da Avaliação */}
                    <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                      &ldquo;{dep.text}&rdquo;
                    </p>
                  </div>

                  {/* Autor e Especialidade */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {dep.name}
                      </p>
                      <p className="text-[11px] text-sky-700 font-medium">
                        {dep.detail}
                      </p>
                    </div>
                    {dep.badge && (
                      <span className="rounded bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-[#0066cc]">
                        {dep.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Depoimentos */}
            <div className="mt-12 text-center">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0078d8] transition-colors shadow-sm"
              >
                <GoogleIcon size={16} />
                <span>Ver todas as 340+ avaliações no Google Meu Negócio</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 9. JORNADA DO PACIENTE / COMO AGENDAR */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="eyebrow-blue justify-center">Simples &amp; Sem Burocracia</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Como agendar sua consulta na Clínica SIS
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Em poucos passos você tem seu horário marcado e a garantia de um atendimento
                pontual e atencioso.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white font-black text-lg mb-4">
                  1
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                  Mensagem no WhatsApp
                </h3>
                <p className="text-xs text-slate-600">
                  Clique no botão de agendamento e envie sua mensagem. Nossa recepção responde
                  rapidamente.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white font-black text-lg mb-4">
                  2
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                  Escolha de Dia e Horário
                </h3>
                <p className="text-xs text-slate-600">
                  Defina o melhor dia e horário na nossa agenda semanal ou aos sábados.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white font-black text-lg mb-4">
                  3
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                  Chegada &amp; Recepção
                </h3>
                <p className="text-xs text-slate-600">
                  Estacione em frente à clínica na MG-040 e seja recebido com carinho e conforto.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#88d830] text-slate-950 font-black text-lg mb-4">
                  4
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                  Cuidado Especializado
                </h3>
                <p className="text-xs text-slate-600">
                  Consulta minuciosa, exames claros e plano de tratamento feito sob medida.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá! Gostaria de agendar meu atendimento na clínica SIS Sarzedo.")}
                target="_blank"
                variant="whatsapp"
                size="lg"
              >
                <WhatsAppIcon size={20} />
                <span>Agendar Atendimento Agora</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* 10. FAQ (PERGUNTAS FREQUENTES) */}
        <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="eyebrow-blue justify-center">Perguntas Frequentes</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Tire suas dúvidas sobre a Clínica SIS Sarzedo
              </h2>
              <p className="text-slate-600 text-base">
                Reunimos as respostas para as perguntas mais comuns de nossos pacientes.
              </p>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                    >
                      <span className="font-heading text-base sm:text-lg font-bold text-slate-900 pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#0078d8]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-sky-200 bg-white p-6 text-center space-y-3">
              <p className="text-sm font-semibold text-slate-700">
                Ainda tem alguma dúvida específica?
              </p>
              <GlowingButton
                href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre os serviços da clínica SIS.")}
                target="_blank"
                variant="blue"
                size="sm"
              >
                <WhatsAppIcon size={16} />
                <span>Perguntar no WhatsApp</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* 11. LOCALIZAÇÃO, MAPA & CONTATO */}
        <section id="contato" className="py-16 sm:py-24 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Informações de Contato */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <span className="eyebrow-blue">Localização &amp; Contato</span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    Fácil de chegar. Fácil de estacionar.
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Estamos localizados na marginal da Rodovia MG-040, com vagas de
                    estacionamento na porta para maior conforto de gestantes, crianças e idosos.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <MapPin className="h-5 w-5 text-[#0078d8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Endereço:</p>
                      <p className="text-slate-600">{ADDRESS_TEXT}</p>
                      <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">
                        Marginal da MG-040 com estacionamento em frente
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <Clock className="h-5 w-5 text-[#0078d8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Horário de Funcionamento:</p>
                      <p className="text-slate-600">
                        Segunda a Sexta: <strong>08:00 às 18:00</strong>
                      </p>
                      <p className="text-slate-600">
                        Sábado: <strong>08:00 às 12:00</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <Phone className="h-5 w-5 text-[#0078d8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Telefones para Agendamento:</p>
                      <p className="text-slate-600">
                        WhatsApp: <strong>{PHONE_DISPLAY}</strong>
                      </p>
                      <p className="text-slate-600">
                        Fixo: <strong>{PHONE_FIXO_DISPLAY}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <InstagramIcon size={20} className="text-[#0078d8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Redes Sociais Oficiais:</p>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0066cc] font-semibold hover:underline"
                      >
                        Instagram: {INSTAGRAM_HANDLE}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <GlowingButton
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    variant="blue"
                    size="md"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Abrir no Google Maps</span>
                  </GlowingButton>

                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na clínica SIS.")}
                    target="_blank"
                    variant="whatsapp"
                    size="md"
                  >
                    <WhatsAppIcon size={18} />
                    <span>WhatsApp</span>
                  </GlowingButton>
                </div>
              </div>

              {/* Card Visual / Mapa Fachada */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src={FACHADA_SRC}
                      alt="Localização e fachada da SIS Saúde Integrada Sarzedo"
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#0078d8] px-3.5 py-1 text-xs font-bold text-white shadow-md">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Rodovia MG 040, 122 Marginal</span>
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-black text-white">
                        SIS — Saúde Integrada Sarzedo
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 max-w-lg">
                        Próximo à marginal de Sarzedo, com acesso facilitado e vagas na porta.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-3">
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow"
                        >
                          <GoogleIcon size={16} />
                          <span>Como Chegar (GPS)</span>
                        </a>
                        <a
                          href="https://waze.com/ul?q=Rod.+MG+040+122+Sarzedo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white/20 backdrop-blur-md px-3.5 py-2 text-xs font-bold text-white hover:bg-white/30 transition-colors"
                        >
                          <span>Abrir no Waze</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 12. FOOTER COMPLETO */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Coluna 1: Marca & Bio */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-12 w-48">
                <Image
                  src={LOGO_SRC}
                  alt="SIS — Saúde Integrada Sarzedo"
                  fill
                  sizes="200px"
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Clínica Médica e Odontológica multidisciplinar em Sarzedo / MG. Cuidando da sua
                saúde e bem-estar com corpo clínico qualificado, infraestrutura moderna e
                atendimento humanizado.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da SIS"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-[#0078d8] hover:text-white transition-colors"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da SIS"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <WhatsAppIcon size={16} />
                </a>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <GoogleIcon size={16} />
                </a>
              </div>
            </div>

            {/* Coluna 2: Especialidades */}
            <div className="lg:col-span-3 space-y-3">
              <p className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Especialidades
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#especialidades" className="hover:text-white transition-colors">
                    Oftalmologia SAME (Exames de Vista)
                  </a>
                </li>
                <li>
                  <a href="#especialidades" className="hover:text-white transition-colors">
                    Odontologia &amp; Odontopediatria
                  </a>
                </li>
                <li>
                  <a href="#especialidades" className="hover:text-white transition-colors">
                    Ortodontia &amp; Aparelhos
                  </a>
                </li>
                <li>
                  <a href="#especialidades" className="hover:text-white transition-colors">
                    Studio de Pilates &amp; Fisioterapia
                  </a>
                </li>
                <li>
                  <a href="#especialidades" className="hover:text-white transition-colors">
                    Psicologia Clínica
                  </a>
                </li>
                <li>
                  <a href="#especialidades" className="hover:text-white transition-colors">
                    Nutrição &amp; Reeducação Alimentar
                  </a>
                </li>
                <li>
                  <a href="#especialidades" className="hover:text-white transition-colors">
                    Clínica Médica Geral &amp; Check-ups
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Atendimento & Horário */}
            <div className="lg:col-span-4 space-y-3">
              <p className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Contato &amp; Funcionamento
              </p>
              <div className="space-y-2 text-xs text-slate-400">
                <p>
                  📍 <strong className="text-slate-200">Endereço:</strong> {ADDRESS_TEXT}
                </p>
                <p>
                  📞 <strong className="text-slate-200">Fixo:</strong> {PHONE_FIXO_DISPLAY}
                </p>
                <p>
                  📲 <strong className="text-slate-200">WhatsApp:</strong> {PHONE_DISPLAY}
                </p>
                <p>
                  ✉️ <strong className="text-slate-200">E-mail:</strong> {EMAIL_CONTACT}
                </p>
                <div className="pt-2 border-t border-slate-800 text-slate-400">
                  <p className="font-semibold text-slate-300">Horário:</p>
                  <p>Segunda a Sexta: 08:00 às 18:00</p>
                  <p>Sábado: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Linha de Copyright & Ética Médica */}
          <div className="mt-12 pt-8 border-t border-slate-800 text-center sm:flex sm:items-center sm:justify-between text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} {CLINIC_NAME}. Todos os direitos reservados.
            </p>
            <p className="mt-2 sm:mt-0">
              Clínica médica, odontológica e multidisciplinar em Sarzedo / MG.
            </p>
          </div>
        </div>
      </footer>

      {/* 13. FLOATING WHATSAPP CTA BUTTON */}
      <aside aria-label="Atendimento rápido no WhatsApp" className="fixed bottom-5 right-5 z-50">
        <a
          href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta na SIS Sarzedo.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] pulse-whatsapp"
          aria-label="Abrir WhatsApp para agendar consulta"
        >
          <WhatsAppIcon size={24} className="text-white" />
          <span className="hidden sm:inline font-bold text-xs tracking-wide uppercase">
            Agendar Consulta
          </span>
        </a>
      </aside>

      {/* 14. MODAL INTERATIVO DE AGENDAMENTO RÁPIDO */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl z-10"
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-2 mb-6">
                <span className="eyebrow-blue">Agendamento de Consulta</span>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Como podemos ajudar você hoje?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Selecione a especialidade desejada para ser atendido(a) no WhatsApp com agilidade.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Oftalmologia (SAME) - Exames de Vista",
                  "Odontologia & Odontopediatria (Dra. Laura)",
                  "Studio de Pilates & Fisioterapia (Dra. Emilly)",
                  "Psicologia Clínica",
                  "Nutrição & Reeducação Alimentar",
                  "Clínica Geral & Check-up",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setModalSpecialty(item)}
                    className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left text-xs font-semibold transition-all ${
                      modalSpecialty === item
                        ? "border-[#0078d8] bg-sky-50 text-[#0066cc]"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item}</span>
                    {modalSpecialty === item && (
                      <CheckCircle2 className="h-4 w-4 text-[#0078d8]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de agendar uma consulta de ${modalSpecialty} na clínica SIS — Saúde Integrada Sarzedo.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#20ba5a] transition-colors shadow-md"
                >
                  <WhatsAppIcon size={18} />
                  <span>Continuar no WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Fechar janela
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
