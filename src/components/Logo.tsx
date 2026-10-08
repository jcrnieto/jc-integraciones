interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({ className = "h-12 w-auto sm:h-14" }: LogoProps) {
  return (
    <svg
      viewBox="220 430 1560 1180"
      className={`${className} transition-transform duration-200 group-hover:scale-105`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      aria-label="JC Integraciones"
    >
      <image
        href="/logo-integraciones.png"
        xlinkHref="/logo-integraciones.png"
        width="2000"
        height="2000"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}
