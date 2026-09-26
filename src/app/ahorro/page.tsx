import type { Metadata } from "next";
import { SavingsPage } from "@/features/savings/pages/SavingsPage";

export const metadata: Metadata = {
  title: "Ahorro",
};

export default function Page() {
  return <SavingsPage />;
}
