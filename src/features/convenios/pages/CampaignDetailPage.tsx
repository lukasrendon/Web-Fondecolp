import Image from "next/image";
import { notFound } from "next/navigation";
import { campaignBySlug } from "@/features/convenios/model/campaigns";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { SITE } from "@/shared/lib/site";
import { formatCop } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export function CampaignDetailPage({ slug }: { slug: string }) {
  const campaign = campaignBySlug(slug);
  if (!campaign) notFound();

  const wa = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    `Hola FONDECOLP, soy asociado y quiero el convenio GES de ${campaign.park}.`,
  )}`;

  return (
    <>
      <PageHero
        crumbs={[
          { href: ROUTES.partners, label: "Convenios" },
          { label: campaign.park },
        ]}
        eyebrow={`GES · ${campaign.cityHint}`}
        title={campaign.park}
        description={`${campaign.headline}. Tarifas preferenciales para asociados FONDECOLP, con más información a través del consultor. Aplican términos y condiciones.`}
        actions={
          <>
            <Button asChild>
              <a href={wa} target="_blank" rel="noreferrer">
                Hablar con el consultor
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={ROUTES.credit}>Financiar con Fonconvenios</a>
            </Button>
          </>
        }
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl bg-navy-deep">
            <Image
              src={campaign.image}
              alt={campaign.imageAlt}
              width={1081}
              height={1921}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="space-y-5">
            {campaign.combos.map((combo) => (
              <Card key={combo.name}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    {combo.badge ? <Badge tone="leaf">{combo.badge}</Badge> : null}
                    <CardTitle>{combo.name}</CardTitle>
                  </div>
                  <p className="font-display text-3xl text-navy">{formatCop(combo.price)}</p>
                  {combo.gatePrice ? (
                    <CardDescription>
                      Precio taquilla {formatCop(combo.gatePrice)}
                    </CardDescription>
                  ) : null}
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted">
                  <p className="font-medium text-navy">{combo.includes}</p>
                  <p>{combo.details}</p>
                  {combo.excludes ? <p>No incluye: {combo.excludes}</p> : null}
                </CardContent>
              </Card>
            ))}
            {campaign.rows ? (
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-paper text-muted">
                    <tr>
                      <th className="px-5 py-3">Pasaporte</th>
                      <th className="px-5 py-3">Adulto</th>
                      <th className="px-5 py-3">Infantil</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaign.rows.map((row) => (
                      <tr key={row.plan} className="border-t border-line align-top">
                        <td className="px-5 py-4">
                          <p className="font-semibold text-navy">
                            {row.plan}
                            {row.badge ? (
                              <span className="ml-2 text-xs text-berry">{row.badge}</span>
                            ) : null}
                          </p>
                          <p className="mt-1 text-muted">{row.details}</p>
                        </td>
                        <td className="px-5 py-4 font-medium">{formatCop(row.adult)}</td>
                        <td className="px-5 py-4 font-medium">{formatCop(row.child)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            <p className="text-xs text-muted">
              Campañas de GES Grupo Empresarial Solidario para asociados FONDECOLP. Sujetas a
              disponibilidad y al reglamento de convenios. El desembolso puede hacerse con la línea
              Fonconvenios.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
