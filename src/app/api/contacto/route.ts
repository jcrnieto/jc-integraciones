import { validarContacto } from "@/lib/contacto";
import { crearCorreoContacto } from "@/lib/correo-contacto";

export async function POST(request: Request) {
    let data: unknown;
    try {
        data = await request.json();
    }
    catch {
        return Response.json({ error: "Solicitud inválida." }, { status: 400 });
    }
    const { valores: consulta, errores } = validarContacto(data);
    if (Object.keys(errores).length)
        return Response.json({ error: "Revisá los campos indicados.", errores }, { status: 400 });
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey)
        return Response.json({ error: "El contacto todavía no está configurado." }, { status: 503 });
    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify({
                from: process.env.CONTACT_EMAIL_FROM || "Juan Nietos · Consultas <onboarding@resend.dev>",
                to: [process.env.CONTACT_EMAIL_TO || "jcrnietos@gmail.com"],
                ...crearCorreoContacto(consulta),
            }),
            signal: AbortSignal.timeout(10000),
        });
        if (!response.ok) {
            console.error("El proveedor de correo rechazó la consulta.", { status: response.status });
            throw new Error("Delivery failed");
        }
        const resultado = await response.json();
        if (typeof resultado.id !== "string" || !resultado.id)
            throw new Error("Missing delivery confirmation");
        return Response.json({ ok: true });
    }
    catch {
        return Response.json({ error: "No se pudo enviar la consulta." }, { status: 502 });
    }
}
