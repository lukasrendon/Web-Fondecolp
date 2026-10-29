import Link from "next/link";
import { QUOTE, VALUE_BREAKDOWN } from "@/features/pitch/model/quote";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { formatCop } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

const included = [
  "Sitio institucional según la demo: inicio, quiénes somos, órganos, informes, ahorro, crédito con simulador, convenios, campañas GES, asóciate, formulario, contacto, FAQ, privacidad y términos.",
  "Publicación en el Hostinger que administramos nosotros, apuntando el dominio del fondo, con redirecciones desde WordPress.",
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
  "Pasado el año de la opción B, el mantenimiento queda en la tarifa mensual acordada.",
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
            En la opción A el fondo ahorra {formatCop(saved)} frente al valor de referencia. El
            hosting lo operamos nosotros; no va como ítem extra en este primer caso. El dominio
            permanece del fondo. Mantenimiento mensual: {formatCop(QUOTE.monthlyAfter)}. La opción B
            incluye {QUOTE.courtesyMonths} meses; al vencer ese año, si continúan, aplica la misma
            tarifa mensual.
          </p>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-navy">De dónde sale el número</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
            El valor de referencia ({formatCop(QUOTE.listLaunch)}) es ~{QUOTE.hours} horas de trabajo
            profesional a {formatCop(QUOTE.hourlyList)}/hora: lo que costaría el mismo alcance con
            una agencia o un freelancer consolidado. La tarifa primer caso ({formatCop(optionA.price)})
            baja esa hora a {formatCop(QUOTE.hourlyFriend)}. No es un “sitio de Hostinger”: es
            reemplazar la vitrina del fondo sin tocar los sistemas de ahorro y pago.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-paper text-muted">
                <tr>
                  <th className="px-5 py-3">Bloque</th>
                  <th className="px-5 py-3">Horas</th>
                  <th className="px-5 py-3">Qué cubre</th>
                </tr>
              </thead>
              <tbody>
                {VALUE_BREAKDOWN.map((row) => (
                  <tr key={row.item} className="border-t border-line align-top">
                    <td className="px-5 py-3 font-medium text-navy">{row.item}</td>
                    <td className="px-5 py-3">{row.hours}</td>
                    <td className="px-5 py-3 text-muted">{row.text}</td>
                  </tr>
                ))}
                <tr className="border-t border-line bg-leaf-soft">
                  <td className="px-5 py-3 font-semibold text-navy">Total estimado</td>
                  <td className="px-5 py-3 font-semibold text-navy">{QUOTE.hours} h</td>
                  <td className="px-5 py-3 text-navy">
                    Referencia {formatCop(QUOTE.listLaunch)} · aplicada {formatCop(optionA.price)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-line p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-leaf">Vs. WordPress actual</dt>
              <dd className="mt-2 text-sm text-muted">
                Seguir con tema y plugins sale barato el mes 1 y caro en errores, seguridad y
                páginas que el asociado no entiende.
              </dd>
            </div>
            <div className="rounded-2xl border border-line p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-leaf">Vs. agencia</dt>
              <dd className="mt-2 text-sm text-muted">
                El mismo paquete en agencia suele ir de 15 a 25 millones. El valor tachado de{" "}
                {formatCop(QUOTE.listLaunch)} es conservador.
              </dd>
            </div>
            <div className="rounded-2xl border border-line p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-leaf">Qué no están pagando</dt>
              <dd className="mt-2 text-sm text-muted">
                Hosting (lo operamos nosotros), oficina virtual ni PSE. El descuento son horas más
                baratas, no menos páginas. El dominio debe quedar a nombre del fondo.
              </dd>
            </div>
          </dl>
        </Container>
      </Section>
      <Section>
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
