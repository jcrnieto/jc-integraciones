export const camposContacto = {
  nombre: { limite: 120, requerido: "Ingresá tu nombre." },
  empresa: { limite: 160, requerido: "Ingresá el nombre de tu empresa." },
  email: { limite: 254, requerido: "Ingresá tu email." },
  necesidad: { limite: 5000, requerido: "Contanos qué necesitás." },
} as const;

export type CampoContacto = keyof typeof camposContacto;
export type ErroresContacto = Partial<Record<CampoContacto, string>>;

export function validarContacto(data: unknown) {
  const valores = {} as Record<CampoContacto, string>;
  const errores: ErroresContacto = {};
  const entrada = data && typeof data === "object" && !Array.isArray(data)
    ? data as Record<string, unknown>
    : {};

  for (const campo of Object.keys(camposContacto) as CampoContacto[]) {
    const valor = entrada[campo];
    valores[campo] = typeof valor === "string" ? valor.trim() : "";
    if (!valores[campo]) {
      errores[campo] = camposContacto[campo].requerido;
    } else if (valores[campo].length > camposContacto[campo].limite) {
      errores[campo] = `Usá como máximo ${camposContacto[campo].limite} caracteres.`;
    } else if (campo === "nombre" && (
      !/\p{L}/u.test(valores[campo]) || !/^[\p{L}\p{M} .'’\-]+$/u.test(valores[campo])
    )) {
      errores[campo] = "Ingresá un nombre sin números ni símbolos. Podés usar espacios, puntos, guiones y apóstrofes.";
    } else if (campo === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores[campo])) {
      errores[campo] = "Ingresá un email válido, por ejemplo nombre@empresa.com.";
    }
  }

  return { valores, errores };
}
