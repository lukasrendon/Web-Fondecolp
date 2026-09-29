import Link from "next/link";
import { SCOPE_PACKAGES } from "@/features/pitch/model/sitemap";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

const moments = [
  {
    n: "01",
    title: "Lo que el asociado ve hoy",
    text: "Un sitio que cumple, pero esconde el ahorro en imágenes, mezcla inglés en el código y deja el crédito como un párrafo. Oficina virtual y PSE sí funcionan: eso se respeta.",
  },
  {
    n: "02",
    title: "Lo que recorren en esta demo",
    text: "La misma marca, los mismos productos y las campañas GES, contados como un fondo institucional: simulador, tarifas en texto, celular colombiano y mapa claro.",
  },
  {
    n: "03",
    title: "Lo que se entrega si avanzamos",
    text: "No es un mockup. Es la base de la web pública. Falta su visto bueno de textos, el dominio y el recambio de WordPress, sin apagar los sistemas de pago.",
  },
];

export function PitchPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Presentación" }]}
        eyebrow="Propuesta para FONDECOLP"
        title="Una web a la altura del fondo, lista para que el asociado entienda y actúe."
        description="Esta presentación acompaña la demostración navegable. El objetivo es decidir alcance, tiempos y la propuesta económica — no improvisar páginas sobre la marcha."
        actions={
          <>
            <Button asChild>
              <Link href={ROUTES.home}>Recorrer el sitio</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={ROUTES.map}>Ver mapa del sitio</Link>
            </Button>
          </>
        }
      />
      <Section>
        <Container className="grid gap-5 md:grid-cols-3">
          {moments.map((item) => (
            <Card key={item.n}>
              <CardHeader>
                <p className="text-xs font-semibold tracking-[0.2em] text-leaf">{item.n}</p>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-navy">Cómo recorre la junta esta demo</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Inicio", "Promesa, simulador y parques GES"],
              ["Crédito y ahorro", "Tasas reales y reglas que hoy están en imágenes"],
              ["Convenios", "Salitre, Mundo Aventura, Nápoles y aliados"],
              ["Asóciate y contacto", "Proceso y formulario en español"],
            ].map(([title, text], index) => (
              <li key={title} className="rounded-2xl border border-line p-5">
                <span className="font-display text-3xl text-leaf">{index + 1}</span>
                <h3 className="mt-2 font-semibold text-navy">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="font-display text-3xl text-navy">Tres caminos de trabajo</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Los valores van en la propuesta económica, no aquí. En la reunión se elige un camino
            para no mezclar el lanzamiento con ideas de un año.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {SCOPE_PACKAGES.map((item) => (
              <Card key={item.name} className="flex flex-col">
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-wide text-leaf">{item.tag}</p>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted">
                    {item.includes.map((line) => (
                      <li key={line}>· {line}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-navy">Qué pedimos para cotizar en firme</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <li>· Quién aprueba textos, tarifas y el pago (gerencia, junta, compras).</li>
              <li>· Fecha tentativa de asamblea o campaña para anclar el lanzamiento.</li>
              <li>· Si el dominio y el correo siguen en Hostinger o se mueven.</li>
              <li>· Quién va a actualizar tasas y flyers después del día uno.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-navy p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Siguiente paso</p>
            <h3 className="font-display mt-2 text-2xl">Propuesta económica y cronograma</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Tarifa de primer caso: opción A $6.900.000 o opción B $8.500.000 con tres meses. El
              valor de referencia del trabajo es $12.900.000; el descuento se escribe para que no
              se vuelva el precio de lista.
            </p>
            <Button asChild variant="secondary" className="mt-6">
              <Link href={ROUTES.quote}>Ver propuesta económica</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
