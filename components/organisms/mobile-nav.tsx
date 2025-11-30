"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Abrir menu</span>
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md border bg-background shadow-lg">
          <nav className="flex flex-col gap-1 p-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-1 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
