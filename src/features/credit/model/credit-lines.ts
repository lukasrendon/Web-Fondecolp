export type CreditLine = {
  slug: string;
  name: string;
  summary: string;
  amount: string;
  rateMv: number;
  termMonths: number;
  seniority: string;
  conditions: string;
  guarantee: string;
  highlight?: boolean;
};

export const CREDIT_LINES: CreditLine[] = [
  {
    slug: "credifacil",
    name: "CrediFácil",
    summary: "Montos ágiles de libre destinación para cubrimientos inmediatos.",
    amount: "Hasta el 80% del sueldo básico mensual",
    rateMv: 1.27,
    termMonths: 24,
    seniority: "6 meses Colpensiones / 1 mes FONDECOLP",
    conditions: "Débito automático bancario y/o descuento por Colpensiones",
    guarantee: "Afianzadora si el crédito supera el 90% del valor ahorrado",
  },
  {
    slug: "libre-destino",
    name: "Libre destino",
    summary: "Financia proyectos de bienestar para el asociado y su familia.",
    amount: "$1.000.000 hasta $40.000.000",
    rateMv: 1.2,
    termMonths: 48,
    seniority: "12 meses Colpensiones / 6 meses FONDECOLP",
    conditions: "Débito automático bancario y/o descuento por Colpensiones",
    guarantee: "Afianzadora si el crédito supera el 90% del valor ahorrado",
    highlight: true,
  },
  {
    slug: "prima-anticipada",
    name: "Prima anticipada",
    summary: "Anticipa tu prima con una de las tasas más competitivas del fondo.",
    amount: "70% de la prima, hasta $8.000.000",
    rateMv: 1.02,
    termMonths: 7,
    seniority: "12 meses Colpensiones / 3 meses FONDECOLP",
    conditions: "Débito automático bancario y/o descuento por Colpensiones",
    guarantee: "Afianzadora si el crédito supera el 90% del valor ahorrado",
  },
  {
    slug: "crediaportes",
    name: "Crediaportes",
    summary: "Usa tu ahorro y aportes como cupo, con la tasa más baja.",
    amount: "$1.000.000 hasta el 100% de aporte más ahorro (menos saldo vigente)",
    rateMv: 0.8,
    termMonths: 18,
    seniority: "12 meses Colpensiones / 6 meses FONDECOLP",
    conditions: "Débito automático bancario y/o descuento por Colpensiones",
    guarantee: "Afianzadora si el crédito supera el 90% del valor ahorrado",
    highlight: true,
  },
  {
    slug: "fonconvenios",
    name: "Fonconvenios",
    summary: "Compra con aliados del fondo: el desembolso va directo al proveedor.",
    amount: "Hasta 2 salarios, máximo $15.000.000",
    rateMv: 1.35,
    termMonths: 48,
    seniority: "12 meses Colpensiones / 3 meses FONDECOLP",
    conditions:
      "Solo aplica con convenios FONDECOLP. Desembolso al proveedor y descuento por débito o nómina",
    guarantee: "Afianzadora si el crédito supera el 90% del valor ahorrado",
  },
  {
    slug: "promocional",
    name: "Línea promocional",
    summary: "Condiciones especiales para campañas vigentes del fondo.",
    amount: "$1.000.000 a $10.000.000",
    rateMv: 0.82,
    termMonths: 36,
    seniority: "12 meses Colpensiones / 6 meses FONDECOLP",
    conditions: "Aplicable a campañas específicas",
    guarantee: "Afianzadora si el crédito supera el 90% del valor ahorrado",
  },
];

export const CREDIT_DOCS = [
  {
    name: "Guía de diligenciamiento",
    href: "https://fondecolp.com/wp-content/uploads/2025/03/GUIA-DILIGENCIAMIENTO-FORMATOS-DE-SOLICITUD-DE-CREDITO.pdf",
  },
  {
    name: "Solicitud de crédito",
    href: "https://fondecolp.com/wp-content/uploads/2025/03/Solicitud-de-Credito.pdf",
  },
  {
    name: "Autorización a centrales de riesgo",
    href: "https://fondecolp.com/wp-content/uploads/2025/03/Autorizacion-consulta-centrales-de-riesgo.pdf",
  },
  {
    name: "Libranza",
    href: "https://fondecolp.com/wp-content/uploads/2025/03/Libranza.pdf",
  },
  {
    name: "Pagaré y carta de instrucciones",
    href: "https://fondecolp.com/wp-content/uploads/2025/03/Pagare-y-Carta-de-instrucciones.pdf",
  },
  {
    name: "Formato Afiancol",
    href: "https://fondecolp.com/wp-content/uploads/2025/03/Formato-Afiancol.pdf",
  },
  {
    name: "Solicitud plan vida deudores",
    href: "https://fondecolp.com/wp-content/uploads/2025/03/Solicitud-plan-vida-deudores.pdf",
  },
];
