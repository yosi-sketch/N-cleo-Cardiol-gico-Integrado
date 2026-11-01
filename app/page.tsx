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
  Heart,
  HeartPulse,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Star,
  Activity,
  UserCheck,
  X,
  ChevronDown,
  Award,
  Stethoscope,
  ShieldCheck,
  FileText,
  BadgeCheck,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Contatos & Dados Cadastrais Oficiais do Núcleo Cardiológico Integrado
const WHATSAPP_NUMBER = "5531989885541";
const PHONE_DISPLAY = "(31) 98988-5541";
const PHONE_FIXO_DISPLAY = "(31) 3535-1014";
const EMAIL_CONTACT = "contato@nucleocardiologico.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/nucleocardiologico/";
const INSTAGRAM_HANDLE = "@nucleocardiologico";

const CLINIC_NAME = "Núcleo Cardiológico Integrado";

const ADDRESS_TEXT =
  "R. Dr. Tomás de Andrade, 139, Centro, Mateus Leme - MG, 35670-000";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Nucleo+Cardiologico+Integrado+Mateus+Leme";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Dr.+Tom%C3%A1s+de+Andrade%2C+139%2C+Centro%2C+Mateus+Leme+-+MG%2C+35670-000";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FACHADA_SRC = "/fachada-clinica.jpg";
