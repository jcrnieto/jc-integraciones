import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <a
            href="#inicio"
            aria-label="JC Integraciones — Volver al inicio"
            className="group flex items-center shrink-0"
          >
            <Logo className="h-12 w-auto sm:h-14" />
          </a>
          <p className="text-xs text-slate-500">
            Consultor independiente · SAP Integration Suite / CPI
          </p>
        </div>

        <nav aria-label="Navegación del pie" className="flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#servicios" className="hover:text-blue-700 transition-colors">
            Servicios
          </a>
          <a href="#como-trabajo" className="hover:text-blue-700 transition-colors">
            Cómo trabajo
          </a>
          <a href="#contacto" className="hover:text-blue-700 transition-colors">
            Contacto
          </a>
        </nav>

        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} JC Integraciones. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

