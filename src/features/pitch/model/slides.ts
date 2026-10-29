import { QUOTE } from "@/features/pitch/model/quote";
import { ROUTES } from "@/shared/lib/routes";
import { formatCop } from "@/shared/lib/utils";

const optionA = QUOTE.options[0];
const optionB = QUOTE.options[1];

/** Demo publicada. Solo se muestra en la presentación local. */
export const DEMO_URL = "https://fyltest.online/";

export type ScreenId =
  | "home"
  | "credit"
  | "savings"
  | "partners"
  | "join"
  | "contact";

export type Slide =
  | {
      id: string;
      kind: "cover";
      eyebrow: string;
      title: string;
      subtitle: string;
    }
  | {
      id: string;
      kind: "compare";
      eyebrow: string;
      title: string;
      before: { label: string; points: string[] };
      after: { label: string; points: string[] };
    }
  | {
      id: string;
      kind: "screen";
      eyebrow: string;
      title: string;
      description: string;
      improvements: string[];
      screen: ScreenId;
      href: string;
      hrefLabel: string;
    }
  | {
      id: string;
      kind: "grid";
      eyebrow: string;
      title: string;
      description: string;
      items: { title: string; text: string }[];
    }
  | {
      id: string;
      kind: "quote";
      eyebrow: string;
      title: string;
      description: string;
      highlights: string[];
    }
  | {
      id: string;
      kind: "close";
      eyebrow: string;
      title: string;
      description: string;
      bullets: string[];
    };