const RECEPCAO_SRC = "/recepcao-clinica.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta / exame no Núcleo Cardiológico Integrado em Mateus Leme.";
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
  const [modalSpecialty, setModalSpecialty] = useState<string>("Consulta Cardiológica Geral");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openConsultModal = (specialtyName = "Consulta Cardiológica") => {
    setModalSpecialty(specialtyName);
    setModalOpen(true);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Especialidades e Exames Cardiológicos Oficiais
  const especialidades = [
    {
      id: "consulta-cardiologica",
      tag: "Prevenção & Avaliação Clínica",
      name: "Consulta Cardiológica & Risco Cirúrgico",
      icon: Stethoscope,
      color: "from-[#01499a] to-[#013b7e]",
      accentBg: "bg-sky-50 border-sky-200 text-[#01499a]",
      description:
        "Consulta minuciosa e humanizada com médico cardiologista. Investigação aprofundada de sintomas como dores no peito, palpitações, falta de ar e cansaço, além de laudo detalhado de risco cirúrgico pré-operatório.",
      professionals: "Dr. Cleiterson & Corpo Clínico Especializado",
      highlights: [
        "Escuta atenta e consulta clínica sem pressa",
        "Avaliação e liberação de risco cirúrgico pré-operatório",
        "Investigação de histórico familiar e fatores de risco",
        "Plano de cuidado preventivo individualizado",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar uma consulta cardiológica no Núcleo Cardiológico Integrado em Mateus Leme.",
    },
    {
      id: "holter-24h",
      tag: "Monitoramento Contínuo",
      name: "Holter 24 Horas Digital",
      icon: HeartPulse,
      color: "from-[#dd0101] to-[#b91c1c]",
      accentBg: "bg-red-50 border-red-200 text-[#b91c1c]",
      description:
        "Gravação ininterrupta da atividade elétrica do coração durante 24 horas enquanto você realiza suas tarefas diárias e dorme. Essencial para detectar arritmias ocultas, extrassístoles e investigar tonturas ou desmaios.",
      professionals: "Equipamento digital moderno com laudo cardiológico",
      highlights: [
        "Identificação precisa de arritmias e palpitações",
        "Avaliação de síncope (desmaios) e tonturas inexplicadas",
        "Monitoramento da eficácia de remédios para o coração",
        "Aparelho leve, silencioso e confortável de usar",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar o exame Holter 24 Horas no Núcleo Cardiológico Integrado.",
    },
    {
      id: "mapa-24h",
      tag: "Pressão Arterial",
      name: "M.A.P.A. 24 Horas (Pressão Arterial)",
      icon: Activity,
      color: "from-[#01499a] to-[#0260cc]",
      accentBg: "bg-blue-50 border-blue-200 text-[#01499a]",
      description:
        "Monitorização Ambulatorial da Pressão Arterial com medições automáticas ao longo do dia e da noite. O padrão-ouro para confirmação de hipertensão, controle medicamentoso e detecção de hipertensão mascarada ou do jaleco branco.",
      professionals: "Instalação cuidadosa e orientações claras da equipe",
      highlights: [
        "Diagnóstico assertivo e definitivo da Hipertensão Arterial",
        "Avaliação do descenso da pressão durante o sono",
        "Descarte da hipertensão emocional ('efeito jaleco branco')",
        "Ajuste personalizado dos horários das medicações",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar o exame M.A.P.A. 24 Horas no Núcleo Cardiológico Integrado.",
    },
    {
      id: "ecocardiograma",
      tag: "Ultrassom do Coração",
      name: "Ecocardiograma Transtorácico com Doppler",
      icon: Heart,
      color: "from-[#dd0101] to-[#01499a]",
      accentBg: "bg-slate-50 border-slate-200 text-slate-800",
      description:
        "Exame de imagem não invasivo e indolor que avalia a estrutura anatômica do coração em movimento: tamanho das cavidades, espessura do músculo cardíaco, funcionamento das válvulas e fluxo sanguíneo em tempo real.",
      professionals: "Médicos especialistas em ecocardiografia avançada",
      highlights: [
        "Avaliação de sopros cardíacos e função das válvulas",
        "Detecção de insuficiência cardíaca e dilatações",
        "Análise da força de bombeamento do miocárdio",
        "Tecnologia com Doppler colorido de alta nitidez",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar um Ecocardiograma com Doppler no Núcleo Cardiológico Integrado.",
    },
    {
      id: "eletrocardiograma",
      tag: "Diagnóstico Imediato",
      name: "Eletrocardiograma (ECG) de Alta Resolução",
      icon: ShieldCheck,
      color: "from-[#013b7e] to-[#0c2b57]",
      accentBg: "bg-sky-50 border-sky-200 text-[#013b7e]",
      description:
        "Exame fundamental, rápido e seguro que capta os impulsos elétricos cardíacos através de eletrodos na pele. Realizado na própria clínica com agilidade na marcação e emissão de laudo por cardiologista.",
      professionals: "Realizado por equipe técnica experiente com laudo ágil",
      highlights: [
        "Detecção imediata de alterações do ritmo cardíaco",
        "Triagem para retorno ou início de atividades físicas",
        "Identificação de sinais de isquemia ou infarto prévio",
        "Possibilidade de realização rápida no mesmo dia",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar um Eletrocardiograma (ECG) no Núcleo Cardiológico Integrado.",
    },
    {
      id: "checkup-cardiovascular",
      tag: "Saúde & Longevidade",
      name: "Check-up Cardiológico Preventivo",
      icon: Award,
      color: "from-[#0260cc] to-[#01499a]",
      accentBg: "bg-blue-50 border-blue-200 text-[#01499a]",
      description:
        "Protocolo integrado de exames e consulta para quem deseja viver mais e melhor. Indicado para quem tem histórico de infarto na família, homens e mulheres acima de 35 anos, fumantes, hipertensos, diabéticos e praticantes de esportes.",
      professionals: "Acompanhamento integral com o Dr. Cleiterson",
      highlights: [
        "Mapeamento abrangente de todos os fatores de risco cardiovascular",
        "Prevenção precoce de Infarto Agudo do Miocárdio e AVC",
        "Orientações práticas de estilo de vida e controle de colesterol",
        "Exames e consultas centralizados no mesmo endereço em Mateus Leme",
      ],
      whatsappMsg:
        "Olá! Gostaria de agendar um Check-up Cardiológico no Núcleo Cardiológico Integrado em Mateus Leme.",
    },
  ];

  // Depoimentos Reais dos Pacientes do Google Meu Negócio do Núcleo Cardiológico Integrado
  const depoimentosGoogle = [
    {
      name: "Jhony Silva",
      badge: "Local Guide",
      rating: 5,
      date: "2 anos atrás",
      text: "Espaço incrível, atendimento ímpar. Preciso destacar o profissional espetacular que é o Dr. Cleiterson, quando pensei em tratar a hipertensão logo pensei nele, cardiologista que ultrapassa gerações. Meu Pai tratava com Dr. Cleiterson, hoje eu trato!",
      detail: "Tratamento de Hipertensão com Dr. Cleiterson",
    },
    {
      name: "Lúcia Helena Guimarães Vieira",
      rating: 5,
      date: "4 anos atrás",
      text: "Gosto muito do atendimento do Dr. Cleiterson. Ele sempre escuta o que a gente fala e está sempre disposto a buscar fazer um bom diagnóstico através de exames. É um excelente profissional!",
      detail: "Consulta & Diagnóstico Cardiológico",
    },
    {
      name: "Ana Clara Alves",
      rating: 5,
      date: "2 anos atrás",
      text: "Atendimento excelente, profissionais capacitados. Quando precisei sempre fui muito bem atendida! Dr. Cleiterson um exímio profissional!",
      detail: "Acompanhamento Cardiológico",
    },
    {
      name: "Nathalia Pinto Paiva",
      rating: 5,
      date: "3 anos atrás",
      text: "Excelente atendimento desde a recepção. Médicos altamente capacitados e muito atenciosos. Limpeza impecável, em todos os serviços que já utilizei desde exames a consultas sempre fui bem atendida.",
      detail: "Consultas & Exames do Coração",
    },
    {
      name: "Claudio Silva de Oliveira",
      rating: 5,
      date: "2 anos atrás",
      text: "Excelente atendimento. Profissionais educados e bem capacitados. Desloco de BH para ser atendido, pois sei que estou em boas mãos.",
      detail: "Paciente vindo de Belo Horizonte",
    },
    {
      name: "Cleinice Rezende",
      rating: 5,
      date: "1 ano atrás",
      text: "Atendimento sério e diferenciado, equipe médica excepcional, recepção confortável, profissionais atentas e gentis, bem localizado, dependências bem planejadas, ambiente muito agradável!",
      detail: "Estrutura & Equipe Médica",
    },
    {
      name: "Auriana Oliveira",
      rating: 5,
      date: "2 anos atrás",
      text: "Ótima clínica, fui super bem atendida, consegui marcar e realizar os meus exames no mesmo dia com muita eficiência e atenção da equipe 🥰",
      detail: "Agilidade na Marcação e Realização de Exames",
    },
    {
      name: "Karyne Moreira",
      rating: 5,
      date: "1 ano atrás",
      text: "Atendimento é ótimo. Desde a recepção até os médicos. Vocês estão de parabéns, nota 1000!",
      detail: "Atendimento Humanizado",
    },
    {
      name: "Leticia Ferreira Spiazzi",
      rating: 5,
      date: "1 ano atrás",
      text: "Amei o atendimento, as secretárias são muito atenciosas. Precisei de um retorno rápido e as secretárias trabalharam em cima disso até conseguir. Muito feliz com o atendimento!",
      detail: "Recepção Ágil e Dedicada",
    },
    {
      name: "Héracles Duarte",
      badge: "Local Guide",
      rating: 5,
      date: "2 anos atrás",
      text: "Atendimento do início ao fim é sensacional, atendimento médico na hora marcada sem muito 'chá de cadeira'... Vale a pena cada centavo.",
      detail: "Pontualidade & Qualidade Médica",
    },
    {
      name: "Marisa Almeida",
      rating: 5,
      date: "1 ano atrás",
      text: "Atendimento ótimo, desde a recepção até o atendimento médico. Muito atencioso.",
      detail: "Atenção e Cuidado Médico",
    },
    {
      name: "Sonia Maia",
      rating: 5,
      date: "3 anos atrás",
      text: "Eu e minha família sempre somos muito bem atendidos, o carinho e profissionalismo para conosco é maravilhoso. Obrigada!",
      detail: "Cuidado com Toda a Família",
    },
  ];

  // Diferenciais do Núcleo Cardiológico Integrado
  const diferenciais = [
    {
      icon: Stethoscope,
      title: "Dr. Cleiterson: Confiança de Gerações",
      desc: "Médico cardiologista renomado e querido em toda a região, reconhecido pela capacidade ímpar de escuta atenta e diagnósticos precisos.",
    },
    {
      icon: HeartPulse,
      title: "Exames Cardiológicos no Mesmo Local",
      desc: "Holter 24h, M.A.P.A., Eletrocardiograma (ECG), Ecocardiograma com Doppler e Check-up sem precisar se deslocar para outras clínicas ou cidades.",
    },
    {
      icon: Clock,
      title: "Agilidade & Pontualidade no Atendimento",
      desc: "Respeito total ao seu tempo: marcações rápidas, possibilidade de exames no mesmo dia e atendimento com atenção sem filas excessivas.",
    },
    {
      icon: Award,
      title: "Reconhecimento Máximo no Google (4,9 ★)",
      desc: "Avaliações autênticas de pacientes de Mateus Leme, Belo Horizonte e cidades vizinhas que confiam a saúde de suas famílias à nossa equipe.",
    },
    {
      icon: Sparkles,
      title: "Ambiente Confortável, Moderno e Asséptico",
      desc: "Recepção climatizada com móveis aconchegantes, consultórios estruturados e rigorosos padrões de higiene e biossegurança.",
    },
    {
      icon: MapPin,
      title: "Localização Central em Mateus Leme",
      desc: "Situada na R. Dr. Tomás de Andrade, 139, bem no Centro de Mateus Leme, com facilidade de parada, embarque e desembarque para idosos e pacientes.",
    },
  ];

  // Perguntas Frequentes do Núcleo Cardiológico Integrado
  const faqs = [
    {
      q: "Onde o Núcleo Cardiológico Integrado está localizado em Mateus Leme?",
      a: "A clínica está localizada na Rua Dr. Tomás de Andrade, 139, no Centro de Mateus Leme - MG (CEP 35670-000), em ponto nobre e de fácil acesso tanto para moradores locais quanto para pacientes vindos de Juatuba, Betim, Pará de Minas, Igarapé e Belo Horizonte.",
    },
    {
      q: "Como faço para agendar minha consulta ou exame cardiológico?",
      a: "O agendamento é simples e rápido diretamente pelo nosso WhatsApp oficial (31) 98988-5541 ou pelo telefone fixo (31) 3535-1014. Nossa equipe de recepção atende com prontidão, orientando sobre preparos, horários disponíveis e valores.",
    },
    {
      q: "Quais exames do coração posso realizar na própria clínica?",
      a: "Oferecemos uma linha diagnóstica completa: Eletrocardiograma (ECG) convencional de alta resolução, Holter 24 Horas Digital, M.A.P.A. 24 Horas (pressão arterial), Ecocardiograma Transtorácico com Doppler Colorido, Avaliação de Risco Cirúrgico e Check-up Preventivo.",
    },
    {
      q: "O Dr. Cleiterson atende consultas de hipertensão e check-up de rotina?",
      a: "Sim! O Dr. Cleiterson é cardiologista conceituado e atende consultas preventivas, avaliação de hipertensão arterial, dores torácicas, arritmias, insuficiência cardíaca e risco cirúrgico. Ele é amplamente elogiado pela escuta minuciosa e pela dedicação ao paciente.",
    },
    {
      q: "Qual a diferença entre o Holter 24 Horas e o M.A.P.A. 24 Horas?",
      a: "O Holter 24h monitora continuamente a atividade elétrica e os batimentos cardíacos (ritmo, arritmias e extrassístoles). Já o M.A.P.A. monitora especificamente as oscilações da Pressão Arterial com medições periódicas de dia e de noite para diagnóstico preciso de hipertensão.",
    },
    {
      q: "Consigo realizar meus exames com rapidez?",
      a: "Sim. Um dos maiores elogios de nossos pacientes no Google é a organização e a agilidade da equipe, conseguindo muitas vezes marcações no mesmo dia ou com prazos muito curtos, sem demoras desnecessárias.",
    },
    {
      q: "A clínica atende convênios ou somente particular?",
      a: "Trabalhamos com atendimento particular com valores justos e transparentes, além de parcerias e recibos médicos válidos para reembolso com seu plano de saúde ou dedução no imposto de renda. Consulte nossa equipe pelo WhatsApp para saber detalhes específicos.",
    },
    {
      q: "Quais são os dias e horários de funcionamento?",
      a: "Atendemos de segunda a sexta-feira, das 07:30 às 18:00, e aos sábados, das 08:00 às 12:00, mediante agendamento prévio.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans selection:bg-[#01499a] selection:text-white">
      {/* 1. TOP BAR INSTITUCIONAL DE CONTATO RÁPIDO */}
      <div className="border-b border-sky-900/10 bg-gradient-to-r from-[#071d3d] via-[#013b7e] to-[#01499a] text-white text-[11px] sm:text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-1.5 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sky-100">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="h-3.5 w-3.5 text-red-400" />
              <span>R. Dr. Tomás de Andrade, 139, Centro · Mateus Leme / MG</span>
            </span>
            <span className="hidden md:inline-block text-sky-300">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
              <Clock className="h-3.5 w-3.5 text-red-400" />
              <span>Seg a Sex: 07h30 às 18h | Sáb: 08h às 12h</span>
            </span>
          </div>

          <div className="flex items-center gap-4 font-semibold">
            <a
              href="tel:3135351014"
              className="hidden sm:inline-flex items-center gap-1 text-white hover:text-sky-200 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-sky-300" />
              <span>Fixo: {PHONE_FIXO_DISPLAY}</span>
            </a>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com a recepção do Núcleo Cardiológico Integrado.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-emerald-300 transition-colors font-bold"
            >
              <WhatsAppIcon size={14} className="text-emerald-400" />
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
          {/* Logo Núcleo Cardiológico Integrado */}
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Núcleo Cardiológico Integrado">
            <div className="relative h-12 w-44 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.02]">
              <Image
                src={LOGO_SRC}
                alt="Núcleo Cardiológico Integrado - Clínica Cardiológica em Mateus Leme"
                fill
                priority
                sizes="(max-width: 640px) 176px, 224px"
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Navigation Links Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            <a href="#inicio" className="nav-link">
              Início
            </a>
            <a href="#exames" className="nav-link">
              Exames &amp; Consultas
            </a>
            <a href="#sobre" className="nav-link">
              Dr. Cleiterson &amp; Clínica
            </a>
            <a href="#diferenciais" className="nav-link">
              Diferenciais
            </a>
            <a href="#avaliacoes" className="nav-link">
              Depoimentos
            </a>
            <a href="#faq" className="nav-link">
              Dúvidas
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta cardiológica no Núcleo Cardiológico Integrado.")}
              target="_blank"
              variant="cardio"
              size="sm"
              className="pulse-cardio"
            >
              <Heart className="h-4 w-4 fill-white text-white" />
              <span>Agendar Consulta</span>
            </GlowingButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Abrir menu de navegação"
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
                href="#inicio"
                onClick={closeMenu}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#01499a]"
              >
                Início
              </a>
              <a
                href="#exames"
                onClick={closeMenu}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#01499a]"
              >
                Exames &amp; Consultas
              </a>
              <a
                href="#sobre"
                onClick={closeMenu}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#01499a]"
              >
                Dr. Cleiterson &amp; Clínica
              </a>
              <a
                href="#diferenciais"
                onClick={closeMenu}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#01499a]"
              >
                Diferenciais
              </a>
              <a
                href="#avaliacoes"
                onClick={closeMenu}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#01499a]"
              >
                Depoimentos do Google
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#01499a]"
              >
                Perguntas Frequentes
              </a>
              <a
                href="#contato"
                onClick={closeMenu}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#01499a]"
              >
                Localização &amp; Contato
              </a>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta cardiológica.")}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                >
                  <WhatsAppIcon size={18} />
                  <span>Agendar pelo WhatsApp</span>
                </GlowingButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION */}
      <main>
        <section
          id="inicio"
          className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-white to-white pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16"
        >
          {/* Subtle Cardiac Grid & Pulse SVG Background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#01499a_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Copy & Value Proposition */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="lg:col-span-7 space-y-6 text-center lg:text-left"
              >
                {/* Eyebrow Badge */}
                <motion.div variants={fadeInUp} className="inline-flex items-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/90 px-3.5 py-1.5 text-xs font-bold text-[#b91c1c] shadow-xs backdrop-blur-xs">
                    <Heart className="h-3.5 w-3.5 fill-[#dd0101] text-[#dd0101]" />
                    <span>Cardiologia Especializada &amp; Diagnóstico do Coração</span>
                  </div>
                </motion.div>

                {/* H1 Main Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-heading text-3xl sm:text-5xl lg:text-5xl font-black text-[#071d3d] tracking-tight leading-[1.12]"
                >
                  Cuidado cardiológico especializado, diagnósticos precisos e{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dd0101] via-[#b91c1c] to-[#01499a]">
                    atenção que ultrapassa gerações.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={fadeInUp}
                  className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  No <strong>Núcleo Cardiológico Integrado</strong>, em Mateus Leme, unimos a dedicação e o prestígio do <strong>Dr. Cleiterson</strong> e equipe especializada a uma estrutura completa com consultas e exames do coração no mesmo local, oferecendo diagnósticos precisos e segurança para a sua vida.
                </motion.p>

                {/* Key Benefits Bullets */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0"
                >
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#dd0101] shrink-0" />
                    <span>Consultas e exames do coração no mesmo endereço</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#dd0101] shrink-0" />
                    <span>Holter 24h, M.A.P.A., ECG e Ecocardiograma</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#dd0101] shrink-0" />
                    <span>Dr. Cleiterson: Cardiologista referência há gerações</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#dd0101] shrink-0" />
                    <span>Agilidade de agendamento e atenção sem pressa</span>
                  </div>
                </motion.div>

                {/* Main CTAs */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta cardiológica no Núcleo Cardiológico Integrado.")}
                    target="_blank"
                    variant="cardio"
                    size="lg"
                    className="w-full sm:w-auto pulse-cardio"
                  >
                    <WhatsAppIcon size={20} />
                    <span>Agendar Consulta no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    onClick={() => openConsultModal("Consulta Cardiológica")}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Escolher Especialidade / Exame</span>
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
                    Atendimento ágil e acolhedor. Resposta rápida da nossa equipe de recepção.
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
                  {/* Card Principal: Recepção Moderna e Aconchegante da Clínica */}
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-2xl transition-all duration-300 hover:shadow-sky-100/60">
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={RECEPCAO_SRC}
                        alt="Recepção acolhedora, moderna e climatizada do Núcleo Cardiológico Integrado em Mateus Leme MG"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      {/* Pill sobre a imagem - Top Left */}
                      <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md flex items-center gap-1.5">
                        <span className="flex h-2 w-2 rounded-full bg-[#dd0101]" />
                        <span>Sede em Mateus Leme / MG</span>
                      </div>

                      {/* Pill sobre a imagem - Top Right */}
                      <div className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-900 shadow-md backdrop-blur-md flex items-center gap-1.5 border border-slate-100">
                        <HeartPulse className="h-3.5 w-3.5 text-[#dd0101]" />
                        <span>Dr. Cleiterson</span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-xs font-medium text-slate-200">
                          R. Dr. Tomás de Andrade, 139
                        </p>
                        <p className="text-sm font-bold text-white">
                          Centro · Mateus Leme / MG
                        </p>
                      </div>
                    </div>

                    {/* Mini Card: Interior & Atendimento */}
                    <div className="mt-3 flex items-center gap-3.5 rounded-xl border border-slate-100 bg-[#f0f7ff] p-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center">
                        <Image
                          src={LOGO_SYMBOL_SRC}
                          alt="Símbolo do Coração Núcleo Cardiológico"
                          fill
                          sizes="48px"
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          Estrutura Completa &amp; Humanizada
                        </p>
                        <p className="text-[11px] text-slate-600 line-clamp-1">
                          Ambiente climatizado, silencioso e planejado para o seu coração.
                        </p>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#01499a] mt-0.5">
                          <span>Recepção ágil e atenciosa</span>
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        </span>
                      </div>
                    </div>

                    {/* Badge Google Avaliação 4.9 - 100% Contido no Card (sem sobrepor textos) */}
                    <div className="mt-2.5 flex items-center justify-between rounded-xl border border-amber-200/80 bg-gradient-to-r from-amber-50/80 via-white to-amber-50/40 p-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-500 shadow-xs">
                          <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                            <span className="text-sm font-black">4.9</span>
                            <div className="flex text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-amber-400" />
                              ))}
                            </div>
                            <span className="text-[11px] font-semibold text-slate-500">· Google</span>
                          </div>
                          <p className="text-[11px] text-slate-600 font-medium">
                            Avaliação de excelência por pacientes reais
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        <span>Verificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. STATS STRIP / PROVA SOCIAL RÁPIDA */}
        <section className="border-y border-slate-200 bg-slate-50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <p className="font-heading text-2xl sm:text-3xl font-black text-[#01499a]">
                  4.9 ★
                </p>
                <p className="text-xs font-semibold text-slate-600">
                  Avaliação no Google Maps
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-heading text-2xl sm:text-3xl font-black text-[#dd0101]">
                  Gerações
                </p>
                <p className="text-xs font-semibold text-slate-600">
                  De famílias cuidadas com carinho
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-heading text-2xl sm:text-3xl font-black text-[#01499a]">
                  Completo
                </p>
                <p className="text-xs font-semibold text-slate-600">
                  Consultas &amp; Exames no mesmo local
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-heading text-2xl sm:text-3xl font-black text-emerald-600">
                  100%
                </p>
                <p className="text-xs font-semibold text-slate-600">
                  Atenção e escuta sem correria
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ESPECIALIDADES & EXAMES CARDIOLÓGICOS DETALHADOS */}
        <section id="exames" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
              <span className="eyebrow-red">Exames &amp; Procedimentos Cardiológicos</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Diagnóstico preciso e acompanhamento completo para o seu coração.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Toda a infraestrutura para cuidar da sua saúde cardiovascular: exames digitais modernos com laudos detalhados e consultas minuciosas em Mateus Leme.
              </p>
            </div>

            {/* Grid de Especialidades e Exames */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {especialidades.map((esp) => {
                const IconComponent = esp.icon;
                return (
                  <div
                    key={esp.id}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#01499a]/40 hover:shadow-xl hover:shadow-sky-100/50"
                  >
                    <div>
                      {/* Top Tag & Icon */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold ${esp.accentBg}`}>
                          {esp.tag}
                        </span>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0f7ff] text-[#01499a] transition-colors group-hover:bg-[#01499a] group-hover:text-white">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl font-black text-slate-900 group-hover:text-[#01499a] transition-colors mb-2">
                        {esp.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {esp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                        {esp.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#dd0101] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-2 border-t border-slate-100">
                      <a
                        href={getWhatsAppUrl(esp.whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold text-[#01499a] hover:bg-[#01499a] hover:text-white transition-all group/btn"
                      >
                        <span>Agendar este exame</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Banner de Risco Cirúrgico e Check-up Rápido */}
            <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#071d3d] via-[#013b7e] to-[#01499a] p-8 sm:p-10 text-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-sky-200">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>Precisa de Risco Cirúrgico ou Exames Urgentes?</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                    Agilidade e laudo detalhado para a sua cirurgia ou procedimento.
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-100 max-w-2xl leading-relaxed">
                    Realizamos a avaliação clínica completa e os exames necessários com pontualidade para que você não atrase a sua cirurgia ou tratamento médico.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Preciso de avaliação cardiológica de Risco Cirúrgico com urgência.")}
                    target="_blank"
                    variant="cardio"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Solicitar Risco Cirúrgico</span>
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SOBRE A CLÍNICA & DR. CLEITERSON */}
        <section id="sobre" className="py-16 sm:py-24 bg-slate-50 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Imagens Reais da Estrutura */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                  <Image
                    src={RECEPCAO_SRC}
                    alt="Recepção moderna e aconchegante do Núcleo Cardiológico Integrado"
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
                      alt="Estrutura e instalações do Núcleo Cardiológico Integrado"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 rounded bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                      Ambiente Hospitalar Seguro
                    </div>
                  </div>

                  <div className="flex flex-col justify-center rounded-xl border border-red-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#b91c1c] mb-1">
                      <Heart className="h-4 w-4 text-[#dd0101]" />
                      <span>Tradição &amp; Confiança</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Mais de duas décadas de compromisso com a vida dos pacientes em Mateus Leme e região.
                    </p>
                  </div>
                </div>
              </div>

              {/* Textos Sobre o Núcleo Cardiológico & Dr. Cleiterson */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="eyebrow-red">Corpo Clínico &amp; Tradição</span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    Medicina baseada em ciência, dedicação genuína e respeito a você.
                  </h2>
                </div>

                <p className="text-base text-slate-600 leading-relaxed">
                  O <strong>Núcleo Cardiológico Integrado</strong> é a clínica cardiológica de referência em Mateus Leme. Fundada para oferecer medicina cardiovascular do mais alto rigor científico sem jamais perder o calor humano, a clínica se tornou símbolo de segurança e alívio para milhares de famílias mineiras.
                </p>

                {/* Destaque Dr. Cleiterson */}
                <div className="rounded-2xl border-l-4 border-[#dd0101] bg-white p-4 sm:p-5 shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-[#dd0101]">
                      <Stethoscope className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-slate-900">
                        Dr. Cleiterson — Cardiologia que Atravessa Gerações
                      </h4>
                      <p className="text-xs text-[#01499a] font-semibold">
                        Médico Cardiologista de Referência
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    &ldquo;Quando pensei em tratar a hipertensão, logo pensei nele: cardiologista que ultrapassa gerações. Meu pai tratava com o Dr. Cleiterson, hoje eu trato... Ele escuta de verdade o paciente e não mede esforços para um diagnóstico seguro.&rdquo;
                  </p>
                </div>

                <p className="text-base text-slate-600 leading-relaxed">
                  Além do atendimento médico de excelência, nossa equipe de recepção é constantemente elogiada pelo carinho, pela gentileza e pela eficiência na organização das marcações. Pacientes viajam de Belo Horizonte e de várias cidades da região porque sabem que aqui encontram seriedade, equipamentos modernos e cuidado real.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Escuta Atenta e Empática
                      </p>
                      <p className="text-xs text-slate-500">
                        Tempo de consulta dedicado para ouvir cada sintoma com calma.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Tecnologia Diagnóstica
                      </p>
                      <p className="text-xs text-slate-500">
                        Aparelhos modernos para Holter, MAPA, Ecocardiograma e ECG.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta com o Dr. Cleiterson no Núcleo Cardiológico.")}
                    target="_blank"
                    variant="blue"
                    size="md"
                  >
                    <span>Falar com Nossa Recepção</span>
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
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
              <span className="eyebrow-blue">Por que escolher o Núcleo Cardiológico</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Diferenciais que fazem toda a diferença para o seu coração.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Descubra por que dezenas de famílias confiam no Núcleo Cardiológico Integrado há tantos anos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {diferenciais.map((dif, idx) => {
                const IconComp = dif.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 transition-all duration-300 hover:bg-white hover:border-[#01499a]/30 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-[#01499a] shadow-xs mb-5">
                      <IconComp className="h-6 w-6 text-[#01499a]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                      {dif.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {dif.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. DEPOIMENTOS REAIS DO GOOGLE MEU NEGÓCIO */}
        <section id="avaliacoes" className="py-16 sm:py-24 bg-[#f0f7ff]/70 border-y border-sky-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-slate-800 shadow-xs border border-slate-200">
                <GoogleIcon size={16} />
                <span>Avaliações Reais no Google</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                O que dizem os pacientes que cuidam do coração conosco.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                A opinião transparente e espontânea de quem confia sua saúde ao Dr. Cleiterson e à nossa equipe médica em Mateus Leme.
              </p>
            </div>

            {/* Grid de Depoimentos Reais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {depoimentosGoogle.map((review, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="space-y-3">
                    {/* Estrelas & Data */}
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {review.date}
                      </span>
                    </div>

                    {/* Texto do Depoimento */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Autor & Contexto */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-bold text-slate-900">{review.name}</p>
                        {review.badge && (
                          <span className="rounded bg-sky-100 px-1.5 py-0.2 text-[9px] font-bold text-[#01499a]">
                            {review.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500">{review.detail}</p>
                    </div>
                    <GoogleIcon size={16} className="text-slate-400 shrink-0" />
                  </div>
                </div>
              ))}
            </div>

            {/* Link para o Google Maps */}
            <div className="mt-10 text-center">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#01499a] hover:underline"
              >
                <GoogleIcon size={18} />
                <span>Ver todas as avaliações do Núcleo Cardiológico no Google</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 9. CARD CTA INTERMEDIÁRIO DE CONVERSÃO */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#dd0101] via-[#b91c1c] to-[#013b7e] p-8 sm:p-12 text-white shadow-2xl text-center space-y-6">
              {/* Background decorative ECG pulse line */}
              <div className="pointer-events-none absolute inset-0 opacity-10 flex items-center justify-center">
                <svg className="w-full h-40" viewBox="0 0 1000 200" fill="none" stroke="currentColor">
                  <path
                    d="M 0 100 L 300 100 L 330 70 L 350 130 L 380 20 L 410 180 L 440 80 L 460 110 L 480 100 L 1000 100"
                    strokeWidth="4"
                  />
                </svg>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-xs">
                <Heart className="h-3.5 w-3.5 fill-white" />
                <span>Prevenção Salva Vidas</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight max-w-2xl mx-auto leading-tight">
                Não deixe para depois os cuidados com a saúde do seu coração.
              </h2>

              <p className="text-xs sm:text-base text-red-100 max-w-xl mx-auto leading-relaxed">
                Sentindo cansaço, palpitações ou precisa de acompanhamento para pressão alta? Fale com a equipe do Núcleo Cardiológico Integrado agora mesmo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta cardiológica no Núcleo Cardiológico Integrado.")}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <WhatsAppIcon size={20} />
                  <span>Agendar Consulta no WhatsApp</span>
                </GlowingButton>

                <GlowingButton
                  href="tel:3135351014"
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  <span>Ligar: (31) 3535-1014</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ - PERGUNTAS FREQUENTES */}
        <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12 sm:mb-16">
              <span className="eyebrow-blue">Tire Suas Dúvidas</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Perguntas Frequentes sobre Consultas &amp; Exames
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Tudo o que você precisa saber sobre o atendimento no Núcleo Cardiológico Integrado.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-5 sm:p-6 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#01499a] transition-colors gap-4"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#01499a]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="border-t border-slate-100 px-5 sm:px-6 pb-6 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 11. LOCALIZAÇÃO & CONTATO */}
        <section id="contato" className="py-16 sm:py-24 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Informações de Contato */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <span className="eyebrow-red">Como Chegar &amp; Contato</span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Estamos no coração de Mateus Leme esperando por você.
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Localização central, com facilidade de acesso, recepção climatizada e toda a atenção que o seu coração merece.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <MapPin className="h-5 w-5 text-[#dd0101] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Endereço da Clínica:</p>
                      <p className="text-slate-600">{ADDRESS_TEXT}</p>
                      <p className="text-[11px] text-[#01499a] font-semibold mt-1">
                        Centro · Mateus Leme / MG · CEP 35670-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <Clock className="h-5 w-5 text-[#01499a] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Horário de Atendimento:</p>
                      <p className="text-slate-600">
                        Segunda a Sexta: <strong>07:30 às 18:00</strong>
                      </p>
                      <p className="text-slate-600">
                        Sábado: <strong>08:00 às 12:00</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <Phone className="h-5 w-5 text-[#01499a] shrink-0 mt-0.5" />
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
                    <InstagramIcon size={20} className="text-[#dd0101] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Instagram Oficial:</p>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#01499a] font-semibold hover:underline"
                      >
                        {INSTAGRAM_HANDLE}
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
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta no Núcleo Cardiológico.")}
                    target="_blank"
                    variant="whatsapp"
                    size="md"
                  >
                    <WhatsAppIcon size={18} />
                    <span>WhatsApp</span>
                  </GlowingButton>
                </div>
              </div>

              {/* Card Visual / Recepção & Mapa */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src={RECEPCAO_SRC}
                      alt="Recepção e instalações do Núcleo Cardiológico Integrado em Mateus Leme"
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#dd0101] px-3.5 py-1 text-xs font-bold text-white shadow-md">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Rua Dr. Tomás de Andrade, 139</span>
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-black text-white">
                        Núcleo Cardiológico Integrado
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 max-w-lg">
                        Bem no Centro de Mateus Leme - MG, com estrutura acessível para toda a família.
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
                          href="https://waze.com/ul?q=Rua+Dr+Tomas+de+Andrade+139+Mateus+Leme"
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
      <footer className="border-t border-slate-800 bg-[#071d3d] text-slate-300 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Coluna 1: Marca & Bio */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-14 w-52 bg-white/95 rounded-xl p-2 border border-white/20">
                <Image
                  src={LOGO_SRC}
                  alt="Núcleo Cardiológico Integrado"
                  fill
                  sizes="220px"
                  className="object-contain p-1"
                />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Clínica cardiológica especializada em Mateus Leme / MG. Cuidando da saúde do seu coração com tecnologia de ponta, exames diagnósticos precisos e a dedicação do Dr. Cleiterson e corpo clínico.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do Núcleo Cardiológico"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-[#dd0101] hover:text-white transition-colors"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp do Núcleo Cardiológico"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <WhatsAppIcon size={16} />
                </a>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Reviews"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <GoogleIcon size={16} />
                </a>
              </div>
            </div>

            {/* Coluna 2: Exames & Especialidades */}
            <div className="lg:col-span-3 space-y-3">
              <p className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Exames &amp; Consultas
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#exames" className="hover:text-white transition-colors">
                    Consulta Cardiológica Especializada
                  </a>
                </li>
                <li>
                  <a href="#exames" className="hover:text-white transition-colors">
                    Holter 24 Horas Digital
                  </a>
                </li>
                <li>
                  <a href="#exames" className="hover:text-white transition-colors">
                    M.A.P.A. 24 Horas (Pressão Arterial)
                  </a>
                </li>
                <li>
                  <a href="#exames" className="hover:text-white transition-colors">
                    Eletrocardiograma (ECG)
                  </a>
                </li>
                <li>
                  <a href="#exames" className="hover:text-white transition-colors">
                    Ecocardiograma Transtorácico Doppler
                  </a>
                </li>
                <li>
                  <a href="#exames" className="hover:text-white transition-colors">
                    Avaliação de Risco Cirúrgico
                  </a>
                </li>
                <li>
                  <a href="#exames" className="hover:text-white transition-colors">
                    Check-up Cardiovascular Preventivo
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
                  📞 <strong className="text-slate-200">Telefone Fixo:</strong> {PHONE_FIXO_DISPLAY}
                </p>
                <p>
                  📲 <strong className="text-slate-200">WhatsApp:</strong> {PHONE_DISPLAY}
                </p>
                <p>
                  ✉️ <strong className="text-slate-200">E-mail:</strong> {EMAIL_CONTACT}
                </p>
                <div className="pt-2 border-t border-slate-800 text-slate-400">
                  <p className="font-semibold text-slate-300">Horários:</p>
                  <p>Segunda a Sexta: 07:30 às 18:00</p>
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
              Clínica de cardiologia e exames diagnósticos em Mateus Leme / MG.
            </p>
          </div>
        </div>
      </footer>

      {/* 13. FLOATING WHATSAPP CTA BUTTON */}
      <aside aria-label="Atendimento rápido no WhatsApp" className="fixed bottom-5 right-5 z-50">
        <a
          href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta / exame no Núcleo Cardiológico Integrado.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] pulse-whatsapp"
          aria-label="Abrir WhatsApp para agendar consulta cardiológica"
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
                aria-label="Fechar janela"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-2 mb-6">
                <span className="eyebrow-red">Agendamento de Consulta ou Exame</span>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Como podemos cuidar de você hoje?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Selecione o exame ou tipo de consulta desejada para ser atendido(a) pela nossa recepção no WhatsApp.
                </p>
              </div>

              <div className="space-y-2.5 mb-6 max-h-60 overflow-y-auto pr-1">
                {[
                  "Consulta Cardiológica Geral (Dr. Cleiterson)",
                  "Holter 24 Horas Digital",
                  "M.A.P.A. 24 Horas (Pressão Arterial)",
                  "Eletrocardiograma (ECG)",
                  "Ecocardiograma Transtorácico com Doppler",
                  "Avaliação de Risco Cirúrgico Pré-operatório",
                  "Check-up Cardiológico Preventivo",
                  "Acompanhamento de Hipertensão Arterial",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setModalSpecialty(item)}
                    className={`flex w-full items-center justify-between rounded-xl border p-3 text-left text-xs font-semibold transition-all ${
                      modalSpecialty === item
                        ? "border-[#dd0101] bg-red-50 text-[#b91c1c]"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item}</span>
                    {modalSpecialty === item && (
                      <CheckCircle2 className="h-4 w-4 text-[#dd0101]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de agendar ${modalSpecialty} no Núcleo Cardiológico Integrado em Mateus Leme.`
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
