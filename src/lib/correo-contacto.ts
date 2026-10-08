import type { CampoContacto } from "./contacto";

function escaparHtml(valor: string) {
  return valor.replace(/[&<>"']/g, (caracter) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[caracter]!);
}

export function crearCorreoContacto(consulta: Record<CampoContacto, string>) {
  const nombre = escaparHtml(consulta.nombre);
  const empresa = escaparHtml(consulta.empresa);
  const email = escaparHtml(consulta.email);
  const necesidad = escaparHtml(consulta.necesidad).replace(/\r\n|\r|\n/g, "<br />");
  const enlaceRespuesta = escaparHtml(`mailto:${encodeURIComponent(consulta.email)}`);

  return {
    subject: `Nueva consulta SAP Integration Suite · ${consulta.empresa}`.replace(/[\r\n]/g, " "),
    reply_to: consulta.email,
    text: [
      "Nueva consulta de disponibilidad", "SAP Integration Suite", "",
      `Nombre: ${consulta.nombre}`, `Empresa: ${consulta.empresa}`, `Email: ${consulta.email}`,
      "", "¿Qué necesita?", consulta.necesidad, "",
      "Respondé a este correo para contactar directamente al interesado.",
    ].join("\n"),
    html: `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Nueva consulta</title></head>
<body style="margin:0;padding:24px 12px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;">
      <tr><td style="padding:28px 24px;background:#0f172a;color:#ffffff;">
        <p style="margin:0 0 10px;font-size:12px;letter-spacing:1px;">SAP INTEGRATION SUITE</p>
        <h1 style="margin:0;font-size:24px;line-height:1.3;">Nueva consulta de disponibilidad</h1>
      </td></tr>
      <tr><td style="padding:24px;">
        <p style="margin:0 0 24px;line-height:1.6;color:#475569;">${nombre} de <strong>${empresa}</strong> completó el formulario de contacto.</p>
        <table width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;line-height:1.6;table-layout:fixed;overflow-wrap:anywhere;">
          <tr><th scope="row" width="80" align="left" style="padding:8px 12px 8px 0;color:#64748b;vertical-align:top;">Nombre</th><td style="padding:8px 0;">${nombre}</td></tr>
          <tr><th scope="row" align="left" style="padding:8px 12px 8px 0;color:#64748b;vertical-align:top;">Empresa</th><td style="padding:8px 0;">${empresa}</td></tr>
          <tr><th scope="row" align="left" style="padding:8px 12px 8px 0;color:#64748b;vertical-align:top;">Email</th><td style="padding:8px 0;"><a href="${enlaceRespuesta}" style="color:#2563eb;">${email}</a></td></tr>
        </table>
        <h2 style="margin:24px 0 12px;font-size:18px;">¿Qué necesita?</h2>
        <div style="padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;font-size:15px;line-height:1.7;overflow-wrap:anywhere;">${necesidad}</div>
        <p style="margin:24px 0 8px;"><a href="${enlaceRespuesta}" style="display:inline-block;padding:12px 20px;background:#2563eb;color:#ffffff;text-decoration:none;border-radius:6px;font-size:14px;font-weight:bold;">Responder consulta</a></p>
        <p style="margin:12px 0 0;font-size:12px;line-height:1.6;color:#64748b;">También podés usar “Responder” en tu correo: la respuesta irá directamente al interesado.</p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`,
  };
}
