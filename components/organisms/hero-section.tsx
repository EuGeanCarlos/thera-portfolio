export function HeroSection() {
  return (
    <section className="w-full py-20">
      <div className="main-shell grid gap-10 md:grid-cols-2 items-center">

        <div className="space-y-6">
          <span className="text-thera-300 text-sm tracking-wide">
            Laboratório de Engenharia de Software · UEMA
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-thera-50 leading-tight">
            Software sob medida
            <br />
            <span className="text-thera-300">
              para negócios que precisam evoluir.
            </span>
          </h1>

          <p className="text-base text-thera-300 max-w-xl">
            A Thera transforma problemas computáveis em soluções digitais funcionais,
            robustas e acessíveis. Entregamos rápido e evoluímos junto com o cliente,
            sempre com foco na lógica do seu negócio.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-thera-500 text-slate-950 font-medium hover:bg-thera-400 transition">
              Ver projetos
            </button>

            <button className="px-6 py-3 rounded-lg border border-thera-500/60 text-thera-50 hover:bg-thera-900/60 transition">
              Conversar sobre um projeto
            </button>
          </div>
        </div>

        {/* imagem ou ilustração opcional */}
        <div className="h-64 bg-gradient-to-br from-thera-500/10 to-thera-300/5 rounded-xl shadow-soft" />
      </div>
    </section>
  )
}
