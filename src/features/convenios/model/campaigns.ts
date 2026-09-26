export type ParkCombo = {
  name: string;
  badge?: string;
  price: number;
  gatePrice?: number;
  includes: string;
  details: string;
  excludes?: string;
};

export type ParkCampaign = {
  slug: string;
  park: string;
  partner: "GES";
  cityHint: string;
  headline: string;
  image: string;
  imageAlt: string;
  combos: ParkCombo[];
  rows?: { plan: string; adult: number; child: number; details: string; badge?: string }[];
};

export const PARK_CAMPAIGNS: ParkCampaign[] = [
  {
    slug: "salitre-magico",
    park: "Salitre Mágico",
    partner: "GES",
    cityHint: "Bogotá",
    headline: "Vive la diversión extrema con las mejores tarifas",
    image: "/convenios/salitre-magico.jpg",
    imageAlt: "Campaña GES Salitre Mágico: Combo Nitro y Combo Kids",
    combos: [
      {
        name: "Combo Nitro",
        badge: "Nitro",
        price: 89_000,
        gatePrice: 123_900,
        includes: "Pasaporte nitro + seguro de lluvia + alimentación",
        details:
          "Acceso a todas las atracciones, perro BigDogger, papas francesas 90 g, gaseosa 16 oz y seguro de lluvia.",
        excludes: "Karts, chocones, castillo del terror, juegos de destreza y Fast Pass.",
      },
      {
        name: "Combo Kids",
        badge: "Kids",
        price: 70_000,
        gatePrice: 101_900,
        includes: "Pasaporte kids + seguro de lluvia + alimentación",
        details:
          "Acceso a todas las atracciones infantiles, perro BigDogger, papas francesas 90 g, gaseosa 16 oz y seguro de lluvia.",
        excludes: "Karts, chocones, castillo del terror, juegos de destreza y Fast Pass.",
      },
    ],
  },
  {
    slug: "mundo-aventura",
    park: "Mundo Aventura",
    partner: "GES",
    cityHint: "Bogotá",
    headline: "Vive días de aventura y diversión con las mejores tarifas",
    image: "/convenios/mundo-aventura.jpg",
    imageAlt: "Campaña GES Mundo Aventura: Combo Gold y Combo Silver",
    combos: [
      {
        name: "Combo Gold",
        badge: "Gold",
        price: 89_000,
        gatePrice: 126_000,
        includes: "Pasaporte gold + alimentación + juego de destreza",
        details:
          "Acceso a 33 atracciones, perro caliente, jugo 188 ml, uso en destreza y caño twist.",
        excludes: "Sky Coaster, Xtreme, paseo a caballo y juegos de destreza.",
      },
      {
        name: "Combo Silver",
        badge: "Silver",
        price: 78_000,
        gatePrice: 119_000,
        includes: "Pasaporte silver + alimentación + juego de destreza",
        details:
          "Acceso a 29 atracciones, perro caliente, jugo 188 ml, críspetas pequeñas y uso en destreza.",
        excludes: "Crazy Jump, Air Race, Sky Coaster, Xtreme, Quantum, Gravity, paseo a caballo y juegos de destreza.",
      },
    ],
  },
  {
    slug: "hacienda-napoles",
    park: "Hacienda Nápoles",
    partner: "GES",
    cityHint: "Puerto Triunfo, Antioquia",
    headline: "Vive una aventura diferente con las mejores tarifas",
    image: "/convenios/hacienda-napoles.jpg",
    imageAlt: "Campaña GES Hacienda Nápoles: pasaportes Básico, Safari y Premium",
    combos: [],
    rows: [
      {
        plan: "Básico",
        adult: 96_100,
        child: 83_000,
        details: "Parque aventura jurásica, santuarios de fauna y museos.",
      },
      {
        plan: "Safari",
        adult: 155_100,
        child: 127_000,
        details: "Todas las atracciones del pasaporte básico, zona acuática Octopus y parque aventura acuática.",
      },
      {
        plan: "Premium",
        adult: 213_000,
        child: 179_000,
        details: "Todas las atracciones del pasaporte básico, safari, parque Congo y parque Mundo Pangea.",
        badge: "Nueva tarifa",
      },
    ],
  },
];

export function campaignBySlug(slug: string) {
  return PARK_CAMPAIGNS.find((item) => item.slug === slug);
}
