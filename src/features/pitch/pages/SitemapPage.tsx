import Link from "next/link";
import { SITE_MAP } from "@/features/pitch/model/sitemap";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/button";

export function SitemapPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Mapa del sitio" }]}
        eyebrow="Arquitectura de la web"
        title="Todas las puertas que un asociado puede abrir."
        description="Este es el mapa de la web pública propuesta. Oficina virtual y PSE siguen afuera, como enlaces, porque ya existen y no se rehacen en este proyecto."
        actions={
          <Button asChild variant="outline">
            <Link href={ROUTES.pitch}>Volver a la presentación</Link>
          </Button>
        }
      />
      <Section>
        <Container>
          <div className="mb-8 rounded-2xl bg-navy px-6 py-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Raíz</p>
            <Link href={ROUTES.home} className="font-display mt-1 block text-3xl hover:underline">
              fondecolp.com · Inicio
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {SITE_MAP.public.map((page) => (
              <article key={page.path} className="rounded-2xl border border-line bg-white p-5">
                <Link href={page.path} className="font-display text-xl text-navy hover:underline">
                  {page.name}
                </Link>
                <p className="mt-1 font-mono text-xs text-leaf">{page.path}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{page.purpose}</p>
                {"children" in page && page.children ? (
                  <ul className="mt-3 space-y-1 text-sm">
                    {page.children.map((child) => (
                      <li key={child.path}>
                        <Link href={child.path} className="text-navy hover:underline">
                          → {child.name}
                        </Link>
                        <span className="ml-2 font-mono text-xs text-muted">{child.path}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-navy">Fuera de este mapa (se enlazan, no se construyen)</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {SITE_MAP.external.map((item) => (
              <li key={item.name} className="rounded-2xl border border-line p-4">
                <p className="font-semibold text-navy">{item.name}</p>
                <p className="text-sm text-muted">{item.kind}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
