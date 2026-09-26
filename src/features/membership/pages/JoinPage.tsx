import Link from "next/link";
import { JOIN_STEPS, JOIN_DOCS } from "@/features/membership/model/join";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { SITE } from "@/shared/lib/site";
import { Button } from "@/shared/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

const benefits = [
  {
    title: "Ahorro",
    text: "Ahorro obligatorio del 3% al 10% del sueldo y programado a 6–12 meses.",
  },
  {
    title: "Crédito",
    text: "Seis modalidades, con descuento por nómina o débito automático.",
  },
  {
    title: "Previsión y asistencia",
    text: "Convenios para el asociado y, por extensión, su familia.",
  },
  {
    title: "Bienestar",
    text: "Salud, recreación, cultura, deporte, educación y seguros.",
  },
];

export function JoinPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Asóciate" }]}
        eyebrow="Asóciate"
        title="Ser asociado es más que pedir un crédito."
        description="Al vincularte a FONDECOLP accedes a ahorro, crédito, salud, previsión, educación y solidaridad pensados para empleados y vinculados de Colpensiones."
        actions={
          <>
            <Button asChild>
              <Link href={ROUTES.joinForm}>Formulario en línea</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={JOIN_DOCS[0].href} target="_blank" rel="noreferrer">
                Descargar formato PDF
              </a>
            </Button>
          </>
        }
      />
      <Section>
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-navy">Cómo asociarse</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {JOIN_STEPS.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-line p-5">
                <span className="font-display text-3xl text-leaf">{index + 1}</span>
                <h3 className="mt-2 font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            {JOIN_DOCS.map((doc) => (
              <Button key={doc.name} asChild variant="secondary">
                <a href={doc.href} target="_blank" rel="noreferrer">
                  {doc.name}
                </a>
              </Button>
            ))}
            <Button asChild variant="ghost">
              <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer">
                Dudas al {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
