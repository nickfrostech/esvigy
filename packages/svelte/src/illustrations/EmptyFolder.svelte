<script lang="ts">
/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/svelte generator.
 * Source: packages/svg/src/EmptyFolder.svg
 */

export let color: string = "currentColor";
export let secondaryColor: string = "transparent";
export let animated: boolean = false;
let className: string = "";
export { className as class };
export let style: string = "";
</script>

<svg
  viewBox="-215 -25 3520 2640"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="esvigy-svg{animated ? ' esvigy-animated' : ''}{className ? ` ${className}` : ''}"
  data-animated={animated ? "true" : undefined}
  data-author="nick"
  data-source="https://github.com/nickfrostech"
  style="display: block;{style ? ` ${style}` : ''}"
  role="img"
  aria-label="EmptyFolder illustration"
  {...$$restProps}
>
  {#if animated}
    {@html `<style>
@keyframes esvigy-folder-float {
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

    svg.esvigy-animated .esvigy-folder-assembly,
    svg[data-animated="true"] .esvigy-folder-assembly {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-folder-float 4.4s ease-in-out infinite;
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
      svg.esvigy-animated .esvigy-folder-assembly,
      svg.esvigy-animated .esvigy-flight-trail,
      svg.esvigy-animated .esvigy-bee,
      svg.esvigy-animated .esvigy-bee-wing,
      svg.esvigy-animated .esvigy-badge,
      svg[data-animated="true"] .esvigy-folder-assembly,
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
    
    <linearGradient id="EmptyFolder_folder_cavity_grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#111928" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.6" />
    </linearGradient>

    
    <linearGradient id="EmptyFolder_folder_front_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.18" />
      <stop offset="50%" stop-color="white" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#111928" stop-opacity="0.22" />
    </linearGradient>

    
    <filter id="EmptyFolder_badge_drop_shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#111928" flood-opacity="0.2" />
    </filter>
  </defs>

  
  <path id="EmptyFolder_background_circle" d="M1222.72 109.6c675.29 0 1222.72 547.43 1222.72 1222.72 0 675.29 -547.43 1222.72 -1222.72 1222.72 -675.29 0 -1222.72 -547.43 -1222.72 -1222.72 0 -675.29 547.43 -1222.72 1222.72 -1222.72z" fill={color} opacity="0.08" />

  
  <g class="esvigy-folder-assembly">
    
    <g id="EmptyFolder_folder_back_group">
      <path id="EmptyFolder_folder_back" d="M956.4 563.23c-46.76 7.64 -84.15 42.62 -104.49 76.71 -26 43.54 -21.49 104.21 -21.35 163.5 0.29 121.03 1.29 242.78 0.41 363.7 91.53 6.24 201.98 1.15 295.64 0.93l575.16 0.07c207.78 0.61 173.52 -68.83 325.71 -262.06 58.55 -74.33 105.64 -69.18 225.97 -69.12 195.67 0.12 398.07 -4.97 592.76 0.75l10.81 -10.75c-7.01 -106.71 17.38 -150.6 -48.69 -220.41 -55.91 -59.08 -126.75 -49.16 -226.22 -49.16 -181.95 0 -363.91 -0.79 -545.81 -0.68 -133.85 0.09 -1034.11 -10.91 -1079.9 6.52z" fill={secondaryColor !== "transparent" ? secondaryColor : "#1E293B"} data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <path d="M956.4 563.23c-46.76 7.64 -84.15 42.62 -104.49 76.71 -26 43.54 -21.49 104.21 -21.35 163.5 0.29 121.03 1.29 242.78 0.41 363.7 91.53 6.24 201.98 1.15 295.64 0.93l575.16 0.07c207.78 0.61 173.52 -68.83 325.71 -262.06 58.55 -74.33 105.64 -69.18 225.97 -69.12 195.67 0.12 398.07 -4.97 592.76 0.75l10.81 -10.75c-7.01 -106.71 17.38 -150.6 -48.69 -220.41 -55.91 -59.08 -126.75 -49.16 -226.22 -49.16 -181.95 0 -363.91 -0.79 -545.81 -0.68 -133.85 0.09 -1034.11 -10.91 -1079.9 6.52z" fill="url(#EmptyFolder_folder_cavity_grad)" />
    </g>

    
    <path id="EmptyFolder_line_string" class="esvigy-flight-trail" d="M1474.51 1246.25c-161.67 -214.77 -368.89 -280.24 -197.05 -487.91 39.35 -47.56 123.95 -278.36 364.81 -26.27 59.73 62.52 -29.65 303.61 -50.16 305.24 -125.79 255.17 -928.98 -377.11 -462.27 -701.67 355.5 -247.23 741.7 -228.91 1204.5 -170.85" stroke={color} stroke-width="16.67" stroke-linecap="round" stroke-linejoin="round" opacity="0.45" />

    
    <g id="EmptyFolder_bee" class="esvigy-bee">
      <path class="esvigy-bee-body" d="M2507.37 171.17c-24.65 -1.74 -16.35 14.49 -43.16 11.29 -18.26 -2.18 -26.16 -18.07 -28.1 -38.33 -4.47 -46.52 28.17 -71.96 26.82 -109 -12.35 -20.64 -25.23 -33.23 -52.58 -35.13 -53.64 36.31 -16.07 99.64 -4.95 143.89 -146.47 11.42 -50.09 92.61 43.77 88.78 -13.29 19.74 6.25 6.49 -24.39 14.45 6.1 0.22 128.81 -9.66 118.76 -77.89l-36.17 1.94z" fill={color} />
      <path class="esvigy-bee-wing" d="M2462.93 35.13c1.35 37.04 -31.29 62.48 -26.82 109 1.94 20.26 9.84 36.15 28.1 38.33 26.81 3.2 18.51 -13.03 43.16 -11.29 9.01 -27.52 76.86 -119.06 18.64 -151.22 -14.28 -6.89 -23.34 -1.41 -34.52 5.64 -20.16 12.73 -11.63 17.78 -28.56 9.54z" fill={secondaryColor !== "transparent" ? secondaryColor : "#38BDF8"} data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.85" />
    </g>

    
    <g id="EmptyFolder_folder_front_group">
      <path id="EmptyFolder_folder_front" d="M830.97 1167.14c-45.26 16.86 -66.83 3.83 -106.88 50.34 -22.93 26.64 -20.74 14.83 -41.14 58.41 -19.64 41.96 -3.25 188.35 21.12 227.91 62.88 -1.88 88.77 -7.18 142.4 14.95 33.21 13.7 28.85 11.57 38.83 24.15 85.35 38.44 151.96 161.63 123.2 281.55 -14.14 58.95 -41.47 101.33 -76.25 134.49 -23.42 22.34 -94.57 68.05 -137.34 64.1 -8.36 59.1 17.85 160.35 71.5 202.38 25.31 19.82 68.22 32.31 101.47 33.02 216.92 4.62 472.48 0.11 692.81 0.11 363.02 0 748.86 10.69 1107.19 -4.15 0.79 -0.91 2.46 -3.16 2.87 -2.21l33.14 -17.76c93.39 -57.83 82.57 -185.87 111.65 -317.91 7.56 -34.28 10.73 -70.3 19.3 -103.3 14.6 -56.14 20.93 -123.1 40.65 -204.29 6.76 -27.88 14.17 -78.25 18.27 -106.43 20.3 -139.15 52.28 -278.12 74.89 -417.46 13.99 -86.27 21.5 -136.47 -29.58 -192.66 -36.28 -39.9 -71.51 -54.82 -128.27 -54.68 -23.43 0.06 -45.71 6.43 -53.78 -10.74l-10.81 10.75c-194.69 -5.72 -397.09 -0.63 -592.76 -0.75 -120.33 -0.06 -167.42 -5.21 -225.97 69.12 -152.19 193.23 -117.93 262.67 -325.71 262.06l-575.16 -0.07c-93.66 0.22 -204.11 5.31 -295.64 -0.93z" fill={color} />
      <path d="M830.97 1167.14c-45.26 16.86 -66.83 3.83 -106.88 50.34 -22.93 26.64 -20.74 14.83 -41.14 58.41 -19.64 41.96 -3.25 188.35 21.12 227.91 62.88 -1.88 88.77 -7.18 142.4 14.95 33.21 13.7 28.85 11.57 38.83 24.15 85.35 38.44 151.96 161.63 123.2 281.55 -14.14 58.95 -41.47 101.33 -76.25 134.49 -23.42 22.34 -94.57 68.05 -137.34 64.1 -8.36 59.1 17.85 160.35 71.5 202.38 25.31 19.82 68.22 32.31 101.47 33.02 216.92 4.62 472.48 0.11 692.81 0.11 363.02 0 748.86 10.69 1107.19 -4.15 0.79 -0.91 2.46 -3.16 2.87 -2.21l33.14 -17.76c93.39 -57.83 82.57 -185.87 111.65 -317.91 7.56 -34.28 10.73 -70.3 19.3 -103.3 14.6 -56.14 20.93 -123.1 40.65 -204.29 6.76 -27.88 14.17 -78.25 18.27 -106.43 20.3 -139.15 52.28 -278.12 74.89 -417.46 13.99 -86.27 21.5 -136.47 -29.58 -192.66 -36.28 -39.9 -71.51 -54.82 -128.27 -54.68 -23.43 0.06 -45.71 6.43 -53.78 -10.74l-10.81 10.75c-194.69 -5.72 -397.09 -0.63 -592.76 -0.75 -120.33 -0.06 -167.42 -5.21 -225.97 69.12 -152.19 193.23 -117.93 262.67 -325.71 262.06l-575.16 -0.07c-93.66 0.22 -204.11 5.31 -295.64 -0.93z" fill="url(#EmptyFolder_folder_front_grad)" />
    </g>

    
    <g id="EmptyFolder_notification_count" class="esvigy-badge">
      
      <path id="EmptyFolder_container_shadow" d="M797.56 1520.91c154.82 0 280.32 125.5 280.32 280.31 0 154.82 -125.5 280.32 -280.32 280.32 -154.82 0 -280.32 -125.5 -280.32 -280.32 0 -154.81 125.5 -280.31 280.32 -280.31z" fill="#111928" opacity="0.18" />
      
      <circle id="EmptyFolder_container" cx="746.3" cy="1770.47" r="280.32" fill="#FFFFFF" />
      <circle cx="746.3" cy="1770.47" r="280.32" stroke="white" stroke-width="8" opacity="0.8" />
      
      <path id="EmptyFolder__0" d="M746.3 1581.69c35.71 0 63.61 12.79 83.78 38.38 23.95 30.21 35.97 80.43 35.97 150.48 0 69.96 -12.1 120.27 -36.22 150.83 -20.01 25.24 -47.82 37.86 -83.53 37.86 -35.89 0 -64.82 -13.82 -86.79 -41.46 -21.98 -27.64 -32.97 -77.01 -32.97 -147.91 0 -69.63 12.11 -119.76 36.23 -150.32 20 -25.24 47.82 -37.86 83.53 -37.86zm0 58.72c-8.42 0 -15.97 2.75 -22.49 8.24 -6.62 5.41 -11.76 15.2 -15.37 29.36 -4.81 18.29 -7.21 49.19 -7.21 92.54 0 43.44 2.14 73.23 6.44 89.45 4.29 16.23 9.7 27.04 16.22 32.45 6.53 5.41 13.99 8.07 22.41 8.07 8.41 0 15.96 -2.75 22.57 -8.24 6.53 -5.41 11.68 -15.19 15.28 -29.36 4.81 -18.11 7.22 -48.93 7.22 -92.37 0 -43.35 -2.15 -73.14 -6.44 -89.36 -4.3 -16.23 -9.7 -27.13 -16.23 -32.54 -6.52 -5.49 -13.99 -8.24 -22.4 -8.24z" fill={color} />
    </g>
  </g>
</svg>
