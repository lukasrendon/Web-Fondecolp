import type { Metadata } from "next";
import { GovernancePage } from "@/features/governance/pages/GovernancePage";

export const metadata: Metadata = {
  title: "Órganos de administración y control",
};

export default function Page() {
  return <GovernancePage />;
}