export const SLIDES: Slide[] = [
  {
    id: "cover",
    kind: "cover",
    eyebrow: "Propuesta de remake · FONDECOLP",
    title: "Así puede quedar la nueva fondecolp.com",
    subtitle:
      "Una demostración navegable del sitio institucional: misma marca, mismos servicios y canales de pago, con claridad para el asociado y mantenimiento más simple que WordPress.",
  },
  {
    id: "problem",
    kind: "compare",
    eyebrow: "Diagnóstico",
    title: "Hoy el sitio cumple, pero no comunica.",
    before: {
      label: "fondecolp.com actual",
      points: [
        "Inicio reducido a 3 imágenes con el copy atrapado dentro",
        "Crédito como párrafo; ahorro en infografías ilegibles",
        "Erratas, junta desfasada y mantenimiento atado a WordPress",
      ],
    },
    after: {
      label: "Propuesta de remake",
      points: [
        "Inicio con mensaje claro + simulador de cuota",
        "Comparador de 6 líneas y ahorro en texto real",
        "Diseño institucional, móvil primero y contenido tipado",
      ],
    },
  },
  {
    id: "home",
    kind: "screen",
    eyebrow: "Pantalla 01 · Inicio",
    title: "La home deja de ser un slider.",
    description:
      "El asociado ve de inmediato qué ofrece el fondo, puede simular una cuota y encuentra el camino para asociarse — sin depender de leer texto dentro de una imagen.",
    improvements: [
      "Propuesta de valor en texto indexable (SEO y accesibilidad)",
      "Simulador de crédito en el primer viewport",
      "Servicios, campañas GES y pasos para asociarse",
      "Oficina virtual y PSE siguen visibles y fuera del remake",
    ],
    screen: "home",
    href: ROUTES.home,
    hrefLabel: "Abrir inicio",
  },
  {
    id: "credit",
    kind: "screen",
    eyebrow: "Pantalla 02 · Crédito",
    title: "Seis líneas que sí se pueden comparar.",
    description:
      "Las tasas publicadas hoy (desde 0,8% M.V.) pasan a una tabla y fichas claras, con el simulador y los formatos PDF nombrados.",
    improvements: [
      "Tabla comparativa: monto, tasa, plazo y antigüedad",
      "Fichas por línea con garantía y condiciones",
      "Simulador reutilizable en inicio y en crédito",
      "Enlaces a formatos oficiales sin rehacerlos",
    ],
    screen: "credit",
    href: ROUTES.credit,
    hrefLabel: "Abrir crédito",
  },
  {
    id: "savings",
    kind: "screen",
    eyebrow: "Pantalla 03 · Ahorro",
    title: "El ahorro deja las infografías.",
    description:
      "Aporte obligatorio 3%–10% del sueldo y programado 6–12 meses, en texto que se puede buscar, copiar y leer con lector de pantalla.",
    improvements: [
      "Dos productos claros: obligatorio y programado",
      "Reglas en texto, no en PNG",
      "Relación con Crediaportes explicada",
      "Enlace al reglamento PDF oficial",
    ],
    screen: "savings",
    href: ROUTES.savings,
    hrefLabel: "Abrir ahorro",
  },
  {
    id: "partners",
    kind: "screen",
    eyebrow: "Pantalla 04 · Convenios",
    title: "Convenios y parques GES con ficha propia.",
    description:
      "Aliados de salud, seguros y bienestar, más campañas de Salitre, Mundo Aventura y Hacienda Nápoles con detalle y CTA.",
    improvements: [
      "Listado de aliados por categoría",
      "Páginas de campaña con condiciones vigentes",
      "Piezas gráficas sin romper el layout",
      "Ruta clara hacia asociación o WhatsApp",
    ],
    screen: "partners",
    href: ROUTES.partners,
    hrefLabel: "Abrir convenios",
  },
  {
    id: "join",
    kind: "screen",
    eyebrow: "Pantalla 05 · Asóciate",
    title: "Asociarse en cuatro pasos visibles.",
    description:
      "Beneficios, documentos y proceso ordenado. El formulario de afiliación guía al asociado con habeas data claro.",
    improvements: [
      "Proceso en 4 pasos, sin jerga de admin",
      "Lista de documentos que debe allegar",
      "Formulario de afiliación con habeas data",
      "CTA a WhatsApp y contacto institucional",
    ],
    screen: "join",
    href: ROUTES.join,
    hrefLabel: "Abrir asóciate",
  },
  {
    id: "contact",
    kind: "screen",
    eyebrow: "Pantalla 06 · Contacto y confianza",
    title: "Contacto, FAQ y transparencia.",
    description:
      "WhatsApp visible, formulario con privacidad, preguntas frecuentes (M.V., asociado hábil, afianzadora) e informes sin PDFs duplicados.",
    improvements: [
      "Formulario de contacto con privacidad",
      "FAQ institucional y páginas legales",
      "Órganos 2023–2025 e informes descargables",
      "WhatsApp visible desde cualquier página",
    ],
    screen: "contact",
    href: ROUTES.contact,
    hrefLabel: "Abrir contacto",
  },
  {
    id: "untouched",
    kind: "grid",
    eyebrow: "Alcance responsable",
    title: "Qué mejora y qué no se toca.",
    description:
      "El remake es la cara pública del fondo. Los sistemas transaccionales y los documentos oficiales se reutilizan.",
    items: [
      {
        title: "Se reconstruye",
        text: "Diseño, navegación, simulador, textos, formularios, FAQ, privacidad y versión móvil.",
      },
      {
        title: "Oficina virtual",
        text: "Sigue en CyF Soluciones. Solo se enlaza, no se reescribe.",
      },
      {
        title: "Pagos PSE",
        text: "ZonaPagos permanece igual. El botón PSE no cambia de dueño.",
      },
      {
        title: "PDFs oficiales",
        text: "Estatutos, reglamentos, asamblea y formatos de crédito se enlazan.",
      },
    ],
  },
  {
    id: "quote",
    kind: "quote",
    eyebrow: "Propuesta económica",
    title: "Dos caminos claros, tarifa de primer caso.",
    description: `El valor de referencia del remake es ${formatCop(QUOTE.listLaunch)}. Como FONDECOLP abre la puerta del portafolio, se aplica una tarifa especial. IVA no incluido. Válida hasta el ${QUOTE.validUntil}.`,
    highlights: [
      `Mantenimiento después del año: ${formatCop(QUOTE.monthlyAfter)} / mes`,
      "Hosting a nuestro cargo; el dominio permanece del fondo",
      "Oficina virtual y Pagos PSE no se rehacen",
      `~${QUOTE.hours} h de trabajo · tarifa de portafolio, no de lista`,
    ],
  },
  {
    id: "close",
    kind: "close",
    eyebrow: "Siguiente paso",
    title: "Recorran la demo y decidamos alcance.",
    description:
      "Esta presentación acompaña un sitio ya navegable. El siguiente paso es revisar textos, elegir opción y firmar la propuesta económica.",
    bullets: [
      "Recorrer el sitio demo con la junta o gerencia",
      "Confirmar interlocutor de textos y tarifas",
      `Elegir ${optionA.name} (${formatCop(optionA.price)}) o ${optionB.name} (${formatCop(optionB.price)})`,
      `Revisar la propuesta económica (mantenimiento ${formatCop(QUOTE.monthlyAfter)} / mes)`,
    ],
  },
];
