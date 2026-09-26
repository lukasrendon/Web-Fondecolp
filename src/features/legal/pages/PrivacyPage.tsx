import { PageHero, Container, Section } from "@/shared/components/Layout";
import { SITE } from "@/shared/lib/site";

export function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Privacidad" }]}
        eyebrow="Habeas data"
        title="Tratamiento de datos personales"
        description={`FONDECOLP, NIT ${SITE.nit}, trata datos de asociados y aspirantes para afiliación, crédito, descuento de nómina y atención. Esta página cubre un vacío del sitio actual: no había política visible.`}
      />
      <Section>
        <Container className="max-w-3xl space-y-6 text-sm leading-7 text-muted">
          <p>
            El responsable es el {SITE.legalName}. Los datos se recogen por formulario web, WhatsApp,
            correo {SITE.email} y los formatos PDF de afiliación y crédito. Finalidades: vincular
            asociados, evaluar crédito, descontar por nómina, enviar respuestas operativas y cumplir
            deberes ante la {SITE.supervisor}.
          </p>
          <p>
            Base normativa: Ley 1581 de 2012, Decreto 1377 de 2013 y las normas de fondos de
            empleados. No vendemos bases de datos. Los operadores de oficina virtual y PSE (CyF
            Soluciones, ZonaPagos) tratan datos según sus propias políticas cuando entras a esos
            portales.
          </p>
          <p>
            Puedes pedir acceso, corrección, actualización o supresión escribiendo a {SITE.email} o
            al {SITE.phoneDisplay}. Esta redacción es una plantilla de la demostración: antes de
            publicar en fondecolp.com debe revisarla el área jurídica del fondo.
          </p>
        </Container>
      </Section>
    </>
  );
}
