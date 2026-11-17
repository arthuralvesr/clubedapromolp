import { GroupLink } from "@/components/ui/group-link";
import { ClubSymbol } from "@/components/ui/club-symbol";
import { GroupPreview } from "./group-preview";
import { heroContent } from "@/content/hero";
import { siteConfig } from "@/config/site";
import "./hero.css";

export function Hero() {
  const { title } = heroContent;

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-inner page-container">
        <div className="hero-copy">
          <div className="hero-brand">
            <a className="club-brand" href="#inicio" aria-label={`${siteConfig.name} — início`}>
              <ClubSymbol />
              <span className="club-brand-name" aria-hidden="true">{siteConfig.name}</span>
            </a>
          </div>
          <h1 id="hero-title">
            {title.before}<span className="hero-highlight">{title.highlight}</span>{title.after}
          </h1>
          <p className="hero-description">{heroContent.description}</p>
          <GroupLink className="hero-cta whatsapp-cta">{heroContent.cta}</GroupLink>
        </div>
        <div className="hero-art">
          <GroupPreview />
        </div>
      </div>
    </section>
  );
}
