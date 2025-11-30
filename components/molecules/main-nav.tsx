"use client";

import { NavLink } from "components/atoms/nav-link";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export function MainNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
}
