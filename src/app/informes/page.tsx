import type { Metadata } from "next";
import { ReportsPage } from "@/features/reports/pages/ReportsPage";

export const metadata: Metadata = {
  title: "Informes y asamblea",
};

export default function Page() {
  return <ReportsPage />;
}
