# Thera Lab — portfólio institucional

Protótipo institucional Next.js do laboratório Thera/UEMA, com seções de projetos, equipe, perguntas frequentes e contato. O formulário de contato é apenas visual e não envia mensagens.

## Tecnologias

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Radix UI

## Funcionalidades e utilização

Navegue pelas seções e cartões. O envio de contato ainda exige implementação. Imagens opcionais ausentes usam a apresentação alternativa já existente; para disponibilizá-las, adicione os arquivos originais em public/ e execute o build.

## Como executar

```bash
git clone https://github.com/EuGeanCarlos/thera-portfolio.git
cd thera-portfolio
npm ci
npm run dev
```

Use Node.js 22.12 ou superior e o lockfile versionado. Para compilar, execute npm run build. Limitações descritas acima podem impedir o build.

## Demonstração e publicação

[Acessar demonstração verificada](https://eugeancarlos.github.io/thera-portfolio/)

## Estrutura versionada

```text
.gitignore
README.md
app/favicon.ico
app/globals.css
app/layout.tsx
app/page.tsx
components.json
components/atoms/.gitkeep
components/atoms/logo.tsx
components/atoms/nav-link.tsx
components/atoms/reveal-on-scroll.tsx
components/molecules/.gitkeep
components/molecules/main-nav.tsx
components/molecules/project-card.tsx
components/organisms/.gitkeep
components/organisms/about-section.tsx
components/organisms/header.tsx
components/organisms/hero-section.tsx
components/organisms/mobile-nav.tsx
components/organisms/site-footer.tsx
components/organisms/site-header.tsx
components/ui/.gitkeep
…
```

## Status

Protótipo / projeto de estudo em desenvolvimento. A descrição acima distingue o que está implementado das dependências ou etapas pendentes.

## Autor e créditos

**Gean Carlos** — estudante de Engenharia de Computação, UEMA.

[GitHub](https://github.com/EuGeanCarlos)

Licenças, autoria compartilhada e atribuições existentes no código e nos materiais originais permanecem aplicáveis.

---

## Documentação original e contexto

O material original a seguir preserva contexto, créditos e planejamento. Para execução e limitações atuais, considere as seções de auditoria acima.

# Thera Lab · Portfólio de Engenharia de Software (UEMA)

Portfólio do **Laboratório de Engenharia de Software Thera (UEMA)**, desenvolvido em **Next.js 16** com **App Router**, **Tailwind CSS** e **componentes Shadcn UI**, organizado segundo **Atomic Design**.

O objetivo deste projeto é:

- Apresentar o laboratório Thera (quem somos, o que fazemos, visão de futuro).
- Exibir projetos desenvolvidos ou em desenvolvimento.
- Facilitar contato com possíveis parceiros e demandas internas da UEMA.
- Servir como base para evoluções futuras (mais páginas, blog, documentação técnica, etc.).

---

## 🧠 Visão geral da arquitetura

Tecnologias principais:

- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI** (componentes de interface)
- **Lucide Icons** (ícones)
- **Atomic Design** para organização de componentes
- **Design tokens** via classes utilitárias do Tailwind
- Organização em:
  - `app/` → páginas e layout
  - `components/` → UI compartilhada (atoms, molecules, organisms)
  - `data/` → dados estáticos (ex.: lista de projetos)
  - `lib/` → utilitários
  - `hooks/` → hooks customizados (quando forem adicionados)
  - `public/` → assets estáticos (SVGs, imagens, etc.)

---

## 📁 Estrutura de pastas

Estrutura geral do projeto (resumida):

```txt
thera-portfolio/
  app/
    globals.css        # Estilos globais (Tailwind + ajustes gerais)
    layout.tsx         # Layout raiz: HTML, <body>, SiteHeader e <main>
    page.tsx           # Página inicial (Home): Hero + Sobre + Projetos + Contato

  components/
    atoms/             # Componentes atômicos (menores, básicos)
      logo.tsx
      nav-link.tsx

    molecules/         # Combinação de atoms (blocos reutilizáveis)
      main-nav.tsx     # Navegação principal (desktop)
      project-card.tsx # Card para exibir projetos

    organisms/         # Seções completas da página (blocos maiores)
      site-header.tsx      # Cabeçalho fixo com logo, navegação e CTA
      mobile-nav.tsx       # Menu mobile simples (abre/fecha)
      hero-section.tsx     # Hero da página inicial
      about-section.tsx    # Seção "Sobre a Thera"
      projects-section.tsx # Seção "Projetos"
      contact-section.tsx  # Seção "Contato"

    ui/                # Componentes base da Shadcn UI
      button.tsx
      badge.tsx
      card.tsx
      input.tsx
      label.tsx
      navigation-menu.tsx
      textarea.tsx
      ... (outros gerados pelo shadcn)

  data/
    projects.ts        # Lista tipada de projetos (name, description, area, status etc.)

  hooks/
    (vazio por enquanto – reservado para hooks customizados)

  lib/
    utils.ts           # Função utilitária `cn` para combinar classes (clsx + tailwind-merge)

  public/
    file.svg
    globe.svg
    next.svg
    vercel.svg
    window.svg         # Ícones padrão, podem ser trocados por assets da Thera

  components.json      # Configuração do shadcn (aliases, diretório dos componentes)
  tsconfig.json        # Configuração TypeScript (paths, baseUrl etc.)
  next.config.ts       # Configuração Next.js
  package.json         # Dependências, scripts NPM
  postcss.config.mjs   # Configuração PostCSS
  eslint.config.mjs    # Configuração ESLint
  tailwind.config.*    # (se existir) Configuração Tailwind

```

## Build estático

`npm run build` gera `out/`. No Pages, `NEXT_PUBLIC_BASE_PATH=/thera-portfolio` preserva os caminhos. O inventário de arquivos públicos é regenerado a cada build; imagens ausentes não geram requisições inválidas.

## Validação desta auditoria — 14/10/2026

PUBLICADO: [workflow confirmado](https://github.com/EuGeanCarlos/thera-portfolio/actions/runs/38610373975), HTTP 200, conteúdo correspondente ao projeto e 13 recursos locais verificados. Exportação estática local e workflow Linux aprovados. Recursos opcionais ausentes usam as alternativas existentes; formulário de contato não envia mensagens.
