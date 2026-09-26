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
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
