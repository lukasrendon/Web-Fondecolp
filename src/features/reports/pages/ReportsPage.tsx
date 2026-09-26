import { REPORTS } from "@/features/reports/model/documents";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function ReportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Informes y asamblea"
        title="La rendición de cuentas no debería ser un archivo con el mismo enlace dos veces."
        description="En el WordPress, convocatoria y reglamento de asamblea 2025 apuntan al mismo PDF. Aquí cada documento tiene título, año y descarga."
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-2">
          {REPORTS.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
              <Card className="h-full transition hover:border-leaf/40">
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-wide text-leaf">{item.year}</p>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>Abrir PDF original publicado por FONDECOLP</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </Container>
      </Section>
    </>
  );
}
