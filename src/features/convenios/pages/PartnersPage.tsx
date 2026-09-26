import { CampaignGrid } from "@/features/convenios/components/CampaignGrid";
import { PARTNERS } from "@/features/convenios/model/partners";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { Button } from "@/shared/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";

export function PartnersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Convenios y aliados" }]}
        eyebrow="Convenios y aliados"
        title="Salud, seguros, bienestar y parques con tarifa de asociado."
        description="Además de Colmédica, EMI y Alkosto, GES trae pasaportes a Salitre Mágico, Mundo Aventura y Hacienda Nápoles. Pide el combo con tu consultor o fínalo con Fonconvenios."
      />
      <Section>
        <Container>
          <h2 className="font-display text-3xl text-navy">Campañas GES de recreación</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Tarifas vigentes de las piezas que enviaste. El flyer se publica tal cual; al lado van
            los precios en texto para que se puedan leer, comparar y compartir.
          </p>
          <div className="mt-8">
            <CampaignGrid />
          </div>
        </Container>
      </Section>
      {PARTNERS.map((group) => (
        <Section key={group.category} className="pt-4">
          <Container>
            <h2 className="font-display text-3xl text-navy">{group.category}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map((item) => (
                <Card key={item.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.service}</CardDescription>
                  </CardHeader>
                  {"href" in item && item.href ? (
                    <CardFooter className="mt-auto">
                      <Button asChild variant="ghost" className="px-0">
                        <a href={item.href} target="_blank" rel="noreferrer">
                          Ver ficha
                        </a>
                      </Button>
                    </CardFooter>
                  ) : null}
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
