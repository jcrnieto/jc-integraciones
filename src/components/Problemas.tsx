const situaciones = [
  "Ganaste o estás cotizando un proyecto que requiere SAP Integration Suite.",
  "Tu especialista actual está asignado a otros proyectos.",
  "Necesitás una segunda capacidad para cumplir con fechas o picos de trabajo.",
  "Aparece una integración compleja que requiere experiencia más específica.",
  "Necesitás estimar técnicamente una integración antes de presentar una propuesta.",
];

export default function Problemas() {
  return (
    <section className="section bg-white">
      <div className="container grid items-start gap-12 lg:grid-cols-[1.1fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">
            Cuando tu equipo necesita apoyo
          </p>
          <h2 className="section-title">
            Cuando aparece un proyecto y tu equipo no tiene suficiente capacidad disponible
          </h2>
          <p className="section-intro">
            Hay momentos en los que una consultora necesita sumar experiencia en integración sin incorporar estructura permanente.
          </p>

          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-blue-700 uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              Flexibilidad operativa
            </div>
            <p className="mt-2.5 text-base font-semibold leading-relaxed text-slate-800">
              En esos casos, podés sumar capacidad especializada solo durante el tiempo que la necesitás.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {situaciones.map((item, index) => (
            <div
              key={item}
              className="group flex items-start gap-4 rounded-xl border border-slate-200/80 bg-slate-50/40 p-4.5 transition-all duration-150 hover:border-blue-200 hover:bg-white hover:shadow-xs"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-100 text-xs font-bold text-blue-800 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                {index + 1}
              </div>
              <p className="text-[0.95rem] font-medium leading-relaxed text-slate-700 group-hover:text-slate-900">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

