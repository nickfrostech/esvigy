<script lang="ts">
/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/svelte generator.
 * Source: packages/svg/src/StatusFail.svg
 */

export let color: string = "currentColor";
export let secondaryColor: string = "transparent";
export let animated: boolean = false;
let className: string = "";
export { className as class };
export let style: string = "";
</script>

<svg
  viewBox="575 192 2050 2340"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="esvigy-svg{animated ? ' esvigy-animated' : ''}{className ? ` ${className}` : ''}"
  data-animated={animated ? "true" : undefined}
  data-author="nick"
  data-source="https://github.com/nickfrostech"
  style="display: block;{style ? ` ${style}` : ''}"
  role="img"
  aria-label="StatusFail illustration"
  {...$$restProps}
>
  {#if animated}
    {@html `<style>
@keyframes esvigy-badge-alert {
      0%, 100% { transform: translateY(0) scale(1); }
      30% { transform: translateY(-14px) scale(1.03); }
      38% { transform: translateY(-14px) rotate(-1.5deg) scale(1.03); }
      46% { transform: translateY(-14px) rotate(1.5deg) scale(1.03); }
      54% { transform: translateY(-12px) rotate(0deg) scale(1.02); }
    }
    @keyframes esvigy-card-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes esvigy-shadow-pulse {
      0%, 100% { transform: scale(1); opacity: 0.22; }
      50% { transform: scale(0.93); opacity: 0.12; }
    }
    @keyframes esvigy-orbit-dash {
      to { stroke-dashoffset: -112px; }
    }
    @keyframes esvigy-alert-flutter-1 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(10px, -16px) rotate(10deg); }
    }
    @keyframes esvigy-alert-flutter-2 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-12px, -14px) rotate(-12deg); }
    }
    @keyframes esvigy-alert-flutter-3 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(8px, -12px) rotate(8deg); }
    }
    @keyframes esvigy-alert-flutter-4 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-10px, -18px) rotate(-10deg); }
    }
    @keyframes esvigy-sparkle-twinkle {
      0%, 100% { opacity: 0.3; transform: scale(0.85); }
      50% { opacity: 0.95; transform: scale(1.2); }
    }

    svg.esvigy-animated .esvigy-hero-badge,
    svg[data-animated="true"] .esvigy-hero-badge {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-badge-alert 4.2s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-cards-assembly,
    svg[data-animated="true"] .esvigy-cards-assembly {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-card-float 4.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-ground-shadow,
    svg[data-animated="true"] .esvigy-ground-shadow {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-shadow-pulse 4.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-orbit-ring,
    svg[data-animated="true"] .esvigy-orbit-ring {
      animation: esvigy-orbit-dash 3.2s linear infinite;
    }

    svg.esvigy-animated .esvigy-alert-1,
    svg[data-animated="true"] .esvigy-alert-1 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-alert-flutter-1 3.6s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-alert-2,
    svg[data-animated="true"] .esvigy-alert-2 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-alert-flutter-2 4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-alert-3,
    svg[data-animated="true"] .esvigy-alert-3 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-alert-flutter-3 3.8s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-alert-4,
    svg[data-animated="true"] .esvigy-alert-4 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-alert-flutter-4 4.2s ease-in-out infinite;
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
      svg.esvigy-animated .esvigy-orbit-ring,
      svg.esvigy-animated .esvigy-alert-1,
      svg.esvigy-animated .esvigy-alert-2,
      svg.esvigy-animated .esvigy-alert-3,
      svg.esvigy-animated .esvigy-alert-4,
      svg.esvigy-animated .esvigy-sparkle,
      svg[data-animated="true"] .esvigy-hero-badge,
      svg[data-animated="true"] .esvigy-cards-assembly,
      svg[data-animated="true"] .esvigy-ground-shadow,
      svg[data-animated="true"] .esvigy-orbit-ring,
      svg[data-animated="true"] .esvigy-alert-1,
      svg[data-animated="true"] .esvigy-alert-2,
      svg[data-animated="true"] .esvigy-alert-3,
      svg[data-animated="true"] .esvigy-alert-4,
      svg[data-animated="true"] .esvigy-sparkle {
        animation: none !important;
      }
    }
    </style>`}
  {/if}
  <defs>
    
    <radialGradient id="StatusFail_fail_ground_grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#111928" stop-opacity="0.25" />
      <stop offset="60%" stop-color="#111928" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0" />
    </radialGradient>

    
    <linearGradient id="StatusFail_fail_card_surface_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.16" />
      <stop offset="50%" stop-color="white" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.24" />
    </linearGradient>

    
    <linearGradient id="StatusFail_fail_badge_bevel_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.32" />
      <stop offset="45%" stop-color="white" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.3" />
    </linearGradient>

    
    <linearGradient id="StatusFail_fail_cross_lighting_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="1" />
      <stop offset="100%" stop-color="#F1F5F9" stop-opacity="0.92" />
    </linearGradient>

    
    <filter id="StatusFail_fail_badge_shadow_filter" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#111928" flood-opacity="0.28" />
    </filter>
  </defs>

  
  <circle cx="1600" cy="1460" r="940" fill={color} opacity="0.06" />

  
  <ellipse class="esvigy-orbit-ring" cx="1600" cy="1460" rx="900" ry="700" stroke={color} stroke-width="14" stroke-dasharray="32 24" opacity="0.22" transform="rotate(15 1600 1460)" fill="none" />

  
  <ellipse class="esvigy-ground-shadow" cx="1600" cy="2420" rx="1000" ry="86" fill="url(#StatusFail_fail_ground_grad)" />

  
  <g class="esvigy-cards-assembly">
    
    <rect transform="matrix(0.975 -0.22 0.22 0.975 880 500)" width="1240" height="1520" rx="160" fill={secondaryColor !== "transparent" ? secondaryColor : "#334155"} data-esvigy-secondary="true" data-esvigy-default="#334155" opacity="0.5" />

    
    <g id="StatusFail_fail_card_front_group">
      <rect x="1000" y="440" width="1200" height="1580" rx="180" fill={secondaryColor !== "transparent" ? secondaryColor : "#1E293B"} data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" fill="url(#StatusFail_fail_card_surface_grad)" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" stroke={color} stroke-width="12" opacity="0.18" />

      
      <g opacity="0.9">
        <rect x="1220" y="560" width="360" height="52" rx="26" fill={color} opacity="0.16" />
        <circle cx="1255" cy="586" r="12" fill={color} />
        <rect x="1285" y="576" width="240" height="20" rx="10" fill={color} opacity="0.8" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="740" r="42" fill={color} />
        <path d="M1205 725 L1235 755 M1235 725 L1205 755" stroke="white" stroke-width="8" stroke-linecap="round" />
        <rect x="1310" y="724" width="680" height="32" rx="16" fill="white" opacity="0.22" />
        <rect x="1820" y="720" width="170" height="40" rx="20" fill={color} opacity="0.25" />
        <circle cx="1845" cy="740" r="6" fill={color} />
        <rect x="1865" y="734" width="105" height="12" rx="6" fill={color} opacity="0.9" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="920" r="42" fill={color} />
        <path d="M1205 905 L1235 935 M1235 905 L1205 935" stroke="white" stroke-width="8" stroke-linecap="round" />
        <rect x="1310" y="904" width="560" height="32" rx="16" fill="white" opacity="0.22" />
        <rect x="1780" y="900" width="120" height="40" rx="20" fill={color} opacity="0.2" />
        <rect x="1805" y="914" width="70" height="12" rx="6" fill={color} opacity="0.85" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="1100" r="42" fill={color} />
        <path d="M1220 1084 L1220 1104" stroke="white" stroke-width="8" stroke-linecap="round" />
        <circle cx="1220" cy="1116" r="4.5" fill="white" />
        <rect x="1310" y="1084" width="620" height="32" rx="16" fill="white" opacity="0.22" />
      </g>
    </g>
  </g>

  
  <g class="esvigy-hero-badge" filter="url(#StatusFail_fail_badge_shadow_filter)">
    
    <circle cx="1600" cy="1540" r="460" stroke={color} stroke-width="24" stroke-dasharray="36 24" opacity="0.35" fill="none" />

    
    <circle cx="1600" cy="1540" r="400" fill={color} />
    <circle cx="1600" cy="1540" r="400" fill="url(#StatusFail_fail_badge_bevel_grad)" />

    
    <circle cx="1600" cy="1540" r="350" stroke="white" stroke-width="10" opacity="0.32" fill="none" />

    
    <g fill="#111928" opacity="0.28" transform="translate(0, 20)">
      <rect x="1370" y="1502" width="460" height="76" rx="38" transform="rotate(45 1600 1540)" />
      <rect x="1370" y="1502" width="460" height="76" rx="38" transform="rotate(-45 1600 1540)" />
    </g>

    
    <g fill="url(#StatusFail_fail_cross_lighting_grad)">
      <rect x="1370" y="1502" width="460" height="76" rx="38" transform="rotate(45 1600 1540)" />
      <rect x="1370" y="1502" width="460" height="76" rx="38" transform="rotate(-45 1600 1540)" />
    </g>

    
    <line x1="1455" y1="1395" x2="1745" y2="1685" stroke="white" stroke-width="8" stroke-linecap="round" opacity="0.4" />
    <line x1="1745" y1="1395" x2="1455" y2="1685" stroke="white" stroke-width="8" stroke-linecap="round" opacity="0.4" />
  </g>

  
  
  <g class="esvigy-alert-1" transform="translate(720, 720)">
    <path d="M70 12 L132 118 C138 128 130 142 118 142 L22 142 C10 142 2 128 8 118 L70 12 Z" fill={color} opacity="0.85" />
    <path d="M70 54 L70 90" stroke="white" stroke-width="10" stroke-linecap="round" />
    <circle cx="70" cy="114" r="6" fill="white" />
  </g>

  
  <g class="esvigy-alert-2" transform="translate(2360, 700)">
    <circle cx="60" cy="60" r="56" fill={color} opacity="0.85" />
    <path d="M42 42 L78 78 M78 42 L42 78" stroke="white" stroke-width="10" stroke-linecap="round" />
  </g>

  
  <path class="esvigy-alert-3" d="M760 1200 L810 1280 L775 1285 L825 1370" stroke={color} stroke-width="18" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.75" />
  <path class="esvigy-alert-4" d="M2460 1220 L2410 1300 L2445 1305 L2395 1390" stroke={color} stroke-width="18" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.75" />

  
  <polygon class="esvigy-alert-3" points="790,1210 820,1250 790,1290 760,1250" fill={color} opacity="0.85" />
  <polygon class="esvigy-alert-4" points="2460,1260 2490,1300 2460,1340 2430,1300" fill={color} opacity="0.85" />

  
  <rect class="esvigy-alert-1" x="910" y="1590" width="70" height="30" rx="15" transform="rotate(-28 945 1605)" fill={secondaryColor !== "transparent" ? secondaryColor : "#F87171"} data-esvigy-secondary="true" data-esvigy-default="#F87171" opacity="0.85" />
  <rect class="esvigy-alert-2" x="2310" y="1660" width="70" height="30" rx="15" transform="rotate(32 2345 1675)" fill={secondaryColor !== "transparent" ? secondaryColor : "#F87171"} data-esvigy-secondary="true" data-esvigy-default="#F87171" opacity="0.85" />

  
  <path class="esvigy-sparkle" d="M1220 400 C1220 422 1242 436 1264 436 C1242 436 1220 450 1220 472 C1220 450 1198 436 1176 436 C1198 436 1220 422 1220 400 Z" fill={color} opacity="0.85" />
  <path class="esvigy-sparkle" d="M2140 980 C2140 1000 2160 1012 2180 1012 C2160 1012 2140 1024 2140 1044 C2140 1024 2120 1012 2100 1012 C2120 1012 2140 1000 2140 980 Z" fill={color} opacity="0.85" />
  <path class="esvigy-sparkle" d="M1120 1920 C1120 1938 1136 1950 1154 1950 C1136 1950 1120 1962 1120 1980 C1120 1962 1104 1950 1086 1950 C1104 1950 1120 1938 1120 1920 Z" fill={color} opacity="0.75" />
  <path class="esvigy-sparkle" d="M2160 1960 C2160 1978 2176 1990 2194 1990 C2176 1990 2160 2002 2160 2020 C2160 2002 2144 1990 2126 1990 C2144 1990 2160 1978 2160 1960 Z" fill={color} opacity="0.75" />
</svg>
