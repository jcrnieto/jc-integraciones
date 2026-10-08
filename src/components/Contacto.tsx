"use client";
import { useState, type FormEvent } from "react";
import { validarContacto, type CampoContacto, type ErroresContacto } from "@/lib/contacto";

export default function Contacto() {
    const [pending, setPending] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState(false);
    const [errores, setErrores] = useState<ErroresContacto>({});
    function validarCampo(event: FormEvent<HTMLFormElement>, soloConError = false) {
        const campo = (event.target as HTMLInputElement | HTMLTextAreaElement).name as CampoContacto;
        if (!campo || (soloConError && !errores[campo])) return;
        const resultado = validarContacto(Object.fromEntries(new FormData(event.currentTarget)));
        setErrores((actuales) => ({ ...actuales, [campo]: resultado.errores[campo] }));
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
            const response = await fetch("/api/contacto", { method: "POST", body: JSON.stringify(valores), headers: { "Content-Type": "application/json" } });
            if (response.status === 400) {
                const resultado = await response.json();
                setErrores(resultado.errores ?? {});
                setError(true);
                setMensaje(resultado.error ?? "Revisá los campos indicados.");
                const primerCampo = Object.keys(resultado.errores ?? {})[0];
                if (primerCampo) (form.elements.namedItem(primerCampo) as HTMLElement | null)?.focus();
                return;
            }
            if (!response.ok)
                throw new Error("Error de envío");
            setMensaje("Gracias por tu consulta. Te respondo personalmente para evaluar disponibilidad y encaje.");
            form.reset();
        }
        catch {
            setError(true);
            setMensaje("No pudimos enviar tu consulta. Intentá nuevamente más tarde.");
        }
        finally {
            setPending(false);
        }
    }
    return (
      <section id="contacto" className="section bg-slate-50">
        <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
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
            <p className="mt-8 text-sm text-slate-500">
              Respondo personalmente. Sin compromiso.
            </p>
          </div>
          <form
            noValidate
            onSubmit={enviar}
            onBlur={(event) => validarCampo(event)}
            onChange={(event) => validarCampo(event, true)}
            className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <label htmlFor="nombre" className="text-sm font-medium">
                Nombre
                <input
                  id="nombre"
                  name="nombre"
                  aria-invalid={Boolean(errores.nombre)}
                  aria-describedby={errores.nombre ? "nombre-error" : undefined}
                  autoComplete="name"
                  required
                  maxLength={120}
                  className="field"
                />
                {errores.nombre && (
                  <span id="nombre-error" className="mt-1 block text-sm text-red-700" aria-live="polite">
                    {errores.nombre}
                  </span>
                )}
              </label>
              <label htmlFor="empresa" className="text-sm font-medium">
                Empresa
                <input
                  id="empresa"
                  name="empresa"
                  aria-invalid={Boolean(errores.empresa)}
                  aria-describedby={errores.empresa ? "empresa-error" : undefined}
                  autoComplete="organization"
                  required
                  maxLength={160}
                  className="field"
                />
                {errores.empresa && (
                  <span id="empresa-error" className="mt-1 block text-sm text-red-700" aria-live="polite">
                    {errores.empresa}
                  </span>
                )}
              </label>
              <label htmlFor="email" className="text-sm font-medium">
                Email
                <input
                  id="email"
                  name="email"
                  aria-invalid={Boolean(errores.email)}
                  aria-describedby={errores.email ? "email-error" : undefined}
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="field"
                />
                {errores.email && (
                  <span id="email-error" className="mt-1 block text-sm text-red-700" aria-live="polite">
                    {errores.email}
                  </span>
                )}
              </label>
              <label htmlFor="necesidad" className="text-sm font-medium">
                ¿Qué necesitás?
                <textarea
                  id="necesidad"
                  name="necesidad"
                  aria-invalid={Boolean(errores.necesidad)}
                  aria-describedby={errores.necesidad ? "necesidad-error" : undefined}
                  rows={4}
                  required
                  maxLength={5000}
                  className="field resize-y"
                />
                {errores.necesidad && (
                  <span id="necesidad-error" className="mt-1 block text-sm text-red-700" aria-live="polite">
                    {errores.necesidad}
                  </span>
                )}
              </label>
              <button type="submit" disabled={pending} className="cta w-full">
                {pending ? "Enviando consulta…" : "Consultar disponibilidad"}
              </button>
              <p
                role="status"
                aria-live="polite"
                className={`text-sm leading-6 ${error ? "text-red-700" : "text-slate-600"}`}
              >
                {mensaje || "Respondo personalmente. Sin compromiso."}
              </p>
            </div>
          </form>
        </div>
      </section>
    );
}
