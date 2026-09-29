import type { Metadata } from "next";
import { SitemapPage } from "@/features/pitch/pages/SitemapPage";

export const metadata: Metadata = {
  title: "Mapa del sitio",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SitemapPage />;
}
