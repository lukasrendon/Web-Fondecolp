import type { Metadata } from "next";
import { PartnersPage } from "@/features/convenios/pages/PartnersPage";

export const metadata: Metadata = {
  title: "Convenios y aliados",
};

export default function Page() {
  return <PartnersPage />;
}
