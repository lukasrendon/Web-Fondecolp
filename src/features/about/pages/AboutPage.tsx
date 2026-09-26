import Link from "next/link";
import { STATUTES } from "@/features/reports/model/documents";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { SITE } from "@/shared/lib/site";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Quiénes somos" }]}
        eyebrow="Quiénes somos"
        title="Un fondo de empleados, no un banco con logo verde."
        description="FONDECOLP es una empresa asociativa de derecho privado, sin ánimo de lucro, de responsabilidad limitada, con número de asociados y patrimonio variable e ilimitado."
        actions={
          <>
            <Button asChild>
              <Link href={ROUTES.join}>Asóciate</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={ROUTES.governance}>Ver órganos de control</Link>
            </Button>
          </>
        }
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted leading-7">
            <p>
              Su organización y funcionamiento se rigen por estatutos internos y por la legislación
              sobre fondos de empleados, bajo inspección, vigilancia y control de la{" "}
              {SITE.supervisor}.
            </p>
            <p>
              Nacimos para que las personas vinculadas a Colpensiones tengan un vehículo propio de
              ahorro, crédito, previsión, educación y solidaridad. El asociado no es un cliente: es
              dueño del fondo.
            </p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {[
              ["NIT", SITE.nit],
              ["Cámara de Comercio", SITE.chamber],
              ["Naturaleza", "Sin ánimo de lucro"],
              ["Actividad", SITE.activity],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white p-5 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-wide text-leaf">{label}</dt>
                <dd className="mt-2 text-sm leading-6 text-navy">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-navy">Normativa que puedes leer</h2>
          <p className="mt-3 max-w-2xl text-muted">
            En el sitio actual estos PDFs están mezclados con tablas de junta. Aquí cada reglamento
            tiene propósito y descarga visible.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {STATUTES.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      Descargar PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
