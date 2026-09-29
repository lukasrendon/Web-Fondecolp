export const ROUTES = {
  home: "/",
  about: "/quienes-somos",
  governance: "/organos",
  reports: "/informes",
  join: "/asociate",
  joinForm: "/asociate/formulario",
  credit: "/credito",
  savings: "/ahorro",
  partners: "/convenios",
  contact: "/contacto",
  proposal: "/propuesta",
  privacy: "/privacidad",
  terms: "/terminos",
  faq: "/preguntas-frecuentes",
  pitch: "/presentacion",
  map: "/mapa",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
