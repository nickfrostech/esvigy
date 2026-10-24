<script lang="ts">
/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/svelte generator.
 * Source: packages/svg/src/ActionUpload.svg
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
  aria-label="ActionUpload illustration"
  {...$$restProps}
>
  {#if animated}
    {@html `<style>
@keyframes esvigy-upload-badge {
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
    @keyframes esvigy-stream-rise {
      0% { transform: translateY(0); opacity: 0.85; }
      50% { transform: translateY(-24px); opacity: 1; }
      100% { transform: translateY(-48px); opacity: 0.2; }
    }
    @keyframes esvigy-sparkle-twinkle {
      0%, 100% { transform: scale(0.85) rotate(0deg); opacity: 0.45; }
      50% { transform: scale(1.15) rotate(90deg); opacity: 0.95; }
    }

    svg.esvigy-animated .esvigy-hero-badge,
    svg[data-animated="true"] .esvigy-hero-badge {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-upload-badge 4s ease-in-out infinite;
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
      animation: esvigy-stream-rise 2.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-stream-2,
    svg[data-animated="true"] .esvigy-stream-2 {
      animation: esvigy-stream-rise 2.8s ease-in-out infinite 0.6s;
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
    </style>`}
  {/if}
  <defs>
    
    <radialGradient id="ActionUpload_upload_ground_grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#111928" stop-opacity="0.25" />
      <stop offset="60%" stop-color="#111928" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0" />
    </radialGradient>

    
    <linearGradient id="ActionUpload_upload_card_surface_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.15" />
      <stop offset="50%" stop-color="white" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.2" />
    </linearGradient>

    
    <linearGradient id="ActionUpload_upload_badge_bevel_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.32" />
      <stop offset="45%" stop-color="white" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.3" />
    </linearGradient>


    
    <filter id="ActionUpload_upload_badge_shadow_filter" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#111928" flood-opacity="0.28" />
    </filter>
  </defs>

  
  <circle cx="1600" cy="1460" r="940" fill={color} opacity="0.06" />

  
  <ellipse cx="1600" cy="1460" rx="900" ry="700" stroke={color} stroke-width="14" stroke-dasharray="28 28" opacity="0.22" transform="rotate(-15 1600 1460)" fill="none" />

  
  <ellipse class="esvigy-ground-shadow" cx="1600" cy="2420" rx="1000" ry="86" fill="url(#ActionUpload_upload_ground_grad)" />

  
  <g class="esvigy-cards-assembly">
    
    <rect transform="matrix(0.975 -0.22 0.22 0.975 880 500)" width="1240" height="1520" rx="160" fill={secondaryColor !== "transparent" ? secondaryColor : "#334155"} data-esvigy-secondary="true" data-esvigy-default="#334155" opacity="0.5" />

    
    <g id="ActionUpload_card_front_group">
      <rect x="1000" y="440" width="1200" height="1580" rx="180" fill={secondaryColor !== "transparent" ? secondaryColor : "#1E293B"} data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" fill="url(#ActionUpload_upload_card_surface_grad)" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" stroke={color} stroke-width="12" opacity="0.18" />

      
      <g opacity="0.9">
        <rect x="1220" y="560" width="380" height="52" rx="26" fill={color} opacity="0.16" />
        <circle cx="1255" cy="586" r="12" fill={color} />
        <rect x="1285" y="576" width="260" height="20" rx="10" fill={color} opacity="0.8" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="740" r="42" fill={color} />
        <path d="M1210 746 L1220 734 L1230 746" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <line x1="1220" y1="735" x2="1220" y2="752" stroke="white" stroke-width="8" stroke-linecap="round" />
        <rect x="1310" y="724" width="560" height="32" rx="16" fill="white" opacity="0.22" />
        <rect x="1780" y="720" width="120" height="40" rx="20" fill={color} opacity="0.2" />
        <rect x="1805" y="734" width="70" height="12" rx="6" fill={color} opacity="0.85" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="920" r="42" fill={color} />
        <path d="M1210 926 L1220 914 L1230 926" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <line x1="1220" y1="915" x2="1220" y2="932" stroke="white" stroke-width="8" stroke-linecap="round" />
        <rect x="1310" y="904" width="620" height="32" rx="16" fill="white" opacity="0.22" />
        <rect x="1780" y="900" width="150" height="40" rx="20" fill={color} opacity="0.2" />
        <rect x="1805" y="914" width="100" height="12" rx="6" fill={color} opacity="0.85" />
      </g>

      
      <g opacity="0.88">
        <circle cx="1220" cy="1100" r="42" fill={color} />
        <path d="M1210 1106 L1220 1094 L1230 1106" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <line x1="1220" y1="1095" x2="1220" y2="1112" stroke="white" stroke-width="8" stroke-linecap="round" />
        <rect x="1310" y="1084" width="600" height="32" rx="16" fill="white" opacity="0.22" />
      </g>
    </g>
  </g>

  
  <g class="esvigy-hero-badge" filter="url(#ActionUpload_upload_badge_shadow_filter)">
    
    <circle cx="1600" cy="1540" r="460" stroke={color} stroke-width="24" stroke-dasharray="36 24" opacity="0.35" fill="none" />

    
    <circle cx="1600" cy="1540" r="400" fill={color} />
    <circle cx="1600" cy="1540" r="400" fill="url(#ActionUpload_upload_badge_bevel_grad)" />

    
    <circle cx="1600" cy="1540" r="350" stroke="white" stroke-width="10" opacity="0.32" fill="none" />

    
    <g stroke="#111928" stroke-width="76" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.26" transform="translate(0, 18)">
      
      <path d="M1415 1475 L1600 1290 L1785 1475" />
      
      <line x1="1600" y1="1310" x2="1600" y2="1610" />
      
      <path d="M1430 1680 L1430 1730 C1430 1745 1445 1755 1465 1755 L1735 1755 C1755 1755 1770 1745 1770 1730 L1770 1680" />
    </g>

    
    <g stroke="white" stroke-width="76" stroke-linecap="round" stroke-linejoin="round" fill="none">
      
      <path d="M1415 1475 L1600 1290 L1785 1475" />
      
      <line x1="1600" y1="1310" x2="1600" y2="1610" />
      
      <path d="M1430 1680 L1430 1730 C1430 1745 1445 1755 1465 1755 L1735 1755 C1755 1755 1770 1745 1770 1730 L1770 1680" />
    </g>
  </g>

  
  
  <g class="esvigy-stream-1" transform="translate(720, 720)">
    <circle cx="60" cy="60" r="56" fill={color} opacity="0.85" />
    <path d="M44 68 L60 52 L76 68" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <line x1="60" y1="54" x2="60" y2="82" stroke="white" stroke-width="8" stroke-linecap="round" />
  </g>

  
  <g class="esvigy-stream-2" transform="translate(2360, 700)">
    <circle cx="60" cy="60" r="56" fill={color} opacity="0.85" />
    <path d="M40 70 C36 70 32 66 32 62 C32 58 35 55 39 54 C40 46 47 40 55 40 C62 40 68 44 70 51 C73 51 76 53 78 56 C80 59 80 62 78 65 C80 67 80 70 77 70 Z" fill="white" />
  </g>

  
  <path class="esvigy-stream-1" d="M780 1260 L810 1230 L840 1260" stroke={color} stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.75" />
  <path class="esvigy-stream-2" d="M2420 1260 L2450 1230 L2480 1260" stroke={color} stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.75" />

  
  <rect class="esvigy-stream-1" x="910" y="1590" width="70" height="30" rx="15" transform="rotate(-28 945 1605)" fill={secondaryColor !== "transparent" ? secondaryColor : "#38BDF8"} data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />
  <rect class="esvigy-stream-2" x="2310" y="1660" width="70" height="30" rx="15" transform="rotate(32 2345 1675)" fill={secondaryColor !== "transparent" ? secondaryColor : "#38BDF8"} data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />

  
  <path class="esvigy-sparkle" d="M1220 400 C1220 422 1242 436 1264 436 C1242 436 1220 450 1220 472 C1220 450 1198 436 1176 436 C1198 436 1220 422 1220 400 Z" fill={color} opacity="0.85" />
  <path class="esvigy-sparkle" d="M2140 980 C2140 1000 2160 1012 2180 1012 C2160 1012 2140 1024 2140 1044 C2140 1024 2120 1012 2100 1012 C2120 1012 2140 1000 2140 980 Z" fill={color} opacity="0.85" />
  <path class="esvigy-sparkle" d="M1120 1920 C1120 1938 1136 1950 1154 1950 C1136 1950 1120 1962 1120 1980 C1120 1962 1104 1950 1086 1950 C1104 1950 1120 1938 1120 1920 Z" fill={color} opacity="0.75" />
  <path class="esvigy-sparkle" d="M2160 1960 C2160 1978 2176 1990 2194 1990 C2176 1990 2160 2002 2160 2020 C2160 2002 2144 1990 2126 1990 C2144 1990 2160 1978 2160 1960 Z" fill={color} opacity="0.75" />
</svg>
