const situaciones = [
  "Ganaste o estás cotizando un proyecto que requiere SAP Integration Suite.",
  "Tu especialista actual está asignado a otros proyectos.",
  "Necesitás una segunda capacidad para cumplir con fechas o picos de trabajo.",
  "Aparece una integración compleja que requiere experiencia más específica.",
  "Necesitás estimar técnicamente una integración antes de presentar una propuesta.",
];

export default function Problemas() {
    return (
      <section className="section">
        <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
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
          </div>
          <div>
            <ul className="divide-y divide-slate-200">
              {situaciones.map((item) => 
                <li key={item} className="flex gap-4 py-5 first:pt-0">
                  <span aria-hidden="true" className="text-blue-700">
                    ↗
                  </span>
                  <span className="leading-7 text-slate-600">
                    {item}
                  </span>
                </li>
              )}
            </ul>
            <p className="mt-6 border-l-2 border-blue-700 pl-5 font-medium leading-7">
              En esos casos, podés sumar capacidad especializada solo durante el tiempo que la necesitás.
            </p>
          </div>
        </div>
      </section>
    );
}
