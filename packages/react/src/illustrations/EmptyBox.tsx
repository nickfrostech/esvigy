/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/react generator.
 * Source: packages/svg/src/EmptyBox.svg
 */

import type { EsvigyProps } from "../types";

export const EmptyBox = ({
  color = "currentColor",
  secondaryColor = "transparent",
  animated = false,
  className = "",
  style,
  ...props
}: EsvigyProps) => {
  return (
    <svg
      viewBox="-60 -85 3645 3510"
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
      aria-label="EmptyBox illustration"
      {...props}
    >
      {animated && (
        <style>
          {`
@keyframes esvigy-box-float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-16px) rotate(0.35deg); }
    }
    @keyframes esvigy-shadow-pulse {
      0%, 100% { transform: scale(1); opacity: 0.22; }
      50% { transform: scale(0.92); opacity: 0.12; }
    }
    /* Looping writing sequence for the question mark dots */
    @keyframes esvigy-write-dot-1 {
      0%, 3% { opacity: 0; transform: scale(0.25) translateY(-16px); }
      8% { opacity: 1; transform: scale(1.18) translateY(0); }
      12% { opacity: 1; transform: scale(1) translateY(0); }
      84% { opacity: 1; transform: scale(1) translateY(0); }
      91% { opacity: 0; transform: scale(0.5) translateY(-8px); }
      100% { opacity: 0; transform: scale(0.25) translateY(-16px); }
    }
    @keyframes esvigy-write-dot-2 {
      0%, 15% { opacity: 0; transform: scale(0.25) translateY(-16px); }
      20% { opacity: 1; transform: scale(1.18) translateY(0); }
      24% { opacity: 1; transform: scale(1) translateY(0); }
      84% { opacity: 1; transform: scale(1) translateY(0); }
      91% { opacity: 0; transform: scale(0.5) translateY(-8px); }
      100% { opacity: 0; transform: scale(0.25) translateY(-16px); }
    }
    @keyframes esvigy-write-dot-3 {
      0%, 27% { opacity: 0; transform: scale(0.25) translateY(-16px); }
      32% { opacity: 1; transform: scale(1.18) translateY(0); }
      36% { opacity: 1; transform: scale(1) translateY(0); }
      84% { opacity: 1; transform: scale(1) translateY(0); }
      91% { opacity: 0; transform: scale(0.5) translateY(-8px); }
      100% { opacity: 0; transform: scale(0.25) translateY(-16px); }
    }
    @keyframes esvigy-write-dot-4 {
      0%, 39% { opacity: 0; transform: scale(0.25) translateY(-16px); }
      44% { opacity: 1; transform: scale(1.18) translateY(0); }
      48% { opacity: 1; transform: scale(1) translateY(0); }
      84% { opacity: 1; transform: scale(1) translateY(0); }
      91% { opacity: 0; transform: scale(0.5) translateY(-8px); }
      100% { opacity: 0; transform: scale(0.25) translateY(-16px); }
    }
    @keyframes esvigy-write-dot-5 {
      0%, 51% { opacity: 0; transform: scale(0.25) translateY(-16px); }
      56% { opacity: 1; transform: scale(1.18) translateY(0); }
      60% { opacity: 1; transform: scale(1) translateY(0); }
      84% { opacity: 1; transform: scale(1) translateY(0); }
      91% { opacity: 0; transform: scale(0.5) translateY(-8px); }
      100% { opacity: 0; transform: scale(0.25) translateY(-16px); }
    }
    @keyframes esvigy-write-dot-6 {
      0%, 63% { opacity: 0; transform: scale(0.25) translateY(-16px); }
      68% { opacity: 1; transform: scale(1.24) translateY(0); }
      72% { opacity: 1; transform: scale(1) translateY(0); }
      84% { opacity: 1; transform: scale(1) translateY(0); }
      91% { opacity: 0; transform: scale(0.5) translateY(-8px); }
      100% { opacity: 0; transform: scale(0.25) translateY(-16px); }
    }
    @keyframes esvigy-sparkle-twinkle {
      0%, 66% { opacity: 0; transform: scale(0.3); }
      74%, 84% { opacity: 0.95; transform: scale(1.15); }
      91%, 100% { opacity: 0; transform: scale(0.3); }
    }

    svg.esvigy-animated .esvigy-box-assembly,
    svg[data-animated="true"] .esvigy-box-assembly {
      transform-box: fill-box;
      transform-origin: center bottom;
      animation: esvigy-box-float 4.2s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-ground-shadow,
    svg[data-animated="true"] .esvigy-ground-shadow {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-shadow-pulse 4.2s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-qm-dot-1,
    svg[data-animated="true"] .esvigy-qm-dot-1 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-write-dot-1 3.4s ease-in-out infinite;
    }
    svg.esvigy-animated .esvigy-qm-dot-2,
    svg[data-animated="true"] .esvigy-qm-dot-2 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-write-dot-2 3.4s ease-in-out infinite;
    }
    svg.esvigy-animated .esvigy-qm-dot-3,
    svg[data-animated="true"] .esvigy-qm-dot-3 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-write-dot-3 3.4s ease-in-out infinite;
    }
    svg.esvigy-animated .esvigy-qm-dot-4,
    svg[data-animated="true"] .esvigy-qm-dot-4 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-write-dot-4 3.4s ease-in-out infinite;
    }
    svg.esvigy-animated .esvigy-qm-dot-5,
    svg[data-animated="true"] .esvigy-qm-dot-5 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-write-dot-5 3.4s ease-in-out infinite;
    }
    svg.esvigy-animated .esvigy-qm-dot-6,
    svg[data-animated="true"] .esvigy-qm-dot-6 {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-write-dot-6 3.4s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-sparkle,
    svg[data-animated="true"] .esvigy-sparkle {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-sparkle-twinkle 3.4s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      svg.esvigy-animated .esvigy-box-assembly,
      svg.esvigy-animated .esvigy-ground-shadow,
      svg.esvigy-animated .esvigy-qm-dot-1,
      svg.esvigy-animated .esvigy-qm-dot-2,
      svg.esvigy-animated .esvigy-qm-dot-3,
      svg.esvigy-animated .esvigy-qm-dot-4,
      svg.esvigy-animated .esvigy-qm-dot-5,
      svg.esvigy-animated .esvigy-qm-dot-6,
      svg.esvigy-animated .esvigy-sparkle,
      svg[data-animated="true"] .esvigy-box-assembly,
      svg[data-animated="true"] .esvigy-ground-shadow,
      svg[data-animated="true"] .esvigy-qm-dot-1,
      svg[data-animated="true"] .esvigy-qm-dot-2,
      svg[data-animated="true"] .esvigy-qm-dot-3,
      svg[data-animated="true"] .esvigy-qm-dot-4,
      svg[data-animated="true"] .esvigy-qm-dot-5,
      svg[data-animated="true"] .esvigy-qm-dot-6,
      svg[data-animated="true"] .esvigy-sparkle {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
    }
          `}
        </style>
      )}
      <defs>
    
    <radialGradient id="EmptyBox_box_ground_grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#111928" stopOpacity="0.3" />
      <stop offset="60%" stopColor="#111928" stopOpacity="0.12" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0" />
    </radialGradient>

    
    <linearGradient id="EmptyBox_box_cavity_grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#111928" stopOpacity="0.25" />
      <stop offset="70%" stopColor="#111928" stopOpacity="0.65" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0.85" />
    </linearGradient>

    
    <linearGradient id="EmptyBox_box_right_wall_grad" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stopColor="#111928" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0.35" />
    </linearGradient>

    
    <linearGradient id="EmptyBox_box_left_wall_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="0.18" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0.1" />
    </linearGradient>

    
    <linearGradient id="EmptyBox_box_flap_grad" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="0.25" />
      <stop offset="60%" stopColor="white" stopOpacity="0.05" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0.2" />
    </linearGradient>
  </defs>

  
  <ellipse className="esvigy-ground-shadow" cx="1775" cy="3240" rx="1420" ry="160" fill="url(#EmptyBox_box_ground_grad)" />

  
  <g className="esvigy-box-assembly">
    
    <g id="EmptyBox_box_interior">
      
      <path id="EmptyBox_left_inner" d="M382.6 1396.75L1772.53 1849.28L1774.75 936.42L382.6 1396.75Z" fill={secondaryColor !== "transparent" ? secondaryColor : "#1E293B"} data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <path d="M382.6 1396.75L1772.53 1849.28L1774.75 936.42L382.6 1396.75Z" fill="url(#EmptyBox_box_cavity_grad)" />

      
      <path id="EmptyBox_right_inner" d="M1772.53 1849.28L3188.18 1393.59L1774.75 936.42L1772.53 1849.28Z" fill={secondaryColor !== "transparent" ? secondaryColor : "#1E293B"} data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <path d="M1772.53 1849.28L3188.18 1393.59L1774.75 936.42L1772.53 1849.28Z" fill="url(#EmptyBox_box_cavity_grad)" />
    </g>

    
    <g id="EmptyBox_box_left">
      <path id="EmptyBox_left_side" d="M366.61 2140.17L379.23 2747C407.36 2819.18 490.72 2837.22 571.58 2860.24C719.52 2902.36 1696.28 3210.75 1771.81 3215.94L1772.53 1849.28L1571.66 2139.44C1424.4 2352.57 1443.26 2445.83 1185.15 2388.2L491.03 2176.03C443.63 2163.85 419.47 2146.31 366.61 2140.17Z" fill={color} />
      <path d="M366.61 2140.17L379.23 2747C407.36 2819.18 490.72 2837.22 571.58 2860.24C719.52 2902.36 1696.28 3210.75 1771.81 3215.94L1772.53 1849.28L1571.66 2139.44C1424.4 2352.57 1443.26 2445.83 1185.15 2388.2L491.03 2176.03C443.63 2163.85 419.47 2146.31 366.61 2140.17Z" fill="url(#EmptyBox_box_left_wall_grad)" />
    </g>

    
    <g id="EmptyBox_box_right">
      <path id="EmptyBox_right_side" d="M1771.81 3215.94C2038.19 3186.21 2653.31 2966.99 2972.95 2864.91C3065.06 2835.49 3146.26 2826.96 3174.15 2748.62C3190.86 2701.71 3187.89 2210.03 3181.4 2131.99L2319.7 2412.52C2196 2454.99 2065.1 2535.9 2000.8 2440.16L1772.53 1849.28L1771.81 3215.94Z" fill={color} />
      <path d="M1771.81 3215.94C2038.19 3186.21 2653.31 2966.99 2972.95 2864.91C3065.06 2835.49 3146.26 2826.96 3174.15 2748.62C3190.86 2701.71 3187.89 2210.03 3181.4 2131.99L2319.7 2412.52C2196 2454.99 2065.1 2535.9 2000.8 2440.16L1772.53 1849.28L1771.81 3215.94Z" fill="url(#EmptyBox_box_right_wall_grad)" />
    </g>

    
    <g id="EmptyBox_box_flaps">
      <path id="EmptyBox_hands" d="M1302.51 421.63C1286.5 425.54 185.93 790.27 108.62 815.97C49.9 837.57 40.86 859.47 74.32 921.91L382.6 1396.75L52.98 1861.23C28.91 1897.19 -37.1 1969.45 27.69 2015.69C128.2 2087.42 1062.04 2348.02 1221.24 2395.6C1303.38 2414.51 1369.77 2410.47 1426.51 2358.96L1772.53 1849.28L382.6 1396.75L1774.75 936.42L3181.9 1393.59L1772.53 1849.28L2000.8 2440.16C2065.1 2535.9 2196 2454.99 2319.7 2412.52L3181.4 2131.99C3257.67 2117.66 3382.83 2074.44 3456.87 2047.33C3499.61 2031.69 3557.51 2021.54 3552.72 1956.75C3550.6 1928.11 3501.19 1860.53 3484.73 1838.3L3188.18 1393.59C3235.39 1288.39 3516.12 941.74 3508.18 875.85C3501.9 823.69 3457.08 818.67 3411.13 802.94L2198.36 425.41C2133.97 408.17 2081.02 491.95 2039.84 549.55L1774.75 936.42C1757.76 924.48 1442.95 457.84 1419.94 422.73C1387.36 379.2 1339.78 407.92 1302.51 421.63Z" fill={color} />
      <path d="M1302.51 421.63C1286.5 425.54 185.93 790.27 108.62 815.97C49.9 837.57 40.86 859.47 74.32 921.91L382.6 1396.75L52.98 1861.23C28.91 1897.19 -37.1 1969.45 27.69 2015.69C128.2 2087.42 1062.04 2348.02 1221.24 2395.6C1303.38 2414.51 1369.77 2410.47 1426.51 2358.96L1772.53 1849.28L382.6 1396.75L1774.75 936.42L3181.9 1393.59L1772.53 1849.28L2000.8 2440.16C2065.1 2535.9 2196 2454.99 2319.7 2412.52L3181.4 2131.99C3257.67 2117.66 3382.83 2074.44 3456.87 2047.33C3499.61 2031.69 3557.51 2021.54 3552.72 1956.75C3550.6 1928.11 3501.19 1860.53 3484.73 1838.3L3188.18 1393.59C3235.39 1288.39 3516.12 941.74 3508.18 875.85C3501.9 823.69 3457.08 818.67 3411.13 802.94L2198.36 425.41C2133.97 408.17 2081.02 491.95 2039.84 549.55L1774.75 936.42C1757.76 924.48 1442.95 457.84 1419.94 422.73C1387.36 379.2 1339.78 407.92 1302.51 421.63Z" fill="url(#EmptyBox_box_flap_grad)" />
    </g>
  </g>

  
  <g id="EmptyBox_dotted_question_mark">
    
    <path className="esvigy-sparkle" d="M1420 180 C1420 196 1436 206 1452 206 C1436 206 1420 216 1420 232 C1420 216 1404 206 1388 206 C1404 206 1420 196 1420 180 Z" fill={color} opacity="0.75" />
    <path className="esvigy-sparkle" d="M2190 520 C2190 534 2204 542 2218 542 C2204 542 2190 550 2190 564 C2190 550 2176 542 2162 542 C2176 542 2190 534 2190 520 Z" fill={color} opacity="0.65" />

    
    <g className="esvigy-qm-dot-1">
      <path d="M1435.51 134.86c-6.47,41.24 31.54,124.73 128.62,39.41 63.35,-55.69 136.89,-29.2 155.43,-97.74 15.23,-56.34 -32.2,-100.09 -138.08,-62.5 -39.45,14.01 -136.34,59.48 -145.97,120.83z" fill={color} />
    </g>

    
    <g className="esvigy-qm-dot-2">
      <path d="M1800.1 81.08c-11.85,69.2 75.34,81.69 123.61,134.5 23.07,25.24 35.37,50.64 76.8,50.49 25.17,-0.08 56.27,-19.15 62.48,-56.78 14.03,-84.94 -238.56,-270.28 -262.89,-128.21z" fill={color} />
    </g>

    
    <g className="esvigy-qm-dot-3">
      <path d="M2008.54 396.19c-1.27,15.93 -12.97,179.13 -11.93,185.65 9.6,60.42 108.57,87.38 133.61,-10.63 9.54,-37.38 13.99,-153.89 6.59,-182.05 -15.36,-58.44 -121.49,-77.4 -128.27,7.03z" fill={color} />
    </g>

    
    <g className="esvigy-qm-dot-4">
      <path d="M1926.37 775.93c-25.25,60.92 -80.05,124.04 -44.02,169.65 91.08,115.32 213.02,-166.25 172.04,-215.82 -52.63,-63.65 -103.19,-13.69 -128.02,46.17z" fill={color} />
    </g>

    
    <g className="esvigy-qm-dot-5">
      <path d="M1727.29 1165.16c-17.31,50.97 -40.34,111.06 35.94,127.63 64.75,14.07 78.85,-61.93 100.55,-113.15 22.05,-52.02 33.05,-109.11 -33.21,-123.66 -59.11,-12.98 -83.98,52.35 -103.28,109.18z" fill={color} />
    </g>

    
    <g className="esvigy-qm-dot-6">
      <path d="M1648.51 1371.91c-45.7,183.01 94.77,208.04 121.78,118.83 6.22,-20.56 8.49,-116.09 -5.07,-136.68 -31.55,-47.95 -102.45,-39.29 -116.71,17.85z" fill={color} />
    </g>
  </g>
    </svg>
  );
};
