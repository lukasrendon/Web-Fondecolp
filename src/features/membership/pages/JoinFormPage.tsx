import { JoinForm } from "@/features/membership/components/JoinForm";
import { PageHero, Container, Section } from "@/shared/components/Layout";

export function JoinFormPage() {
  return (
    <>
      <PageHero
        eyebrow="FM-2019"
        title="Formulario de asociación y actualización."
        description="NIT 900.950.893-0. Versión guiada del formato oficial: menos campos irrelevantes, checklist de documentos y envío por WhatsApp mientras se conecta un correo institucional."
      />
      <Section>
        <Container className="max-w-3xl">
          <JoinForm />
        </Container>
      </Section>
    </>
  );
}
