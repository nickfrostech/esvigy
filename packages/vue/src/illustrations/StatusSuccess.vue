<script setup lang="ts">
/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/vue generator.
 * Source: packages/svg/src/StatusSuccess.svg
 */

import type { StyleValue } from "vue";

interface Props {
  color?: string;
  secondaryColor?: string;
  animated?: boolean;
  className?: string;
  style?: StyleValue;
}

withDefaults(defineProps<Props>(), {
  color: "currentColor",
  secondaryColor: "transparent",
  animated: false,
  className: "",
});
</script>

<template>
  <svg
    viewBox="575 192 2050 2340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="['esvigy-svg', animated ? 'esvigy-animated' : '', className]"
    :data-animated="animated ? 'true' : undefined"
    data-author="nick"
    data-source="https://github.com/nickfrostech"
    :style="[{ display: 'block' }, style]"
    role="img"
    aria-label="StatusSuccess illustration"
  >
    <component is="style" v-if="animated">
@keyframes esvigy-badge-celebrate {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-16px) scale(1.035); }
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
    @keyframes esvigy-confetti-flutter-1 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(12px, -18px) rotate(16deg); }
    }
    @keyframes esvigy-confetti-flutter-2 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-14px, -15px) rotate(-18deg); }
    }
    @keyframes esvigy-confetti-flutter-3 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(10px, -12px) rotate(12deg); }
    }
    @keyframes esvigy-confetti-flutter-4 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-12px, -20px) rotate(-14deg); }
    }
    @keyframes esvigy-sparkle-twinkle {
      0%, 100% { opacity: 0.3; transform: scale(0.85); }
      50% { opacity: 0.95; transform: scale(1.2); }
    }

    svg.esvigy-animated .esvigy-hero-badge,
    svg[data-animated="true"] .esvigy-hero-badge {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-badge-celebrate 4s ease-in-out infinite;
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

    svg.esvigy-animated .esvigy-confetti-1,
    svg[data-animated="true"] .esvigy-confetti-1 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-confetti-flutter-1 3.6s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-confetti-2,
    svg[data-animated="true"] .esvigy-confetti-2 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-confetti-flutter-2 4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-confetti-3,
    svg[data-animated="true"] .esvigy-confetti-3 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-confetti-flutter-3 3.8s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-confetti-4,
    svg[data-animated="true"] .esvigy-confetti-4 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-confetti-flutter-4 4.2s ease-in-out infinite;
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
      svg.esvigy-animated .esvigy-confetti-1,
      svg.esvigy-animated .esvigy-confetti-2,
      svg.esvigy-animated .esvigy-confetti-3,
      svg.esvigy-animated .esvigy-confetti-4,
      svg.esvigy-animated .esvigy-sparkle,
      svg[data-animated="true"] .esvigy-hero-badge,
      svg[data-animated="true"] .esvigy-cards-assembly,
      svg[data-animated="true"] .esvigy-ground-shadow,
      svg[data-animated="true"] .esvigy-orbit-ring,
      svg[data-animated="true"] .esvigy-confetti-1,
      svg[data-animated="true"] .esvigy-confetti-2,
      svg[data-animated="true"] .esvigy-confetti-3,
      svg[data-animated="true"] .esvigy-confetti-4,
      svg[data-animated="true"] .esvigy-sparkle {
        animation: none !important;
      }
    }
    </component>
    <defs>
    
    <radialGradient id="StatusSuccess_success_ground_grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#111928" stop-opacity="0.25" />
      <stop offset="60%" stop-color="#111928" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0" />
    </radialGradient>

    
    <linearGradient id="StatusSuccess_card_surface_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.16" />
      <stop offset="50%" stop-color="white" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.24" />
    </linearGradient>

    
    <linearGradient id="StatusSuccess_badge_bevel_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.32" />
      <stop offset="45%" stop-color="white" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.3" />
    </linearGradient>

    
    <linearGradient id="StatusSuccess_check_lighting_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="1" />
      <stop offset="100%" stop-color="#F3F4F6" stop-opacity="0.92" />
    </linearGradient>

    
    <filter id="StatusSuccess_badge_shadow_filter" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#111928" flood-opacity="0.28" />
    </filter>
  </defs>

  
  <circle cx="1600" cy="1460" r="940" :fill="color" opacity="0.06" />

  
  <ellipse class="esvigy-orbit-ring" cx="1600" cy="1460" rx="900" ry="700" :stroke="color" stroke-width="14" stroke-dasharray="28 28" opacity="0.22" transform="rotate(-15 1600 1460)" fill="none" />

  
  <ellipse class="esvigy-ground-shadow" cx="1600" cy="2420" rx="1000" ry="86" fill="url(#StatusSuccess_success_ground_grad)" />

  
  <g class="esvigy-cards-assembly">
    
    <rect transform="matrix(0.975 -0.22 0.22 0.975 880 500)" width="1240" height="1520" rx="160" :fill="secondaryColor !== 'transparent' ? secondaryColor : '#334155'" data-esvigy-secondary="true" data-esvigy-default="#334155" opacity="0.5" />

    
    <g id="StatusSuccess_card_front_group">
      <rect x="1000" y="440" width="1200" height="1580" rx="180" :fill="secondaryColor !== 'transparent' ? secondaryColor : '#1E293B'" data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" fill="url(#StatusSuccess_card_surface_grad)" />
      <rect x="1000" y="440" width="1200" height="1580" rx="180" :stroke="color" stroke-width="12" opacity="0.18" />

      
      <g opacity="0.85">
        <circle cx="1220" cy="740" r="42" :fill="color" />
        <path d="M1202 740 L1215 753 L1238 730" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <rect x="1310" y="724" width="680" height="32" rx="16" fill="white" opacity="0.22" />
      </g>

      
      <g opacity="0.85">
        <circle cx="1220" cy="920" r="42" :fill="color" />
        <path d="M1202 920 L1215 933 L1238 910" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <rect x="1310" y="904" width="560" height="32" rx="16" fill="white" opacity="0.22" />
      </g>

      
      <g opacity="0.85">
        <circle cx="1220" cy="1100" r="42" :fill="color" />
        <path d="M1202 1100 L1215 1113 L1238 1090" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <rect x="1310" y="1084" width="620" height="32" rx="16" fill="white" opacity="0.22" />
      </g>
    </g>
  </g>

  
  <g class="esvigy-hero-badge" filter="url(#StatusSuccess_badge_shadow_filter)">
    
    <circle cx="1600" cy="1540" r="460" :stroke="color" stroke-width="24" stroke-dasharray="36 24" opacity="0.35" fill="none" />

    
    <circle cx="1600" cy="1540" r="400" :fill="color" />
    <circle cx="1600" cy="1540" r="400" fill="url(#StatusSuccess_badge_bevel_grad)" />

    
    <circle cx="1600" cy="1540" r="350" stroke="white" stroke-width="10" opacity="0.32" fill="none" />

    
    <path d="M1360 1548 C1385 1523 1425 1523 1450 1548 L1525 1623 L1750 1368 C1775 1340 1818 1338 1845 1363 C1872 1388 1874 1430 1848 1458 L1570 1773 C1545 1800 1502 1803 1475 1776 L1360 1663 C1332 1636 1332 1593 1360 1548 Z" fill="#111928" opacity="0.26" />

    
    <path d="M1360 1530 C1385 1505 1425 1505 1450 1530 L1525 1605 L1750 1350 C1775 1322 1818 1320 1845 1345 C1872 1370 1874 1412 1848 1440 L1570 1755 C1545 1782 1502 1785 1475 1758 L1360 1645 C1332 1618 1332 1575 1360 1530 Z" fill="url(#StatusSuccess_check_lighting_grad)" />
  </g>

  
  
  <path class="esvigy-confetti-1" d="M720 740 C760 670 840 690 820 800 C800 910 710 890 760 1000" :stroke="color" stroke-width="22" stroke-linecap="round" fill="none" opacity="0.75" />
  <path class="esvigy-confetti-2" d="M2480 660 C2420 590 2350 630 2400 720 C2450 810 2530 780 2490 890" :stroke="color" stroke-width="22" stroke-linecap="round" fill="none" opacity="0.75" />

  
  <polygon class="esvigy-confetti-3" points="790,1210 820,1250 790,1290 760,1250" :fill="color" opacity="0.85" />
  <polygon class="esvigy-confetti-4" points="2460,1260 2490,1300 2460,1340 2430,1300" :fill="color" opacity="0.85" />

  
  <rect class="esvigy-confetti-1" x="910" y="1590" width="70" height="30" rx="15" transform="rotate(-28 945 1605)" :fill="secondaryColor !== 'transparent' ? secondaryColor : '#38BDF8'" data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />
  <rect class="esvigy-confetti-2" x="2310" y="1660" width="70" height="30" rx="15" transform="rotate(32 2345 1675)" :fill="secondaryColor !== 'transparent' ? secondaryColor : '#38BDF8'" data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />

  
  <path class="esvigy-sparkle" d="M1220 400 C1220 422 1242 436 1264 436 C1242 436 1220 450 1220 472 C1220 450 1198 436 1176 436 C1198 436 1220 422 1220 400 Z" :fill="color" opacity="0.85" />
  <path class="esvigy-sparkle" d="M2140 980 C2140 1000 2160 1012 2180 1012 C2160 1012 2140 1024 2140 1044 C2140 1024 2120 1012 2100 1012 C2120 1012 2140 1000 2140 980 Z" :fill="color" opacity="0.85" />
  <path class="esvigy-sparkle" d="M1120 1920 C1120 1938 1136 1950 1154 1950 C1136 1950 1120 1962 1120 1980 C1120 1962 1104 1950 1086 1950 C1104 1950 1120 1938 1120 1920 Z" :fill="color" opacity="0.75" />
  <path class="esvigy-sparkle" d="M2160 1960 C2160 1978 2176 1990 2194 1990 C2176 1990 2160 2002 2160 2020 C2160 2002 2144 1990 2126 1990 C2144 1990 2160 1978 2160 1960 Z" :fill="color" opacity="0.75" />
  </svg>
</template>
