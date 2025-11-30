"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = href.startsWith("#")
    ? false // âncora da mesma página, ignora "ativo" por enquanto
    : pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-sm transition-colors hover:text-foreground/80",
        "text-muted-foreground",
        isActive && "text-foreground font-medium"
      )}
    >
      {label}
    </Link>
  );
}
