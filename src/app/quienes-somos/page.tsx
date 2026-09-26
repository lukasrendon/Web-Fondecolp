import type { Metadata } from "next";
import { AboutPage } from "@/features/about/pages/AboutPage";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "FONDECOLP es el fondo de empleados de Colpensiones: naturaleza jurídica, estatutos y vigilancia de la Superintendencia de la Economía Solidaria.",
};

export default function Page() {
  return <AboutPage />;
}
