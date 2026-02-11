import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--background))] backdrop-blur-md border-b border-border border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-lg">
            <a className="flex items-center gap-2" href="/">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
                JoCor
              </span>
              <span className="hidden sm:inline text-sm text-[hsl(var(--muted-foreground))]">
                Digital Solutions
              </span>
            </a>
          </div>

          <nav className="hidden md:flex">
            <a
              href="#services"
              className="mx-3 text-base text-[hsl(var(--foreground))] font-light hover:text-[hsl(var(--accent))] transition-colors duration-200"
            >
              Servicios
            </a>
            <a
              href="#process"
              className="mx-3 text-base text-[hsl(var(--foreground))] font-light hover:text-[hsl(var(--accent))] transition-colors duration-200"
            >
              Cómo trabajamos
            </a>
            <a
              href="#results"
              className="mx-3 text-base text-[hsl(var(--foreground))] font-light hover:text-[hsl(var(--accent))] transition-colors duration-200"
            >
              Resultados
            </a>
            <a
              href="#contact"
              className="mx-3 text-base text-[hsl(var(--foreground))] font-light hover:text-[hsl(var(--accent))] transition-colors duration-200"
            >
              Contacto
            </a>
          </nav>

          <div className=" hidden md:block">
            <Button
              href="#contact"
              className="whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10"
            >
              Solicitar asesoría
            </Button>
          </div>

          <button type="button" className="md:hidden p-2 text-[hsl(var(--foreground))]" aria-label="Abrir menú">
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
              className="lucide lucide-menu h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
