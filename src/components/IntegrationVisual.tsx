import type { CSSProperties } from "react";

const sistemas = [
  { nombre: "S/4HANA", x: 162, y: 96, icono: "sap", ruta: "M162 124 C162 175 230 144 250 224" },
  { nombre: "Sales Cloud", x: 100, y: 210, icono: "cloud", ruta: "M100 238 C148 276 192 230 239 258" },
  { nombre: "Service Cloud", x: 100, y: 340, icono: "cloud", ruta: "M100 340 C160 340 177 297 239 292" },
  { nombre: "QAD", x: 174, y: 452, icono: "app", ruta: "M174 424 C175 368 251 409 285 344" },
  { nombre: "APIs", x: 478, y: 96, icono: "api", ruta: "M478 124 C478 175 410 144 390 224" },
  { nombre: "HANA", x: 540, y: 210, icono: "database", ruta: "M540 238 C492 276 448 230 401 258" },
  { nombre: "Sistemas externos", x: 540, y: 340, icono: "api", ruta: "M540 340 C480 340 463 297 401 292" },
  { nombre: "Apps propias", x: 466, y: 452, icono: "app", ruta: "M466 424 C465 368 389 409 355 344" },
];

function Icono({ tipo }: { tipo: string }) {
  if (tipo === "sap") return <text textAnchor="middle" y="-4" fill="#93c5fd" fontSize="19" fontWeight="700">SAP</text>;
  return (
    <g fill="none" stroke="#93c5fd" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {tipo === "cloud" && <path d="M-13-6a6 6 0 0 1 0-12 9 9 0 0 1 17-2 6 6 0 0 1 8 11H-13Z" />}
      {tipo === "database" && <><ellipse cy="-19" rx="12" ry="4" /><path d="M-12-19v14c0 5 24 5 24 0v-14M-12-12c0 5 24 5 24 0" /></>}
      {tipo === "api" && <><path d="m-8-21-8 8 8 8m16-16 8 8-8 8M3-24-3-2" /></>}
      {tipo === "app" && <><rect x="-12" y="-24" width="24" height="20" rx="4" /><path d="M-12-17h24M-7-12h4m6 0h4M-7-8h4" /></>}
    </g>
  );
}

export default function IntegrationVisual() {
  return (
    <figure className="integration-visual relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-900/10">
      <svg viewBox="0 0 640 550" className="block h-auto w-full" fontFamily="Arial, Helvetica, sans-serif" role="img" aria-labelledby="integration-title integration-description">
        <title id="integration-title">SAP Integration Suite conecta tu ecosistema</title>
        <desc id="integration-description">Un núcleo central conecta S/4HANA, Sales Cloud, Service Cloud, QAD, APIs, HANA, sistemas externos y aplicaciones propias. Las líneas animadas representan el flujo de datos.</desc>
        <defs>
          <pattern id="integration-grid" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="matrix(1 .5 -1 .5 320 20)">
            <path d="M48 0H0V48" fill="none" stroke="#334155" strokeWidth=".6" opacity=".5" />
          </pattern>
          <linearGradient id="integration-tile" x2="0" y2="1">
            <stop stopColor="#26364e" /><stop offset="1" stopColor="#142034" />
          </linearGradient>
          <linearGradient id="integration-face" x2="0" y2="1">
            <stop stopColor="#1d4ed8" /><stop offset="1" stopColor="#172554" />
          </linearGradient>
          <linearGradient id="integration-top" x2="1" y2="1">
            <stop stopColor="#60a5fa" stopOpacity=".65" /><stop offset="1" stopColor="#1d4ed8" stopOpacity=".2" />
          </linearGradient>
          <radialGradient id="integration-halo">
            <stop stopColor="#2563eb" stopOpacity=".24" /><stop offset="1" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
          <filter id="integration-glow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <rect width="640" height="550" fill="#0f172a" />
        <rect width="640" height="550" fill="url(#integration-grid)" />
        <ellipse cx="320" cy="280" rx="245" ry="225" fill="url(#integration-halo)" />
        <g fill="none">
          {sistemas.map((sistema, indice) => (
            <g key={sistema.nombre}>
              <path d={sistema.ruta} stroke="#2563eb" strokeWidth="7" opacity=".16" />
              <path d={sistema.ruta} stroke="#3b82f6" strokeWidth="1.5" opacity=".8" />
              <path d={sistema.ruta} stroke="#bfdbfe" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 98" pathLength="100" className="integration-flow" style={{ "--flow-delay": `${indice * -.65}s` } as CSSProperties} />
            </g>
          ))}
        </g>
        {sistemas.map((sistema) => (
          <g key={sistema.nombre} transform={`translate(${sistema.x} ${sistema.y})`}>
            <path d="M-76 12 0-23 76 12 76 22 0 57-76 22Z" fill="#020617" opacity=".45" />
            <path d="M-76 0 0-35 76 0 76 8 0 43-76 8Z" fill="#172554" stroke="#334155" />
            <path d="M-76 0 0-35 76 0 0 35Z" fill="url(#integration-tile)" stroke="#475569" strokeWidth=".8" />
            <path d="M-40 27 0 45 40 27" stroke="#3b82f6" fill="none" opacity=".5" />
            <Icono tipo={sistema.icono} />
            <text y="17" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">{sistema.nombre}</text>
          </g>
        ))}
        <path d="m216 354 104-51 104 51-104 54Z" fill="#020617" opacity=".6" />
        <path d="m224 340 96-48 96 48v12l-96 48-96-48Z" fill="#172554" stroke="#3b82f6" />
        <path d="m224 340 96-48 96 48-96 48Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
        <g className="integration-core-glow" fill="none" stroke="#60a5fa" strokeWidth="5" filter="url(#integration-glow)">
          <path d="m230 220 90-45 90 45v105l-90 45-90-45Z" />
        </g>
        <path d="m230 220 90 45v105l-90-45Z" fill="url(#integration-face)" stroke="#60a5fa" strokeWidth="1.3" />
        <path d="m320 265 90-45v105l-90 45Z" fill="#172554" stroke="#60a5fa" strokeWidth="1.3" />
        <path d="m230 220 90-45 90 45-90 45Z" fill="url(#integration-top)" stroke="#93c5fd" strokeWidth="1.3" />
        <path d="m245 217 75-36 75 36-75 37Z" fill="none" stroke="#93c5fd" opacity=".35" />
        <g fill="#dbeafe"><circle cx="230" cy="257" r="3" /><circle cx="410" cy="257" r="3" /><circle cx="320" cy="265" r="3" /></g>
        <g transform="translate(320 289)">
          <path d="M-21 9a11 11 0 0 1-2-22 17 17 0 0 1 32-7 13 13 0 0 1 13 24H-21Z" fill="#1e3a8a" stroke="#dbeafe" strokeWidth="3" strokeLinejoin="round" />
          <text y="33" textAnchor="middle" fill="white" fontSize="18" fontWeight="700">SAP</text>
          <text y="52" textAnchor="middle" fill="#dbeafe" fontSize="14" fontWeight="600">Integration Suite</text>
        </g>
        <g fontSize="10" fill="#94a3b8" letterSpacing="1.6">
          <text x="28" y="32">ECOSISTEMA CONECTADO</text>
          <text x="320" y="525" textAnchor="middle">SAP ↔ NO-SAP · IFLOWS · APIS</text>
        </g>
      </svg>
      <figcaption className="sr-only">Diseño y desarrollo de integraciones entre SAP y sistemas externos.</figcaption>
    </figure>
  );
}
