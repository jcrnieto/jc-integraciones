import type { Metadata } from "next";
import "./globals.css";
const title = "SAP Integration Suite para consultoras SAP | Juan Nietos";
const description = "Capacidad especializada y flexible en SAP Integration Suite para consultoras SAP que necesitan apoyo temporal en proyectos de integración.";
export const metadata: Metadata = { title, description, openGraph: { title, description, type: "website", locale: "es_LA" } };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
      <html lang="es">
        <body>
          <a className="skip-link" href="#contenido">
            Ir al contenido
          </a>
          {children}
        </body>
      </html>
    );
}
