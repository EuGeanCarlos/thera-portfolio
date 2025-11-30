'use client'

import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "components/ui/navigation-menu"

export function Header() {
  return (
    <header className="w-full border-b border-zinc-800 py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold">
        Thera Lab
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/projects" className="px-4 py-2 hover:text-zinc-300">
              Projetos
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="px-4 py-2 hover:text-zinc-300">
              Sobre
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
