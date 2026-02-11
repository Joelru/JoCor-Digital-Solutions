import Badge from "../ui/Badge";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-[hsl(var(--accent))] uppercase tracking-wider">
            Nuestras soluciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mt-4 mb-6 text-balance">
            Todo lo que tu restaurante necesita para brillar en digital
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Soluciones pensadas para el día a día de negocios gastronómicos. Sin complicaciones, sin
            tecnicismos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={
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
                className="lucide lucide-globe w-7 h-7 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] transition-colors"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            }
            badge="Tu carta de presentación digital"
            title="Plataforma Digital"
            description="Página web profesional diseñada específicamente para restaurantes. Muestra tu menú, ubicación y canales de contacto de forma elegante."
            delay={0}
          />

          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-smartphone w-7 h-7 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] transition-colors"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
            }
            badge="Actualiza precios al instante"
            title="Menú Digital Inteligente"
            description="Menú optimizado para móviles que tus clientes pueden consultar con un código QR. Actualizable en tiempo real, sin reimprimir nada."
            delay={100}
          />

          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart w-7 h-7 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] transition-colors"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            }
            badge="Pedidos claros y ordenados"
            title="Sistema de Pedidos"
            description="Recibe pedidos locales y a domicilio de forma organizada. Sin confusiones, sin errores, todo en un solo lugar."
            delay={200}
          />

          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap w-7 h-7 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] transition-colors"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            }
            badge="Menos trabajo manual"
            title="Automatización"
            description="Automatizamos tareas repetitivas para que tu equipo se enfoque en lo importante: atender bien a tus clientes."
            delay={300}
          />

          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle w-7 h-7 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] transition-colors"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
              </svg>
            }
            badge="Donde están tus clientes"
            title="Integración WhatsApp"
            description="Conectamos tu sistema con WhatsApp Business para que tus clientes puedan contactarte fácilmente por su canal favorito."
            delay={400}
          />

          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-headphones w-7 h-7 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] transition-colors"
              >
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
              </svg>
            }
            badge="Siempre contigo"
            title="Soporte Técnico"
            description="Te acompañamos después del lanzamiento. Resolvemos dudas, hacemos ajustes y te ayudamos a crecer paso a paso."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, badge, title, description, delay = 0 }) {
  return (
    <div
      className="group relative p-8 bg-[hsl(var(--background))] rounded-2xl border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))]/50 transition-all duration-300 hover:shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--muted))] flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--accent))]/10 transition-colors">
        {icon}
      </div>

      <Badge className="mb-4 text-xs px-3 py-1">{badge}</Badge>

      <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">{title}</h3>

      <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">{description}</p>
    </div>
  );
}
