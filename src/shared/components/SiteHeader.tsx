"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, Landmark, CreditCard } from "lucide-react";
import { NAV, SITE } from "@/shared/lib/site";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/components/Layout";
import { cn } from "@/shared/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  if (pathname === ROUTES.pitch) return null;

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy-deep text-white/80">
        <Container className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs">
          <p>
            NIT {SITE.nit} · Vigilado por la {SITE.supervisor}
          </p>
          <div className="flex items-center gap-4">
            <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">
              {SITE.phoneDisplay}
            </a>
            <a href={SITE.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              Facebook
            </a>
            <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              Instagram
            </a>
            <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              WhatsApp
            </a>
          </div>
        </Container>
      </div>
      <div className="border-b border-white/10 bg-navy text-white">
        <Container className="flex h-[76px] items-center justify-between gap-4">
          <Link href={ROUTES.home} className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-paper p-1.5">
              <Image src="/brand/logo.png" alt="Logo FONDECOLP" width={40} height={37} priority />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg">FONDECOLP</span>
              <span className="hidden text-[11px] tracking-wide text-white/70 sm:block">
                Fondo de empleados de Colpensiones
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              "children" in item ? (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white">
                    {item.label}
                    <ChevronDown className="size-3.5" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-20 min-w-56 translate-y-1 rounded-2xl bg-white p-2 text-navy opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-xl px-3 py-2 text-sm hover:bg-navy-soft",
                          isActive(pathname, child.href) && "bg-leaf-soft text-leaf-deep",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white",
                    isActive(pathname, item.href) && "bg-white/15 text-white",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild size="sm" variant="outline">
              <a href={SITE.officeUrl} target="_blank" rel="noreferrer">
                <Landmark className="size-3.5" />
                Oficina virtual
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={SITE.pseUrl} target="_blank" rel="noreferrer">
                <CreditCard className="size-3.5" />
                Pagos PSE
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </Container>
        {open ? (
          <div className="border-t border-white/10 bg-navy-deep lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {NAV.map((item) =>
                "children" in item ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2 text-left text-sm font-medium"
                      onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                    >
                      {item.label}
                      <ChevronDown className={cn("size-4 transition", expanded === item.label && "rotate-180")} />
                    </button>
                    {expanded === item.label
                      ? item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 pl-3 text-sm text-white/75"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))
                      : null}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button asChild size="sm" variant="outline">
                  <a href={SITE.officeUrl} target="_blank" rel="noreferrer">
                    Oficina virtual
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={SITE.pseUrl} target="_blank" rel="noreferrer">
                    Pagos PSE
                  </a>
                </Button>
              </div>
            </Container>
          </div>
        ) : null}
      </div>
    </header>
  );
}
