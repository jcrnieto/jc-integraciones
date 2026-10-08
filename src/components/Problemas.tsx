const situaciones = [
  "Ganaste o estás cotizando un proyecto que requiere SAP Integration Suite.",
  "Tu especialista actual está asignado a otros proyectos.",
  "Necesitás una segunda capacidad para cumplir con fechas o picos de trabajo.",
  "Aparece una integración compleja que requiere experiencia más específica.",
  "Necesitás estimar técnicamente una integración antes de presentar una propuesta.",
];

export default function Problemas() {
  return (
    <section className="section bg-white" aria-labelledby="problemas-titulo">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h2 id="problemas-titulo" className="section-title">
            ¿Tu equipo necesita apoyo, pero no querés sumar personal permanente?
          </h2>

          <ol className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {situaciones.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/40 p-4 sm:items-center sm:gap-5 sm:p-5"
              >
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-800">
                  {index + 1}
                </span>
                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-5 sm:mt-8 sm:p-6">
            <p className="text-base font-semibold leading-relaxed text-slate-800 sm:text-lg">
              En esos casos, podés contratar mi servicio especializado solo el tiempo que lo necesites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
