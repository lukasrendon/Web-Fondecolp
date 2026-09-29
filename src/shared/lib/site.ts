import { ROUTES } from "@/shared/lib/routes";

export const SITE = {
  name: "FONDECOLP",
  legalName: "Fondo de Empleados de Colpensiones",
  shortDescription:
    "Fondo de empleados de Colpensiones: ahorro, crédito, bienestar y solidaridad para asociados y sus familias.",
  nit: "900.950.893-0",
  chamber: "s0050046 del 1 de marzo de 2016",
  supervisor: "Superintendencia de la Economía Solidaria",
  founded: "2016",
  phoneDisplay: "+57 314 438 2988",
  phoneTel: "+573144382988",
  email: "serviciofondecolp@gmail.com",
  whatsappUrl: "https://wa.me/573144382988",
  facebookUrl: "https://www.facebook.com/profile.php?id=100080463270618",
  instagramUrl: "https://www.instagram.com/fondecolp",
  officeUrl: "https://zonapfondecolp.cyfsoluciones.co/#/",
  pseUrl: "https://www.zonapagos.com/t_fondecolp/pagos.asp",
  cities: ["Bogotá", "Medellín", "Cartagena"],
  activity:
    "Actividad financiera de fondos de empleados y otras formas asociativas del sector solidario.",
} as const;

export const NAV = [
  { href: ROUTES.home, label: "Inicio" },
  {
    label: "El fondo",
    children: [
      { href: ROUTES.about, label: "Quiénes somos" },
      { href: ROUTES.governance, label: "Órganos de administración" },
      { href: ROUTES.reports, label: "Informes y asamblea" },
      { href: ROUTES.faq, label: "Preguntas frecuentes" },
      { href: ROUTES.pitch, label: "Presentación" },
      { href: ROUTES.map, label: "Mapa del sitio" },
      { href: ROUTES.proposal, label: "Análisis técnico" },
    ],
  },
  {
    label: "Servicios",
    children: [
      { href: ROUTES.savings, label: "Ahorro" },
      { href: ROUTES.credit, label: "Líneas de crédito" },
      { href: ROUTES.partners, label: "Convenios y aliados" },
    ],
  },
  { href: ROUTES.join, label: "Asóciate" },
  { href: ROUTES.contact, label: "Contáctanos" },
] as const;
