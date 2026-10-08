# Landing — SAP Integration Suite

Landing de validación para consultoras SAP con Next.js, TypeScript y Tailwind CSS. Contenido basado en `AGENTS.md`.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

## Estructura

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── favicon.ico
│   └── api/contacto/route.ts
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Problemas.tsx
    ├── Servicios.tsx
    ├── ComoTrabajo.tsx
    ├── SobreMi.tsx
    ├── Contacto.tsx
    └── Footer.tsx
```

Todos los CTA llevan a `#contacto`. Los componentes se renderizan en el servidor, excepto el formulario, que gestiona estados de envío en el cliente.

## Recepción de consultas

Configurar en `.env.local` y en producción:

```dotenv
CONTACT_WEBHOOK_URL=https://tu-servicio-de-recepcion.example/contacto
```

El receptor debe aceptar POST JSON con `nombre`, `empresa`, `email` y `necesidad`, guardar o entregar la consulta y responder 2xx cuando la recepción sea exitosa. La URL permanece en el servidor.

Sin esta variable, el formulario devuelve un error; no simula envíos exitosos. Antes de publicar, conectar un receptor real y verificar la recepción. Las métricas del experimento todavía no tienen un proveedor configurado.

## Verificación

```bash
npm run lint
npm run build
```
