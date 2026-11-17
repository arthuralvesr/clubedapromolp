import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    // Pages não fornece o coletor /_vercel/insights. Mantém a integração
    // disponível na Vercel, sem carregar um endpoint inexistente no Pages.
    NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED:
      process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED ||
      (process.env.CF_PAGES === "1" ? "false" : "true"),
  },
};

export default nextConfig;
