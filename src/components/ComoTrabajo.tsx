interface Modalidad {
  titulo: string;
  subtitulo: string;
  badge: string;
  texto: string;
  casos: string;
}

const modalidades: Modalidad[] = [
  {
    titulo: "Por hora",
    subtitulo: "Apoyo puntual y bajo demanda",
    badge: "Flexible",
    texto: "Para necesidades puntuales, apoyo técnico, desarrollo específico o acompañamiento durante determinadas etapas del proyecto.",
    casos: "Desbloqueos rápidos, soporte puntual o consultas técnicas específicas.",
  },
  {
    titulo: "Por proyecto",
    subtitulo: "Alcance e hitos definidos",
    badge: "Por entregables",
    texto: "Para integraciones con un alcance suficientemente definido, con entregables y objetivos acordados.",
    casos: "Desarrollo de nuevas interfaces, migraciones o integraciones punta a punta.",
  },
  {
    titulo: "Capacidad temporal",
    subtitulo: "Extensión técnica de tu equipo",
    badge: "Dedicación temporal",
    texto: "Me incorporo al equipo durante algunas semanas o meses para aportar capacidad especializada mientras dure la necesidad.",
    casos: "Picos de demanda, proyectos simultáneos o cobertura de especialistas.",
  },
];

export default function ComoTrabajo() {
  return (
    <section id="como-trabajo" className="section bg-white">
      <div className="container">
        <p className="eyebrow">
          Modalidades de trabajo
        </p>
        <h2 className="section-title">
          Sumá capacidad solo cuando la necesitás
        </h2>
        <p className="section-intro">
          Me incorporo de forma flexible según el alcance y la duración del proyecto.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {modalidades.map((item) => (
            <article
              key={item.titulo}
              className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-slate-50/40 p-7 transition-all duration-200 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {item.subtitulo}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {item.texto}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-200/70 pt-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Ideal para
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {item.casos}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-white shadow-md md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">
              Bajo overhead
            </span>
            <p className="mt-1.5 max-w-2xl text-base font-medium leading-relaxed text-slate-200">
              Trabajás directamente conmigo como consultor independiente, sin sumar estructura fija ni asumir el costo permanente de un perfil especializado.
            </p>
          </div>
          <a
            href="#contacto"
            className="cta shrink-0 bg-blue-600 hover:bg-blue-500 w-full md:w-auto shadow-sm"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}

