export default function Hero() {
    return (
      <section id="inicio" className="border-b border-slate-200 bg-slate-50">
        <div className="container py-20 md:py-28">
          <p className="eyebrow">
            Capacidad especializada para consultoras SAP
          </p>
          <h1
            className="max-w-4xl text-4xl leading-[1.12] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          >
            SAP Integration Suite para consultoras que necesitan{" "}
            <span className="text-blue-700">
              capacidad adicional
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Incorporá capacidad especializada en integración justo cuando tu proyecto la necesita, sin ampliar tu estructura permanente.
          </p>
          <a href="#contacto" className="cta mt-9 w-full sm:w-auto">
            Consultar disponibilidad
            <span aria-hidden="true" className="ml-5">
              ↗
            </span>
          </a>
          <p className="mt-8 text-sm leading-6 text-slate-500">
            SAP Integration Suite · CPI · iFlows · APIs · SAP ↔ no-SAP
          </p>
        </div>
      </section>
    );
}
