/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/react generator.
 * Source: packages/svg/src/NotFoundRobot.svg
 */

import type { EsvigyProps } from "../types";

export const NotFoundRobot = ({
  color = "currentColor",
  secondaryColor = "transparent",
  animated = false,
  className = "",
  style,
  ...props
}: EsvigyProps) => {
  return (
    <svg
      viewBox="0 0 420 380"
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
      aria-label="NotFoundRobot illustration"
      {...props}
    >
      {animated && (
        <style>
          {`
@keyframes esvigy-robot-float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-9px) rotate(1.2deg); }
    }
    @keyframes esvigy-robot-blink {
      0%, 88%, 94%, 100% { transform: scaleY(1); }
      91% { transform: scaleY(0.08); }
    }
    @keyframes esvigy-antenna-pulse {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 1; }
    }
    @keyframes esvigy-signal-emit {
      0%, 100% { opacity: 0.3; transform: scale(0.9); }
      50% { opacity: 0.85; transform: scale(1.08); }
    }
    @keyframes esvigy-robot-shadow {
      0%, 100% { transform: scaleX(1); opacity: 0.28; }
      50% { transform: scaleX(0.85); opacity: 0.12; }
    }
    @keyframes esvigy-sparkle-float {
      0%, 100% { transform: translateY(0px) scale(0.8); opacity: 0.3; }
      50% { transform: translateY(-6px) scale(1.15); opacity: 0.9; }
    }

    svg.esvigy-animated .esvigy-robot-head,
    svg[data-animated="true"] .esvigy-robot-head {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-robot-float 3.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-robot-eyes,
    svg[data-animated="true"] .esvigy-robot-eyes {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-robot-blink 4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-antenna-light,
    svg[data-animated="true"] .esvigy-antenna-light {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-antenna-pulse 2s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-signal-wave,
    svg[data-animated="true"] .esvigy-signal-wave {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-signal-emit 2s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-robot-shadow,
    svg[data-animated="true"] .esvigy-robot-shadow {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-robot-shadow 3.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-sparkle-1,
    svg[data-animated="true"] .esvigy-sparkle-1 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-sparkle-float 2.8s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-sparkle-2,
    svg[data-animated="true"] .esvigy-sparkle-2 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-sparkle-float 2.8s ease-in-out 1.4s infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      svg.esvigy-animated *,
      svg[data-animated="true"] * {
        animation: none !important;
      }
    }
          `}
        </style>
      )}
      
  <ellipse className="esvigy-robot-shadow" cx="210" cy="365" rx="110" ry="8" fill="#000000" opacity="0.28"/>

  
  <g className="esvigy-robot-head">

    
    <rect x="180" y="278" width="60" height="32" rx="4" fill={secondaryColor !== "transparent" ? secondaryColor : "#1e293b"} data-esvigy-secondary="true" data-esvigy-default="#1e293b"/>
    <line x1="180" y1="288" x2="240" y2="288" stroke={color} strokeWidth="2.5" opacity="0.35"/>
    <line x1="180" y1="298" x2="240" y2="298" stroke={color} strokeWidth="2.5" opacity="0.35"/>
    <path d="M152 308 L268 308 L285 338 L135 338 Z" fill={secondaryColor !== "transparent" ? secondaryColor : "#0f172a"} data-esvigy-secondary="true" data-esvigy-default="#0f172a"/>
    <path d="M152 308 L268 308 L285 338 L135 338 Z" stroke={color} strokeWidth="3" opacity="0.4"/>

    
    
    <g className="esvigy-ear-left">
      <rect x="34" y="140" width="30" height="74" rx="10" fill={secondaryColor !== "transparent" ? secondaryColor : "#334155"} data-esvigy-secondary="true" data-esvigy-default="#334155"/>
      <rect x="34" y="140" width="30" height="74" rx="10" stroke={color} strokeWidth="3" opacity="0.5"/>
      <circle cx="49" cy="177" r="13" fill={color}/>
      <circle cx="49" cy="177" r="6.5" fill="#ffffff" opacity="0.4"/>
      
      <path className="esvigy-signal-wave" d="M22 158 C14 170 14 184 22 196" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    </g>

    
    <g className="esvigy-ear-right">
      <rect x="356" y="140" width="30" height="74" rx="10" fill={secondaryColor !== "transparent" ? secondaryColor : "#334155"} data-esvigy-secondary="true" data-esvigy-default="#334155"/>
      <rect x="356" y="140" width="30" height="74" rx="10" stroke={color} strokeWidth="3" opacity="0.5"/>
      <circle cx="371" cy="177" r="13" fill={color}/>
      <circle cx="371" cy="177" r="6.5" fill="#ffffff" opacity="0.4"/>
      
      <path className="esvigy-signal-wave" d="M398 158 C406 170 406 184 398 196" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    </g>

    
    <rect x="206" y="44" width="8" height="38" rx="4" fill={secondaryColor !== "transparent" ? secondaryColor : "#334155"} data-esvigy-secondary="true" data-esvigy-default="#334155"/>
    <line x1="202" y1="58" x2="218" y2="58" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="202" y1="68" x2="218" y2="68" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    
    
    <path className="esvigy-signal-wave" d="M190 22 C202 12 218 12 230 22" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path className="esvigy-signal-wave" d="M180 12 C198 -2 222 -2 240 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>

    
    <g className="esvigy-antenna-light">
      <circle cx="210" cy="32" r="18" fill={color} opacity="0.25"/>
      <circle cx="210" cy="32" r="10.5" fill={color}/>
      <circle cx="206.5" cy="28.5" r="3.5" fill="#ffffff" opacity="0.8"/>
    </g>

    
    <rect x="60" y="76" width="300" height="212" rx="36" fill={secondaryColor !== "transparent" ? secondaryColor : "#1e293b"} data-esvigy-secondary="true" data-esvigy-default="#1e293b"/>
    <rect x="60" y="76" width="300" height="212" rx="36" stroke={color} strokeWidth="5"/>

    
    <circle cx="84" cy="100" r="4.5" fill={color} opacity="0.6"/>
    <circle cx="336" cy="100" r="4.5" fill={color} opacity="0.6"/>
    <circle cx="84" cy="264" r="4.5" fill={color} opacity="0.6"/>
    <circle cx="336" cy="264" r="4.5" fill={color} opacity="0.6"/>

    
    <rect x="86" y="104" width="248" height="154" rx="22" fill="#0b1120"/>
    <rect x="86" y="104" width="248" height="154" rx="22" stroke={color} strokeWidth="2.5" opacity="0.45"/>

    
    <path d="M98 116 L226 116 L194 148 L98 148 Z" fill="#ffffff" opacity="0.05"/>

    
    <g className="esvigy-robot-badge">
      <rect x="175" y="116" width="70" height="22" rx="6" fill={color} opacity="0.2"/>
      <rect x="175" y="116" width="70" height="22" rx="6" stroke={color} strokeWidth="1.5" opacity="0.6"/>
      <text x="210" y="132" textAnchor="middle" fill={color} fontSize="12" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letter-spacing="2">404</text>
    </g>

    
    <g className="esvigy-robot-eyes">
      
      <g>
        <rect x="122" y="152" width="46" height="40" rx="10" fill={color} opacity="0.18"/>
        <rect x="129" y="158" width="32" height="28" rx="8" fill={color}/>
        
        <circle cx="138" cy="167" r="4" fill="#ffffff" opacity="0.85"/>
      </g>

      
      <g>
        <rect x="252" y="152" width="46" height="40" rx="10" fill={color} opacity="0.18"/>
        <rect x="259" y="158" width="32" height="28" rx="8" fill={color}/>
        
        <circle cx="268" cy="167" r="4" fill="#ffffff" opacity="0.85"/>
      </g>
    </g>

    
    <path d="M172 222 Q191 230 210 222 T248 222" stroke={color} strokeWidth="4.5" strokeLinecap="round" fill="none"/>

    
    <circle cx="118" cy="210" r="7.5" fill={color} opacity="0.35"/>
    <circle cx="302" cy="210" r="7.5" fill={color} opacity="0.35"/>
  </g>

  
  <g className="esvigy-sparkle-1">
    <path d="M374 80 L378 92 L390 96 L378 100 L374 112 L370 100 L358 96 L370 92 Z" fill={color}/>
  </g>
  <g className="esvigy-sparkle-2">
    <path d="M48 248 L51 256 L59 259 L51 262 L48 270 L45 262 L37 259 L45 256 Z" fill={color}/>
  </g>
    </svg>
  );
};
