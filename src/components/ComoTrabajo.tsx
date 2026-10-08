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
    badge: "Alcance definido",
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
    <section id="como-trabajo" aria-labelledby="modalidades-titulo" className="section bg-white">
      <div className="container">
        <h2 id="modalidades-titulo" className="section-title">
          Modalidades de trabajo
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Me incorporo de forma flexible según el alcance y la duración del proyecto.
        </p>

        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3">
          {modalidades.map((item) => (
            <article
              key={item.titulo}
              className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/40 p-5 sm:p-6"
            >
              <div className="pb-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {item.subtitulo}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {item.texto}
                </p>
              </div>

              <div className="mt-auto border-t border-slate-200/70 pt-4">
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

      </div>
    </section>
  );
}
