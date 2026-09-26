import type { Metadata } from "next";
import { CreditPage } from "@/features/credit/pages/CreditPage";

export const metadata: Metadata = {
  title: "Líneas de crédito",
  description:
    "CrediFácil, Libre destino, Prima anticipada, Crediaportes, Fonconvenios y línea promocional. Simula tu cuota.",
};

export default function Page() {
  return <CreditPage />;
}
