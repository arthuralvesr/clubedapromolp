import Link from "next/link";
import { siteConfig } from "@/config/site";
import "./privacy-note.css";

export function PrivacyNote() {
  return (
    <footer className="privacy-note">
      <div className="page-container">
        {siteConfig.metaPixelId && (
          <p>
            Esta página usa ferramentas de medição da Meta e da Vercel. Consulte nossa política para saber mais.
          </p>
        )}
        <nav className="privacy-links" aria-label="Links legais">
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/exclusao-de-dados">Exclusão de dados</Link>
          <Link href="/termos">Termos de uso</Link>
        </nav>
      </div>
    </footer>
  );
}
