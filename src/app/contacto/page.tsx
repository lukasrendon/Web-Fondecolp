import type { Metadata } from "next";
import { ContactPage } from "@/features/contact/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contáctanos",
};

export default function Page() {
  return <ContactPage />;
}
