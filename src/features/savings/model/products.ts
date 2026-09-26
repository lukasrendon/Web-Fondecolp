export const SAVING_PRODUCTS = [
  {
    name: "Ahorro obligatorio",
    kind: "Aporte permanente",
    summary:
      "Es el aporte mensual permanente, entre el 3% y el 10% del sueldo básico. Te hace asociado hábil y apalanca el cupo de crédito.",
    points: [
      "Requiere autorización del asociado (descuento por nómina).",
      "Permite cambiar el porcentaje de ahorro en el tiempo.",
      "Al retiro, la devolución es del 100% de los aportes más rendimientos solidarios.",
      "Es la base de líneas como Crediaportes.",
    ],
  },
  {
    name: "Ahorro programado",
    kind: "Voluntario",
    summary:
      "Ahorro voluntario de libre destinación que genera rendimientos solidarios, con plazo de 6 a 12 meses.",
    points: [
      "Plazo mínimo 6 meses y máximo 12 meses.",
      "La devolución se hace dentro de los 10 días hábiles siguientes a la solicitud.",
      "A los 6 meses puedes pedir la devolución una sola vez.",
      "Pasados los 6 meses, solo entre los meses 9 y 12 de haber iniciado el ahorro.",
    ],
  },
] as const;

export const SAVING_HIGHLIGHT =
  "Ahorra desde el 3% y hasta el 10% de tu salario básico mensual.";
