
import * as projectsData from "../data/projects"
import { RevealOnScroll } from "../components/atoms/reveal-on-scroll"

const projects: any[] =
  (projectsData as any).projects ||
  (projectsData as any).default ||
  []

type TeamMember = {
  name: string
  role: string
  area: string
  bio: string
  photo?: string
}

const team: TeamMember[] = [
  {
    name: "Coordenação Thera Lab",
    role: "Coordenação",
    area: "Gestão de projetos e relacionamento institucional",
    bio: "Garante alinhamento com a UEMA, definição de prioridades e acompanhamento das entregas com foco em impacto real.",
    photo: "/team/coordenacao.png",
  },
  {
    name: "Squad de Desenvolvimento",
    role: "Dev Backend & Frontend",
    area: "Sistemas web, APIs e integrações",
    bio: "Transforma requisitos em código limpo, escalável e testado, cuidando desde a arquitetura até o deploy.",
    photo: "/team/dev-squad.png",
  },
  {
    name: "Squad de Produto & UX",
    role: "Produto & Experiência",
    area: "Descoberta, fluxos e interface",
    bio: "Traduz necessidades de usuários em jornadas claras, protótipos navegáveis e documentação funcional.",
    photo: "/team/produto-ux.png",
  },
]

const faqs = [
  {
    question: "Quem pode solicitar um projeto ao Thera Labs?",
    answer:
      "Prioritariamente, professores, coordenadores e setores da UEMA. Em alguns casos, avaliamos parcerias com órgãos públicos e iniciativas externas, desde que alinhadas à missão institucional.",
  },
  {
    question: "O Thera desenvolve somente projetos acadêmicos?",
    answer:
      "Não. Atuamos tanto em demandas acadêmicas (pesquisa, extensão, ensino) quanto em soluções aplicadas para gestão, automação e apoio a serviços internos e parceiros.",
  },
  {
    question: "Como é definida a prioridade dos projetos?",
    answer:
      "As propostas são avaliadas quanto a impacto, viabilidade técnica, tempo disponível dos squads e aderência aos objetivos do laboratório. Projetos mais estratégicos para a UEMA tendem a ter prioridade.",
  },
  {
    question: "Qual é o prazo típico para desenvolvimento?",
    answer:
      "Depende do escopo. Um MVP simples pode levar de 4 a 8 semanas, enquanto sistemas mais complexos exigem ciclos maiores, com planejamento, prototipação e entregas parciais.",
  },
  {
    question: "É possível dar manutenção em um sistema já existente?",
    answer:
      "Sim, desde que seja feita uma análise inicial de código, tecnologias utilizadas e riscos. Em alguns casos, é mais eficiente reestruturar o sistema do que apenas corrigir falhas pontuais.",
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}

/* ---------------- HERO ---------------- */

function HeroSection() {
  return (
    <section>
      <RevealOnScroll>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--thera-light)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--thera-purple)]" />
              Thera Labs · Software House UEMA
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Software sob medida
              <br />
              <span className="text-[var(--thera-light)]">
                para negócios que precisam evoluir.
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-200 max-w-xl leading-relaxed">
              A Thera atua como laboratório e software house, desenvolvendo soluções
              digitais para projetos acadêmicos, órgãos públicos e iniciativas
              empreendedoras — sempre com foco em resultados e sustentabilidade técnica.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="px-6 py-3 rounded-full bg-[var(--thera-purple)] text-white text-sm font-medium hover:bg-purple-400 transition shadow-lg shadow-purple-500/30"
              >
                Ver projetos em destaque
              </a>

              <a
                href="#contato"
                className="px-6 py-3 rounded-full border border-[var(--thera-purple)]/60 text-slate-50 text-sm hover:bg-white/5 transition"
              >
                Conversar sobre um projeto
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-slate-300">
              <span>Soluções web</span>
              <span>Integrações e APIs</span>
              <span>Painéis e dashboards</span>
            </div>
          </div>

          <div className="relative h-72 rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--thera-purple)]/25 via-transparent to-[var(--thera-blue)]/35 shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden">
            <div className="absolute inset-6 rounded-2xl bg-black/35 backdrop-blur">
              <div className="h-6 w-32 mt-4 ml-4 rounded-full bg-white/10" />
              <div className="mt-6 space-y-2 px-4">
                <div className="h-3 w-5/6 rounded-full bg-white/8" />
                <div className="h-3 w-3/4 rounded-full bg-white/6" />
                <div className="h-3 w-2/3 rounded-full bg-white/4" />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

/* ---------------- PROJETOS ---------------- */

