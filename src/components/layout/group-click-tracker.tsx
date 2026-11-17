"use client";

import { useEffect } from "react";
import { pageview } from "@vercel/analytics";
import { siteConfig } from "@/config/site";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// O plano Hobby não conta cliques: cada toque num convite do grupo vira uma visita virtual a /clique-no-grupo.
// O link segue direto para o WhatsApp, sem página intermediária.
// Lead mede o toque no convite, não a entrada no grupo.
export function GroupClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href*='chat.whatsapp.com']");
      if (!link) return;
      if (siteConfig.vercelAnalyticsEnabled) {
        pageview({ route: "/clique-no-grupo", path: "/clique-no-grupo" });
      }
      if (siteConfig.metaPixelId) window.fbq?.("track", "Lead");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
