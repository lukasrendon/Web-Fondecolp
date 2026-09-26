import { PARTNERS } from "@/features/convenios/model/partners";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { Button } from "@/shared/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";

export function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Convenios y aliados"
        title="Salud, seguros y bienestar con desembolso al proveedor."
        description="Los aliados del sitio actual se listan con erratas (“Sevicio”, “Gimasio”) y PDFs sueltos. Aquí cada convenio tiene categoría, descripción y ficha."
      />
      {PARTNERS.map((group) => (
        <Section key={group.category} className="pt-10 first:pt-16">
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
