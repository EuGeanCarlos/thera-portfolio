export function AboutSection() {
  return (
    <section id="sobre" className="border-b bg-background">
      <div className="container mx-auto py-16 md:py-24 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Sobre a Thera
        </h2>

        <div className="space-y-4 text-muted-foreground max-w-3xl">
          <p>
            A Thera nasceu dentro da UEMA como um laboratório de Engenharia de
            Software voltado para desenvolvimento real. O que começou com
            pequenos projetos para suprir a falta de prática virou uma equipe
            organizada, capaz de entregar sistemas completos.
          </p>
          <p>
            Nosso foco é entender a lógica do negócio do cliente, transformar
            problemas computáveis em software funcional e ir refinando a
            aplicação até que ela fique robusta, segura e pronta para crescer.
          </p>
          <p>
            Nos próximos anos, a Thera quer se consolidar como empresa
            independente, deixando de atuar apenas sob demanda para construir
            também produtos digitais próprios.
          </p>
        </div>
      </div>
    </section>
  );
}
