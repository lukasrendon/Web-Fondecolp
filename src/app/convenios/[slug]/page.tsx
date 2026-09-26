import type { Metadata } from "next";
import { CampaignDetailPage } from "@/features/convenios/pages/CampaignDetailPage";
import { PARK_CAMPAIGNS } from "@/features/convenios/model/campaigns";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PARK_CAMPAIGNS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const campaign = PARK_CAMPAIGNS.find((item) => item.slug === slug);
  return {
    title: campaign ? `${campaign.park} · Convenio GES` : "Convenio",
    description: campaign?.headline,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <CampaignDetailPage slug={slug} />;
}
