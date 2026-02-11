export default function Problem() {
  return (
    <section className="py-20 md:py-32 bg-[hsl(var(--muted)/0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto */}
          <div>
            <span className="text-sm font-medium text-emerald-500 uppercase tracking-wider">
              El problema
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mt-4 mb-6 text-balance">
              La operación de tu restaurante no debería ser tan complicada
            </h2>

            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Sabemos que manejar pedidos, domicilios y clientes puede volverse caótico. La buena
              noticia es que hay una forma mejor de hacerlo.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Pérdida de tiempo",
                desc: "Gestionar pedidos manualmente consume horas que podrías dedicar a tu negocio.",
                delay: "0ms",
                icon: (
                  <>
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </>
                ),
              },
              {
                title: "Errores en pedidos",
                desc: "Los pedidos por teléfono o WhatsApp generan confusiones y clientes insatisfechos.",
                delay: "100ms",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </>
                ),
              },
              {
                title: "Ventas perdidas",
                desc: "Sin presencia digital optimizada, pierdes clientes que buscan comodidad.",
                delay: "200ms",
                icon: (
                  <>
                    <line x1="12" x2="12" y1="2" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </>
                ),
              },
              {
                title: "Difícil seguimiento",
                desc: "Sin datos claros, es imposible conocer a tus clientes y mejorar tu servicio.",
                delay: "300ms",
                icon: (
                  <>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <circle cx="9" cy="7" r="4" />
                  </>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 bg-[hsl(var(--background))] rounded-2xl border border-[hsl(var(--border))] hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    {item.icon}
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
