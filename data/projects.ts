export type Project = {
  slug: string;
  name: string;
  description: string;
  area: string;
  status: "em-andamento" | "concluido" | "prototipo";
};

// data/projects.ts

export const projects = [
  {
    id: "sonar",
    title: "Sonar · Gerenciador Global Thera",
    description:
      "Plataforma central do Thera Labs que conecta projetos, squads, demandas internas e governança. Permite visualizar prioridades, acompanhar progresso e gerenciar ciclos de desenvolvimento em toda a estrutura da Software House.",
    image: "/projects/sonar.png",
    href: "#", // quando tiver link real, substitui aqui
  },

  {
    id: "fab",
    title: "FAB · Ferramenta Acadêmica Básica (ECE)",
    description:
      "Sistema desenvolvido para apoio às atividades da Escola de Ciências Exatas. Organiza fluxos, dashboards e módulos essenciais para operações acadêmicas e administrativas.",
    image: "/projects/fab-ece.png",
    href: "#",
  },

  {
    id: "cesjo",
    title: "CESJO · Gestão Educacional",
    description:
      "Sistema de gerenciamento de informações educacionais para apoio a centros e coordenações. Otimiza cadastro, relatórios, documentos e acompanhamento de alunos.",
    image: "/projects/cesjo.png",
    href: "#",
  },

  {
    id: "neolab",
    title: "NeoLab · Plataforma de Pesquisa",
    description:
      "Ambiente digital criado para apoiar projetos de iniciação científica e laboratórios, com módulos de coleta de dados, submissões, organização de experimentos e relatórios.",
    image: "/projects/neolab.png",
    href: "#",
  },

  {
    id: "arbitrium",
    title: "Arbitrium · Engenharia e Modelagem",
    description:
      "Sistema desenvolvido para auxiliar equipes de engenharia no registro, análise e tomada de decisão. Inclui dashboards avançados, modelagem e automação de cálculos.",
    image: "/projects/arbitrium.png",
    href: "#",
  },

  {
    id: "revis",
    title: "Revis · Plataforma de Revisão e Auditoria",
    description:
      "Sistema focado em revisão documental e auditoria inteligente, permitindo organizar fluxos de análise, validação, correções e relatórios. Projeto em negociação, porém plenamente funcional.",
    image: "/projects/revis.png",
    href: "#",
  },

  {
    id: "coderats",
    title: "CodeRats · Plataforma Externa",
    description:
      "Projeto parceiro externo que utiliza tecnologia moderna para treinamento e desafios de programação. Modelo educacional gamificado com ranking e trilhas.",
    image: "/projects/coderats.png",
    href: "https://coderats.io", // link externo real
  },
]
;
