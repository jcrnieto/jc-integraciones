"use client";
import { useState, useRef, type FormEvent } from "react";
import { validarContacto, type CampoContacto, type ErroresContacto } from "@/lib/contacto";

const OPCIONES_RAPIDAS = [
  "Desarrollo de iFlows / CPI",
  "Integración SAP ↔ no-SAP",
  "Capacidad temporal de refuerzo",
  "Estimación técnica para propuesta",
];

export default function Contacto() {
  const [pending, setPending] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);
  const [errores, setErrores] = useState<ErroresContacto>({});
  const necesidadRef = useRef<HTMLTextAreaElement>(null);

  function validarCampo(event: FormEvent<HTMLFormElement>, soloConError = false) {
    const campo = (event.target as HTMLInputElement | HTMLTextAreaElement).name as CampoContacto;
    if (!campo || (soloConError && !errores[campo])) return;
    const resultado = validarContacto(Object.fromEntries(new FormData(event.currentTarget)));
    setErrores((actuales) => ({ ...actuales, [campo]: resultado.errores[campo] }));
  }

  function agregarOpcionRapida(opcion: string) {
    if (!necesidadRef.current) return;
    const actual = necesidadRef.current.value.trim();
    if (!actual) {
      necesidadRef.current.value = opcion;
    } else if (!actual.includes(opcion)) {
      necesidadRef.current.value = `${actual}, ${opcion}`;
    }
    necesidadRef.current.focus();
    if (errores.necesidad) {
      setErrores((prev) => ({ ...prev, necesidad: undefined }));
    }
  }

  async function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (pending) return;
    const { valores, errores: erroresValidacion } = validarContacto(Object.fromEntries(new FormData(form)));
    setErrores(erroresValidacion);
    if (Object.keys(erroresValidacion).length) {
      setMensaje("");
      const primerCampo = Object.keys(erroresValidacion)[0];
      (form.elements.namedItem(primerCampo) as HTMLElement | null)?.focus();
      return;
    }
    setPending(true);
    setMensaje("");
    setError(false);
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        body: JSON.stringify(valores),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 400) {
        const resultado = await response.json();
        setErrores(resultado.errores ?? {});
        setError(true);
        setMensaje(resultado.error ?? "Revisá los campos indicados.");
        const primerCampo = Object.keys(resultado.errores ?? {})[0];
        if (primerCampo) (form.elements.namedItem(primerCampo) as HTMLElement | null)?.focus();
        return;
      }
      if (!response.ok) throw new Error("Error de envío");
      setMensaje("Gracias por tu consulta. Te respondo personalmente para evaluar disponibilidad y encaje.");
      form.reset();
    } catch {
      setError(true);
      setMensaje("No pudimos enviar tu consulta. Intentá nuevamente más tarde.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contacto" className="section border-t border-slate-200/80 bg-slate-50/70">
      <div className="container grid items-start gap-12 lg:grid-cols-[1.05fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">
            Hablemos de tu proyecto
          </p>
          <h2 className="section-title">
            ¿Necesitás capacidad de SAP Integration Suite para un proyecto?
          </h2>
          <p className="section-intro">
            Contame brevemente qué necesitás y te respondo para evaluar disponibilidad y encaje.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border border-slate-200/80 bg-white p-4 shadow-2xs">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-700">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Respuesta rápida</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                  Respondo en menos de 24 horas hábiles directamente a tu email.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-slate-200/80 bg-white p-4 shadow-2xs">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-700">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">100% confidencial</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                  Tratamiento reservado sobre clientes, alcances y arquitectura de tus proyectos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-slate-200/80 bg-white p-4 shadow-2xs">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-700">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Trato directo</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                  Sin intermediarios ni comerciales. Evaluación técnica mano a mano.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          noValidate
          onSubmit={enviar}
          onBlur={(event) => validarCampo(event)}
          onChange={(event) => validarCampo(event, true)}
          className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm sm:p-9"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="nombre" className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
                Nombre <span className="text-blue-600">*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                placeholder="Ej. Juan Pérez"
                aria-invalid={Boolean(errores.nombre)}
                aria-describedby={errores.nombre ? "nombre-error" : undefined}
                autoComplete="name"
                required
                maxLength={120}
                className="field"
              />
              {errores.nombre && (
                <span id="nombre-error" className="mt-1.5 block text-xs font-medium text-red-600" aria-live="polite">
                  {errores.nombre}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="empresa" className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
                Empresa <span className="text-blue-600">*</span>
              </label>
              <input
                id="empresa"
                name="empresa"
                placeholder="Ej. Consultora SAP"
                aria-invalid={Boolean(errores.empresa)}
                aria-describedby={errores.empresa ? "empresa-error" : undefined}
                autoComplete="organization"
                required
                maxLength={160}
                className="field"
              />
              {errores.empresa && (
                <span id="empresa-error" className="mt-1.5 block text-xs font-medium text-red-600" aria-live="polite">
                  {errores.empresa}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
                Email de contacto <span className="text-blue-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                placeholder="juan@empresa.com"
                aria-invalid={Boolean(errores.email)}
                aria-describedby={errores.email ? "email-error" : undefined}
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className="field"
              />
              {errores.email && (
                <span id="email-error" className="mt-1.5 block text-xs font-medium text-red-600" aria-live="polite">
                  {errores.email}
                </span>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="necesidad" className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
                  ¿Qué necesitás? <span className="text-blue-600">*</span>
                </label>
              </div>

              <div className="mt-2 mb-2 flex flex-wrap gap-1.5">
                <span className="text-xs text-slate-400 self-center mr-1">Sugerencias:</span>
                {OPCIONES_RAPIDAS.map((opcion) => (
                  <button
                    key={opcion}
                    type="button"
                    onClick={() => agregarOpcionRapida(opcion)}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  >
                    + {opcion}
                  </button>
                ))}
              </div>

              <textarea
                ref={necesidadRef}
                id="necesidad"
                name="necesidad"
                placeholder="Contame sobre tu proyecto: sistemas involucrados, fechas o tipo de soporte que buscás..."
                aria-invalid={Boolean(errores.necesidad)}
                aria-describedby={errores.necesidad ? "necesidad-error" : undefined}
                rows={4}
                required
                maxLength={5000}
                className="field resize-y"
              />
              {errores.necesidad && (
                <span id="necesidad-error" className="mt-1.5 block text-xs font-medium text-red-600" aria-live="polite">
                  {errores.necesidad}
                </span>
              )}
            </div>

            <button type="submit" disabled={pending} className="cta w-full text-base font-semibold">
              {pending ? "Enviando consulta…" : "Consultar disponibilidad"}
            </button>

            {mensaje ? (
              <div
                role="status"
                aria-live="polite"
                className={`rounded-lg p-4 text-sm font-medium ${
                  error
                    ? "border border-red-200 bg-red-50 text-red-700"
                    : "border border-emerald-200 bg-emerald-50 text-emerald-800"
                }`}
              >
                {mensaje}
              </div>
            ) : (
              <p className="text-center text-xs text-slate-500">
                Respondo personalmente. Sin compromiso.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

