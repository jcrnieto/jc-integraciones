const items = [
  [
    "Diseño técnico",
    "Arquitectura, interfaces y definición de flujos de integración.",
  ],
  [
    "Desarrollo de iFlows",
    "Construcción y configuración en SAP Integration Suite / CPI.",
  ],
  [
    "SAP ↔ no-SAP",
    "Integraciones con aplicaciones, APIs y sistemas externos.",
  ],
  [
    "APIs y servicios",
    "REST, SOAP, OData y escenarios de integración relacionados.",
  ],
  [
    "Estimación técnica",
    "Apoyo para dimensionar esfuerzo, alcance y riesgos antes de cotizar un proyecto.",
  ],
];

export default function Servicios() {
    return (
      <section id="servicios" className="section border-y border-slate-200 bg-slate-50">
        <div className="container">
          <p className="eyebrow">
            Servicios
          </p>
          <h2 className="section-title">
            Capacidad hands-on en SAP Integration Suite
          </h2>
          <p className="section-intro">
            Me incorporo al proyecto para apoyar el diseño, desarrollo y entrega de integraciones SAP, desde la estimación técnica inicial hasta la implementación.
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
        </div>
      </section>
    );
}
