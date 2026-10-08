const items = [
  [
    "Por hora",
    "Para necesidades puntuales, apoyo técnico, desarrollo específico o acompañamiento durante determinadas etapas del proyecto.",
  ],
  [
    "Por proyecto",
    "Para integraciones con un alcance suficientemente definido, con entregables y objetivos acordados.",
  ],
  [
    "Capacidad temporal",
    "Me incorporo al equipo durante algunas semanas o meses para aportar capacidad especializada mientras dure la necesidad.",
  ],
];

export default function ComoTrabajo() {
    return (
      <section id="como-trabajo" className="section ">
        <div className="container">
          <p className="eyebrow">
            Cómo trabajo
          </p>
          <h2 className="section-title">
            Sumá capacidad solo cuando la necesitás
          </h2>
          <p className="section-intro">
            Me incorporo de forma flexible según el alcance y la duración del proyecto.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(([titulo, texto], index) => 
              <article key={titulo} className="rounded-lg border border-slate-200 bg-white p-7">
                <span aria-hidden="true" className="text-xs font-semibold text-blue-700">
                  0
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">
                  {titulo}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {texto}
                </p>
              </article>
            )}
          </div>
          <div
            className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg bg-slate-50 p-8 md:flex-row md:items-center"
          >
            <p className="max-w-2xl leading-7 text-slate-600">
              Trabajás directamente conmigo como consultor independiente, sin sumar estructura fija ni asumir el costo permanente de un perfil especializado.
            </p>
            <a href="#contacto" className="cta w-full shrink-0 md:w-auto">
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>
    );
}
