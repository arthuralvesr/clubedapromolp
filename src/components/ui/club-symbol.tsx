// Formas do cupom original de logo/clube-da-promo/_tools/criar-identidade.py.
export function ClubSymbol({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <rect width="400" height="400" rx="104" fill="#D7FF3F" />
      <rect x="36" y="72" width="328" height="256" rx="38" fill="#12352B" />
      <g fill="#D7FF3F">
        <circle cx="36" cy="200" r="30" />
        <circle cx="364" cy="200" r="30" />
        <circle cx="144" cy="147" r="27" />
        <circle cx="256" cy="253" r="27" />
      </g>
      <path d="m145 266 110-132" stroke="#D7FF3F" strokeWidth="30" />
    </svg>
  );
}
