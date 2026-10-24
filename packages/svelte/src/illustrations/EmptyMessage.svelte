<script lang="ts">
/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/svelte generator.
 * Source: packages/svg/src/EmptyMessage.svg
 */

export let color: string = "currentColor";
export let secondaryColor: string = "transparent";
export let animated: boolean = false;
let className: string = "";
export { className as class };
export let style: string = "";
</script>

<svg
  viewBox="-220 -225 4240 3180"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="esvigy-svg{animated ? ' esvigy-animated' : ''}{className ? ` ${className}` : ''}"
  data-animated={animated ? "true" : undefined}
  data-author="nick"
  data-source="https://github.com/nickfrostech"
  style="display: block;{style ? ` ${style}` : ''}"
  role="img"
  aria-label="EmptyMessage illustration"
  {...$$restProps}
>
  {#if animated}
    {@html `<style>
@keyframes esvigy-bubble-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-14px); }
    }
    @keyframes esvigy-flight-dash {
      to { stroke-dashoffset: -140px; }
    }
    @keyframes esvigy-bee-fly {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(8px, -14px) rotate(4deg); }
      50% { transform: translate(-6px, -8px) rotate(-3deg); }
      75% { transform: translate(-10px, -18px) rotate(3deg); }
    }
    @keyframes esvigy-bee-wing {
      0%, 100% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(-16deg) scale(0.9); }
    }
    @keyframes esvigy-badge-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.06); }
    }

    svg.esvigy-animated .esvigy-bubble-assembly,
    svg[data-animated="true"] .esvigy-bubble-assembly {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-bubble-float 4.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-flight-trail,
    svg[data-animated="true"] .esvigy-flight-trail {
      stroke-dasharray: 28 38;
      animation: esvigy-flight-dash 2s linear infinite;
    }

    svg.esvigy-animated .esvigy-bee,
    svg[data-animated="true"] .esvigy-bee {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-bee-fly 3s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-bee-wing,
    svg[data-animated="true"] .esvigy-bee-wing {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-bee-wing 0.28s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-badge,
    svg[data-animated="true"] .esvigy-badge {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-badge-pulse 3.6s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      svg.esvigy-animated .esvigy-bubble-assembly,
      svg.esvigy-animated .esvigy-flight-trail,
      svg.esvigy-animated .esvigy-bee,
      svg.esvigy-animated .esvigy-bee-wing,
      svg.esvigy-animated .esvigy-badge,
      svg[data-animated="true"] .esvigy-bubble-assembly,
      svg[data-animated="true"] .esvigy-flight-trail,
      svg[data-animated="true"] .esvigy-bee,
      svg[data-animated="true"] .esvigy-bee-wing,
      svg[data-animated="true"] .esvigy-badge {
        animation: none !important;
      }
    }
    </style>`}
  {/if}
  <defs>
    
    <linearGradient id="EmptyMessage_bubble_back_grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#111928" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.55" />
    </linearGradient>

    
    <linearGradient id="EmptyMessage_bubble_front_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.18" />
      <stop offset="50%" stop-color="white" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.2" />
    </linearGradient>
  </defs>

  
  <path id="EmptyMessage_background_circle" d="M2195.31 238.96c1036.76 195.24 1745.22 836.55 1582.4 1432.42 -162.81 595.87 -1135.26 920.64 -2172.02 725.4 -1036.76 -195.25 -1745.22 -836.56 -1582.41 -1432.43 162.82 -595.86 1135.27 -920.63 2172.03 -725.39z" fill={color} opacity="0.08" />

  
  <g class="esvigy-bubble-assembly">
    
    <g id="EmptyMessage_bubble_back_group">
      <rect id="EmptyMessage_bubble_back" x="679.16" y="641.54" width="2364.15" height="1432.43" rx="237.28" ry="168.08" fill={secondaryColor !== "transparent" ? secondaryColor : "#1E293B"} data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <rect x="679.16" y="641.54" width="2364.15" height="1432.43" rx="237.28" ry="168.08" fill="url(#EmptyMessage_bubble_back_grad)" />
    </g>

    
    <path id="EmptyMessage_line_string" class="esvigy-flight-trail" d="M311.83 1261.71c-1.22 -401.27 -77.92 -833 863.07 -889.18 1060.52 -63.32 516.4 269.01 240.14 82.24 -387.21 -261.78 535.38 -334.95 1167.47 -269.97" stroke={color} stroke-width="16.66" stroke-linecap="round" stroke-linejoin="round" opacity="0.45" />

    
    <g id="EmptyMessage_bee" class="esvigy-bee">
      <path class="esvigy-bee-body" d="M2801.88 185.28c-26.69 -1.89 -17.7 15.69 -46.72 12.22 -19.76 -2.36 -28.32 -19.55 -30.42 -41.49 -4.83 -50.35 30.5 -77.89 29.04 -117.98 -13.37 -22.35 -27.31 -35.97 -56.92 -38.03 -58.06 39.3 -17.39 107.85 -5.36 155.75 -158.54 12.37 -54.21 100.25 47.38 96.1 -14.38 21.37 6.77 7.03 -26.4 15.64 6.6 0.24 139.43 -10.46 128.55 -84.31l-39.15 2.1z" fill={color} />
      <path class="esvigy-bee-wing" d="M2753.78 38.03c1.46 40.09 -33.87 67.63 -29.04 117.98 2.1 21.94 10.66 39.13 30.42 41.49 29.02 3.47 20.03 -14.11 46.72 -12.22 9.75 -29.78 83.19 -128.87 20.18 -163.69 -15.46 -7.45 -25.27 -1.53 -37.37 6.11 -21.82 13.78 -12.59 19.24 -30.91 10.33z" fill={secondaryColor !== "transparent" ? secondaryColor : "#38BDF8"} data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />
    </g>

    
    <g id="EmptyMessage_bubble_front_group">
      <path id="EmptyMessage_bubble_front" d="M469.9 1244.99c0 -177.37 -2.51 -321.24 254.27 -321.24 617.52 0 1633.06 -3.47 2250.58 -3.47 256.78 0 277.82 147.34 277.82 324.71 0 321.25 0 642.5 0 963.75 0 177.37 -21.62 321.25 -278.39 321.25 -378.33 0 -1604.41 0 -1982.74 0 -53.75 23.49 -502.54 193.48 -520.75 191.02l-0.79 -1476.02z" fill={color} />
      <path d="M469.9 1244.99c0 -177.37 -2.51 -321.24 254.27 -321.24 617.52 0 1633.06 -3.47 2250.58 -3.47 256.78 0 277.82 147.34 277.82 324.71 0 321.25 0 642.5 0 963.75 0 177.37 -21.62 321.25 -278.39 321.25 -378.33 0 -1604.41 0 -1982.74 0 -53.75 23.49 -502.54 193.48 -520.75 191.02l-0.79 -1476.02z" fill="url(#EmptyMessage_bubble_front_grad)" />

      
      <g opacity="0.18">
        <rect x="820" y="1280" width="1240" height="42" rx="21" fill="white" />
        <rect x="820" y="1420" width="860" height="36" rx="18" fill="white" />
      </g>
    </g>

    
    <g id="EmptyMessage_notification_count" class="esvigy-badge">
      
      <path id="EmptyMessage_container_shadow" d="M2677.76 600.04c167.58 0 303.43 135.85 303.43 303.43 0 167.58 -135.85 303.42 -303.43 303.42 -167.58 0 -303.42 -135.84 -303.42 -303.42 0 -167.58 135.84 -303.43 303.42 -303.43z" fill="#111928" opacity="0.18" />
      
      <circle id="EmptyMessage_container" cx="2622.27" cy="870.17" r="303.43" fill="#FFFFFF" />
      <circle cx="2622.27" cy="870.17" r="303.43" stroke="white" stroke-width="8" opacity="0.8" />
      
      <path id="EmptyMessage__0" d="M2622.27 665.84c38.66 0 68.86 13.84 90.7 41.53 25.92 32.71 38.93 87.07 38.93 162.9 0 75.73 -13.1 130.18 -39.21 163.26 -21.65 27.32 -51.76 40.98 -90.42 40.98 -38.84 0 -70.15 -14.96 -93.94 -44.88 -23.79 -29.92 -35.68 -83.35 -35.68 -160.11 0 -75.36 13.1 -129.62 39.21 -162.7 21.65 -27.32 51.76 -40.98 90.41 -40.98zm0 63.56c-9.1 0 -17.28 2.97 -24.34 8.92 -7.16 5.85 -12.73 16.45 -16.64 31.78 -5.2 19.79 -7.8 53.24 -7.8 100.17 0 47.01 2.32 79.26 6.97 96.82 4.65 17.56 10.5 29.27 17.56 35.13 7.06 5.85 15.15 8.73 24.25 8.73 9.11 0 17.29 -2.97 24.44 -8.92 7.06 -5.85 12.64 -16.45 16.54 -31.78 5.21 -19.61 7.81 -52.97 7.81 -99.98 0 -46.93 -2.33 -79.17 -6.97 -96.73 -4.65 -17.57 -10.5 -29.37 -17.56 -35.22 -7.06 -5.95 -15.15 -8.92 -24.26 -8.92z" fill={color} />
    </g>
  </g>
</svg>
