import type { Metadata } from "next";
import { PitchPage } from "@/features/pitch/pages/PitchPage";

export const metadata: Metadata = {
  title: "Presentación de la nueva web",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PitchPage />;
}
