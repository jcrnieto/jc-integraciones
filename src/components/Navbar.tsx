import Image from "next/image";

export default function Navbar() {
    return (
      <header className="border-b border-slate-200">
        <div className="container flex flex-col items-center gap-5 py-5 lg:flex-row lg:justify-between">
          <a
            href="#inicio"
            aria-label="JC Integraciones — Inicio"
            className="relative block h-24 w-36 shrink-0 overflow-hidden"
          >
            <Image
              src="/logo-integraciones.png"
              alt="JC Integraciones"
              width={2000}
              height={2000}
              sizes="184px"
              preload
              className="absolute -top-11 -left-6 h-auto w-[184px] max-w-none"
            />
          </a>
          <nav
            aria-label="Navegación principal"
            className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm font-medium sm:w-auto lg:justify-end"
          >
            <a href="#servicios">
              Servicios
            </a>
            <a href="#como-trabajo">
              Cómo trabajo
            </a>
            <a href="#contacto">
              Contacto
            </a>
            <a href="#contacto" className="cta w-full sm:w-auto">
              Consultar disponibilidad
            </a>
          </nav>
        </div>
      </header>
    );
}
