import Image from "next/image";
import Link from "next/link";
import { PARK_CAMPAIGNS } from "@/features/convenios/model/campaigns";
import { ROUTES } from "@/shared/lib/routes";
import { SITE } from "@/shared/lib/site";
import { formatCop } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/field";

export function CampaignGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {PARK_CAMPAIGNS.map((campaign) => {
        const from = campaign.combos.length
          ? Math.min(...campaign.combos.map((combo) => combo.price))
          : Math.min(...(campaign.rows ?? []).map((row) => row.child));
        return (
          <article key={campaign.slug} className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <Link href={`${ROUTES.partners}/${campaign.slug}`} className="block">
              <div className="relative aspect-[3/4] bg-navy-deep">
                <Image
                  src={campaign.image}
                  alt={campaign.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </Link>
            <div className="space-y-3 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>GES</Badge>
                <Badge tone="gold">{campaign.cityHint}</Badge>
              </div>
              <h3 className="font-display text-2xl text-navy">{campaign.park}</h3>
              <p className="text-sm text-muted">{campaign.headline}</p>
              <p className="text-sm font-semibold text-leaf">Desde {formatCop(from)}</p>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <Link href={`${ROUTES.partners}/${campaign.slug}`}>Ver tarifas</Link>
                </Button>
                <Button asChild size="sm" variant="secondary">
                  <a
                    href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
                      `Hola FONDECOLP, quiero información del convenio GES en ${campaign.park}.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pedir al consultor
                  </a>
                </Button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
