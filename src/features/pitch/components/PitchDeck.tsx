"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  Maximize2,
  X,
} from "lucide-react";
import { SLIDES, type Slide } from "@/features/pitch/model/slides";
import { QUOTE } from "@/features/pitch/model/quote";
import { ScreenMock } from "@/features/pitch/components/ScreenMocks";
import { downloadPitchPptx } from "@/features/pitch/lib/build-pptx";
import { ROUTES } from "@/shared/lib/routes";
import { cn, formatCop } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";

function SlideChrome({
  index,
  total,
  downloading,
  onDownload,
  children,
}: {
  index: number;
  total: number;
  downloading: boolean;
  onDownload: () => void;
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#0b3d6e] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 420px at 12% -8%, rgba(79,154,53,0.28), transparent 55%), radial-gradient(700px 380px at 92% 8%, rgba(196,163,90,0.22), transparent 50%), linear-gradient(165deg, #0e4a82 0%, #0b3d6e 48%, #145a96 100%)",
        }}
      />
      <div className="relative z-10 flex items-center justify-between gap-3 px-4 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-paper p-1">
            <Image src="/brand/logo.png" alt="" width={32} height={30} />
          </span>
          <div className="leading-tight">
            <p className="font-display text-sm">FONDECOLP</p>
            <p className="text-[11px] text-white/55">Propuesta de remake</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="hidden sm:inline">
            {index + 1} / {total}
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onDownload}
            disabled={downloading}
            aria-label="Descargar PowerPoint"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">
              {downloading ? "Generando…" : "Descargar PPT"}
            </span>
          </Button>
          <Link
            href={ROUTES.home}
            className="hidden items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/10 sm:inline-flex"
          >
            Salir al sitio
            <X className="size-3.5" />
          </Link>
        </div>
      </div>
      <div className="relative z-10 flex flex-1 flex-col px-4 pb-24 sm:px-8 lg:px-12">{children}</div>
    </div>
  );
}

function CoverSlide({ slide }: { slide: Extract<Slide, { kind: "cover" }> }) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-10 lg:flex-row lg:items-center lg:gap-16">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{slide.eyebrow}</p>
        <h1 className="font-display mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-white/75 sm:text-lg">{slide.subtitle}</p>
        <p className="mt-8 text-sm text-white/50">Usa ← → o los botones para avanzar</p>
      </div>
      <div className="w-full max-w-lg lg:max-w-md">
        <ScreenMock screen="home" />
      </div>
    </div>
  );
}

