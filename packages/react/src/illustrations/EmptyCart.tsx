/**
 * Author: nick
 * Source: https://github.com/nickfrostech
 *
 * Generated automatically by @memy/react generator.
 * Source: packages/svg/src/EmptyCart.svg
 */

import type { MemyProps } from "../types";

export const EmptyCart = ({
  color = "currentColor",
  secondaryColor = "transparent",
  animated = false,
  className = "",
  style,
  ...props
}: MemyProps) => {
  return (
    <svg
      viewBox="0 0 465 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={["memy-svg", animated ? "memy-animated" : "", className].filter(Boolean).join(" ")}
      data-animated={animated ? "true" : undefined}
      data-author="nick"
      data-source="https://github.com/nickfrostech"
      style={{
        display: "block",
        ...style,
      }}
      role="img"
      aria-label="EmptyCart illustration"
      {...props}
    >
      {animated && (
        <style>
          {`
@keyframes memy-cart-rock {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-6px) rotate(-1.5deg); }
    }
    @keyframes memy-cart-bubble {
      0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
      50% { transform: translateY(-12px) rotate(3deg) scale(1.04); }
    }
    @keyframes memy-cart-sparkle {
      0%, 100% { transform: translateY(0px) scale(0.85); opacity: 0.35; }
      50% { transform: translateY(-8px) scale(1.15); opacity: 0.9; }
    }
    @keyframes memy-wheel-roll {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(28deg); }
    }
    @keyframes memy-ground-shadow {
      0%, 100% { transform: scaleX(1); opacity: 0.28; }
      50% { transform: scaleX(0.88); opacity: 0.14; }
    }

    svg.memy-animated .memy-cart-main,
    svg[data-animated="true"] .memy-cart-main {
      transform-box: fill-box;
      transform-origin: bottom center;
      animation: memy-cart-rock 3.6s ease-in-out infinite;
    }

    svg.memy-animated .memy-bubble-float,
    svg[data-animated="true"] .memy-bubble-float {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-cart-bubble 3.2s ease-in-out infinite;
    }

    svg.memy-animated .memy-sparkle-1,
    svg[data-animated="true"] .memy-sparkle-1 {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-cart-sparkle 2.8s ease-in-out infinite;
    }

    svg.memy-animated .memy-sparkle-2,
    svg[data-animated="true"] .memy-sparkle-2 {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-cart-sparkle 2.8s ease-in-out 1.2s infinite;
    }

    svg.memy-animated .memy-wheel-front,
    svg[data-animated="true"] .memy-wheel-front {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-wheel-roll 3.6s ease-in-out infinite;
    }

    svg.memy-animated .memy-cart-shadow,
    svg[data-animated="true"] .memy-cart-shadow {
      transform-box: fill-box;
      transform-origin: center;
      animation: memy-ground-shadow 3.6s ease-in-out infinite;
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
      
  <ellipse className="memy-cart-shadow" cx="295" cy="402" rx="145" ry="4" fill="#000000" opacity="0.28"/>

  
  <g className="memy-cart-main">

    
    <ellipse cx="280" cy="155" rx="125" ry="75" fill={secondaryColor !== "transparent" ? secondaryColor : color} opacity="0.1" data-memy-secondary="true"/>

    
    <g className="memy-empty-placeholder" opacity="0.55">
      <rect x="235" y="160" width="115" height="74" rx="10" fill={secondaryColor !== "transparent" ? secondaryColor : color} opacity="0.08" data-memy-secondary="true"/>
      <rect x="235" y="160" width="115" height="74" rx="10" fill="none" stroke={color} strokeWidth="2.5" strokeDasharray="6 6" opacity="0.45"/>
      
      <line x1="292.5" y1="189" x2="292.5" y2="205" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="284.5" y1="197" x2="300.5" y2="197" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </g>

    
    <g className="memy-bubble-float">
      
      <circle cx="285" cy="92" r="42" fill={secondaryColor !== "transparent" ? secondaryColor : color} opacity="0.12" data-memy-secondary="true"/>
      
      <path d="M285 54C260.699 54 241 71.9086 241 94C241 103.882 245.039 112.924 251.844 119.824L247 136L264.444 130.347C270.835 132.694 277.747 134 285 134C309.301 134 329 116.091 329 94C329 71.9086 309.301 54 285 54Z" fill={secondaryColor !== "transparent" ? secondaryColor : "#1e293b"} data-memy-secondary="true" data-memy-default="#1e293b"/>
      
      <path d="M285 54C260.699 54 241 71.9086 241 94C241 103.882 245.039 112.924 251.844 119.824L247 136L264.444 130.347C270.835 132.694 277.747 134 285 134C309.301 134 329 116.091 329 94C329 71.9086 309.301 54 285 54Z" stroke={color} strokeWidth="3" strokeLinejoin="round"/>
      
      <path d="M281.2 82C281.2 75.8 285.5 72 291 72C296.2 72 300 75.5 300 80.2C300 84.8 296.8 87.5 293.4 90.2C290.1 92.8 288.6 95.2 288.6 98.8V101" stroke={color} strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="288.6" cy="111" r="3.2" fill={color}/>
    </g>

    
    <g className="memy-sparkle-1">
      <path d="M178 92L182 104L194 108L182 112L178 124L174 112L162 108L174 104Z" fill={color}/>
    </g>
    <g className="memy-sparkle-2">
      <path d="M388 64L391 73L400 76L391 79L388 88L385 79L376 76L385 73Z" fill={color}/>
    </g>

    
    <path fillRule="evenodd" clipRule="evenodd" d="M372.947 42.5H460.372L452.029 111.5H364.584L372.947 42.5ZM370.933 42.5H276V111.5H362.569L370.933 42.5ZM274 42.5H179.067L187.431 111.5H274V42.5ZM177.053 42.5H88V40.5H462.628L438.386 241H121.5V239H200.871L193.477 178H110V176H193.235L185.659 113.5H100.5V111.5H185.416L177.053 42.5ZM202.886 239H274V178H195.492L202.886 239ZM276 239H347.114L354.508 178H276V239ZM349.129 239H436.614L443.989 178H356.523L349.129 239ZM444.231 176L451.787 113.5H364.341L356.765 176H444.231ZM195.249 176L187.673 113.5H274V176H195.249ZM276 176H354.751L362.327 113.5H276V176Z" fill={color} opacity="0.85"/>

    
    <path fillRule="evenodd" clipRule="evenodd" d="M19 13.5C19 11.8431 20.3431 10.5 22 10.5H49.1674C70.1626 10.5 88.0882 25.6617 91.5715 46.366L132.442 289.298C136.249 311.928 155.842 328.5 178.791 328.5H421C422.657 328.5 424 329.843 424 331.5C424 333.157 422.657 334.5 421 334.5H178.791C152.913 334.5 130.819 315.812 126.525 290.293L85.6546 47.3614C82.6574 29.5461 67.2331 16.5 49.1674 16.5H22C20.3431 16.5 19 15.1569 19 13.5Z" fill={color}/>

    
    <circle cx="13" cy="13" r="13" fill={color}/>
    <circle cx="13" cy="13" r="7" fill="#ffffff" opacity="0.3"/>

    
    <path d="M355 331H392L382.366 371.463C382.151 372.364 381.346 373 380.42 373H366.58C365.654 373 364.849 372.364 364.634 371.463L355 331Z" fill="#1F2A37"/>
    <path d="M183 331H220L210.366 371.463C210.151 372.364 209.346 373 208.42 373H194.58C193.654 373 192.849 372.364 192.634 371.463L183 331Z" fill="#1F2A37"/>

    
    <circle cx="373" cy="378" r="7" fill="#1F2A37"/>
    <circle cx="373" cy="378" r="3" fill="#ffffff" opacity="0.5"/>

    
    <g className="memy-wheel-front">
      <circle cx="201" cy="378" r="28" fill="#1e293b"/>
      <circle cx="201" cy="378" r="15" fill="#334155"/>
      <circle cx="201" cy="378" r="6" fill={color}/>
      <line x1="201" y1="354" x2="201" y2="402" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <line x1="177" y1="378" x2="225" y2="378" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </g>

    
    <rect x="338" y="385" width="72" height="19" rx="2" fill="#1e293b"/>
  </g>
    </svg>
  );
};
