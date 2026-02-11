export default function Results() {
  return (
    <section
      id="results"
      className="relative py-20 text-center text-white bg-cover bg-fixed min-h-screen overflow-hidden"
      style={{ backgroundImage: "url('/assets/banner-results.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Section tag */}
      <div className="relative max-w-6xl mx-auto px-5">
        <span className="inline-block text-xs tracking-widest text-emerald-500 font-semibold mb-4">
          RESULTADOS REALES
        </span>

        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-4">
          Tecnología que <br />
          impacta tu negocio
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mb-16 text-gray-300">
          No vendemos humo. Nuestras soluciones generan resultados medibles para restaurantes como
          el tuyo.
        </p>

        {/* Metrics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <MetricCard
            icon="📈"
            value="+35%"
            title="Aumento en ventas"
            note="Promedio de nuestros clientes en los primeros 3 meses"
          />
          <MetricCard
            icon="⏱️"
            value="4hrs"
            title="Tiempo ahorrado / día"
            note="En gestión de pedidos y atención al cliente"
          />
          <MetricCard
            icon="😊"
            value="98%"
            title="Clientes satisfechos"
            note="Continúan trabajando con nosotros"
          />
          <MetricCard
            icon="📉"
            value="-60%"
            title="Menos errores"
            note="En pedidos y tiempos de entrega"
          />
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2">
          <TestimonialCard
            text="“Antes pasábamos horas al teléfono tomando pedidos. Ahora todo llega organizado y sin
              errores.”"
            name="María Rodríguez"
            role="Dueña de Restaurante El Sabor"
          />

          <TestimonialCard
            text="“El menú digital nos permite cambiar precios y platos en minutos. Ya no gastamos en
              reimprimir cartas.”"
            name="Carlos Mendoza"
            role="Gerente de Pizzería Napoli"
          />
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, value, title, note }) {
  return (
    <div
      className="rounded-2xl p-8 bg-linear-to-t from-emerald-500/70 via-white/30 to-transparent
        transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-emerald-500/20 flex items-center justify-center text-lg">
        {icon}
      </div>

      <h3 className="text-2xl font-extrabold mb-1">{value}</h3>

      <p className="text-sm font-semibold">{title}</p>

      <span className="block mt-2 text-xs text-white/90">{note}</span>
    </div>
  );
}

function TestimonialCard({ text, name, role }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-left">
      <p className="text-sm text-gray-200 mb-4 leading-relaxed">“{text}”</p>

      <strong className="block text-sm">{name}</strong>

      <span className="text-xs text-gray-400">{role}</span>
    </div>
  );
}
