export const SAVING_PRODUCTS = [
  {
    name: "Aporte periódico",
    kind: "Obligatorio",
    summary:
      "Cuota mensual que te hace asociado hábil y apalanca tu cupo de crédito. Es la base del fondo: tu ahorro trabaja para ti y para la comunidad.",
    points: [
      "Se descuenta por nómina de Colpensiones",
      "Construye antigüedad y capacidad de endeudamiento",
      "Respalda las líneas Crediaportes y Libre destino",
    ],
  },
  {
    name: "Ahorro voluntario",
    kind: "Voluntario",
    summary:
      "Ahorra con destinación específica: vivienda, educación, vacaciones o un colchón de emergencia, sin perder la cercanía del fondo.",
    points: [
      "Montos y plazos acordados con el asociado",
      "Complementa el aporte obligatorio",
      "Puede servir como garantía adicional de crédito",
    ],
  },
  {
    name: "Ahorro para destinaciones",
    kind: "Programado",
    summary:
      "El reglamento de ahorro define políticas para abrir cuentas con un propósito concreto, de forma ordenada y vigilada.",
    points: [
      "Condiciones publicadas en el Reglamento de Ahorro",
      "Acompañamiento del equipo FONDECOLP",
      "Pensado para hábitos constantes, no para especular",
    ],
  },
] as const;
