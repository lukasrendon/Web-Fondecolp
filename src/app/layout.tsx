import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/shared/components/SiteFooter";
import { SiteHeader } from "@/shared/components/SiteHeader";
import { WhatsAppButton } from "@/shared/components/WhatsAppButton";
import { SITE } from "@/shared/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fondecolp.com"),
  title: {
    default: `${SITE.name} · ${SITE.legalName}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.shortDescription,
  openGraph: {
    title: SITE.legalName,
    description: SITE.shortDescription,
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: "/brand/logo-192.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO">
      <body className={`${jakarta.variable} ${fraunces.variable} min-h-screen bg-paper font-sans text-ink antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
