// app/layout.tsx
import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import { SiteHeader } from "../components/organisms/site-header"
import { SiteFooter } from "../components/organisms/site-footer"

export const metadata: Metadata = {
  // troque a URL pelo domínio real quando tiver
  metadataBase: new URL("https://thera-labs.example.com"),
  title: {
    default: "Thera Labs · Software House da UEMA",
    template: "%s · Thera Labs",
  },
  description:
    "Software House da UEMA especializada em soluções digitais, automações, sistemas web e plataformas acadêmicas. Desenvolvimento moderno com Next.js, Node, PostgreSQL e foco em UX.",
  openGraph: {
    title: "Thera Labs · Software House da UEMA",
    description:
      "Soluções digitais, automações e plataformas desenvolvidas pelo Thera Labs em parceria com a Universidade Estadual do Maranhão.",
    url: "https://thera-labs.example.com",
    siteName: "Thera Labs",
    images: [
      {
        url: "/og/thera-og.png",
        width: 1200,
        height: 630,
        alt: "Interface do Thera Labs e projetos de software",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">
        <div className="page-bg">
          <SiteHeader />
          <main className="main-shell">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
