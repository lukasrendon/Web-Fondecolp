import Link from "next/link";
import { QUOTE } from "@/features/pitch/model/quote";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { formatCop } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

const included = [
  "Sitio institucional según la demo: inicio, quiénes somos, órganos, informes, ahorro, crédito con simulador, convenios, campañas GES, asóciate, formulario, contacto, FAQ, privacidad y términos.",
  "Publicación en el Hostinger y el dominio que ya tienen, con redirecciones desde WordPress.",
  "Oficina virtual y Pagos PSE intactos.",
  "Dos rondas de ajustes de textos, tarifas y piezas de convenio.",
  "Formularios, WhatsApp, versión móvil y 1 hora de entrega de claves.",
  "30 días de garantía por errores de lo entregado.",
];

const excluded = [
  "Rehacer oficina virtual o PSE.",
  "Panel para que editen cada párrafo como en WordPress.",
  "Crédito 100% en línea, fotos nuevas o correo @fondecolp.com.",
  "Revisión jurídica de habeas data.",
  "Más de dos rondas de cambio o campañas nuevas fuera del acompañamiento.",
];

const discountTerms = [
  "Autorización por escrito para usar el caso en portafolio (antes/después, logo y URL), sin datos de asociados.",
  "Un interlocutor del fondo y respuestas de contenido en máximo 5 días hábiles.",
  "El descuento se nombra en la cotización: valor de referencia vs tarifa aplicada.",
  "Pasados los 3 meses de la opción B, cualquier cambio se cobra aparte.",
];

export function QuotePage() {
  const optionA = QUOTE.options[0];
  const saved = optionA.listPrice - optionA.price;

  return (
    <>
      <PageHero
        crumbs={[{ href: ROUTES.pitch, label: "Presentación" }, { label: "Propuesta económica" }]}
        eyebrow="Tarifa primer caso"
        title="Precio de quien nos abrió la puerta, no el de lista."
        description={`${QUOTE.client}. El valor de referencia del trabajo es ${formatCop(QUOTE.listLaunch)}. Se aplica una tarifa de portafolio. IVA no incluido. Válida hasta el ${QUOTE.validUntil}.`}
        actions={
          <>
            <Button asChild>
              <Link href={ROUTES.home}>Ver el sitio</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={ROUTES.map}>Mapa de páginas</Link>
            </Button>
          </>
        }
      />
      <Section>
        <Container className="mb-8 rounded-2xl bg-leaf-soft px-5 py-4 text-sm leading-6 text-leaf-deep">
          FONDECOLP nos da el primer proyecto institucional. A cambio, cobramos menos y pedimos
          poder mostrarlo a otros fondos. El favor es recíproco: no se hereda a un segundo cliente
          ni se convierte en soporte indefinido.
        </Container>
        <Container className="grid gap-5 lg:grid-cols-2">
          {QUOTE.options.map((option) => (
            <Card
              key={option.id}
              className={option.id === QUOTE.recommended ? "ring-2 ring-leaf" : ""}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-leaf">
                    Opción {option.id}
                  </p>
                  {option.id === QUOTE.recommended ? <Badge tone="leaf">Recomendada</Badge> : null}
                </div>
                <CardTitle>{option.name}</CardTitle>
                <p className="text-sm text-muted line-through">{formatCop(option.listPrice)}</p>
                <p className="font-display text-4xl text-navy">{formatCop(option.price)}</p>
                <CardDescription>{option.period}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted">{option.note}</CardContent>
            </Card>
          ))}
        </Container>
        <Container className="mt-6">
          <p className="rounded-2xl bg-navy-soft px-5 py-4 text-sm text-navy">
            En la opción A el fondo ahorra {formatCop(saved)} frente al valor de referencia. Hosting
            y dominio no se cobran. Si después de los {QUOTE.courtesyMonths} meses quieren seguir
            con cambios, el mes queda en {formatCop(QUOTE.monthlyAfter)}.
          </p>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-navy">Qué incluye</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              {included.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-navy">Qué no incluye</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              {excluded.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="font-display text-3xl text-navy">A cambio del descuento</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {discountTerms.map((item) => (
              <li key={item} className="rounded-2xl border border-line bg-white p-4 text-sm leading-6 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Tiempos</CardTitle>
              <CardDescription>
                3 a 4 semanas después del anticipo y de los textos oficiales. La demo ya existe:
                el tiempo es validar, publicar y no romper PSE.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Forma de pago</CardTitle>
              <CardDescription>
                50% al firmar. 40% al aprobar la URL de prueba. 10% al apuntar fondecolp.com.
                Pensado para no ahogar al fondo ni al prestador.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Condiciones</CardTitle>
              <CardDescription>
                Código y publicación se entregan al estar pagado. Oferta válida hasta el{" "}
                {QUOTE.validUntil}.
              </CardDescription>
            </CardHeader>
          </Card>
        </Container>
      </Section>
    </>
  );
}
