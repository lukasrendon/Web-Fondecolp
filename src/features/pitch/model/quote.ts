export const QUOTE = {
  client: "Fondo de Empleados de Colpensiones — FONDECOLP",
  nit: "900.950.893-0",
  issued: "29 de septiembre de 2026",
  validUntil: "14 de octubre de 2026",
  currency: "COP",
  recommended: "B",
  listLaunch: 12_900_000,
  listBundle: 15_300_000,
  options: [
    {
      id: "A",
      name: "Lanzamiento",
      listPrice: 12_900_000,
      price: 4_900_000,
      period: "pago único · tarifa primer caso",
      note: "Publicamos nosotros en el Hostinger que administramos. El dominio fondecolp.com sigue del fondo. El descuento es de primer caso; no es la tarifa de un segundo cliente.",
    },
    {
      id: "B",
      name: "Lanzamiento + mantenimiento 1 año",
      listPrice: 15_300_000,
      price: 7_500_000,
      period: "proyecto + 12 meses de acompañamiento",
      note: "La que conviene: publicamos y los acompañamos un año (tasas, flyers, PDFs, soporte). Después del año, el mantenimiento queda en $ 200.000 al mes si continúan.",
    },
  ],
  monthlyAfter: 200_000,
  courtesyMonths: 12,
  hours: 145,
  hourlyList: 89_000,
  hourlyFriend: 33_800,
} as const;

export const VALUE_BREAKDOWN = [
  {
    item: "Arquitectura y diseño institucional",
    hours: 28,
    text: "Identidad del fondo (no plantilla Astra), navegación, móvil y componentes reutilizables.",
  },
  {
    item: "12 secciones + 3 campañas GES",
    hours: 46,
    text: "Inicio, crédito, ahorro, convenios, asociación, informes, órganos, FAQ y legales, con el contenido real del fondo.",
  },
  {
    item: "Simulador, formularios y WhatsApp",
    hours: 16,
    text: "Cuota por línea, contacto con habeas data y preasociación guiada.",
  },
  {
    item: "Migración desde WordPress",
    hours: 22,
    text: "PDFs, redirecciones, publicación en Hostinger a nuestro cargo, sin romper oficina virtual ni PSE.",
  },
  {
    item: "Ajustes, prueba y garantía",
    hours: 33,
    text: "Dos rondas, recorrido móvil/escritorio, 30 días por defectos de lo entregado.",
  },
] as const;
