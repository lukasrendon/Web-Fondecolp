import type { Metadata } from "next";
import { QuotePage } from "@/features/pitch/pages/QuotePage";

export const metadata: Metadata = {
  title: "Propuesta económica",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <QuotePage />;
}
