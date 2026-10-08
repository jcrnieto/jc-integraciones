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
      className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white"
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
          className="menu-toggle lg:hidden"
          data-open={menuAbierto}
        >
          <span className="text-xs font-semibold">{menuAbierto ? "Cerrar" : "Menú"}</span>
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <div
          className="menu-backdrop lg:hidden"
          data-open={menuAbierto}
          aria-hidden="true"
          onClick={() => setMenuAbierto(false)}
        />

        <nav
          id="menu-principal"
          aria-label="Navegación principal"
          data-open={menuAbierto}
          className="mobile-navigation"
        >
          <div className="mobile-navigation-inner">
            <div className="menu-intro lg:hidden">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">JC Integraciones</span>
              <p className="mt-2 text-sm text-slate-500">Capacidad especializada para tu proyecto SAP.</p>
            </div>
            {[
              { href: "#servicios", titulo: "Servicios", detalle: "Diseño y desarrollo de integraciones" },
              { href: "#como-trabajo", titulo: "Cómo trabajo", detalle: "Apoyo puntual, por proyecto o temporal" },
              { href: "#contacto", titulo: "Contacto", detalle: "Contame qué necesita tu equipo" },
            ].map((enlace, indice) => (
              <a
                key={enlace.href}
                href={enlace.href}
                onClick={() => setMenuAbierto(false)}
                className="menu-link"
              >
                <span className="menu-link-number lg:hidden">0{indice + 1}</span>
                <span className="flex-1">
                  <span className="menu-link-title">{enlace.titulo}</span>
                  <span className="mt-1 block text-xs font-normal text-slate-500 lg:hidden">{enlace.detalle}</span>
                </span>
                <svg className="menu-link-arrow lg:hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
            ))}
            <div className="menu-contact">
              <a
                href="#contacto"
                onClick={() => setMenuAbierto(false)}
                className="cta w-full text-sm font-semibold lg:w-auto"
              >
                Consultar disponibilidad
              </a>
              <p className="mt-3 text-center text-xs text-slate-500 lg:hidden">Contacto directo. Sin compromiso.</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
