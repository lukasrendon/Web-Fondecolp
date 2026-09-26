import Link from "next/link";
import { SAVING_PRODUCTS } from "@/features/savings/model/products";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function SavingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ahorro"
        title="Primero el hábito, después el cupo de crédito."
        description="La página de ahorro en el sitio actual está vacía. Aquí explicamos qué ahorras, para qué sirve y cómo se relaciona con las líneas de crédito."
        actions={
          <Button asChild>
            <Link href={ROUTES.join}>Empezar a aportar</Link>
          </Button>
        }
      />
      <Section>
        <Container className="grid gap-5 lg:grid-cols-3">
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
          <h2 className="font-display text-3xl text-navy">Por qué el ahorro del fondo no es un CDT cualquiera</h2>
          <p className="mt-4 leading-7 text-muted">
            El aporte mensual te hace asociado hábil, te da voz en asamblea y es el respaldo de
            Crediaportes. El ahorro voluntario se abre con destinaciones específicas, según el
            reglamento. Las tasas, topes y retiros se publican en el PDF normativo: no inventamos
            números que el fondo no haya comunicado.
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
