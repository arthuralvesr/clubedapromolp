import { siteConfig } from "@/config/site";
import "./privacy-note.css";

export function PrivacyNote() {
  if (!siteConfig.metaPixelId) return null;

  return (
    <footer className="privacy-note">
      <p className="page-container">
        <strong>Privacidade:</strong> esta página usa cookies e o Pixel da Meta para medir visitas e toques no convite do grupo e para mostrar anúncios personalizados. Para ajustar a personalização, acesse as{" "}
        <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer">preferências de anúncios da Meta</a> ou{" "}
        <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a>.
      </p>
    </footer>
  );
}
