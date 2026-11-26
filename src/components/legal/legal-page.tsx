import Link from "next/link";
import type { ReactNode } from "react";
import { ClubSymbol } from "@/components/ui/club-symbol";
import "./legal-page.css";

type LegalPageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPage({ title, description, children }: LegalPageProps) {
  return (
    <main id="conteudo" className="legal-page" tabIndex={-1}>
      <article className="legal-card">
        <header className="legal-header">
          <Link href="/" className="legal-brand" aria-label="Voltar para a página inicial">
            <ClubSymbol />
            <span>clubedapromo</span>
          </Link>
          <p className="legal-kicker">Informações legais</p>
          <h1>{title}</h1>
          <p className="legal-description">{description}</p>
          <p className="legal-updated">Última atualização: 25 de novembro de 2026.</p>
        </header>

        <div className="legal-content">{children}</div>

        <Link href="/" className="legal-back">
          Voltar para a página inicial
        </Link>
      </article>
    </main>
  );
}
