export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-[hsl(var(--muted)/0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section tag */}
          <span className="text-sm font-medium text-emerald-500 uppercase tracking-wider">
            CÓMO TRABAJAMOS
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mt-4 mb-6">
            Un proceso claro, pensado para ti
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Sin sorpresas, sin costos innecesarios. Trabajamos por fases para que siempre tengas
            control y claridad sobre tu inversión.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProcessCard
            step="01"
            title="Conversación inicial"
            description="Entendemos tu negocio, tus necesidades y tus objetivos. Sin compromisos, sin letra pequeña."
            items={[
              "Llamada o videollamada",
              "Análisis de tu operación",
              "Propuesta personalizada",
            ]}
          />

          <ProcessCard
            step="02"
            title="Diseño y desarrollo"
            description="Creamos tu solución digital adaptada a tu marca y tu forma de trabajar. Tú apruebas
              cada paso."
            items={["Diseño a tu medida", "Revisiones incluidas", "Entrega en semanas"]}
          />

          <ProcessCard
            step="03"
            title="Crecimiento continuo"
            description="Configuramos todo, te capacitamos y lanzamos. Estarás operando con tu nueva plataforma
              desde el día uno."
            items={["Configuración completa", "Capacitación incluida", "Soporte en vivo"]}
          />

          <ProcessCard
            step="04"
            title="Lanzamiento"
            description="Te acompañamos después del lanzamiento. Hacemos ajustes, agregamos funciones y te
              ayudamos a escalar."
            items={["Soporte técnico", "Mejoras progresivas", "Sin costos ocultos"]}
          />
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, title, description, items }) {
  return (
    <div className="relative p-8 bg-[hsl(var(--background))] rounded-2xl border border-[hsl(var(--border))]">
      <div className="flex items-start gap-6">
        {/* Step number */}
        <span className="text-5xl font-bold text-[hsl(var(--muted-foreground)/0.2)]">{step}</span>

        <div className="flex-1">
          {/* Title */}
          <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">{title}</h3>

          {/* Description */}
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">{description}</p>

          {/* List */}
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-[hsl(var(--foreground))]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[hsl(var(--accent))] shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
