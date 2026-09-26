import type { Metadata } from "next";
import { JoinFormPage } from "@/features/membership/pages/JoinFormPage";

export const metadata: Metadata = {
  title: "Formulario de asociación",
};

export default function Page() {
  return <JoinFormPage />;
}
