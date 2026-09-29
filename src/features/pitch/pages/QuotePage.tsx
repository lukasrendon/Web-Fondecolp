import Link from "next/link";
import { QUOTE } from "@/features/pitch/model/quote";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { formatCop } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

const included = [
  "Sitio institucional según la demo: inicio, quiénes somos, órganos, informes, ahorro, crédito con simulador, convenios, campañas GES (Salitre, Mundo Aventura, Nápoles), asóciate, formulario, contacto, FAQ, privacidad y términos.",
  "Paso de WordPress a la web nueva en el dominio y Hostinger que ya tienen, con redirecciones de las URLs actuales.",
  "Oficina virtual y Pagos PSE intactos: solo se enlazan.",
  "Dos rondas de ajustes de textos, tarifas y piezas de convenio.",
  "Formularios de contacto y preasociación, WhatsApp y versión móvil.",
  "Capacitación de 1 hora para quien vaya a pedir cambios.",
  "30 días de garantía por errores de lo entregado.",
];

const excluded = [
  "Rehacer la oficina virtual o el recaudo PSE.",
  "Panel tipo WordPress para que editen ellos cada párrafo.",
  "Solicitud de crédito 100% en línea (se mantienen los PDF oficiales).",
  "Sesión de fotos, video o un correo @fondecolp.com.",
  "Revisión jurídica de la política de datos por un abogado del fondo.",
  "Campañas GES nuevas después de las dos rondas (entran en el acompañamiento o se cotizan sueltas).",
];

export function QuotePage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: ROUTES.pitch, label: "Presentación" }, { label: "Propuesta económica" }]}
        eyebrow="Propuesta económica"
        title="Inversión para publicar la web que ya vieron."
        description={`${QUOTE.client}. Elaborada el ${QUOTE.issued}. Válida hasta el ${QUOTE.validUntil}. Precios en pesos colombianos, IVA no incluido (se suma si el prestador es responsable de IVA).`}
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
                <p className="font-display text-4xl text-navy">{formatCop(option.price)}</p>
                <CardDescription>{option.period}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted">{option.note}</CardContent>
            </Card>
          ))}
        </Container>
        <Container className="mt-6">
          <p className="rounded-2xl bg-navy-soft px-5 py-4 text-sm text-navy">
            El acompañamiento suelto, si eligen solo la opción A, es {formatCop(QUOTE.monthly)} al
            mes durante {QUOTE.months} meses, o se puede sumar después. Hosting y dominio no se
            cobran: usan el Hostinger y el fondecolp.com que ya tienen. Sí entra la configuración
            para que esta web corra ahí (Node o publicación estática, según el plan).
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
        <Container className="grid gap-8 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Tiempos</CardTitle>
              <CardDescription>
                3 a 4 semanas después del anticipo y de recibir textos oficiales, junta vigente y
                visto bueno de las campañas. La demo acorta el diseño: el tiempo se va en validar,
                publicar y no romper PSE.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Forma de pago</CardTitle>
              <CardDescription>
                50% al firmar para iniciar. 40% al aprobar el prelanzamiento en una URL de prueba.
                10% al apuntar fondecolp.com a la web nueva. Transferencia a la cuenta que se
                indique en el contrato.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Condiciones</CardTitle>
              <CardDescription>
                Un solo interlocutor del fondo. Respuestas de contenido en máximo 5 días hábiles o
                el cronograma se corre. El código y la publicación se entregan al estar pagado el
                proyecto. Esta oferta vale hasta el {QUOTE.validUntil}.
              </CardDescription>
            </CardHeader>
          </Card>
        </Container>
      </Section>
    </>
  );
}
