import PptxGenJS from "pptxgenjs";
import { QUOTE } from "@/features/pitch/model/quote";
import { DEMO_URL, SLIDES } from "@/features/pitch/model/slides";
import { formatCop } from "@/shared/lib/utils";

const COLORS = {
  navy: "0B3D6E",
  navyDeep: "0E4A82",
  leaf: "4F9A35",
  gold: "C4A35A",
  berry: "C62828",
  white: "FFFFFF",
  muted: "D4DCD6",
  soft: "E8F4E1",
  card: "0A3A68",
  cardLeaf: "1A4F32",
};

const FILE_NAME = "FONDECOLP-propuesta-remake.pptx";

function addFooter(slide: PptxGenJS.Slide, page: number, total: number) {
  slide.addText("FONDECOLP · Propuesta de remake de fondecolp.com", {
    x: 0.5,
    y: 5.15,
    w: 7.5,
    h: 0.25,
    fontSize: 10,
    color: COLORS.muted,
    fontFace: "Calibri",
  });
  slide.addText(`${page} / ${total}`, {
    x: 8.2,
    y: 5.15,
    w: 1.3,
    h: 0.25,
    fontSize: 10,
    color: COLORS.muted,
    align: "right",
    fontFace: "Calibri",
  });
}

function bulletList(
  items: string[],
  opts: { color?: string; bulletColor?: string } = {},
): PptxGenJS.TextProps[] {
  return items.map((text) => ({
    text,
    options: {
      bullet: true,
      breakLine: true,
      color: opts.color ?? COLORS.white,
      fontSize: 14,
      paraSpaceAfter: 6,
      fontFace: "Calibri",
    },
  }));
}

