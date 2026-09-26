import { PageHero, Container, Section } from "@/shared/components/Layout";
import { SITE } from "@/shared/lib/site";

export function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Términos" }]}
        eyebrow="Uso del sitio"
        title="Términos de uso del portal institucional"
        description="Este sitio informa sobre ahorro, crédito, convenios y gobierno del fondo. No reemplaza los estatutos ni la oficina virtual."
      />
      <Section>
        <Container className="max-w-3xl space-y-6 text-sm leading-7 text-muted">
          <p>
            Los simuladores de cuota son ilustrativos. La aprobación depende de antigüedad, aportes,
            capacidad de descuento y el reglamento de crédito vigente. Las tasas publicadas pueden
            cambiar por decisión de la Junta Directiva.
          </p>
          <p>
            Oficina virtual y pagos PSE son servicios de terceros. FONDECOLP no publica aquí claves,
            extractos ni movimientos. El contenido institucional (NIT {SITE.nit}, órganos,
            reglamentos) prevalece en su versión PDF si hay diferencia con un resumen de esta web.
          </p>
          <p>
            El uso de marcas de aliados (Colmédica, EMI, Alkosto y demás) es informativo, con base
            en los convenios que el fondo ya muestra en fondecolp.com.
          </p>
        </Container>
      </Section>
    </>
  );
}
