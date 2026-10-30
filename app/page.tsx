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
  Award,
  Globe,
  Lock,
  Search,
  Eye,
  BadgeCheck,
  ShieldCheck,
  Building2,
  Laptop,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537998090441";
const PHONE_DISPLAY = "(37) 99809-0441";
const EMAIL_CONTACT = "contato@marianamadeira.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/marianamadeira.adv/";
const INSTAGRAM_HANDLE = "@marianamadeira.adv";

const FIRM_NAME = "Mariana Madeira Registro de Marcas e Advocacia Empresarial";
const FIRM_SHORT_NAME = "Mariana Madeira Marcas";
const FIRM_SLOGAN =
  "Proteção jurídica para quem empreende. Registro de Marcas no INPI, Contratos e Negócios Digitais. Atendimento presencial em Itapecerica - MG e digital em todo o Brasil.";
const LAWYER_NAME = "Dra. Mariana Madeira";
const LAWYER_TITLE =
  "Advogada Empresarial · Especialista em Registro de Marcas & Negócios Digitais";

const ADDRESS_TEXT =
  "Av. Severo Augusto Ribeiro, 179 - Centro, Itapecerica - MG, 35550-000";
const REGION_TEXT =
  "Itapecerica · Minas Gerais & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Mariana+Madeira+%E2%80%94+Advocacia+Empresarial%0AItapecerica+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Severo+Augusto+Ribeiro%2C+179+-+Centro%2C+Itapecerica+-+MG%2C+35550-000";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/mariana-madeira-portrait.jpg";
