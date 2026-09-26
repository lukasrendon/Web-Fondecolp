import { ContactForm } from "@/features/contact/components/ContactForm";
import { PageHero, Container, Section } from "@/shared/components/Layout";
import { SITE } from "@/shared/lib/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contáctanos"
        title="Habla con personas del fondo, no con un formulario de 200 países."
        description="WhatsApp, correo y un formulario en español, con Colombia primero. Oficina virtual y PSE siguen en los mismos sistemas que ya usan los asociados."
      />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp y teléfono</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <a className="block font-medium text-navy" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phoneDisplay}
                </a>
                <a className="block text-leaf" href={SITE.whatsappUrl} target="_blank" rel="noreferrer">
                  Abrir conversación
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Correo</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <a className="text-navy" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Canales de autogestión</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <a className="block text-navy" href={SITE.officeUrl} target="_blank" rel="noreferrer">
                  Oficina virtual
                </a>
                <a className="block text-navy" href={SITE.pseUrl} target="_blank" rel="noreferrer">
                  Pagos PSE
                </a>
                <p className="pt-2 text-muted">
                  Presencia en {SITE.cities.join(", ")}. Redes: Facebook e Instagram @fondecolp.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl text-navy">Escríbenos</h2>
            <p className="mb-6 mt-2 text-sm text-muted">
              En el sitio actual el formulario está en inglés, pide “Phone” con lista mundial y no
              indica tiempos de respuesta. Este sí.
            </p>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
