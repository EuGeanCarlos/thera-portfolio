"use client";

import Link from "next/link";

interface LogoProps {
  showSubtitle?: boolean;
}

export function Logo({ showSubtitle = true }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* Se tiver logo em SVG depois, troca esse círculo */}
      <div className="h-8 w-8 rounded-full border border-primary flex items-center justify-center text-xs font-bold">
        T
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-semibold tracking-tight">Thera Lab</span>
        {showSubtitle && (
          <span className="text-xs text-muted-foreground">
            Engenharia de Software · UEMA
          </span>
        )}
      </div>
    </Link>
  );
}
