/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/react generator.
 * Source: packages/svg/src/ActionDownload.svg
 */

import type { EsvigyProps } from "../types";

export const ActionDownload = ({
  color = "currentColor",
  secondaryColor = "transparent",
  animated = false,
  className = "",
  style,
  ...props
}: EsvigyProps) => {
  return (
    <svg
      viewBox="575 192 2050 2340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={["esvigy-svg", animated ? "esvigy-animated" : "", className].filter(Boolean).join(" ")}
      data-animated={animated ? "true" : undefined}
      data-author="nick"
      data-source="https://github.com/nickfrostech"
      style={{
        display: "block",
        ...style,
      }}
      role="img"
      aria-label="ActionDownload illustration"
      {...props}
    >
      {animated && (
        <style>
          {`
@keyframes esvigy-download-badge {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-16px); }
    }
    @keyframes esvigy-cards-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes esvigy-shadow-pulse {
      0%, 100% { transform: scale(1); opacity: 0.22; }
      50% { transform: scale(0.93); opacity: 0.12; }
    }
    @keyframes esvigy-stream-fall {
      0% { transform: translateY(-36px); opacity: 0.2; }
      50% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(36px); opacity: 0.15; }
    }
    @keyframes esvigy-sparkle-twinkle {
      0%, 100% { transform: scale(0.85) rotate(0deg); opacity: 0.45; }
      50% { transform: scale(1.15) rotate(90deg); opacity: 0.95; }
    }

    svg.esvigy-animated .esvigy-hero-badge,
    svg[data-animated="true"] .esvigy-hero-badge {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-download-badge 4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-cards-assembly,
    svg[data-animated="true"] .esvigy-cards-assembly {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-cards-float 4.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-ground-shadow,
    svg[data-animated="true"] .esvigy-ground-shadow {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-shadow-pulse 4.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-stream-1,
    svg[data-animated="true"] .esvigy-stream-1 {
      animation: esvigy-stream-fall 2.6s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-stream-2,
    svg[data-animated="true"] .esvigy-stream-2 {
      animation: esvigy-stream-fall 3s ease-in-out infinite 0.7s;
    }

    svg.esvigy-animated .esvigy-sparkle,
    svg[data-animated="true"] .esvigy-sparkle {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-sparkle-twinkle 2.8s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      svg.esvigy-animated .esvigy-hero-badge,
      svg.esvigy-animated .esvigy-cards-assembly,
      svg.esvigy-animated .esvigy-ground-shadow,
      svg.esvigy-animated .esvigy-stream-1,
      svg.esvigy-animated .esvigy-stream-2,
      svg.esvigy-animated .esvigy-sparkle,
      svg[data-animated="true"] .esvigy-hero-badge,
      svg[data-animated="true"] .esvigy-cards-assembly,
      svg[data-animated="true"] .esvigy-ground-shadow,
      svg[data-animated="true"] .esvigy-stream-1,
      svg[data-animated="true"] .esvigy-stream-2,
      svg[data-animated="true"] .esvigy-sparkle {
        animation: none !important;
      }
    }
          `}
        </style>
      )}
      <defs>
    
    <radialGradient id="ActionDownload_download_ground_grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#111928" stopOpacity="0.25" />
      <stop offset="60%" stopColor="#111928" stopOpacity="0.1" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0" />
    </radialGradient>

    
    <linearGradient id="ActionDownload_download_card_surface_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="0.15" />
      <stop offset="50%" stopColor="white" stopOpacity="0.03" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0.2" />
    </linearGradient>

    
    <linearGradient id="ActionDownload_download_badge_bevel_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="0.32" />
      <stop offset="45%" stopColor="white" stopOpacity="0.06" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0.3" />
    </linearGradient>


    
    <filter id="ActionDownload_download_badge_shadow_filter" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" floodColor="#111928" floodOpacity="0.28" />
    </filter>
  </defs>

  
  <circle cx="1600" cy="1460" r="940" fill={color} opacity="0.06" />

  
  <ellipse cx="1600" cy="1460" rx="900" ry="700" stroke={color} strokeWidth="14" strokeDasharray="28 28" opacity="0.22" transform="rotate(15 1600 1460)" fill="none" />

  
  <ellipse className="esvigy-ground-shadow" cx="1600" cy="2420" rx="1000" ry="86" fill="url(#ActionDownload_download_ground_grad)" />

  
  <g className="esvigy-cards-assembly">
    
    <rect transform="matrix(0.975 -0.22 0.22 0.975 880 500)" width="1240" height="1520" rx="160" fill={secondaryColor !== "transparent" ? secondaryColor : "#334155"} data-esvigy-secondary="true" data-esvigy-default="#334155" opacity="0.5" />

    
    <g id="ActionDownload_card_front_group">
      <rect x="1000" y="440" width="1200" height="1580" rx="180" fill={secondaryColor !== "transparent" ? secondaryColor : "#1E293B"} data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" fill="url(#ActionDownload_download_card_surface_grad)" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" stroke={color} strokeWidth="12" opacity="0.18" />

      
      <g opacity="0.9">
        <rect x="1220" y="560" width="380" height="52" rx="26" fill={color} opacity="0.16" />
        <circle cx="1255" cy="586" r="12" fill={color} />
        <rect x="1285" y="576" width="260" height="20" rx="10" fill={color} opacity="0.8" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="740" r="42" fill={color} />
        <path d="M1210 738 L1220 748 L1230 738" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="1220" y1="730" x2="1220" y2="746" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <rect x="1310" y="724" width="560" height="32" rx="16" fill="white" opacity="0.22" />
        <rect x="1310" y="724" width="380" height="32" rx="16" fill={color} opacity="0.6" />
        <rect x="1780" y="720" width="120" height="40" rx="20" fill={color} opacity="0.2" />
        <rect x="1805" y="734" width="70" height="12" rx="6" fill={color} opacity="0.85" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="920" r="42" fill={color} />
        <path d="M1210 918 L1220 928 L1230 918" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="1220" y1="910" x2="1220" y2="926" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <rect x="1310" y="904" width="620" height="32" rx="16" fill="white" opacity="0.22" />
        <rect x="1310" y="904" width="510" height="32" rx="16" fill={color} opacity="0.6" />
        <rect x="1780" y="900" width="150" height="40" rx="20" fill={color} opacity="0.2" />
        <rect x="1805" y="914" width="100" height="12" rx="6" fill={color} opacity="0.85" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="1100" r="42" fill={color} />
        <path d="M1210 1098 L1220 1108 L1230 1098" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="1220" y1="1090" x2="1220" y2="1106" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <rect x="1310" y="1084" width="600" height="32" rx="16" fill="white" opacity="0.22" />
        <rect x="1310" y="1084" width="240" height="32" rx="16" fill={color} opacity="0.6" />
      </g>
    </g>
  </g>

  
  <g className="esvigy-hero-badge" filter="url(#ActionDownload_download_badge_shadow_filter)">
    
    <circle cx="1600" cy="1540" r="460" stroke={color} strokeWidth="24" strokeDasharray="36 24" opacity="0.35" fill="none" />

    
    <circle cx="1600" cy="1540" r="400" fill={color} />
    <circle cx="1600" cy="1540" r="400" fill="url(#ActionDownload_download_badge_bevel_grad)" />

    
    <circle cx="1600" cy="1540" r="350" stroke="white" strokeWidth="10" opacity="0.32" fill="none" />

    
    <g stroke="#111928" strokeWidth="76" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.26" transform="translate(0, 18)">
      
      <path d="M1415 1415 L1600 1600 L1785 1415" />
      
      <line x1="1600" y1="1280" x2="1600" y2="1580" />
      
      <path d="M1430 1680 L1430 1730 C1430 1745 1445 1755 1465 1755 L1735 1755 C1755 1755 1770 1745 1770 1730 L1770 1680" />
    </g>

    
    <g stroke="white" strokeWidth="76" strokeLinecap="round" strokeLinejoin="round" fill="none">
      
      <path d="M1415 1415 L1600 1600 L1785 1415" />
      
      <line x1="1600" y1="1280" x2="1600" y2="1580" />
      
      <path d="M1430 1680 L1430 1730 C1430 1745 1445 1755 1465 1755 L1735 1755 C1755 1755 1770 1745 1770 1730 L1770 1680" />
    </g>
  </g>

  
  
  <g className="esvigy-stream-1" transform="translate(720, 720)">
    <circle cx="60" cy="60" r="56" fill={color} opacity="0.85" />
    <path d="M44 58 L60 74 L76 58" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="60" y1="46" x2="60" y2="72" stroke="white" strokeWidth="8" strokeLinecap="round" />
  </g>

  
  <g className="esvigy-stream-2" transform="translate(2360, 700)">
    <circle cx="60" cy="60" r="56" fill={color} opacity="0.85" />
    <rect x="36" y="44" width="48" height="32" rx="8" fill="white" />
    <circle cx="48" cy="60" r="4" fill={color} />
    <line x1="60" y1="60" x2="74" y2="60" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </g>

  
  <path className="esvigy-stream-1" d="M780 1230 L810 1260 L840 1230" stroke={color} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.75" />
  <path className="esvigy-stream-2" d="M2420 1230 L2450 1260 L2480 1230" stroke={color} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.75" />

  
  <rect className="esvigy-stream-1" x="910" y="1590" width="70" height="30" rx="15" transform="rotate(28 945 1605)" fill={secondaryColor !== "transparent" ? secondaryColor : "#38BDF8"} data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />
  <rect className="esvigy-stream-2" x="2310" y="1660" width="70" height="30" rx="15" transform="rotate(-32 2345 1675)" fill={secondaryColor !== "transparent" ? secondaryColor : "#38BDF8"} data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />

  
  <path className="esvigy-sparkle" d="M1220 400 C1220 422 1242 436 1264 436 C1242 436 1220 450 1220 472 C1220 450 1198 436 1176 436 C1198 436 1220 422 1220 400 Z" fill={color} opacity="0.85" />
  <path className="esvigy-sparkle" d="M2140 980 C2140 1000 2160 1012 2180 1012 C2160 1012 2140 1024 2140 1044 C2140 1024 2120 1012 2100 1012 C2120 1012 2140 1000 2140 980 Z" fill={color} opacity="0.85" />
  <path className="esvigy-sparkle" d="M1120 1920 C1120 1938 1136 1950 1154 1950 C1136 1950 1120 1962 1120 1980 C1120 1962 1104 1950 1086 1950 C1104 1950 1120 1938 1120 1920 Z" fill={color} opacity="0.75" />
  <path className="esvigy-sparkle" d="M2160 1960 C2160 1978 2176 1990 2194 1990 C2176 1990 2160 2002 2160 2020 C2160 2002 2144 1990 2126 1990 C2144 1990 2160 1978 2160 1960 Z" fill={color} opacity="0.75" />
    </svg>
  );
};
