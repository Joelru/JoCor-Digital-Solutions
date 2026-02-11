import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="bg-[hsl(var(--background))] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 grid gap-16 md:grid-cols-2 items-start">
        {/* INFO */}
        <div className="text-left">
          <span className="inline-block text-xs tracking-widest text-emerald-500 font-semibold mb-4">
            CONTACTO
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mt-4 mb-6 text-balance">
            Hablemos de tu negocio
          </h2>

          <p className="max-w-xl mb-6 text-[hsl(var(--muted-foreground))]">
            Cuéntanos sobre tu restaurante y tus necesidades. Te asesoramos sin compromiso y te
            proponemos la mejor solución para ti.
          </p>

          {/* WhatsApp box */}
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 my-6">
            <p className="font-semibold text-[hsl(var(--foreground))]">
              Respuesta rápida por WhatsApp
            </p>

            <span className="block text-sm my-2 text-[hsl(var(--muted-foreground))]">
              Escríbenos directamente y te respondemos en minutos.
            </span>

            <a
              href="https://wa.me/573209430835"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-3 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-message-circle w-4 h-4 mr-2"
                aria-hidden="true"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
              </svg>
              Chatear por WhatsApp
            </a>
          </div>

          <div className="flex items-center text-center gap-3 text-[hsl(var(--muted-foreground))] px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-mail w-5 h-5"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>

            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              O escríbenos a:{" "}
              <a
                href="mailto:jocorsolutions@gmail.com"
                className="underline text-[hsl(var(--foreground))]"
              >
                jocorsolutions@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-8">
          <form className="flex flex-col gap-5">
            {[
              {
                label: "Tu nombre",
                type: "text",
                placeholder: "Nombre de la persona que contacta",
              },
              {
                label: "Correo electrónico",
                type: "email",
                placeholder: "correo@tunegocio.com",
              },
              {
                label: "Nombre de tu negocio",
                type: "text",
                placeholder: "Restaurante El Sabor",
              },
            ].map(({ label, type, placeholder }) => (
              <label
                key={label}
                className="text-sm font-medium flex flex-col gap-2 text-[hsl(var(--foreground))]"
              >
                {label}
                <input
                  type={type}
                  placeholder={placeholder}
                  required
                  className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-xl px-4 py-2 text-[hsl(var(--foreground))] 
                  placeholder:text-[hsl(var(--muted-foreground))] font-light focus:outline-none focus:border-[hsl(var(--accent))]
                  "
                />
              </label>
            ))}

            <label className="text-sm font-medium flex flex-col gap-2 text-[hsl(var(--foreground))]">
              Cuéntanos sobre tu negocio
              <textarea
                rows="4"
                placeholder="Qué tipo de restaurante tienes, qué necesitas mejorar..."
                className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-xl px-4 py-2 
                text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] font-light focus:outline-none focus:border-emerald-600 resize-none"
              ></textarea>
            </label>

            <Button type="submit" className="w-full mt-3">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
