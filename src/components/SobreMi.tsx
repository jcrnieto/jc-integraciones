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
      <section className="section bg-[#14263d] text-white">
        <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[.14em] text-blue-200 uppercase">
              Contacto directo. Ejecución técnica.
            </p>
            <h2 className="section-title">
              Experiencia técnica aplicada a proyectos SAP reales
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Trabajo directamente sobre proyectos de integración SAP, aportando capacidad técnica y ejecución hands-on.
            </p>
            <p className="mt-8 border-l-2 border-blue-400 pl-5 leading-7">
              Trabajás directamente conmigo como consultor independiente, sin capas comerciales ni intermediarios.
            </p>
          </div>
          <ul className="grid content-start gap-5 md:pt-10">
            {capacidades.map((item) => 
              <li key={item} className="flex gap-4 border-b border-slate-600 pb-4 text-slate-200">
                <span aria-hidden="true" className="text-blue-300">
                  ✓
                </span>
                {item}
              </li>
            )}
          </ul>
        </div>
      </section>
    );
}
