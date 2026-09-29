export const SITE_MAP = {
  public: [
    {
      name: "Inicio",
      path: "/",
      purpose: "Promesa del fondo, simulador, campañas GES y pasos para asociarse.",
    },
    {
      name: "Quiénes somos",
      path: "/quienes-somos",
      purpose: "Naturaleza jurídica, NIT, estatutos y reglamentos.",
    },
    {
      name: "Órganos",
      path: "/organos",
      purpose: "Junta, revisoría, control social y apelaciones 2023–2025.",
    },
    {
      name: "Informes",
      path: "/informes",
      purpose: "Asamblea, estados financieros y certificados descargables.",
    },
    {
      name: "Ahorro",
      path: "/ahorro",
      purpose: "Aporte 3%–10% y ahorro programado 6–12 meses.",
    },
    {
      name: "Crédito",
      path: "/credito",
      purpose: "Seis líneas, comparador, simulador y formatos PDF.",
    },
    {
      name: "Convenios",
      path: "/convenios",
      purpose: "Aliados de salud, seguros, bienestar y parques GES.",
      children: [
        { name: "Salitre Mágico", path: "/convenios/salitre-magico" },
        { name: "Mundo Aventura", path: "/convenios/mundo-aventura" },
        { name: "Hacienda Nápoles", path: "/convenios/hacienda-napoles" },
      ],
    },
    {
      name: "Asóciate",
      path: "/asociate",
      purpose: "Beneficios, documentos y proceso en 4 pasos.",
      children: [{ name: "Formulario", path: "/asociate/formulario" }],
    },
    {
      name: "Contáctanos",
      path: "/contacto",
      purpose: "WhatsApp, correo y formulario con habeas data.",
    },
    {
      name: "Preguntas frecuentes",
      path: "/preguntas-frecuentes",
      purpose: "M.V., asociado hábil, afianzadora y canales transaccionales.",
    },
    {
      name: "Privacidad y términos",
      path: "/privacidad",
      purpose: "Habeas data y condiciones de uso del portal.",
    },
  ],
  external: [
    { name: "Oficina virtual", kind: "CyF Soluciones — no se reconstruye" },
    { name: "Pagos PSE", kind: "ZonaPagos — no se reconstruye" },
    { name: "WhatsApp", kind: "314 438 2988" },
    { name: "PDFs oficiales", kind: "Estatutos, reglamentos, asamblea, crédito" },
  ],
} as const;

export const SCOPE_PACKAGES = [
  {
    name: "Lanzamiento",
    tag: "Sitio v1",
    summary: "Publicar la web que ya recorrieron, con su contenido oficial y el dominio actual.",
    includes: [
      "Hasta 12 secciones (las del mapa) más fichas de campañas vigentes",
      "Simulador de crédito, formularios y WhatsApp",
      "Paso de WordPress a la web nueva sin tocar oficina virtual ni PSE",
      "Una ronda de ajustes de copy y tarifas después de su revisión",
      "Publicación en el hosting que acuerden y redirecciones de URLs viejas",
    ],
  },
  {
    name: "Acompañamiento",
    tag: "6 meses",
    summary: "El fondo no se queda solo el día del lanzamiento.",
    includes: [
      "Todo lo del Lanzamiento",
      "Hasta 4 actualizaciones de contenido al mes (tasas, junta, campañas, PDFs)",
      "Subida de piezas de convenios como las de GES",
      "Soporte por WhatsApp en horario hábil, con tiempo de respuesta acordado",
      "Copia de seguridad y vigilancia básica de que el sitio esté en línea",
    ],
  },
  {
    name: "Evolución",
    tag: "A futuro",
    summary: "No entra en el primer contrato. Se cotiza aparte cuando el v1 ya esté vivo.",
    includes: [
      "Panel para que ellos editen noticias sin código",
      "Solicitud de crédito 100% en línea (no solo PDF)",
      "Correo @fondecolp.com y política de datos revisada por su abogado",
      "Blog, testimonios o app",
    ],
  },
] as const;
