import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[hsl(var(--background))]"></div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-5">Soluciones digitales para restaurantes</Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[hsl(var(--foreground))] text-balance leading-tight mb-6">
            Digitalizamos negocios para <span className="text-[hsl(var(--accent))]">vender más</span> y
            operar mejor
          </h1>

          <p className="text-[hsl(var(--muted-foreground))] max-w-150 mx-auto mb-8">
            Menús digitales, pedidos online y plataformas claras para reducir fricción y aumentar
            ventas.
          </p>

          <div className="flex gap-4 justify-center">
            <Button href="#contact">
              Solicitar asesoría{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>

            <Button href="#services" variant="secondary">
              Ver soluciones
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[hsl(var(--muted-foreground)/0.3)] rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[hsl(var(--muted-foreground)/0.5)] rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