export async function downloadPitchPptx() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "WIDE", width: 10, height: 5.625 });
  pptx.layout = "WIDE";
  pptx.author = "Propuesta FONDECOLP";
  pptx.title = "Propuesta de remake · fondecolp.com";
  pptx.subject = "Presentación de la nueva web institucional";

  const total = SLIDES.length;

  SLIDES.forEach((data, index) => {
    const slide = pptx.addSlide();
    slide.background = { color: COLORS.navyDeep };
    const page = index + 1;

    if (data.kind === "cover") {
      slide.addText(data.eyebrow, {
        x: 0.6,
        y: 1.2,
        w: 8.8,
        h: 0.35,
        fontSize: 12,
        color: COLORS.gold,
        bold: true,
        fontFace: "Calibri",
      });
      slide.addText(data.title, {
        x: 0.6,
        y: 1.65,
        w: 8.8,
        h: 1.4,
        fontSize: 32,
        color: COLORS.white,
        bold: true,
        fontFace: "Georgia",
      });
      slide.addText(data.subtitle, {
        x: 0.6,
        y: 3.2,
        w: 8.5,
        h: 0.9,
        fontSize: 15,
        color: COLORS.muted,
        fontFace: "Calibri",
      });
      slide.addText("Demo navegable: fyltest.online", {
        x: 0.6,
        y: 4.25,
        w: 8.5,
        h: 0.35,
        fontSize: 16,
        color: COLORS.gold,
        bold: true,
        fontFace: "Calibri",
        hyperlink: { url: DEMO_URL },
      });
    }

    if (data.kind === "compare") {
      slide.addText(data.eyebrow, {
        x: 0.5,
        y: 0.3,
        w: 9,
        h: 0.3,
        fontSize: 11,
        color: COLORS.gold,
        bold: true,
        fontFace: "Calibri",
      });
      slide.addText(data.title, {
        x: 0.5,
        y: 0.6,
        w: 9,
        h: 0.55,
        fontSize: 24,
        color: COLORS.white,
        bold: true,
        fontFace: "Georgia",
      });
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.5,
        y: 1.35,
        w: 4.35,
        h: 3.5,
        fill: { color: COLORS.card },
        rectRadius: 0.1,
      });
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.15,
        y: 1.35,
        w: 4.35,
        h: 3.5,
        fill: { color: COLORS.cardLeaf },
        rectRadius: 0.1,
      });
      slide.addText(data.before.label, {
        x: 0.7,
        y: 1.5,
        w: 4,
        h: 0.35,
        fontSize: 12,
        color: COLORS.berry,
        bold: true,
        fontFace: "Calibri",
      });
      slide.addText(bulletList(data.before.points), {
        x: 0.7,
        y: 1.95,
        w: 3.95,
        h: 2.7,
      });
      slide.addText(data.after.label, {
        x: 5.35,
        y: 1.5,
        w: 4,
        h: 0.35,
        fontSize: 12,
        color: COLORS.leaf,
        bold: true,
        fontFace: "Calibri",
      });
      slide.addText(bulletList(data.after.points), {
        x: 5.35,
        y: 1.95,
        w: 3.95,
        h: 2.7,
      });
    }

    if (data.kind === "screen") {
      slide.addText(data.eyebrow, {
        x: 0.5,
        y: 0.3,
        w: 9,
        h: 0.3,
        fontSize: 11,
        color: COLORS.gold,
        bold: true,
        fontFace: "Calibri",
      });
      slide.addText(data.title, {
        x: 0.5,
        y: 0.6,
        w: 9,
        h: 0.55,
        fontSize: 24,
        color: COLORS.white,
        bold: true,
        fontFace: "Georgia",
      });
      slide.addText(data.description, {
        x: 0.5,
        y: 1.25,
        w: 9,
        h: 0.85,
        fontSize: 14,
        color: COLORS.muted,
        fontFace: "Calibri",
      });
      slide.addText("Mejoras de esta pantalla", {
        x: 0.5,
        y: 2.2,
        w: 9,
        h: 0.3,
        fontSize: 12,
        color: COLORS.leaf,
        bold: true,
        fontFace: "Calibri",
      });
      slide.addText(bulletList(data.improvements), {
        x: 0.5,
        y: 2.55,
        w: 9,
        h: 2.2,
      });
    }

    if (data.kind === "grid") {
      slide.addText(data.eyebrow, {
        x: 0.5,
        y: 0.25,
        w: 9,
        h: 0.28,
        fontSize: 11,
        color: COLORS.gold,
        bold: true,
        fontFace: "Calibri",
      });
      slide.addText(data.title, {
        x: 0.5,
        y: 0.55,
        w: 9,
        h: 0.45,
        fontSize: 24,
        color: COLORS.white,
        bold: true,
        fontFace: "Georgia",
      });
      slide.addText(data.description, {
        x: 0.5,
        y: 1.05,
        w: 9,
        h: 0.45,
        fontSize: 13,
        color: COLORS.muted,
        fontFace: "Calibri",
      });
      data.items.forEach((item, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 0.5 + col * 4.7;
        const y = 1.65 + row * 1.55;
        slide.addShape(pptx.ShapeType.roundRect, {
          x,
          y,
          w: 4.4,
          h: 1.4,
          fill: { color: COLORS.card },
          rectRadius: 0.08,
        });
        slide.addText(item.title, {
          x: x + 0.2,
          y: y + 0.2,
          w: 4,
          h: 0.35,
          fontSize: 14,
          color: COLORS.gold,
          bold: true,
          fontFace: "Calibri",
        });
        slide.addText(item.text, {
          x: x + 0.2,
          y: y + 0.55,
          w: 4,
          h: 0.7,
          fontSize: 12,
          color: COLORS.muted,
          fontFace: "Calibri",
        });
      });
    }

    if (data.kind === "quote") {
      slide.addText(data.eyebrow, {
        x: 0.5,
        y: 0.22,
        w: 9,
        h: 0.26,
        fontSize: 11,
        color: COLORS.gold,
        bold: true,
        fontFace: "Calibri",
      });
      slide.addText(data.title, {
        x: 0.5,
        y: 0.48,
        w: 9,
        h: 0.4,
        fontSize: 22,
        color: COLORS.white,
        bold: true,
        fontFace: "Georgia",
      });
      slide.addText(data.description, {
        x: 0.5,
        y: 0.9,
        w: 9,
        h: 0.45,
        fontSize: 12,
        color: COLORS.muted,
        fontFace: "Calibri",
      });

      QUOTE.options.forEach((option, i) => {
        const x = 0.5 + i * 4.7;
        const recommended = option.id === QUOTE.recommended;
        slide.addShape(pptx.ShapeType.roundRect, {
          x,
          y: 1.45,
          w: 4.4,
          h: 2.55,
          fill: { color: recommended ? COLORS.cardLeaf : COLORS.card },
          rectRadius: 0.08,
        });
        slide.addText(
          recommended ? `Opción ${option.id} · Recomendada` : `Opción ${option.id}`,
          {
            x: x + 0.2,
            y: 1.58,
            w: 4,
            h: 0.26,
            fontSize: 11,
            color: recommended ? COLORS.leaf : COLORS.gold,
            bold: true,
            fontFace: "Calibri",
          },
        );
        slide.addText(option.name, {
          x: x + 0.2,
          y: 1.88,
          w: 4,
          h: 0.4,
          fontSize: 14,
          color: COLORS.white,
          bold: true,
          fontFace: "Calibri",
        });
        slide.addText(formatCop(option.listPrice), {
          x: x + 0.2,
          y: 2.3,
          w: 4,
          h: 0.22,
          fontSize: 11,
          color: "8A958E",
          fontFace: "Calibri",
        });
        slide.addText(formatCop(option.price), {
          x: x + 0.2,
          y: 2.5,
          w: 4,
          h: 0.4,
          fontSize: 22,
          color: COLORS.white,
          bold: true,
          fontFace: "Georgia",
        });
        slide.addText(option.period, {
          x: x + 0.2,
          y: 2.95,
          w: 4,
          h: 0.25,
          fontSize: 11,
          color: COLORS.muted,
          fontFace: "Calibri",
        });
        slide.addText(option.note, {
          x: x + 0.2,
          y: 3.25,
          w: 4,
          h: 0.6,
          fontSize: 10,
          color: COLORS.muted,
          fontFace: "Calibri",
        });
      });

      data.highlights.forEach((item, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 0.5 + col * 4.7;
        const y = 4.15 + row * 0.38;
        slide.addText(`•  ${item}`, {
          x,
          y,
          w: 4.4,
          h: 0.35,
          fontSize: 11,
          color: COLORS.muted,
          fontFace: "Calibri",
          valign: "middle",
        });
      });
    }

    if (data.kind === "close") {
      slide.addText(data.eyebrow, {
        x: 0.5,
        y: 0.35,
        w: 9,
        h: 0.3,
        fontSize: 11,
        color: COLORS.gold,
        bold: true,
        fontFace: "Calibri",
      });
      slide.addText(data.title, {
        x: 0.5,
        y: 0.7,
        w: 9,
        h: 0.7,
        fontSize: 26,
        color: COLORS.white,
        bold: true,
        fontFace: "Georgia",
      });
      slide.addText(data.description, {
        x: 0.5,
        y: 1.5,
        w: 9,
        h: 0.7,
        fontSize: 14,
        color: COLORS.muted,
        fontFace: "Calibri",
      });
      data.bullets.forEach((bullet, i) => {
        const y = 2.35 + i * 0.55;
        slide.addText(String(i + 1).padStart(2, "0"), {
          x: 0.5,
          y,
          w: 0.55,
          h: 0.4,
          fontSize: 16,
          color: COLORS.leaf,
          bold: true,
          fontFace: "Georgia",
        });
        slide.addText(bullet, {
          x: 1.15,
          y,
          w: 8.2,
          h: 0.4,
          fontSize: 14,
          color: COLORS.white,
          fontFace: "Calibri",
          valign: "middle",
        });
      });
      slide.addText("Demo navegable: fyltest.online", {
        x: 0.5,
        y: 4.6,
        w: 9,
        h: 0.35,
        fontSize: 14,
        color: COLORS.gold,
        bold: true,
        fontFace: "Calibri",
        hyperlink: { url: DEMO_URL },
      });
    }

    addFooter(slide, page, total);
  });

  await pptx.writeFile({ fileName: FILE_NAME });
  return FILE_NAME;
}
