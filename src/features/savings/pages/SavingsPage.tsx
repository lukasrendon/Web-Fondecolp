import Link from "next/link";
import { SAVING_PRODUCTS, SAVING_HIGHLIGHT } from "@/features/savings/model/products";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function SavingsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Ahorro" }]}
        eyebrow="Ahorro"
        title={SAVING_HIGHLIGHT}
        description="En el WordPress estas reglas viven dentro de imágenes, así que no se pueden buscar ni leer con lector de pantalla. Aquí el ahorro obligatorio (3%–10%) y el programado (6 a 12 meses) están en texto."
        actions={
          <Button asChild>
            <Link href={ROUTES.join}>Autorizar el aporte</Link>
          </Button>
        }
      />
      <Section>
        <Container className="grid gap-5 lg:grid-cols-2">
          {SAVING_PRODUCTS.map((product) => (
            <Card key={product.name}>
              <CardHeader>
                <Badge>{product.kind}</Badge>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted">
                  {product.points.map((point) => (
                    <li key={point}>· {point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>
      <Section className="bg-white">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl text-navy">Cómo se relaciona con el crédito</h2>
          <p className="mt-4 leading-7 text-muted">
            El aporte obligatorio te hace asociado hábil y respalda Crediaportes. El programado es
            voluntario, de libre destinación, con rendimientos solidarios. El detalle normativo sigue
            en el reglamento PDF; aquí no inventamos tasas de rentabilidad que el fondo no haya
            publicado como número.
          </p>
          <Button asChild variant="ghost" className="mt-4 px-0">
            <a
              href="https://fondecolp.com/wp-content/uploads/2024/01/Reglamento_Ahorro.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Leer reglamento de ahorro
            </a>
          </Button>
        </Container>
      </Section>
    </>
  );
}
