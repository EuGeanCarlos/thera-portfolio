// components/organisms/site-header.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { href: "#projetos", label: "Projetos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 border-white/15 backdrop-blur-md"
          : "bg-black/40 border-white/10"
      }`}
    >
      <div className="main-shell flex h-16 items-center justify-between gap-4">
        {/* Logo + nome */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* A logo vem de /public/logo.png (ou ajusta o src abaixo) */}
          <div className="relative h-8 w-8 rounded-md overflow-hidden bg-black/60 border border-white/15">
            <Image
              src="/logo.png"
              alt="Thera Labs"
              fill
              sizes="32px"
              className="object-contain p-1.5"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[var(--thera-light)]">
              Thera Labs
            </span>
            <span className="text-[11px] text-slate-300">
              Software House · UEMA
            </span>
          </div>
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-200">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-center gap-1 text-slate-200/80 hover:text-white transition"
            >
              {item.label}
              <span className="h-[2px] w-0 bg-[var(--thera-purple)] absolute -bottom-1 left-0 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA + menu mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden md:inline-flex items-center rounded-full border border-[var(--thera-purple)]/70 px-3 py-1.5 text-[11px] font-medium text-slate-50 hover:bg-[var(--thera-purple)]/80 hover:text-white transition"
          >
            Enviar proposta
          </a>

          {/* Botão mobile */}
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 text-slate-100 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Abrir menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-[2px] w-4 rounded bg-slate-100" />
              <span className="block h-[2px] w-4 rounded bg-slate-100" />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
          <nav className="main-shell flex flex-col py-3 text-sm text-slate-100">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-[var(--thera-purple)]/70 px-4 py-2 text-xs font-medium text-slate-50 hover:bg-[var(--thera-purple)]/80 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Enviar proposta
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
