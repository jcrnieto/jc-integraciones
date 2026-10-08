"use client";
import { useState, type FormEvent } from "react";

export default function Contacto() {
    const [pending, setPending] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState(false);
    async function enviar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        setPending(true);
        setMensaje("");
        setError(false);
        try {
            const response = await fetch("/api/contacto", { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(form))), headers: { "Content-Type": "application/json" } });
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
            onSubmit={enviar}
            className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <label htmlFor="nombre" className="text-sm font-medium">
                Nombre
                <input
                  id="nombre"
                  name="nombre"
                  autoComplete="name"
                  required
                  maxLength={120}
                  className="field"
                />
              </label>
              <label htmlFor="empresa" className="text-sm font-medium">
                Empresa
                <input
                  id="empresa"
                  name="empresa"
                  autoComplete="organization"
                  required
                  maxLength={160}
                  className="field"
                />
              </label>
              <label htmlFor="email" className="text-sm font-medium">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="field"
                />
              </label>
              <label htmlFor="necesidad" className="text-sm font-medium">
                ¿Qué necesitás?
                <textarea
                  id="necesidad"
                  name="necesidad"
                  rows={4}
                  required
                  maxLength={5000}
                  className="field resize-y"
                />
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
