export type Project = {
  slug: string;
  name: string;
  description: string;
  area: string;
  status: "em-andamento" | "concluido" | "prototipo";
};

export const projects: Project[] = [
  {
    slug: "sistema-clinica-escola",
    name: "Sistema de Clínica Escola",
    description:
      "Plataforma para gestão de atendimentos em clínica escola, com cadastro de pacientes, agendamento e registros de sessões.",
    area: "Saúde / Educação",
    status: "em-andamento",
  },
  {
    slug: "painel-indicadores-uema",
    name: "Painel de Indicadores UEMA",
    description:
      "Dashboard para acompanhamento de indicadores institucionais, permitindo visualização de métricas em tempo real.",
    area: "Gestão acadêmica",
    status: "concluido",
  },
  {
    slug: "plataforma-extensao",
    name: "Plataforma de Projetos de Extensão",
    description:
      "Ambiente para submissão, acompanhamento e divulgação de projetos de extensão vinculados à universidade.",
    area: "Extensão universitária",
    status: "em-andamento",
  },
  {
    slug: "prototipo-app-terapia",
    name: "Protótipo de App para Terapia",
    description:
      "Protótipo de aplicativo focado em organização de registros de sessões terapêuticas e acompanhamento de evolução.",
    area: "Psicologia / Saúde",
    status: "prototipo",
  },
];
