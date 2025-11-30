import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "../components/organisms/site-header";

export const metadata: Metadata = {
  title: "Thera Lab · UEMA",
  description: "Portfólio do Laboratório de Engenharia de Software Thera (UEMA).",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
