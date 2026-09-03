import React from "react";

const paths = {
  systems: (
    <g>
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="6" r="1.6" />
      <circle cx="19" cy="6" r="1.6" />
      <circle cx="5" cy="18" r="1.6" />
      <circle cx="19" cy="18" r="1.6" />
      <path d="M8.2 10.2 6.2 7.4M15.8 10.2 17.8 7.4M8.2 13.8 6.2 16.6M15.8 13.8 17.8 16.6" />
    </g>
  ),
  data: (
    <g>
      <path d="M4 19V11M10 19V5M16 19v-8M22 19H2" />
      <path d="M4 11h.01M10 5h.01M16 11h.01" />
    </g>
  ),
  web: (
    <g>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M3 15h18M8 19h8" />
    </g>
  ),
  proto: (
    <g>
      <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3z" />
      <path d="M12 12 20 7.5M12 12v9M12 12 4 7.5" />
    </g>
  ),
  supply: (
    <g>
      <path d="M3 8h13v10H3zM16 12h5l2 3v3h-7" />
      <circle cx="7.5" cy="19.5" r="1.5" />
      <circle cx="18.5" cy="19.5" r="1.5" />
    </g>
  ),
  ai: (
    <g>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.2 2.2M15.8 15.8 18 18M18 6l-2.2 2.2M8.2 15.8 6 18" />
    </g>
  ),
  vision: (
    <g>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22" />
    </g>
  ),
  mission: (
    <g>
      <path d="M5 19 19 5" />
      <path d="M10 5h9v9" />
      <path d="M5 13v6h6" />
    </g>
  ),
  facebook: (
    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1z" />
  ),
  instagram: (
    <g>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </g>
  ),
  linkedin: (
    <g>
      <path d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4A1.6 1.6 0 1 0 5.1 7.2 1.6 1.6 0 0 0 5.1 4zM20.3 20h-2.8v-5.6c0-1.8-.7-2.4-1.8-2.4s-2 .9-2 2.5V20H10.9V9.5h2.7v1.4c.6-.9 1.8-1.7 3.4-1.7 2.4 0 3.3 1.5 3.3 4.4V20z" />
    </g>
  ),
};

export default function Icon({ name, className = "" }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.systems}
    </svg>
  );
}
