import type { Metadata } from "next";
import { JoinPage } from "@/features/membership/pages/JoinPage";

export const metadata: Metadata = {
  title: "Asóciate",
  description: "Cómo asociarte a FONDECOLP, documentos requeridos y beneficios de ahorro, crédito y bienestar.",
};

export default function Page() {
  return <JoinPage />;
}
