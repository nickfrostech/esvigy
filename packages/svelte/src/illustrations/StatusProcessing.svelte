<script lang="ts">
/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/svelte generator.
 * Source: packages/svg/src/StatusProcessing.svg
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
  aria-label="StatusProcessing illustration"
  {...$$restProps}
>
  {#if animated}
    {@html `<style>
@keyframes esvigy-hero-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes esvigy-badge-breathe {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-14px) scale(1.025); }
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
    @keyframes esvigy-item-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes esvigy-bar-shimmer {
      0%, 100% { opacity: 0.82; transform: scaleX(1); }
      50% { opacity: 1; transform: scaleX(1.025); }
    }
    @keyframes esvigy-dot-wave-1 {
      0%, 100% { opacity: 0.4; transform: translateY(0) scale(0.9); }
      50% { opacity: 1; transform: translateY(-6px) scale(1.15); }
    }
    @keyframes esvigy-dot-wave-2 {
      0%, 100% { opacity: 0.4; transform: translateY(0) scale(0.9); }
      50% { opacity: 1; transform: translateY(-6px) scale(1.15); }
    }
    @keyframes esvigy-dot-wave-3 {
      0%, 100% { opacity: 0.4; transform: translateY(0) scale(0.9); }
      50% { opacity: 1; transform: translateY(-6px) scale(1.15); }
    }
    @keyframes esvigy-node-flutter-1 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(12px, -16px) rotate(12deg); }
    }
    @keyframes esvigy-node-flutter-2 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-14px, -14px) rotate(-14deg); }
    }
    @keyframes esvigy-sparkle-twinkle {
      0%, 100% { opacity: 0.3; transform: scale(0.85); }
      50% { opacity: 0.95; transform: scale(1.2); }
    }

    svg.esvigy-animated .esvigy-hero-badge,
    svg[data-animated="true"] .esvigy-hero-badge {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-badge-breathe 4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-hero-spinner,
    svg[data-animated="true"] .esvigy-hero-spinner {
      transform-origin: 1600px 1540px;
      animation: esvigy-hero-spin 3s linear infinite;
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
      animation: esvigy-orbit-dash 3s linear infinite;
    }

    svg.esvigy-animated .esvigy-item-spinner,
    svg[data-animated="true"] .esvigy-item-spinner {
      transform-origin: 1220px 920px;
      animation: esvigy-item-spin 2s linear infinite;
    }

    svg.esvigy-animated .esvigy-active-bar,
    svg[data-animated="true"] .esvigy-active-bar {
      transform-origin: 1310px 904px;
      animation: esvigy-bar-shimmer 2.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-sync-dot-1,
    svg[data-animated="true"] .esvigy-sync-dot-1 {
      transform-origin: 1500px 1540px;
      animation: esvigy-dot-wave-1 1.6s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-sync-dot-2,
    svg[data-animated="true"] .esvigy-sync-dot-2 {
      transform-origin: 1600px 1540px;
      animation: esvigy-dot-wave-2 1.6s ease-in-out 0.25s infinite;
    }

    svg.esvigy-animated .esvigy-sync-dot-3,
    svg[data-animated="true"] .esvigy-sync-dot-3 {
      transform-origin: 1700px 1540px;
      animation: esvigy-dot-wave-3 1.6s ease-in-out 0.5s infinite;
    }

    svg.esvigy-animated .esvigy-node-1,
    svg[data-animated="true"] .esvigy-node-1 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-node-flutter-1 3.8s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-node-2,
    svg[data-animated="true"] .esvigy-node-2 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-node-flutter-2 4.2s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-sparkle,
    svg[data-animated="true"] .esvigy-sparkle {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-sparkle-twinkle 2.8s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      svg.esvigy-animated .esvigy-hero-badge,
      svg.esvigy-animated .esvigy-hero-spinner,
      svg.esvigy-animated .esvigy-cards-assembly,
      svg.esvigy-animated .esvigy-ground-shadow,
      svg.esvigy-animated .esvigy-orbit-ring,
      svg.esvigy-animated .esvigy-item-spinner,
      svg.esvigy-animated .esvigy-active-bar,
      svg.esvigy-animated .esvigy-sync-dot-1,
      svg.esvigy-animated .esvigy-sync-dot-2,
      svg.esvigy-animated .esvigy-sync-dot-3,
      svg.esvigy-animated .esvigy-node-1,
      svg.esvigy-animated .esvigy-node-2,
      svg.esvigy-animated .esvigy-sparkle,
      svg[data-animated="true"] .esvigy-hero-badge,
      svg[data-animated="true"] .esvigy-hero-spinner,
      svg[data-animated="true"] .esvigy-cards-assembly,
      svg[data-animated="true"] .esvigy-ground-shadow,
      svg[data-animated="true"] .esvigy-orbit-ring,
      svg[data-animated="true"] .esvigy-item-spinner,
      svg[data-animated="true"] .esvigy-active-bar,
      svg[data-animated="true"] .esvigy-sync-dot-1,
      svg[data-animated="true"] .esvigy-sync-dot-2,
      svg[data-animated="true"] .esvigy-sync-dot-3,
      svg[data-animated="true"] .esvigy-node-1,
      svg[data-animated="true"] .esvigy-node-2,
      svg[data-animated="true"] .esvigy-sparkle {
        animation: none !important;
      }
    }
    </style>`}
  {/if}
  <defs>
    
    <radialGradient id="StatusProcessing_proc_ground_grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#111928" stop-opacity="0.25" />
      <stop offset="60%" stop-color="#111928" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0" />
    </radialGradient>

    
    <linearGradient id="StatusProcessing_proc_card_surface_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.16" />
      <stop offset="50%" stop-color="white" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.24" />
    </linearGradient>

    
    <linearGradient id="StatusProcessing_proc_badge_bevel_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.32" />
      <stop offset="45%" stop-color="white" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.3" />
    </linearGradient>

    
    <linearGradient id="StatusProcessing_proc_spinner_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="1" />
      <stop offset="100%" stop-color="#F3F4F6" stop-opacity="0.9" />
    </linearGradient>

    
    <linearGradient id="StatusProcessing_proc_dot_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="1" />
      <stop offset="100%" stop-color="#E5E7EB" stop-opacity="0.88" />
    </linearGradient>

    
    <filter id="StatusProcessing_proc_badge_shadow_filter" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#111928" flood-opacity="0.28" />
    </filter>
  </defs>

  
  <circle cx="1600" cy="1460" r="940" fill={color} opacity="0.06" />

  
  <ellipse class="esvigy-orbit-ring" cx="1600" cy="1460" rx="900" ry="700" stroke={color} stroke-width="14" stroke-dasharray="28 28" opacity="0.22" transform="rotate(-15 1600 1460)" fill="none" />

  
  <ellipse class="esvigy-ground-shadow" cx="1600" cy="2420" rx="1000" ry="86" fill="url(#StatusProcessing_proc_ground_grad)" />

  
  <g class="esvigy-cards-assembly">
    
    <rect transform="matrix(0.975 -0.22 0.22 0.975 880 500)" width="1240" height="1520" rx="160" fill={secondaryColor !== "transparent" ? secondaryColor : "#334155"} data-esvigy-secondary="true" data-esvigy-default="#334155" opacity="0.5" />

    
    <g id="StatusProcessing_proc_card_front_group">
      <rect x="1000" y="440" width="1200" height="1580" rx="180" fill={secondaryColor !== "transparent" ? secondaryColor : "#1E293B"} data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" fill="url(#StatusProcessing_proc_card_surface_grad)" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" stroke={color} stroke-width="12" opacity="0.18" />

      
      <g opacity="0.9">
        <rect x="1220" y="560" width="380" height="52" rx="26" fill={color} opacity="0.16" />
        <circle cx="1255" cy="586" r="12" fill={color} />
        <rect x="1285" y="576" width="260" height="20" rx="10" fill={color} opacity="0.8" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="740" r="42" fill={color} />
        <path d="M1202 740 L1215 753 L1238 730" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <rect x="1310" y="724" width="680" height="32" rx="16" fill="white" opacity="0.22" />
        <rect x="1820" y="720" width="170" height="40" rx="20" fill={color} opacity="0.25" />
        <rect x="1845" y="734" width="120" height="12" rx="6" fill={color} opacity="0.9" />
      </g>

      
      <g opacity="0.95">
        <circle cx="1220" cy="920" r="42" fill={color} opacity="0.2" />
        <circle class="esvigy-item-spinner" cx="1220" cy="920" r="30" stroke={color} stroke-width="7" stroke-linecap="round" stroke-dasharray="120 70" fill="none" />
        
        <rect x="1310" y="904" width="620" height="32" rx="16" fill="white" opacity="0.15" />
        
        <rect class="esvigy-active-bar" x="1310" y="904" width="410" height="32" rx="16" fill={color} opacity="0.85" />
        
        <circle cx="1840" cy="920" r="7" fill={color} opacity="0.9" />
        <circle cx="1868" cy="920" r="7" fill={color} opacity="0.65" />
        <circle cx="1896" cy="920" r="7" fill={color} opacity="0.4" />
      </g>

      
      <g opacity="0.55">
        <circle cx="1220" cy="1100" r="40" stroke="white" stroke-width="6" stroke-dasharray="16 12" fill="none" opacity="0.4" />
        <rect x="1310" y="1084" width="560" height="32" rx="16" fill="white" opacity="0.16" />
      </g>
    </g>
  </g>

  
  <g class="esvigy-hero-badge" filter="url(#StatusProcessing_proc_badge_shadow_filter)">
    
    <circle cx="1600" cy="1540" r="460" stroke={color} stroke-width="24" stroke-dasharray="36 24" opacity="0.35" fill="none" />

    
    <circle cx="1600" cy="1540" r="400" fill={color} />
    <circle cx="1600" cy="1540" r="400" fill="url(#StatusProcessing_proc_badge_bevel_grad)" />

    
    <circle cx="1600" cy="1540" r="350" stroke="white" stroke-width="10" opacity="0.32" fill="none" />

    
    <circle class="esvigy-hero-spinner" cx="1600" cy="1560" r="210" stroke="#111928" stroke-width="52" stroke-linecap="round" stroke-dasharray="480 180" opacity="0.28" fill="none" />

    
    <circle class="esvigy-hero-spinner" cx="1600" cy="1540" r="210" stroke="url(#StatusProcessing_proc_spinner_grad)" stroke-width="52" stroke-linecap="round" stroke-dasharray="480 180" fill="none" />

    
    <circle class="esvigy-hero-spinner" cx="1600" cy="1540" r="185" stroke="white" stroke-width="8" stroke-linecap="round" stroke-dasharray="400 260" opacity="0.35" fill="none" />

    
    
    <circle cx="1500" cy="1548" r="26" fill="#111928" opacity="0.25" />
    <circle class="esvigy-sync-dot-1" cx="1500" cy="1540" r="26" fill="url(#StatusProcessing_proc_dot_grad)" />

    
    <circle cx="1600" cy="1548" r="32" fill="#111928" opacity="0.25" />
    <circle class="esvigy-sync-dot-2" cx="1600" cy="1540" r="32" fill="url(#StatusProcessing_proc_dot_grad)" />

    
    <circle cx="1700" cy="1548" r="26" fill="#111928" opacity="0.25" />
    <circle class="esvigy-sync-dot-3" cx="1700" cy="1540" r="26" fill="url(#StatusProcessing_proc_dot_grad)" />
  </g>

  
  
  <g class="esvigy-node-1" transform="translate(740, 720)">
    <circle cx="50" cy="50" r="46" fill={color} opacity="0.85" />
    <path d="M35 50 C35 41 42 34 51 34 C58 34 64 39 66 45" stroke="white" stroke-width="7" stroke-linecap="round" fill="none" />
    <polygon points="66,38 73,46 63,47" fill="white" />
    <path d="M65 50 C65 59 58 66 49 66 C42 66 36 61 34 55" stroke="white" stroke-width="7" stroke-linecap="round" fill="none" />
    <polygon points="34,62 27,54 37,53" fill="white" />
  </g>

  
  <g class="esvigy-node-2" transform="translate(2360, 710)">
    <rect x="0" y="0" width="120" height="60" rx="30" fill={color} opacity="0.85" />
    <rect x="12" y="12" width="56" height="36" rx="18" fill="white" opacity="0.9" />
    <circle cx="92" cy="30" r="8" fill="white" opacity="0.75" />
  </g>

  
  <path class="esvigy-node-1" d="M720 740 C760 670 840 690 820 800 C800 910 710 890 760 1000" stroke={color} stroke-width="22" stroke-linecap="round" fill="none" opacity="0.75" />
  <path class="esvigy-node-2" d="M2480 660 C2420 590 2350 630 2400 720 C2450 810 2530 780 2490 890" stroke={color} stroke-width="22" stroke-linecap="round" fill="none" opacity="0.75" />

  
  <polygon class="esvigy-node-1" points="790,1210 820,1250 790,1290 760,1250" fill={color} opacity="0.85" />
  <polygon class="esvigy-node-2" points="2460,1260 2490,1300 2460,1340 2430,1300" fill={color} opacity="0.85" />

  
  <rect class="esvigy-node-1" x="910" y="1590" width="70" height="30" rx="15" transform="rotate(-28 945 1605)" fill={secondaryColor !== "transparent" ? secondaryColor : "#38BDF8"} data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />
  <rect class="esvigy-node-2" x="2310" y="1660" width="70" height="30" rx="15" transform="rotate(32 2345 1675)" fill={secondaryColor !== "transparent" ? secondaryColor : "#38BDF8"} data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />

  
  <path class="esvigy-sparkle" d="M1220 400 C1220 422 1242 436 1264 436 C1242 436 1220 450 1220 472 C1220 450 1198 436 1176 436 C1198 436 1220 422 1220 400 Z" fill={color} opacity="0.85" />
  <path class="esvigy-sparkle" d="M2140 980 C2140 1000 2160 1012 2180 1012 C2160 1012 2140 1024 2140 1044 C2140 1024 2120 1012 2100 1012 C2120 1012 2140 1000 2140 980 Z" fill={color} opacity="0.85" />
  <path class="esvigy-sparkle" d="M1120 1920 C1120 1938 1136 1950 1154 1950 C1136 1950 1120 1962 1120 1980 C1120 1962 1104 1950 1086 1950 C1104 1950 1120 1938 1120 1920 Z" fill={color} opacity="0.75" />
  <path class="esvigy-sparkle" d="M2160 1960 C2160 1978 2176 1990 2194 1990 C2176 1990 2160 2002 2160 2020 C2160 2002 2144 1990 2126 1990 C2144 1990 2160 1978 2160 1960 Z" fill={color} opacity="0.75" />
</svg>
