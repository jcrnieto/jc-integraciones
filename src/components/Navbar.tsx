"use client";

import Logo from "./Logo";
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
    <header
      ref={headerRef}
      className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors"
    >
      <div className="container flex items-center justify-between py-2 lg:py-2.5">
        <a
          href="#inicio"
          onClick={() => setMenuAbierto(false)}
          aria-label="JC Integraciones — Inicio"
          className="group flex items-center shrink-0"
        >
          <Logo className="h-12 w-auto sm:h-14" />
        </a>

        <button
          ref={botonRef}
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuAbierto ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegación principal"
          className={`${
            menuAbierto ? "flex" : "hidden"
          } absolute top-full left-0 w-full flex-col border-b border-slate-200 bg-white/95 px-6 py-4 shadow-lg backdrop-blur-md lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <a
            href="#servicios"
            onClick={() => setMenuAbierto(false)}
            className="flex min-h-11 items-center font-medium text-slate-600 transition-colors hover:text-blue-700 lg:min-h-0"
          >
            Servicios
          </a>
          <a
            href="#como-trabajo"
            onClick={() => setMenuAbierto(false)}
            className="flex min-h-11 items-center font-medium text-slate-600 transition-colors hover:text-blue-700 lg:min-h-0"
          >
            Cómo trabajo
          </a>
          <a
            href="#contacto"
            onClick={() => setMenuAbierto(false)}
            className="flex min-h-11 items-center font-medium text-slate-600 transition-colors hover:text-blue-700 lg:min-h-0"
          >
            Contacto
          </a>
          <a
            href="#contacto"
            onClick={() => setMenuAbierto(false)}
            className="cta mt-2 w-full text-sm font-semibold lg:mt-0 lg:w-auto"
          >
            Consultar disponibilidad
          </a>
        </nav>
      </div>
    </header>
  );
}

