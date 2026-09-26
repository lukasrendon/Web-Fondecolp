import type { HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)} {...props} />
  );
}

export function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-16 sm:py-20", className)} {...props} />;
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  crumbs?: { href?: string; label: string }[];
}) {
  return (
    <div className="hero-wash text-white">
      {crumbs?.length ? (
        <nav aria-label="Miga de pan" className="border-b border-white/10">
          <Container className="flex flex-wrap items-center gap-2 py-3 text-xs text-white/70">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            {crumbs.map((item) => (
              <span key={item.label} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </span>
            ))}
          </Container>
        </nav>
      ) : null}
      <Container className="py-16 sm:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display max-w-3xl text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{description}</p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </div>
  );
}
