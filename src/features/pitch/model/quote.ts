export const QUOTE = {
  client: "Fondo de Empleados de Colpensiones — FONDECOLP",
  nit: "900.950.893-0",
  issued: "29 de septiembre de 2026",
  validUntil: "14 de octubre de 2026",
  currency: "COP",
  recommended: "B",
  options: [
    {
      id: "A",
      name: "Lanzamiento",
      price: 12_900_000,
      period: "pago único",
      note: "La web que ya recorrieron, publicada en su dominio y Hostinger.",
    },
    {
      id: "B",
      name: "Lanzamiento + 6 meses",
      price: 14_900_000,
      period: "pago del proyecto + acompañamiento",
      note: "La opción que yo cotizaría: no dejar el fondo solo el día que se apaga WordPress.",
    },
  ],
  monthly: 390_000,
  months: 6,
} as const;
