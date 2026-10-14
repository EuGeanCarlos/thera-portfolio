// app/layout.tsx
import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import { SiteHeader } from "../components/organisms/site-header"
import { SiteFooter } from "../components/organisms/site-footer"

export const metadata: Metadata = {
  // troque a URL pelo domínio real quando tiver
  metadataBase: new URL("https://eugeancarlos.github.io/thera-portfolio/"),
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
    url: "https://eugeancarlos.github.io/thera-portfolio/",
    siteName: "Thera Labs",
    images: [],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.ico`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.ico`,
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
