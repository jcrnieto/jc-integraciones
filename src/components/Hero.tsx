import IntegrationVisual from "./IntegrationVisual";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40">
      <div className="container grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-blue-800 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Consultor independiente · Disponible para proyectos</span>
          </div>

          <h1 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.14]">
            SAP Integration Suite para consultoras que necesitan{" "}
            <span className="text-blue-700">capacidad adicional</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Incorporá capacidad especializada en integración justo cuando tu proyecto la necesita, sin ampliar tu estructura permanente.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href="#contacto" className="cta group w-full sm:w-auto">
              <span>Consultar disponibilidad</span>
              <svg
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <span className="text-xs font-medium text-slate-500 sm:pl-2">
              Respuesta en menos de 24 hs hábiles
            </span>
          </div>

          <div className="mt-10 border-t border-slate-200/80 pt-6">
            <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Especialización técnica
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 shadow-xs">
                SAP Integration Suite
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 shadow-xs">
                CPI
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 shadow-xs">
                iFlows
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 shadow-xs">
                APIs & OData
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 shadow-xs">
                SAP ↔ no-SAP
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <IntegrationVisual />
        </div>
      </div>
    </section>
  );
}

