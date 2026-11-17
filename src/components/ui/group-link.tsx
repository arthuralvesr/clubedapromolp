import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { WhatsAppMark } from "./icons";

export function GroupLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a href={siteConfig.links.group} className={`button ${className}`} target="_blank" rel="noopener noreferrer">
      <WhatsAppMark className="whatsapp-mark" />
      <span>{children}</span>
      <span className="sr-only"> (abre o convite no WhatsApp em uma nova aba)</span>
    </a>
  );
}
