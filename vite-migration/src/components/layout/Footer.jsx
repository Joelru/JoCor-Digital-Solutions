export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400 text-sm py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-lg">
            <a className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white">JoCor</span>
              <span className="hidden sm:inline text-sm">Digital Solutions</span>
            </a>
          </div>

          <nav className="flex gap-6">
            <a href="#services" className="hover:text-white transition">
              Servicios
            </a>
            <a href="#process" className="hover:text-white transition">
              Proceso
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contacto
            </a>
          </nav>

          <p className="text-gray-500">
            © 2026 JoCor Digital Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
