import { FAQS } from "@/features/home/model/faqs";
import { PageHero, Container, Section } from "@/shared/components/Layout";

export function FaqPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Preguntas frecuentes" }]}
        eyebrow="Glosario y dudas"
        title="Lo que un asociado pregunta antes de firmar un pagaré."
        description="En el sitio actual términos como M.V., asociado hábil o afianzadora aparecen sin explicación. Aquí van en lenguaje claro."
      />
      <Section>
        <Container className="max-w-3xl space-y-5">
          {FAQS.map((item) => (
            <article key={item.q} className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl text-navy">{item.q}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{item.a}</p>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
