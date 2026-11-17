import { GroupLink } from "@/components/ui/group-link";
import { heroContent } from "@/content/hero";
import { proofsContent } from "@/content/proofs";
import { ProofsCarousel } from "./proofs-carousel";
import "./proofs.css";

export function Proofs() {
  const { title } = proofsContent;

  return (
    <section className="proofs" id="validacoes" aria-labelledby="proofs-title">
      <div className="proofs-head page-container">
        <h2 id="proofs-title">
          {title.before}<span className="proofs-highlight">{title.highlight}</span>{title.after}
        </h2>
        <p>{proofsContent.description}</p>
      </div>
      <ProofsCarousel items={proofsContent.items} />
      <div className="proofs-cta page-container">
        <GroupLink className="whatsapp-cta">{heroContent.cta}</GroupLink>
      </div>
    </section>
  );
}
