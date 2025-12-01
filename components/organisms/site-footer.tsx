export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-16 pt-6 pb-8 text-xs text-slate-400">
      <div className="main-shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-slate-200">
            Thera Lab · UEMA
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            Laboratório de Engenharia de Software vinculado à Universidade Estadual do Maranhão.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <span>© {new Date().getFullYear()} Thera Lab.</span>
          <span className="hidden md:inline-block">Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
