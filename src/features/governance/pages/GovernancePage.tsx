import { BODIES } from "@/features/governance/model/bodies";
import { PageHero, Container, Section } from "@/shared/components/Layout";

export function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Gobierno corporativo"
        title="Quién administra, quién vigila y quién resuelve apelaciones."
        description="La información de órganos está repetida y desactualizada entre dos páginas del sitio actual. Esta ficha usa el listado dedicado 2023–2025."
      />
      <Section>
        <Container className="space-y-8">
          {BODIES.map((body) => (
            <article key={body.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="border-b border-line px-6 py-5">
                <h2 className="font-display text-2xl text-navy">{body.name}</h2>
                <p className="mt-1 text-sm text-muted">{body.description}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-paper text-muted">
                    <tr>
                      {body.headers.map((header) => (
                        <th key={header} className="px-6 py-3 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {body.rows.map((row) => (
                      <tr key={row.join("-")} className="border-t border-line">
                        {row.map((cell) => (
                          <td key={cell} className="px-6 py-3 text-navy">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
