import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Landmark,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { CREDIT_LINES } from "@/features/credit/model/credit-lines";
import { CreditSimulator } from "@/features/credit/components/CreditSimulator";
import { JOIN_STEPS } from "@/features/membership/model/join";
import { PARTNERS } from "@/features/convenios/model/partners";
import { FAQS } from "@/features/home/model/faqs";
import { Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { SITE } from "@/shared/lib/site";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

const services = [
  {
    title: "Ahorro",
    href: ROUTES.savings,
    icon: PiggyBank,
    text: "Aporte del 3% al 10% del sueldo y ahorro programado a 6–12 meses.",
  },
  {
    title: "Crédito",
    href: ROUTES.credit,
    icon: Wallet,
    text: "Seis líneas con tasas desde 0,8% M.V. y descuento por nómina.",
  },
  {
    title: "Convenios",
    href: ROUTES.partners,
    icon: HeartHandshake,
    text: "Salud, seguros, gimnasio, mercado y turismo para ti y tu familia.",
  },
  {
    title: "Bienestar",
    href: ROUTES.about,
    icon: Sparkles,
    text: "Educación, solidaridad, recreación y previsión, con reglamento propio.",
  },
];

export function HomePage() {
  const featured = CREDIT_LINES.filter((line) => line.highlight);

  return (
    <>
      <section className="hero-wash text-white">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <Badge tone="gold" className="bg-white/10 text-gold">
              Fondo de empleados · Sector solidario
            </Badge>
            <h1 className="font-display mt-5 max-w-xl text-4xl leading-[1.1] sm:text-6xl">
              Te acompañamos a construir tus proyectos.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
              Ahorra entre el 3% y el 10% de tu salario básico, pide crédito con tasas desde 0,8%
              M.V. y usa convenios para ti y tu familia. FONDECOLP es el fondo de empleados de
              Colpensiones: sin ánimo de lucro y vigilado por la Superintendencia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={ROUTES.join}>
                  Quiero asociarme
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={ROUTES.credit}>Ver líneas de crédito</Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm">
              {[
                ["Desde", SITE.founded],
                ["NIT", SITE.nit],
                ["Ciudades", SITE.cities.length.toString()],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/8 p-3">
                  <dt className="text-white/60">{label}</dt>
                  <dd className="mt-1 font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <CreditSimulator compact />
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Servicios</p>
              <h2 className="font-display mt-2 text-3xl text-navy sm:text-4xl">
                Lo que encuentras al asociarte
              </h2>
            </div>
            <Button asChild variant="ghost">
              <Link href={ROUTES.join}>Conoce el proceso</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card className="h-full transition hover:-translate-y-1 hover:border-leaf/40">
                  <CardHeader>
                    <service.icon className="size-8 text-leaf" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.text}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Crédito</p>
            <h2 className="font-display mt-2 text-3xl text-navy sm:text-4xl">
              Tasas que un banco no te pone sobre la mesa
            </h2>
            <p className="mt-4 text-muted leading-7">
              Crediaportes parte de 0,8% mensual. Prima anticipada, CrediFácil y Libre destino
              cubren desde un imprevisto hasta un proyecto de familia, con descuento por nómina.
            </p>
            <Button asChild className="mt-6">
              <Link href={ROUTES.credit}>Comparar las 6 líneas</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((line) => (
              <Card key={line.slug}>
                <CardHeader>
                  <Badge tone="leaf">{line.rateMv.toString().replace(".", ",")}% M.V.</Badge>
                  <CardTitle>{line.name}</CardTitle>
                  <CardDescription>{line.summary}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted">
                  <p>{line.amount}</p>
                  <p className="mt-1">Hasta {line.termMonths} meses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-navy sm:text-4xl">Cómo asociarte</h2>
          <p className="mt-3 max-w-2xl text-muted">
            El proceso es el mismo de siempre, ahora contado en cuatro pasos claros. Sin formularios
            con códigos de país de Reino Unido ni páginas en inglés.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {JOIN_STEPS.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-line bg-paper p-5">
                <span className="font-display text-3xl text-leaf">{index + 1}</span>
                <h3 className="mt-3 font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-navy">Aliados que ya conoces</h2>
            <Link href={ROUTES.partners} className="text-sm font-semibold text-leaf">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.flatMap((group) =>
              group.items.map((item) => ({ name: item.name, service: item.service })),
            )
              .slice(0, 8)
              .map((item) => (
                <div key={item.name} className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-navy">{item.name}</p>
                  <p className="text-sm text-muted">{item.service}</p>
                </div>
              ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-navy">Preguntas que el sitio actual no responde</h2>
            <Link href={ROUTES.faq} className="text-sm font-semibold text-leaf">
              Ver todas
            </Link>
          </div>
          <dl className="mt-8 grid gap-4 md:grid-cols-2">
            {FAQS.slice(0, 4).map((item) => (
              <div key={item.q} className="rounded-2xl border border-line p-5">
                <dt className="font-semibold text-navy">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-navy px-6 py-10 text-white sm:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-gold">
                  <ShieldCheck className="size-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">Transparencia</span>
                </div>
                <h2 className="font-display mt-3 text-3xl">
                  Informes de gestión, estados financieros y asamblea en un solo lugar
                </h2>
                <p className="mt-3 max-w-2xl text-white/75">
                  En el sitio actual los documentos existen, pero están escondidos. Aquí la
                  rendición de cuentas es un menú, no un PDF perdido.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary">
                  <Link href={ROUTES.reports}>Ver informes</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.officeUrl} target="_blank" rel="noreferrer">
                    <Landmark className="size-4" />
                    Oficina virtual
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
