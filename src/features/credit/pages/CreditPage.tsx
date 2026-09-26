import Link from "next/link";
import { CREDIT_LINES, CREDIT_DOCS } from "@/features/credit/model/credit-lines";
import { CreditSimulator } from "@/features/credit/components/CreditSimulator";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function CreditPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Líneas de crédito" }]}
        eyebrow="Líneas de crédito"
        title="Seis líneas, una tabla que sí se puede comparar."
        description="Las condiciones son las publicadas hoy en fondecolp.com. M.V. significa mensual vencida: el interés de cada mes. Las presentamos como fichas, no como un bloque de texto corrido."
        actions={
          <Button asChild variant="outline">
            <Link href={ROUTES.partners}>Ver convenios para Fonconvenios</Link>
          </Button>
        }
      />
      <Section>
        <Container className="overflow-x-auto rounded-2xl bg-white p-2 shadow-sm">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-muted">
              <tr>
                {["Línea", "Monto", "Tasa M.V.", "Plazo", "Antigüedad"].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CREDIT_LINES.map((line) => (
                <tr key={line.slug} className="border-t border-line">
                  <td className="px-4 py-3 font-medium text-navy">{line.name}</td>
                  <td className="px-4 py-3 text-muted">{line.amount}</td>
                  <td className="px-4 py-3">{line.rateMv.toString().replace(".", ",")}%</td>
                  <td className="px-4 py-3">{line.termMonths} meses</td>
                  <td className="px-4 py-3 text-muted">{line.seniority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container className="grid gap-5 lg:grid-cols-3">
          {CREDIT_LINES.map((line) => (
            <Card key={line.slug} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>{line.name}</CardTitle>
                  <Badge tone="leaf">{line.rateMv.toString().replace(".", ",")}% M.V.</Badge>
                </div>
                <CardDescription>{line.summary}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-2 text-sm text-muted">
                <p>
                  <strong className="text-navy">Monto:</strong> {line.amount}
                </p>
                <p>
                  <strong className="text-navy">Plazo:</strong> {line.termMonths} meses
                </p>
                <p>
                  <strong className="text-navy">Garantía:</strong> {line.guarantee}
                </p>
                <p>
                  <strong className="text-navy">Condición:</strong> {line.conditions}
                </p>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>
      <Section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-2">
          <CreditSimulator />
          <div>
            <h2 className="font-display text-3xl text-navy">Formatos de solicitud</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Sigue existiendo el PDF: el cambio es que cada archivo tiene nombre, no un botón
              genérico de “Descargar documento”. Completa en verde, como indica la guía, para evitar
              devoluciones.
            </p>
            <ul className="mt-6 space-y-2">
              {CREDIT_DOCS.map((doc) => (
                <li key={doc.name}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-paper px-4 py-3 text-sm font-medium text-navy hover:bg-leaf-soft"
                  >
                    {doc.name}
                    <span className="text-xs text-muted">PDF</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
