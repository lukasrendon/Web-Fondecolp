# FONDECOLP — sitio institucional

Propuesta de rediseño del [Fondo de Empleados de Colpensiones](https://fondecolp.com/). Conserva marca, servicios, PDFs oficiales, oficina virtual y pagos PSE. Mejora diseño, claridad y mantenimiento respecto al WordPress actual.

Esta carpeta es una **demostración funcional** para revisar si el fondo quiere salir de WordPress. El análisis detallado está también en `/propuesta`.

## Qué hay hoy en fondecolp.com

- **CMS:** WordPress 7.1.2, tema Astra 4.13.10, Contact Form 7.
- **Hosting:** Hostinger (hPanel, PHP 8.5, LiteSpeed).
- **Identidad:** árbol verde con frutos rojos, encabezado azul `#01488f`, acentos `#508f3d` / `#9eb63a`, fuente Alata.
- **Canales que no se tocan:** [oficina virtual](https://zonapfondecolp.cyfsoluciones.co/#/), [PSE](https://www.zonapagos.com/t_fondecolp/pagos.asp), WhatsApp `314 438 2988`.

Problemas que justifican el rediseño: inicio reducido a tres imágenes; `lang="en-US"`; formulario de contacto con códigos de país de Reino Unido; página de Ahorro vacía; erratas; junta duplicada y desfasada; informes con el mismo PDF en dos botones.

## Qué incluye esta versión

- Inicio con mensaje institucional, simulador de cuota y pasos para asociarse.
- Comparador de las 6 líneas de crédito (tasas publicadas en el sitio actual).
- Ahorro, convenios, informes, órganos 2023–2025 y formulario colombiano.
- Español (`es-CO`), WhatsApp fijo, NIT y vigilancia de la Superintendencia visibles.

## Stack (lenguaje y herramientas)

| Capa | Elección | Por qué |
| --- | --- | --- |
| Lenguaje | **TypeScript** | Las tasas, plazos y textos quedan tipados. Un cambio de 0,8% M.V. no rompe el simulador en silencio. |
| Framework | **Next.js 15** | Sitio rápido, SEO, rutas por archivo. Se puede exportar estático o correr Node. |
| UI | **Tailwind + componentes tipo shadcn** | Diseño consistente sin un page builder. |
| Arquitectura | `src/app` → `src/features/<dominio>` → `src/shared` | Páginas delgadas. Contenido en `features/*/model`. |

No hay base de datos ni login: oficina virtual y PSE siguen en terceros. El formulario de contacto valida en `/api/contacto` (en producción se conecta SMTP de Hostinger, Resend o un webhook).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre [http://127.0.0.1:43217](http://127.0.0.1:43217).

```bash
npm run build
npm start
```

## Mantenimiento hacia adelante (vs WordPress en Hostinger)

**Editar contenido.** Tasas, junta, aliados y PDFs viven en archivos TypeScript de cada feature (`src/features/credit/model/credit-lines.ts`, etc.). Un cambio + despliegue. No hay que entrar al admin, actualizar plugins ni pelear con bloques de Astra.

**Publicar en Hostinger.** Tres caminos:

1. **Hosting Node.js o VPS de Hostinger** — `npm run build && npm start`. El dominio actual se apunta al nuevo servicio.
2. **Vercel / similar + DNS en Hostinger** — el dominio y el correo se quedan en Hostinger; el sitio queda en un host pensado para Next.js. Suele ser el camino más simple.
3. **Quedarse en WordPress** — posible, pero se hereda el mismo modelo que hoy: PHP, tema, plugins y backups. Esta demo no corre como plugin.

**Quién lo mantiene.** Un desarrollador (o esta misma base de código) para cambios de diseño y tasas. Si el equipo administrativo necesita editar noticias cada semana, el siguiente paso es un CMS liviano o WordPress *headless* solo para archivos y comunicados — no para armar la página entera.

**Qué no rehacer.** PDFs de estatutos, reglamentos y asamblea; CyF Soluciones; ZonaPagos; el NIT y los órganos de control. Se enlazan, no se duplican.

## Estructura

```
src/app/                 rutas y layout
src/features/            home, crédito, ahorro, membresía, convenios, informes…
src/shared/ui            botones, tarjetas, campos
src/shared/components    header, footer, WhatsApp
src/shared/lib           rutas, datos del fondo, utilidades
public/brand             logo oficial
```

## Nota legal

Marca, logo y textos institucionales pertenecen a FONDECOLP. Esta reconstrucción es una propuesta de diseño para el fondo, no un sitio oficial.
