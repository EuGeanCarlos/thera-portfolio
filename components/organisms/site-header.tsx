"use client";

import { Logo } from "components/atoms/logo";
import { MainNav } from "../molecules/main-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <MainNav />
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            asChild
          >
            <a href="#projetos">Ver projetos</a>
          </Button>

          {/* Futuro: quando tiver PDF pronto, troca o href */}
          {/* <Button variant="outline" size="sm" asChild>
            <a href="/portfolio.pdf" target="_blank" rel="noopener noreferrer">
              Baixar PDF
            </a>
          </Button> */}

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
