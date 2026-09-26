import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/shared/lib/site";
import { ROUTES } from "@/shared/lib/routes";
import { Container } from "@/shared/components/Layout";

const columns = [
  {
    title: "Fondo",
    links: [
      { href: ROUTES.about, label: "Quiénes somos" },
      { href: ROUTES.governance, label: "Órganos de administración" },
      { href: ROUTES.reports, label: "Informes" },
      { href: ROUTES.proposal, label: "Análisis del sitio" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { href: ROUTES.savings, label: "Ahorro" },
      { href: ROUTES.credit, label: "Crédito" },
      { href: ROUTES.partners, label: "Convenios" },
    ],
  },
  {
    title: "Asociados",
    links: [
      { href: ROUTES.join, label: "Asóciate" },
      { href: ROUTES.joinForm, label: "Formulario de afiliación" },
      { href: ROUTES.contact, label: "Contáctanos" },
      { href: ROUTES.faq, label: "Preguntas frecuentes" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href={ROUTES.home} className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-paper p-1.5">
              <Image src="/brand/logo.png" alt="" width={40} height={37} />
            </span>
            <span>
              <span className="block font-display text-xl">FONDECOLP</span>
              <span className="text-sm text-white/70">{SITE.legalName}</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Empresa asociativa sin ánimo de lucro, vigilada por la {SITE.supervisor}. NIT {SITE.nit}.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{col.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href={ROUTES.privacy} className="hover:text-white">
              Privacidad
            </Link>
            <Link href={ROUTES.terms} className="hover:text-white">
              Términos
            </Link>
            <span>Cámara de Comercio {SITE.chamber}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
