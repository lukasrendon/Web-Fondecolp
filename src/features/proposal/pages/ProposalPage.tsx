import Link from "next/link";
import { Container, PageHero, Section } from "@/shared/components/Layout";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const problems = [
  "El inicio es un slider de tres piezas gráficas: el copy (prima 1,02% M.V., ahorro 3%–10%) queda atrapado en imágenes, mal para SEO y accesibilidad. Hay un typo: “CONSUEGUELA YA”.",
  "El HTML declara lang=en-US aunque todo el contenido está en español. Tipografía Alata y tema Astra 4.13.10.",
  "El formulario de contacto pide Phone con códigos de país mundiales; no hay política de privacidad ni términos.",
  "Ahorro obligatorio y programado existen, pero como infografías. Un lector de pantalla no las lee. Informes duplica el PDF de convocatoria 2025.",
  "Erratas (Sevicio, Gimasio, Turísmo), hover coral en tarjetas grises, junta distinta en dos páginas y pie “F&L Desarrollo”.",
  "Mantenimiento atado a WordPress, PHP 8.5, LiteSpeed y plugins en Hostinger, con correo en Gmail.",
];

const stack = [
  ["Lenguaje", "TypeScript — tipos, menos errores al cambiar tasas o textos."],
  ["Framework", "Next.js 15 (App Router) — páginas rápidas, SEO y rutas claras."],
  ["Estilos", "Tailwind CSS + primitivas tipo shadcn/ui."],
  ["Arquitectura", "app (rutas) → features (negocio) → shared (UI transversal)."],
  ["Contenido", "Archivos de modelo en cada feature: tasas, aliados, PDFs, junta."],
];

export function ProposalPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Análisis y propuesta" }]}
        eyebrow="Análisis y propuesta"
        title="Sí se puede hacer el sitio tal cual, y se puede hacer mejor."
        description="Esta demostración reconstruye FONDECOLP con la identidad del árbol, los mismos servicios y los mismos enlaces a oficina virtual, PSE y PDFs, pero con un diseño institucional y un mantenimiento más predecible que WordPress."
        actions={
          <Button asChild variant="outline">
            <Link href={ROUTES.home}>Ver el sitio nuevo</Link>
          </Button>
        }
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Qué encontramos en fondecolp.com</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm leading-6 text-muted">
                {problems.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Qué mejora esta versión</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm leading-6 text-muted">
                <li>· Home con propuesta de valor, simulador de cuota y pasos para asociarse.</li>
                <li>· Comparador de las 6 líneas de crédito y formatos nombrados.</li>
                <li>· Ahorro obligatorio 3%–10% y programado 6–12 meses, en texto y no en imagen.</li>
                <li>· Preguntas frecuentes (qué es M.V., asociado hábil, afianzadora) y páginas de privacidad y términos.</li>
                <li>· Formulario colombiano, WhatsApp visible, idioma es-CO.</li>
                <li>· Transparencia: informes, estatutos y órganos sin duplicar datos.</li>
                <li>· Móvil primero, accesible, sin plugins ni página de administración expuesta.</li>
              </ul>
            </CardContent>
          </Card>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <h2 className="font-display text-3xl text-navy">Lenguaje y stack</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {stack.map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-line p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-leaf">{label}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-3xl space-y-6 text-sm leading-7 text-muted">
          <h2 className="font-display text-3xl text-navy">Hostinger y el mantenimiento hacia adelante</h2>
          <p>
            Hoy el sitio corre en WordPress sobre Hostinger (panel hPanel, PHP 8.5, LiteSpeed). Eso
            es cómodo para editar un párrafo desde el admin, pero paga un costo: actualizaciones de
            núcleo, tema y plugins, riesgo de formularios rotos y un diseño que se degrada con cada
            bloque nuevo.
          </p>
          <p>
            <strong className="text-navy">Opción recomendada.</strong> Publicar este Next.js en
            Hostinger (hosting Node.js o VPS) o en Vercel, y apuntar el dominio fondecolp.com que ya
            tienes. Oficina virtual y PSE no se tocan: siguen en CyF Soluciones y ZonaPagos.
          </p>
          <p>
            <strong className="text-navy">Si quieren seguir editando sin código.</strong> Se puede
            dejar WordPress solo como archivo de PDFs / noticias (headless) o conectar un CMS liviano.
            Para tasas, junta e informes, con 4 o 5 cambios al año basta un archivo de contenido y un
            despliegue. No hace falta un CMS completo el día uno.
          </p>
          <p>
            <strong className="text-navy">Qué no mover aún.</strong> Los PDFs oficiales, el NIT, la
            oficina virtual y PSE. Esta demo los reutiliza. El correo sigue siendo
            serviciofondecolp@gmail.com hasta que exista uno institucional.
          </p>
        </Container>
      </Section>
    </>
  );
}
