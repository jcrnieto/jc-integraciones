import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = "SAP Integration Suite para consultoras SAP | Juan Nietos";
const description = "Capacidad especializada y flexible en SAP Integration Suite para consultoras SAP que necesitan apoyo temporal en proyectos de integración.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} font-sans`}>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900">
        <a className="skip-link" href="#contenido">
          Ir al contenido
        </a>
        {children}
      </body>
    </html>
  );
}

