import type { Metadata } from "next";
import { PrivacyPage } from "@/features/legal/pages/PrivacyPage";

export const metadata: Metadata = { title: "Privacidad y habeas data" };

export default function Page() {
  return <PrivacyPage />;
}
