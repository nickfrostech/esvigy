/**
 * Generated automatically by @memy/react generator.
 * Source: packages/svg/src/NotFound.svg
 */

import type { MemyProps } from "../types";

export const NotFound = ({
  color = "currentColor",
  secondaryColor = "transparent",
  animated = false,
  className = "",
  style,
  ...props
}: MemyProps) => {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={["memy-svg", animated ? "memy-animated" : "", className].filter(Boolean).join(" ")}
      data-animated={animated ? "true" : undefined}
      style={{
        display: "block",
        ...style,
      }}
      role="img"
      aria-label="NotFound illustration"
      {...props}
    >
      {animated && (
        <style>
          {`
@keyframes memy-notfound-float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(1deg); }
    }
    @keyframes memy-notfound-shadow {
      0%, 100% { transform: scale(1); opacity: 0.15; }
      50% { transform: scale(0.9); opacity: 0.08; }
    }
    @keyframes memy-notfound-blink {
      0%, 90%, 100% { transform: scaleY(1); }
      95% { transform: scaleY(0.1); }
    }
    @keyframes memy-notfound-badge {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-4px); }
    }

    svg.memy-animated .memy-notfound-body,
    svg[data-animated="true"] .memy-notfound-body {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-notfound-float 3s ease-in-out infinite;
    }
    svg.memy-animated .memy-shadow,
    svg[data-animated="true"] .memy-shadow {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-notfound-shadow 3s ease-in-out infinite;
    }
    svg.memy-animated .memy-notfound-eyes,
    svg[data-animated="true"] .memy-notfound-eyes {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-notfound-blink 3.5s ease-in-out infinite;
    }
    svg.memy-animated .memy-notfound-badge,
    svg[data-animated="true"] .memy-notfound-badge {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-notfound-badge 2s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      svg.memy-animated *,
      svg[data-animated="true"] * {
        animation: none !important;
      }
    }
          `}
        </style>
      )}
      
  <ellipse cx="200" cy="245" rx="80" ry="10" fill={secondaryColor !== "transparent" ? secondaryColor : color} opacity="0.15" data-memy-secondary="true" className="memy-shadow" />

  
  <g className="memy-notfound-body">
    
    <circle cx="200" cy="130" r="85" fill={secondaryColor !== "transparent" ? secondaryColor : color} opacity="0.25" data-memy-secondary="true" />

    
    <rect x="120" y="70" width="160" height="140" rx="24" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

    
    <g className="memy-notfound-eyes">
      <circle cx="165" cy="125" r="7" fill={color} />
      <circle cx="235" cy="125" r="7" fill={color} />
    </g>

    
    <path d="M175 160 C 190 150, 210 150, 225 160" stroke={color} strokeWidth="6" strokeLinecap="round" />

    
    <g className="memy-notfound-badge">
      <rect x="165" y="48" width="70" height="30" rx="15" fill={secondaryColor !== "transparent" ? secondaryColor : color} opacity="0.15" data-memy-secondary="true" />
      <text x="200" y="68" textAnchor="middle" fill={color} fontSize="14" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">404</text>
    </g>
  </g>
    </svg>
  );
};
