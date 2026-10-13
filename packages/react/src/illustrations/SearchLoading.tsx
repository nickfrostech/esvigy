/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @esvigy/react generator.
 * Source: packages/svg/src/SearchLoading.svg
 */

import type { EsvigyProps } from "../types";

export const SearchLoading = ({
  color = "currentColor",
  secondaryColor = "transparent",
  animated = false,
  className = "",
  style,
  ...props
}: EsvigyProps) => {
  return (
    <svg
      viewBox="185 -25 3255 3390"
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
      aria-label="SearchLoading illustration"
      {...props}
    >
      {animated && (
        <style>
          {`
@keyframes esvigy-search-scan {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(-36px, -28px) rotate(-2.2deg); }
      50% { transform: translate(24px, -44px) rotate(1.8deg); }
      75% { transform: translate(32px, 18px) rotate(2.8deg); }
    }
    @keyframes esvigy-searching-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes esvigy-cards-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes esvigy-shadow-pulse {
      0%, 100% { transform: scale(1); opacity: 0.22; }
      50% { transform: scale(0.93); opacity: 0.12; }
    }
    @keyframes esvigy-lens-glint {
      0%, 100% { opacity: 0.35; }
      50% { opacity: 0.75; }
    }

    svg.esvigy-animated .esvigy-search-glass,
    svg[data-animated="true"] .esvigy-search-glass {
      transform-box: fill-box;
      transform-origin: center;
      animation: esvigy-search-scan 5.2s ease-in-out infinite;
    }

    svg.esvigy-animated .esvigy-searching-spinner,
    svg[data-animated="true"] .esvigy-searching-spinner {
      transform-origin: 1840px 1630px;
      animation: esvigy-searching-spin 1.8s linear infinite;
    }

    svg.esvigy-animated .esvigy-cards-group,
    svg[data-animated="true"] .esvigy-cards-group {
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

    svg.esvigy-animated .esvigy-lens-glint,
    svg[data-animated="true"] .esvigy-lens-glint {
      animation: esvigy-lens-glint 3.2s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      svg.esvigy-animated .esvigy-search-glass,
      svg.esvigy-animated .esvigy-searching-spinner,
      svg.esvigy-animated .esvigy-cards-group,
      svg.esvigy-animated .esvigy-ground-shadow,
      svg.esvigy-animated .esvigy-lens-glint,
      svg[data-animated="true"] .esvigy-search-glass,
      svg[data-animated="true"] .esvigy-searching-spinner,
      svg[data-animated="true"] .esvigy-cards-group,
      svg[data-animated="true"] .esvigy-ground-shadow,
      svg[data-animated="true"] .esvigy-lens-glint {
        animation: none !important;
      }
    }
          `}
        </style>
      )}
      <defs>
    
    <radialGradient id="SearchLoading_searching_ground_grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#111928" stopOpacity="0.25" />
      <stop offset="60%" stopColor="#111928" stopOpacity="0.1" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0" />
    </radialGradient>

    
    <linearGradient id="SearchLoading_card_surface_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="0.16" />
      <stop offset="50%" stopColor="white" stopOpacity="0.03" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0.22" />
    </linearGradient>

    
    <linearGradient id="SearchLoading_lens_rim_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="0.25" />
      <stop offset="50%" stopColor="white" stopOpacity="0.0" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0.35" />
    </linearGradient>

    
    <linearGradient id="SearchLoading_handle_shadow_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="0.2" />
      <stop offset="100%" stopColor="#111928" stopOpacity="0.4" />
    </linearGradient>

    
    <linearGradient id="SearchLoading_searching_spinner_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="1" />
      <stop offset="100%" stopColor="#F3F4F6" stopOpacity="0.9" />
    </linearGradient>
  </defs>

  
  <path id="SearchLoading_background_element" d="M1811.77 0c884.89 0 1602.23 717.34 1602.23 1602.23 0 884.88 -717.34 1602.22 -1602.23 1602.22 -884.88 0 -1602.22 -717.34 -1602.22 -1602.22 0 -884.89 717.34 -1602.23 1602.22 -1602.23z" fill={color} opacity="0.07" />

  
  <ellipse className="esvigy-ground-shadow" cx="1850" cy="3240" rx="1280" ry="100" fill="url(#SearchLoading_searching_ground_grad)" />

  
  <g className="esvigy-cards-group">
    
    <g id="SearchLoading_tops_stack_group">
      <rect id="SearchLoading_tops_stack" x="849.19" y="509.23" width="1925.16" height="2185.99" rx="285.67" ry="285.67" fill={secondaryColor !== "transparent" ? secondaryColor : "#1E293B"} data-esvigy-secondary="true" data-esvigy-default="#1E293B" />
      <rect x="849.19" y="509.23" width="1925.16" height="2185.99" rx="285.67" ry="285.67" fill="url(#SearchLoading_card_surface_grad)" />
      <rect x="849.19" y="509.23" width="1925.16" height="2185.99" rx="285.67" ry="285.67" stroke={color} strokeWidth="12" opacity="0.18" />

      
      <g opacity="0.18">
        <rect x="1150" y="860" width="1320" height="42" rx="21" fill={color} />
        <rect x="1150" y="970" width="880" height="34" rx="17" fill={color} />
        <rect x="1150" y="1080" width="1120" height="34" rx="17" fill={color} />
      </g>
    </g>
  </g>

  
  <g id="SearchLoading_magnifying_glass_assembly" className="esvigy-search-glass">
    
    <circle cx="1840" cy="1630" r="645" fill={color} opacity="0.06" />

    
    <path id="SearchLoading_glass_rim" fillRule="evenodd" clipRule="evenodd" d="M2316.85 2309.98c8.24 -33.63 -10.65 -4.11 45.98 -52.54 18.47 -15.78 33.63 -24.05 45.29 -44.81l19.91 5.56c-3.74 -12.76 -2.06 -5.75 -0.07 -13.51 3.7 -14.43 52.57 -65.73 76.11 -96.97 16.31 -21.64 22.77 -36.54 38.07 -58.75 130.88 -189.93 146.32 -500.75 56.62 -724.63 -39.44 -98.43 -93.31 -170.71 -153.14 -241.58 -106.41 -126.04 -307.38 -245.36 -523.58 -264.34 -256 -22.47 -458.51 64.8 -605.84 185.66 -304.46 249.77 -412.23 762.79 -122.11 1123.33 126.96 157.78 278.21 263.28 485.62 304.17 198.12 39.05 397.65 2.14 569.32 -93.96 21.61 -12.09 42.36 -34.99 67.82 -27.63zm-559.95 -1319.64c-181.66 40.24 -286.43 81.54 -413.74 228.43 -92.73 106.95 -171.07 303.39 -141.41 497.95 13.34 87.49 43.63 179.4 83.86 241.4 400.05 616.27 1273.17 260.17 1194.64 -411.79 -13.72 -117.45 -74.04 -251.36 -149.79 -335.48 -12.77 -14.18 -26.98 -28.9 -37.59 -40.11 -62.02 -65.64 -160.53 -123.11 -254.26 -153.21 -69.18 -22.2 -197.88 -45.77 -281.71 -27.19z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M2316.85 2309.98c8.24 -33.63 -10.65 -4.11 45.98 -52.54 18.47 -15.78 33.63 -24.05 45.29 -44.81l19.91 5.56c-3.74 -12.76 -2.06 -5.75 -0.07 -13.51 3.7 -14.43 52.57 -65.73 76.11 -96.97 16.31 -21.64 22.77 -36.54 38.07 -58.75 130.88 -189.93 146.32 -500.75 56.62 -724.63 -39.44 -98.43 -93.31 -170.71 -153.14 -241.58 -106.41 -126.04 -307.38 -245.36 -523.58 -264.34 -256 -22.47 -458.51 64.8 -605.84 185.66 -304.46 249.77 -412.23 762.79 -122.11 1123.33 126.96 157.78 278.21 263.28 485.62 304.17 198.12 39.05 397.65 2.14 569.32 -93.96 21.61 -12.09 42.36 -34.99 67.82 -27.63zm-559.95 -1319.64c-181.66 40.24 -286.43 81.54 -413.74 228.43 -92.73 106.95 -171.07 303.39 -141.41 497.95 13.34 87.49 43.63 179.4 83.86 241.4 400.05 616.27 1273.17 260.17 1194.64 -411.79 -13.72 -117.45 -74.04 -251.36 -149.79 -335.48 -12.77 -14.18 -26.98 -28.9 -37.59 -40.11 -62.02 -65.64 -160.53 -123.11 -254.26 -153.21 -69.18 -22.2 -197.88 -45.77 -281.71 -27.19z" fill="url(#SearchLoading_lens_rim_grad)" />

    
    <path id="SearchLoading_glass_handle" d="M2532.45 2340.28l-83.28 74.68c-8.51 6.9 -6.79 5.55 -14.56 12.17l-11.69 10.05c-40.51 32.09 -66.74 51.53 -21.78 106.7l421.65 503.31c21.86 26.76 60.24 78.88 99.45 89.03 70.59 18.26 138.63 -44.48 183.18 -90.91 76.13 -79.32 -6.81 -159.47 -31.71 -190.66 -55.45 -69.47 -108.36 -131.1 -170.49 -204.57l-254.68 -301.82c-65.57 -77.73 -74.95 -22.05 -116.09 -7.98z" fill={color} />
    <path d="M2532.45 2340.28l-83.28 74.68c-8.51 6.9 -6.79 5.55 -14.56 12.17l-11.69 10.05c-40.51 32.09 -66.74 51.53 -21.78 106.7l421.65 503.31c21.86 26.76 60.24 78.88 99.45 89.03 70.59 18.26 138.63 -44.48 183.18 -90.91 76.13 -79.32 -6.81 -159.47 -31.71 -190.66 -55.45 -69.47 -108.36 -131.1 -170.49 -204.57l-254.68 -301.82c-65.57 -77.73 -74.95 -22.05 -116.09 -7.98z" fill="url(#SearchLoading_handle_shadow_grad)" />

    
    <path id="SearchLoading_handle_collar" d="M2350.77 2350.17c24.64 21.41 60.26 58.38 72.15 87.01l11.69 -10.05c7.77 -6.62 6.05 -5.27 14.56 -12.17l83.28 -74.68c-30.29 -15.49 -51.42 -56.44 -72.42 -80.63 -8.42 30.53 -25.18 38.01 -46.63 55.11 -22.47 17.9 -29.6 30.38 -62.63 35.41z" fill={secondaryColor !== "transparent" ? secondaryColor : "#38BDF8"} data-esvigy-secondary="true" data-esvigy-default="#38BDF8" opacity="0.9" />
    <path id="SearchLoading_handle_ferrule" d="M2316.86 2309.98c9.18 4.8 29.63 26.13 33.61 40.24 33.03 -5.03 40.76 -17.79 63.22 -35.69 21.46 -17.1 37.93 -24.35 46.35 -54.89 -11.66 -6.06 -10.22 -9.76 -18.58 -19.19 -12.04 -13.57 -10.79 -8.51 -13.83 -23.64l-21.61 -6.82c-11.66 20.77 -26.82 29.04 -45.29 44.83 -56.63 48.42 -35.64 21.53 -43.87 55.16z" fill={color} opacity="0.85" />
    <path id="SearchLoading_handle_grip_stripe" d="M2578.42 2409.22c-21.14 22.45 42.74 76.62 83.46 126.25 36.14 44.04 73.38 82.15 109.17 123.79l161.52 187.6c12.06 13.29 39.19 64.32 64.58 38.84 21.03 -21.09 -17.13 -49.68 -30.68 -66.08l-325.02 -373.62c-10.98 -12.81 -24.16 -39.99 -41.24 -43.4 -28.79 -5.74 -17.15 1.7 -21.79 6.62z" fill="white" opacity="0.3" />

    
    <g className="esvigy-spinner-assembly">
      
      <circle cx="1840" cy="1656" r="340" stroke="#111928" strokeWidth="62" strokeLinecap="round" strokeDasharray="680 390" opacity="0.25" fill="none" />
      
      <circle className="esvigy-searching-spinner" cx="1840" cy="1630" r="340" stroke="url(#SearchLoading_searching_spinner_grad)" strokeWidth="62" strokeLinecap="round" strokeDasharray="680 390" fill="none" />
      
      <circle className="esvigy-searching-spinner" cx="1840" cy="1630" r="308" stroke="white" strokeWidth="9" strokeLinecap="round" strokeDasharray="540 530" opacity="0.4" fill="none" />
      
      <circle cx="1840" cy="1640" r="36" fill="#111928" opacity="0.2" />
      <circle cx="1840" cy="1630" r="36" fill="url(#SearchLoading_searching_spinner_grad)" />
    </g>

    
    <path className="esvigy-lens-glint" d="M2133.28 938.59c-6.19 -32.66 -44.4 -36.72 -106.04 -52.1 -135.74 -33.88 -291.7 -30.16 -420.1 13.17 -81.99 27.68 -140.72 58.47 -207.25 104.54 -34.3 23.74 -155.43 121.5 -161.18 157.12 -11.5 71.28 85.12 -61.7 150.05 -110.66 193.52 -145.92 443.86 -194.06 677.84 -119.06l44.52 13.77c1.91 -0.03 3.73 -0.21 5.58 -0.46l11.07 -3.67c1.49 -0.47 3.85 -1.45 5.51 -2.65z" fill="white" opacity="0.5" />
    <path className="esvigy-lens-glint" d="M1132.6 1366.9c35.21 -2.14 32.28 -28.36 49.53 -62.65 10.41 -20.69 33.43 -54.37 32.42 -77.52 -26.45 -9.32 -25.15 -3.46 -36.49 14.47 -19.65 31.05 -53.3 97.14 -45.46 125.7z" fill="white" opacity="0.35" />
  </g>
    </svg>
  );
};
