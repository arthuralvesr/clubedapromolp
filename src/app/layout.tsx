import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { GroupClickTracker } from "@/components/layout/group-click-tracker";
import { MetaPixel } from "@/components/layout/meta-pixel";
import { PrivacyNote } from "@/components/layout/privacy-note";
import { siteConfig } from "@/config/site";
import "./globals.css";

const nunito = localFont({
  src: "../assets/fonts/Nunito-variable.ttf",
  weight: "200 1000",
  variable: "--font-nunito",
  display: "swap",
});

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || process.env.CF_PAGES_URL || (
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://127.0.0.1:3002"
);

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: `${siteConfig.name} · Promoções, bugs e cupons no seu WhatsApp`,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} · As melhores ofertas da internet em um só clube`,
    description: siteConfig.description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        {children}
        <PrivacyNote />
        {siteConfig.vercelAnalyticsEnabled && <Analytics />}
        <MetaPixel />
        <GroupClickTracker />
      </body>
    </html>
  );
}
