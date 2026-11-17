"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Proof = { src: string; width: number; height: number; alt: string };

// Carrossel por rolagem nativa; as setas só aparecem quando os prints não cabem.
export function ProofsCarousel({ items }: { items: readonly Proof[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ overflow: false, start: true, end: true });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setEdges({ overflow: max > 1, start: track.scrollLeft <= 1, end: track.scrollLeft >= max - 1 });
    };
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: smooth ? "smooth" : "auto" });
  };

  return (
    <div className="proofs-carousel" data-overflow={edges.overflow}>
      <ul className="proofs-track" ref={trackRef}>
        {items.map((item) => (
          <li className={`proof-card${item.height > item.width * 1.3 ? " proof-card--portrait" : ""}`} key={item.src}>
            <Image src={item.src} width={item.width} height={item.height} alt={item.alt} sizes={item.height > item.width * 1.3 ? "(max-width: 600px) 78vw, 300px" : "(max-width: 600px) 78vw, 420px"} />
          </li>
        ))}
      </ul>
      <div className="proofs-controls">
        <button type="button" className="proofs-arrow" onClick={() => scrollByCard(-1)} disabled={edges.start} aria-label="Ver print anterior">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" className="proofs-arrow" onClick={() => scrollByCard(1)} disabled={edges.end} aria-label="Ver próximo print">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}
