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
