import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="border-b bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto flex flex-col gap-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium text-primary/80">
            Laboratório de Engenharia de Software · UEMA
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Software sob medida para negócios
            <span className="block text-primary">que precisam evoluir.</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground">
            A Thera transforma problemas computáveis em soluções digitais
            funcionais, robustas e acessíveis. Entregamos rápido e evoluímos
            junto com o cliente, sempre com foco na lógica do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <a href="#projetos" className="flex items-center gap-2">
                Ver projetos
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="#contato">Conversar sobre um projeto</a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground md:grid-cols-3">
          <div className="rounded-lg border bg-background/80 p-4">
            <p className="font-semibold text-foreground">Entrega rápida</p>
            <p>Primeira versão funcional em pouco tempo, para validar cedo.</p>
          </div>
          <div className="rounded-lg border bg-background/80 p-4">
            <p className="font-semibold text-foreground">Refinamento contínuo</p>
            <p>Evoluímos o sistema de forma iterativa, junto com o cliente.</p>
          </div>
          <div className="rounded-lg border bg-background/80 p-4">
            <p className="font-semibold text-foreground">Preço acessível</p>
            <p>
              Estrutura universitária, valores competitivos e foco em resultado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
