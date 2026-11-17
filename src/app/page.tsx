import { Hero } from "@/components/home/hero";
import { BrandStrip } from "@/components/home/brand-strip";
import { Proofs } from "@/components/home/proofs";

export default function HomePage() {
  return (
    <main id="conteudo" className="home-page" tabIndex={-1}>
      <Hero />
      <BrandStrip />
      <Proofs />
    </main>
  );
}
