interface ServicioItem {
  titulo: string;
  texto: string;
  icono: "diseno" | "iflows" | "sap" | "apis" | "estimacion";
}

const servicios: ServicioItem[] = [
  {
    titulo: "Diseño técnico",
    texto: "Arquitectura, interfaces y definición de flujos de integración.",
    icono: "diseno",
  },
  {
    titulo: "Desarrollo de iFlows",
    texto: "Construcción y configuración en SAP Integration Suite / CPI.",
    icono: "iflows",
  },
  {
    titulo: "SAP ↔ no-SAP",
    texto: "Integraciones con aplicaciones, APIs y sistemas externos.",
    icono: "sap",
  },
  {
    titulo: "APIs y servicios",
    texto: "REST, SOAP, OData y escenarios de integración relacionados.",
    icono: "apis",
  },
  {
    titulo: "Estimación técnica",
    texto: "Apoyo para dimensionar esfuerzo, alcance y riesgos antes de cotizar un proyecto.",
    icono: "estimacion",
  },
];

function IconoServicio({ icono }: { icono: ServicioItem["icono"] }) {
  if (icono === "diseno") {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    );
  }
  if (icono === "iflows") {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    );
  }
  if (icono === "sap") {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-3.086l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    );
  }
  if (icono === "apis") {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    );
  }
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.325 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="section border-y border-slate-200/80 bg-slate-50/60">
      <div className="container">
        <p className="eyebrow">
          Capacidades técnicas
        </p>
        <h2 className="section-title">
          Experiencia técnica en SAP Integration Suite.
        </h2>
        <p className="section-intro">
          Me incorporo al proyecto para apoyar el diseño, desarrollo y entrega de integraciones SAP, desde la estimación técnica inicial hasta la implementación.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((item, index) => (
            <article
              key={item.titulo}
              className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                    <IconoServicio icono={item.icono} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900 group-hover:text-blue-900">
                  {item.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.texto}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

