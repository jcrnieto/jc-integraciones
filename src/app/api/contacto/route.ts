export async function POST(request: Request) {
    let data: Record<string, unknown>;
    try {
        data = await request.json();
    }
    catch {
        return Response.json({ error: "Solicitud inválida." }, { status: 400 });
    }
    const consulta: Record<string, string> = {};
    for (const [field, limit] of Object.entries({ nombre: 120, empresa: 160, email: 254, necesidad: 5000 })) {
        const value = data?.[field];
        if (typeof value !== "string" || !value.trim() || value.length > limit)
            return Response.json({ error: "Completá los campos con datos válidos." }, { status: 400 });
        consulta[field] = value.trim();
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(consulta.email))
        return Response.json({ error: "Ingresá un email válido." }, { status: 400 });
    const endpoint = process.env.CONTACT_WEBHOOK_URL;
    if (!endpoint)
        return Response.json({ error: "El contacto todavía no está configurado." }, { status: 503 });
    try {
        const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(consulta), signal: AbortSignal.timeout(10000) });
        if (!response.ok)
            throw new Error("Delivery failed");
        return Response.json({ ok: true });
    }
    catch {
        return Response.json({ error: "No se pudo enviar la consulta." }, { status: 502 });
    }
}
