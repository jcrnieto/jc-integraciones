"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const botonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (!menuAbierto) return;

      function cerrarConEscape(event: KeyboardEvent) {
        if (event.key === "Escape") {
          setMenuAbierto(false);
          botonRef.current?.focus();
        }
      }

      function cerrarFuera(event: PointerEvent) {
        if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
          setMenuAbierto(false);
        }
      }

      const desktop = window.matchMedia("(min-width: 1024px)");
      function cerrarEnDesktop() {
        if (desktop.matches) setMenuAbierto(false);
      }

      document.addEventListener("keydown", cerrarConEscape);
      document.addEventListener("pointerdown", cerrarFuera);
      desktop.addEventListener("change", cerrarEnDesktop);
      return () => {
        document.removeEventListener("keydown", cerrarConEscape);
        document.removeEventListener("pointerdown", cerrarFuera);
        desktop.removeEventListener("change", cerrarEnDesktop);
      };
    }, [menuAbierto]);

    return (
      <header ref={headerRef} className="border-b border-slate-200 bg-white">
        <div className="container flex flex-wrap items-center justify-between gap-x-5 py-3 lg:flex-nowrap lg:py-5">
          <a
            href="#inicio"
            onClick={() => setMenuAbierto(false)}
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
          <button
            ref={botonRef}
            type="button"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="menu-principal"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-md text-black lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {menuAbierto ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
          <nav
            id="menu-principal"
            aria-label="Navegación principal"
            className={`${menuAbierto ? "flex" : "hidden"} w-full flex-col items-stretch gap-1 border-t border-slate-200 pt-3 pb-2 text-sm font-medium lg:flex lg:w-auto lg:flex-row lg:items-center lg:justify-end lg:gap-6 lg:border-0 lg:p-0`}
          >
            <a href="#servicios" onClick={() => setMenuAbierto(false)} className="flex min-h-12 items-center rounded-md px-3 hover:bg-slate-50 hover:text-blue-700 lg:min-h-0 lg:p-0">
              Servicios
            </a>
            <a href="#como-trabajo" onClick={() => setMenuAbierto(false)} className="flex min-h-12 items-center rounded-md px-3 hover:bg-slate-50 hover:text-blue-700 lg:min-h-0 lg:p-0">
              Cómo trabajo
            </a>
            <a href="#contacto" onClick={() => setMenuAbierto(false)} className="flex min-h-12 items-center rounded-md px-3 hover:bg-slate-50 hover:text-blue-700 lg:min-h-0 lg:p-0">
              Contacto
            </a>
            <a href="#contacto" onClick={() => setMenuAbierto(false)} className="cta mt-2 w-full lg:mt-0 lg:w-auto">
              Consultar disponibilidad
            </a>
          </nav>
        </div>
      </header>
    );
}
