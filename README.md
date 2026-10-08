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

Las consultas se envían desde el servidor mediante [Resend](https://resend.com/docs/api-reference/emails/send-email), sin dependencias adicionales. El destinatario inicial es `jcrnietos@gmail.com`.

1. Crear una cuenta en Resend usando **jcrnietos@gmail.com**. El remitente de prueba `onboarding@resend.dev` solo permite enviar a la dirección de la propia cuenta ([restricción de pruebas](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain)).
2. Crear una API key con permiso de envío en https://resend.com/api-keys.
3. Copiar `.env.example` a `.env.local` y completar `RESEND_API_KEY` allí. No compartir la clave ni subir `.env.local` a Git.
4. Reiniciar `npm run dev`, completar el formulario y verificar la recepción en Gmail, incluyendo spam.

```dotenv
RESEND_API_KEY=tu_clave_de_resend
CONTACT_EMAIL_TO=jcrnietos@gmail.com
CONTACT_EMAIL_FROM="Juan Nietos · Consultas <onboarding@resend.dev>"
```

El correo incluye asunto con la empresa, nombre, empresa, email y consulta con sus saltos de línea, en HTML y texto plano. El botón “Responder consulta” y la función “Responder” de Gmail dirigen la respuesta al email del interesado.

Sin una clave configurada o si el proveedor rechaza el envío, el formulario muestra un error y conserva los datos. El éxito indica que Resend aceptó el correo; la entrega efectiva debe verificarse en la bandeja y en el panel de Resend.

Al publicar, configurar las mismas variables en el hosting. Para reemplazar el destinatario personal, cambiar `CONTACT_EMAIL_TO`; para usar un remitente profesional, verificar su dominio en Resend y actualizar `CONTACT_EMAIL_FROM`. Las métricas del experimento todavía no tienen un proveedor configurado.

## Verificación

```bash
npm run lint
npm run build
```
