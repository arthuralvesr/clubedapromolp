import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function WhatsAppMark(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.2Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 7.4c.5-.2.8 1 1.3 1.7.3.5-.7 1-.7 1.4.8 1.7 2.1 2.8 3.7 3.4.5.1.9-1 1.4-.8l1.8.9c.8.5-.2 2-1.2 2-3.6-.2-7.8-4.3-7.7-7.2 0-.6.7-1.3 1.4-1.4Z" fill="currentColor" />
    </svg>
  );
}
