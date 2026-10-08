import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container flex flex-col items-center gap-5 py-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#inicio"
          aria-label="JC Integraciones — Volver al inicio"
          className="relative block h-24 w-36 shrink-0 overflow-hidden lg:justify-self-start"
        >
          <Image
            src="/logo-integraciones.png"
            alt="JC Integraciones"
            width={2000}
            height={2000}
            sizes="184px"
            className="absolute -top-11 -left-6 h-auto w-[184px] max-w-none"
          />
        </a>

        <p className="text-center text-sm leading-6 text-slate-500">
          Consultor independiente · SAP Integration Suite
        </p>
        <p className="text-center text-sm leading-6 text-slate-500 lg:justify-self-end lg:text-right">
          © {new Date().getFullYear()} Juan Nietos
        </p>
      </div>
    </footer>
  );
}