const FOTO_PERFIL_SRC = "/mariana-madeira.jpg";
const FOTO_AVATAR_SRC = "/mariana-madeira-avatar.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Mariana Madeira! Gostaria de uma avaliação para registrar minha marca e proteger meu negócio.";
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
  const [modalArea, setModalArea] = useState<string>("Registro de Marcas no INPI");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openConsultModal = (areaName = "Registro de Marcas no INPI") => {
    setModalArea(areaName);
    setModalOpen(true);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Pilares Oficiais de Atuação de Mariana Madeira
  const areasAtuacao = [
    {
      id: "registro-marcas-inpi",
      icon: BadgeCheck,
      title: "Registro de Marcas no INPI",
      shortDesc:
        "Exclusividade nacional de 10 anos garantida por lei. Pesquisa prévia de viabilidade, depósito correto, acompanhamento da RPI e entrega do certificado oficial de registro (®).",
      bullets: [
        "Pesquisa aprofundada de viabilidade marcária (evita indeferimentos e perdas financeiras)",
        "Classificação técnica precisa nas classes de Nice para proteção abrangente",
        "Acompanhamento semanal de cada despacho na Revista da Propriedade Industrial (RPI)",
        "Defesa técnica perante oposições de terceiros, recursos e cumprimento de exigências",
        "Concessão do Certificado Oficial de Registro de Marca válido em todo o Brasil",
      ],
      tag: "INPI",
      badge: "Especialidade Principal",
      whatsappMsg:
        "Olá, Dra. Mariana Madeira! Gostaria de fazer a pesquisa de viabilidade para registrar minha marca no INPI.",
    },
    {
      id: "negocios-digitais",
      icon: Laptop,
      title: "Advocacia para Negócios Digitais",
      shortDesc:
        "Segurança jurídica para infoprodutores, agências, criadores de conteúdo, e-commerces e startups que faturam no digital e precisam de blindagem sólida.",
      bullets: [
        "Termos de Uso e Políticas de Privacidade em total conformidade com a LGPD",
        "Contratos de coprodução, prestação de serviços digitais, afiliados e parcerias",
        "Proteção de cursos, mentorias, infoprodutos e propriedade intelectual",
        "Atuação contra pirataria, plágio e remoção de perfis fakes em redes sociais",
      ],
      tag: "Digital",
      badge: "Negócios Digitais",
      whatsappMsg:
        "Olá, Dra. Mariana Madeira! Preciso de assessoria jurídica especializada para meu negócio digital / infoproduto.",
    },
    {
      id: "contratos-empresariais",
      icon: FileText,
      title: "Contratos Empresariais Estratégicos",
      shortDesc:
        "Elaboração, análise e blindagem minuciosa de instrumentos contratuais para empresas físicas e digitais, prevenindo litígios, calotes e passivos financeiros.",
      bullets: [
        "Redação e revisão customizada de contratos comerciais com clientes e fornecedores",
        "Acordos de sócios (Memorandos de Entendimento / MoUs) e regras societárias claras",
        "Termos de Confidencialidade (NDA) e não-concorrência para blindagem de know-how",
        "Notificações extrajudiciais formais e cobrança jurídica de inadimplentes",
      ],
      tag: "Contratos",
      badge: "Blindagem Jurídica",
      whatsappMsg:
        "Olá, Dra. Mariana Madeira! Gostaria de orientações para elaboração ou revisão de contratos da minha empresa.",
    },
    {
      id: "pirataria-concorrencia",
      icon: ShieldCheck,
      title: "Combate à Pirataria & Concorrência Desleal",
      shortDesc:
        "Medidas rápidas e enérgicas contra quem tenta se apropriar indevidamente do nome, da reputação, do conteúdo ou da clientela da sua empresa.",
      bullets: [
        "Notificações extrajudiciais imediatas para cessação de uso indevido de marca",
        "Ações judiciais de abstenção de uso de marca cumuladas com pedidos indenizatórios",
        "Derrubada ágil de contas clonadas, anúncios fraudulentos e marketplaces piratas",
        "Defesa de segredo comercial e proteção do patrimônio intangível do negócio",
      ],
      tag: "Proteção",
      badge: "Defesa Patrimonial",
      whatsappMsg:
        "Olá, Dra. Mariana Madeira! Identifiquei terceiros usando indevidamente o nome da minha marca / conteúdo.",
    },
    {
      id: "assessoria-pmes",
      icon: Building2,
      title: "Assessoria Jurídica Contínua para PMEs",
      shortDesc:
        "Retaguarda jurídica preventiva mensal para o empresário tomar decisões comerciais com segurança, previsibilidade e apoio direto da Dra. Mariana Madeira.",
      bullets: [
        "Consultoria mensal preventiva para empresas em expansão no presencial e digital",
        "Análise de riscos comerciais, negociações contratuais e pareceres ágeis",
        "Atendimento direto e sem burocracia para resolver as dúvidas do dia a dia",
        "Tranquilidade para o empresário focar em faturar e escalar sem medo de processos",
      ],
      tag: "Assessoria",
      badge: "Suporte Mensal",
      whatsappMsg:
        "Olá, Dra. Mariana Madeira! Gostaria de saber mais sobre a assessoria jurídica mensal contínua para empresas.",
    },
    {
      id: "monitoramento-vigilancia",
      icon: Eye,
      title: "Vigilância & Monitoramento Ativo no INPI",
      shortDesc:
        "Sua marca não pode ficar desprotegida após o registro. Monitoramos semanalmente novas tentativas de cópia para barrar concorrentes de imediato.",
      bullets: [
        "Vigilância contínua da Revista da Propriedade Industrial (RPI) semana a semana",
        "Alertas imediatos caso terceiros tentem depositar marcas similares ou idênticas",
        "Protocolo célere de Oposição Administrativa dentro do prazo legal do INPI",
        "Manutenção ativa da exclusividade conquistada no mercado nacional",
      ],
      tag: "Vigilância",
      badge: "Vigilância Ativa",
      whatsappMsg:
        "Olá, Dra. Mariana Madeira! Quero contratar o serviço de vigilância e monitoramento contínuo da minha marca no INPI.",
    },
  ];

  // Avaliações Reais do Google Meu Negócio de Mariana Madeira (Nota Máxima 5,0 ★ unânime)
  const depoimentosGoogle = [
    {
      author: "Lara Nascimento Santos Lopes",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "3 meses atrás · Avaliação verificada",
      quote:
        "Profissional super competente e justa. Desde a pesquisa de viabilidade da marca até a sua concessão, se mostra super solícita. Preço justo pelos serviços prestados e muito clara em cada etapa que o registro de marca requer.",
      highlight: "Super competente e justa, clareza em cada etapa do registro",
    },
    {
      author: "Lavinia Dini",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "3 meses atrás · Avaliação verificada",
      quote:
        "Profissional excelente!!! Super atenciosa e prestativa. Não tenho preocupação com minha marca hoje graças a ela, que registrou tudo 🙏🏼 Obrigada, Mariana!!",
      highlight: "Não tenho preocupação com minha marca hoje graças a ela",
    },
    {
      author: "Isabela Gondim Wulf",
      detail: "3 avaliações no Google",
      stars: 5,
      date: "3 meses atrás · Avaliação verificada",
      quote:
        "Excelente profissional! Confio de olhos fechados. Extremamente atenciosa e dedicada.",
      highlight: "Confio de olhos fechados, extremamente atenciosa e dedicada",
    },
    {
      author: "Ariane Medeiros Santos",
      detail: "6 avaliações · 3 fotos no Google",
      stars: 5,
      date: "3 meses atrás · Avaliação verificada",
      quote: "Excelente profissional! Recomendo de olhos fechados.",
      highlight: "Excelente profissional, recomendo de olhos fechados",
    },
    {
      author: "Marcelo Cotta",
      detail: "6 avaliações no Google",
      stars: 5,
      date: "3 meses atrás · Avaliação verificada",
      quote: "Excelente profissional!!",
      highlight: "Excelente profissional, dedicação e seriedade",
    },
    {
      author: "Cristiane Lamounier Costa",
      detail: "3 avaliações no Google",
      stars: 5,
      date: "3 meses atrás · Avaliação verificada",
      quote: "Pontualidade e confiança",
      highlight: "Pontualidade e confiança absoluta em cada processo",
    },
  ];

  // Diferenciais Competitivos de Mariana Madeira
  const diferenciais = [
    {
      icon: Award,
      title: "+500 Marcas Conduzidas e Protegidas",
      description:
        "Ampla vivência prática e expertise consolidada em processos no INPI para empresas de diversos nichos e portes, tanto no mercado tradicional quanto nos negócios digitais em todo o Brasil.",
    },
    {
      icon: Star,
      title: "Nota Máxima 5,0 ★ Unânime no Google",
      description:
        "Reconhecimento espontâneo de clientes com 100% de avaliações 5 estrelas no Google Meu Negócio, atestando a competência, a pontualidade, a clareza didática e a dedicação personalizada.",
    },
    {
      icon: Laptop,
      title: "Especialista em Negócios Digitais & Startups",
      description:
        "Domínio das dinâmicas ágeis de infoprodutos, e-commerces, plataformas e criadores. Contratos de coprodução, termos LGPD e defesa contra pirataria digital pensados para a velocidade da internet.",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Direto, Humanizado & Sem Juridiquês",
      description:
        "Você alinha suas estratégias e tira dúvidas diretamente com a Dra. Mariana Madeira. Comunicação clara, honesta, sem termos herméticos e com suporte solícito em cada fase do processo.",
    },
    {
      icon: MapPin,
      title: "Sede Central em Itapecerica & Alcance Nacional",
      description:
        "Escritório presencial na Av. Severo Augusto Ribeiro, 179 - Centro, Itapecerica - MG, aliado a um fluxo 100% digital e seguro para atender clientes de qualquer estado do país.",
    },
    {
      icon: Shield,
      title: "Honorários Claros, Preço Justo & Rigor Ético",
      description:
        "Transparência absoluta sobre custos, taxas oficiais do INPI e cronograma de trabalho. Contratos transparentes alinhados ao Código de Ética e Disciplina da OAB.",
    },
  ];

  // Situações comuns (Diagnóstico Rápido)
  const situacoesDiagnostico = [
    {
      pergunta: "Sua empresa já investe em nome, logo e fachada, mas você ainda não registrou no INPI?",
      orientacao:
        "No Brasil, o direito sobre a marca pertence a quem registra primeiro no INPI. Sem o registro, você corre o risco de ser impedido de usar seu próprio nome, perder seguidores, ter que trocar de fachada e ainda pagar indenização a terceiros.",
      cta: "Fazer Pesquisa de Viabilidade Gratuita",
      area: "Registro de Marcas no INPI",
    },
    {
      pergunta: "Descobriu alguém copiando seu logotipo, nome comercial, fotos ou infoprodutos?",
      orientacao:
        "A Dra. Mariana Madeira atua prontamente com notificações extrajudiciais formais para cessação imediata do uso indevido e, quando necessário, ingresso com medidas judiciais de abstenção de uso e indenização por perdas e danos.",
      cta: "Combater Uso Indevido da Marca",
      area: "Combate à Pirataria",
    },
    {
      pergunta: "Está fechando parcerias, entrando em sociedade ou contratando sem um documento blindado?",
      orientacao:
        "Estruturamos Acordos de Sócios (MoUs), contratos de prestação de serviços e termos de confidencialidade (NDA) customizados para mitigar riscos, alinhar expectativas e evitar litígios que sangrem seu negócio.",
      cta: "Blindar Meus Contratos Comerciais",
      area: "Contratos Empresariais",
    },
    {
      pergunta: "Atua no mercado digital (cursos, infoprodutos, e-commerce) e precisa de estrutura jurídica segura?",
      orientacao:
        "Elaboração de Termos de Uso, Políticas de Privacidade alinhadas à LGPD, contratos de coprodução e estratégias completas de blindagem para você vender na internet com tranquilidade institucional.",
      cta: "Consultar Advocacia para o Digital",
      area: "Negócios Digitais",
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "Por que ter o CNPJ ou registro na Junta Comercial não protege minha marca?",
      answer:
        "O CNPJ e a Junta Comercial garantem apenas o registro do nome empresarial na sua junta estadual. Eles NÃO concedem exclusividade comercial sobre a marca nem sobre o logotipo. Apenas o registro concedido pelo INPI (Instituto Nacional da Propriedade Industrial) confere o direito exclusivo de uso da marca em todo o território nacional e o direito de usar o símbolo ®.",
    },
    {
      question: "Como funciona a pesquisa prévia de viabilidade da marca?",
      answer:
        "A pesquisa de viabilidade é o passo mais estratégico antes de iniciar o processo. Analisamos detalhadamente a base de dados do INPI para verificar se já existem marcas idênticas ou semelhantes registradas ou em trâmite no mesmo segmento mercadológico. Isso evita que você gaste taxas em um pedido com alto risco de indeferimento.",
    },
    {
      question: "Quanto tempo dura o processo no INPI e qual a validade do registro?",
      answer:
        "Atualmente, um processo de registro de marca no INPI costuma levar em média de 8 a 14 meses quando não há oposições complexas de terceiros. Uma vez concedido, o Certificado de Registro tem validade de 10 anos em todo o Brasil e pode ser renovado indefinidamente por períodos iguais.",
    },
    {
      question: "O escritório atende apenas presencialmente em Itapecerica ou em todo o Brasil?",
      answer:
        "Atendemos com muito prazer de forma presencial em nosso escritório na Av. Severo Augusto Ribeiro, 179 - Centro, em Itapecerica - MG. E, como o sistema do INPI e a gestão contratual são 100% digitais, atendemos com a mesma agilidade, proximidade e excelência clientes de qualquer cidade ou estado do Brasil.",
    },
    {
      question: "O que acontece se eu receber uma notificação extrajudicial para parar de usar meu nome?",
      answer:
        "Se outra empresa possui a marca registrada antes de você no INPI, ela pode exigir que você pare de utilizá-la imediatamente e cobrar indenizações pelo uso indevido. Caso você tenha recebido uma notificação, entre em contato imediatamente com a Dra. Mariana Madeira para analisarmos a validade do documento e traçarmos a melhor estratégia defensiva.",
    },
    {
      question: "Como funcionam os honorários e as taxas oficiais do INPI?",
      answer:
        "Trabalhamos com absoluta transparência. Informamos com clareza quais são as taxas oficiais obrigatórias do Governo Federal (INPI) — que possuem descontos de até 60% para MEI, ME, EPP e pessoas físicas — e detalhamos nossos honorários em contrato formal, com condições facilitadas de pagamento.",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#b8874d] selection:text-white">
        {/* ========================================================================= */}
        {/* 1. TOP NOTICE / PRE-HEADER                                               */}
        {/* ========================================================================= */}
        <div className="border-b border-[#262c3a] bg-gradient-to-r from-[#090a0d] via-[#101218] to-[#14171e] px-4 py-2 text-white">
          <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-2 px-4 sm:px-6 lg:px-8 xl:px-12 text-xs">
            <div className="flex items-center gap-2 font-medium">
              <span className="flex size-2 rounded-full bg-[#d9aa69] animate-pulse" />
              <span className="text-[#f7edd7] font-semibold">
                Mariana Madeira &bull; Registro de Marcas &amp; Advocacia Empresarial
              </span>
              <span className="hidden sm:inline text-amber-500/50">|</span>
              <span className="hidden sm:inline text-slate-300">
                🛡️ +500 marcas protegidas &bull; Itapecerica - MG e todo o Brasil
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
                <span className="text-amber-200/80">(10 avaliações no Google)</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 font-semibold text-[#e8caa0] hover:text-white transition-colors"
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
              ? "border-b border-[#b8874d]/30 bg-[#090a0d]/98 shadow-xl shadow-black/40 backdrop-blur-md"
              : "border-b border-[#262c3a] bg-[#090a0d]/92 backdrop-blur-md"
          }`}
        >
          <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8 xl:px-12">
            {/* Left: Official Logo */}
            <a
              href="#inicio"
              aria-label="Mariana Madeira Marcas - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-90"
            >
              <div className="relative h-11 sm:h-12 w-48 sm:w-60 shrink-0">
                <Image
                  src={LOGO_SRC}
                  alt="Mariana Madeira Marcas e Advocacia Empresarial"
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
                Serviços &amp; INPI
              </a>
              <a className="nav-link" href="#sobre">
                Dra. Mariana Madeira
              </a>
              <a className="nav-link" href="#diferenciais">
                Diferenciais (+500 marcas)
              </a>
              <a className="nav-link" href="#metodologia">
                Como Funciona
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
                  <WhatsAppIcon size={14} className="text-[#1e1305]" />
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
                className="border-b border-[#262c3a] bg-[#0e1015] px-5 py-5 xl:hidden shadow-2xl text-white"
              >
                <div className="flex flex-col gap-3.5 text-sm font-semibold tracking-wide">
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#e8caa0]"
                    href="#inicio"
                    onClick={closeMenu}
                  >
                    Início
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#e8caa0]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Serviços &amp; Registro no INPI
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#e8caa0]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    Sobre a Dra. Mariana Madeira
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#e8caa0]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Nossos Diferenciais
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#e8caa0]"
                    href="#metodologia"
                    onClick={closeMenu}
                  >
                    Como Funciona o Registro
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#e8caa0]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (5.0 ★)
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#e8caa0]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="py-1.5 text-slate-200 hover:text-[#e8caa0]"
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
                      <WhatsAppIcon size={16} className="text-[#1e1305]" />
                      <span>Falar no WhatsApp</span>
                    </GlowingButton>
                    <a
                      href={`tel:${WHATSAPP_NUMBER}`}
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 py-3 text-xs font-bold text-slate-200 hover:bg-white/5"
                    >
                      <Phone size={14} className="text-[#e8caa0]" />
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
          className="relative overflow-hidden bg-gradient-to-b from-[#090a0d] via-[#12141c] to-[#0c0e14] text-white py-14 sm:py-20 lg:py-24"
        >
          {/* Luminous Ambient Warm Gold Glow */}
          <div className="pointer-events-none absolute -top-24 left-0 size-[650px] rounded-full bg-[#b8874d]/15 blur-[140px]" />
          <div className="pointer-events-none absolute top-1/3 -left-20 size-[500px] rounded-full bg-[#8c5d28]/15 blur-[130px]" />
          <div className="pointer-events-none absolute top-1/2 -right-40 size-96 rounded-full bg-[#c89658]/20 blur-3xl" />

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
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-300/40 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase text-[#f7edd7] shadow-lg backdrop-blur-md">
                    <ShieldCheck size={14} className="text-[#e8caa0]" />
                    <span>Mariana Madeira &bull; Advocacia para Empresas e Negócios Digitais</span>
                  </div>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-cinzel text-3xl font-extrabold leading-[1.18] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                >
                  Sua Marca é Seu Maior Patrimônio: Garanta{" "}
                  <span className="text-gradient-gold font-black drop-shadow-[0_2px_16px_rgba(184,135,77,0.4)]">
                    Exclusividade no INPI
                  </span>{" "}
                  &amp; Blindagem Jurídica.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-base text-slate-100 sm:text-lg sm:leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                >
                  Proteção jurídica de alta precisão técnica conduzida pela{" "}
                  <strong className="text-white font-bold underline decoration-[#b8874d]/70 underline-offset-4">
                    Dra. Mariana Madeira
                  </strong>
                  . Da pesquisa prévia de viabilidade até a concessão definitiva do registro pelo INPI,
                  contratos estratégicos e assessoria completa para empresas físicas e negócios digitais.
                  Mais de 500 marcas protegidas e nota máxima 5,0 ★ no Google.
                </motion.p>

                {/* Authority Badges Checklist */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs sm:text-sm text-white"
                >
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#e8caa0] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      +500 Marcas Confiam no Escritório (®)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#e8caa0] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Nota Máxima 5,0 ★ no Google (10 avaliações)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#e8caa0] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Especialista em Marcas &amp; Negócios Digitais
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-amber-400/20 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[#e8caa0] border border-amber-400/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Sede: Av. Severo Augusto Ribeiro, 179 - Centro
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
                    href={getWhatsAppUrl(
                      "Olá, Dra. Mariana Madeira! Quero verificar a viabilidade da minha marca para registrar no INPI."
                    )}
                    target="_blank"
                    className="shadow-2xl shadow-black/50"
                  >
                    <WhatsAppIcon size={18} className="text-[#1e1305]" />
                    <span>Consultar Viabilidade da Marca</span>
                  </GlowingButton>

                  <a
                    href="#atuacao"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-amber-400/40 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#f7edd7] backdrop-blur-md transition-all hover:border-[#e8caa0] hover:bg-[#b8874d] hover:text-[#090a0d] shadow-lg"
                  >
                    <span>Conhecer Nossos Serviços</span>
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
                  <span className="font-medium text-white">10 avaliações no Google Meu Negócio</span>
                  <span className="text-white/40">&bull;</span>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#e8caa0] hover:text-white underline flex items-center gap-1 transition-colors"
                  >
                    <span>Ver no Google</span>
                    <ArrowUpRight size={13} />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Column: Dra. Mariana Madeira Portrait Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Decorative Glowing Frame */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#b8874d]/40 via-[#e8caa0]/20 to-transparent blur-md" />

                  {/* Main Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300/60 bg-[#0e1015] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Mariana Madeira - Registro de Marcas e Advocacia Empresarial"
                        fill
                        priority
                        unoptimized
                        className="object-cover object-top filter contrast-[1.03]"
                      />

                      {/* Gradient Overlay for bottom text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/25 to-transparent" />

                      {/* Card Lower Badge */}
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-amber-300/40 bg-[#090a0d]/90 p-3.5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                              Dra. Mariana Madeira
                            </p>
                            <p className="text-[10px] sm:text-xs font-semibold text-[#e8caa0] uppercase tracking-wider mt-0.5">
                              Registro de Marcas &bull; Advocacia Empresarial
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
                              5,0 ★ no Google (10)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Top-Right */}
                  <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 rounded-xl border border-amber-300/60 bg-[#090a0d]/95 px-4 py-2.5 shadow-xl backdrop-blur-md z-20">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-amber-400/15 text-[#e8caa0]">
                      <BadgeCheck size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#d9aa69]">
                        Autoridade INPI
                      </p>
                      <p className="text-xs font-bold text-white whitespace-nowrap">
                        +500 Marcas Atendidas
                      </p>
                    </div>
                  </div>

                  {/* Floating Trust Card Left (repositioned to mid-left so it never covers the bottom text) */}
                  <div className="hidden sm:flex absolute top-28 -left-5 lg:-left-6 items-center gap-2.5 rounded-xl border border-amber-400/30 bg-[#0e1015]/95 px-4 py-2.5 shadow-xl backdrop-blur-md z-20">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                        Atendimento Ágil
                      </p>
                      <p className="text-xs font-bold text-white whitespace-nowrap">
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
        <section className="border-y border-[#e8e2d8] bg-[#faf8f5] py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-[#0e1015]">
                  <span>5,0</span>
                  <div className="flex text-amber-500">
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b8874d] mt-1">
                  Nota Máxima Google
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  100% de avaliações 5 estrelas
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0e1015]">
                  +500 Marcas
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b8874d] mt-1">
                  Protegidas &amp; Vigiadas
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  Empresas físicas e negócios digitais
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0e1015]">
                  Itapecerica - MG
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b8874d] mt-1">
                  Sede Central Própria
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  Av. Severo Augusto Ribeiro, 179
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0e1015]">
                  Nacional
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b8874d] mt-1">
                  Atendimento Digital
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  Proteção em todo o Brasil (INPI)
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
                Diagnóstico Rápido de Proteção
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e1015]">
                Você se identifica com algum destes cenários no seu negócio?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Não espere uma notificação extrajudicial ou a perda definitiva do seu nome para agir.
                Garanta a segurança jurídica da sua marca desde o primeiro momento:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {situacoesDiagnostico.map((sit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#e8e2d8] bg-[#faf8f5] p-6 sm:p-8 transition-all hover:border-[#b8874d] hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-[#b8874d]">
                        <AlertCircle size={20} />
                      </div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#0e1015] leading-snug">
                        {sit.pergunta}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-12">
                      {sit.orientacao}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#e8e2d8] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openConsultModal(sit.area)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b8874d] hover:text-[#8c5d28] transition-colors cursor-pointer"
                    >
                      <span>{sit.cta}</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Olá, Dra. Mariana Madeira! ${sit.pergunta}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg bg-[#25D366] text-white hover:brightness-110 transition-all shadow-xs"
                      aria-label="Falar no WhatsApp sobre este diagnóstico"
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
        {/* 6. PILARES DE ATUAÇÃO / SERVIÇOS ESPECIALIZADOS                           */}
        {/* ========================================================================= */}
        <section
          id="atuacao"
          className="relative bg-gradient-to-b from-[#090a0d] via-[#10131b] to-[#14171e] text-white py-16 sm:py-24"
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Pilares de Atuação &bull; Proteção Jurídica para Empreendedores
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                Como atuamos na blindagem e no crescimento do seu negócio
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Soluções estratégicas em Registro de Marcas, Advocacia Digital e Contratos Comerciais
                conduzidas com profundidade técnica, ética e foco na viabilidade do seu negócio.
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
                        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-500/5 border border-amber-400/30 text-[#e8caa0] group-hover:scale-105 transition-transform">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full border border-amber-300/40 bg-amber-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f7edd7]">
                          {area.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#e8caa0] transition-colors">
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
                              className="text-[#e8caa0] shrink-0 mt-0.5"
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
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-amber-400/40 bg-white/5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#f7edd7] transition-all hover:bg-[#b8874d] hover:text-[#090a0d] hover:border-[#e8caa0]"
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
            <div className="mt-14 rounded-2xl border-2 border-amber-300/40 bg-gradient-to-r from-[#090a0d] via-[#12141c] to-[#161a22] p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                <div>
                  <div className="eyebrow-light mb-2">
                    Deseja Registrar Sua Marca com Segurança?
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Fale diretamente com a Dra. Mariana Madeira
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-2xl">
                    Envie o nome do seu negócio para realizarmos a pesquisa de viabilidade no INPI.
                    Analisamos sua marca com rapidez e sigilo para você empreender sem medo.
                  </p>
                </div>

                <GlowingButton
                  variant="gold"
                  size="lg"
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana Madeira! Gostaria de uma avaliação para registrar minha marca e entender as etapas no INPI."
                  )}
                  target="_blank"
                  className="shrink-0"
                >
                  <WhatsAppIcon size={17} className="text-[#1e1305]" />
                  <span>Iniciar Pesquisa de Marca</span>
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
              {/* Photo of Dra. Mariana Madeira on Left */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Subtle Accent Glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#b8874d]/20 to-transparent blur-lg" />

                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#e8e2d8] bg-[#090a0d] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={FOTO_PERFIL_SRC}
                        alt="Dra. Mariana Madeira - Advogada Empresarial e Especialista em Registro de Marcas"
                        fill
                        unoptimized
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d]/85 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-amber-300/30 bg-black/60 p-3.5 backdrop-blur-md text-white text-center">
                        <p className="font-cinzel text-base font-bold text-white">
                          Dra. Mariana Madeira
                        </p>
                        <p className="text-[11px] text-[#e8caa0] mt-0.5">
                          Advogada Empresarial &bull; Registro de Marcas no INPI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Details on Right */}
              <div className="lg:col-span-7">
                <div className="eyebrow-gold mb-3">Sobre a Profissional &amp; Filosofia</div>

                <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1015] leading-tight">
                  Proteção jurídica de vanguarda para quem empreende no físico e no digital.
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    A advocacia liderada pela <strong className="text-[#0e1015]">Dra. Mariana Madeira</strong> nasceu
                    com um propósito claro: garantir que empresários, criadores de conteúdo e negócios inovadores
                    tenham a segurança jurídica necessária para crescer e faturar sem receio de disputas ou perdas patrimoniais.
                  </p>
                  <p>
                    Com vasta atuação e <strong className="text-[#0e1015]">+500 marcas conduzidas e protegidas perante o INPI</strong>,
                    a Dra. Mariana Madeira alia rigor técnico em Propriedade Industrial à compreensão prática do mercado atual,
                    atuando com desenvoltura em contratos para infoprodutos, plataformas online, e-commerces e empresas físicas em expansão.
                  </p>
                  <p>
                    Com escritório presencial estruturado na <strong className="text-[#0e1015]">Av. Severo Augusto Ribeiro, 179 - Centro, em Itapecerica - MG</strong>,
                    oferece um atendimento acolhedor, transparente e ético, ao mesmo tempo em que dispõe de uma infraestrutura 100% digital
                    para conduzir processos de clientes de todas as regiões do Brasil com nota máxima 5,0 ★ no Google.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="mt-6 rounded-xl border-l-4 border-[#b8874d] bg-[#faf8f5] p-4 sm:p-5">
                  <p className="italic text-sm text-slate-800">
                    &ldquo;Profissional super competente e justa. Desde a pesquisa de viabilidade da marca até a sua concessão, se mostra super solícita. Preço justo e muito clara em cada etapa... Não tenho preocupação com minha marca hoje graças a ela!&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#b8874d] uppercase tracking-wider">
                    — Depoimentos reais de clientes no Google Meu Negócio (Nota Máxima 5,0 ★ unânime)
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
                    <WhatsAppIcon size={16} className="text-[#1e1305]" />
                    <span>Falar com a Dra. Mariana Madeira</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#b8874d] hover:text-[#b8874d]"
                  >
                    <InstagramIcon size={16} className="text-[#E1306C]" />
                    <span>Instagram {INSTAGRAM_HANDLE}</span>
                  </a>

                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#b8874d] hover:text-[#b8874d]"
                  >
                    <GoogleIcon size={16} />
                    <span>Avaliações Google (5.0 ★)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. DIFERENCIAIS COMPETITIVOS                                              */}
        {/* ========================================================================= */}
        <section id="diferenciais" className="py-16 sm:py-24 bg-[#faf8f5] border-t border-[#e8e2d8]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-gold justify-center mb-3">
                Por Que Escolher Mariana Madeira Marcas
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1015]">
                Diferenciais que garantem a segurança definitiva da sua empresa
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Uma assessoria que combina transparência, agilidade técnica e comprometimento real com cada cliente.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {diferenciais.map((dif, idx) => {
                const IconComp = dif.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#e8e2d8] bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-[#b8874d] hover:shadow-md"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500/10 text-[#b8874d] mb-5">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-[#0e1015]">
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
        {/* 9. METODOLOGIA EM 4 PASSOS (COMO FUNCIONA O REGISTRO NO INPI)            */}
        {/* ========================================================================= */}
        <section id="metodologia" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
              <div className="eyebrow-gold justify-center mb-3">
                Metodologia Estruturada &bull; INPI
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1015]">
                Como funciona o registro da sua marca passo a passo
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Um processo seguro, transparente e acompanhado de perto em cada etapa oficial:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="relative rounded-2xl border border-[#e8e2d8] bg-[#faf8f5] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#090a0d] text-[#e8caa0] font-bold text-lg mb-4 border border-amber-400/40">
                  1
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0e1015]">
                  Pesquisa de Viabilidade
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Realizamos uma varredura aprofundada na base do INPI para atestar se sua marca está livre
                  e possui chances reais de deferimento sem riscos.
                </p>
              </div>

              <div className="relative rounded-2xl border border-[#e8e2d8] bg-[#faf8f5] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#090a0d] text-[#e8caa0] font-bold text-lg mb-4 border border-amber-400/40">
                  2
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0e1015]">
                  Protocolo &amp; Depósito
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Definição correta das classes de produtos e serviços, pagamento das taxas oficiais e protocolo
                  imediato do pedido no INPI.
                </p>
              </div>

              <div className="relative rounded-2xl border border-[#e8e2d8] bg-[#faf8f5] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#090a0d] text-[#e8caa0] font-bold text-lg mb-4 border border-amber-400/40">
                  3
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0e1015]">
                  Acompanhamento RPI
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Vigilância semanal das publicações oficiais, cumprimento ágil de eventuais exigências
                  e resposta técnica a qualquer oposição de concorrentes.
                </p>
              </div>

              <div className="relative rounded-2xl border border-[#e8e2d8] bg-[#faf8f5] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#090a0d] text-[#e8caa0] font-bold text-lg mb-4 border border-amber-400/40">
                  4
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0e1015]">
                  Concessão &amp; Certificado (®)
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Emissão do Certificado Oficial de Registro de Marca, garantindo exclusividade de uso em todo o Brasil
                  pelo prazo de 10 anos renováveis.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                variant="gold"
                size="lg"
                href={getWhatsAppUrl(
                  "Olá, Dra. Mariana Madeira! Gostaria de fazer a pesquisa de viabilidade da minha marca para iniciarmos o processo no INPI."
                )}
                target="_blank"
              >
                <WhatsAppIcon size={17} className="text-[#1e1305]" />
                <span>Solicitar Minha Pesquisa de Viabilidade</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. AVALIAÇÕES REAIS DO GOOGLE (PROVA SOCIAL)                             */}
        {/* ========================================================================= */}
        <section
          id="avaliacoes"
          className="py-16 sm:py-24 bg-gradient-to-b from-[#090a0d] via-[#10131b] to-[#14171e] text-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Prova Social Verificada &bull; Google Meu Negócio
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
                <span className="text-sm text-[#d9aa69]">
                  (10 avaliações verificadas no Google)
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
                    <p className="text-xs font-bold text-[#e8caa0] mb-2 uppercase tracking-wider">
                      {dep.highlight}
                    </p>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      &ldquo;{dep.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-[#e8caa0] border border-amber-400/30">
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
                className="inline-flex items-center gap-2 rounded-lg border border-amber-400/40 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:border-[#e8caa0] hover:bg-white/10 transition-colors"
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
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1015]">
                Perguntas Frequentes sobre Registro de Marcas &amp; Advocacia
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Respostas diretas e esclarecedoras sobre como protegemos o patrimônio de quem empreende.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-[#e8e2d8] bg-[#faf8f5] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#0e1015] hover:text-[#b8874d] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#b8874d] transition-transform duration-200 ${
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
                          className="border-t border-[#e8e2d8] px-5 pb-5 pt-3"
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

            <div className="mt-12 rounded-2xl border border-[#e8e2d8] bg-[#faf8f5] p-6 text-center">
              <p className="font-cinzel text-base font-bold text-[#0e1015]">
                Ainda tem alguma dúvida sobre a proteção da sua marca ou negócio?
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                A Dra. Mariana Madeira está à disposição para analisar seu caso com atenção, ética e presteza.
              </p>
              <div className="mt-4">
                <GlowingButton
                  variant="gold"
                  size="md"
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana Madeira! Tenho uma dúvida sobre a proteção da minha marca e gostaria de orientação."
                  )}
                  target="_blank"
                >
                  <WhatsAppIcon size={15} className="text-[#1e1305]" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. CONTATO & SEDE EM ITAPECERICA - MG                                     */}
        {/* ========================================================================= */}
        <section id="contato" className="py-16 sm:py-24 bg-[#faf8f5] border-t border-[#e8e2d8]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Contact Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-gold mb-3">Atendimento &amp; Sede</div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e1015]">
                    Fale conosco e proteja seu maior patrimônio
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Atendimento presencial em nossa sede no Centro de Itapecerica - MG ou 100% digital
                    com atendimento ágil para empreendedores de todo o Brasil. Escolha o canal de sua preferência.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#b8874d]">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1015] uppercase tracking-wider">
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
                          className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#b8874d] hover:underline"
                        >
                          <span>Como chegar no Google Maps</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#b8874d]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1015] uppercase tracking-wider">
                          Telefone &amp; WhatsApp
                        </p>
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#b8874d] mt-0.5 block"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#b8874d]">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1015] uppercase tracking-wider">
                          E-mail de Contato
                        </p>
                        <a
                          href={`mailto:${EMAIL_CONTACT}`}
                          className="text-sm font-semibold text-slate-800 hover:text-[#b8874d] mt-0.5 block"
                        >
                          {EMAIL_CONTACT}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#b8874d]">
                        <InstagramIcon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1015] uppercase tracking-wider">
                          Instagram Oficial
                        </p>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#b8874d] mt-0.5 block"
                        >
                          {INSTAGRAM_HANDLE} (Mariana Madeira)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[#b8874d]">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0e1015] uppercase tracking-wider">
                          Horário de Funcionamento
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          Segunda a Sexta das 08:30 às 17:00
                        </p>
                        <p className="text-xs text-slate-500">
                          Atendimento presencial e digital com agendamento prévio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e8e2d8]">
                  <GlowingButton
                    variant="gold"
                    size="lg"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={18} className="text-[#1e1305]" />
                    <span>Falar no WhatsApp Agora</span>
                  </GlowingButton>
                </div>
              </div>

              {/* Map & Office Card Column */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[#e8e2d8] bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="relative size-9 shrink-0">
                        <Image
                          src={LOGO_SYMBOL_SRC}
                          alt="Mariana Madeira Marcas Emblema"
                          fill
                          unoptimized
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-cinzel text-sm font-bold text-[#0e1015]">
                          Mariana Madeira Registro de Marcas
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Av. Severo Augusto Ribeiro, 179 - Centro &bull; Itapecerica - MG
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-800 border border-amber-200">
                      <Star size={12} className="fill-amber-400 text-amber-500" />
                      <span>5,0 ★ (10)</span>
                    </div>
                  </div>

                  {/* Interactive Map Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <iframe
                      title="Localização de Mariana Madeira Registro de Marcas e Advocacia Empresarial em Itapecerica - MG"
                      src="https://maps.google.com/maps?q=Av.+Severo+Augusto+Ribeiro,+179+-+Centro,+Itapecerica+-+MG,+35550-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="size-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                    <span>Av. Severo Augusto Ribeiro, 179 - Centro, Itapecerica - MG</span>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#b8874d] hover:underline flex items-center gap-1"
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
        <footer className="border-t border-[#262c3a] bg-gradient-to-b from-[#090a0d] to-[#040507] text-white py-12 sm:py-16">
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
                      alt="Mariana Madeira Marcas"
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
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#e8caa0] hover:text-[#e8caa0]"
                    aria-label="Instagram de Mariana Madeira Advocacia"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                    aria-label="WhatsApp de Mariana Madeira Advocacia"
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
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#e8caa0] mb-4">
                  Áreas de Atuação
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Registro de Marcas no INPI
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Advocacia para Negócios Digitais
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Contratos Empresariais Estratégicos
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Combate à Pirataria &amp; Plágio
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Assessoria Jurídica para PMEs
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Vigilância Ativa de Marcas no INPI
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Office */}
              <div className="lg:col-span-4">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#e8caa0] mb-4">
                  Sede &amp; Contato
                </p>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#e8caa0] shrink-0 mt-0.5" />
                    <span>{ADDRESS_TEXT}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-[#e8caa0] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                    Atendimento de Segunda a Sexta das 08:30 às 17:00.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright & OAB Ethics Notice */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Mariana Madeira Registro de Marcas e Advocacia Empresarial.
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
            aria-label="Falar com a Dra. Mariana Madeira no WhatsApp"
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
                className="relative z-10 w-full max-w-lg rounded-2xl border-2 border-amber-300/60 bg-gradient-to-b from-[#090a0d] to-[#14171e] p-6 sm:p-8 text-white shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white cursor-pointer"
                  aria-label="Fechar janela"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="relative size-10 shrink-0">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Mariana Madeira Marcas Emblema"
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      Análise Jurídica Especializada
                    </h3>
                    <p className="text-xs text-[#e8caa0] font-semibold">
                      {modalArea}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Para analisar a proteção da sua marca ou negócio com sigilo, rapidez e rigor técnico, você será
                  redirecionado ao atendimento oficial da{" "}
                  <strong className="text-white">Dra. Mariana Madeira</strong>.
                </p>

                <div className="mt-5 space-y-2 rounded-xl border border-amber-400/20 bg-white/5 p-4 text-xs text-slate-300">
                  <p className="font-bold text-white uppercase tracking-wider text-[11px] text-[#e8caa0]">
                    O que ter em mãos (se aplicável):
                  </p>
                  <ul className="space-y-1 pl-1">
                    <li>&bull; Nome da marca / logotipo que você deseja registrar</li>
                    <li>&bull; Ramo de atuação e segmento de mercado do seu negócio</li>
                    <li>&bull; Cidade/Estado onde atua e se vende no ambiente físico ou digital</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl(
                      `Olá, Dra. Mariana Madeira! Gostaria de uma avaliação jurídica sobre: ${modalArea}.`
                    )}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} className="text-[#1e1305]" />
                    <span>Prosseguir para o WhatsApp</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="rounded-lg py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
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
