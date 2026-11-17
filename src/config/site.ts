export const siteConfig = {
  name: "clubedapromo",
  description:
    "Promoções, bugs e cupons selecionados para você receber no WhatsApp, sem perder horas pesquisando.",
  // Mesmo Pixel da LP original. Vazio desliga o Pixel e o aviso de privacidade.
  metaPixelId: "1170044962029356",
  vercelAnalyticsEnabled:
    process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED !== "false",
  links: {
    group: "https://chat.whatsapp.com/GZ6SqvqGEjv6oYkN50Ujo0",
    instagram: "https://www.instagram.com/achamais.promos/",
  },
};
