import {
  BookOpen,
  Bot,
  BrainCircuit,
  CalendarSync,
  FileText,
  Gauge,
  RefreshCcw,
  Sparkles
} from "lucide-react";

export const siteConfig = {
  name: "CognAi",
  title: "Estude com inteligencia. Evolua com IA.",
  description:
    "Planejamento adaptativo, tutor por IA, flashcards e analytics para transformar constancia em aprovacao.",
  url: "https://cognai.app"
};

export const brand = {
  primary: "#5B6CFF",
  secondary: "#9333EA",
  accent: "#22D3EE",
  surface: "#0C172A",
  background: "#07111F"
};

export const navItems = [
  { label: "Recursos", href: "#recursos" },
  { label: "Precos", href: "#precos" },
  { label: "FAQ", href: "#faq" },
  { label: "Login", href: "/login" }
];

export const steps = [
  {
    title: "Informe sua rotina",
    description:
      "Conte a sua disponibilidade, objetivos, provas e materias. A CognAi entende sua energia real."
  },
  {
    title: "IA cria seu plano",
    description:
      "O motor de planejamento monta um cronograma semanal com revisoes, simulados, pomodoros e pausas."
  },
  {
    title: "Acompanhe e evolua",
    description:
      "Se voce atrasar, a IA reorganiza tudo. Se avancar, ela sobe o nivel com novos desafios."
  }
];

export const features = [
  {
    icon: BrainCircuit,
    title: "Cronograma inteligente",
    description: "Planos adaptativos por meta, rotina, dificuldade e prova."
  },
  {
    icon: RefreshCcw,
    title: "Reorganizacao automatica",
    description: "Bastou faltar um bloco? A IA redistribui sem quebrar a semana."
  },
  {
    icon: Gauge,
    title: "Revisao espacada",
    description: "Flashcards, repeticao inteligente e memoria de longo prazo."
  },
  {
    icon: FileText,
    title: "Upload de PDF",
    description: "Resumo, topicos, questoes, flashcards e inclusao no plano."
  },
  {
    icon: CalendarSync,
    title: "Exportacao",
    description: "Google Calendar, PDF, Docs e Sheets para estudar em qualquer fluxo."
  },
  {
    icon: Bot,
    title: "Tutor IA",
    description: "Explica, revisa, corrige e gera questoes sob demanda."
  },
  {
    icon: BookOpen,
    title: "Dashboard de progresso",
    description: "Horas, streak, XP, exames, prioridades e insights praticos."
  },
  {
    icon: Sparkles,
    title: "Gamificacao premium",
    description: "Niveis, medalhas, ranking e disciplina visivel no dia a dia."
  }
];

export const testimonials = [
  {
    name: "Marina A.",
    role: "Vestibulanda",
    quote:
      "Eu parei de montar cronograma em planilha e começei a estudar de verdade. A CognAi me devolveu consistencia."
  },
  {
    name: "Lucas P.",
    role: "Concurseiro",
    quote:
      "Quando eu atrasava um dia inteiro, antes eu travava. Agora o plano se ajusta e sigo em frente."
  },
  {
    name: "Ana Beatriz S.",
    role: "Universitaria",
    quote:
      "O tutor e os resumos por PDF me economizam horas toda semana sem perder profundidade."
  }
];

export const faqItems = [
  {
    question: "A CognAi serve so para vestibular?",
    answer:
      "Nao. A plataforma atende ensino medio, ENEM, vestibulares, faculdade, concursos e trilhas personalizadas."
  },
  {
    question: "O cronograma muda quando eu atraso?",
    answer:
      "Sim. A CognAi recalcula a semana mantendo prioridades, revisoes e janelas reais da sua rotina."
  },
  {
    question: "Posso estudar por PDF e apostila?",
    answer:
      "Sim. Upload de PDF, DOCX e TXT com resumo, topicos, questoes e flashcards."
  },
  {
    question: "Tem plano para escolas?",
    answer:
      "Sim. O plano Teams entrega visao institucional, acompanhamento e multiplos alunos."
  }
];

export const pricing = [
  {
    name: "Gratis",
    price: "R$ 0",
    description: "Para testar consistencia com IA.",
    features: ["1 cronograma por semana", "Tutor limitado", "1 upload por mes"]
  },
  {
    name: "Pro",
    price: "R$ 39",
    description: "Para estudar com ritmo e profundidade.",
    features: ["Cronogramas ilimitados", "Tutor IA ilimitado", "Uploads e exportacoes"]
  },
  {
    name: "Teams",
    price: "Sob consulta",
    description: "Para escolas, cursos e grupos.",
    features: ["Multiplos alunos", "Painel institucional", "Relatorios e suporte"]
  }
];