function ProjectsSection() {
  return (
    <section id="projetos">
      <RevealOnScroll>
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-white">
              Projetos em destaque
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Uma amostra dos sistemas, plataformas e ferramentas construídos pelo
              Thera Labs. Cada projeto representa um ciclo completo: ideia, protótipo,
              desenvolvimento, testes e entrega.
            </p>
          </div>

          <a
            href="#contato"
            className="hidden md:inline-flex text-xs font-medium text-[var(--thera-blue)] hover:text-blue-300"
          >
            Tem um projeto em mente?
          </a>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delayMs={80}>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project: any, idx: number) => {
            const title =
              project.title || project.name || `Projeto ${idx + 1}`
            const description =
              project.description ||
              project.resumo ||
              project.summary ||
              "Projeto desenvolvido pelo Thera Labs."
            const href =
              project.href ||
              project.url ||
              project.link ||
              "#"

            const image =
              project.image ||
              project.thumbnail ||
              project.cover ||
              ""

            return (
              <article
                key={project.id || idx}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/5 via-black/70 to-black shadow-[0_22px_60px_rgba(0,0,0,0.7)] hover:border-[var(--thera-purple)]/80 hover:shadow-[0_26px_80px_rgba(0,0,0,0.9)] hover:-translate-y-1 transition-all duration-300"
              >
                {image ? (
                  <div className="relative h-52 w-full overflow-hidden bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover group-hover:scale-[1.04] group-hover:brightness-[1.05] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>
                ) : null}

                <div className="flex-1 p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                      {title}
                    </h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--thera-purple)]/15 px-2 py-1 text-[10px] font-medium text-[var(--thera-light)]">
                      Em produção
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {description}
                  </p>

                  <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Thera Labs · Software House</span>
                    <span className="inline-flex items-center gap-1 text-[var(--thera-purple)]">
                      ativo
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--thera-purple)]" />
                    </span>
                  </div>

                  <a
                    href={href}
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white text-xs font-medium text-slate-900 py-2.5 px-4 hover:bg-[var(--thera-light)] transition"
                  >
                    Abrir projeto
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </RevealOnScroll>
    </section>
  )
}

/* ---------------- EQUIPE ---------------- */

function TeamSection() {
  return (
    <section id="equipe">
      <RevealOnScroll>
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-white">
              Equipe Thera Labs
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              A estrutura do laboratório foi pensada em squads, equilibrando
              responsabilidade técnica, gestão de produto e experiência de usuário.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delayMs={80}>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm space-y-4"
            >
              <div className="absolute inset-x-0 -top-16 h-24 bg-gradient-to-b from-[var(--thera-purple)]/40 via-transparent to-transparent opacity-70 pointer-events-none" />

              <div className="relative flex items-center gap-4">
                {member.photo ? (
                  <div className="h-14 w-14 rounded-full border border-white/20 overflow-hidden bg-black/60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-14 w-14 rounded-full border border-white/20 bg-black/50 flex items-center justify-center text-xs text-slate-300">
                    TL
                  </div>
                )}

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--thera-blue)]">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-300">{member.area}</p>
                </div>
              </div>

              <p className="relative text-sm text-slate-300 leading-relaxed">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}

/* ---------------- FAQ (SANFONA) ---------------- */

function FaqSection() {
  return (
    <section id="faq">
      <RevealOnScroll>
        <div className="mb-6 space-y-2">
          <h2 className="text-3xl font-semibold text-white">
            Perguntas frequentes
          </h2>
          <p className="text-slate-300 text-sm max-w-xl">
            Algumas dúvidas comuns de professores, coordenações e parceiros
            que procuram o Thera Labs para desenvolver soluções digitais.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delayMs={80}>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-white/12 bg-black/40 p-4 md:p-5"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="text-sm font-medium text-slate-100">
                  {item.question}
                </span>
                <span className="shrink-0 text-[var(--thera-purple)] group-open:rotate-90 transition-transform">
                  ▸
                </span>
              </summary>

              <div className="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}

/* ---------------- CONTATO ---------------- */

function ContactSection() {
  return (
    <section id="contato">
      <RevealOnScroll>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              Fale com o Thera Labs
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Se você coordena um projeto, disciplina, órgão ou iniciativa e precisa
              de apoio em desenvolvimento de software, descreva sua demanda. Avaliamos
              viabilidade, escopo e possibilidades de parceria com a UEMA.
            </p>

            <div className="space-y-2 text-sm text-slate-300">
              <p>
                <span className="font-medium text-[var(--thera-purple)]">
                  E-mail institucional:
                </span>{" "}
                therahouse@uema.br (exemplo)
              </p>
              <p>
                <span className="font-medium text-[var(--thera-purple)]">
                  Local:
                </span>{" "}
                Universidade Estadual do Maranhão · UEMA
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </RevealOnScroll>
    </section>
  )
}

function ContactForm() {
  return (
    <RevealOnScroll delayMs={80}>
      <form className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-200" htmlFor="nome">
            Nome
          </label>
          <input
            id="nome"
            className="w-full rounded-md border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--thera-purple)]/80"
            placeholder="Seu nome completo"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-200" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--thera-purple)]/80"
            placeholder="seuemail@dominio.com"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-200" htmlFor="mensagem">
            Descreva brevemente a demanda
          </label>
          <textarea
            id="mensagem"
            rows={4}
            className="w-full rounded-md border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--thera-purple)]/80"
            placeholder="Sistema, painel, integração, aplicativo..."
          />
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-[var(--thera-purple)] text-xs font-semibold text-white py-2.5 hover:bg-purple-400 transition shadow-lg shadow-purple-500/40"
        >
          Enviar contato
        </button>
      </form>
    </RevealOnScroll>
  )
}
