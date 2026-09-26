import type { Metadata } from "next";
import { ProposalPage } from "@/features/proposal/pages/ProposalPage";

export const metadata: Metadata = {
  title: "Análisis y propuesta",
};

export default function Page() {
  return <ProposalPage />;
}
