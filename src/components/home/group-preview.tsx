"use client";

import Image from "next/image";
import { useState } from "react";
import { ClubSymbol } from "@/components/ui/club-symbol";
import { siteConfig } from "@/config/site";
import { groupDemoOffers } from "@/content/group-demo";
import "./group-preview.css";

export function GroupPreview() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="group-preview" data-paused={paused}>
      <div className="preview-phone" aria-hidden="true">
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <div className="phone-camera" />
            <div className="phone-status-icons">
              <svg viewBox="0 0 24 16"><path d="M1 15h3v-4H1zm5 0h3V8H6zm5 0h3V4h-3zm5 0h3V1h-3z" fill="currentColor" /></svg>
              <svg viewBox="0 0 20 16"><path d="M2 5a13 13 0 0 1 16 0M5 8a8 8 0 0 1 10 0m-7 3a3 3 0 0 1 4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /><circle cx="10" cy="14" r="1" fill="currentColor" /></svg>
              <svg viewBox="0 0 28 16"><rect x="1" y="2" width="22" height="12" rx="3" stroke="currentColor" fill="none" /><rect x="3" y="4" width="17" height="8" rx="1" fill="currentColor" /><path d="M25 6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
          </div>
          <div className="chat-header">
            <svg className="chat-back" viewBox="0 0 24 24" fill="none"><path d="m14 6-6 6 6 6m-6-6h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <ClubSymbol className="chat-avatar" />
            <div className="chat-group-name"><strong>{siteConfig.name}</strong><span>Ofertas e cupons</span></div>
            <svg className="chat-menu" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="12" cy="19" r="1.7" /></svg>
          </div>
          <div className="chat-feed">
            <div className="chat-date">Ofertas do acervo</div>
            <div className="chat-feed-track">
              {[0, 1].map((copy) => (
                <div className="chat-message-set" key={copy}>
                  {groupDemoOffers.map((offer) => (
                    <div className="chat-message-slot" key={offer.image}>
                      <div className="chat-message">
                        <span className="chat-sender">{siteConfig.name} <span>Admin</span></span>
                        <div className="chat-product-image">
                          <Image src={offer.image} width={offer.width} height={offer.height} alt="" sizes="240px" loading="eager" />
                        </div>
                        <div className="chat-message-copy">
                          <strong className="chat-product-title">{offer.title}</strong>
                          <p className="chat-product-detail">{offer.detail}</p>
                          <span className="chat-old-price">De <s>{offer.previousPrice}</s></span>
                          <strong className="chat-offer-price">🔥 Por {offer.price}</strong>
                          <span className="chat-store">🛍️ {offer.store}</span>
                          <span className="chat-offer-link">{offer.linkLabel}</span>
                          <span className="chat-message-time">{offer.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="chat-composer">
            <div className="chat-input">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M8 14c2 3 6 3 8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="9" cy="9" r="1" fill="currentColor" /><circle cx="15" cy="9" r="1" fill="currentColor" /></svg>
              <span>Mensagem</span>
              <svg viewBox="0 0 24 24" fill="none"><path d="m9 13 6-6a3 3 0 0 1 4 4l-9 9a5 5 0 0 1-7-7L13 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <svg viewBox="0 0 24 24" fill="none"><path d="m8 5 1-2h6l1 2h4v15H4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /></svg>
            </div>
            <div className="chat-mic"><svg viewBox="0 0 24 24" fill="none"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" /><path d="M6 10v2a6 6 0 0 0 12 0v-2m-6 8v3m-3 0h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></div>
          </div>
          <div className="phone-home"><span /></div>
        </div>
      </div>
      <div className="preview-caption">
        <p>Simulação com ofertas já compartilhadas.</p>
        <button className="preview-playback" type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Reproduzir prévia do grupo" : "Pausar prévia do grupo"}>
          {paused ? <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg> : <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 3h3v10H4zm5 0h3v10H9z" fill="currentColor" /></svg>}
          {paused ? "Reproduzir" : "Pausar"}
        </button>
      </div>
      <p className="sr-only">Prévia ilustrativa de um grupo do WhatsApp, com fotos de produtos e mensagens de ofertas arquivadas de novembro de 2026. Os valores exibidos são históricos.</p>
    </div>
  );
}