function CompareSlide({ slide }: { slide: Extract<Slide, { kind: "compare" }> }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{slide.eyebrow}</p>
      <h2 className="font-display mt-3 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">{slide.title}</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-berry">{slide.before.label}</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
            {slide.before.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-berry/80" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-leaf/30 bg-leaf/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-leaf">{slide.after.label}</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/85">
            {slide.after.points.map((point) => (
              <li key={point} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-leaf" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ScreenSlide({ slide }: { slide: Extract<Slide, { kind: "screen" }> }) {
  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{slide.eyebrow}</p>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {slide.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">{slide.description}</p>
        <ul className="mt-6 space-y-2.5">
          {slide.improvements.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-white/85">
              <Check className="mt-0.5 size-4 shrink-0 text-leaf" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="secondary" className="mt-8">
          <Link href={slide.href} target="_blank">
            {slide.hrefLabel}
            <ExternalLink className="size-3.5" />
          </Link>
        </Button>
      </div>
      <div>
        <ScreenMock screen={slide.screen} />
      </div>
    </div>
  );
}

function GridSlide({ slide }: { slide: Extract<Slide, { kind: "grid" }> }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{slide.eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl">{slide.title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{slide.description}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {slide.items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-display text-xl text-gold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/75">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuoteSlide({ slide }: { slide: Extract<Slide, { kind: "quote" }> }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{slide.eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl">{slide.title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">{slide.description}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {QUOTE.options.map((option) => {
          const recommended = option.id === QUOTE.recommended;
          return (
            <div
              key={option.id}
              className={cn(
                "rounded-2xl border p-5 sm:p-6",
                recommended
                  ? "border-leaf/40 bg-leaf/10"
                  : "border-white/10 bg-white/5",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  Opción {option.id}
                </p>
                {recommended ? <Badge tone="leaf">Recomendada</Badge> : null}
              </div>
              <h3 className="font-display mt-3 text-xl text-white sm:text-2xl">{option.name}</h3>
              <p className="mt-2 text-sm text-white/40 line-through">{formatCop(option.listPrice)}</p>
              <p className="font-display mt-1 text-3xl text-white sm:text-4xl">
                {formatCop(option.price)}
              </p>
              <p className="mt-2 text-sm text-white/60">{option.period}</p>
            </div>
          );
        })}
      </div>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {slide.highlights.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-white/80">
            <Check className="mt-0.5 size-4 shrink-0 text-leaf" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button asChild variant="secondary">
          <Link href={ROUTES.quote}>
            Ver detalle de la cotización
            <ExternalLink className="size-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function CloseSlide({ slide }: { slide: Extract<Slide, { kind: "close" }> }) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{slide.eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl">{slide.title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{slide.description}</p>
      <ol className="mt-8 grid gap-3 sm:grid-cols-2">
        {slide.bullets.map((item, i) => (
          <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="font-display text-2xl text-leaf">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 text-sm leading-6 text-white/85">{item}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href={ROUTES.home}>
            Recorrer el sitio demo
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href={ROUTES.quote}>Ver propuesta económica</Link>
        </Button>
        <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10">
          <Link href={ROUTES.map}>Mapa del sitio</Link>
        </Button>
      </div>
      <p className="mt-6 max-w-xl text-sm text-white/50">
        Para enviar por correo: descarga el PPT desde el botón superior o comparte el enlace de esta
        presentación junto con la demo navegable.
      </p>
    </div>
  );
}

function renderSlide(slide: Slide) {
  switch (slide.kind) {
    case "cover":
      return <CoverSlide slide={slide} />;
    case "compare":
      return <CompareSlide slide={slide} />;
    case "screen":
      return <ScreenSlide slide={slide} />;
    case "grid":
      return <GridSlide slide={slide} />;
    case "quote":
      return <QuoteSlide slide={slide} />;
    case "close":
      return <CloseSlide slide={slide} />;
  }
}

export function PitchDeck() {
  const [index, setIndex] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const total = SLIDES.length;
  const slide = SLIDES[index];

  const go = useCallback(
    (delta: number) => {
      setIndex((current) => Math.min(total - 1, Math.max(0, current + delta)));
    },
    [total],
  );

  const handleDownload = useCallback(async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      await downloadPitchPptx();
    } catch (error) {
      console.error(error);
      window.alert("No se pudo generar el PowerPoint. Intenta de nuevo.");
    } finally {
      setDownloading(false);
    }
  }, [downloading]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
        event.preventDefault();
        go(1);
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        go(-1);
      }
      if (event.key === "Home") {
        event.preventDefault();
        setIndex(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        setIndex(total - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, total]);

  return (
    <SlideChrome
      index={index}
      total={total}
      downloading={downloading}
      onDownload={() => {
        void handleDownload();
      }}
    >
      <div key={slide.id} className="flex flex-1 flex-col">
        {renderSlide(slide)}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#0b3d6e]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Diapositiva anterior"
          >
            <ArrowLeft className="size-4" />
            Anterior
          </Button>

          <div className="flex flex-1 items-center justify-center gap-1.5 overflow-x-auto px-2">
            {SLIDES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir a diapositiva ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  "size-2 shrink-0 rounded-full transition",
                  i === index ? "w-6 bg-leaf" : "bg-white/30 hover:bg-white/50",
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="hidden text-white/70 hover:bg-white/10 hover:text-white sm:inline-flex"
              onClick={() => {
                const el = document.documentElement;
                if (!document.fullscreenElement) {
                  void el.requestFullscreen?.().catch(() => undefined);
                } else {
                  void document.exitFullscreen?.().catch(() => undefined);
                }
              }}
              aria-label="Pantalla completa"
            >
              <Maximize2 className="size-4" />
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => go(1)}
              disabled={index === total - 1}
              aria-label="Diapositiva siguiente"
            >
              Siguiente
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}
