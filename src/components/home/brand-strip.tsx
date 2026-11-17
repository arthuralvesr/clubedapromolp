import Image from "next/image";
import type { CSSProperties } from "react";
import { brandStrip } from "@/content/brands";
import "./brand-strip.css";

const productBrands = brandStrip.slice(2).map((brand) => brand.name).join(", ");

export function BrandStrip() {
  return (
    <section className="brand-strip" id="lojas" aria-label="Lojas e marcas que aparecem no grupo">
      <p className="sr-only">Achados da Shopee e do Mercado Livre, com produtos de marcas como {productBrands}.</p>
      <div className="brand-strip-inner">
        <div className="brand-strip-label" aria-hidden="true"><span />No radar<br />do clube</div>
        <div className="brand-strip-viewport" aria-hidden="true">
          <div className="brand-strip-track">
            {[0, 1, 2, 3].map((copy) => (
              <ul className="brand-strip-set" key={copy}>
                {brandStrip.map((brand) => (
                  <li key={brand.slug} style={{ "--logo-width": `${brand.width}px` } as CSSProperties}>
                    <Image src={`/images/marcas/${brand.slug}.svg`} width={brand.width} height={brand.height} alt="" loading="eager" fetchPriority="low" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
