import type { Metadata } from "next";
import { TermsPage } from "@/features/legal/pages/TermsPage";

export const metadata: Metadata = { title: "Términos de uso" };

export default function Page() {
  return <TermsPage />;
}
