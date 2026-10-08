const capacidades = [
  "Integraciones SAP ↔ no-SAP",
  "SAP Integration Suite / CPI",
  "iFlows, APIs y servicios",
  "REST, SOAP y OData",
  "Documentación técnica",
  "Transferencia de conocimiento",
  "Trabajo coordinado con equipos SAP",
];

export default function SobreMi() {
  return (
    <section className="section border-t border-slate-800 bg-slate-900 text-white">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-3.5 py-1 text-xs font-semibold text-blue-300">
            <span>Contacto directo · Ejecución técnica</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.16]">
            Experiencia técnica aplicada a proyectos SAP reales
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            Trabajo directamente sobre proyectos de integración SAP, aportando capacidad técnica y ejecución hands-on.
          </p>

          <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-950/50 p-5 sm:p-6">
            <p className="text-xs font-bold tracking-wider text-blue-400 uppercase">
              Diferencial
            </p>
            <p className="mt-2 text-base font-medium leading-relaxed text-white">
              Trabajás directamente conmigo como consultor independiente, sin capas comerciales ni intermediarios.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-1">
          {capacidades.map((item) => (
            <div
              key={item}
              className="group flex items-center gap-3.5 rounded-lg border border-slate-800 bg-slate-800/40 p-3.5 transition-colors duration-150 hover:border-slate-700 hover:bg-slate-800/70"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

